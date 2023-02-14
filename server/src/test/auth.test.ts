import request from "supertest";
import "dotenv/config";
import { app } from "../app";
import { connectDb } from "../config/connectDB";

const URL_VERSION = "/api/v1";
// const url = process.env.MONGO!

beforeEach(async () => {
  await connectDb(process.env.MONGO!);
});

describe("Auth API", () => {
  it("POST /sign-in --> create a user", async () => {
    const data = {
      first_name: "Test_Name",
      middle_name: null,
      last_name: "Test_LastNAme",
      phone_number: "07098358392",
      email: "test@gmail.com",
      password: "password",
    };

    const response = await request(app)
      .post(`${URL_VERSION}/sign-in`)
      .send(data);
    // console.log(response);

    // expect(response.headers["Content-Type"]).toBe(/json/)
    expect(response.body).toEqual(
      expect.objectContaining({
        success: expect.any(Boolean),
        data: expect.objectContaining({ first_name: expect.any(String) }),
        jwt: expect.any(String),
      })
    );
    //   _id: expect.any(String),
    //   first_name: expect.any(String),
    //   completed: true,
    // });
    // // expect(response.body.completed).toBeBoolean();

    // expect(response.body).toBeGreaterThanOrEqual(3);
  });
});
