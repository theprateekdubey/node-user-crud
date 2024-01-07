const userController = require("../controller/user");

/**routes */
module.exports = (router) => {
  router.post("/", userController.createUser);
  router.get("/", userController.getUsers);
  router.delete("/:id", userController.deleteUser);
  router.get("/:id", userController.getUserById);
  router.put("/:id", userController.updateUser);
};
