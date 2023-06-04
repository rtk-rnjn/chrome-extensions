// contains a cleaned list of top search terms on wikipedia - gathered Dec 12 2022 - Jan 2 2023
const words = [
  "Unicode subscripts and superscripts",
  "Blackboard bold",
  "Enclosed Alphanumerics",
  "Fraktur",
  "Ordinal indicator",
  "Enclosed Alphanumeric Supplement",
  "Los Angeles",
  "United States",
  "California",
  "Muhammad Ali",
  "Singapore",
  "U.S. state",
  "Edgar Allan Poe",
  "Bachelor of Arts",
  "Hong Kong",
  "Saudi Arabia",
  "Cloud computing",
  "United Arab Emirates",
  "Chicago",
  "ISBN",
  "FIFA",
  "Artificial intelligence",
  "Taylor Swift",
  "George Washington",
  "Elvis Presley",
  "Premier League",
  "George VI",
  "Abraham Lincoln",
  "Steven Spielberg",
  "FC Barcelona",
  "Bing Crosby",
  "Marilyn Monroe",
  "Arnold Schwarzenegger",
  "Atlanta",
  "John F. Kennedy",
  "United States men's national soccer team",
  "Albert Einstein",
  "Lady Gaga",
  "2006 FIFA World Cup",
  "Madonna",
  "Bill Clinton",
  "Los Angeles Rams",
  "List of United States representatives from New York",
  "Henry Kissinger",
  "Zinedine Zidane",
  "Philadelphia",
  "Nancy Pelosi",
  "Star Wars",
  "Hawaii",
  "National Basketball Association",
  "Wolfgang Amadeus Mozart",
  "Cricket",
  "Egypt",
  "Frank Sinatra",
  "A.C. Milan",
  "Tupac Shakur",
  "German language",
  "Franklin D. Roosevelt",
  "Theodore Roosevelt",
  "Spotify",
  "Martin Luther King Jr.",
  "Afghanistan",
  "A Christmas Carol",
  "Muhammad",
  "College Football Playoff",
  "Ronald Reagan",
  "Drake",
  "Manchester City F.C.",
  "2026 FIFA World Cup",
  "Marvel Cinematic Universe",
  "A Christmas Story",
  "Tim Allen",
  "Once Upon a Time in Hollywood",
  "Jennifer Lopez",
  "Kanye West",
  "Cher",
  "Avatar 2009",
  "Dubai",
  "Alexander Hamilton",
  "NATO",
  "Anne Boleyn",
  "Olivier Giroud",
  "Lil Wayne",
  "Detroit",
  "Alexander Hamilton",
  "NASA",
  "Lana Del Rey",
  "UEFA",
  "Katy Perry",
  "Overtime sports",
  "WWE",
  "The Lord of the Rings",
  "Adidas",
  "Willie Nelson",
  "Family Guy",
  "Richard Nixon",
  "List of sovereign states",
  "Game of Thrones",
  "HTML",
  "Lyndon B. Johnson",
  "Sigmund Freud",
  "Jimmy Carter",
  "Dwight D. Eisenhower",
  "Attention deficit hyperactivity disorder",
  "The Daily Show",
  "Glass Onion: A Knives Out Mystery",
  "Neil Armstrong",
  "Black hole",
  "Harry S. Truman",
  "Minnesota",
  "Socrates",
  "UEFA Euro 2024",
  "Rita Ora",
  "Wicket",
  "Thomas Jefferson",
  "Naruto",
  "Catherine Zeta-Jones",
  "Radiohead",
  "Al Jazeera",
  "A. P. J. Abdul Kalam",
  "Sesame Street",
  "Celtic F.C.",
  "List of A Certain Magical Index characters",
  "A-side and B-side",
  "Prince",
  "It's a Wonderful Life",
  "Geographic coordinate system",
  "Star Wars",
  "Year",
  "Airbus A380",
  "Ernest Hemingway",
  "Solar System",
  "Andrea Bocelli",
  "Freemasonry",
  "Kate Winslet",
  "Bernie Sanders",
  "Robin Williams",
  "Tilde",
  "List of municipalities in Michigan",
  "ABBA",
  "The Twelve Days of Christmas",
  "Christopher Columbus",
  "Serie A",
  "UEFA Nations League",
  "Christine McVie",
  "ASEAN",
  "Columbia University",
  "Gwen Stefani",
  "Volodymyr Zelenskyy",
  "Atlético Madrid",
  "Marcus Rashford",
  "Rabindranath Tagore",
  "Wednesday TV series",
  "S.L. Benfica",
  "United States Marine Corps",
  "Hecate",
  "50 Cent",
  "ISO 4217",
  "Rogue One",
  "Gerald Ford",
  "Constitution of the United States",
  "Freddie Mercury",
  "Rihanna",
  "Ulysses S. Grant",
  "Binomial nomenclature",
  "RDFa",
  "Minor League Baseball",
  "Bipolar disorder",
  "Warwick Davis",
  "Rogue One",
  "Anno Domini",
  "Freddie Mercury",
  "Eastern Time Zone",
  "Rihanna",
  "List of A Song of Ice and Fire characters",
  "Binomial nomenclature",
  "Ulysses S. Grant",
  "William Shatner",
  "Kevin Bacon",
  "Toyota",
  "A Song of Ice and Fire",
  "Social media",
  "Banksy",
  "Roy Keane",
  "Benjamin Franklin",
  "ASAP Rocky",
  "SZA",
  "George Orwell",
  "Thomas Edison",
  "Segunda División",
  "Characters of the Marvel Cinematic Universe: A-L",
  "Dallas",
  "Los Angeles Lakers",
  "Pittsburgh",
  "Campeonato Brasileiro Série A",
  "Rowan Atkinson",
  "Mobile country code",
  "Chadwick Boseman",
  "Carrie Fisher",
  "Vanessa Hudgens",
  "Email client",
  "Blade Runner",
  "Ben Affleck",
  "Alan Turing",
  "List of United States counties and county equivalents",
  "AS Monaco FC",
  "Longitude",
  "Noam Chomsky",
  "Andrew Jackson",
  "Woodrow Wilson",
  "Hamilton musical",
  "Juventus F.C.",
  "Flag of the United States",
  "Lion",
  "FA Cup",
  "New Orleans",
  "United States Air Force",
  "Encyclopedia",
  "Oscar Wilde",
  "Odin",
  "DNA",
  "Columbia Pictures",
  "Liz Truss",
  "Lamborghini",
  "John Adams",
  "Rod Stewart",
  "IBM",
  "List of NBA champions",
  "Jennifer Lawrence",
  "James Joyce",
  "Anthony Bourdain",
  "Stan Lee",
  "Texas A&M University",
  "Michael Keaton",
  "Coffee",
  "Olivia Newton-John",
  "The Big Bang Theory",
  "Gianluigi Buffon",
  "Leeds United F.C.",
  "List of Star Wars films",
  "Rugby union",
  "Fairytale of New York",
  "Potluck",
  "List of Star Wars films",
  "Tree",
  "List of NBA champions",
  "Rod Stewart",
  "Astronomical object",
  "Anthony Bourdain",
  "Jared Leto",
  "Sam Taylor-Johnson",
  "Luke Evans",
  "Curling",
  "Alisson",
  "Sally Field",
  "Romeo and Juliet",
  "Raul Julia",
  "Ray Liotta",
  "List of colors: A-F",
  "Michael Keaton",
  "Business",
  "Rafael Leão",
  "2001: A Space Odyssey",
  "NAACP",
  "Thiago Silva",
  "Macbeth",
  "Listed building",
  "Birmingham",
  "Liechtenstein",
  "Language family",
  "Epistemology",
  "Bachelor's degree",
  "Constructed language",
  "Reese Witherspoon",
  "UK Singles Chart",
  "Rwanda",
  "A Christmas Story Christmas",
  "Google Classroom",
  "Archery",
  "Quotation mark",
  "Fiction",
  "Wrexham A.F.C.",
  "Ice Cube",
  "Casablanca",
  "Running back",
  "List of common misconceptions",
  "Victoria and Albert Museum",
  "Mel Brooks",
  "Sumo",
  "The Cure",
  "LA Galaxy",
  "Blackpool F.C.",
  "AFC Bournemouth",
  "Los Angeles Angels",
  "Stellar classification",
  "Clarinet",
  "Pathology",
  "LVMH",
  "A.S. Roma",
  "Midwestern United States",
  "Abu Dhabi",
  "United States Census Bureau",
  "Theatre",
  "Recording Industry Association of America",
  "Bee Gees",
  "Maggie Smith",
  "The Wizard of Oz 1939 film",
  "The Boys TV Series",
  "José Mourinho",
  "Viola Davis",
  "Patti Smith",
  "Amazon Standard Identification Number",
  "Young adult fiction",
  "Wu-Tang Clan",
  "A Certain Magical Index",
  "Nun",
  "Master of Arts",
  "Two and a Half Men",
  "Michael J. Fox",
  "Game",
  "Sunderland A.F.C.",
  "Swansea City A.F.C.",
  "Metaphor",
  "Frank Lloyd Wright",
  "Grimes",
  "Calvin Coolidge",
  "Muhammad Ali Jinnah",
  "SpongeBob SquarePants",
  "The Last of Us (HBO)",
  "New York Yankees",
  "Lupita Nyong'o",
  "Schrödinger's cat",
  "United States Declaration of Independence",
  "Pulp Fiction",
  "Master of Arts",
  "Two and a Half Men",
  "HBO",
  "Boiling point",
  "Rajendra Prasad",
  "RCA Records",
  "Chicago Cubs",
  "Renée Zellweger",
  "God of War 2018 video game",
  "Shane MacGowan",
  "Pentatonix",
  "Rugby league",
  "Empress Elisabeth of Austria",
  "Electronic Arts",
  "Theo Hernandez",
  "Diameter",
  "Momentum",
  "Scanning electron microscope",
  "Circle",
  "Colin Firth",
  "Massachusetts Institute of Technology",
  "Hull City A.F.C.",
  "Magnet",
  "Oxford English Dictionary",
  "Linda Ronstadt",
  "Pluto",
  "Function mathematics",
  "Middlesbrough F.C.",
  "Baal",
  "Vernacular",
  "Mean",
  "Central Intelligence Agency",
  "List of Young Sheldon episodes",
  "Creedence Clearwater Revival",
  "Oreo",
  "White",
  "Empirical evidence",
  "Bob Iger",
  "Sahrawi Arab Democratic Republic",
  "Presidential system",
  "Fashion design",
  "Libertarian Party United States",
  "Order of Australia",
  "2012 Summer Olympics",
  "United States Department of Defense",
  "Squash sport",
  "Morgan Wallen",
  "Oklahoma City",
  "Motown",
  "ITV TV network",
  "Piano",
  "Insurance",
  "National Collegiate Athletic Association",
  "Nanotechnology",
  "Colin Jost",
  "Royal Air Force",
  "Medicare United States",
  "Tetrahedron",
  "Free agent",
  "Gulliver's Travels",
  "Ruhollah Khomeini",
  "Lee Harvey Oswald",
  "Russell Crowe",
  "Logistic regression",
  "Country",
  "Demi Lovato",
  "Elf film",
  "Minneapolis",
  "Presidential system",
  "Leonard Cohen",
  "Fashion design",
  "Microsoft SQL Server",
  "Gabriel García Márquez",
  "Odyssey",
  "List of colors: A-F",
  "Board of directors",
  "Lava",
  "Sahrawi Arab Democratic Republic",
  "United States Department of Defense",
  "Church of England",
  "Morgan Wallen",
  "ITV (TV network)",
  "West Bromwich Albion F.C.",
  "Quantum entanglement",
  "USB",
  "Alphabet Inc.",
  "Renault",
  "ACF Fiorentina",
  "Diane Lane",
  "Royal Air Force",
  "Medicare (United States)",
  "Free agent",
  "Random-access memory",
  "Los Angeles Times",
  "United States Soccer Federation",
  "Linkin Park",
  "Superman",
  "Dream Theater",
  "Köppen climate classification",
  "Southampton F.C.",
  "Intel",
  "Conspiracy theory",
  "Phoenix, Arizona",
  "American Samoa",
  "University of California, Los Angeles",
  "San Diego",
  "A cappella",
  "World",
  "FIFA World Cup records and statistics",
  "Houston",
  "The Twelve Days of Christmas (song)",
  "Kendrick Lamar",
  "2023 AFC Asian Cup",
  "A. J. Brown",
  "Aerosmith",
  "Pixar",
  "Function (mathematics)",
  "Spider-Man: Into the Spider-Verse",
  "Meta Platforms",
  "Patent",
  "Football pitch",
  "The Magic Flute",
  "Shin Ultraman",
  "AM broadcasting",
  "Al Gore",
  "Suits (American TV series)",
  "Work (physics)",
  "Cleveland",
  "Boeing 777",
  "Reading",
  "Giannis Antetokounmpo",
  "The Elf on the Shelf",
  "Value-added tax",
  "Oldham Athletic A.F.C.",
  "What a Wonderful World",
  "The Last of Us",
  "Lionel Messi",
  "Festivus",
  "The Specials",
  "The Sound of Music (film)",
  "Newell's Old Boys",
  "Reborn Rich",
  "Christopher Plummer",
  "Steve Cohen (businessman)",
  "Index of Windows games (A)",
  "Aliens (film)",
  "Helen Mirren",
  "S.S.C. Napoli",
  "Club Atlético River Plate",
  "Boca Juniors",
  "Die Hard (film series)",
  "A Charlie Brown Christmas",
  "Aldous Huxley",
  "Imran Khan",
  "Pope Benedict XVI",
  "To Kill a Mockingbird",
  "Pokémon Ultimate Journeys: The Series",
  "Siniša Mihajlović",
  "Mickey Rooney",
  "Characters of the DC Extended Universe",
  "2023 Africa Cup of Nations",
  "Catherine O'Hara",
  "Richard Harris",
  "Paulo Dybala",
  "Martin McDonagh",
  "You're a Mean One, Mr. Grinch",
  "John Lithgow",
  "FA Trophy",
  "White Christmas (song)",
  "A Visit from St. Nicholas",
  "The Year Without a Santa Claus",
  "Joker: Folie à Deux",
  "Leo Varadkar",
  "Pinocchio",
  "A Star Is Born (2018 film)",
  "Hamza Yassin",
  "A Christmas Carol (2009 film)",
  "Warner Bros.",
  "Succession to the British throne",
  "M. Night Shyamalan",
  "Ebenezer Scrooge",
  "Ahmedabad",
  "Bryan Cranston",
  "Pope",
  "A. R. Rahman",
  "Leandro Paredes",
  "Herbert Hoover",
  "Debbie Reynolds",
  "Julianne Moore",
  "Betty White",
  "Paolo Maldini",
  "Edie Falco",
  "Central African Republic",
  "Baronet",
  "Kiefer Sutherland",
  "Microsoft Azure",
  "NCAA Division I",
  "A Bad Moms Christmas",
  "Genus",
  "Gerard Way",
  "The Muppet Christmas Carol",
  "The Dark Knight",
  "AJ Styles",
  "Frozen (2013 film)",
  "Bardo, False Chronicle of a Handful of Truths",
  "Prakash Raj",
  "Robbie Coltrane",
  "Sidney Poitier",
  "Chuck Berry",
  "Los Angeles Dodgers",
  "Oakland Athletics",
  "Watford F.C.",
  "Skyfall",
  "Sheffield United F.C.",
  "Glossary of chess",
  "Professional wrestling match types",
  "Nigella Lawson",
  "A Man Called Otto",
  "Scrooge (1951 film)",
  "Alexandria Ocasio-Cortez",
  "George R. R. Martin",
  "Mathematical model",
  "Richard Rodgers",
  "Groucho Marx",
  "December 2022 North American winter storm",
  "Indianapolis",
  "Atal Bihari Vajpayee",
  "Metropolitan statistical area",
  "Alfred North Whitehead",
  "Star Wars: The Force Awakens",
  "John Elway",
  "Buddy Holly",
  "2023 World Junior Ice Hockey Championships",
  "Paul Anka",
  "Grease (film)",
  "E.T. the Extra-Terrestrial",
  "Niagara Falls",
  "Die Hard with a Vengeance",
  "Bette Davis",
  "Forrest Gump",
  "The Home Depot",
  "Thomas Becket",
  "Requiem for a Dream",
  "Martha Stewart",
  "Isaac Asimov",
  "Michelle Williams (actress)",
  "Rupert Grint",
  "Axolotl",
  "Gillian Anderson",
  "Halle Berry",
  "Savannah, Georgia",
  "Variance",
  "The Football Association",
  "Board game",
  "Straw man",
  "Delta Air Lines",
  "Rastafari",
  "Fantastic Beasts (film series)",
  "Bradford City A.F.C.",
  "A Midsummer Night's Dream",
  "Todd Rundgren",
  "Marlo Thomas",
  "Beck",
  "Flower",
  "Jeff Beck",
  "College football national championships in NCAA Division I FBS",
  "President of India",
  "Charlton Athletic F.C.",
  "Georgia Bulldogs football",
  "SoFi Stadium",
  "Metro-Goldwyn-Mayer",
  "The Raven",
  "Claire Danes",
  "Abbott Elementary",
  "The Walking Dead (season 11)",
  "Kliff Kingsbury",
  "Graham Potter",
  "A Quiet Place",
  "Ronnie Wood",
  "Ultraman (1966 TV series)",
  "Federal Aviation Administration",
  "Han dynasty",
  "Alfred Russel Wallace",
  "Mac operating systems",
  "Pomerania",
  "I Have a Dream",
  "A24",
  "Primetime Emmy Awards",
  "The A.V. Club",
  "Evan Peters",
  "Christina Aguilera",
  "List of EGOT winners",
  "A. C. Bhaktivedanta Swami Prabhupada",
  "Alan Cumming",
  "Phineas and Ferb",
  "Boy George",
  "Belgian Pro League",
  "Jessica Simpson",
  "LL Cool J",
  "Toyota Supra",
  "James Herriot",
  "Lulu (singer)",
  "Academy Award for Best Actor",
  "Compass",
  "Community (TV series)",
  "Miguel A. Núñez Jr.",
  "Australian Broadcasting Corporation",
  "Phoebe Waller-Bridge",
  "The Flash (2014 TV series)",
  "stablersleet.me",
  "pcstuck2work.live",
];

export { words };
