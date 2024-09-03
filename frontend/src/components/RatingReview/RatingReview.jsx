import { GiAlienFire } from 'react-icons/gi';

export default function RatingReview({spot}) {
	return (
		<div>
			<GiAlienFire
				style={{
					color: '#6a0dad',
				}}
			/>
			{spot.avgStarRating && (
				<span id='rating'>
					{spot.avgStarRating.toFixed(1)}
					&nbsp;
				</span>
			)}
			<span id='reviews'>
				{spot.numReviews
					? spot.numReviews === 1
						? ` • ${spot?.numReviews} review`
						: ` • ${spot?.numReviews} reviews`
					: '*New*'}
			</span>
		</div>
	);
}
