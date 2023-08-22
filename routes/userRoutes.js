const express = require("express")
const {createUser, getUser, getUsers, updateUser, deleteUser } = require("../controllers/userController")

const router = express.Router()

router.route("/").post(createUser)
router.route("/").get(getUsers)
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser)


module.exports = router;
