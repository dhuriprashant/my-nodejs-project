const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const csv = require("csv-parser");

const filename = path.resolve("./data", "contact_data.csv");
// Read file asynchronously using promises
const readFile = promisify(fs.readFile);

async function readFileContent() {
  try {
    //const fileContent = await readFile(filename, "utf-8");
    const jsonData = [];

    // Parse the CSV file
    fs.createReadStream(filename)
      .pipe(csv())
      .on("data", (data) => jsonData.push(data))
      .on("end", () => {
        // Do something with the JSON data
        console.log(jsonData);
      });
  } catch (error) {
    // Handle error
    console.error(error);
  }
}

readFileContent();
