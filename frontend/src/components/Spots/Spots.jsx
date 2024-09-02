// import './Spots.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllSpots } from '../../store/spots';
import SpotCard from './SpotCard';

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

			<div className='spots-tiles'>
				{spots?.map((spot) => (
        <SpotCard key={`${spot.id}`} spot={spot} spotId={spot.id}/>
        ))}
			</div>
		</div>
	);
}