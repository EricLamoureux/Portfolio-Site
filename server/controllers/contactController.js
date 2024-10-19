const Contact = require('../models/Contact');

// Get all contacts
exports.getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Add new contact
exports.addContact = async (req, res) => {
    const contact = new Contact(req.body);
    try {
        const newContact = await contact.save();
        res.status(201).json(newContact);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get contact by ID
exports.getContactById = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (contact == null) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.json(contact);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update contact by ID
exports.updateContact = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(contact);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete contact by ID
exports.deleteContact = async (req, res) => {
    try {
        await Contact.findByIdAndDelete(req.params.id);
        res.json({ message: 'Contact deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
