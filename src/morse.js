const alphabet = {
    ".-": "A", "-...": "B", "-.-.": "C", "-..": "D",
    ".": "E", "..-.": "F", "--.": "G", "....": "H",
    "..": "I", ".---": "J", "-.-": "K", ".-..": "L",
    "--": "M", "-.": "N", "---": "O", ".--.": "P",
    "--.-": "Q", ".-.": "R", "...": "S", "-": "T",
    "..-": "U", "...-": "V", ".--": "W", "-..-": "X",
    "-.--": "Y", "--..": "Z", "-----": "0", ".----": "1",
    "..---": "2", "...--": "3", "....-": "4", ".....": "5",
    "-....": "6", "--...": "7", "---..": "8", "----.": "9"
}

const getKeyByValue = (object, value) => {
    return Object.keys(object).find(key => object[key] === value);
}

export const toMorse = (input) => {
    return input.trim().toUpperCase().split(' ').map(word => {
        return word.split('').map(letter => {
            return getKeyByValue(alphabet, letter);
        }).join(' ');
    }).join('   ');
}

const decodeMorse = (morseCode) => {
    return morseCode.trim().split('   ').map(word => {
        return word.split(' ').map(letter => {
            return alphabet[letter];
        }).join('');
    }).join(' ');
}

export default decodeMorse;