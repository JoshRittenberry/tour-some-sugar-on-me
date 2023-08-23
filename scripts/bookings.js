import { getBookings, getBands, getVenues } from "./database.js";

const bookings = getBookings()
const bands = getBands()
const venues = getVenues()

// Function sorts an array of objects by its date property
const compareDates = (a, b) => {
    return a.date - b.date
}

// This invokes the above function to get all of the bookings ordered by their date
const bookingsOrdered = bookings.sort(compareDates)

// The funciton below gets the date property, that is an integer, and converts it to a legible date string
const formatDate = (date) => {
    const dateString = date.toString()

    const year = dateString.substring(0, 4)
    const month = dateString.substring(4, 6)
    const day = dateString.substring(6, 8)

    const formattedDate = new Date(year, month -1, day).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    })

    return formattedDate
}

export const bookingsList = () => {
    let html = "<ul>"
    let bandObject = ""
    let venueObject = ""

    for (const booking of bookingsOrdered) {

        let date = formatDate(booking.date)

        // Foor loop checks to find the band object that matches the bandId in the booking, sets that object to the variable bandObject
        for (const band of bands) {
            if (band.id === booking.bandId) {
                bandObject = band.name
            }
        }

        // Foor loop checks to find the venue object that matches the venueId in the booking, sets that object to the variable venueObject
        for (const venue of venues) {
            if (venue.id === booking.venueId){
                venueObject = venue.name
            }
        }

        html +=
        `
        <li class="booking_item" data-type="booking">${bandObject} are playing at ${venueObject} on ${date}</li>
        `

    }

    html += "</ul>"
    
    return html
}