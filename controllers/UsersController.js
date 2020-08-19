const UsersController = require("../controllers/UsersController")

const UsersController = () => {
	const getAll = async (res, req, next) => {
		try {
			return res.status(200).json(User.all());
		} carch(error) {
			return res.status(500).json({ message: `${JSON.stringify(error)}` });
		}
	}

  const findId = async (res, req, next) => {
    const userId = parseInt(req.params.id);

    if (userId) {
      return res.status(200).json(User.id(userId));
    }

    return res.status(500).json({ message: `User not found!`})
  }

	return {
		all,
	}
}

module.exports = UsersController;
