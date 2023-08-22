const asyncHandler = require("express-async-handler")

//@desc CREATE all contacts
//@route POST /api/contacts
//@access public

const createContact = asyncHandler(async (req, res)=>{
    console.log("The request body is: ", req.body)
    const {name, email, phone, password,} = req.body;
    if(!name || !email || !phone || !password){
        res.status(400);
        throw new Error("All fields are required!")
    }
    res.status(200).json({
        message: "Create contact"
    })
})

//@desc Gell all contacts
//@route GET /api/contacts
//@access public
const getAllContacts = asyncHandler(async (req, res)=>{
    res.status(200).json({
        message: "All contacts list"
    })
})

//@desc Gell one contact
//@route GET /api/contacts
//@access public
const getOneContact = asyncHandler(async (req, res)=>{
    res.status(200).json({
        message: "All one contact "
    })
})

//@desc UPDATE contacts
//@route PUT /api/contacts
//@access public

const updateContact = asyncHandler(async (req, res)=>{
    res.status(200).json({
        message : "Update contact"
    })
})
//@desc DELETE  contacts
//@route DELETE /api/contacts
//@access public
const deleteContact = asyncHandler(async (req, res)=>{
    res.status(200).json({
        message : "Delete contact"
    })
})

module.exports = { 
    getAllContacts,
    getOneContact,
    createContact,
    updateContact,
    deleteContact
   

}