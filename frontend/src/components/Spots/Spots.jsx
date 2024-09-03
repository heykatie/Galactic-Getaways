import './Spots.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllSpots } from '../../store/spots';
import SpotTile from './SpotTiles';

export default function Spots() {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.spots);
	let spots = Object.values(data);

	useEffect(() => {
		dispatch(getAllSpots());
	}, [dispatch]);

	return (
		<div className='spots-page'>
			<h1>Welcome to Galactic Getaways!</h1>

			<div className='spots-grid'>
				{spots?.map((spot) => (
					<SpotTile key={`${spot.id}`} spot={spot} />
				))}
			</div>
		</div>
	);
}
