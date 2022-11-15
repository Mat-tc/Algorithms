const input = [];
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input.push(line);
  })
  .on("close", () => {
    console.log(solution(input));
    process.exit();
  });

const solution = (input) => {
  const arr = [];
  for (let i = 1; i <= Number(input[0]); i++) {
    arr.push(Number(input[i]));
  }
  console.log(
    arr
      .sort((a, b) => {
        return b - a;
      })
      .join("\n")
  );
};
