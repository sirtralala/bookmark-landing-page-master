toggleElement = (answerID, iconID) => {
    let answer = document.querySelector(`#${answerID}`);
    answer.style.display == '' ? answer.style.display = 'block' : answer.style.display = '';

    let arrow = document.querySelector(`#${iconID}`);
    arrow.classList.contains('faq__question--icon-close')
    ? arrow.classList.remove('faq__question--icon-close')
    : arrow.classList.add('faq__question--icon-close');

    /* let arrowSrc = arrow.getAttribute('src');
    arrowSrc == "./images/icon-arrow.svg" ? arrow.setAttribute('src', './images/icon-error.svg') : arrow.setAttribute('src', arrowSrc); */
}
