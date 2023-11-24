import fs from "fs"; // Import the file system module
import { rawData } from "../data/raw_data.mjs";
import { v4 as uuidv4 } from "uuid"; // UUID library

function transformData(data) {
  const pattern = /\*\*"(.*?)"\*\* - "(.*?)"(\n|$)/g;
  const transformedData = [];

  let match;
  while ((match = pattern.exec(data)) !== null) {
    transformedData.push({
      id: uuidv4(),
      phrase: match[1].trim(),
      translation: match[2].trim(),
    });
  }

  return transformedData;
}

const PHRASES = transformData(rawData);

// Write to a file
const filePath = "./data/phrases_tmp.json"; // Adjust the path as needed
fs.writeFile(filePath, JSON.stringify(PHRASES, null, 2), "utf8", (err) => {
  if (err) {
    console.error("An error occurred:", err);
    return;
  }
  console.log(`Data written to ${filePath}`);
});
