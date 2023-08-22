const express = require("express")
const {createContact, getAllContacts, getOneContact, updateContact, deleteContact} = require("../controllers/contactController")
const router = express.Router()


router.route("/").post(createContact).get(getAllContacts)
router.route("/:id").get(getOneContact).put(updateContact).delete(deleteContact)



module.exports = router;