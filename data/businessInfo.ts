export const businessInfo = {
  name: "Anaplak Art And Glam Salon",
  alternateName: "Anaplak Salon",
  url: "https://anaplakartandglamsalon.com",
  foundingDate: "2020",
  award: "Best Salon in Maduravoyal 2026",
  description:
    "Premium hair salon and bridal makeup studio in Chennai, Maduravoyal offering expert hair styling, colouring, keratin treatments, facials, nail care and luxury beauty services.",
  email: "anaplakartandglamsalon@gmail.com",

  phone: {
    primary: "+919840088867",
    secondary: "+919840088861",
    primaryDisplay: "+91 98400 88867",
    secondaryDisplay: "+91 98400 88861",
    primaryHref: "tel:+919840088867",
    secondaryHref: "tel:+919840088861",
  },

  whatsapp: {
    number: "919840088867",
    defaultMessage: "Hi! I would like to book an appointment at Anaplak Art and Glam Salon.",
  },

  address: {
    streetAddress:
      "No. 4B/9 3, Vadavanniamman Nagar 1st St, CDN Nagar, 2nd Floor, 4th Block, MMDA Colony",
    addressLocality: "Maduravoyal",
    addressRegion: "Tamil Nadu",
    postalCode: "600095",
    addressCountry: "IN",
    oneLine:
      "2nd Floor, No. 4B/9 3, Vadavanniamman Nagar 1st St, CDN Nagar, 4th Block, MMDA Colony, Maduravoyal, Chennai, Tamil Nadu 600095",
    displayLines: [
      "2nd Floor, No. 4B/9 3, Vadavanniamman Nagar 1st St,",
      "CDN Nagar, 4th Block, MMDA Colony,",
      "Maduravoyal, Chennai – 600095",
    ],
  },

  geo: {
    latitude: 13.064977,
    longitude: 80.172559,
  },

  hours: {
    everyDay: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "10:00",
    closes: "21:00",
    weekdaysLabel: "Mon - Sun: 10:00 AM - 9:00 PM",
    sundayLabel: "Sunday: 10:00 AM - 9:00 PM",
  },

  placeId: "ChIJ5R3P1HxIuJoRk3OviXZ9FVA",

  maps: {
    searchUrl:
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent(
        "Anaplak Art and Glam Salon, 2nd Floor, No. 4B/9 3, Vadavanniamman Nagar 1st St, CDN Nagar, 4th Block, MMDA Colony, Maduravoyal, Chennai 600095"
      ),
  },

  bookingUrl: "https://www.welns.io/product/booking/WFRCHN984305/Anaplak?bk_src=GMAPS110",

  sameAs: [
    "https://www.facebook.com/anaplakartandglam",
    "https://www.instagram.com/anaplak_art_and_glam_salon",
    "https://www.youtube.com/@Anaplakartandglamsalon/",
  ],

  socials: {
    instagram: "https://www.instagram.com/anaplak_art_and_glam_salon",
    facebook: "https://www.facebook.com/anaplakartandglam",
    youtube: "https://www.youtube.com/@Anaplakartandglamsalon/",
    whatsapp: "https://wa.me/919840088867",
  },
}

export function mapsEmbedSrc(key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) {
  if (!key) {
    return `https://www.google.com/maps/embed/v1/place?key=&q=place_id:${businessInfo.placeId}`
  }
  return `https://www.google.com/maps/embed/v1/place?key=${key}&q=place_id:${businessInfo.placeId}`
}

export function whatsappDeepLink(message = businessInfo.whatsapp.defaultMessage) {
  return `https://wa.me/${businessInfo.whatsapp.number}?text=${encodeURIComponent(message)}`
}