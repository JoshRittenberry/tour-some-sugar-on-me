import { bookingsList } from "./bookings.js"
import { bandsList } from "./bands.js"
import { venuesList } from "./venues.js"


const bookingsContainer = document.querySelector(".bookings__list")
const bookingsHTML = bookingsList()
bookingsContainer.innerHTML = bookingsHTML

const bandsContainer = document.querySelector(".bands__list")
const bandsHTML = bandsList()
bandsContainer.innerHTML = bandsHTML

const venuesContainer = document.querySelector(".venues__list")
const venuesHTML = venuesList()
venuesContainer.innerHTML = venuesHTML