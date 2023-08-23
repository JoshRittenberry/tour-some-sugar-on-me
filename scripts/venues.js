import { getVenues } from "./database.js";

const venues = getVenues()

export const venuesList = () => {
    let html = "<ul>"
    // let html = ""

    for (const venue of venues) {
        html +=
        `
        <li class="venue__item" data-type="venue" data-venue-id="${venue.id}">
            <img src="${venue.image}" alt="${venue.name}" class="venue__image">
            <div class="venue__text">${venue.name}</div>
        </li>
        ` 
    }

    html += "</ul>"

    return html
}