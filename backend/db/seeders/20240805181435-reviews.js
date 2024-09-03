'use strict';

/** @type {import('sequelize-cli').Migration} */

const {Review} = require('../models');
const reviews = [
	{
		userId: 1,
		spotId: 1,
		review:
			'Absolutely loved the garage hideaway! Felt like I was on an interdimensional adventure.',
		stars: 4.8,
	},
	{
		userId: 2,
		spotId: 1,
		review:
			"Unique spot, but too chaotic for my taste. Rick's experiments were a bit too much.",
		stars: 3.5,
	},
	{
		userId: 3,
		spotId: 3,
		review:
			'Fantastic views of New New York! The experience was unforgettable.',
		stars: 4.9,
	},
	{
		userId: 4,
		spotId: 4,
		review:
			'Enjoyed my stay at Planet Express, but the occasional delivery missions were distracting.',
		stars: 4.3,
	},
	{
		userId: 5,
		spotId: 5,
		review:
			'Luxurious penthouse with great amenities, but the Ricks were quite noisy.',
		stars: 4.1,
	},
	{
		userId: 1,
		spotId: 6,
		review:
			'Not a fan of the strict security measures, but the view was worth it.',
		stars: 3.7,
	},
	{
		userId: 2,
		spotId: 7,
		review:
			'Fun atmosphere near the Slurm Factory, but a bit too lively for my liking.',
		stars: 3.9,
	},
	{
		userId: 3,
		spotId: 8,
		review:
			'Perfect spot for party lovers! Had an amazing time at the Slurm Factory.',
		stars: 4.6,
	},
	{
		userId: 4,
		spotId: 9,
		review: 'Robot Hell is definitely an experience, but not for everyone.',
		stars: 2.8,
	},
	{
		userId: 5,
		spotId: 10,
		review: 'Great for thrill-seekers, but I found it a bit too extreme.',
		stars: 3.2,
	},
	{
		userId: 1,
		spotId: 11,
		review:
			"Interesting stay at Rick's garage, but the constant portal noises were annoying.",
		stars: 2.9,
	},
	{
		userId: 2,
		spotId: 12,
		review: 'Loved the quirky vibes of Planet Express HQ! Highly recommend.',
		stars: 4.7,
	},
	{
		userId: 3,
		spotId: 13,
		review:
			'The Citadel of Ricks is fascinating, but the constant political debates got tiring.',
		stars: 3.8,
	},
	{
		userId: 4,
		spotId: 14,
		review: 'Amazing place if you love Slurm, but beware of the sugar rush!',
		stars: 4.5,
	},
	{
		userId: 5,
		spotId: 15,
		review:
			"The Devil's Dancefloor Suite was wild, but a bit too devilish for me.",
		stars: 3.0,
	},
];

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
    await Review.bulkCreate(reviews, {validate: true});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    // await Review.destroy({where: {}});
    await Review.destroy({where: {}, truncate: true});
  }
};
