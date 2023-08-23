import { getBands, getBookings, getVenues, getMembers } from "./database.js";

const bands = getBands()
const venues = getVenues()
const bookings = getBookings()
const members = getMembers()

const memberInfo = (membersArray) => {
    let info = ""
    for (const member of membersArray) {
        info += `${member.firstName} ${member.lastName} (${member.role})\n`
    }
    return info
}

document.addEventListener(
    "click",
    (clickEvent) => {

        const band = clickEvent.target
        let venueIds = []
        let venueNames = []
        let membersList = []
        const separator = "\n"

        if (band.dataset.type === "band") {
            for (const booking of bookings) {
                if (booking.bandId == band.dataset.bandId && !venueIds.includes(booking.venueId)) {
                    venueIds.push(booking.venueId)
                }
            }

            for (const venueId of venueIds) {
                for (const venue of venues) {
                    if (venueId == venue.id) {
                        venueNames.push(venue.name)
                    }
                }
            }

            for (const member of members) {
                if (member.bandId == band.dataset.bandId) {
                    membersList.push(member)
                }
            }

            if (venueNames.length > 0) {
                window.alert(`Band Members:\n${memberInfo(membersList)}\n${band.dataset.bandName} has booked the following venues:\n${venueNames.join(separator)}`)
            } else {
                window.alert(`Performer:\n${memberInfo(membersList)}\n${band.dataset.bandName} hasn't made a booking yet`)
            }
        }
    }
)

export const bandsList = () => {
    let html = "<ul>"

    for (const band of bands) {
        html +=
        `
        <li class="band__item">
            <div>
                <img src="${band.image}" alt="${band.name}" class="band__image" data-type="band" data-band-name="${band.name}" data-band-id="${band.id}">
                <p data-type="band" data-band-name="${band.name}" data-band-id="${band.id}">${band.name}</p>
            <div>
        </li>
        ` 
    }

    html += "</ul>"

    return html
}