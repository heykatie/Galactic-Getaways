import { useEffect, useState } from 'react';
import { useModal } from '../../context/Modal';
import { makeReview } from '../../store/reviews';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { GiCrackedAlienSkull } from 'react-icons/gi';

export default function ReviewModal({ spotId }) {
	const session = useSelector((state) => state.session);
	const [review, setReview] = useState('');
	const [stars, setStars] = useState(0); // The actual clicked stars
	const [hoverStars, setHoverStars] = useState(0); // To handle the hover state
	const [valErrors, setValErrors] = useState({});
	const [submitted, setSubmitted] = useState(false);
	const { closeModal } = useModal();
	const dispatch = useDispatch();

	useEffect(() => {
		const errors = {};
		if (review.length < 1) errors.review = 'Review must have text';
		if (stars < 1 || stars > 5)
			errors.stars = 'Stars must be between 1 and 5';
		setValErrors(errors);
	}, [review, stars]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setSubmitted(true);
		if (Object.values(valErrors).length) {
			return;
		}
		const newReview = {
			review,
			stars,
		};
		await dispatch(makeReview(session.user, spotId, newReview));
		closeModal();
	};

	return (
		<div className='review-modal'>
			<h2>How was your stay?</h2>
			<form id='review-form'>
				<textarea
					className='text'
					placeholder='Leave your review here...'
					name='review'
					value={review}
					onChange={(e) => setReview(e.target.value)}
				/>
				<div className='rating-input'>
					{/* Render 5 skulls */}
					{[...Array(5)].map((_, i) => (
						<span
							key={i}
							onMouseEnter={() => setHoverStars(i + 1)} // Set hover state
							onMouseLeave={() => setHoverStars(0)} // Reset hover state
							onClick={() => setStars(i + 1)} // Set the clicked stars
							style={{ cursor: 'pointer' }}>
							<GiCrackedAlienSkull
								size={30} // Adjust size as needed
								color={
									i + 1 <= (hoverStars || stars) ? '#f5a623' : '#ccc'
								} // Change color dynamically
							/>
						</span>
					))}
					<label> Stars</label>
				</div>

				<button
					className='review-button'
					disabled={review.length < 10 || stars < 1}
					onClick={handleSubmit}>
					Submit your Review
				</button>
				{submitted && valErrors.review && (
					<p className='errors'>{valErrors.review}</p>
				)}
				{submitted && valErrors.stars && (
					<p className='errors'>{valErrors.stars}</p>
				)}
			</form>
		</div>
	);
}
