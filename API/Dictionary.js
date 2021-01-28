//eslint-disable-next-line no-unused-vars
const { Out } = require("./Out"); //lgtm [js/unused-local-variable] JSDoc Type Def
/**
 *
 *
 * @class Dictionary
 * @extends {Array}
 * @template T, A
 */
class Dictionary extends Array {
	/**
	 *Creates an instance of Dictionary.
	 * @memberof Dictionary
	 */
	constructor() {
		super();
	}
	/**
	 * @param {T} Key
	 * @param {A} Value
	 * @memberof Dictionary
	 */
	Add(Key, Value) {
		if (this.ContainsKey(Key))
			throw new Error(
				"ArgumentException: An element with the same key already exists"
			);
		this.push({
			Key,
			Value,
		});
	}
	/**
	 * @param {T} Key
	 * @param {A} Value
	 * @memberof Dictionary
	 */
	TryAdd(Key, Value) {
		if (this.ContainsKey(Key)) return false;
		this.push({
			Key,
			Value,
		});
		return true;
	}
	Replace(key, Value) {
		if (!this.ContainsKey(key)) return false;
		for (let object of this) {
			if (object.Key === key) {
				this[this.indexOf(object)].Value = Value;
				return true;
			}
		}
		return false;
	}
	/**
	 *
	 *
	 * @memberof Dictionary
	 */
	Clear() {
		this.splice(0, this.length);
	}
	CheckCount(func) {
		if (func == null) return this.length;
		return this.filter(func).length;
	}
	/**
	 *
	 *
	 * @param {*} key
	 *
	 * @memberof Dictionary
	 */
	ContainsKey(key) {
		for (let object of this) {
			if (object.Key === key) return true;
		}
		return false;
	}
	/**
	 *
	 *
	 * @param {*} value
	 *
	 * @memberof Dictionary
	 */
	ContainsValue(value) {
		for (let object of this) {
			if (object.Value === value) return true;
		}
		return false;
	}
	/**
	 *
	 *
	 * @param {*} capacity
	 *
	 * @memberof Dictionary
	 */
	EnsureCapacity() {
		return this.length;
	}
	/**
	 *
	 *
	 * @param {*} iIndex
	 *
	 * @memberof Dictionary
	 */
	RemoveAt(iIndex) {
		var vItem = this[iIndex];
		if (vItem) {
			this.splice(iIndex, 1);
		}
		return vItem;
	}
	/**
	 *
	 *
	 * @param {*} key
	 *
	 * @memberof Dictionary
	 */
	Remove(key) {
		if (!this.ContainsKey(key)) return false;
		for (let object of this) {
			if (object.Key === key) {
				this.RemoveAt(this.indexOf(object));
				return true;
			}
		}
		return false;
	}
	TryRemove(key) {
		if (!this.ContainsKey(key)) return false;
		for (let object of this) {
			if (object.Key === key) {
				this.RemoveAt(this.indexOf(object));
				return true;
			}
		}
		return false;
	}
	get Count() {
		return this.length;
	}
	Get(key, out) {
		if (!this.ContainsKey(key)) return false;
		for (let object of this) {
			if (object.Key === key) {
				out.Out = object.Value;
				return true;
			}
		}
		return false; // How tf you manage that??
	}
	Reduce(a, b) {
		if (this.length === 0) return 0;
		return this.reduce(a, b);
	}
	/**
	 *
	 *
	 * @param {*} key
	 * @param {*} value
	 * @param {(key, oldValue)=>*} func
	 * @returns {Boolean} Added
	 * @memberof Dictionary
	 */
	AddOrUpdate(key, value, func) {
		if (!this.ContainsKey(key)) {
			if (this.TryAdd(key, value)) return value;
			return false;
		}
		if (func == null) {
			if (this.Replace(key, value)) return value;
			return false;
		}
		let oldValue = new Out();
		this.Get(key, oldValue);
		let newValue = func(key, oldValue.Out);
		if (this.Replace(key, newValue)) return newValue;
	}
	/**
	 *
	 * @param {} value
	 * @param {Out<T>} out
	 */
	TryGetValue(value, out) {
		if (value == null) return false;
		if (!this.ContainsKey(value)) return false;
		if (out) this.Get(value, out);
		return true;
	}
}
module.exports = {
	Dictionary,
};
