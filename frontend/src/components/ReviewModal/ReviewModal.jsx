import { useState } from 'react';
import { useModal } from '../../context/Modal';
import { makeReview } from '../../store/reviews';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { GiCrackedAlienSkull } from 'react-icons/gi';

export default function ReviewModal({ spotId }) {
	const session = useSelector((state) => state.session);
	const [review, setReview] = useState('');
	const [stars, setStars] = useState(0);
	const [hoverStars, setHoverStars] = useState(0);
	const [valErrors, setValErrors] = useState({});
	const [submitted, setSubmitted] = useState(false);
	const { closeModal } = useModal();
	const dispatch = useDispatch();

	const validateForm = () => {
		const errors = {};
		if (review.length < 10)
			errors.review = 'Review must be at least 10 characters long';
		if (stars < 1 || stars > 5)
			errors.stars = 'Stars must be between 1 and 5';
		setValErrors(errors);
	};

	const handleReviewChange = (e) => {
		setReview(e.target.value);
		validateForm();
	};

	const handleStarClick = (newRating) => {
		setStars(newRating);
		validateForm();
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setSubmitted(true);
		validateForm();

		if (Object.keys(valErrors).length > 0) return;

		const newReview = { review, stars };
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
					onChange={handleReviewChange}
				/>
				<div className='rating-input'>
					{[...Array(5)].map((_, i) => (
						<span
							key={i}
							onMouseEnter={() => setHoverStars(i + 1)}
							onMouseLeave={() => setHoverStars(0)}
							onClick={() => handleStarClick(i + 1)}
							style={{ cursor: 'pointer' }}>
							<GiCrackedAlienSkull
								size={30}
								color={
									i + 1 <= (hoverStars || stars) ? '#f5a623' : '#ccc'
								}
							/>
						</span>
					))}
					<label> Stars</label>
				</div>

				<button
					className='review-button'
					disabled={Object.keys(valErrors).length > 0}
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
