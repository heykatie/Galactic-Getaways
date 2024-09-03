import { Link } from 'react-router-dom';

export default function SpotTile(props) {
	const { spot } = props;

	return (
		<Link to={`/${spot.id}`} className='tiles'>
			<div className='image-container'>
				<img
					className='tile-img'
					src={spot.previewImage}
					alt={spot.title}
				/>
				<div id='tooltip' className='tooltip'>
					{spot.name}
				</div>
			</div>
			<div className='spot-info'>
				<div className='row1'>
					<div className='location'>
						{spot.city}, {spot.state}
					</div>
					<div className='rating'>{spot.avgRating.toFixed(2)}</div>
				</div>
				<div className='price'>${spot.price}/night</div>
			</div>
		</Link>
	);
}
