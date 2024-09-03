import { Link } from 'react-router-dom';
import { GiAlienFire } from 'react-icons/gi';
import { GiAlienEgg } from 'react-icons/gi';

export default function SpotTile(props) {
	const { spot } = props;

	return (
		<Link to={`/spots/${spot.id}`} className='tiles'>
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
					<div className='rating'>
						{spot.avgRating ? (
							<>
								{spot.avgRating.toFixed(2)}
								<GiAlienFire
									style={{
										color: '#6a0dad',
										fontSize: '1rem',
									}}
								/>{' '}
							</>
						) : (
							' *New!* '
						)}{' '}
					</div>
				</div>
				<div className='price'>
					<span id='price'>
						{spot.price}
						<GiAlienEgg
							style={{
								color: 'teal',
								fontSize: '1rem',
							}}
						/>
					</span>
					<span id='night'>&nbsp;/night</span>
				</div>
			</div>
		</Link>
	);
}