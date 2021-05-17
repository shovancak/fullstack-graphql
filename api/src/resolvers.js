/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
    pets: (_, __, { models }) => {
      return models.Pet.findMany()
    },
    shoes: (_, {input}) => {
      return [{brand: 'Nike', size: 12}, {brand: 'Adidas', size: 11}, {brand: 'Nike', size: 11} ]. filter((shoe) => shoe.brand === input.brand)
    }
  },
  // Mutation: {
    
  // },
  // Pet: {
  //   img(pet) {
  //     return pet.type === 'DOG'
  //       ? 'https://placedog.net/300/300'
  //       : 'http://placekitten.com/300/300'
  //   }
  // },
  // User: {
    
  // }
}
