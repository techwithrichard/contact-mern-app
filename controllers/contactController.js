//@desc Gell all contacts
//@route GET /api/contacts
//@access public

const createContact = (req, res)=>{
    res.status(200).json({
        message: "Create contact"
    })
}

//@desc Gell all contacts
//@route GET /api/contacts
//@access public
const getAllContacts = (req, res)=>{
    res.status(200).json({
        message: "All contacts list"
    })
}

//@desc Gell all contacts
//@route GET /api/contacts
//@access public
const getOneContact = (req, res)=>{
    res.status(200).json({
        message: "All one contact "
    })
}

//@desc Gell all contacts
//@route GET /api/contacts
//@access public

const updateContact = (req, res)=>{
    res.status(200).json({
        message : "Update contact"
    })
}
//@desc Gell all contacts
//@route GET /api/contacts
//@access public
const deleteContact = (req, res)=>{
    res.status(200).json({
        message : "Delete contact"
    })
}

module.exports = { 
    getAllContacts,
    getOneContact,
    createContact,
    updateContact,
    deleteContact
   

}