const BaseController = require('./basecontroller');
const UserModel = require('../models/user');
class Register extends BaseController {
    constructor() {
        super(UserModel, Register);
    }
}
module.exports = new Register();