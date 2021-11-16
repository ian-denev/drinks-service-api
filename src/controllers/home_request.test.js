const request = require("supertest");
const app = require("../app");

describe("Test home API endpoint request", () => {
    test("GET should return correct message", async () => {
        const res = await request(app).get("/");
        expect(res.statusCode).toEqual(200);
        expect(res.text).toEqual("Welcome to the Drinks API!");
    })
});
