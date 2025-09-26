[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=20742198&assignment_repo_type=AssignmentRepo)
# JavaScript Foundation - Benchmark: Travel Booking System 

**You will create a simple "Travel Booking System" that allows users to manage and view bookings for different types of travel (such as flights, trains, or buses). You’ll define classes, create objects, use arrays, and write functions to work with your data.**

## Task
### 1. Define a `Booking` Class
- Create a class named `Booking`.
- The class should have the following properties:
  - `travelerName`
  - `destination`
  - `date`
  - `type` (for example: flight, train, bus)
- Add a method called `describe()` that returns a string describing the booking.
  - `travelerName` booked a `type` to `destination` on `date`.

### 2. Create a Subclass called `FlightBooking`
- Create at least one subclass of `Booking` (for example: `FlightBooking`).
- The subclass should hold an additional property:
  - Add property property `flightNumber`
  - Override the `describe()` method to include the additional property in the description.
    -  `travelerName` booked a flight to `destination` on `date` (Flight Number: `flightNumber`).

### 3. Manage a List of Bookings
- Create an array called `bookings` to hold booking objects.
  - Add at least three bookings to the array (make sure the bookings are of more than one type).

### 4. Add Booking Information
- Create a function called `addBooking`
  - This function should take in a booking object and add it to the array.

### 5. Add Booking Information
- Create a function called `removeBooking`
  - This function should take in a booking object and remove it from the array.

### 6. Display Booking Information
- Create a function called `displayBooking`
  - This function should use a loop to display the description of each booking in the array by calling their `describe()` method.

### 7. Find Bookings by Type
- Create a function called `bookingType` that takes a type (e.g., `"flight"`) and an array as an argument and returns all bookings of that type from your array.


## Example
If you have the following data in your array
The output of your program should look something like this if I call displayBooking:

```
All bookings:
Alice Smith booked a flight to Paris on 2025-10-15 (Flight Number: AF123).
Bob Jones booked a train to Berlin on 2025-11-01.
Cara Lee booked a flight to Tokyo on 2025-12-05 (Flight Number: JL456).
```

The output of your program should look something like this if I call typeBooking:
```
All flight bookings:
Alice Smith booked a flight to Paris on 2025-10-15 (Flight Number: AF123).
Cara Lee booked a flight to Tokyo on 2025-12-05 (Flight Number: JL456).
```

