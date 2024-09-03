import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
// import { selectInnById, getInnById } from '../../store/innsSlice';
// import { useEffect } from 'react';
// import NotFound from '../404';
// import Reviews from '../Reviews';
// import { GiAlienFire } from 'react-icons/gi';

export default function SpotDetails() {
  const spots = useSelector(state => state.spots)
  const reviews = useSelector(state => state.reviews)

	return (
		<div>
			<h1>hi</h1>
		</div>
	);
}
