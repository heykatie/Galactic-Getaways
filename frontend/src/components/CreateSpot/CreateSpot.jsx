import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSpotById, makeSpot, editSpot } from '../../store/spots';

export default function SpotForm({ newSpot }) {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { id } = useParams();
	const spot = useSelector((state) => state.spots[id] || {});

	const [formData, setFormData] = useState({
		country: spot.country || '',
		address: spot.address || '',
		city: spot.city || '',
		state: spot.state || '',
		lat: spot.lat || '',
		lng: spot.lng || '',
		description: spot.description || '',
		name: spot.name || '',
		price: spot.price || 0,
		prevImage: { preview: true, url: '' },
		images: [],
	});

	const [valErrors, setValErrors] = useState({});
	const [submitted, setSubmitted] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	useEffect(() => {
		if (newSpot) {
			setFormData({
				country: '',
				address: '',
				city: '',
				state: '',
				lat: '',
				lng: '',
				description: '',
				name: '',
				price: 0,
				prevImage: '',
			});
		}
	}, [newSpot]);

	useEffect(() => {
		if (spot) {
			setFormData((prevData) => ({ ...prevData, ...spot }));
		}
	}, [spot]);

	useEffect(() => {
		dispatch(getSpotById());
	}, [dispatch]);

	useEffect(() => {
		const errors = {};
		if (formData.country.trim() === '')
			errors.country = 'Country is required';
		if (formData.address.trim() === '')
			errors.address = 'Address is required';
		if (formData.city.trim() === '') errors.city = 'City is required';
		if (formData.state.trim() === '') errors.state = 'State is required';
		if (!formData.lat) errors.lat = 'Latitude is required';
		if (!formData.lng) errors.lng = 'Longitude is required';
		if (formData.lat < -90 || formData.lat > 90)
			errors.lat = 'Latitude must be between -90 and 90';
		if (formData.lng < -180 || formData.lng > 180)
			errors.lng = 'Longitude must be between -180 and 180';
		if (formData.description.length < 30)
			errors.description =
				'Description needs to be a minimum of 30 characters';
		if (formData.description.length > 1000)
			errors.description = 'Description must be less than 1000 characters';
		if (formData.name.trim() === '') errors.name = 'Name is required';
		if (formData.price < 0.01) errors.price = 'Price must be greater than $0';
    if (formData.images.length > 0) {
			formData.images.forEach((image, idx) => {
				if (image && !/\.(jpg|jpeg|png)$/.test(image)) {
					valErrors[`image${idx}`] =
						'Image URL must end in .png, .jpg, or .jpeg';
				}
			});
		}

		setValErrors(errors);
	}, [formData, newSpot, valErrors]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setSubmitted(true);
		if (Object.keys(valErrors).length) return;
		const newSpot = await dispatch(makeSpot(formData));
		navigate(`/${newSpot.id}`);
	};

	const handleUpdate = async (e) => {
		e.preventDefault();
		setSubmitted(true);
		if (Object.keys(valErrors).length) return;
		await dispatch(editSpot(id, formData));
		navigate(`/${id}`);
	};

	return (
		<div className='form-container'>
			<form
				className='new-spot-form'
				style={{ display: 'flex', flexDirection: 'column', width: 525 }}>
				{newSpot ? <h1>Create a new Spot</h1> : <h1>Update your Spot</h1>}
				<h2>Where&apos;s your place located? </h2>
				<p>
					Guests will only get your exact address once they booked a
					reservation.
				</p>
				<div>
					<label htmlFor='country'>Country</label>
					{submitted && valErrors.country && (
						<span className='errors'> {valErrors.country}</span>
					)}
				</div>
				<input
					value={formData.country}
					onChange={handleChange}
					placeholder='Country'
					type='text'
					name='country'
				/>
				<div>
					<label htmlFor='address'>Street Address</label>
					{submitted && valErrors.address && (
						<span className='errors'> {valErrors.address}</span>
					)}
				</div>
				<input
					value={formData.address}
					onChange={handleChange}
					placeholder='Address'
					type='text'
					name='address'
				/>
				<div className='city-state'>
					<div>
						<div>
							<label htmlFor='city'>City</label>
							{submitted && valErrors.city && (
								<span className='errors'> {valErrors.city}</span>
							)}
						</div>
						<input
							value={formData.city}
					onChange={handleChange}
							placeholder='City'
							type='text'
							name='city'
						/>
					</div>
					<div>
						<div>
							<label htmlFor='state'>State</label>
							{submitted && valErrors.state && (
								<span className='errors'> {valErrors.state}</span>
							)}
						</div>
						<input
							value={formData.state}
					onChange={handleChange}
							placeholder='State'
							type='text'
							name='state'
						/>
					</div>
				</div>
				<div className='lat-lng-container'>
					<div>
						<div>
							<label htmlFor='latitude'>Latitude</label>
							{submitted && valErrors.lat && (
								<span className='errors'> {valErrors.lat}</span>
							)}
						</div>
						<input
							className='lat-lng'
							value={formData.lat}
					onChange={handleChange}
							type='number'
							name='latitude'
						/>
					</div>
					<div>
						<div>
							<label htmlFor='longitude'>Longitude</label>
							{submitted && valErrors.lng && (
								<span className='errors'> {valErrors.lng}</span>
							)}
						</div>
						<input
							className='lat-lng'
							value={formData.lng}
					onChange={handleChange}
							type='number'
							name='longitude'
						/>
					</div>
				</div>
				<h3>Describe your place to guests</h3>
				<p>
					Mention the best features of your space, any special amenities
					like fast wifi or parking, and what you love about the
					neighborhood.
				</p>
				<textarea
					value={formData.description}
					onChange={handleChange}
					placeholder='Description'
					name='description'
					id=''></textarea>
				{submitted && valErrors.description ? (
					<div className='errors'>{valErrors.description}</div>
				) : (
					<div className='hide'>Validated</div>
				)}
				<h3>Create a title for your spot</h3>
				<p>
					Catch guests&apos; attention with a spot title that highlights
					what makes your place special.
				</p>
				<input
					value={formData.name}
					onChange={handleChange}
					placeholder='Name of your spot'
					type='text'
					name='name'
				/>
				{submitted && valErrors.name ? (
					<div className='errors'>{valErrors.name}</div>
				) : (
					<div className='hide'>Validated</div>
				)}
				<h3>Set a base price for your spot</h3>
				<p>
					Competitive pricing can help your listing stand out and rank
					higher in search results.
				</p>
				<label>
					$
					<input
						className='price-input'
						value={formData.price}
					onChange={handleChange}
						type='number'
						name='price'
						placeholder='Price per night (USD)'
					/>
				</label>
				{submitted && valErrors.price ? (
					<div className='errors'>{valErrors.price}</div>
				) : (
					<div className='hide'>Validated</div>
				)}
				<h3>Liven up your spot with photos</h3>
				<p>Submit a link to at least one photo to publish your spot</p>
				<input
					disabled={!newSpot}
					value={formData.prevImage}
					onChange={handleChange}
					type='text'
					name='preview'
					placeholder={
						newSpot ? 'Preview Image URL' : 'Feature Coming Soon'
					}
				/>
				{submitted && valErrors.prevImage ? (
					<div className='errors'>{valErrors.prevImage}</div>
				) : (
					<div className='hide'>Validated</div>
				)}
				<input
					type='text'
					name='image'
					placeholder='Feature Coming Soon'
					disabled={true}
				/>
				{<div className='hide'>Validated</div>}
				<input
					type='text'
					name='image'
					placeholder='Feature Coming Soon'
					disabled={true}
				/>
				{<div className='hide'>Validated</div>}
				<input
					type='text'
					name='image'
					placeholder='Feature Coming Soon'
					disabled={true}
				/>
				{<div className='hide'>Validated</div>}
				<button onClick={newSpot ? handleSubmit : handleUpdate}>
					{newSpot ? 'Create Spot' : 'Update Spot'}
				</button>
			</form>
		</div>
	);
}
