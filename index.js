// add solution here


function theBeatlesPlay(musicians, instruments) {
  const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
  const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]
  let beatles = []
  for (let i = 0; i <= 3; i++) {
    beatles.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatles
}
