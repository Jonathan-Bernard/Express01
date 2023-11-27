const request = require("supertest");
const app = require("../app");

describe("GET /api/movies", () => {
  it("should return all movies", async () => {
    const response = await request(app).get("/api/movies");

    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
  });
});

describe("GET /api/movies/:id", () => {
  it("should return movie by ID", async () => {
    const validMovieId = 1;
    const response = await request(app).get(`/api/movies/${validMovieId}`);

    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
  });

  it("should return 404 for non-existent movie ID", async () => {
    const nonExistentMovieId = 0;
    const response = await request(app).get(
      `/api/movies/${nonExistentMovieId}`
    );

    expect(response.status).toEqual(404);
  });
});
