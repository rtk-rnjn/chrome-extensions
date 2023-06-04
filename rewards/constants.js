const constants = Object.freeze({

    BADGE_REMINDER_TEXT: '!',
    ALARMS: Object.freeze({
      REMINDER: 'reminder-alarm',
      SCHEDULED_SEARCH: 'scheduled-search-alarm',
      FETCH_DAILY_TRENDS: 'fetch-daily-trends-alarm',
    }),
    CLICK_DELAY: 500,
    DEFAULT_PREFERENCES: Object.freeze({
      
      autoClick: true,
      randomGuesses: false,
     
    }),
    MESSAGE_TYPES: Object.freeze({
      
      CORRECT_ANSWER_RECEIVED: 5, // window-variable-grabber script => content script
      OPEN_URL_IN_BACKGROUND: 6, // window-variable-grabber script => content script => background script
    }),
    REWARDS_URL: 'https://account.microsoft.com/rewards/',
    DAILY_TRENDS_API: 'https://trends.google.com/trends/api/dailytrends?geo=US',
    NUM_DAILY_TREND_FETCHES: 4,
    // TODO: add more mobile user agents
    MOBILE_USER_AGENTS: Object.freeze([
      'Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Mobile Safari/537.36 Edg/86.0.622.51',
    ]),
    EDGE_USER_AGENT: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36 Edg/86.0.622.51',
  });
  