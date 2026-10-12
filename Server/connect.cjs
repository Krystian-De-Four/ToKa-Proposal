const { MongoClient } = require("mongodb")
require("dotenv").config({ path: "./config.env" })

async function main() {

    const uri = process.env.ATLAS_URI

    if (!uri) {
        throw new Error("ATLAS_URI is missing from config.env");
    }

    const client = new MongoClient(uri)

    try {
        await client.connect();
        console.log("Successfully connected to MongoDB!");

    } catch (error) {
        console.error("MongoDB connection failed:", error);
    } finally {
        await client.close();

    }

}

main();