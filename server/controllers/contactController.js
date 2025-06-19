const Contact = require('../models/Contact');

exports.getContacts = async(req,res) => {
const contacts = await Contact.find();
res.json(contacts);
};

exports.createContact = async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json(newContact);
  } catch (error) {
    console.error("Error creating contact:", error); // 👈 log error
    res.status(500).json({ error: 'Failed to create contact' });
  }
};


exports.updateContact = async(req,res) => {
const updated = await Contact.findByIdAndUpdate(req.params.id, req.body, {new:true });
res.json(updated);
};

exports.deleteContact = async(req,res) => {
await Contact.findByIdAndDelete(req.params.id);
res.json({message : 'Contact deleted..'});
};