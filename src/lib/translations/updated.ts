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
    'footer.copyright': '© 2024 Søreng Gård. Alle rettigheter forbeholdt.',
    
    // Contact
    'contact.email': 'thomas.soreng.m@gmail.com',
    'contact.phone': '+47 973 47 639',
    'contact.location': 'Søreng Gård, Norge',
    
    // Buttons
    'button.explore': 'Utforsk',
    'button.learnMore': 'Lær mer',
    'button.bookNow': 'Bestill nå',
    'button.contact': 'Kontakt oss',
    
    // Sections
    'section.seasons': 'Årstids eventyr',
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
    'activities.cliffside.title': 'Cliffside Ocean View',
    'activities.cliffside.description': 'En naturskjønn klippe med utsikt over havet i Sørenggård.',
    'activities.cliffside2.title': 'Another Cliffside View',
    'activities.cliffside2.description': 'Enda en vakker utsikt over havet fra klippene.',
    'activities.swimday.title': 'Svømmedag med Eier',
    'activities.swimday.description': 'En dag med svømming sammen med tjenesteeier og deres barn.',
    'activities.outdoorpool.title': 'Utendørs Basseng',
    'activities.outdoorpool.description': 'Et naturlig utendørs svømmebasseng i resortområdet.',
    
    // Spring activities
    'activities.springmeadow.title': 'Vår-eng',
    'activities.springmeadow.description': 'En blomstrende bakkeeng i vårsesongen.',
    'activities.springhillside.title': 'Vår-bakke',
    'activities.springhillside.description': 'En levende bakkeutsikt om våren.',
    
    // Winter activities
    'activities.winterlodge.title': 'Vinter-lodge',
    'activities.winterlodge.description': 'En koselig lodge omgitt av snødekte bakker om vinteren.',
    'activities.wintervillage.title': 'Vinterlandsby',
    'activities.wintervillage.description': 'En malerisk vinterscene i landsbyområdet.',
    'activities.snowmelts.title': 'Snøsmelting om Vår',
    'activities.snowmelts.description': 'Smeltende snø som signaliserer slutten på vinteren.',
    
    // Autumn activities
    'activities.mapleleaves.title': 'Fallende Lønneløv',
    'activities.mapleleaves.description': 'Lønneløv som faller forsiktig i høstbrisen.',

    // Accommodation
    'accommodation.title': 'Overnatting',
    'accommodation.subtitle': 'Koselige og komfortable steder å bo',
    'accommodation.cabin.name': 'Hytte',
    'accommodation.cabin.description': 'Tradisjonell norsk hytte med moderne fasiliteter',
    'accommodation.lodge.name': 'Lodge',
    'accommodation.lodge.description': 'Romslig lodge med panoramautsikt',
    'accommodation.tent.name': 'Telt',
    'accommodation.tent.description': 'Luksustelt midt i naturen',
    'accommodation.features': 'Komfortable senger,Moderne bad,Kjøkkenfasciliteter,Wi-Fi',

    // Location
    'location.title': 'Sted & Kontakt',
    'location.subtitle': 'Finn veien til Søreng Gård',
    'location.address': 'Søreng Gård, Norge',
    'location.directions': 'Kjør langs E6 nordover, ta av ved avkjørsel 45',
    'location.contact': 'Kontakt oss',
    'location.email': 'E-post',
    'location.phone': 'Telefon',
    'location.address.label': 'Adresse',
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
    'footer.description': 'Where nature embraces you. Creating unforgettable adventures and meaningful connections in Norway\'s serene landscapes.',
    'footer.quickLinks': 'Quick Links',
    'footer.connect': 'Connect With Us',
    'footer.madeWith': 'Made with',
    'footer.for': 'for nature-loving children',
    'footer.copyright': '© 2024 Søreng Gård. All rights reserved.',
    
    // Contact
    'contact.email': 'thomas.soreng.m@gmail.com',
    'contact.phone': '+47 973 47 639',
    'contact.location': 'Søreng Gård, Norway',
    
    // Buttons
    'button.explore': 'Explore',
    'button.learnMore': 'Learn More',
    'button.bookNow': 'Book Now',
    'button.contact': 'Contact Us',
    
    // Sections
    'section.seasons': 'Seasonal Adventures',
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
    'activities.cliffside.title': 'Coastal Cliff Views',
    'activities.cliffside.description': 'Breathtaking panoramic views from dramatic coastal cliffs overlooking the pristine Norwegian waters.',
    'activities.cliffside2.title': 'Ocean Vista Point',
    'activities.cliffside2.description': 'Spectacular elevated viewpoints showcasing the endless horizon where sky meets sea.',
    'activities.swimday.title': 'Swimming Adventures',
    'activities.swimday.description': 'Refreshing aquatic experiences in crystal-clear natural waters, perfect for family bonding.',
    'activities.outdoorpool.title': 'Natural Swimming Pool',
    'activities.outdoorpool.description': 'Serene outdoor swimming areas surrounded by untouched nature and peaceful landscapes.',
    
    // Spring activities
    'activities.springmeadow.title': 'Spring Wildflower Meadow',
    'activities.springmeadow.description': 'Vibrant meadows bursting with colorful wildflowers and fresh spring fragrances.',
    'activities.springhillside.title': 'Spring Hillside Trails',
    'activities.springhillside.description': 'Scenic hillside paths adorned with spring blossoms and awakening wildlife.',
    
    // Winter activities
    'activities.winterlodge.title': 'Cozy Winter Lodge',
    'activities.winterlodge.description': 'Warm and inviting lodge nestled among snow-covered hills, offering comfort and stunning winter views.',
    'activities.wintervillage.title': 'Winter Wonderland',
    'activities.wintervillage.description': 'Enchanting winter scenes straight from a fairytale, with pristine snow and traditional Norwegian charm.',
    'activities.snowmelts.title': 'Spring Awakening',
    'activities.snowmelts.description': 'The magical transition from winter to spring as snow gives way to new life and growth.',
    
    // Autumn activities
    'activities.mapleleaves.title': 'Autumn Foliage',
    'activities.mapleleaves.description': 'Stunning autumn colors as maple leaves create a golden carpet across the landscape.',

    // Accommodation
    'accommodation.title': 'Accommodation',
    'accommodation.subtitle': 'Cozy and comfortable places to stay',
    'accommodation.cabin.name': 'Cabin',
    'accommodation.cabin.description': 'Traditional Norwegian cabin with modern amenities',
    'accommodation.lodge.name': 'Lodge',
    'accommodation.lodge.description': 'Spacious lodge with panoramic views',
    'accommodation.tent.name': 'Luxury Tent',
    'accommodation.tent.description': 'Luxury tent in the heart of nature',
    'accommodation.features': 'Comfortable beds,Modern bathrooms,Kitchen facilities,Wi-Fi',

    // Location
    'location.title': 'Location & Contact',
    'location.subtitle': 'Find your way to Søreng Gård',
    'location.address': 'Søreng Gård, Norway',
    'location.directions': 'Drive along E6 north, take exit 45',
    'location.contact': 'Contact us',
    'location.email': 'Email',
    'location.phone': 'Phone',
    'location.address.label': 'Address',
  }
};

export const supportedLanguages = [
  { code: 'no', name: 'Norsk', flag: '🇳🇴' },
  { code: 'en', name: 'English', flag: '🇬🇧' }
];

export type LanguageCode = 'no' | 'en';
