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
var complexObject = {
    name: "Humair G.",
    age: 25,
    isStudent: false,
    interests: ["Music", "Reading", "Cricket"],
    address: {
        street: "123 East Main Street",
        city: "Victoria",
        postalCode: "00000",
    },
    grades: {
        math: {
            midterm: 80,
            final: 95,
        },
        Canvas: {
            midterm: 67,
            final: 90,
        },
    },
    contact: {
        email: "humair.gm@example.com",
        phone: "+000000000",
    },
    tuple: [1, "two", true],
    tuple1: function (x) {
        return x * 2;
    },
};
var account = {
    accountNumber: "PKHB004020035",
    pin: "0000",
    balance: 1000,
    transactions: []
};
function login() {
    return __awaiter(this, void 0, void 0, function () {
        var userAccountLogin;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1.default.prompt([
                        {
                            name: "accountNumber",
                            type: "string",
                            message: "Enter Your Bank Account Number"
                        },
                        {
                            name: "pin",
                            type: "string",
                            message: "Enter Your Four Digits Pin"
                        }
                    ])];
                case 1:
                    userAccountLogin = _a.sent();
                    if (userAccountLogin.accountNumber === account.accountNumber && userAccountLogin.pin === account.pin) {
                        console.log("Your Login Successful");
                        actionToPerform();
                    }
                    else {
                        console.error("Incorrect Login Details. Please Retry Again.");
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function logout() {
    console.log("You Logout Successfully");
}
function checkBalance() {
    console.log("Your Account Balance is: ".concat(account.balance));
    actionToPerform();
}
function withdraw() {
    return __awaiter(this, void 0, void 0, function () {
        var withdrawAmount, amount;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1.default.prompt([
                        {
                            name: "amount",
                            type: 'number',
                            message: "Enter Amount to Withdraw From Your Account",
                            validate: function (input) { return (input > 0 && input < account.balance); }
                        }
                    ])];
                case 1:
                    withdrawAmount = _a.sent();
                    amount = withdrawAmount.amount;
                    account.balance -= amount;
                    console.log("".concat(amount, " has been successfully withdrawn from your account"));
                    account.transactions.push(amount);
                    actionToPerform();
                    return [2 /*return*/];
            }
        });
    });
}
function viewTransactions() {
    if (account.transactions.length > 0) {
        for (var i = 0; i < account.transactions.length; i++) {
            var element = account.transactions[i];
            console.log(element);
        }
    }
    else {
        console.warn('No Any Transactions Yet');
    }
    actionToPerform();
}
function actionToPerform() {
    return __awaiter(this, void 0, void 0, function () {
        var actions;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1.default.prompt([
                        {
                            name: "action",
                            type: "list",
                            message: "Please Choose What Operation You Want To Perform: ",
                            choices: ["Check Balance", "Withdraw", "View Transactions", "Logout"]
                        }
                    ])];
                case 1:
                    actions = _a.sent();
                    switch (actions.action) {
                        case "Check Balance":
                            checkBalance();
                            break;
                        case "Withdraw":
                            withdraw();
                            break;
                        case "View Transactions":
                            viewTransactions();
                            break;
                        case "Logout":
                            logout();
                            break;
                        default:
                            actionToPerform();
                            break;
                    }
                    return [2 /*return*/];
            }
        });
    });
}
login();
