const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
	let str = "";
   let arr = expr.split("");
	let arrLetterCode = arr.splice(0, 10);
	while(arrLetterCode.length == 10) {
		str = str + decoderLetter(arrLetterCode);
		arrLetterCode = arr.splice(0, 10);
	}
	return str;
}

function decoderLetter (arrLetterCode) {
	if(arrLetterCode[0] == "*") return " ";
	while(arrLetterCode[0] == 0) {
		arrLetterCode.splice(0, 1);
	}
	let dotDashLetter = "";
	for(let i = 1; i < arrLetterCode.length; i = i +2) {
		if(arrLetterCode[i] == 0) dotDashLetter += ".";
		else dotDashLetter += "-";
	}
	return MORSE_TABLE[dotDashLetter];
}




module.exports = {
    decode
}