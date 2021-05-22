const { gql } = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
  enum ShoeType {
    JORDAN
    NIKE
    ADIDAS
    REEBOK
    PUMA
  }

  type User {
    id: ID!
    username: String!
    pets: [Pet]!
  }

  type Pet {
    id: ID!
    createdAt: String!
    name: String!
    type: String!
    owner: User
  }

  interface Shoe {
    brand: ShoeType!
    size: Int!
  }

  type Sneaker implements Shoe {
    brand: ShoeType!
    size: Int!
    sport: String!
  }

  type Boot implements Shoe {
    brand: ShoeType!
    size: Int!
    hasGrip: Boolean!
  }

  input ShoeInput {
    brand: ShoeType
    size: Int
  }

  input PetInput {
    name: String
    type: String
  }

  input NewShoeInput {
    brand: ShoeType!
    size: Int!
  }

  input NewPetInput {
    name: String!
    type: String!
  }

  type Query {
    pets(input: PetInput): [Pet]!
    pet(input: PetInput): Pet
    shoes(input: ShoeInput): [Shoe]!
  }

  type Mutation {
    newShoe(input: NewShoeInput!): Shoe!
    newPet(input: NewPetInput!): Pet!
  }

`;

module.exports = typeDefs
