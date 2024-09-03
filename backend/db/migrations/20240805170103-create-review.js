'use strict';
/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
			'Reviews',
			{
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER,
				},
				spotId: {
					type: Sequelize.INTEGER,
					allowNull: false,
					references: {
						model: 'Spots',
					},
					onDelete: 'CASCADE',
				},
				userId: {
					type: Sequelize.INTEGER,
					allowNull: false,
					references: {
						model: 'Users',
					},
					onDelete: 'CASCADE',
				},
				review: {
					type: Sequelize.STRING,
					allowNull: false,
				},
				stars: {
					type: Sequelize.DECIMAL(2, 1),
					allowNull: false,
				},
				createdAt: {
					allowNull: false,
					type: Sequelize.DATE,
					defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
				},
				updatedAt: {
					allowNull: false,
					type: Sequelize.DATE,
					defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
				},
			},
			options
		);
    // await queryInterface.addIndex(
    //   'Reviews', ['userId', 'spotId'], { unique: true, ...options },
    // );
  },
  async down(queryInterface, Sequelize) {
    options.tableName = 'Reviews';
    // await queryInterface.removeIndex(options, ['userId', 'spotId']);
    await queryInterface.dropTable(options);
  }
};