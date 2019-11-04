/////////////////////////// Languages
let russianKeybord = [
    [
        ["\u0451", "\u0401"],
        ["1", "!"],
        ["2", '"'],
        ["3", "\u2116"],
        ["4", ";"],
        ["5", "%"],
        ["6", ":"],
        ["7", "?"],
        ["8", "*"],
        ["9", "("],
        ["0", ")"],
        ["-", "_"],
        ["=", "+"],
        ["Backspace", "Backspace"]
    ],
    [
        ["Tab", "Tab"],
        ["\u0439", "\u0419"],
        ["\u0446", "\u0426"],
        ["\u0443", "\u0423"],
        ["\u043A", "\u041A"],
        ["\u0435", "\u0415"],
        ["\u043D", "\u041D"],
        ["\u0433", "\u0413"],
        ["\u0448", "\u0428"],
        ["\u0449", "\u0429"],
        ["\u0437", "\u0417"],
        ["\u0445", "\u0425"],
        ["\u044A", "\u042A"],
        ["\\", "/"],
    ],
    [
        ["CapsLock", "CapsLock"],
        ["\u0444", "\u0424"],
        ["\u044B", "\u042B"],
        ["\u0432", "\u0412"],
        ["\u0430", "\u0410"],
        ["\u043F", "\u041F"],
        ["\u0440", "\u0420"],
        ["\u043E", "\u041E"],
        ["\u043B", "\u041B"],
        ["\u0434", "\u0414"],
        ["\u0436", "\u0416"],
        ["\u044D", "\u042D"],
        ["Enter", "Enter"],
    ],
    [
        ["Shift", "Shift"],
        ["\u044F", "\u042F"],
        ["\u0447", "\u0427"],
        ["\u0441", "\u0421"],
        ["\u043C", "\u041C"],
        ["\u0438", "\u0418"],
        ["\u0442", "\u0422"],
        ["\u044C", "\u042C"],
        ["\u0431", "\u0411"],
        ["\u044E", "\u042E"],
        [".", ","],
        ["&#8593", "&#8593"],
        ["Shift", "Shift"]
    ],
    [
        ["Control", "Control"],
        ["Win", "Win"],
        ["Alt", "Alt"],
        ["Space", "Space"],
        ["Alt", "Alt"],
        ["&#8592", "&#8592"],
        ["&#8595", "&#8595"],
        ["&#8594", "&#8594"],
        ["Control", "Control"],
    ]
];


let englishKeybord = [
    [
        ["Backquote", "~"],
        ["1", "!"],
        ["2", "@"],
        ["3", "#"],
        ["4", "$"],
        ["5", "%"],
        ["6", "^"],
        ["7", "&"],
        ["8", "*"],
        ["9", "("],
        ["0", ")"],
        ["-", "_"],
        ["=", "+"],
        ["Backspace", "Backspace"]
    ],
    [
        ["Tab", "Tab"],
        ["q", "Q"],
        ["w", "W"],
        ["e", "E"],
        ["r", "R"],
        ["t", "T"],
        ["y", "Y"],
        ["u", "U"],
        ["i", "I"],
        ["o", "O"],
        ["p", "P"],
        ["[", "{"],
        ["]", "}"],
        ["\\", "|"]
    ],
    [
        ["CapsLock", "CapsLock"],
        ["a", "A"],
        ["s", "S"],
        ["d", "D"],
        ["f", "F"],
        ["g", "G"],
        ["h", "H"],
        ["j", "J"],
        ["k", "K"],
        ["l", "L"],
        [";", ":"],
        ["'", '"'],
        ["Enter", "Enter"]
    ],
    [
        ["ShiftLeft", "ShiftLeft"],
        ["z", "Z"],
        ["x", "X"],
        ["c", "C"],
        ["v", "V"],
        ["b", "B"],
        ["n", "N"],
        ["m", "M"],
        [",", "<"],
        [".", ">"],
        ["/", "?"],
        ["&#8593", "&#8593"],
        ["ShiftRight", "ShiftRight"]
    ],
    [
        ["ControlLeft", "ControlLeft"],
        ["MetaLeft", "MetaLeft"],
        ["AltLeft", "AltLeft"],
        ["Space", "Space"],
        ["AltRight", "AltRight"],
        ["&#8592", "&#8592"],
        ["&#8595", "&#8595"],
        ["&#8594", "&#8594"],
        ["ControlRight", "ControlRight"],
    ]
];

///////////////////////////Created DOM elements

let wrapper = document.createElement('div');
wrapper.className = 'wrapper';
document.body.prepend(wrapper);
let textarea = document.createElement('textarea');
textarea.id = 'textarea';
textarea.type = 'text';
textarea.autofocus = "autofocus"
wrapper.prepend(textarea);
let keybourd = document.createElement('div');
keybourd.className = 'keybourd';
wrapper.append(keybourd);

function getRowKeyboard() {
    let result = [];
    for (let i = 1; i <= 5; i++) {
        let div = document.createElement('div');
        div.className = 'row-' + i;
        result.push(div);
    }
    return result;
}

keybourd.append(...getRowKeyboard());


function getInnerForButton(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let button = document.createElement('button');

        button.innerHTML = arr[i][0];
        if (arr[i][0] == 'ShiftRight' || arr[i][0] == 'ShiftLeft') {
            button.innerHTML = 'Shift';
        } else if (arr[i][0] == 'ControlRight' || arr[i][0] == 'ControlLeft') {
            button.innerHTML = 'Control';
        } else if (arr[i][0] == 'AltRight' || arr[i][0] == 'AltLeft') {
            button.innerHTML = 'Alt';
        } else if (arr[i][0] == 'Backquote') {
            button.innerHTML = '~';
        } else if (arr[i][0] == 'MetaLeft') {
            button.innerHTML = 'Win';
        }

        button.id = arr[i][0];
        if (arr[i][0] == '&#8594') {
            button.id = 'right'
        } else if (arr[i][0] == '&#8595') {
            button.id = 'down';
        } else if (arr[i][0] == '&#8592') {
            button.id = 'left';
        } else if (arr[i][0] == '&#8593') {
            button.id = 'top';
        } else if (arr[i][0] == ',') {
            button.id = 'Comma';
        } else if (arr[i][0] == '.') {
            button.id = 'Period';
        } else if (arr[i][0] == '/') {
            button.id = 'Slash';
        } else if (arr[i][0] == ';') {
            button.id = 'Semicolon';
        } else if (arr[i][0] == "'") {
            button.id = 'Quote';
        } else if (arr[i][0] == '[') {
            button.id = 'BracketLeft';
        } else if (arr[i][0] == ']') {
            button.id = 'BracketRight';
        } else if (arr[i][0] == '\\') {
            button.id = 'Backslash';
        } else if (arr[i][0] == "=") {
            button.id = 'Equal';
        } else if (arr[i][0] == "-") {
            button.id = 'Minus';
        } else if (arr[i][0] == '1') {
            button.id = 'Digit1'
        } else if (arr[i][0] == '2') {
            button.id = 'Digit2'
        } else if (arr[i][0] == '3') {
            button.id = 'Digit3'
        } else if (arr[i][0] == '4') {
            button.id = 'Digit4'
        } else if (arr[i][0] == '5') {
            button.id = 'Digit5'
        } else if (arr[i][0] == '6') {
            button.id = 'Digit6'
        } else if (arr[i][0] == '7') {
            button.id = 'Digit7'
        } else if (arr[i][0] == '8') {
            button.id = 'Digit8'
        } else if (arr[i][0] == '9') {
            button.id = 'Digit9'
        } else if (arr[i][0] == '0') {
            button.id = 'Digit0'
        }

        result.push(button);
        language = 'english';
    }
    return result;
}

function createEnglishButton() {
    document.querySelector('.row-1').append(...getInnerForButton(englishKeybord[0]));
    document.querySelector('.row-2').append(...getInnerForButton(englishKeybord[1]));
    document.querySelector('.row-3').append(...getInnerForButton(englishKeybord[2]));
    document.querySelector('.row-4').append(...getInnerForButton(englishKeybord[3]));
    document.querySelector('.row-5').append(...getInnerForButton(englishKeybord[4]));
};

createEnglishButton();
document.querySelector('#Space').style.color = '#3a424e';


///////////////////////////Created function for animation
function addAmimation(button) {
    button.style.borderRadius = '15px';
    button.style.background = 'steelblue';
    setTimeout(() => {
        button.style.borderRadius = '0%';
        button.style.background = '#3a424e';
    }, 500)
};


///////////////////////////Created function for languages and saved selected languages
let key = localStorage.getItem('keyOfLang');

let lg;
if (key) {
    lg = key;
} else {
    lg = 'english';
}

window.onload = () => {
    if (lg == 'russia') {
        changeLangForRissia(document.querySelector('.row-1').children, russianKeybord[0]);
        changeLangForRissia(document.querySelector('.row-2').children, russianKeybord[1]);
        changeLangForRissia(document.querySelector('.row-3').children, russianKeybord[2]);
        changeLangForRissia(document.querySelector('.row-4').children, russianKeybord[3]);
        changeLangForRissia(document.querySelector('.row-5').children, russianKeybord[4]);
    }
}

function changeLangForRissia(arr, array) {
    let i = 0;
    for (let elem of arr) {
        elem.innerHTML = array[i++][0];
    }
    lg = 'russia';
}

function changeLangForEnglish(arr, array) {
    let i = 0;
    for (let elem of arr) {

        if (array[i][0] == 'ShiftRight' || array[i][0] == 'ShiftLeft') {
            elem.innerHTML = 'Shift';
        } else if (array[i][0] == 'ControlRight' || array[i][0] == 'ControlLeft' || array[i][1] == 'ControlLeft') {
            elem.innerHTML = 'Control';
        } else if (array[i][0] == 'AltRight' || array[i][0] == 'AltLeft') {
            elem.innerHTML = 'Alt';
        } else if (array[i][0] == 'Backquote') {
            elem.innerHTML = '~';
        } else if (array[i][0] == 'MetaLeft') {
            elem.innerHTML = 'Win';
        } else {
            elem.innerHTML = array[i][0];
        }
        i++
    }
    lg = 'english';
}

///////////////////////////Created event for selected languages
document.addEventListener('keydown', (event) => {
    if (event.shiftKey && event.altKey) {
        if (lg == 'english') {
            changeLangForRissia(document.querySelector('.row-1').children, russianKeybord[0]);
            changeLangForRissia(document.querySelector('.row-2').children, russianKeybord[1]);
            changeLangForRissia(document.querySelector('.row-3').children, russianKeybord[2]);
            changeLangForRissia(document.querySelector('.row-4').children, russianKeybord[3]);
            changeLangForRissia(document.querySelector('.row-5').children, russianKeybord[4]);
        } else if (lg == 'russia') {
            changeLangForEnglish(document.querySelector('.row-1').children, englishKeybord[0]);
            changeLangForEnglish(document.querySelector('.row-2').children, englishKeybord[1]);
            changeLangForEnglish(document.querySelector('.row-3').children, englishKeybord[2]);
            changeLangForEnglish(document.querySelector('.row-4').children, englishKeybord[3]);
            changeLangForEnglish(document.querySelector('.row-5').children, englishKeybord[4]);
        }
    }
    localStorage.setItem('keyOfLang', lg);
});


///////////////////////////Created function for selected size
let size = 'small';

function changeSizeforLarge(arr, array, j) {
    let i = 0;
    for (let elem of arr) {
        if (i <= j) {

            if (array[i][0] == 'ShiftRight' || array[i][0] == 'ShiftLeft') {
                elem.innerHTML = 'Shift';
            } else if (array[i][0] == 'ControlRight' || array[i][0] == 'ControlLeft' || array[i][1] == 'ControlLeft') {
                elem.innerHTML = 'Control';
            } else if (array[i][0] == 'AltRight' || array[i][0] == 'AltLeft') {
                elem.innerHTML = 'Alt';
            } else if (array[i][0] == 'Backquote') {
                elem.innerHTML = '~';
            } else if (array[i][0] == 'MetaLeft') {
                elem.innerHTML = 'Win';
            } else {
                elem.innerHTML = array[i][1];
            }
        }
        i++;
    }
    size = 'large';
}

function changeSizeforSmall(arr, array, j) {
    let i = 0;
    for (let elem of arr) {
        if (i <= j) {
            if (array[i][0] == 'ShiftRight' || array[i][0] == 'ShiftLeft') {
                elem.innerHTML = 'Shift';
            } else if (array[i][0] == 'ControlRight' || array[i][0] == 'ControlLeft' || array[i][1] == 'ControlLeft') {
                elem.innerHTML = 'Control';
            } else if (array[i][0] == 'AltRight' || array[i][0] == 'AltLeft') {
                elem.innerHTML = 'Alt';
            } else if (array[i][0] == 'Backquote') {
                elem.innerHTML = '~';
            } else if (array[i][0] == 'MetaLeft') {
                elem.innerHTML = 'Win';
            } else {
                elem.innerHTML = array[i][0];
            }
        }

        i++;
    }
    size = 'small';
}


///////////////////////////Created event click at the button
keybourd.addEventListener('click', function(event) {
    let button = event.target.closest('button');

    if (!button) {
        return
    }

    if (button.textContent != 'Backspace' && button.textContent != 'CapsLock' && button.textContent != 'Shift' &&
        button.textContent != 'Tab' && button.textContent != 'Enter' && button.textContent != 'Space' &&
        button.textContent != 'Alt' && button.textContent != 'Control' && button.textContent != 'Win') {
        addAmimation(button);
        textarea.value += button.textContent;
    };

    if (button.textContent == 'Space') {
        addAmimation(button);
        textarea.value += ' ';
    }

    if (button.textContent == 'Enter') {
        addAmimation(button);
        textarea.value += '\n';
    }

    if (button.textContent == 'Backspace') {
        addAmimation(button);
        textarea.value = textarea.value.slice(0, textarea.value.length - 1);
    }


    if (button.textContent == 'CapsLock') {
        addAmimation(button);
        if (size == 'small' && lg == 'english') {
            changeSizeforLarge(document.querySelector('.row-2').children, englishKeybord[1], 10);
            changeSizeforLarge(document.querySelector('.row-3').children, englishKeybord[2], 9);
            changeSizeforLarge(document.querySelector('.row-4').children, englishKeybord[3], 7);
        } else if (size == 'large' && lg == 'english') {
            changeSizeforSmall(document.querySelector('.row-2').children, englishKeybord[1], 10);
            changeSizeforSmall(document.querySelector('.row-3').children, englishKeybord[2], 9);
            changeSizeforSmall(document.querySelector('.row-4').children, englishKeybord[3], 7);
        } else if (size == 'small' && lg == 'russia') {
            changeSizeforLarge(document.querySelector('.row-1').children, russianKeybord[0], 0);
            changeSizeforLarge(document.querySelector('.row-2').children, russianKeybord[1], 12);
            changeSizeforLarge(document.querySelector('.row-3').children, russianKeybord[2], 11);
            changeSizeforLarge(document.querySelector('.row-4').children, russianKeybord[3], 9);
        } else if (size == 'large' && lg == 'russia') {
            changeSizeforSmall(document.querySelector('.row-1').children, russianKeybord[0], 0);
            changeSizeforSmall(document.querySelector('.row-2').children, russianKeybord[1], 12);
            changeSizeforSmall(document.querySelector('.row-3').children, russianKeybord[2], 11);
            changeSizeforSmall(document.querySelector('.row-4').children, russianKeybord[3], 9);
        }
    }
});






///////////////////////////Created event press on shift button
document.addEventListener('mousedown', (event) => {
    let button = event.target.closest('button');

    if (!button) {
        return
    }

    if (button.textContent == 'Shift') {
        document.querySelector('#ShiftLeft').style.borderRadius = '15px';
        document.querySelector('#ShiftLeft').style.background = 'steelblue';
        if (lg == 'english') {
            changeSizeforLarge(document.querySelector('.row-1').children, englishKeybord[0], 13);
            changeSizeforLarge(document.querySelector('.row-2').children, englishKeybord[1], 14);
            changeSizeforLarge(document.querySelector('.row-3').children, englishKeybord[2], 12);
            changeSizeforLarge(document.querySelector('.row-4').children, englishKeybord[3], 11);
        } else if (lg == 'russia') {
            changeSizeforLarge(document.querySelector('.row-1').children, russianKeybord[0], 13);
            changeSizeforLarge(document.querySelector('.row-2').children, russianKeybord[1], 14);
            changeSizeforLarge(document.querySelector('.row-3').children, russianKeybord[2], 12);
            changeSizeforLarge(document.querySelector('.row-4').children, russianKeybord[3], 11);
        }
    }
});


document.addEventListener('mouseup', (event) => {
    let button = event.target.closest('button');

    if (!button) {
        return
    }
    if (button.textContent == 'Shift') {
        if (lg == 'english') {
            addAmimation(document.querySelector('#ShiftLeft'));
            changeSizeforSmall(document.querySelector('.row-1').children, englishKeybord[0], 13);
            changeSizeforSmall(document.querySelector('.row-2').children, englishKeybord[1], 14);
            changeSizeforSmall(document.querySelector('.row-3').children, englishKeybord[2], 12);
            changeSizeforSmall(document.querySelector('.row-4').children, englishKeybord[3], 11);
        } else if (lg == 'russia') {
            addAmimation(document.querySelector('#ShiftLeft'));
            changeSizeforSmall(document.querySelector('.row-1').children, russianKeybord[0], 13);
            changeSizeforSmall(document.querySelector('.row-2').children, russianKeybord[1], 14);
            changeSizeforSmall(document.querySelector('.row-3').children, russianKeybord[2], 12);
            changeSizeforSmall(document.querySelector('.row-4').children, russianKeybord[3], 11);
        }
    }
    addAmimation(button);
});







///////////////////////////Created event press on key
document.addEventListener('keydown', (event) => {

    let str = '#' + event.code.slice(event.code.length - 1).toLowerCase();
    let str1 = '#' + event.code;

    if (event.key == 'CapsLock') {
        document.querySelector('#' + event.key).style.borderRadius = '15px';
        document.querySelector('#' + event.key).style.background = 'steelblue';
        if (size == 'small' && lg == 'english') {
            changeSizeforLarge(document.querySelector('.row-2').children, englishKeybord[1], 10);
            changeSizeforLarge(document.querySelector('.row-3').children, englishKeybord[2], 9);
            changeSizeforLarge(document.querySelector('.row-4').children, englishKeybord[3], 7);
        } else if (size == 'large' && lg == 'english') {
            changeSizeforSmall(document.querySelector('.row-2').children, englishKeybord[1], 10);
            changeSizeforSmall(document.querySelector('.row-3').children, englishKeybord[2], 9);
            changeSizeforSmall(document.querySelector('.row-4').children, englishKeybord[3], 7);
        } else if (size == 'small' && lg == 'russia') {
            changeSizeforLarge(document.querySelector('.row-1').children, russianKeybord[0], 0);
            changeSizeforLarge(document.querySelector('.row-2').children, russianKeybord[1], 12);
            changeSizeforLarge(document.querySelector('.row-3').children, russianKeybord[2], 11);
            changeSizeforLarge(document.querySelector('.row-4').children, russianKeybord[3], 9);
        } else if (size == 'large' && lg == 'russia') {
            changeSizeforSmall(document.querySelector('.row-1').children, russianKeybord[0], 0);
            changeSizeforSmall(document.querySelector('.row-2').children, russianKeybord[1], 12);
            changeSizeforSmall(document.querySelector('.row-3').children, russianKeybord[2], 11);
            changeSizeforSmall(document.querySelector('.row-4').children, russianKeybord[3], 9);
        }

    } else if (event.key == 'Shift') {
        document.querySelector('#ShiftLeft').style.borderRadius = '15px';
        document.querySelector('#ShiftLeft').style.background = 'steelblue';
        if (lg == 'english') {
            changeSizeforLarge(document.querySelector('.row-1').children, englishKeybord[0], 13);
            changeSizeforLarge(document.querySelector('.row-2').children, englishKeybord[1], 14);
            changeSizeforLarge(document.querySelector('.row-3').children, englishKeybord[2], 12);
            changeSizeforLarge(document.querySelector('.row-4').children, englishKeybord[3], 11);
        } else if (lg == 'russia') {
            changeSizeforLarge(document.querySelector('.row-1').children, russianKeybord[0], 13);
            changeSizeforLarge(document.querySelector('.row-2').children, russianKeybord[1], 14);
            changeSizeforLarge(document.querySelector('.row-3').children, russianKeybord[2], 12);
            changeSizeforLarge(document.querySelector('.row-4').children, russianKeybord[3], 11);
        }
    } else if (document.querySelector(str1)) {
        document.querySelector(str1).style.borderRadius = '15px';
        document.querySelector(str1).style.background = 'steelblue';
    } else if (event.code == 'ArrowRight') {
        document.querySelector('#right').style.borderRadius = '15px';
        document.querySelector('#right').style.background = 'steelblue';
    } else if (event.code == 'ArrowLeft') {
        document.querySelector('#left').style.borderRadius = '15px';
        document.querySelector('#left').style.background = 'steelblue';
    } else if (event.code == 'ArrowUp') {
        document.querySelector('#top').style.borderRadius = '15px';
        document.querySelector('#top').style.background = 'steelblue';
    } else if (event.code == 'ArrowDown') {
        document.querySelector('#down').style.borderRadius = '15px';
        document.querySelector('#down').style.background = 'steelblue';
    } else if (document.querySelector(str)) {
        document.querySelector(str).style.borderRadius = '15px';
        document.querySelector(str).style.background = 'steelblue';
        // textarea.value += event.key;
    }

});

document.addEventListener('keyup', (event) => {

    let str = '#' + event.code.slice(event.code.length - 1).toLowerCase();
    let str1 = '#' + event.code;


    if (event.key == 'Shift') {
        addAmimation(document.querySelector('#ShiftLeft'));
        if (lg == 'english') {
            changeSizeforSmall(document.querySelector('.row-1').children, englishKeybord[0], 13);
            changeSizeforSmall(document.querySelector('.row-2').children, englishKeybord[1], 14);
            changeSizeforSmall(document.querySelector('.row-3').children, englishKeybord[2], 12);
            changeSizeforSmall(document.querySelector('.row-4').children, englishKeybord[3], 11);
        } else if (lg == 'russia') {
            changeSizeforSmall(document.querySelector('.row-1').children, russianKeybord[0], 13);
            changeSizeforSmall(document.querySelector('.row-2').children, russianKeybord[1], 14);
            changeSizeforSmall(document.querySelector('.row-3').children, russianKeybord[2], 12);
            changeSizeforSmall(document.querySelector('.row-4').children, russianKeybord[3], 11);
        }

    } else if (document.querySelector(str1)) {
        addAmimation(document.querySelector(str1));
    } else if (event.code == 'ArrowRight') {
        addAmimation(document.querySelector('#right'));
    } else if (event.code == 'ArrowLeft') {
        addAmimation(document.querySelector('#left'));
    } else if (event.code == 'ArrowUp') {
        addAmimation(document.querySelector('#top'));
    } else if (event.code == 'ArrowDown') {
        addAmimation(document.querySelector('#down'));
    } else if (document.querySelector(str)) {
        addAmimation(document.querySelector(str));
    }
});