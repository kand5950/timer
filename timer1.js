const args = process.argv
  .slice(2)
  .filter(char => !isNaN(char))
  .filter(char => char >= 0);

for (const char of args) {
  setTimeout(() => {
    process.stdout.write(`\x07`);
  }, char);
  
}