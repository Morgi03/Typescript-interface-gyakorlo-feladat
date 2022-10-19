interface Results {
    winner: string;
    date: Date;
    result(): string;
}

function randomResultNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Football implements Results {
    winner: string;
    date: Date;
    #loser: string;
    #eredmeny: string;
    #csapat1goalnum: number;
    #csapat2goalnum: number;

    constructor(csapat1: string, csapat2: string, date: Date) {
        this.date = date;
        this.#csapat1goalnum = randomResultNumber(0, 6);
        this.#csapat2goalnum = randomResultNumber(0, 6);
        if (this.#csapat1goalnum > this.#csapat2goalnum) {
            this.#eredmeny = this.#csapat1goalnum+"-"+this.#csapat2goalnum
            this.winner = csapat1;
            this.#loser = csapat2;
        }else{
            this.#eredmeny = this.#csapat2goalnum+"-"+this.#csapat1goalnum
            this.winner = csapat2;
            this.#loser = csapat1;
        }
    }
    result(): string {
        return "Football match: "+this.winner+" - "+this.#loser+" ("+this.#eredmeny+")";
    }
}
