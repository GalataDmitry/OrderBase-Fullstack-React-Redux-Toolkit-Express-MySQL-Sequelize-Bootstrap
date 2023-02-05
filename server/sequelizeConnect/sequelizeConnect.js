const sequelize = require('../connectConfig/connectFonfig')

module.exports = connectDbAndSyncModels = () => {
    sequelize.authenticate()
        .then(() => console.log('Connection successfully.'))
        .catch(error => console.error('Connection error --->', error))
    }
//one-to-one
// Cocktails.hasOne(Ingredients, {foreignKey: 'cocktail_id'})
// Ingredients.belongsTo(Cocktails, {foreignKey: 'cocktail_id'})

//one-to-many
// Cocktails.hasMany(Ingredients, {foreignKey: 'cocktail_id'})
// Ingredients.belongsTo(Cocktails, {foreignKey: 'cocktail_id'})

//many-to-many
// Cocktails.belongsToMany(Ingredients, {through: 'CocktailsIngredients'})
// Ingredients.belongsToMany(Cocktails, {through: 'CocktailsIngredients'})
