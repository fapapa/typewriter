const sentence = "hello there from lighthouse labs";

let counter = 0;
for (const char of (sentence + "\n")) {
  setTimeout(() => {
    process.stdout.write(char);
  }, counter * 50);
  counter++;
}
