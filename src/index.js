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
var _Football_loser, _Football_matchresult, _Football_csapat1goalnum, _Football_csapat2goalnum, _Marathon_runtime, _Calvinball_resultvar;
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
        return "Marathon: " + Math.floor(__classPrivateFieldGet(this, _Marathon_runtime, "f") / 60) + " min " + __classPrivateFieldGet(this, _Marathon_runtime, "f") % 60 + " s";
    }
}
_Marathon_runtime = new WeakMap();
class Calvinball {
    constructor(winner, date) {
        _Calvinball_resultvar.set(this, void 0);
        this.setwinner = winner;
        this.date = date;
        __classPrivateFieldSet(this, _Calvinball_resultvar, randomResultNumber(10, 100), "f");
    }
    set setwinner(winner) {
        if (winner === 'Calvin' || winner === 'Hobbes') {
            this.winner = winner;
        }
        else {
            let num = randomResultNumber(1, 2);
            if (num === 1) {
                this.winner = "Calvin";
            }
            else {
                this.winner = "Hobbes";
            }
        }
    }
    result() {
        return "Calvinball: " + __classPrivateFieldGet(this, _Calvinball_resultvar, "f") + " points";
    }
}
_Calvinball_resultvar = new WeakMap();
let eredmenyek = [
    new Football('Manchester United', 'Chelsea', new Date("2022.02.12")),
    new Football('Burnley', 'Watford', new Date("2022.04.26")),
    new Marathon('Usain Bolt', new Date("2007.05.20"), 10000),
    new Marathon('Jesse Owens ', new Date("1939.06.01"), 16352),
    new Calvinball("Calvin", new Date("2021.01.04")),
    new Calvinball("Jack", new Date("2022.10.19")),
];
for (let s of eredmenyek) {
    console.log(s.result());
}
let eredmenyek_rendezett = eredmenyek.filter(e => e.date).sort();
console.log();
for (let s of eredmenyek_rendezett) {
    console.log(s.result());
}
