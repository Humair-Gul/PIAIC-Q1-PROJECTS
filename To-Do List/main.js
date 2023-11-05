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
var todos = [];
function createTodo(todos) {
    return __awaiter(this, void 0, void 0, function () {
        var _loop_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _loop_1 = function () {
                        var answer, addTodo, updateTodo_1, newTodo, updateTodo_2, newTodo;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0: return [4 /*yield*/, inquirer_1.default.prompt({
                                        type: "list",
                                        name: "selectOperation",
                                        message: "Select operation for To Do list",
                                        choices: ["Add", "Update", "View", "Delete"]
                                    })];
                                case 1:
                                    answer = _b.sent();
                                    if (!(answer.selectOperation === "Add")) return [3 /*break*/, 3];
                                    return [4 /*yield*/, inquirer_1.default.prompt({
                                            type: "input",
                                            name: "AddTodo",
                                            message: "Add an item to the to-do list: "
                                        })];
                                case 2:
                                    addTodo = _b.sent();
                                    todos.push(addTodo.AddTodo);
                                    console.log(todos);
                                    _b.label = 3;
                                case 3:
                                    if (!(answer.selectOperation === "Update")) return [3 /*break*/, 5];
                                    return [4 /*yield*/, inquirer_1.default.prompt([{
                                                type: "list",
                                                name: "SelectTodo",
                                                choices: todos.map(function (item) { return item; }),
                                                message: "Select an item to update the to-do list: "
                                            },
                                            {
                                                type: "input",
                                                name: "AddTodo",
                                                message: "Add an item to to do list:"
                                            }])];
                                case 4:
                                    updateTodo_1 = _b.sent();
                                    console.log(updateTodo_1.SelectTodo);
                                    newTodo = todos.filter(function (val) { return val !== updateTodo_1.SelectTodo; });
                                    todos = __spreadArray(__spreadArray([], newTodo, true), [updateTodo_1.AddTodo], false);
                                    console.log(todos);
                                    _b.label = 5;
                                case 5:
                                    if (answer.selectOperation === "View") {
                                        console.log(todos);
                                    }
                                    if (!(answer.selectOperation === "Delete")) return [3 /*break*/, 7];
                                    return [4 /*yield*/, inquirer_1.default.prompt({
                                            type: "list",
                                            name: "DeleteTodo",
                                            choices: todos.map(function (item) { return item; }),
                                            message: "Select an item to delete from to-do list: "
                                        })];
                                case 6:
                                    updateTodo_2 = _b.sent();
                                    newTodo = todos.filter(function (val) { return val !== updateTodo_2.DeleteTodo; });
                                    todos = __spreadArray([], newTodo, true);
                                    console.log(todos);
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
    });
}
createTodo(todos);
