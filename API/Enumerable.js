//eslint-disable-next-line no-unused-vars
const { List } = require("./List"); //lgtm [js/unused-local-variable] JSDoc Type Def
//TODO This Likely needs a rework in the library
/**
 * @template T
 * @class Enumerable
 * @extends {Object}
 * @returns {Enumerable<T>}
 * @param {Array<string>|List<string>|T} $b
 */
class Enumerable extends Object {
	constructor($b) {
		if ($b == null) throw new Error("No Data Given");
		super();
		let keys;
		let i;
		switch ($b.constructor.name) {
		case "Array":
		case "List":
			keys = $b;
			for (i = 0; i < keys.length; i++) {
				this[keys[i]] = i;
			}
			break;
		case "Object":
			keys = Object.keys($b);
			for (i = 0; i < keys.length; i++) {
				this[keys[i]] = $b[[keys[i]]]; //lgtm [js/implicit-operand-conversion]
			}
			break;
		default:
			throw new Error("Invalid Data, Expected type: <Array, List, Object>");
		}
		Object.freeze(this);
	}
	/**
	 * Get Value Set on Init
	 * @param {String} key
	 * @returns {number}
	 * @instance
	 * @memberof Enumerable
	 */
	GetValue(key) {
		return this[key];
	}
	/**
	 * @private
	 * @param {Enumerable} Enum
	 */
	FromEnum(Enum) {
		let keys = Object.keys(Enum).shift();
		if (Enum > keys.length) throw new Error("Bounds Exceeded");
		for (let i = 0; i < keys.length; i++) {
			if (this[keys[i]] === Enum) return keys[i];
		}
		throw new Error("Value not Found");
	}
}
module.exports = {
	Enumerable,
};
