'use strict';
/** @type {import('sequelize-cli').Migration} */


const { SpotImage } = require('../models');
const spotImages = [
	{
		spotId: 1,
		url: 'https://global.discourse-cdn.com/mcneel/uploads/default/original/4X/a/8/7/a8724ce18fa4d750a247eb31c5df48b8aa2966ee.jpeg', // Rick's Garage
		preview: true,
	},
	{
		spotId: 2,
		url: 'https://hips.hearstapps.com/hmg-prod/images/edc100123egan-002-6500742f5feb7.jpg?crop=0.688xw:1.00xh;0.157xw,0&resize=980:*', // Planet Express HQ
		preview: true,
	},
	{
		spotId: 2,
		url: 'https://www.willsill.co.uk/wp-content/uploads/2022/01/Cool-office-1.jpg', // Planet Express HQ
		preview: false,
	},
	{
		spotId: 2,
		url: 'https://assets-blog.s3.amazonaws.com/office-furniture-blog/wp-content/uploads/2021/04/08004227/interior-4406045_1280-1080x540.jpeg', // Planet Express HQ
		preview: false,
	},
	{
		spotId: 2,
		url: 'https://assets.hongkiat.com/uploads/creative_modern_office_design/Google_Zurich_creative_office2.jpg', // Planet Express HQ
		preview: false,
	},
	{
		spotId: 2,
		url: 'https://assets.entrepreneur.com/content/3x2/2000/20160421183052-google-slides-tel-aviv.jpeg?format=pjeg&auto=webp&crop=16:9&width=675&height=380', // Planet Express HQ
		preview: false,
	},
	{
		spotId: 3,
		url: 'https://www.the-sun.com/wp-content/uploads/sites/6/2022/07/NINTCHDBPICT000750103510.jpg?strip=all&w=960', // The Citadel
		preview: true,
	},
	{
		spotId: 4,
		url: 'https://preview.redd.it/underwater-houses-and-spaces-which-do-you-prefer-pretend-we-v0-kt7b05rq9oob1.jpg?width=640&crop=smart&auto=webp&s=70de606ddc09117f9c337f9d35073bd7a0c8afb4', // Futuristic Prefab Home
		preview: true,
	},
	{
		spotId: 5,
		url: 'https://preview.redd.it/underwater-houses-and-spaces-which-do-you-prefer-pretend-we-v0-e7i6egrq9oob1.jpg?width=640&crop=smart&auto=webp&s=b39559b446a4aa0c00f103334398d7df4ea6654f', // Underwater Home
		preview: true,
	},
	{
		spotId: 6,
		url: 'https://i0.wp.com/trendland.com/wp-content/uploads/2019/09/Precht-Bert-Treehouse-04.jpg?resize=770%2C1001&ssl=1', // Sky Pod Home
		preview: true,
	},
	{
		spotId: 7,
		url: 'https://media.hostunusual.com/wp-content/uploads/2022/04/31190849/invisible-house-main.jpg', // Rotating Skyscraper Apartment
		preview: true,
	},
	{
		spotId: 8,
		url: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/G2_Global_model_Earthship_Taos_N.M..JPG', // Deep Ocean Habitat
		preview: true,
	},
	{
		spotId: 9,
		url: 'https://amazingarchitecture.com/storage/1508/responsive-images/spiral_house_antireality_usa___media_library_original_658_370.jpg', // Futuristic Kitchen Interior
		preview: true,
	},
	{
		spotId: 10,
		url: 'https://dornob.com/wp-content/uploads/2016/04/pyramid-house-4.jpg', // Futuristic Japanese House
		preview: true,
	},
	{
		spotId: 11,
		url: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Pod_house_detail%2C_Perinton%2C_New_York.JPG', // Martian Colony Home
		preview: true,
	},
	{
		spotId: 12,
		url: 'http://www.historyofrefrigeration.com/images/historyofrefrigeration/picture-of-ice-house-in-eglinton-country-park-kilwinning-north-ayrshire-scotland.JPG', // Futuristic Home Interior
		preview: true,
	},
	{
		spotId: 13,
		url: 'http://www.historyofrefrigeration.com/images/historyofrefrigeration/picture-of-ice-house-in-eglinton-country-park-kilwinning-north-ayrshire-scotland.JPG',
		preview: true,
	},
	{
		spotId: 14,
		url: 'https://raleighrealtyhomes.com/storage/uploads/kFfsOdOiZVy1Vwo4YwPh3F5rvltEj3Khe8FUY1ax.png',
		preview: true,
	},
	{
		spotId: 15,
		url: 'https://c4.wallpaperflare.com/wallpaper/227/267/795/futurama-new-york-planet-express-wallpaper-preview.jpg',
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
