'use strict';
/** @type {import('sequelize-cli').Migration} */


const { SpotImage } = require('../models');
const spotImages = [
	{
		spotId: 1,
		url: 'https://global.discourse-cdn.com/mcneel/uploads/default/original/4X/a/8/7/a8724ce18fa4d750a247eb31c5df48b8aa2966ee.jpeg',
		preview: true,
	},

	{
		spotId: 2,
		url: 'https://hips.hearstapps.com/hmg-prod/images/edc100123egan-002-6500742f5feb7.jpg?crop=0.688xw:1.00xh;0.157xw,0&resize=980:*',
		preview: true,
	},

	{
		spotId: 3,
		url: 'https://www.the-sun.com/wp-content/uploads/sites/6/2022/07/NINTCHDBPICT000750103510.jpg?strip=all&w=960',
		preview: true,
	},

	{
		spotId: 4,
		url: 'https://global.discourse-cdn.com/mcneel/uploads/default/original/4X/9/d/8/9d8a709128f30a273ff16329c91667f12e9b960b.jpeg',
		preview: true,
	},

	{
		spotId: 5,
		url: 'https://www.pcgamesn.com/wp-content/sites/pcgamesn/2024/02/minecraft-houses-550x309.jpg',
		preview: true,
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
    await SpotImage.bulkCreate(spotImages)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await SpotImage.destroy({where: {}, truncate: true});
  }
};
