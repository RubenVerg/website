let Col = require('colors');
let util = require('util');
const v8 = require('v8');

/**
 * @returns {any[]}
 * @param {any[]} el 
 */
const clone = el => {
	return v8.deserialize(v8.serialize(el));
}

/**
 * @description Sorts by string length.
 * @param {string} f First param
 * @param {string} s Second param
 */
const lSort = (f, s) => {
	if (f.length < s.length) {
		return -1;
	}
	if (f.length > s.length) {
		return 1;
	}
	return 0;
}


Col.setTheme({
	e: ['red'],
	he: ['bgRed', 'white'],
	f: ['magenta'],
	hf: ['bgMagenta', 'white'],
	w: ['yellow'],
	hw: ['bgYellow', 'white'],
	s: ['green'],
	hs: ['bgGreen', 'white'],
	i: ['blue'],
	hi: ['bgBlue', 'white'],
	g: ['inverse'],
	c: ['red'],
	hc: ['bgGreen', 'white']
});

let exp = {
	INDENTATION: 0,
	REAL_INDENT: 0,
	indentationSteps: 1,
	GROUPS_IN: [],
	NEAR_GROUP_START: false,
	NEAR_GROUP_END: false,
	CATCHED: [],
	maxIndent: 10,
	msg: {
		info: " INFO ",
		warn: " WARN ",
		error: "  ERR ",
		success: " SUCC ",
		fatal: "FATAL ",
		catched: "CATCH ",
		groupIn: "> ",
		groupOut: "< ",
	},
	BOX: {
		h: "─",
		v: "│",
		se: "┌",
		sw: "┐",
		ne: "└",
		nw: "┘",
		ve: "├",
		vw: "┤",
		hs: "┬",
		hn: "┴",
		hv: "┼",
		dh: "╌",
		dv: "╎",
		cse: "╭",
		csw: "╮",
		cne: "╰",
		cnw: "╯"
	},
	/**
	 * @description Sets the theme of the logging. The object's elements are 'e' for error, 'he' for the error head, 'f' for fatal error, 'hf' for the fatal head, 'w' for warn, 'hw' for the warn head, 's' for success, 'hs' for the success head, 'i' for info, 'hi' for the info head, 'c' for catched error, 'hc' for catched head, 'g' for group headers. For how to define colors, see the color package guide.
	 * @param {Object} theme 
	 */
	changeTheme(theme) {
		Col.setTheme(theme);
	},
	/**
	 * @description Logs to console.
	 * @param {any} msg What to log.
	 * @param  {...any} optionalParams Substitutions. See console.log.
	 */
	log(msg, ...optionalParams) {
		this.NEAR_GROUP_START = false;
		this.NEAR_GROUP_END = false;
		process.stdout.write(" ".repeat(this.INDENTATION * this.indentationSteps) + util.format.apply(this, arguments) + '\n');
	},
	/**
	 * @description Logs an info message. NOTICE: to use the default head but also formatting, the second argument must be falsy.
	 * @param {string} msg What to log.
	 * @param {string} [head] The head message.
	 * @param  {...any} [optionalParams] Formats.
	 */
	info(msg, head, ...optionalParams) {
		if (head) {
			this.log(head.hi + " " + msg.i, ...optionalParams);
		} else {
			this.log(this.msg.info.hi + " " + msg.i, ...optionalParams);
		}
	},
	/**
	 * @description Logs a warning message. NOTICE: to use the default head but also formatting, the second argument must be falsy.
	 * @param {string} msg What to log.
	 * @param {string} [head] The head message.
	 * @param  {...any} [optionalParams] Formats.
	 */
	warn(msg, head, ...optionalParams) {
		if (head) {
			this.log(head.hw + " " + msg.w, ...optionalParams);
		} else {
			this.log(this.msg.warn.hw + " " + msg.w, ...optionalParams);
		}
	},
	/**
	 * @description Logs a success message. NOTICE: to use the default head but also formatting, the second argument must be falsy.
	 * @param {string} msg What to log.
	 * @param {string} [head] The head message.
	 * @param  {...any} [optionalParams] Formats.
	 */
	success(msg, head, ...optionalParams) {
		if (head) {
			this.log(head.hs + " " + msg.s, ...optionalParams);
		} else {
			this.log(this.msg.success.hs + " " + msg.s, ...optionalParams);
		}
	},
	/**
	 * @description Logs a non-fatal error message (doesn't throw). NOTICE: to use the default head but also formatting, the second argument must be falsy.
	 * @param {string} e The error.
	 * @param {string} [head] The head message.
	 * @param  {...any} [optionalParams] Formats.
	 */
	error(e, head, ...optionalParams) {
		if (head) {
			this.log(head.he + " " + (function () {
				if (e instanceof Error) {
					return e.message.e;
				} else {
					return e.e;
				}
			})(), ...optionalParams);
		} else {
			this.log(this.msg.error.he + " " + (function () {
				if (e instanceof Error) {
					return e.message.e;
				} else {
					return e.e;
				}
			})(), ...optionalParams);
		}
	},
	/**
	 * @description Logs a fatal error message (throws). NOTICE: to use the default head but also formatting, the second argument must be falsy.
	 * @param {string} e The error.
	 * @param {string} [head] The head message.
	 * @param  {...any} [optionalParams] Formats.
	 */
	fatal(e, head, ...optionalParams) {
		if (head) {
			this.log(head.hf + " " + (function () {
				if (e instanceof Error) {
					return e.message.f;
				} else {
					return e.f;
				}
			})(), ...optionalParams);
			throw new Error(head.hf + ' ' + 'Fatal error occurred. See above for details.'.f);
		} else {
			this.log(this.msg.fatal.hf + " " + (function () {
				if (e instanceof Error) {
					return e.message.f;
				} else {
					return e.f;
				}
			})(), ...optionalParams);
			throw new Error(this.msg.fatal.hf + ' ' + 'Fatal error occurred. See above for details.'.f);
		};
	},
	/**
	 * @description Catches an error for future logging.
	 * @param {Error|string} e The error to catch.
	 */
	catch(e) {
		this.CATCHED.push(e);
	},
	UNCATCH_E(e, h) {
		if (h) {
			this.log(h.hc + " " + e.c);
		} else {
			this.log(this.msg.catched.hc + ' ' + e.c);
		}
	},
	/**
	 * @description Logs all catched messages.
	 * @param {string} [head] The head message.
	 */
	uncatch(head) {
		if (head) {
			this.CATCHED.forEach(e => {
				if (e instanceof Error) {
					this.UNCATCH_E(e.message, head);
				} else {
					this.UNCATCH_E(e, head)
				}
			});
		} else {
			this.CATCHED.forEach(e => {
				if (e instanceof Error) {
					this.UNCATCH_E(e.message);
				} else {
					this.UNCATCH_E(e)
				}
			});
		}
	},
	SHIFT() {
		this.REAL_INDENT += this.indentationSteps;
		if (this.maxIndent === -1 || this.REAL_INDENT <= this.maxIndent) this.INDENTATION = this.REAL_INDENT;
	},
	UNSHIFT() {
		if (this.REAL_INDENT - this.indentationSteps >= 0) {
			this.REAL_INDENT -= this.indentationSteps;
			this.INDENTATION = this.REAL_INDENT;
		}
	},
	/**
	 * @description Starts a group.
	 * @param {string} name The group's name.
	 */
	group(name) {
		if (!this.NEAR_GROUP_START && this.NEAR_GROUP_END) this.log();
		if (name) {
			this.log((this.msg.groupIn + name).g);
			this.SHIFT();
			this.GROUPS_IN.push(name)
		} else {
			this.log((this.msg.groupIn + 'Unnamed group').g);
			this.SHIFT();
			this.GROUPS_IN.push('Unnamed group');
		};
		this.NEAR_GROUP_START = true;
	},
	/**
	 * @description Ends the group you are in.
	 */
	ungroup() {
		if (this.NEAR_GROUP_START) this.log()
		this.UNSHIFT();
		this.log((this.msg.groupOut + " " + this.GROUPS_IN[this.GROUPS_IN.length - 1]).g);
		this.GROUPS_IN.pop();
		this.NEAR_GROUP_END = true;
	},
	groupEnd() {
		this.ungroup()
	},
	LOGTABLE(t) {
		e = "";
		t.forEach(el => e += el +  '\n');
		e = e.slice(0, -1);
		return e
	},
	//TODO table
	table(arr) {
		if (arr instanceof Array && arr[0] instanceof Array) {
			// 2d array table.
		} else if (arr instanceof Array && arr[0] !== undefined) {
			// 1d array table.
			/*
			["a", "bb", "ccc"] =>
			┌───┐
			│ a │
			├───┤
			│bb │
			├───┤
			│ccc│
			└───┘
			*/
			let lines = [];

			arr.forEach((el, id) => {arr[id] = util.format(el)});

			let sortedByLength = clone(arr).sort(lSort);
			let reversedlySBL = clone(sortedByLength).reverse();

			lines[0] = `${this.BOX.se}${this.BOX.h.repeat(reversedlySBL[0].length)}${this.BOX.sw}`
			this.log(this.LOGTABLE(lines));

			arr.forEach(el => {
				lines.push(`${this.BOX.v}${el}${this.BOX.v}`);
				lines.push(`${this.BOX.ve}${this.BOX.h.repeat(reversedlySBL[0].length)}${this.BOX.vw}`);
			});
			this.log(this.LOGTABLE(lines));

			lines.pop();

			lines.push(`${this.BOX.ne}${this.BOX.h.repeat(reversedlySBL[0].length)}${this.BOX.nw}`);
			this.log(this.LOGTABLE(lines));

		} else if (arr instanceof Array) {
			// 0d array table.
			this.log(`${this.BOX.se}${this.BOX.sw}\n${this.BOX.ne}${this.BOX.nw}`)
		} else if (arr.__proto__ !== undefined && arr instanceof Object && ([...Object.keys(arr)][0] instanceof Object)) {
			// 2d object table.
		} else if (arr.__proto__ !== undefined && arr instanceof Object && ([...Object.keys(arr)][0] !== undefined)) {
			// 1d object table.
		} else if (arr instanceof Object) {
			// 0d object table.
			this.log(`${this.BOX.cse}${this.BOX.csw}\n${this.BOX.cne}${this.BOX.cnw}`)
		} else {
			this.fatal(new Error(`${arr} is a primitive or a null object.`))
		}
	}
}

module.exports = exp;

exp.table([1, 2, 12])