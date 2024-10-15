import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

export const Connection = async () => {
    const URL = "mongodb+srv://chethan1234:neogchethan@neog.nxppkiu.mongodb.net/dataViz?retryWrites=true&w=majority&appName=neoG"
    try {
        await mongoose.connect(`${URL}`)
        console.log("Database Connected Successfully.");
    } catch (error) {
        console.log("Error while connecting with database", error);
    }
}

export default Connection