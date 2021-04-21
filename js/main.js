const initApp = () => {
    const currentValueElem = document.querySelector('.currentvalue');
    const previousValueELem = document.querySelector('.previousvalue');
    let itemArray = [];
    const equationArray = [];
    let newNumberFlag = false;

    const inputButtons = document.querySelectorAll('.number');
    inputButtons.forEach(button => {
        button.addEventListener('click', (event) => {

            const newInput = event.target.textContent;
                currentValueElem.value =
                    currentValueElem.value == 0
                        ? newInput
                        : `${currentValueElem.value}${newInput}`;
        })
    })
}

document.addEventListener("DOMContentLoaded", initApp);