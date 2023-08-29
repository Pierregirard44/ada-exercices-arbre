let tripsToParse = [
	"Roger 0 5 10",
	"Pongo 3 7 14",
	"Perdita 8 10 8",
	"Anita 16 3 7"
]
function parseTrip(trip) {
  const myArray = trip.split(" ");
  const myObject ={
    client:myArray[0],
    start: parseInt(myArray[1]),
    duration: parseInt(myArray[2]),
    price: parseInt(myArray[3])
  }
  return myObject;
}
function parseTrips(trips) {
  const results = []
  for (let i = 0 ; i < trips.length ; i++) {
    const voyageActuel = trips[i]
    const voyageActuelObjet = parseTrip(voyageActuel)
    results.push(voyageActuelObjet)
  }
  return results
}
function getTripPrice(tripsArray){
  let tripsPrice = 0
  for(let i=0; i < tripsArray.length; i++){
    let trip = tripsArray[i]
    tripsPrice += trip.price
  }
  return tripsPrice
}
let trips = parseTrips(tripsToParse)
console.log(trips)
console.log(getTripPrice(trips))

//----------------------étape4-------------------

function checkCompatibilty(tripA, tripB) {
  let arrivalTime = tripA.start + tripA.duration
  if (arrivalTime <= tripB.start) {
    return true
  }
  return false
}

console.log(checkCompatibilty(trips[0],trips[1]))