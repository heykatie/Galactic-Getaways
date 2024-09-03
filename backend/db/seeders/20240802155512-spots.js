'use strict';

const { Spot } = require('../models');
const spots = [
	{
		address: '123 Galactic Federation Ave',
		city: 'Earth C-137',
		state: 'Multiverse',
		country: 'Dimension C-137',
		lat: 34.0522,
		lng: -118.2437,
		name: "Rick's Garage Hideaway",
		description:
			"Discover the enigmatic charm of Rick's Garage Hideaway, nestled in the heart of Rick Sanchez's infamous garage. This unique location is not just a spot to rest but a portal to countless interdimensional adventures. The garage, renowned for its eclectic mix of scientific gadgets and mysterious contraptions, offers an unparalleled experience for those with a taste for the extraordinary. Whether you're a mad scientist looking to work on your latest experiment or an intrepid explorer seeking to unlock the secrets of the multiverse, this hideaway provides the perfect environment. The surroundings are a marvel in themselves, featuring a blend of advanced technology and quirky, otherworldly artifacts.",
		price: 250.0,
		ownerId: 1,
	},
	{
		address: '301 Nimbus St',
		city: 'New New York',
		state: 'Earth',
		country: 'Planet Express HQ',
		lat: 40.7306,
		lng: -73.9352,
		name: 'Planet Express Office Suite',
		description:
			"Experience life at the heart of interplanetary logistics with a stay at the Planet Express Office Suite. Located in the bustling hub of New New York, this accommodation offers an exclusive opportunity to immerse yourself in the daily operations of one of the galaxy's most renowned delivery services. The suite boasts unique, panoramic views of the New New York skyline, where you can observe the dynamic, futuristic cityscape as it bustles with activity. The Planet Express headquarters is not only a center of commerce but also a fascinating venue where the boundaries of space and time are seamlessly traversed. Enjoy the thrill of occasional interplanetary deliveries and the chance to meet some of the galaxy's most intriguing characters.",
		price: 300.0,
		ownerId: 2,
	},
	{
		address: '456 Citadel Blvd',
		city: 'The Citadel',
		state: 'Multiverse',
		country: 'Interdimensional Hub',
		lat: 35.6895,
		lng: 139.6917,
		name: 'Council of Ricks Penthouse',
		description:
			"Step into the lap of luxury with a stay at the Council of Ricks Penthouse, located within the esteemed Citadel of Ricks. This penthouse offers a rare opportunity to experience top-tier security and unparalleled access to the multiverse's most fascinating portals. Designed with the utmost in comfort and sophistication, the penthouse provides a sanctuary amidst the bustling interdimensional hub. Guests can enjoy sweeping views of the Citadel's sprawling architecture, which is a marvel of both engineering and design.",
		price: 500.0,
		ownerId: 3,
	},
	{
		address: '202 Slurm Factory Rd',
		city: 'Wormulon',
		state: 'Planet Slurm',
		country: 'Slurmverse',
		lat: -23.5505,
		lng: -46.6333,
		name: "Slurm Queen's Bungalow",
		description:
			"Immerse yourself in the vibrant atmosphere of Wormulon with a stay at the Slurm Queen's Bungalow, situated near the iconic Slurm Factory. This lively accommodation captures the essence of intergalactic nightlife and the famed beverage that has captivated millions across the universe. The bungalow is perfectly located for fans of Slurm, offering a front-row seat to the production and excitement surrounding this beloved drink.",
		price: 180.0,
		ownerId: 4,
	},
	{
		address: '789 Old Robot St',
		city: 'Robot Hell',
		state: 'New Jersey',
		country: 'Earth',
		lat: 40.7128,
		lng: -74.006,
		name: "The Devil's Dancefloor Suite",
		description:
			"Venture into the heart of Robot Hell with a stay at The Devil's Dancefloor Suite. This unique accommodation is designed for thrill-seekers and those who revel in a vibrant, energetic environment. Located in the electrifying locale of Robot Hell, the suite offers a blend of excitement and a touch of the sinister, perfect for those who enjoy a good party with an edge. The suite itself is a lively space, reflecting the dynamic and often chaotic nature of its surroundings.",
		price: 350.0,
		ownerId: 5,
	},
	{
		address: '123 Galactic Federation Ave',
		city: 'Earth C-137',
		state: 'Multiverse',
		country: 'Dimension C-137',
		lat: 34.0522,
		lng: -118.2437,
		name: "Rick's Garage Hideaway",
		description:
			"Escape to the serene beauty of Alpha Centauri with a stay at the Stargazer Retreat. This tranquil accommodation offers a perfect setting for stargazing and relaxation, surrounded by the breathtaking vistas of the Proxima Centauri System. The retreat is designed to provide guests with a peaceful and contemplative environment, ideal for those looking to unwind and connect with the cosmos. Enjoy uninterrupted views of the star-studded sky and the calming ambiance of this remote location.",
		price: 250.0,
		ownerId: 1,
	},
	{
		address: '301 Nimbus St',
		city: 'New New York',
		state: 'Earth',
		country: 'Planet Express HQ',
		lat: 40.7306,
		lng: -73.9352,
		name: 'Planet Express Office Suite',
		description:
			"Embark on an extraordinary journey through the galaxy with a stay on the Cosmic Cruiser, a luxurious spaceship that offers unparalleled space travel experiences. As you navigate the vast expanse of the Andromeda Galaxy, you'll enjoy the ultimate in comfort and style. The Cosmic Cruiser is equipped with state-of-the-art technology and amenities, ensuring that your interstellar journey is as enjoyable as it is exciting.",
		price: 300.0,
		ownerId: 2,
	},
	{
		address: '456 Citadel Blvd',
		city: 'The Centauri',
		state: 'Multiverse',
		country: 'Interdimensional Hub',
		lat: 35.6895,
		lng: 139.6917,
		name: 'Council of Ricks Penthouse',
		description:
			'A luxurious penthouse in the Citadel of Ricks. Enjoy top-tier security and easy access to multiverse portals.',
		price: 500.0,
		ownerId: 3,
	},
	{
		address: '202 Slurm Factory Rd',
		city: 'Wormulon',
		state: 'Planet Slurm',
		country: 'Slurmverse',
		lat: -23.5505,
		lng: -46.6333,
		name: "Slurm Queen's Bungalow",
		description:
			'A lively accommodation near the Slurm Factory. Perfect for fans of the iconic beverage and intergalactic nightlife.',
		price: 180.0,
		ownerId: 4,
	},
	{
		address: '789 Old Robot St',
		city: 'Robot Hell',
		state: 'New Jersey',
		country: 'Earth',
		lat: 40.7128,
		lng: -74.006,
		name: "The Devil's Dancefloor Suite",
		description:
			'Stay in the heart of Robot Hell, ideal for thrill-seekers and those who enjoy a good party... and a little bit of evil.',
		price: 350.0,
		ownerId: 5,
	},
	{
		address: '101 Interstellar Dr',
		city: 'Alpha',
		state: 'Proxima System',
		country: 'Outer Space',
		lat: -60.0522,
		lng: 120.2437,
		name: 'Stargazer Retreat',
		description:
			'A serene retreat on Alpha Centauri, perfect for stargazing and relaxation.',
		price: 400.0,
		ownerId: 1,
	},
	{
		address: '505 Galactic Highway',
		city: 'Andromeda Galaxy',
		state: 'M31',
		country: 'The Local Group',
		lat: 41.7306,
		lng: -72.9352,
		name: 'Cosmic Cruiser',
		description:
			'A luxurious spaceship that can take you anywhere in the galaxy. Enjoy the ultimate in space travel.',
		price: 1000.0,
		ownerId: 2,
	},
	{
		address: '808 Nebula Lane',
		city: 'Orion Nebula',
		state: 'Messier 42',
		country: 'Milky Way',
		lat: -25.6895,
		lng: 138.6917,
		name: 'Nebula Oasis',
		description:
			'Retreat to the Nebula Oasis, a serene escape located in the heart of the Orion Nebula. This peaceful haven is surrounded by the stunning cosmic beauty of Messier 42, offering guests a unique opportunity to immerse themselves in the mesmerizing sights of the Milky Way. The Nebula Oasis is designed to provide a tranquil and rejuvenating experience, perfect for those seeking to escape the noise of more populated areas and enjoy the serene ambiance of space.',
		price: 350.0,
		ownerId: 3,
	},
	{
		address: '303 Universe',
		city: 'Quantum',
		state: 'Subatomic',
		country: 'Beyond Reality',
		lat: 0,
		lng: 0,
		name: 'Quantum Cottage',
		description:
			'A cozy cottage in the Quantum Realm, offering a unique and unforgettable experience.',
		price: 200.0,
		ownerId: 4,
	},
	{
		address: '909 Black Hole Blvd',
		city: 'Sagittarius A*',
		state: 'Galactic Center',
		country: 'Milky Way',
		lat: -28.5505,
		lng: -45.6333,
		name: 'Black Hole Bungalow',
		description:
			'A thrilling adventure awaits at this unique accommodation near the supermassive black hole at the center of the Milky Way.',
		price: 500.0,
		ownerId: 5,
	},
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await Spot.bulkCreate(spots, {validate: true});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await Spot.destroy({ where: {}, truncate: true });
  }
};
