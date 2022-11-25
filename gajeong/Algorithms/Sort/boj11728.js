const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `2 2
-1 5
2 9`
)
  .trim()
  .split("\n");

const main = (input) => {
  const arr1 = input[1].split(" ").map(Number);
  const arr2 = input[2].split(" ").map(Number);
  const arr = [...arr1, ...arr2];

  console.log(
    arr
      .sort((a, b) => {
        return a - b;
      })
      .join(" ")
  );
};

main(input);
