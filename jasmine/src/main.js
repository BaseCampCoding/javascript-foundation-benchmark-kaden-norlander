class Booking{
    constructor(travelerName, destination, date, type){
        this.travelerName = travelerName;
        this.destination = destination;
        this.date = date;
        this.type = type;
    }
    describe(){
        console.log(`${this.travelerName} booked a ${this.type} to ${this.destination} on ${this.date}.`)
    }
}

class FlightBooking extends Booking{
    constructor(travelerName, destination, date, flightNumber, type = "flight"){
        super(travelerName, destination, date);
        this.type = type
        this.flightNumber = flightNumber;
    }
    describe(){
        console.log(`${this.travelerName} booked a flight to ${this.destination} on ${this.date} (Flight Number: ${this.flightNumber}).`)
    }
}

let bookings = [];
bookings.push(new FlightBooking("Alice Smith", "Paris", "2025-10-15", "AF123"))
bookings.push(new Booking("Bob Jones", "Berlin", "2025-11-01", "train"))
bookings.push(new FlightBooking("Cara Lee", "Tokyo", "2025-12-05", "JL456"))

function addBooking(object) {
    bookings.push(object);
}

function removeBooking(object) {
    bookings.splice(object, 1);
}

function displayBooking(array){
    console.log(`All bookings:`)
    array.forEach(element => {
            element.describe()
    });
}

let testBookings = [];
testBookings.push(new FlightBooking("Alice Smith", "Paris", "2025-10-15", "AF123"))
testBookings.push(new Booking("Bob Jones", "Berlin", "2025-11-01", "train"))
testBookings.push(new FlightBooking("Cara Lee", "Tokyo", "2025-12-05", "JL456"))

function findBookingsByType(type, array){
    console.log("All flight bookings:")
    for (i = 0; i < array.length; i++) {
        let object = array[i]
        if (object.type === type) {
            object.describe()
        }
    }
}

console.log(findBookingsByType("flight" ,testBookings))