import * as _ from "lodash";

class silentStateCore {
	constructor(state) {
		this.silentState = {};
	}

	checkStateExsit(key) {
		if (this.silentState[key] === undefined) {
			console.warn(`We can't find the key:${key}`);
			return false;
		}
		return true;
	}

	setSilentState(key, value) {
		this.silentState[key] = value;
	}

	getSilentState(key) {
		if (this.checkStateExsit(key)) {
			return this.silentState[key];
		}
		return false;
	}

	getAllSilentState() {
		return this.silentState;
	}

	removeSilentState(key) {
		if (this.checkStateExsit(key)) {
			this.silentState = _.omit(this.silentState, key);
		}
	}

	removeAllSilentState() {
		this.silentState = {};
	}
}

export default silentStateCore;
