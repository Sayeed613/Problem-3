const inputArray = ["MA", "SA", "I", "SCH", "OOL"];

const charToLower = char => char.toLowerCase();

const wordToLower = word => word.split("").map(charToLower).join("");

const arrayToLower = arr => arr.map(wordToLower);

const outputArray = arrayToLower(inputArray);

const outputContainer = document.getElementById("outputContainer");

outputContainer.innerHTML += `<p>Sample Input: [${inputArray.join(", ")}]</p>`;
outputContainer.innerHTML += `<p>Sample Output: [${outputArray.join(", ")}]</p>`;