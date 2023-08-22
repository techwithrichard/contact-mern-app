const express = require("express")
const {createUser, getUser, getUsers, updateUser, deleteUser } = require("../controllers/userController")

const router = express.Router()

router.route("/").createUser().getUsers()
router.route("/:id").getUser().updateUser().deleteUser()


module.exports = router;
