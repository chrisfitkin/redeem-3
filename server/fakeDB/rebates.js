var rebates = [
  {
    "id": 1,
    "title": "Men's UA Micro G Speed Swift Running Shoes",
    "slug": "under-armour-micro-g-shoes",
    "amazon": "https://www.amazon.com/Under-Armour-Micro-Speed-Running/dp/B00ZV9RHVA",
    "amount": 15.00,
    "image": "https://images-na.ssl-images-amazon.com/images/I/81FoRoQ9MJL._UX695_.jpg",
    "brand": {
      "title": "Under Armour",
      "logo": "http://logok.org/wp-content/uploads/2015/06/Under-Armour-Logo-UA.png"
    }
  },
  {
    "id": 2,
    "title": "Storm Undeniable II Medium Duffle",
    "slug": "under-armor-duffle-bag",
    "amazon": "https://www.amazon.com/Under-Armour-Storm-Undeniable-Duffle/dp/B00OU2RWB4",
    "amount": 10.00,
    "image": "https://images-na.ssl-images-amazon.com/images/I/91xKOgtXcBL._SL1500_.jpg",
    "brand": {
      "title": "Under Armour",
      "logo": "http://logok.org/wp-content/uploads/2015/06/Under-Armour-Logo-UA.png"
    }
  },
  {
    "id": 3,
    "title": "Cedar Street Small Hayden Top Handle Bag",
    "slug": "kate-spade-hayden-bag",
    "amazon": "https://www.amazon.com/Street-Hayden-Satchel-Adventure-Bright/dp/B01DTQAD0S",
    "amount": 30.00,
    "image": "https://images-na.ssl-images-amazon.com/images/I/91CyjMvhCUL._UX425_.jpg",
    "brand": {
      "title": "kate spade new york",
      "logo": "https://barbaraufblog.files.wordpress.com/2016/01/kate-spade-logo.jpg"
    }
  },
  {
    "id": 4,
    "title": "Playskool Mr. Potato Head Spudtrooper",
    "slug": "playskool-mr-potato-head-spudtrooper",
    "amazon": "https://www.amazon.com/Playskool-Mr-Potato-Head-Spudtrooper/dp/B00TPB0PU0",
    "amount": 2.00,
    "image": "https://images-na.ssl-images-amazon.com/images/I/81-lkdwsN9L._SL1500_.jpg",
    "brand": {
      "title": "Playskool",
      "logo": "http://www.hasbro.com/images/brandpages/logo_playskool"
    }
  },
  {
    "id": 5,
    "title": "Beats Solo3 Wireless On-Ear Headphone - Gold",
    "slug": "beats-solo3-headphone-gold",
    "amazon": "https://www.amazon.com/Beats-Solo3-Wireless-Ear-Headphone/dp/B01LZK4QRU",
    "amount": 30.00,
    "image": "https://images-na.ssl-images-amazon.com/images/I/411i5iDOuwL.jpg",
    "brand": {
      "title": "beats by dr. dre",
      "logo": "http://logok.org/wp-content/uploads/2014/08/Beats-logo.png"
    }
  }
]

/*
// duplicate the seed array, a lot
for (var i=0;i<3;i++) {
  rebates = rebates.concat(rebates);
}
*/

// set a unique id
const uuidV4 = require("uuid/v4")
rebates = rebates.map(function (obj) {
  return {
    ...obj,
    uuid: uuidV4()
  }
})

var uuids = rebates.map((obj) => obj.uuid)
// console.log(uuids);
// console.log(rebates);

export default rebates
