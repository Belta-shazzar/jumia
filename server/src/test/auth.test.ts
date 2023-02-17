import request from "supertest";
import "dotenv/config";
import { app } from "../app";
import { connectDB, dropDB, dropCollections } from "../config/test.db";

const URL_VERSION = "/api/v1";

const TEST_USER = {
  first_name: "Test1",
  last_name: "User1",
  phone_number: "07098237829",
  email: "test@gmail.com",
  gender: "MALE",
  dob: "1993/02/20",
  password: "password",
};


describe("Auth API", () => {
  it("POST /sign-in --> create a user", async () => {
    const response = await request(app)
      .post(`${URL_VERSION}/auth/sign-in`)
      .send(TEST_USER);

    expect(response.statusCode).toEqual(201)
    expect(response.body).toEqual( 
      expect.objectContaining({
        success: expect.any(Boolean),
        data: expect.objectContaining({ first_name: expect.any(String) }),
        jwt: expect.any(String),
      })
    );
  });
});
