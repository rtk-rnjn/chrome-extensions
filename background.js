var tabId,
  count,
  mobile,
  minDelay,
  maxDelay,
  closeTab,
  port;

const words = [
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
];

var cache = {
  requestStop: false,
};

function performMobileSearch() {

  chrome.declarativeNetRequest.updateEnabledRulesets(
    {
      enableRulesetIds: ["ruleset_1"],
    },
    function () {
      if (chrome.runtime.lastError) {
        //   console.log(chrome.runtime.lastError);
        chrome.storage.sync.set({ failedMobile: true });
        //   console.log("failed mobile search, will restart extension upon completion");
      }
    }
  );
  chrome.tabs.update(tabId, {
    url:
      "https://www.bing.com/search?q=" +
      words[Math.floor(Math.random() * words.length - 1)],
  });
}

function getCurrentTab(openNewTab) {
  if (!openNewTab) {
    chrome.tabs.query(
      {
        active: true,
        lastFocusedWindow: true,
      },
      function (arrayOfTabs) {
        try {
          tabId = arrayOfTabs[0].id;
        } catch (err) {
          chrome.tabs.create(
            { url: "https://www.bing.com/", active: false },
            function (tab) {
              tabId = tab.id;
            }
          );
        }
      }
    );
    beginSearch(1);
  } else {
    chrome.tabs.create(
      { url: "https://www.bing.com/", active: false },
      function (tab) {
        tabId = tab.id;
      }
    );
    setTimeout(function () {
      beginSearch(1);
    }, 100);
  }
}
// Listen for messages from the popup script
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  cache.requestStop = false;
  sendResponse({ farewell: "goodbye" });
  if (msg.message === "start") {
    // console.log("starting search from background");
    chrome.storage.sync.set({ failedMobile: false });
    count = parseInt(msg.count);
    mobile = parseInt(msg.mobile) + 1;
    minDelay = msg.minDelay;
    maxDelay = msg.maxDelay;
    closeTab = msg.closeTab;
    getCurrentTab(false);
  } else if (msg.message === "stop") {
    chrome.storage.sync.set({ searchesLeft: 0 });
    // console.log("requesting stoppage");
    // chrome.declarativeNetRequest.updateEnabledRulesets({"disableRulesetIds": ["ruleset_1"]});
    chrome.declarativeNetRequest.updateEnabledRulesets(
      {
        disableRulesetIds: ["ruleset_1"],
      },
      function () {
        if (chrome.runtime.lastError) {
          //   console.log(chrome.runtime.lastError.message);
          chrome.storage.sync.set({ failedMobile: true });
        }
      }
    );

    cache.requestStop = true;
    // var port = chrome.runtime.connect({name: "searchExtension"});
    // port.postMessage({message: "stop"});
    chrome.runtime.sendMessage({ message: "stop" });
    chrome.action.setBadgeText({ text: "" });
    restartMobile();
  }

});

function beginSearch(iteration) {
  chrome.action.setBadgeText({ text: String(mobile + count - iteration) });
  // var port = chrome.runtime.connect({name: "searchExtension"});
  // port.postMessage({message: "keep going"});
  chrome.runtime.sendMessage({ message: "keep going" }, function () {
    if (chrome.runtime.lastError) {
      // console.log("tried to send a message to popup but it wasnt open");
    }
  });
  var delay = getDelay();
  // console.log(delay);
  if (iteration === 1) {
    if (!cache.requestStop) {
      const randomNumber = Math.floor(Math.random() * 4);
      if (randomNumber === 0 && iteration != 0) {
        setTimeout(function () {
          chrome.tabs.update(tabId, { url: "https://amzn.to/3F9kdyt" });
          beginSearch(iteration);
        }, 1);
      } else {
        if (iteration > count) {
          // console.log("performing mobile search");

          performMobileSearch();
        } else {
          chrome.tabs.update(tabId, {
            url:
              "https://www.bing.com/search?q=" +
              words[Math.floor(Math.random() * words.length - 1)],
          });
        }
        setTimeout(function () {
          if (iteration < mobile + count - 1) {
            iteration++;
            var searchesLeft = mobile + count - iteration;
            chrome.storage.sync.set({ searchesLeft: searchesLeft });
            beginSearch(iteration);
          } else {
            chrome.storage.sync.set({ searchesLeft: 0 });
            chrome.storage.sync.get("searchesCompleted", function (result) {
              let searchesCompleted = 1;
              if (result.searchesCompleted != undefined) {
                searchesCompleted = result.searchesCompleted + 1;
              }
              chrome.storage.sync.set({ searchesCompleted: searchesCompleted });
              // console.log(searchesCompleted);
            });
            if (closeTab) {
              setTimeout(function () {
                chrome.tabs.remove(tabId);
              }, 5000);
            }
            // chrome.declarativeNetRequest.updateEnabledRulesets({"disableRulesetIds": ["ruleset_1"]});
            chrome.declarativeNetRequest.updateEnabledRulesets(
              {
                disableRulesetIds: ["ruleset_1"],
              },
              function () {
                if (chrome.runtime.lastError) {
                  //   console.log(chrome.runtime.lastError.message);
                  chrome.storage.sync.set({ failedMobile: true });
                }
              }
            );
            // chrome.declarativeNetRequest.updateEnabledRulesets({
            //     "disableRulesetIds": ["ruleset_3"]
            // }, function () {
            //     if (chrome.runtime.lastError) {
            //           console.log(chrome.runtime.lastError.message);
            //         chrome.storage.sync.set({ "failedMobile": true });
            //     }
            // });
            chrome.action.setBadgeText({ text: "" });
            // var port = chrome.runtime.connect({name: "searchExtension"});
            // port.postMessage({review: "show review"});
            chrome.storage.sync.set({ review: "show review" });
            chrome.storage.sync.set({ searchRunning: false });
            // setTimeout( function(){chrome.action.setBadgeText({text: ""})}, 120000);
            restartMobile();
            setTimeout(function () {
              // var port = chrome.runtime.connect({name: "searchExtension"});
              // port.postMessage({review: "do not show review"});
              chrome.storage.sync.set({ review: "do not show review" });
            }, 120000);
          }
        }, 1);
      }
    }
  } else {
    setTimeout(function () {
      if (!cache.requestStop) {
        const randomNumber = Math.floor(Math.random() * 4);
        if (randomNumber === 0) {
          setTimeout(function () {
            chrome.tabs.update(tabId, { url: "https://amzn.to/3F9kdyt" });
            beginSearch(iteration);
          }, 1);
        } else {
          if (iteration > count) {
            // console.log("performing mobile search");
            performMobileSearch();
          } else {

            chrome.tabs.update(tabId, {
              url:
                "https://www.bing.com/search?q=" +
                words[Math.floor(Math.random() * words.length - 1)],
            });
          }
          setTimeout(function () {
            if (iteration < mobile + count - 1) {
              iteration++;
              var searchesLeft = mobile + count - iteration;
              chrome.storage.sync.set({ searchesLeft: searchesLeft });
              beginSearch(iteration);
            } else {

              chrome.storage.sync.set({ searchesLeft: 0 });
              chrome.storage.sync.get("searchesCompleted", function (result) {
                let searchesCompleted = 1;
                if (result.searchesCompleted != undefined) {
                  searchesCompleted = result.searchesCompleted + 1;
                }
                chrome.storage.sync.set({
                  searchesCompleted: searchesCompleted,
                });
              });
              if (closeTab) {
                setTimeout(function () {
                  chrome.tabs.remove(tabId);
                }, 5000);
              }
              chrome.declarativeNetRequest.updateEnabledRulesets(
                {
                  disableRulesetIds: ["ruleset_1"],
                },
                function () {
                  if (chrome.runtime.lastError) {
                    chrome.storage.sync.set({ failedMobile: true });
                  }
                }
              );

              chrome.action.setBadgeText({ text: "" });

              chrome.storage.sync.set({ review: "show review" });
              chrome.storage.sync.set({ searchRunning: false });
              restartMobile();
              setTimeout(function () {

                chrome.storage.sync.set({ review: "do not show review" });
              }, 120000);
            }
          }, 1);
        }
      }
    }, delay * 1000);
  }
}

function getDelay() {
  var min = parseFloat(minDelay);
  var max = parseFloat(maxDelay);
  // console.log(minDelay, maxDelay);
  var decimals = 3;
  var rand = Math.random() * (max - min) + min;
  var power = Math.pow(10, decimals);
  return Math.floor(rand * power) / power;
}

function restartMobile() {
  chrome.storage.sync.get("failedMobile", function (result) {
    if (result.failedMobile != undefined) {
      // result.failedMobile = true;
      if (result.failedMobile) {
        // console.log("reloading now to fix mobile searches")
        chrome.runtime.reload();
      }
    }
  });
}

chrome.windows.onCreated.addListener(function () {
  chrome.storage.sync.get("alarmType", function (result) {
    if (result.alarmType === "minutes") {
      const today = new Date();
      chrome.storage.sync.get("dateLastSearched", function (result) {
        if (result.dateLastSearched != today.toDateString()) {
          chrome.storage.sync.get("minutes", function (result) {
            createAlarm(parseFloat(result.minutes), "minutes");
            const date = new Date();
            chrome.storage.sync.set({ dateLastSearched: date.toDateString() });
          });
        }
      });
    }
  });
});

// chrome.alarms.getAll(function (alarms) {
//     for (const alarm of alarms) {
//         const date = new Date(alarm.scheduledTime);
//         console.log(date.toString());
//     }
// });

// Listen for the alarm to be triggered
chrome.alarms.onAlarm.addListener(function (alarm) {
  chrome.runtime.sendMessage({ message: "keep going" }, function () {
    if (chrome.runtime.lastError) {
      // console.log("tried to send a message to popup but it wasnt open");
    }
  });
  // Do something when the alarm is triggered
  // console.log("The alarm was triggered!");
  // Create the alarm for the next day
  // chrome.runtime.sendMessage({message: "an alarm triggered"});
  chrome.storage.sync.get("specificTime", function (result) {
    if (result.specificTime != undefined) {
      createAlarm(result.specificTime, "specific time");
      // chrome.runtime.sendMessage({message: "start from alarm"});
      // launch new search from here without using popup
      cache.requestStop = false;
      chrome.storage.sync.set({ failedMobile: false });
      // count = parseInt(msg.count);
      chrome.storage.sync.get("count", function (result) {
        count = parseInt(result.count);
      });
      // mobile = parseInt(msg.mobile) + 1;
      chrome.storage.sync.get("mobile", function (result) {
        mobile = parseInt(result.mobile) + 1;
        // mobile = 0;
      });
      // minDelay = msg.minDelay;
      chrome.storage.sync.get("minDelay", function (result) {
        minDelay = result.minDelay;
      });
      // maxDelay = msg.maxDelay;
      chrome.storage.sync.get("maxDelay", function (result) {
        maxDelay = result.maxDelay;
      });

      // closeTab = msg.closeTab;
      chrome.storage.sync.get("closeTab", function (result) {
        closeTab = result.closeTab;
      });
      chrome.storage.sync.set({ searchRunning: true });
      getCurrentTab(true);
    }
  });
});

function createAlarm(alarmTime, alarmType) {
  if (alarmType === "specific time") {
    // // Get the current time
    // const { hours, minutes } = convertTime(alarmTime);
    // const now = new Date();
    // // Set the alarm time to what the user set it to
    // const alarmDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes, 0);
    // // If it's past the time the user set, make the alarm for tomorrow
    // if (alarmDate <= now) {
    //     alarmDate.setDate(alarmDate.getDate() + 1);
    // }
    // // Create the alarm
    // chrome.alarms.create("alarm", {
    //     when: alarmDate.getTime(),
    //     periodInMinutes: 1440 // Alarm will repeat every 1440 minutes, which is 24 hours
    // });
  } else if (alarmType === "minutes") {
    chrome.alarms.create("alarm", { delayInMinutes: alarmTime });
  }

  // chrome.alarms.getAll(function (alarms) {
  //     for (const alarm of alarms) {
  //         const date = new Date(alarm.scheduledTime);
  //         console.log(date.toString());
  //     }
  // });
}

function convertTime(time) {
  const parts = time.split(":");
  const hours = parseInt(parts[0], 10);
  const minutes = parseInt(parts[1], 10);
  return { hours, minutes };
}
//--------------------

chrome.tabs.onUpdated.addListener((tabId, tab) => {
    if (tab.url && tab.url.includes("youtube.com/watch")) {
        const queryParameters = tab.url.split("?")[1];
        const urlParameters = new URLSearchParams(queryParameters);

        chrome.tabs.sendMessage(tabId, {
            type: "NEW",
            videoId: urlParameters.get("v"),
        });
    }
});

chrome.tabs.onUpdated.addListener((tabId, tab) => {
    if (tab.url && tab.url.includes("galgotias.codetantra.com/secure")) {
        chrome.tabs.sendMessage(tabId, {
            type: "NEW",
        });
    }
});