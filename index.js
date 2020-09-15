// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]

function theBeatlesPlay(musicians, instruments) {
  let beatles = []
  for (let i = 0; i <= 3; i++) {
    beatles.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatles
}

let array = []
function johnLennonFacts(array) {
  const facts = [
    "While on tour, he enjoyed playing Monopoly",
    "Harmonica was the first instrument Lennon learned to play"
  ];
  for (let i = 0; i < facts.length; i++)
  {
    array.push(`${facts[i]}!!!`)
  }
  return array
}
