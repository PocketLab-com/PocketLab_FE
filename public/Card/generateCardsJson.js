// scripts/generateCardList.js
const fs = require("fs");
const path = require("path");

const cardRoot = path.join(__dirname, "./");
const outputFilePath = path.join(__dirname, "./cards.json");

const cardList = [];

function walkDirectory(currentDirPath, relativePath = "") {
  const files = fs.readdirSync(currentDirPath);
  for (const file of files) {
    const fullPath = path.join(currentDirPath, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      walkDirectory(fullPath, path.join(relativePath, file));
    } else if (file.endsWith(".webp")) {
      const setName = relativePath.replace(/\\/g, "/"); // e.g., a1a-kr
      const cardNumber = path.basename(file, ".webp");  // e.g., 42
      const imagePath = path.posix.join("/Card", setName, file); // e.g., /Card/a1a-kr/42.webp

      cardList.push({
        id: `${setName}-${cardNumber}`,
        set: setName,
        number: cardNumber,
        image: imagePath,
      });
    }
  }
}

walkDirectory(cardRoot);
fs.mkdirSync(path.dirname(outputFilePath), { recursive: true });
fs.writeFileSync(outputFilePath, JSON.stringify(cardList, null, 2), "utf8");

console.log(`✅ ${cardList.length} cards saved to ${outputFilePath}`);
