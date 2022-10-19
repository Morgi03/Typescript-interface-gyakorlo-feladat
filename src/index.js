"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Football_loser, _Football_matchresult, _Football_csapat1goalnum, _Football_csapat2goalnum, _Marathon_runtime;
function randomResultNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
class Football {
    constructor(csapat1, csapat2, date) {
        _Football_loser.set(this, void 0);
        _Football_matchresult.set(this, void 0);
        _Football_csapat1goalnum.set(this, void 0);
        _Football_csapat2goalnum.set(this, void 0);
        this.date = date;
        __classPrivateFieldSet(this, _Football_csapat1goalnum, randomResultNumber(0, 6), "f");
        __classPrivateFieldSet(this, _Football_csapat2goalnum, randomResultNumber(0, 6), "f");
        if (__classPrivateFieldGet(this, _Football_csapat1goalnum, "f") > __classPrivateFieldGet(this, _Football_csapat2goalnum, "f")) {
            __classPrivateFieldSet(this, _Football_matchresult, __classPrivateFieldGet(this, _Football_csapat1goalnum, "f") + "-" + __classPrivateFieldGet(this, _Football_csapat2goalnum, "f"), "f");
            this.winner = csapat1;
            __classPrivateFieldSet(this, _Football_loser, csapat2, "f");
        }
        else {
            __classPrivateFieldSet(this, _Football_matchresult, __classPrivateFieldGet(this, _Football_csapat2goalnum, "f") + "-" + __classPrivateFieldGet(this, _Football_csapat1goalnum, "f"), "f");
            this.winner = csapat2;
            __classPrivateFieldSet(this, _Football_loser, csapat1, "f");
        }
    }
    result() {
        return "Football match: " + this.winner + " - " + __classPrivateFieldGet(this, _Football_loser, "f") + " (" + __classPrivateFieldGet(this, _Football_matchresult, "f") + ")";
    }
}
_Football_loser = new WeakMap(), _Football_matchresult = new WeakMap(), _Football_csapat1goalnum = new WeakMap(), _Football_csapat2goalnum = new WeakMap();
class Marathon {
    constructor(winner, date, runtimeinsec) {
        _Marathon_runtime.set(this, void 0);
        this.winner = winner;
        this.date = date;
        __classPrivateFieldSet(this, _Marathon_runtime, runtimeinsec, "f");
    }
    result() {
        return "Marathon: " + __classPrivateFieldGet(this, _Marathon_runtime, "f") / 60 + " min " + __classPrivateFieldGet(this, _Marathon_runtime, "f") % 60 + " s";
    }
}
_Marathon_runtime = new WeakMap();
