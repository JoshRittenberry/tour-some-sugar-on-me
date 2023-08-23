const database = {
    bands: [
        {
            id: 1,
            name: "The Rolling Stones",
            members: 4,
            genre: "Rock",
            yearFounded: 1962,
            image: "https://is5-ssl.mzstatic.com/image/thumb/Music123/v4/e5/53/4d/e5534d31-443d-3eb7-7d4d-e374259cfdd6/16ABKIM00055.rgb.jpg/600x600bb.jpg",
        },
        {
            id: 2,
            name: "Mumford & Sons",
            members: 4,
            genre: "Folk",
            yearFounded: 2007,
            image: "https://is3-ssl.mzstatic.com/image/thumb/Music/a8/b0/08/mzi.jdnhtolc.jpg/600x600bb.jpg",
        },
        {
            id: 3,
            name: "Fleetwood Mac",
            members: 5,
            genre: "Rock",
            image: "https://is5-ssl.mzstatic.com/image/thumb/Music4/v4/82/3a/d1/823ad171-70ec-63af-48e0-8d0eae935999/075992724128.jpg/600x600bb.jpg",
        },
        {
            id: 4,
            name: "The Avett Brothers",
            members: 3,
            genre: "Folk",
            yearFounded: 2000,
            image: "https://is5-ssl.mzstatic.com/image/thumb/Music/ab/02/91/mzi.ppnitdig.jpg/600x600bb.jpg",
        },
        {
            id: 5,
            name: "The Eagles",
            members: 6,
            genre: "Rock",
            yearFounded: 1971,
            image: "https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/88/90/0d/88900ddb-b23e-c1e6-8147-20eb92340076/081227397128.jpg/600x600bb.jpg",
        },
        {
            id: 6,
            name: "Alison Krauss & Union Station",
            members: 5,
            genre: "Bluegrass",
            yearFounded: 1987,
            image: "https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/8a/55/02/8a5502a7-b1e5-439f-64bc-5e0e9bbe12c1/19CRGIM11917.rgb.jpg/600x600bb.jpg",
        },
        {
            id: 7,
            name: "Creedence Clearwater Revival",
            members: 4,
            genre: "Rock",
            yearFounded: 1967,
            image: "https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/ff/47/e3/ff47e3db-4804-bbbd-afbf-7cf9e0dec02a/00888072355910.rgb.jpg/600x600bb.jpg",
        },
        {
            id: 8,
            name: "The Lumineers",
            members: 3,
            genre: "Folk",
            yearFounded: 2002,
            image: "https://is2-ssl.mzstatic.com/image/thumb/Music114/v4/d9/d7/ee/d9d7ee31-3523-fcac-032b-cd36720d2abd/cover.jpg/600x600bb.jpg",
        },
        {
            id: 9,
            name: "Old Crow Medicine Show",
            members: 6,
            genre: "Bluegrass",
            yearFounded: 1998,
            image: "https://is4-ssl.mzstatic.com/image/thumb/Music/67/77/96/mzi.rorqoofo.jpg/600x600bb.jpg",
        },
        {
            id: 10,
            name: "Lynyrd Skynyrd",
            members: 5,
            genre: "Rock",
            yearFounded: 1964,
            image: "https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/d1/ec/ee/d1ecee5c-1425-1a18-1d68-e9f723d098b5/06UMGIM01482.rgb.jpg/600x600bb.jpg",
        },
        {
            id: 11,
            name: "The Head and the Heart",
            members: 6,
            genre: "Folk",
            yearFounded: 2009,
            image: "https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/f7/05/cc/f705ccf9-d998-60d6-0cd8-1b7b63ddd421/98787091564_1.jpg/600x600bb.jpg",
        },
        {
            id: 12,
            name: "The Grateful Dead",
            members: 6,
            genre: "Rock",
            yearFounded: 1965,
            image: "https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/e9/b6/e2/e9b6e214-1f54-8386-913b-e245fa960ff6/603497920761.jpg/600x600bb.jpg",
        },
        {
            id: 13,
            name: "Nickle Creek",
            members: 3,
            genre: "Bluegrass",
            yearFounded: 1989,
            image: "https://is5-ssl.mzstatic.com/image/thumb/Music/v4/a0/59/12/a0591223-c548-deb0-ba39-277478aecfab/075597955941.jpg/600x600bb.jpg",
        },
        {
            id: 14,
            name: "Tom Petty and the Heartbreakers",
            members: 5,
            genre: "Rock",
            yearFounded: 1976,
            image: "https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/93/93/fa/9393fa7d-e2db-b8d1-752e-ca719aeccff3/093624935735.jpg/600x600bb.jpg",
        },
        {
            id: 15,
            name: "The Civil Wars",
            members: 2,
            genre: "Folk",
            yearFounded: 2008,
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/e3/96/af/e396af82-2437-9e1c-28f0-ab71cedcf118/859749486558_cover.jpg/600x600bb.jpg",
        },
        {
            id: 16,
            name: "Stevie Ray Vaughan and Double Trouble",
            members: 3,
            genre: "Rock",
            yearFounded: 1978,
            image: "https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/db/25/b6/db25b60d-8b54-43b3-4e10-6fd6e85a019a/mzi.qkbchvpj.jpg/600x600bb.jpg",
        },
        {
            id: 17,
            name: "Punch Brothers",
            members: 5,
            genre: "Bluegrass",
            yearFounded: 2006,
            image: "https://is4-ssl.mzstatic.com/image/thumb/Music/21/7f/b7/mzi.taiujmos.jpg/600x600bb.jpg",
        },
        {
            id: 18,
            name: "The Black Keys",
            members: 2,
            genre: "Rock",
            yearFounded: 2001,
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/55/39/ca/5539caf8-333e-5ad2-06ca-eaf5d84cd264/mzm.nmxwulyo.jpg/600x600bb.jpg",
        },
        {
            id: 19,
            name: "Colter Wall",
            members: 1,
            genre: "Country",
            yearFounded: 1995,
            image: "https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/5b/78/8f/5b788f57-ffdd-10c8-4f79-573006211796/886446389035.jpg/600x600bb.jpg",
        },
        {
            id: 20,
            name: "Sturgil Simpson",
            members: 1,
            genre: "Bluegrass",
            yearFounded: 1978,
            image: "https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/d9/19/58/d919580b-404d-a398-511f-9bef33b97037/195497084135.jpg/600x600bb.jpg",
        }
    ],
    venues: [
        {
            id: 1,
            name: "Starlight Grove Pavilion",
            address: "123 Moonlit Lane, Enchanted Woods, Fantasyland",
            size: 10000,
            maxOccupancy: 500,
            image: "https://www.visitcalifornia.com/sites/visitcalifornia.com/files/VC_HistoricMusicVenues_Stock_ED_D19CGP_1280x640.jpg",
        },
        {
            id: 2,
            name: "Neon Skyline Lounge",
            address: "456 Techno Avenue, Futuristic City, Cyberrealm",
            size: 8000,
            maxOccupancy: 300,
            image: "https://www.phillymag.com/wp-content/uploads/sites/3/2018/11/live-music-concert-venue-philadelphia.jpg",
        },
        {
            id: 3,
            name: "Rustic Harmony Barn",
            address: "789 Serene Valley Road, Tranquil Meadows, Countryside",
            size: 6500,
            maxOccupancy: 200,
            image: "https://www.choicehotels.com/cms/images/choice-hotels/demand-articles/image_top-7-must-see-live-music-venues_header/image_top-7-must-see-live-music-venues_header.jpg",
        },
        {
            id: 4,
            name: "Celestial Jazz Garden",
            address: "101 Starstruck Street, Cosmic Plaza, Galaxia",
            size: 12000,
            maxOccupancy: 800,
            image: "https://www.frommers.com/system/media_items/attachments/000/863/112/s980/RedRAmphVDc.jpg?1536101591",
        },
    ],
    bookings: [
        {
            bandId: 5,
            venueId: 2,
            date: 20231013,
        },
        {
            bandId: 1,
            venueId: 4,
            date: 20230115,
        },
        {
            bandId: 2,
            venueId: 3,
            date: 20230205,
        },
        {
            bandId: 8,
            venueId: 1,
            date: 20230306,
        },
        {
            bandId: 9,
            venueId: 4,
            date: 20230423,
        },
        {
            bandId: 6,
            venueId: 3,
            date: 20230517,
        },
        {
            bandId: 7,
            venueId: 2,
            date: 20230610,
        },
        {
            bandId: 14,
            venueId: 1,
            date: 20230708,
        },
        {
            bandId: 11,
            venueId: 4,
            date: 20230829,
        },
        {
            bandId: 10,
            venueId: 3,
            date: 20230922,
        },
        {
            bandId: 12,
            venueId: 2,
            date: 20231018,
        },
        {
            bandId: 13,
            venueId: 1,
            date: 20231109,
        },
        {
            bandId: 4,
            venueId: 3,
            date: 20231212,
        },
        {
            bandId: 15,
            venueId: 4,
            date: 20230107,
        },
        {
            bandId: 16,
            venueId: 2,
            date: 20230220,
        },
        {
            bandId: 18,
            venueId: 1,
            date: 20230314,
        },
        {
            bandId: 17,
            venueId: 3,
            date: 20230411,
        },
        {
            bandId: 3,
            venueId: 4,
            date: 20230525,
        },
        {
            bandId: 1,
            venueId: 2,
            date: 20230629,
        },
        {
            bandId: 2,
            venueId: 1,
            date: 20230730,
        },
        {
            bandId: 4,
            venueId: 4,
            date: 20230805,
        },
        {
            bandId: 7,
            venueId: 3,
            date: 20230918,
        },
        {
            bandId: 6,
            venueId: 2,
            date: 20231009,
        },
        {
            bandId: 5,
            venueId: 1,
            date: 20231114,
        },
        {
            bandId: 12,
            venueId: 4,
            date: 20231202,
        },
        {
            bandId: 15,
            venueId: 3,
            date: 20230128,
        },
        {
            bandId: 14,
            venueId: 2,
            date: 20230215,
        },
        {
            bandId: 17,
            venueId: 1,
            date: 20230310,
        },
        {
            bandId: 16,
            venueId: 4,
            date: 20230404,
        },
        {
            bandId: 9,
            venueId: 3,
            date: 20230527,
        },
        {
            bandId: 10,
            venueId: 2,
            date: 20230621,
        },
        {
            bandId: 13,
            venueId: 1,
            date: 20230717,
        },
        {
            bandId: 18,
            venueId: 4,
            date: 20230812,
        },
        {
            bandId: 3,
            venueId: 3,
            date: 20230909,
        },
        {
            bandId: 11,
            venueId: 2,
            date: 20231006,
        },
        {
            bandId: 6,
            venueId: 1,
            date: 20231123,
        },
        {
            bandId: 4,
            venueId: 4,
            date: 20231219,
        },
        {
            bandId: 2,
            venueId: 3,
            date: 20230104,
        },
        {
            bandId: 1,
            venueId: 2,
            date: 20230208,
        },
        {
            bandId: 5,
            venueId: 1,
            date: 20230325,
        },
        {
            bandId: 7,
            venueId: 4,
            date: 20230416,
        },
        {
            bandId: 8,
            venueId: 3,
            date: 20230510,
        },
        {
            bandId: 13,
            venueId: 3,
            date: 20230527,
        },
        {
            bandId: 2,
            venueId: 2,
            date: 20230621,
        },
        {
            bandId: 18,
            venueId: 1,
            date: 20230717,
        },
        {
            bandId: 7,
            venueId: 4,
            date: 20230812,
        },
        {
            bandId: 4,
            venueId: 3,
            date: 20230909,
        },
        {
            bandId: 9,
            venueId: 2,
            date: 20231006,
        },
        {
            bandId: 1,
            venueId: 1,
            date: 20231123,
        },
        {
            bandId: 17,
            venueId: 4,
            date: 20231219,
        },
        {
            bandId: 13,
            venueId: 3,
            date: 20230104,
        },
        {
            bandId: 5,
            venueId: 2,
            date: 20230208,
        },
        {
            bandId: 7,
            venueId: 1,
            date: 20230325,
        },
        {
            bandId: 8,
            venueId: 4,
            date: 20230416,
        },
        {
            bandId: 11,
            venueId: 3,
            date: 20230510,
        }        
    ]
}

export const getBands = () => {
    return database.bands.map(band => ({...band}))
}

export const getVenues = () => {
    return database.venues.map(venue => ({...venue}))
}

export const getBookings = () => {
    return database.bookings.map(booking => ({...booking}))
}