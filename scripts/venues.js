import { getVenues, getBookings, getBands } from "./database.js";

const venues = getVenues()
const bookings = getBookings()
const bands = getBands()

document.addEventListener(
    "click",
    (clickEvent) => {

        const venue = clickEvent.target
        let bandIds = []
        let bandNames = []
        const separator = "\n"

        if (venue.dataset.type === "venue") {
            for (const booking of bookings) {
                if (booking.venueId == venue.dataset.venueId && !bandIds.includes(booking.bandId)) {
                    bandIds.push(booking.bandId)
                }
            }

            for (const bandId of bandIds) {
                for (const band of bands) {
                    if (bandId == band.id) {
                        bandNames.push(band.name)
                    }
                }
            }

            window.alert(`The ${venue.dataset.venueName} has been booked by the following bands:\n${bandNames.join(separator)}`)
        }
    }
)

export const venuesList = () => {
    let html = "<ul>"
    // let html = ""

    for (const venue of venues) {
        html +=
        `
        <li class="venue__item">
            <img src="${venue.image}" alt="${venue.name}" class="venue__image" data-type="venue" data-venue-name="${venue.name}" data-venue-id="${venue.id}">
            <div class="venue__text" data-type="venue" data-venue-name="${venue.name}" data-venue-id="${venue.id}">${venue.name}</div>
        </li>
        ` 
    }

    html += "</ul>"

    return html
}