import "dotenv/config";
import request from "supertest";
import { StatusCodes } from "http-status-codes";
import { app } from "../app";

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

    expect(response.statusCode).toEqual(StatusCodes.CREATED);
    expect(response.body).toEqual(
      expect.objectContaining({
        success: true,
        data: expect.objectContaining({ first_name: expect.any(String) }),
        jwt: expect.any(String),
      })
    );
  });

  it("POST /check-mail -->  check if mail exist in DB", async () => {
    const response = await request(app)
      .post(`${URL_VERSION}/auth/check-mail`)
      .send(TEST_USER.email);

    expect(response.statusCode).toEqual(StatusCodes.OK);
    expect(response.body).toEqual(
      expect.objectContaining({
        success: true,
        does_exist: expect.any(Boolean),
      })
    );
  });
});
