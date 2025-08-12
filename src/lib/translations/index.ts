export interface Translation {
  [key: string]: string;
}

export interface Translations {
  [lang: string]: Translation;
}

export const translations: Translations = {
  no: {
    // Hero Section
    'hero.title': 'SØRENG GÅRD',
    'hero.tagline': 'Der eventyret begynner',
    'hero.cta': 'Utforsk årstidene',
    
    // Navigation
    'nav.seasons': 'Årstider',
    'nav.activities': 'Aktiviteter',
    'nav.accommodation': 'Overnatting',
    'nav.location': 'Sted',
    
    // Footer
    'footer.title': 'Søreng Gård',
    'footer.description': 'Der naturen omfavner deg. Skaper uforglemmelige eventyr og meningsfulle forbindelser i Norges rolige landskap.',
    'footer.quickLinks': 'Hurtiglenker',
    'footer.connect': 'Koble til oss',
    'footer.madeWith': 'Laget med',
    'footer.for': 'for naturglade barn',
    'footer.copyright': '© 2024 Søreng Gård. All rights reserved',
    
    // Contact
    'contact.email': 'thomas.soreng.m@gmail.com',
    'contact.phone': '+47 973 47 639',
    'contact.location': 'Kystveien 131',
    
    // Buttons
    'button.explore': 'Utforsk',
    'button.learnMore': 'Lær mer',
    'button.bookNow': 'Bestill nå',
    'button.contact': 'Kontakt oss',
    
    // Sections
    'section.seasons': 'Årstids eventyr',
    'section.seasons2': 'Opplev magien i norsk natur gjennom kvar sesong',
    'section.activities': 'Aktivitetsgalleri',
    'section.accommodation': 'Overnatting',
    'section.location': 'Sted & kontakt',
    
    // Season specific
    'seasons.summer.name': 'Sommer',
    'seasons.summer.tagline': 'Eventyr & Oppdagelse',
    'seasons.summer.description': 'Padling gjennom krystallklare farvann, fjelltur i storslått natur, og utendørs lek under den endeløse nordiske solen.',
    'seasons.summer.activities': 'Padling,Fjelltur,Utelek,Svømming',
    
    'seasons.autumn.name': 'Høst',
    'seasons.autumn.tagline': 'Varme & Refleksjon',
    'seasons.autumn.description': 'Samlinger rundt knitrende bål, skogseventyr, og koselige kvelder fylt med historier.',
    'seasons.autumn.activities': 'Bålhistorier,Skogsturer,Håndverk,Stjernekikking',
    
    'seasons.winter.name': 'Vinter',
    'seasons.winter.tagline': 'Magi & Undring',
    'seasons.winter.description': 'Snøeventyr, koselig hytteliv, og den fortryllende skjønnheten i norsk vinterlandskap.',
    'seasons.winter.activities': 'Snølek,Hytteliv,Vinterhåndverk,Nordlys',
    
    'seasons.spring.name': 'Vår',
    'seasons.spring.tagline': 'Vekst & Fornyelse',
    'seasons.spring.description': 'Naturens oppvåkning, blomstersanking, og feiring av nye begynnelser i blomstrende enger.',
    'seasons.spring.activities': 'Naturvandringer,Hagearbeid,Blomstersanking,Fuglekikking',

    // Activities Gallery
    'activities.title': 'Aktivitetsgalleri',
    'activities.subtitle': 'Utforsk våre mest populære aktiviteter',
    'activities.kayaking': 'Padling',
    'activities.hiking': 'Fjelltur',
    'activities.camping': 'Camping',
    'activities.fishing': 'Fiske',
    'activities.nature': 'Naturvandringer',
    'activities.crafts': 'Håndverk',
    'activities.stargazing': 'Stjernekikking',
    'activities.birdwatching': 'Fuglekikking',
    
    // Summer activities
    'activities.cliffside.title': 'Klippeside havutsikt',
    'activities.cliffside.description': 'Ein naturskjønn klippe som ser ut over havet i Sorenggard',
    'activities.cliffside2.title': 'Endå ein utsikt frå klippekanten',
    'activities.cliffside2.description': 'Enda en vakker utsikt over havet fra klippene.',
    'activities.swimday.title': 'Svømmedag med eigaren',
    'activities.swimday.description': 'Ein dag med svømming saman med eigaren av tenesta og deira barn',
    'activities.outdoorpool.title': 'Utandørs svømmebasseng',
    'activities.outdoorpool.description': 'Ein naturleg utandørs svømmebasseng i ferieområdet',
    
    // Spring activities
    'activities.springmeadow.title': 'Spring Meadow',
    'activities.springmeadow.description': 'Ei blomstrande bakkemeis på våren',
    'activities.springhillside.title': 'Våråsen',
    'activities.springhillside.description': 'Ein livleg utsikt over åsen om våren',
    
    // Winter activities
    'activities.winterlodge.title': 'Vinterhøgda ',
    'activities.winterlodge.description': 'Ei kosleg hytte omringa av snødekte bakkar om vinteren',
    'activities.wintervillage.title': 'Vinterlandsbyutsikt',
    'activities.wintervillage.description': 'Ein pittoresk vinterscene i landsbyområdet',
    'activities.snowmelts.title': 'Snog smeltar om våren',
    'activities.snowmelts.description': 'Smeltande snø signaliserer slutten på vinteren',
    
    // Autumn activities
    'activities.mapleleaves.title': 'Fallande lønnblad',
    'activities.mapleleaves.description': 'Akslar som fell mjukt i haustbrisen',

    // Accommodation
    'accommodation.cabin.name': 'Fullt kjøkken',
    'accommodation.cabin.description': 'Moderne matlagingsfasilitetar',
    'accommodation.lodge.name': 'Bad',
    'accommodation.lodge.description': 'Reine, private fasilitetar',
    'accommodation.tent.name': 'Koselige soverom',
    'accommodation.tent.description': 'Komfortable soveplassar',
    'accommodation.commonAreas': 'Fellesområder',
    'accommodation.commonAreas2': 'Koselige fellesområder for gruppeaktivitetar',
    'accommodation.spacesForGathering': 'Plassar for samling',
    
    // Accommodation specific
    'accommodation.yourHome': 'Ditt hjem borte fra hjemmet',
    'accommodation.description': 'Behageleg overnatting designa for minneverdige opphalda i naturen',
    'accommodation.exteriorView': 'Utvendig visning',
    'accommodation.floorPlan': 'Plantegning',
    'accommodation.outdoorBBQ': 'Utendørs grillområde',
    'accommodation.perfectFor': 'Perfekt for gruppemåltider og hyggelige kvelder under den nordiske himmelen',
    'accommodation.facilities': 'Fasiliteter',
    'accommodation.fullKitchen': 'Fullverdig kjøkken med moderne apparater',
    'accommodation.bathrooms': 'Bad',
    'accommodation.cozyBedrooms': 'Koselige soverom',
    'accommodation.bbqFeatures': 'Grillfasiliteter',
    'accommodation.outdoorGrill': 'Utendørs grill',
    'accommodation.picnicTables': 'Piknikbord',
    'accommodation.firePit': 'Bålplass',
    'accommodation.seatingArea': 'Sitteområde',
    'accommodation.accommodationFeatures': 'Overnattingsfasiliteter',
    'accommodation.idealFor': 'Ideelt for opptil 12 gjester, med dedikerte mannlige og kvinnelige soveområde',
    'accommodation.modernAppliances': 'Moderne kjøkkenutstyr',
    'accommodation.outdoorSpaces': 'Uteområder for alle årstider',

    // Location
    'location.title': 'Sted & Kontakt',
    'location.subtitle': 'Finn veien til Søreng Gård',
    'location.address': 'Addrese',
    'location.directions': 'Kjør langs E6 nordover, ta av ved avkjørsel 45',
    'location.contact': 'Kontakt oss',
    'location.email': 'E-mail',
    'location.phone': 'Telefon',
    'location.address.label': 'Søreng Gård',
    
    // Location specific
    'location.findUs': 'Finn oss i naturen',
    'location.description': 'Plassert i de fredelige åsene i Søreng, hvor vill skjønnhet møter enkel tilgang',
    'location.description2': 'Perfekt for utandørsaktivitetar',
    'location.howToGetHere': 'Slik kommer du hit',
    'location.byCar': 'Med bil: Kjør 2,5 timer nord fra Oslo via E6, avkjørsel til Øyer/Søreng',
    'location.byTrain': 'Med tog: Tog til Lillehammer, deretter lokalbuss eller taxi (30 min)',
    'location.byAir': 'Med fly: Fly til Oslo lufthavn, deretter 2,5 times kjøretur nord til Søreng',
    'location.openInMaps': 'Åpne i kart',
    'location.currentWeather': 'Nåværende vær',
    'location.sunrise': 'Soloppgang',
    'location.humidity': 'Luftfuktighet',
    'location.sunset': 'Solnedgang',
    'location.getInTouch': 'Ta kontakt',
    'location.readyToStart': 'Klar til å starte eventyret?',
    'location.contactUsToday': 'Kontakt oss i dag',
    
    // Common UI elements
    'ui.loading': 'Laster...',
    'ui.error': 'En feil oppstod',
    'ui.success': 'Vellykket',
    'ui.close': 'Lukk',
    'ui.cancel': 'Avbryt',
    'ui.save': 'Lagre',
    'ui.delete': 'Slett',
    'ui.edit': 'Rediger',
    'ui.view': 'Vis',
    'ui.all': 'Alle',
    'ui.filter': 'Filter',
    'ui.search': 'Søk',
    'ui.previous': 'Forrige',
    'ui.next': 'Neste',
    'ui.of': 'av',
  },
  en: {
    // Hero Section
    'hero.title': 'SØRENG GÅRD',
    'hero.tagline': 'Where Adventure Begins',
    'hero.cta': 'Explore the Seasons',
    
    // Navigation
    'nav.seasons': 'Seasons',
    'nav.activities': 'Activities',
    'nav.accommodation': 'Accommodation',
    'nav.location': 'Location',
    
    // Footer
    'footer.title': 'Søreng Gård',
    'footer.description': 'Where nature embraces you. Creating unforgettable adventures and meaningful connections in Norway\'s serene landscapes',
    'footer.quickLinks': 'Quick Links',
    'footer.connect': 'Connect With Us',
    'footer.madeWith': 'Made with',
    'footer.for': 'for nature-loving children',
    'footer.copyright': '© 2024 Søreng Gård. All rights reserved',
    
    // Contact
    'contact.email': 'thomas.soreng.m@gmail.com',
    'contact.phone': '+47 973 47 639',
    'contact.location': 'Kystveien 131',
    
    // Buttons
    'button.explore': 'Explore',
    'button.learnMore': 'Learn More',
    'button.bookNow': 'Book Now',
    'button.contact': 'Contact Us',
    
    // Sections
    'section.seasons': 'Seasonal Adventures',
    'section.seasons2': 'Experience the magic of Norwegian nature through every season',
    'section.activities': 'Activity Gallery',
    'section.accommodation': 'Accommodation',
    'section.location': 'Location & Contact',
    
    // Season specific
    'seasons.summer.name': 'Summer',
    'seasons.summer.tagline': 'Adventure & Discovery',
    'seasons.summer.description': 'Kayaking through crystal waters, hiking mountain trails, and outdoor games under the endless Nordic sun.',
    'seasons.summer.activities': 'Kayaking,Hiking,Outdoor Games,Swimming',
    
    'seasons.autumn.name': 'Autumn',
    'seasons.autumn.tagline': 'Warmth & Reflection',
    'seasons.autumn.description': 'Gathering around crackling campfires, forest exploration, and cozy evenings filled with stories.',
    'seasons.autumn.activities': 'Campfire Stories,Forest Walks,Craft Making,Stargazing',
    
    'seasons.winter.name': 'Winter',
    'seasons.winter.tagline': 'Magic & Wonder',
    'seasons.winter.description': 'Snow adventures, cozy cabin life, and the enchanting beauty of Norwegian winter landscapes.',
    'seasons.winter.activities': 'Snow Play,Cabin Life,Winter Crafts,Aurora Watching',
    
    'seasons.spring.name': 'Spring',
    'seasons.spring.tagline': 'Growth & Renewal',
    'seasons.spring.description': 'Nature awakening, flower gathering, and celebrating new beginnings in blooming meadows.',
    'seasons.spring.activities': 'Nature Walks,Gardening,Flower Picking,Bird Watching',

    // Activities Gallery
    'activities.title': 'Activity Gallery',
    'activities.subtitle': 'Explore our most popular activities',
    'activities.kayaking': 'Kayaking',
    'activities.hiking': 'Hiking',
    'activities.camping': 'Camping',
    'activities.fishing': 'Fishing',
    'activities.nature': 'Nature Walks',
    'activities.crafts': 'Crafts',
    'activities.stargazing': 'Stargazing',
    'activities.birdwatching': 'Bird Watching',
    
    // Summer activities
    'activities.cliffside.title': 'Cliffside Ocean View',
    'activities.cliffside.description': 'A scenic cliffside overlooking the ocean in Sorenggard',
    'activities.cliffside2.title': 'Another Cliffside View',
    'activities.cliffside2.description': 'Another beautiful view of the ocean from the cliffs',
    'activities.swimday.title': 'Swim Day with Owner',
    'activities.swimday.description': 'A day of swimming with the service owner and their child',
    'activities.outdoorpool.title': 'Outdoor Pool',
    'activities.outdoorpool.description': 'A natural outdoor swimming pool in the resort area',
    
    // Spring activities
    'activities.springmeadow.title': 'Spring Meadow',
    'activities.springmeadow.description': 'A blooming hillside meadow during the spring season',
    'activities.springhillside.title': 'Spring Hillside',
    'activities.springhillside.description': 'A vibrant hillside view in the spring',
    
    // Winter activities
    'activities.winterlodge.title': 'Winter Lodge',
    'activities.winterlodge.description': 'A cozy lodge surrounded by snowy hills during winter.',
    'activities.wintervillage.title': 'Winter Village View',
    'activities.wintervillage.description': 'A picturesque winter scene in the village area',
    'activities.snowmelts.title': 'Snow Melts in Spring',
    'activities.snowmelts.description': 'Melting snow signaling the end of winter',
    
    // Autumn activities
    'activities.mapleleaves.title': 'Falling Maple Leaves',
    'activities.mapleleaves.description': 'Maple leaves falling gently in the autumn breeze',

    //Accomodation
    'accommodation.cabin.name': 'Full Kitchen',
    'accommodation.cabin.description': 'Modern cooking facilities',
    'accommodation.lodge.name': 'Bathrooms',
    'accommodation.lodge.description': 'Clean, private facilities',
    'accommodation.tent.name': 'Cozy Bedrooms',
    'accommodation.tent.description': 'Comfortable sleeping quarters',
    'accommodation.commonAreas': 'Common Areas',
    'accommodation.commonAreas2': 'Cozy common areas for group activities',
    'accommodation.spacesForGathering': 'Spaces for gathering',
    
    // Accommodation Spesific
    'accommodation.yourHome': 'Your Home Away From Home',
    'accommodation.description': 'Comfortable accommodation designed for memorable stays in nature',
    'accommodation.exteriorView': 'Exterior View',
    'accommodation.floorPlan': 'Floor Plan',
    'accommodation.outdoorBBQ': 'Outdoor BBQ Area',
    'accommodation.perfectFor': 'Perfect for group meals and evening gatherings under the Nordic sky',
    'accommodation.facilities': 'Facilities',
    'accommodation.fullKitchen': ' Full kitchen with modern appliances',
    'accommodation.bathrooms': 'Bathrooms',
    'accommodation.cozyBedrooms': 'Cozy Bedrooms',
    'accommodation.bbqFeatures': 'BBQ Features',
    'accommodation.outdoorGrill': 'Outdoor Grill',
    'accommodation.picnicTables': 'Picnic Tables',
    'accommodation.firePit': 'Fire Pit',
    'accommodation.seatingArea': 'Seating Area',
    'accommodation.accommodationFeatures': 'Accommodation Features',
    'accommodation.idealFor': 'Ideal for up to 12 guests, with dedicated male and female sleeping areas',
    'accommodation.modernAppliances': 'Modern Kitchen Appliances',
    'accommodation.outdoorSpaces': 'Outdoor Spaces for All Seasons',
    
    // Location
    'location.title': 'Location & Contact',
    'location.subtitle': 'Find your way to Søreng Gård',
    'location.address': 'Address',
    'location.directions': 'Drive along E6 north, take exit 45',
    'location.contact': 'Contact us',
    'location.email': 'Email',
    'location.phone': 'Phone',
    'location.address.label': 'Søreng Gård',
    
    // Location specific
    'location.findUs': 'Find Us in Nature',
    'location.description': 'Nestled in the peaceful hills of Søreng, where wild beauty meets easy access',
    'location.description2': 'Perfect for outdoor activities',
    'location.howToGetHere': 'How to Get Here',
    'location.byCar': 'By car: Drive 2.5 hours north from Oslo via E6, exit to Øyer/Søreng',
    'location.byTrain': 'By train: Train to Lillehammer, then local bus or taxi (30 min)',
    'location.byAir': 'By air: Fly to Oslo Airport, then 2.5-hour drive north to Søreng',
    'location.openInMaps': 'Open in Maps',
    'location.currentWeather': 'Current Weather',
    'location.sunrise': 'Sunrise',
    'location.humidity': 'Humidity',
    'location.sunset': 'Sunset',
    'location.getInTouch': 'Get In Touch',
    'location.readyToStart': 'Ready to start your adventure?',
    'location.contactUsToday': 'Contact Us Today',
    
    // Common UI elements
    'ui.loading': 'Loading...',
    'ui.error': 'An error occurred',
    'ui.success': 'Success',
    'ui.close': 'Close',
    'ui.cancel': 'Cancel',
    'ui.save': 'Save',
    'ui.delete': 'Delete',
    'ui.edit': 'Edit',
    'ui.view': 'View',
    'ui.all': 'All',
    'ui.filter': 'Filter',
    'ui.search': 'Search',
    'ui.previous': 'Previous',
    'ui.next': 'Next',
    'ui.of': 'of',
  }
};

export const supportedLanguages = [
  { code: 'no', name: 'Norsk', flag: '🇳🇴' },
  { code: 'en', name: 'English', flag: '🇬🇧' }
];

export type LanguageCode = 'no' | 'en';
