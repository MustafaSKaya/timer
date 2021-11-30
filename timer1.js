const arguments = process.argv.slice(2);

for (let i of arguments) {
  if (Number(i) >= 1) {
    setTimeout(() => {
      console.log(`${i} seconds`);
      process.stdout.write('\x07');
    }, i * 1000);
  }
}