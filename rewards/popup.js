const search = document.getElementById("search");
const stop = document.getElementById("stop");
const count = document.getElementById("count");
const searchesLeftBox = document.getElementById("searches-left");
const minDelay = document.getElementById("minDelay");
const maxDelay = document.getElementById("maxDelay");
const mobile = document.getElementById("mobile");
const delayInfo = document.getElementById("delay-info");
const maxDelayWarning = document.getElementById("maxDelayWarning");
const belowZeroDelayWarning = document.getElementById("belowZeroDelayWarning");
const belowRecommendedDelayWarning = document.getElementById(
  "belowRecommendedDelayWarning"
);
const closeTabSelector = document.getElementById("close-tab-selector");
const schedulePopup = document.getElementById("schedulePopup");
const mobilePopup = document.getElementById("mobilePopup");

const mobileInfo = document.getElementById("mobile-info");
const port = chrome.runtime.connect();

// document.getElementById("referralTest").addEventListener("click", function() {
//     chrome.runtime.sendMessage({message: "referralTest"});
// });

chrome.storage.sync.get("count", function (result) {
  if (result.count != undefined) {
    count.value = result.count;
  }
});

chrome.storage.sync.get("mobile", function (result) {
  if (result.mobile != undefined) {
    mobile.value = result.mobile;
  }
});

chrome.storage.sync.get("minDelay", function (result) {
  if (result.minDelay != undefined) {
    minDelay.value = result.minDelay;
  }
});

chrome.storage.sync.get("maxDelay", function (result) {
  if (result.maxDelay != undefined) {
    maxDelay.value = result.maxDelay;
  }
});


chrome.storage.sync.get("searchRunning", function (result) {
  if (result.searchRunning) {
    search.classList.add("hidden");
    stop.classList.remove("hidden");
  } else if (!result.searchRunning) {
    search.classList.remove("hidden");
    stop.classList.add("hidden");
  }
});

chrome.storage.sync.set({ requestStop: false });

chrome.storage.sync.get("searchesLeft", function (result) {
  // If there are no searches left,
  if (result.searchesLeft === 0) {
    // Clear the badge text
    chrome.action.setBadgeText({ text: "" });
    // Set the icon path to the default icon
    // Set the "review" value in storage to "do not show review"
    chrome.storage.sync.set({ review: "do not show review" });

    // Otherwise, if there are searches left and the number of searches left does not match the current count value plus the mobile value,
  } else if (
    result.searchesLeft > 0 &&
    result.searchesLeft != parseInt(count.value) + parseInt(mobile.value)
  ) {
    // console.log(result.searchesLeft);
    // console.log(parseInt(count.value) + parseInt(mobile.value));
    // Get the current badge text and store it in a variable
    chrome.action.getBadgeText({}, function (result) {
      // Update the searches left box with the current number of searches left
      searchesLeftBox.innerText = "Searches Left: " + result;
      // Remove the "hidden" class from the searches left box
      searchesLeftBox.classList.remove("hidden");
    });
  }
});

chrome.storage.sync.get("closeTab", function (result) {
  if (result.closeTab != undefined) {
    closeTabSelector.checked = result.closeTab;
  }
});

chrome.storage.sync.get("review", function (result) {
  if (result.review != undefined) {
    if (result.review === "show review") {
      randomizeReview();
    }
  }
});

// Add an event listener for the search button click event
search.addEventListener("click", function () {
  // Initialize a variable to track whether the search has started
  var searchStarted = false;
  search.classList.add("hidden");
  stop.classList.remove("hidden");
  searchesLeftBox.classList.remove("hidden");
  // var port = chrome.runtime.connect({name: "searchExtension"});
  // Update the searches left box with the current count value plus the mobile value
  searchesLeftBox.innerText = "Searches Left: " + count.value + mobile.value;
  // Send a message to the extension to start the search with the provided parameters
  chrome.runtime.sendMessage(
    {
      message: "start",
      count: count.value,
      mobile: mobile.value,
      minDelay: minDelay.value,
      maxDelay: maxDelay.value,
      closeTab: closeTabSelector.checked,
    },
    function (response) {
      // If a response is received, set the searchStarted variable to true
      if (response) {
        searchStarted = true;
        chrome.storage.sync.set({ searchRunning: true });
      }
    }
  );
  setTimeout(function () {
    // Set a timeout to check whether the search has started after 3 seconds
    if (!searchStarted) {
      // console.log("recieved no response - search was not started - we should reload extension");
      chrome.runtime.reload();
    }
  }, 3000);
});

stop.addEventListener("click", function () {
  // var port = chrome.runtime.connect({name: "searchExtension"});
  // port.postMessage({message: "stop"});
  chrome.runtime.sendMessage({ message: "stop" });
});

chrome.storage.onChanged.addListener(function (changes) {
  for (key in changes) {
    if (key === "searchesLeft") {
      if (changes["searchesLeft"]["newValue"] === 0) {
        searchesLeftBox.innerText = "Searches Complete!";
        search.classList.remove("hidden");
        stop.classList.add("hidden");
        chrome.storage.sync.set({ searchRunning: false });
        randomizeReview();
        chrome.storage.sync.set({ review: "do not show review" });
      } else {
        searchesLeftBox.classList.remove("hidden");
        searchesLeftBox.innerText =
          "Searches Left: " + changes["searchesLeft"]["newValue"];
      }
    }
  }
});

count.addEventListener("change", function () {
  chrome.storage.sync.set({ count: count.value });
});

mobile.addEventListener("change", function () {
  chrome.storage.sync.set({ mobile: mobile.value });
});

minDelay.addEventListener("change", function () {
  if (minDelay.value < 0) {
    minDelay.classList.add("red-outline");
    belowZeroDelayWarning.classList.remove("hidden");
  } else if (minDelay.value < 1) {
    minDelay.classList.add("orange-outline");
    belowRecommendedDelayWarning.classList.remove("hidden");
    maxDelay.setAttribute("min", minDelay.value);
    chrome.storage.sync.set({ minDelay: minDelay.value });
  } else {
    minDelay.classList.remove("red-outline");
    minDelay.classList.remove("orange-outline");
    belowZeroDelayWarning.classList.add("hidden");
    belowRecommendedDelayWarning.classList.add("hidden");
    maxDelay.setAttribute("min", minDelay.value);
    chrome.storage.sync.set({ minDelay: minDelay.value });
  }
});

maxDelay.addEventListener("change", function () {
  maxDelay.setAttribute("min", minDelay.value);
  if (Number(maxDelay.value) < Number(minDelay.value)) {
    // console.log(maxDelay.value, minDelay.value);
    // console.log("invalid max delay");
    maxDelay.classList.add("red-outline");
    maxDelayWarning.classList.remove("hidden");
  } else {
    maxDelay.classList.remove("red-outline");
    maxDelayWarning.classList.add("hidden");
    chrome.storage.sync.set({ maxDelay: maxDelay.value });
  }
});

delayInfo.addEventListener("click", function () {
  hiddenDelay.classList.toggle("hidden");
  document.getElementById("delay-dropdown").classList.toggle("flip-down");
  document.getElementById("delay-dropdown").classList.toggle("flip-up");
});

mobileInfo.addEventListener("click", function () {
  hiddenMobile.classList.toggle("hidden");
  document.getElementById("mobile-dropdown").classList.toggle("flip-down");
  document.getElementById("mobile-dropdown").classList.toggle("flip-up");
});

closeTabSelector.addEventListener("click", function () {
  chrome.storage.sync.set({ closeTab: closeTabSelector.checked });
});

// chrome.runtime.onConnect.addListener(function(port) {
//     port.onMessage.addListener(function(msg) {
//         if (msg.message === "stop"){
//             searchesLeftBox.innerText = "Searches Stopped!";
//         }
//   });
// });

schedulePopup.addEventListener("click", function () {
  chrome.windows.create({
    url: "schedule.html",
    type: "panel",
    width: 800,
    height: 525,
  });
});

mobilePopup.addEventListener("click", function () {
  chrome.windows.create({
    url: "mobile-note.html",
    type: "panel",
    width: 800,
    height: 525,
  });
});

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.message === "stop") {
    searchesLeftBox.innerText = "Searches Stopped!";
    search.classList.remove("hidden");
    stop.classList.add("hidden");
    chrome.storage.sync.set({ searchRunning: false });
  }
});

function randomizeReview() {
  var odds = 0;
  chrome.storage.sync.get("clickedReview", function (result) {
    if (result.clickedReview === undefined || result.clickedReview != true) {
      odds = 25; // 1 in every X person will be shown the link to leave a review
    } else {
      odds = 150; // if they have clicked the review button, users will have a smaller chance of seeing it again
    }
    var randomNumber = Math.floor(Math.random() * odds);
    // console.log(randomNumber);
    if (randomNumber === 1) {
      review.classList.remove("hidden");
    }
  });
}

review.addEventListener("click", function () {
  chrome.storage.sync.set({ clickedReview: true });
});

// chrome.storage.sync.remove(["clickedReview", "searchesCompleted"]); //resets the counter for searches completed and unchecks clicked review. Use this for testing to reset it

// users who have not clicked the link to a review will be prompted to leave a review every X amount of times
chrome.storage.sync.get("searchesCompleted", function (searchesResult) {
  // console.log(searchesResult.searchesCompleted);
  chrome.storage.sync.get("clickedReview", function (result) {
    if (result.clickedReview === undefined || result.clickedReview != true) {
      if (
        searchesResult.searchesCompleted != undefined &&
        parseInt(searchesResult.searchesCompleted) % 45 === 0
      ) {
        // unless they already clicked on review, they will be prompted every X times to leave one
        review.classList.remove("hidden");
      } else {
        review.classList.add("hidden");
      }
    }
  });
});

// chrome.runtime.onConnect.addListener(function(port) {
//     port.onMessage.addListener(function(msg) {
//         // console.log(msg.message);
//     });
// });

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  // console.log(msg);
  sendResponse({ message: "all good" });
});
const preferenceBindings = [
  { id: "auto-click", elementKey: "checked", preferenceKey: "autoClick" },
];

getStorage(
  preferenceBindings.map(({ id, elementKey, preferenceKey }) => ({
    key: preferenceKey,
    cb: (value) => {
      // value could be false, in which case the shortcut || operator
      // would evaluate to the default (not intended)
      document.getElementById(id)[elementKey] =
        value === undefined
          ? constants.DEFAULT_PREFERENCES[preferenceKey]
          : value;
    },
  }))
).then(updateSearchInputsVisibility);

function saveChanges() {
  updateSearchInputsVisibility();
  const newPreferences = preferenceBindings.reduce(
    (acc, binding) => ({
      ...acc,
      [binding.preferenceKey]: document.getElementById(binding.id)[
        binding.elementKey
      ],
    }),
    {}
  );
  setStorage(newPreferences);
}

function openOptions(e) {
  e.preventDefault(); // the open-options button is actually a link, so we don't want it to redirect
  if (chrome.runtime.openOptionsPage) {
    chrome.runtime.openOptionsPage();
  } else {
    window.open(chrome.runtime.getURL("options.html"));
  }
}

// id is HTML id attribute
// eventType is the type of event to listen for
// fn is what to run when the event occurs (defaults to saveChanges)
const changeBindings = [{ id: "auto-click", eventType: "change" }];

changeBindings.forEach(({ id, eventType, fn = saveChanges }) => {
  document.getElementById(id).addEventListener(eventType, fn);
});
