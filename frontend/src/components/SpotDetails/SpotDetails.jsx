import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSpotById } from '../../store/spots';
import { useEffect } from 'react';
import { GiAlienFire } from 'react-icons/gi';
import { GiAlienEgg } from 'react-icons/gi';
import './SpotDetails.css';
// import NotFound from '../404';
// import Reviews from '../Reviews';
// import { GiAlienFire } from 'react-icons/gi';

export default function SpotDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const spots = useSelector(state => state.spots)
  const spot = spots[id];

  const images = spot?.SpotImages?.filter((image) => image.preview === false);

  // const reviews = useSelector(state => state.reviews)

  useEffect(() => {
    dispatch(getSpotById(id));
  }, [dispatch, id]);

  if (!spot) return <h1>No longer available.</h1>;
  if (!images) return <h1>Loading...</h1>;

  const reserve = (e) => {
    e.preventDefault();
    alert('Feature coming soon...');
  }

  return (
		<div className='spot-container'>
			<div id='spot-title'>
				<h1>{spot.name}</h1>
				<h3>
					{spot.city}, {spot.state}, {spot.country}
				</h3>
			</div>
			<div id='spot-images'>
				<div id='preview-img'>
					<img
						id='preview'
						src={spot.previewImage}
						alt={spot.description}
					/>
				</div>
				<div id='image-tiles'>
					{images?.map((image) => (
						<img
							className='images'
							key={image.id}
							src={image.url}
							alt={image.id}
						/>
					))}
				</div>
			</div>
			<div className='spot-details'>
				<div id='spot-info'>
					<span id='host'>
						Hosted by {spot?.Owner?.firstName} {spot?.Owner?.lastName}
					</span>
					<p>{spot.description}</p>
				</div>
				<div id='callout'>
					<div id='callout-top'>
						<div id='price'>
							{spot.price}
							<GiAlienEgg
								style={{
									color: 'teal',
									fontSize: '1rem',
								}}
							/>{' '}
							/night
						</div>
						<div id='rating-reviews'>
							{spot.avgStarRating && (
								<span id='rating'>
									<GiAlienFire
										style={{
											color: '#6a0dad',
											fontSize: '1rem',
										}}
									/>
									{spot.avgStarRating.toFixed(1)}
									&nbsp;
								</span>
							)}
							<span id='reviews'>
								{spot?.numReviews
									? spot?.numReviews === 1
										? ` • ${spot?.numReviews} review`
										: ` • ${spot?.numReviews} reviews`
									: '*New*'}
							</span>
						</div>
					</div>
					<div id='reserve-button'>
						<button id='reserve' onClick={reserve}>
							Reserve
						</button>
					</div>
				</div>
			</div>
		</div>
  );
}