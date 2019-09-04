const { ApolloServer } = require('apollo-server');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const mongoose = require('mongoose');
require('dotenv').config();

// remove deprecationWarning
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

mongoose
	.connect(process.env.MONGO_URI, { userNewUriPaser: true })
	.then(() => {
		console.log('DB connected');
	})
	.catch((err) => console.error(err));

const server = new ApolloServer({
	typeDefs,
	resolvers
});

server.listen().then(({ url }) => {
	console.log(`Server is listening on ${url}`);
});
