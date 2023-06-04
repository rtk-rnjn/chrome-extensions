let correctAnswer;
let answerHashIV;
document.addEventListener(
  constants.MESSAGE_TYPES.CORRECT_ANSWER_RECEIVED,
  (e) => {
    correctAnswer = e.detail.correctAnswer;
    answerHashIV = e.detail.answerHashIV;
  }
);

const prefs = { ...constants.DEFAULT_PREFERENCES };

function clickElement(e, checkVisibility = true) {
  if (!e) {
    return;
  }

  if (!checkVisibility || e.offsetParent) {
    e.click();
  }
}

function clickOption(selector, parent = document) {
  const e = parent.querySelector(selector);
  if (e && e.getAttribute("data-serpquery")) {
    clickElement(e, true);
  }
}

function click(selector, parent = document) {
  const e = parent.querySelector(selector);
  clickElement(e);
}

function clickHidden(selector, parent = document) {
  const e = parent.querySelector(selector);
  clickElement(e, false);
}

function clickLoop() {
  if (prefs.autoClick) {
    click("#rqStartQuiz");
    clickOption(
      "#currentQuestionContainer .b_cards[iscorrectoption=True]:not(.btsel)"
    );
    clickOption(
      `#currentQuestionContainer .rqOption:not(.optionDisable)[data-option="${correctAnswer}"]`
    );
    clickOption(".bt_poll .btOption");

    clickHidden("#OptionBackground00.b_hide");

    clickOption(
      `#currentQuestionContainer .btOptionCard[data-option="${correctAnswer}"]`
    );

    if (prefs.randomGuesses) {
      // not actually random - just picks the first one
      clickOption("#currentQuestionContainer .btOptionCard");
    } else {
      // only works on mobile view
      click(".bt_correctOp");
      const options = [
        ...document.querySelectorAll("#currentQuestionContainer .btOptionCard"),
      ];
      const correctOption = options.find(
        (option) =>
          correctAnswer &&
          correctAnswer ===
            quizAnswerHashFunction(answerHashIV, option.dataset.option)
      );
      clickElement(correctOption);
    }

    click(
      "#ListOfQuestionAndAnswerPanes div[id^=QuestionPane]:not(.wk_hideCompulsary) .wk_choicesInstLink"
    );

    click(
      "#ListOfQuestionAndAnswerPanes div[id^=AnswerPane]:not(.b_hide) input[type=submit]"
    );
  }
}

getStorage(["autoClick", "randomGuesses"], prefs).then(() => {
  setInterval(clickLoop, constants.CLICK_DELAY);
});

hookStorage(["autoClick", "randomGuesses"], prefs);
