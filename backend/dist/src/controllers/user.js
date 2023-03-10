"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSave = exports.userRegister = void 0;
const user_1 = require("../models/user");
const userRegister = (req, res) => {
    console.log('Hey from user Controller');
};
exports.userRegister = userRegister;
const userSave = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password } = req.body;
    const userExists = yield user_1.UserModel.findOne({ username: username });
    if (userExists)
        return res.status(404).json({ message: 'Username is taken' });
    const newUser = yield new user_1.UserModel({ username: username, email: email, password: password }).save();
});
exports.userSave = userSave;
