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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var faker_1 = require("@faker-js/faker");
var createUsers = function () {
    var users = [];
    for (var i = 0; i < 99; ++i) {
        var user = {
            name: faker_1.faker.person.fullName(),
            pin: 5000 + i,
            balance: 1000 * i,
            id: 1000 + i,
            accountNumber: Math.floor(1000000 * (Math.random() * 50000))
        };
        users.push(user);
    }
    return users;
};
var usersData = createUsers();
var response = function (usersData) { return __awaiter(void 0, void 0, void 0, function () {
    var res, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, inquirer_1.default.prompt([
                    {
                        type: "number",
                        message: "Please Enter your ID: ",
                        name: "id"
                    },
                    {
                        type: "number",
                        message: "Please Enter Your Pin Code: ",
                        name: "pin"
                    }
                ])];
            case 1:
                res = _a.sent();
                user = usersData.find(function (val) { return val.id === res.id && val.pin === res.pin; });
                if (user) {
                    console.log("Welcome ".concat(user.name));
                    return [2 /*return*/, atmFunction(user)];
                }
                else {
                    return [2 /*return*/, console.log("You Have Entered Invalid ID or Pincode. Try Again.")];
                }
                return [2 /*return*/];
        }
    });
}); };
var atmFunction = function (user) { return __awaiter(void 0, void 0, void 0, function () {
    var ans, withdraw, deposit;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, inquirer_1.default.prompt([
                    {
                        type: "list",
                        choices: ["Withdraw", "Deposit", "Balance"],
                        message: "Please Select the Operation You Want to Perform: ",
                        name: "operation"
                    }
                ])];
            case 1:
                ans = _a.sent();
                if (!(ans.operation === "Withdraw")) return [3 /*break*/, 3];
                return [4 /*yield*/, inquirer_1.default.prompt([
                        {
                            type: "number",
                            message: "Enter Amount You Want to Withdraw: ",
                            name: "withdrawlAmount"
                        }
                    ])];
            case 2:
                withdraw = _a.sent();
                if (withdraw.withdrawlAmount > user.balance) {
                    console.log("Your Account Balance Is Insufficient.");
                    console.log("Balance: ".concat(user.balance));
                }
                else {
                    console.log("Withdrawl Amount: ".concat(withdraw.withdrawlAmount));
                    console.log("Balance Amount: ".concat(user.balance - withdraw.withdrawlAmount));
                }
                _a.label = 3;
            case 3:
                if (!(ans.operation === "Deposit")) return [3 /*break*/, 5];
                return [4 /*yield*/, inquirer_1.default.prompt([
                        {
                            type: "number",
                            message: "Enter Amount You Want To Deposit: ",
                            name: "depositAmount"
                        }
                    ])];
            case 4:
                deposit = _a.sent();
                console.log("Deposit Amount: ".concat(deposit.depositAmount));
                console.log("Balance Amount: ".concat(user.balance + deposit.depositAmount));
                _a.label = 5;
            case 5:
                if (ans.operation === "Balance") {
                    return [2 /*return*/, console.log("Balance: ".concat(user.balance))];
                }
                return [2 /*return*/];
        }
    });
}); };
response(usersData);
