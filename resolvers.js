// dummy user
const user = {
	_id: '1',
	name: 'David',
	email: 'test@gmail.com',
	picture: 'https://cloudinary.com/sss'
};

module.exports = {
	Query: {
		me: () => user
	}
};
