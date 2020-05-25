const map = {
	'-': 'meno',
	0: 'zero',
	1: ['uno', 'un'],
	2: 'due',
	3: 'tre',
	4: 'quattro',
	5: 'cinque',
	6: 'sei',
	7: 'sette',
	8: 'otto',
	9: 'nove',
	10: 'dieci',
	11: 'undici',
	12: 'dodici',
	13: 'tredici',
	14: 'quattordici',
	15: 'quindici',
	16: 'sedici',
	17: 'diciassette',
	18: 'diciotto',
	19: 'diciannove',
	20: ['venti', 'vent'],
	30: ['trenta', 'trent'],
	40: ['quaranta', 'quarant'],
	50: ['cinquanta', 'cinquant'],
	60: ['sessanta', 'sessant'],
	70: ['settanta', 'settant'],
	80: ['ottanta', 'ottant'],
	90: ['novanta', 'novant'],
	100: 'cento',
	1000: ['mille', 'mila'],
	1_000_000: ['milione', 'milioni'],
	1_000_000_000: ['miliardo', 'miliardi'],
	1_000_000_000_000: ['bilione', 'bilioni'],
	useShort: [1, 8],
}

const simple = num => {
	const hundreds = (num.toString().length == 3) ? parseInt(num.toString()[0]) : 0;
	const tens = (num.toString().length == 3) ? parseInt(num.toString()[1]) :
		(num.toString().length == 2) ? parseInt(num.toString()[0]) : 0;
	const units = parseInt(num.toString()[num.toString().length - 1]);
	let res = '';
	if (hundreds) {
		// has hundreds
		if (hundreds === 1) {
			// has a hundred
			res += map[100];
		} else {
			// has 2+ hundreds
			res += map[parseInt(hundreds)] + map[100];
		}
	}
	if (typeof (map[tens * 10 + units]) == 'string') {
		res += map[tens * 10 + units];
	} else if (tens) {
		// has 20+ tens
		if (map.useShort.indexOf(units) !== -1) {
			res += map[tens * 10][1] + map[units];
		} else {
			res += map[tens * 10][0] + map[units];
		}
	} else {
		res += (units == 1) ? map[units][0] : map[units];
	}
	if (res.substr(-4) == 'zero')
		res = res.substr(0, res.length - 4)
	return res;
}

const unitsPar = simple;

const kilosPar = kilos => {
	if (kilos == 1) {
		// has 1k
		return map[1000][0];
	} else {
		return simple(kilos) + map[1000][1];
	}
}

const milPlus = (mils, name) => {
	if (mils == 1) {
		// has a ?lion
		return map[1][1] + ' ' + name[0];
	} else {
		return simple(mils) + ' ' + name[1];
	}
}


const to2 = num => {
	let out = '';
	const string = num.toString().padStart((num.toString().length + num.toString().length % 3), '0');
	const pieces = string.match(/.{3}/g).map(i => +i).reverse();
	for (let ind = pieces.length - 1; ind >= 0; ind--) {
		if (ind === 0) {
			out += unitsPar(pieces[ind]);
		} else if (ind === 1) {
			out += kilosPar(pieces[ind]) + ' ';
		} else {
			const a = parseInt('1' + '0'.repeat(3 * ind));
			out += milPlus(pieces[ind], a) + ' e ';
		}
	}
	for (let index = 0; index < pieces.length; index++) {
		const element = pieces[index];
		if (index == 0) {
			out = out + unitsPar(element);
		}
	}
	return out;
}

Number.prototype.toItalianString = () => {
	return to2(this);
}

if (process) {
	module.exports = to2;
}