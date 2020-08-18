const User = require("../models/User")

const UsersController = () => {
	const all = async (req, res, next) => {
		try {
			return res.status(200).json(User.all);
		} carch(error) {
			return res.status(500).json({ message: `${JSON.stringify(error)}` });
		}
	}

	return {
		all,
	}
}

module.exports = UsersController;
