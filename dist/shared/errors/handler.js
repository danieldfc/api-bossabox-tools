"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var yup_1 = require("yup");
var AppError_1 = __importDefault(require("./AppError"));
var errorHandler = function (error, request, response, _) {
    if (error instanceof yup_1.ValidationError) {
        var errors_1 = {};
        error.inner.forEach(function (err) {
            errors_1[err.path] = err.errors;
        });
        return response.status(400).json({ message: 'Validation fails', errors: errors_1 });
    }
    if (error instanceof AppError_1.default) {
        return response.status(error.statusCode).json({
            status: 'error',
            message: error.message,
        });
    }
    console.log(error);
    return response.status(500).json({ message: 'Internal server error.' });
};
exports.default = errorHandler;
