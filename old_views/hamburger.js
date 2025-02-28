/* All Buttons Manager */
const allButtons = document.getElementsByTagName('button');
const allButtonsList = [
    {id:'navbarbtnselector', menu:'navbar-mobile', blury:''},
    {id:'flaglangselector', menu:'flaglangcontainer', blury:''},
    {id:'filter-project-btn', menu:'filter-project-container', blury:'projectBluryWrapper'},
    {id:'project-selector', menu:'project-container', blury:'projectBluryWrapper'},
];
const ArrayButtons = Array.from(allButtons);
let toggle = false;
ArrayButtons.map(content => {
    const filter = allButtonsList.filter(element => element.id == content.id)[0];

    if(typeof filter !== 'undefined') {
        content.addEventListener('click', () => {
            const buttonMenu = document.getElementById(filter.menu);
            const button = document.getElementById(filter.id);
            const btnMenuWrapper = document.getElementById(filter.blury);
            toggle = !toggle;
            buttonMenu.classList.toggle('opened');
            button.setAttribute('aria-pressed', toggle);
            if(btnMenuWrapper) {
                btnMenuWrapper.classList.toggle('opened');
                btnMenuWrapper.addEventListener('click', () => {
                    toggle = !toggle;
                    buttonMenu.classList.remove('opened');
                    button.setAttribute('aria-pressed', toggle);
                    btnMenuWrapper.classList.remove('opened');
                });
            }
        });
    }
});
/* Textarea Contact Page */
const tx = document.getElementsByTagName("textarea");
const max = tx.maxlength;
function OnInput() {this.style.height = 'auto';this.style.height = (this.scrollHeight) + "px";}
class countCharLimit {
    constructor() {
        // console.log(this.value.length + ' caractères');
        if (this.value.length >= max) console.log('Limite atteinte'); this.value = this.value.substring(0, max);
    }
}
if(tx) {
    for (let i = 0; i < tx.length; i++) {
        tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;");
        tx[i].addEventListener("input", OnInput, false);
        tx[i].addEventListener("input", countCharLimit, false);
    }
}
/* Projects Tags Selector */
const btnLevel = document.querySelectorAll('[name="level"]'), btnType = document.querySelectorAll('[name="type"]'), btnStatus = document.querySelectorAll('[name="status"]');
const btnClickHandler = (btn) => {
    for(const button of btn) {button.addEventListener('click', () => {button.classList.toggle('selected')})}
};
btnClickHandler(btnLevel), btnClickHandler(btnType), btnClickHandler(btnStatus);
