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
    'accommodation.features': 'Komfortable senger,Moderne bad,Kjøkkenfasiliteter,Wi-Fi',
    
    // Accommodation specific
    'accommodation.yourHome': 'Ditt hjem borte fra hjemmet',
    'accommodation.description': 'Komfortabel overnatting designet for minneverdige opphold i naturen',
    'accommodation.exteriorView': 'Utvendig visning',
    'accommodation.floorPlan': 'Plantegning',
    'accommodation.outdoorBBQ': 'Utendørs BBQ-område',
    'accommodation.perfectFor': 'Perfekt for gruppemåltider og kveldssamlinger under den nordiske himmelen',
    'accommodation.facilities': 'Fasiliteter',
    'accommodation.fullKitchen': 'Fullt kjøkken',
    'accommodation.bathrooms': 'Bad',
    'accommodation.cozyBedrooms': 'Koselige soverom',
    'accommodation.commonAreas': 'Fellesområder',
    'accommodation.bbqFeatures': 'BBQ-funksjoner',
    'accommodation.outdoorGrill': 'Utendørs grill',
    'accommodation.picnicTables': 'Piknikbord',
    'accommodation.firePit': 'Bålplass',
    'accommodation.seatingArea': 'Sitteområde',
    'accommodation.accommodationFeatures': 'Overnattingsfunksjoner',
    'accommodation.idealFor': 'Ideell for opptil 12 gjester, med dedikerte mannlige og kvinnelige soveområder.',
    'accommodation.modernAppliances': 'Moderne kjøkkenutstyr',
    'accommodation.spacesForGathering': 'Rom for samlinger',
    'accommodation.outdoorSpaces': 'Utendørsområder for alle årstider',

    // Location
    'location.title': 'Sted & Kontakt',
    'location.subtitle': 'Finn veien til Søreng Gård',
    'location.address': 'Søreng Gård, Norge',
    'location.directions': 'Kjør langs E6 nordover, ta av ved avkjørsel 45',
    'location.contact': 'Kontakt oss',
    'location.email': 'E-post',
    'location.phone': 'Telefon',
    'location.address.label': 'Adresse',
    
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
  }
};

export const supportedLanguages = [
  { code: 'no', name: 'Norsk', flag: '🇳🇴' },
  { code: 'en', name: 'English', flag: '🇬🇧' }
];

export type LanguageCode = 'no' | 'en';
