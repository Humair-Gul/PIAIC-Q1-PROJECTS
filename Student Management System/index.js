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
var Student = /** @class */ (function () {
    function Student(name, courses) {
        this.studentID = generateStudentID();
        this.name = name;
        this.courses = courses;
        this.balance = 0;
    }
    Student.prototype.enrollCourse = function (course) {
        this.courses.push(course);
    };
    Student.prototype.viewBalance = function () {
        return this.balance;
    };
    Student.prototype.payTuition = function (amount) {
        this.balance -= amount;
    };
    Student.prototype.showStatus = function () {
        return "Name: ".concat(this.name, "\nID: ").concat(this.studentID, "\nCourses Enrolled: ").concat(this.courses.join(", "), "\nBalance: $").concat(this.balance);
    };
    return Student;
}());
function generateStudentID() {
    return Math.floor(10000 + Math.random() * 90000).toString();
}
function studentOperations() {
    return __awaiter(this, void 0, void 0, function () {
        var students, operation, _a, name_1, courses, student, studentID, student, course, amount;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    students = {};
                    _b.label = 1;
                case 1:
                    if (!true) return [3 /*break*/, 12];
                    return [4 /*yield*/, inquirer_1.default.prompt([
                            {
                                type: "list",
                                name: "operation",
                                message: "Select an operation:",
                                choices: [
                                    "Add Student",
                                    "Enroll in Course",
                                    "View Balance",
                                    "Pay Tuition",
                                    "Show Status",
                                    "Exit",
                                ],
                            },
                        ])];
                case 2:
                    operation = (_b.sent()).operation;
                    if (operation === "Exit") {
                        return [3 /*break*/, 12];
                    }
                    if (!(operation === "Add Student")) return [3 /*break*/, 4];
                    return [4 /*yield*/, inquirer_1.default.prompt([
                            {
                                type: "input",
                                name: "name",
                                message: "Enter student name:",
                            },
                            {
                                type: "input",
                                name: "courses",
                                message: "Enter courses (comma-separated):",
                            },
                        ])];
                case 3:
                    _a = _b.sent(), name_1 = _a.name, courses = _a.courses;
                    student = new Student(name_1, courses.split(",").map(function (course) { return course.trim(); }));
                    students[student.studentID] = student;
                    console.log("Student has been added with ID: ".concat(student.studentID));
                    return [3 /*break*/, 11];
                case 4: return [4 /*yield*/, inquirer_1.default.prompt([
                        {
                            type: "input",
                            name: "studentID",
                            message: "Enter student ID:",
                        },
                    ])];
                case 5:
                    studentID = (_b.sent()).studentID;
                    student = students[studentID];
                    if (!student) {
                        console.log("Student is not in the List");
                        return [3 /*break*/, 1];
                    }
                    if (!(operation === "Enroll in Course")) return [3 /*break*/, 7];
                    return [4 /*yield*/, inquirer_1.default.prompt([
                            {
                                type: "input",
                                name: "course",
                                message: "Enter course name:",
                            },
                        ])];
                case 6:
                    course = (_b.sent()).course;
                    student.enrollCourse(course);
                    console.log("Enrolled in ".concat(course));
                    return [3 /*break*/, 11];
                case 7:
                    if (!(operation === "View Balance")) return [3 /*break*/, 8];
                    console.log("Balance: $".concat(student.viewBalance()));
                    return [3 /*break*/, 11];
                case 8:
                    if (!(operation === "Pay Tuition")) return [3 /*break*/, 10];
                    return [4 /*yield*/, inquirer_1.default.prompt([
                            {
                                type: "input",
                                name: "amount",
                                message: "Enter tuition amount to be paid: ",
                            },
                        ])];
                case 9:
                    amount = (_b.sent()).amount;
                    student.payTuition(parseFloat(amount));
                    console.log("Paid $".concat(amount, " in tuition"));
                    return [3 /*break*/, 11];
                case 10:
                    if (operation === "Show Status") {
                        console.log(student.showStatus());
                    }
                    _b.label = 11;
                case 11: return [3 /*break*/, 1];
                case 12: return [2 /*return*/];
            }
        });
    });
}
studentOperations();
