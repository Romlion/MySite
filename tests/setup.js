/* eslint-disable no-undef */
require("dotenv").config();

const request = require("supertest");

const app = require("../../app");
const tables = require("../src/tables");
const database = require("../src/database/client");

afterAll((done) => {
    database.end().then(done);
});

module.exports = { app, database, request, tables };