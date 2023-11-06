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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var faker_1 = require("@faker-js/faker");
var chalk_1 = require("chalk");
var Customer = /** @class */ (function () {
    function Customer(fname, lname, gender, age, mobileNo, accNo) {
        this.fname = fname,
            this.lname = lname,
            this.gender = gender,
            this.age = age,
            this.mobileNo = mobileNo;
        this.accNo = accNo;
    }
    return Customer;
}());
var Bank = /** @class */ (function () {
    function Bank() {
        this.Customer = [];
        this.BankAccount = [];
    }
    Bank.prototype.addCustomer = function (object) {
        this.Customer.push(object);
    };
    Bank.prototype.addAccount = function (object) {
        this.BankAccount.push(object);
    };
    Bank.prototype.addTransaction = function (object) {
        var newAccount = this.BankAccount.filter(function (val) { return val.accNo !== object.accNo; });
        this.BankAccount = __spreadArray(__spreadArray([], newAccount, true), [object], false);
    };
    return Bank;
}());
var customers = new Bank();
for (var i = 1; i <= 5; i++) {
    var fname = faker_1.faker.person.firstName("male");
    var lname = faker_1.faker.person.lastName("male");
    var gender = "Male";
    var age = faker_1.faker.number.int({ min: 18, max: 60 });
    var mobileNo = parseInt("+923".concat(Math.random() * 10000000000));
    var accNo = 2000 + i;
    var pin = 5000 + i;
    var balance = 1000 * i;
    var cus = new Customer(fname, lname, gender, age, mobileNo, accNo);
    var acc = {
        accNo: accNo,
        pin: pin,
        balance: balance
    };
    customers.addCustomer(cus);
    customers.addAccount(acc);
}
var bankFunctions = function (customers) { return __awaiter(void 0, void 0, void 0, function () {
    var _loop_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _loop_1 = function () {
                    var res, account, user, services, deposit, addDeposit, withdraw, lessWithdraw;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, inquirer_1.default.prompt([
                                    {
                                        type: "number",
                                        name: "accNo",
                                        message: "Enter Bank Account Number:"
                                    },
                                    {
                                        type: "number",
                                        name: "pin",
                                        message: "Enter Your Pin Code"
                                    }
                                ])];
                            case 1:
                                res = _b.sent();
                                account = customers.BankAccount.find(function (val) { return val.accNo === res.accNo && val.pin === res.pin; });
                                if (!account) {
                                    console.log("".concat(chalk_1.default.red.bold("You Have Entered Invalid Account or Pin. Please Try Again.")));
                                }
                                if (!account) return [3 /*break*/, 7];
                                user = customers.Customer.find(function (val) { return val.accNo === res.accNo; });
                                console.log("".concat(chalk_1.default.yellow.italic("Welcome Mr.", user === null || user === void 0 ? void 0 : user.fname, user === null || user === void 0 ? void 0 : user.lname)));
                                return [4 /*yield*/, inquirer_1.default.prompt({
                                        type: "list",
                                        name: "Service",
                                        message: "Please Select an Operation You Want To Perform: ",
                                        choices: ["Deposit", "Withdraw", "Balance Inquiry"]
                                    })];
                            case 2:
                                services = _b.sent();
                                if (!(services.Service === "Deposit")) return [3 /*break*/, 4];
                                return [4 /*yield*/, inquirer_1.default.prompt({
                                        type: "number",
                                        name: "deposit",
                                        message: "Enter Amount To Deposit: "
                                    })];
                            case 3:
                                deposit = _b.sent();
                                if (deposit.deposit) {
                                    addDeposit = account.balance + deposit.deposit;
                                    customers.addTransaction({ accNo: account.accNo, pin: account.pin, balance: addDeposit });
                                    console.log("".concat(chalk_1.default.blue.bold("Desposit Amount:"), " ").concat(chalk_1.default.blue.bold(deposit.deposit)));
                                    console.log("".concat(chalk_1.default.green.bold("Current Balance:"), " ").concat(chalk_1.default.green.bold(addDeposit)));
                                }
                                _b.label = 4;
                            case 4:
                                if (!(services.Service === "Withdraw")) return [3 /*break*/, 6];
                                return [4 /*yield*/, inquirer_1.default.prompt({
                                        type: "number",
                                        name: "Withdraw",
                                        message: "Enter Amount To Withdraw: "
                                    })];
                            case 5:
                                withdraw = _b.sent();
                                if (withdraw.Withdraw <= account.balance) {
                                    lessWithdraw = account.balance - withdraw.Withdraw;
                                    customers.addTransaction({ accNo: account.accNo, pin: account.pin, balance: lessWithdraw });
                                    console.log("".concat(chalk_1.default.blue.bold("Withdrawal Amount:"), " ").concat(chalk_1.default.blue.bold(withdraw.Withdraw)));
                                    console.log("".concat(chalk_1.default.green.bold("Current Balance:"), " ").concat(chalk_1.default.green.bold(lessWithdraw)));
                                }
                                else {
                                    console.log("".concat(chalk_1.default.red.bold("Transaction Error!"), " Please Enter Valid Amount."));
                                }
                                _b.label = 6;
                            case 6:
                                if (services.Service === "Balance Inquiry") {
                                    console.log("".concat(chalk_1.default.green.bold("Available Balance: ", account.balance), " "));
                                }
                                _b.label = 7;
                            case 7: return [2 /*return*/];
                        }
                    });
                };
                _a.label = 1;
            case 1:
                if (!true) return [3 /*break*/, 3];
                return [5 /*yield**/, _loop_1()];
            case 2:
                _a.sent();
                return [3 /*break*/, 1];
            case 3: return [2 /*return*/];
        }
    });
}); };
bankFunctions(customers);
