'use strict';

/** @type {import('sequelize-cli').Migration} */

const {Review} = require('../models');
const reviews = [
	{
		userId: 1,
		spotId: 1,
		review:
			"The atmosphere at Rick's Garage Hideaway is definitely unique, but it was a bit too chaotic for me. Rick's experiments were intriguing, but they added a level of unpredictability that wasn't to my taste.",
		stars: 4.8,
	},
	{
		userId: 4,
		spotId: 1,
		review:
			"The atmosphere at Rick's Garage Hideaway is definitely unique, but it was a bit too chaotic for me. Rick's experiments were intriguing, but they added a level of unpredictability that wasn't to my taste.",
		stars: 3.9,
	},
	{
		userId: 2,
		spotId: 2,
		review:
			'Staying at the Planet Express Office Suite was fantastic! The panoramic views of New New York were incredible, and being close to the interplanetary operations added an exciting twist to the stay.',
		stars: 3.5,
	},
	{
		userId: 3,
		spotId: 2,
		review:
			'I enjoyed my stay at the Planet Express Office Suite, but the occasional interplanetary delivery missions were a bit distracting. The views and location were great, though.',
		stars: 4.9,
	},
	{
		userId: 4,
		spotId: 4,
		review:
			'The Council of Ricks Penthouse was luxurious and had amazing amenities. However, the constant activity and noise from the Ricks made it less relaxing than I had hoped.',
		stars: 4.3,
	},
	{
		userId: 5,
		spotId: 5,
		review:
			"The Slurm Queen's Bungalow had a vibrant atmosphere, especially with its proximity to the Slurm Factory. However, it was a bit too lively and chaotic for my personal taste.",
		stars: 4.1,
	},
	{
		userId: 1,
		spotId: 6,
		review:
			"The Devil's Dancefloor Suite was a blast if you're into parties. The atmosphere was energetic and the location in Robot Hell provided a wild, unforgettable experience.",
		stars: 3.7,
	},
	{
		userId: 2,
		spotId: 7,
		review:
			'The Cosmic Cruiser was thrilling, but it might be too extreme for some. The luxury and space travel experience were amazing, but the intensity of the trip was a bit much for me.',
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
		review:
			"Rick's Garage Hideaway was intriguing, but the constant portal noises were quite annoying. The setting was unique, but the disturbances detracted from the overall experience.",
		stars: 2.8,
	},
	{
		userId: 5,
		spotId: 10,
		review:
			'I loved the quirky vibes of the Planet Express HQ! It was a highly enjoyable experience with a lot of interesting features and a great view of New New York.',
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
			'The Citadel of Ricks is a fascinating place with its unique atmosphere. However, the constant political debates among the Ricks became a bit tiresome over time.',
		stars: 3.8,
	},
	{
		userId: 4,
		spotId: 14,
		review:
			"Staying near the Slurm Factory at the Slurm Queen's Bungalow was amazing if you're a fan of Slurm. The experience was lively and full of energy, though the sugar rush might be overwhelming.",
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
