/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
    pets: (_, {input}, ctx) => {
      return ctx.models.Pet.findMany(input)
    },
    shoes: (_, {input}) => {
      return [{brand: 'NIKE', size: 12, sport: 'Football'}, {brand: 'ADIDAS', size: 11, hasGrip: true}, {brand: 'PUMA', size: 11, hasGrip: true, sport: 'Basketball'} ]
    },
    pet: (_, {input}, ctx) => {
      return ctx.models.Pet.findOne(input)
    }
  },
  Mutation: {
    newShoe: (_, {input}) => {
      return input
    },
    newPet: (_, {input}, ctx) => {
      return ctx.models.Pet.create(input)
    }
  },
  Shoe: {
    __resolveType: (shoe) => {
        if(shoe.sport) {
          return 'Sneaker'
        } else {
          return 'Boot'
        }
    }
  }
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
