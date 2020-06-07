/**
 * @description Turns a number into a written English numeral.
 * @param {number} input Number to convert. Maximum 999999
 * @returns {string}
 */
const stringifyNumber = input => {
	const singleNumbers = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
	const tens = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");

	if (input < 20) {
		return singleNumbers[input];
	} else {
		const digit = input % 10;
		if (input < 100) {
			return tens[~~(input / 10) - 2] + (digit ? "-" + singleNumbers[digit] : "");
		} else if (input < 1000) {
			return singleNumbers[~~(input / 100)] + " hundred" + (input % 100 == 0 ? "" : " " + stringifyNumber(input % 100));
		} else {
			return stringifyNumber(~~(input / 1000)) + " thousand" + (input % 1000 != 0 ? " " + stringifyNumber(input % 1000) : "");
		}
	}
}

Number.prototype.toWritten = function () { return stringifyNumber(this) };

/**
 * @description Factory for titlecase functions.
 * @param {function} lower Function to use for lowercase transformation.
 * @param {function} upper Function to use for uppercase transformation.
 */
String.prototype.toTitleCaseCustomify = function (lower, upper) {
	const words = this.split(/ +/);
	let output = '';

	for (let word of words) {
		output += upper.call(word[0]);
		output += lower.call(word.slice(1));
		output += ' ';
	}

	return output.slice(0, -1);
}

/**
 * @description Titlecases the string.
 * @returns {string}
 */
String.prototype.toTitleCase = function () {
	return this.toTitleCaseCustomify(this.toLowerCase, this.toUpperCase);
}

/**
 * @description Titlecases the string using locale functions.
 * @returns {string}
 */
String.prototype.toLocaleTitleCase = function () {
	return this.toTitleCaseCustomify(this.toLocaleLowerCase, this.toLocaleUpperCase);
}

// -----

const stringifyHTML = () => {
	document.querySelectorAll('.numeral').forEach(node => {
		node.textContent = stringifyNumber(+node.textContent).toTitleCase();
		node.classList.remove('numeral');
		node.classList.add('numeral-parsed');
	});
}

const step = () => {
	let currentStepNumber = 1;

	document.querySelectorAll('.step:not(.step-done)').forEach(function (node) {
		let innerNumber = document.createElement('span');
		innerNumber.classList.add('numeral');
		innerNumber.textContent = currentStepNumber;
		node.textContent = 'Step ';
		node.classList.add('step-done');
		node.appendChild(innerNumber);

		currentStepNumber++;
	});

	stringifyHTML();
};

const stepData = () => {
	document.querySelectorAll('[data-igm-step]').forEach(node => {
		let stepNum = document.createElement('span');
		stepNum.classList.add('step');
		let text = document.createElement('span');
		text.textContent = `: ${node.textContent}`;
		node.innerHTML = '';
		node.appendChild(stepNum);
		node.appendChild(text);
	});
	step();
}

stepData();