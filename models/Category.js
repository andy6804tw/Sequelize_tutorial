/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Category', {
		category_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		category_name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		category_created: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		category_update: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'Category'
	});
};
