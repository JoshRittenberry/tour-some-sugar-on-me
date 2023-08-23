import { getBands } from "./database.js";

const bands = getBands()

export const bandsList = () => {
    let html = "<ul>"

    for (const band of bands) {
        html +=
        `
        <div class="band__item" data-type="band" data-band-id="${band.id}">
            <div>
                <img src="${band.image}" alt="${band.name}" class="band__image">
                <p>${band.name}</p>
            <div>
        </div>
        ` 
    }

    html += "</ul>"

    return html
}