myArgs = process.argv.slice(2).map(x => x * 1000);
//first tone
let sounds = 0

for (const i of myArgs) {
  if (i === i) {
    
  }
}

console.log(myArgs)
for (let i = 0; i < myArgs.length; i++) {
  
  sounds += myArgs[i]  
  setTimeout( () => {process.stdout.write('\x07')}
  , sounds )

  sounds += myArgs[i];

  console.log(sounds)


}
