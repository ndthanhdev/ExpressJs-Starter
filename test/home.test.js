var jest = require("jest");
var supertest = require("supertest");
const request = supertest("http://localhost:3000");

describe("GET /", () => {
    it("should return 200 OK", () => {
        return request.get("/").then(res => {
            expect(res.status).toBe(200);
        });
    });
});