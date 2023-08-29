//Exercice en pair programming Eline/Pierre

//let trip = "Perdita 8 10 8" => Exemple de réservation avec "Nom heure durée prix"

//----------------------Etape1------------------------
//let clientTrip = "Perdita 8 10 8"
//Fonction par moi
// function parseTrip(tripToParse) {
//    const objetTrip = tripToParse.split(' ');
//    return {
//     client : objetTrip[0],
//     start : objetTrip[1],
//     duration : objetTrip[2],
//     price : objetTrip[3]
//    }
// }
//let tabTrip = parseTrip(clientTrip)
//Fonction correction
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

//---------------------Etape2-------------------------
let tripsToParse = [
	"Roger 0 5 10",
	"Pongo 3 7 14",
	"Perdita 8 10 8",
	"Anita 16 3 7"
]
//Fonction écrite par moi
// function parseTrips(trips) {
//     const results = []
// 	for (actualTrip of trips) {
//         const objetActualTrip = parseTrip(actualTrip)
//         results.push(objetActualTrip)
//       }
//       return results
//     }
//     console.log(parseTrips(tripsToParse))

//Fonction correction
function parseTrips(trips) {
  const results = []
  for (let i = 0 ; i < trips.length ; i++) {
    const voyageActuel = trips [i]
    const voyageActuelObjet = parseTrip(voyageActuel)
    results.push(voyageActuelObjet)
  }
  return results
}

//--------------------Etape3---------------------------
//Focntion écrite par moi
// function getTripsPrice(voyages) {
//   let totalPrices = [];
//   let sumPrices = 0;
//   for (let i=0; i<voyages.length; i++) {
//     const prices = voyages[i];
//     const priceObject = parseTrip(prices);
//     totalPrices.push(priceObject.price);
//     sumPrices += parseInt(totalPrices[i]);
//   }
//   return sumPrices
// }
//Fonction correction
function getTripPrice(tripsArray) {
  let tripsPrice = 0
  for(let i=0; i<tripsArray.length;i++) {
    let trip = tripsArray[i]
    tripsPrice += trip.price
  }
  return tripsPrice
}

let trips = parseTrips(tripsToParse)
console.log(trips)
console.log(getTripPrice(trips))
