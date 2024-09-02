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
			"A hidden gem located in Rick's infamous garage. Perfect for mad scientists and those seeking interdimensional adventures.",
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
			'Stay at the Planet Express headquarters! Enjoy unique views of the New New York skyline with occasional interplanetary deliveries.',
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
		ownerId: 1,
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
		ownerId: 2,
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
