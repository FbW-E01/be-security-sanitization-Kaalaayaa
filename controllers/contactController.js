import express from 'express';
import Contact from "../models/contact.js";
import contactValidations from '../validation/contactValidations.js';
import errorCheck from '../middleware/errorCheck.js'

const router = express.Router();

// Besides adding validation and sanitation
// feel free to improve these in other ways!

router.post("/", errorCheck(contactValidations), async (req, res) => {
    console.log(req.body)
    res.json(await Contact.create(req.body));
});

router.get("/", async (request, response) => {
    response.json(await Contact.find({}));
});

export default router;