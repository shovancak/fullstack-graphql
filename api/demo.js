const gql = require('graphql-tag')
const { ApolloServer } = require('apollo-server');

const typeDefs = gql`
  type User {
    email: String!
    avatar: String
    friends: [User]!
  }
  
  type Query {
    me: User!
    friends: [User]!
  }
`

const resolvers = {
  Query: {
    me: () => {
      return {
        email: 'yoda@masters.com',
        avatar: 'http://yoda.png',
        fiends: [],
      }
    },
    friends: () => {
      return [
        {
          email: 'yoda@masters.com',
          avatar: 'http://yoda.png',
          fiends: [],
        },
        {
          email: 'yoda@masters.com2',
          avatar: 'http://yoda.png',
          fiends: [],
        },
        {
          email: 'yoda@masters.com3',
          avatar: 'http://yoda.png',
          fiends: [],
        }
      ]
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen(4000).then(() => {
  console.log('Apollo server running on port 4000.')
})