"use strict";
// test/utils.test.ts
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const utils_1 = require("../src/utils");
describe('Utils Functions', () => {
    describe('add()', () => {
        it('should return the sum of two numbers', () => {
            (0, chai_1.expect)((0, utils_1.add)(1, 2)).to.equal(3);
            (0, chai_1.expect)((0, utils_1.add)(-1, -2)).to.equal(-3);
            (0, chai_1.expect)((0, utils_1.add)(-1, 2)).to.equal(1);
        });
    });
    describe('multiply()', () => {
        it('should return the product of two numbers', () => {
            (0, chai_1.expect)((0, utils_1.multiply)(2, 3)).to.equal(6);
            (0, chai_1.expect)((0, utils_1.multiply)(-2, -3)).to.equal(6);
            (0, chai_1.expect)((0, utils_1.multiply)(-2, 3)).to.equal(-6);
        });
    });
});
