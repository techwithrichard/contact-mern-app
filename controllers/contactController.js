const asyncHandler = require("express-async-handler")
const Contact = require("../models/contactModel")


//@desc Gell all contacts
//@route GET /api/contacts
//@access public
const getAllContacts = asyncHandler(async (req, res)=>{
    const contacts = await Contact.find(); 
    res.status(200).json(contacts)
})

//@desc CREATE all contacts
//@route POST /api/contacts
//@access public

const createContact = asyncHandler(async (req, res)=>{
    console.log("The request body is: ", req.body)
    const {name, email, mobile} = req.body;
    if(!name || !email || !mobile){
        res.status(400);
        throw new Error("All fields are required!")
    }
    const contact = await Contact.create({
        name,
        email,
        mobile
    })
    res.status(200).json(contact)
})


//@desc Gell one contact
//@route GET /api/contacts
//@access public
const getOneContact = asyncHandler(async (req, res)=>{
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404);
        throw new Error("Contact not found!")
    }
    res.status(200).json(contact)
})

//@desc UPDATE contacts
//@route PUT /api/contacts
//@access public

const updateContact = asyncHandler(async (req, res)=>{
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404);
        throw new Error("Contact not found")
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true }
        );

    res.status(200).json(updatedContact)
})
//@desc DELETE  contacts
//@route DELETE /api/contacts
//@access public
const deleteContact = asyncHandler(async (req, res)=>{
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404);
        throw new Error("Contact not found")
    }
    await Contact.deleteOne();
   
    res.status(200).json(contact)
})

module.exports = { 
    getAllContacts,
    getOneContact,
    createContact,
    updateContact,
    deleteContact
   

}