toggleElement = (answerID, iconID) => {
    let answer = document.querySelector(`#${answerID}`);
    answer.classList.contains('faq__answer--show')
    ? answer.classList.remove('faq__answer--show')
    : answer.classList.add('faq__answer--show');
    
    let arrow = document.querySelector(`#${iconID}`);
    arrow.classList.contains('faq__question--icon-close')
    ? arrow.classList.remove('faq__question--icon-close')
    : arrow.classList.add('faq__question--icon-close');
}


moveContactButton = move => {
    if (window.innerWidth <= 400) {
        move 
        ? document.querySelector('.footer__email--btn').style.margin = '2.2rem 0 0 0' 
        : document.querySelector('.footer__email--btn').style.margin = '.8rem 0 0 0';
    }
}


toggleBodyScrolling = value => {
    document.body.style.position = value;
}


validateEmail = () => {
    let input = document.querySelector('.footer__email--input').value;

    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input)) {
        document.querySelector('.footer__email--input').classList.remove('footer__email--input-invalid');
        document.querySelector('.footer__message').classList.remove('footer__message--show');
        moveContactButton(false);
    }
    else {
        document.querySelector('.footer__email--input').classList.add('footer__email--input-invalid');
        document.querySelector('.footer__message').classList.add('footer__message--show');
        moveContactButton(true);
    }
}