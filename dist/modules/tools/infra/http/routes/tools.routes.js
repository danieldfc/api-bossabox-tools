"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var TagToolsController_1 = __importDefault(require("../controllers/TagToolsController"));
var ToolsController_1 = __importDefault(require("../controllers/ToolsController"));
var toolRoutes = express_1.Router();
var toolsController = new ToolsController_1.default();
var tagToolsController = new TagToolsController_1.default();
toolRoutes.get('/', tagToolsController.index);
toolRoutes.get('/all', toolsController.index);
toolRoutes.post('/', toolsController.create);
toolRoutes.delete('/:id', toolsController.destroy);
exports.default = toolRoutes;
