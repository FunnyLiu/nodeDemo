import { client } from "@gradio/client";

const app = await client("http://47.100.220.105:32002/"); // a Space that translates from English to French
const job = app.submit(0, ["Hello, how are you?"]); // runs the prediction in a background thread
job.on("data", (data) => console.log(data)); // prints the result when available
// [ "Bonjour, comment allez-vous?" ]