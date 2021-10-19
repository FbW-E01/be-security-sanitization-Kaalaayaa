import { body } from "express-validator";


const contactValidations = [
    body("name").isLength({ min: 3 }).withMessage("content-minlength").trim(),
    body("name").notEmpty().withMessage("message is required"),
    body("name").not().custom((val) =>  /[^A-za-z0-9\s]/g.test(val)).withMessage('Username not use uniq characters'),
    body("telephone").isNumeric().withMessage("Please enter only numbers"),
    body("telephone").isMobilePhone().trim().withMessage("telephone"),
    body("message").notEmpty().withMessage("message is required"),
    body("email").isEmail().withMessage("Email invalid")
]

export default contactValidations