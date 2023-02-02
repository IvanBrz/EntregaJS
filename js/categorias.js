

const form = document.querySelector('#add-all-form');
const input = document.querySelector('#all-input');
const listAll = document.querySelector('#all-list');
const searcher = document.querySelector('#searcher input');

function allItem(li) {
    this.text = li.innerText;
    this.checked = li.classList.contains('completed') === true ? true : false;
}
function addAll(text, checked = false) {
    const listAll = document.querySelector('#all-list');
    const all = document.createElement('li');
    const buttonDelete = document.createElement('button');
    const checkbox = document.createElement('input');

    checked && all.classList.add('completed');
    checkbox.checked = checked;
    all.innerText = text;
    checkbox.type = 'checkbox';
    all.prepend(checkbox);
    all.prepend(buttonDelete);
    listAll.appendChild(all);
}
function renderEveryone(everyone) {
    listAll.innerHTML = '';
    everyone.forEach((allObj) => {
        let { text, checked } = allObj;
        addAll(text, checked);
    });
}
window.addEventListener('load', () => {
    const savedEveryone = localStorage.getItem('everyone');

    const everyone = JSON.parse(savedEveryone) || [];

    renderEveryone(everyone)
});
searcher.addEventListener('keyup', function (event) {
    let { value: searchText } = searcher;
    const savedEveryone = localStorage.getItem('everyone');
    let everyone = JSON.parse(savedEveryone) || [];

    everyone = everyone.filter(allObj => allObj.text.toLowerCase().includes(searchText.toLowerCase()));

    renderEveryone(everyone);
})
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const { value: allText } = input;
    input.value = '';

    addAll(allText);

    const everyone = listAll.querySelectorAll('li');
    const everyoneText = [];
    everyone.forEach((all) => {
        let allObj = new allItem(all);
        everyoneText.push(allObj);
    });
    localStorage.setItem('everyone', JSON.stringify(everyoneText));
});
listAll.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const all = event.target.parentNode;
        all.remove();
    }
});
listAll.addEventListener('click', (event) => {
    if (event.target.tagName === 'INPUT') {
        const all = event.target.parentNode;
        all.classList.toggle('completed');
    }
});