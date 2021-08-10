const el = (e) => {
    if (e.charAt[0] == '#') {
        return document.querySelector(e);
    }
    return document.querySelectorAll(e);
}

let swapButton = el('header nav .swap-button')[0];
let linksDiv = el('header nav .links')[0]
swapButton.onclick = () => {
    linksDiv.classList.toggle('clicked')
}