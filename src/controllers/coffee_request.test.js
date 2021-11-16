const request = require("supertest");
const app = require("../app");

describe("Test coffee API endpoint request", () => {
    test("GET /coffeelover should return correct message", async () => {
        const res = await request(app).get("/coffeelover");
        expect(res.statusCode).toEqual(200);
        expect(res.text).toEqual("I like coffee!");
    });
    test("GET /coffee should return correct object", async () => {
        const res = await request(app)
            .get("/coffee")
            .query({ coffeeName: 'Latte' });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({
            drinkType: "Coffee",
            name: "Latte",
        });
    });
    test("GET /coffee - coffeeName: Americano", async () => {
        const res = await request(app)
            .get("/coffee")
            .query({ coffeeName: 'Americano' });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({
            drinkType: "Coffee",
            name: "Americano",
        });
    });
    test("GET /coffee - no coffeeName", async () => {
        const res = await request(app)
            .get("/coffee");
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({
            drinkType: "Coffee",
            name: "Latte",
        });
    });
});
