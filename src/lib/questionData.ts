import sectionData from "./types";

const questionData: sectionData[] = [
  {
    topic: "Conflict in Ukraine",
    questions: [
      {
        text: "How closely have you been following news about Russia's invasion of Ukraine?",
        answers: [
          { text: "Extremely closely", data: 6 },
          { text: "Very closely", data: 14 },
          { text: "Somewhat closely", data: 40 },
          { text: "Not too closely", data: 27 },
          { text: "Not at all closely", data: 13 },
          { text: "No Answer", data: 0 },
        ],
      },
      {
        text: "Do you approve or disapprove of the Biden Administration's response to Russia's invasion of Ukraine?",
        answers: [
          { text: "Strongly approve", data: 13 },
          { text: "Somewhat approve", data: 25 },
          { text: "Somewhat disapprove", data: 21 },
          { text: "Strongly disapprove", data: 20 },
          { text: "Not Sure", data: 20 },
          { text: "No Answer", data: 1 },
        ],
      },
      {
        text: "When it comes to Russia's invasion of Ukraine, do you think the U.S. is providing ...",
        answers: [
          { text: "Too much support to Ukraine", data: 31 },
          { text: "Not enough support to Ukraine", data: 18 },
          { text: "About the right amount of support to Ukraine", data: 29 },
          { text: "Not Sure", data: 22 },
          { text: "No Answer", data: 1 },
        ],
      },
      {
        text: "How much of a threat to U.S. interests is Russia's invasion of Ukraine?",
        answers: [
          { text: "A major threat", data: 33 },
          { text: "A minor threat", data: 34 },
          { text: "Not a threat", data: 10 },
          { text: "Not Sure", data: 22 },
          { text: "No Answer", data: 1 },
        ],
      },
    ],
    source:
      "Greenwood, Shannon. “Americans’ Views of the Israel-Hamas War.” Pew Research Center, Pew Research Center, 8 Dec. 2023, www.pewresearch.org/politics/2023/12/08/americans-views-of-the-israel-hamas-war/. ",
  },
  {
    topic: "Reproductive Rights",
    questions: [
      {
        text: "How much have you heard or read about medication abortion - that is, the use of a prescription pill or a series of pills to end a pregnancy?",
        answers: [
          { text: "A lot", data: 22 },
          { text: "A little", data: 56 },
          { text: "Nothing at all", data: 21 },
          { text: "No Answer", data: 1 },
        ],
      },
      {
        text: "Just your best guess, roughly what percentage of all abortions in the United States are medication abortions?",
        answers: [
          { text: "0-19", data: 17 },
          { text: "20-39", data: 24 },
          { text: "40-60", data: 32 },
          { text: "61-80", data: 18 },
          { text: "81-100", data: 5 },
          { text: "No Answer", data: 3 },
        ],
      },
      {
        text: "Do you think medication abortion SHOULD be legal or illegal in your state?",
        answers: [
          { text: "Legal", data: 53 },
          { text: "Illegal", data: 22 },
          { text: "Not sure", data: 24 },
          { text: "No Answer", data: 1 },
        ],
      },
      {
        text: "In politics today, do you consider yourself a:",
        answers: [
          { text: "Republican", data: 28 },
          { text: "Democrat", data: 28 },
          { text: "Independent", data: 27 },
          { text: "No answer", data: 2 },
          { text: "Lean Democrat", data: 19 },
          { text: "Lean Republican", data: 18 },
        ],
      },
      {
        text: "As of today do you lean more to...",
        answers: [
          { text: "Democrat", data: 19 },
          { text: "Republican", data: 18 },
        ],
      },
    ],
    source:
      "Hartig, Hannah. “By More than Two-to-One, Americans Say Medication Abortion Should Be Legal in Their State.” Pew Research Center, Pew Research Center, 11 Apr. 2023, www.pewresearch.org/short-reads/2023/04/11/by-more-than-two-to-one-americans-say-medication-abortion-should-be-legal-in-their-state/. ",
  },
  {
    topic: "Palestinian Israeli Conflict",
    questions: [
      {
        text: "How closely have you been following news about the Israel-Hamas war?",
        answers: [
          { text: "Extremely closely", data: 9 },
          { text: "Very closely", data: 17 },
          { text: "Somewhat closely", data: 37 },
          { text: "Not too closely", data: 21 },
          { text: "Not at all closely", data: 15 },
          { text: "No answer", data: 0 },
        ],
      },
      {
        text: "How much responsibility does the Israeli goverment have for Israel and Hamas currently being at war?",
        answers: [
          { text: "A lot", data: 35 },
          { text: "A little", data: 24 },
          { text: "None", data: 16 },
          { text: "Not sure", data: 25 },
          { text: "No answer", data: 1 },
        ],
      },
      {
        text: "How much responsibility do Hamas, the militant Palestinian group, have for Israel and Hamas currently being at war?",
        answers: [
          { text: "A lot", data: 65 },
          { text: "A little", data: 9 },
          { text: "None", data: 3 },
          { text: "Not sure", data: 22 },
          { text: "No answer", data: 1 },
        ],
      },
      {
        text: "How much responsibility do the Israeli people have for Israel and Hamas currently being at war?",
        answers: [
          { text: "A lot", data: 13 },
          { text: "A little", data: 28 },
          { text: "None", data: 31 },
          { text: "Not sure", data: 28 },
          { text: "No answer", data: 1 },
        ],
      },
      {
        text: "How much responsibility do Palestinian people have for Israel and Hamas currently being at war?",
        answers: [
          { text: "A lot", data: 20 },
          { text: "A little", data: 29 },
          { text: "None", data: 21 },
          { text: "Not sure", data: 29 },
          { text: "No answer", data: 1 },
        ],
      },
      {
        text: "Thinking about Israel's current military operation against Hamas, is Israel...",
        answers: [
          { text: "Going too far", data: 27 },
          { text: "Not going far enough", data: 16 },
          { text: "Taking about the right approach", data: 25 },
          { text: "Not sure", data: 32 },
          { text: "No answer", data: 0 },
        ],
      },
      {
        text: "Do you think Joe Biden is...",
        answers: [
          { text: "Favoring the Israelis too much", data: 8 },
          { text: "Favoring the Palestinians too much", data: 13 },
          { text: "Striking about the right balance", data: 16 },
          { text: "Not sure", data: 62 },
          { text: "No answer", data: 1 },
        ],
      },
      {
        text: "Do you think Donald Trump is...",
        answers: [
          { text: "Favoring the Israelis too much", data: 34 },
          { text: "Favoring the Palestinians too much", data: 6 },
          { text: "Striking about the right balance", data: 50 },
          { text: "Not sure", data: 0 },
          { text: "No answer", data: 10 },
        ],
      },
      {
        text: "Thinking about the war between Israel and Hamas, how concerned are you about the possibility of the war expanding to other countries in the region?",
        answers: [
          { text: "Extremely concerned", data: 16 },
          { text: "Very concerned", data: 26 },
          { text: "Somewhat concerned", data: 37 },
          { text: "Not too concerned", data: 14 },
          { text: "Not at all concerned", data: 6 },
          { text: "No answer", data: 1 },
        ],
      },
      {
        text: "Thinking about the war between Israel and Hamas, how concerned are you about the possibility of the war leading to a terrorist attack in the United States?",
        answers: [
          { text: "Extremely concerned", data: 19 },
          { text: "Very concerned", data: 23 },
          { text: "Somewhat concerned", data: 33 },
          { text: "Not too concerned", data: 18 },
          { text: "Not at all concerned", data: 7 },
          { text: "No answer", data: 1 },
        ],
      },
      {
        text: "Thinking about the war between Israel and Hamas, how concerned are you about the possibility of the war going on for a very long time?",
        answers: [
          { text: "Extremely concerned", data: 17 },
          { text: "Very concerned", data: 27 },
          { text: "Somewhat concerned", data: 35 },
          { text: "Not too concerned", data: 14 },
          { text: "Not at all concerned", data: 5 },
          { text: "No answer", data: 1 },
        ],
      },
      {
        text: "Thinking about the war between Israel and Hamas, how concerned are you about the possibility of increasing violence against Jewish people in the United States?",
        answers: [
          { text: "Extremely concerned", data: 21 },
          { text: "Very concerned", data: 27 },
          { text: "Somewhat concerned", data: 31 },
          { text: "Not too concerned", data: 13 },
          { text: "Not at all concerned", data: 6 },
          { text: "No answer", data: 2 },
        ],
      },
      {
        text: "Thinking about the war between Israel and Hamas, how concerned are you about the possibility of increasing violence against Muslim people in the United States?",
        answers: [
          { text: "Extremely concerned", data: 14 },
          { text: "Very concerned", data: 23 },
          { text: "Somewhat concerned", data: 31 },
          { text: "Not too concerned", data: 18 },
          { text: "Not at all concerned", data: 12 },
          { text: "No answer", data: 2 },
        ],
      },
      {
        text: "Now, thinking about the future, and not just the current conflict... Do you think a way can be found for Israel and an independent Palestinian state to coexist peacefully with each other?",
        answers: [
          { text: "Yes, can coexist peacefully", data: 55 },
          { text: "No, cannot coexist peacefully", data: 41 },
          { text: "No answer", data: 4 },
        ],
      },
    ],
    source:
      "Greenwood, Shannon. “Americans’ Views of the Israel-Hamas War.” Pew Research Center, Pew Research Center, 8 Dec. 2023, www.pewresearch.org/politics/2023/12/08/americans-views-of-the-israel-hamas-war/. ",
  },
  {
    topic: "Playground",
    questions: [],
    source: "",
  },
];

export default questionData;
