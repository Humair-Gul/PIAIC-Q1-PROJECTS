#!/usr/bin/env node
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var chalk_1 = require("chalk");
var EmojiPerson = /** @class */ (function () {
    function EmojiPerson() {
        this.emoji = '🧑';
    }
    EmojiPerson.prototype.changeEmoji = function (mood) {
        switch (mood) {
            case 'happy':
                this.emoji = '😄';
                break;
            case 'sad':
                this.emoji = '😢';
                break;
            case 'excited':
                this.emoji = '🎉';
                break;
            case 'relaxed':
                this.emoji = '😌';
                break;
            default:
                this.emoji = '🤔';
        }
    };
    EmojiPerson.prototype.getEmoji = function () {
        return this.emoji;
    };
    return EmojiPerson;
}());
var EmojiPersonWithInfo = /** @class */ (function (_super) {
    __extends(EmojiPersonWithInfo, _super);
    function EmojiPersonWithInfo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = '';
        return _this;
    }
    Object.defineProperty(EmojiPersonWithInfo.prototype, "setName", {
        set: function (value) {
            this.name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmojiPersonWithInfo.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    return EmojiPersonWithInfo;
}(EmojiPerson));
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var questions, answers, person;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    questions = [
                        {
                            type: 'input',
                            name: 'name',
                            message: 'Write Your Name Here: ',
                        },
                        {
                            type: 'list',
                            name: 'mood',
                            message: 'How Is Your Mood Today: ',
                            choices: ['Happy', 'Sad', 'Excited', 'Relaxed'],
                        },
                    ];
                    return [4 /*yield*/, inquirer_1.default.prompt(questions)];
                case 1:
                    answers = _a.sent();
                    person = new EmojiPersonWithInfo();
                    person.setName = answers.name;
                    person.changeEmoji(answers.mood);
                    console.log(chalk_1.default.green("Greetings, "), chalk_1.default.greenBright.bold("".concat(person.getName)), chalk_1.default.green('!'));
                    console.log(chalk_1.default.blue("Today Your Mood is: "), chalk_1.default.greenBright.bold("".concat(person.getEmoji())));
                    return [2 /*return*/];
            }
        });
    });
}
main();
