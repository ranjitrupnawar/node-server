"use strict";
// src/server.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const utils_1 = require("../src/utils");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.post('/add', (req, res) => {
    const { a, b } = req.body;
    if (typeof a === 'number' && typeof b === 'number') {
        res.json({ result: (0, utils_1.add)(a, b) });
    }
    else {
        res.status(400).json({ error: 'Invalid input' });
    }
});
app.post('/multiply', (req, res) => {
    const { a, b } = req.body;
    if (typeof a === 'number' && typeof b === 'number') {
        res.json({ result: (0, utils_1.multiply)(a, b) });
    }
    else {
        res.status(400).json({ error: 'Invalid input' });
    }
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
exports.default = app;
