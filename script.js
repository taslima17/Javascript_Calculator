// clear button setup
document.getElementById('clear').addEventListener('click', function () {
    document.getElementById('display').value = '';
})
//delete button setup
document.getElementById('delete').addEventListener('click', () => {
    const num = document.getElementById('display').value.slice(0, -1);
    document.getElementById('display').value = num;

})
//one

const one = () => {
    const val = document.getElementById('display');
    if (val.value == '') {
        val.value = '1';
    }
    else {
        val.value = val.value + '1';
    }
}
//two

const two = () => {
    const val = document.getElementById('display');
    if (val.value == '') {
        val.value = '2';
    }
    else {
        val.value = val.value + '2';
    }
}
//three

const three = () => {
    const val = document.getElementById('display');
    if (val.value == '') {
        val.value = '3';
    }
    else {
        val.value = val.value + '3';
    }
}
//four

const four = () => {
    const val = document.getElementById('display');
    if (val.value == '') {
        val.value = '4';
    }
    else {
        val.value = val.value + '4';
    }
}
//five

const five = () => {
    const val = document.getElementById('display');
    if (val.value == '') {
        val.value = '5';
    }
    else {
        val.value = val.value + '5';
    }
}
//six

const six = () => {
    const val = document.getElementById('display');
    if (val.value == '') {
        val.value = '6';
    }
    else {
        val.value = val.value + '6';
    }
}
//seven

const seven = () => {
    const val = document.getElementById('display');
    if (val.value == '') {
        val.value = '7';
    }
    else {
        val.value = val.value + '7';
    }
}
//eight

const eight = () => {
    const val = document.getElementById('display');
    if (val.value == '') {
        val.value = '8';
    }
    else {
        val.value = val.value + '8';
    }
}
//nine

const nine = () => {
    const val = document.getElementById('display');
    if (val.value == '') {
        val.value = '9';
    }
    else {
        val.value = val.value + '9';
    }
}
//zero

const zero = () => {
    const val = document.getElementById('display');
    if (val.value == '') {
        val.value = '0';
    }
    else {
        val.value = val.value + '0';
    }
}
const point = () => {
    const val = document.getElementById('display');
    if (val.value == '') {
        val.value = '.';
    }
    else {
        val.value = val.value + '.';
    }
}