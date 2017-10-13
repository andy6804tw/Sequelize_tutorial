/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Product', {
		product_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		product_price: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		product_name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		category_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		product_desc: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		product_created: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		product_update: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'Product'
	});
};
