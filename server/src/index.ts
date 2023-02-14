import "dotenv/config";
import { app } from "./app";
import { connectDb } from "./config/connectDB";

const PORT = process.env.APP_PORT || 5000;

const start = async () => {
  try {
    
    await connectDb(process.env.MONGO!);
    app.listen(PORT, () => {
      console.log(
          `server running in ${process.env.NODE_ENV} mode on port ${PORT}`
      );
    });
  } catch (error) {
    console.log(error);
  }
};

start()
