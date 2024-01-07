var shortid = require("shortid");
let data = [];

/**
 * This function will handle POST /user api to create a new user
 */
exports.createUser = async (req, res) => {
  try {
    let newUser = {
      id: shortid.generate(),
      age: req.body.age,
      username: req.body.username,
      hobbies: req.body.hobbies,
    };
    data.push(newUser);
    return res.status(201).json({
      message: "User Created Successfully",
    });
  } catch (error) {
    return res.status(400).json({
      message: "Missing Required Fields",
    });
  }
};

/**
 * This function will handle GET /user api to fetch all users
 */
exports.getUsers = async (req, res) => {
  try {
    return res.status(200).json({
      users: data,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Issue in fetching data",
    });
  }
};

/**
 * This function will handle DELETE /user api to Delete user of a specific id
 */
exports.deleteUser = async (req, res) => {
  try {
    let found = data.find(function (item) {
      return item.id == req.params.id;
    });
    if (found) {
      let targetIndex = data.indexOf(found);

      data.splice(targetIndex, 1);

      res.status(204).json({ message: "User Deleted" });
    }
  } catch (error) {
    res.status(400).json({ message: "User Not Found" });
  }
};

/**
 * This function will handle GET /user api to get a specific userby id
 */
exports.getUserById = async (req, res) => {
  try {
    let found = data.find(function (item) {
      return item.id == req.params.id;
    });
    if (found) {
      res.status(200).json(found);
    } else {
      res.status(404).json({ message: "UserId is invalid" });
    }
  } catch (error) {
    res.status(404).json({ message: "Not an valid id" });
  }
};

/**
 * This function will handle PUT /user api to update a user by id
 */
exports.updateUser = async (req, res) => {
  try {
    let found = data.find(function (item) {
      return item.id === req.params.id;
    });
    if (found) {
      let updateData = {
        id: found.id,
        username: req.body.username,
        age: req.body.age,
        hobbies: req.body.hobbies,
      };

      let targetIndex = data.indexOf(found);

      data.splice(targetIndex, 1, updateData);

      res.status(200).json({ message: "data updated" });
    } else {
      res.status(404).json({ message: "User Id not matched" });
    }
  } catch (error) {
    res.status(400).json({
      message: "Invalid user Id",
    });
  }
};
