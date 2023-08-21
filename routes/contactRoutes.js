const express = require("express")
const {createContact, getAllContacts, getOneContact, updateContact, deleteContact} = require("../controllers/contactController")
const router = express.Router()


router.route("/").post(createContact)
router.route("/").get(getAllContacts)
router.route("/:id").get(getOneContact)
router.route("/:id").put(updateContact)
router.route("/:id").delete(deleteContact)


module.exports = router;