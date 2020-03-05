const path = require("path");
const fs = require("fs");
let dataPath = (path.join(__dirname, '../chirps.json'))

let chirps = [
  {
    name: "Tim",
    message: "Sup simp salad"
  },
  {
    name: "James",
    message: "Sup pimple pete"
  },
  {
    name: "Carol",
    message: "Are you ready for that PTA meeting?"
  },
  {
    name: "Phyllis",
    message: "I need those TPS reports senpai"
  },
  {
    name: "Richard",
    message: "MY KIDS CAN'T HEAR ME THEY'RE LISTENING TO KIDZ BOP"
  }
];

fs.writeFile(dataPath, JSON.stringify(chirps), (err) => {
    if (err) throw err;
    console.log('Got it!')
})

fs.readFile('chirps.json', (err, data) => {
    if (err) throw err;
    let readChirps = JSON.parse(data);
    console.log(readChirps);
});

