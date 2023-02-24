import "dotenv/config";
import request from "supertest";
import UserMockData from "../util/mock/user.data";
import { StatusCodes } from "http-status-codes";
import { app } from "../app";
import { IUser } from "../types/entity.types";

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
  it("POST /sign-up --> create a user", async () => {
    const response = await request(app)
      .post(`${URL_VERSION}/auth/sign-up`)
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
      .send({ email: TEST_USER.email });

    expect(response.statusCode).toEqual(StatusCodes.OK);
    expect(response.body).toEqual(
      expect.objectContaining({
        success: true,
        does_exist: expect.any(Boolean),
      })
    );
  });

  it("POST /sign-in --> log existing user in", async () => {
    const response = await request(app)
      .post(`${URL_VERSION}/auth/sign-in`)
      .send({ email: TEST_USER.email, password: TEST_USER.password });

    expect(response.statusCode).toEqual(StatusCodes.OK);
    expect(response.body).toEqual(
      expect.objectContaining({
        success: true,
        data: expect.objectContaining({ first_name: expect.any(String) }),
        jwt: expect.any(String),
      })
    );
  });
});
