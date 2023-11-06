#! /usr/bin/env
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
var chalk_1 = require("chalk");
var inquirer_1 = require("inquirer");
// Player Class
var Player = /** @class */ (function () {
    function Player(name) {
        this.fuel = 100;
        this.name = name;
    }
    Player.prototype.fuelDecrease = function () {
        var fuel = this.fuel - 25;
        this.fuel = fuel;
    };
    Player.prototype.fuelIncrease = function () {
        this.fuel = 100;
    };
    return Player;
}());
// Opponent Class
var Opponent = /** @class */ (function () {
    function Opponent(name) {
        this.fuel = 100;
        this.name = name;
    }
    Opponent.prototype.fuelDecrease = function () {
        var fuel = this.fuel - 25;
        this.fuel = fuel;
    };
    return Opponent;
}());
// Player name
var player = await inquirer_1.default.prompt({
    type: "input",
    message: "Type Your Name Here: ",
    name: "name",
});
// Opponent Name Selection
var opponent = await inquirer_1.default.prompt({
    type: "list",
    name: "select",
    message: "Select the Opponent: ",
    choices: ["Wolf", "Zombie", "Assassin"],
});
// Data Collection
var p1 = new Player(player.name);
var o1 = new Opponent(opponent.select);
// Showing Names
console.log("".concat(chalk_1.default.green.bold.italic(p1.name), " VS ").concat(chalk_1.default.red.bold.italic(o1.name)));
// Showing Fuels
console.log("".concat(chalk_1.default.blueBright.bold("Player Health:"), " ").concat(chalk_1.default.green(p1.fuel), " ").concat(chalk_1.default.redBright.bold("Opponent Health:"), " ").concat(chalk_1.default.red(o1.fuel)));
function game() {
    return __awaiter(this, void 0, void 0, function () {
        var choice, num, choice, num, choice, num;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(opponent.select == "skeleton")) return [3 /*break*/, 2];
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            type: "list",
                            name: "player",
                            message: "Available Option For Player: ",
                            choices: ["Attack", "Drink Protein", "Sprint Fast"],
                        })];
                case 1:
                    choice = _a.sent();
                    if (choice.player == "Attack") {
                        num = Math.floor(Math.random() * 2);
                        if (num == 0) {
                            o1.fuelDecrease();
                            console.log("Player Health: ".concat(chalk_1.default.green(p1.fuel), " Opponent Health: ").concat(chalk_1.default.red(o1.fuel)));
                            if (o1.fuel <= 0) {
                                console.log(chalk_1.default.green.bold.italic("You Won"));
                                process.exit();
                            }
                        }
                        if (num == 1) {
                            p1.fuelDecrease();
                            console.log("Player Health: ".concat(chalk_1.default.green(p1.fuel), " Opponent Health: ").concat(chalk_1.default.red(o1.fuel)));
                            if (p1.fuel <= 0) {
                                console.log(chalk_1.default.red.bold.italic("You Loose, Try Again"));
                                process.exit();
                            }
                        }
                    }
                    if (choice.player == "Drink Protein") {
                        p1.fuelIncrease();
                    }
                    if (choice.player == "Sprint Fast") {
                        console.log(chalk_1.default.red.bold.italic("You Loose, Try Again"));
                        process.exit();
                    }
                    _a.label = 2;
                case 2:
                    if (!(opponent.select == "zombie")) return [3 /*break*/, 4];
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            type: "list",
                            name: "player",
                            message: "please slect option",
                            choices: ["Attack", "Drink Protein", "Sprint Fast"],
                        })];
                case 3:
                    choice = _a.sent();
                    if (choice.player == "Attack") {
                        num = Math.floor(Math.random() * 2);
                        if (num == 0) {
                            o1.fuelDecrease();
                            console.log("Player Health: ".concat(chalk_1.default.green(p1.fuel), " Opponent Health: ").concat(chalk_1.default.red(o1.fuel)));
                            if (o1.fuel <= 0) {
                                console.log(chalk_1.default.green.bold.italic("You Won"));
                                process.exit();
                            }
                        }
                        if (num == 1) {
                            p1.fuelDecrease();
                            console.log("Player Health: ".concat(chalk_1.default.green(p1.fuel), " Opponent Health: ").concat(chalk_1.default.red(o1.fuel)));
                            if (p1.fuel <= 0) {
                                console.log(chalk_1.default.red.bold.italic("You Loose, Try Again"));
                                process.exit();
                            }
                        }
                    }
                    if (choice.player == "Drink Protein") {
                        p1.fuelIncrease();
                    }
                    if (choice.player == "Sprint Fast") {
                        console.log(chalk_1.default.red.bold.italic("You Loose, Try Again"));
                        process.exit();
                    }
                    _a.label = 4;
                case 4:
                    if (!(opponent.select == "assassin")) return [3 /*break*/, 6];
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            type: "list",
                            name: "player",
                            message: "please slect option",
                            choices: ["Attack", "Drink Portion", "Run for Your Life.."],
                        })];
                case 5:
                    choice = _a.sent();
                    if (choice.player == "Attack") {
                        num = Math.floor(Math.random() * 2);
                        if (num == 0) {
                            o1.fuelDecrease();
                            console.log("Player Health: ".concat(chalk_1.default.green(p1.fuel), " Opponent Health: ").concat(chalk_1.default.red(o1.fuel)));
                            if (o1.fuel <= 0) {
                                console.log(chalk_1.default.green.bold.italic("You Won"));
                                process.exit();
                            }
                        }
                        if (num == 1) {
                            p1.fuelDecrease();
                            console.log("Player Health: ".concat(chalk_1.default.green(p1.fuel), " Opponent Health: ").concat(chalk_1.default.red(o1.fuel)));
                            if (p1.fuel <= 0) {
                                console.log(chalk_1.default.red.bold.italic("You Loose, Try Again"));
                                process.exit();
                            }
                        }
                    }
                    if (choice.player == "Drink Portion") {
                        p1.fuelIncrease();
                    }
                    if (choice.player == "Run for Your Life..") {
                        console.log(chalk_1.default.red.bold.italic("You Loose, Try Again"));
                        process.exit();
                    }
                    _a.label = 6;
                case 6:
                    if (true) return [3 /*break*/, 0];
                    _a.label = 7;
                case 7: return [2 /*return*/];
            }
        });
    });
}
game();
