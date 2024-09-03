import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSpotById } from '../../store/spots';
import { useEffect } from 'react';
// import NotFound from '../404';
// import Reviews from '../Reviews';
// import { GiAlienFire } from 'react-icons/gi';

export default function SpotDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const spots = useSelector(state => state.spots)
  const spot = spots[id];

  const images = spot?.SpotImages?.filter((image) => image.preview === false);

  const reviews = useSelector(state => state.reviews)

  useEffect(() => {
    dispatch(getSpotById(id));
  }, [dispatch, id]);

  if (!spot) return <h1>No longer available.</h1>;
  if (!images) return <h1>Loading...</h1>;

  return (
    <div>
      <div id='spot-info'>
        <h1>{spot.name}</h1>
        <p>{spot.city}, {spot.state}, {spot.country}</p>
      </div>
      <div id='images'>
        <div id='preview-img'>
          <img id='preview' src={spot.previewImage} alt={spot.description}/>
        </div>
      </div>
    </div>
	);
}
