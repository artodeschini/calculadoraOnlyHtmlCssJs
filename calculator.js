function operador(op) {
    const display = document.getElementById('d');
    const actual = display.value;
    const last = actual.charAt(actual.length -1);

    if (actual.length > 0) {
        if (last == '+' || last == '-' || last == '/' || last == '*' ) {
            display.value = actual.substring(0, actual.length -1) + '' + op;
        } else {
            display.value = actual + op;
        }
    }
}