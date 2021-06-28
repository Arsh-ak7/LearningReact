const { gql } = require("apollo-server");

module.exports = gql`
	type User {
		id: ID!
		email: String!
		token: String!
		createdAt: String!
		username: String!
	}
	input RegisterInput {
		username: String!
		email: String!
		password: String!
		confirmPassword: String!
	}
	type Query {
		getUserData(email: String!): User!
	}
	type Mutation {
		register(registerInput: RegisterInput): User!
		login(username: String!, password: String!): User!
	}
`;