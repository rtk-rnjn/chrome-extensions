function clickElement(e, checkVisibility = true) {
  if (!e) {
    return;
  }
  if (!checkVisibility || e.offsetParent) {
    e.click();
  }
}

function clickAll(selector, parent = document) {
  const elements = [...parent.querySelectorAll(selector)];
  elements.forEach(e => clickElement(e, true));
}

(() => {

  setTimeout(() => {
    const cards = [...document.querySelectorAll('mee-card')];
    if (cards.length) {
      cards.forEach(card => {
        if (card.querySelector('.mee-icon-AddMedium')) {
          clickAll('a.c-call-to-action', card);
        }
      });
    }
  }, 0);
})();
