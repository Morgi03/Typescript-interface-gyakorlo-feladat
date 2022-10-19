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
    #matchresult: string;
    #csapat1goalnum: number;
    #csapat2goalnum: number;

    constructor(csapat1: string, csapat2: string, date: Date) {
        this.date = date;
        this.#csapat1goalnum = randomResultNumber(0, 6);
        this.#csapat2goalnum = randomResultNumber(0, 6);
        if (this.#csapat1goalnum > this.#csapat2goalnum) {
            this.#matchresult = this.#csapat1goalnum + "-" + this.#csapat2goalnum
            this.winner = csapat1;
            this.#loser = csapat2;
        } else {
            this.#matchresult = this.#csapat2goalnum + "-" + this.#csapat1goalnum
            this.winner = csapat2;
            this.#loser = csapat1;
        }
    }
    result(): string {
        return "Football match: " + this.winner + " - " + this.#loser + " (" + this.#matchresult + ")";
    }
}


class Marathon implements Results {
    winner: string;
    date: Date;
    #runtime: number;
    constructor(winner: string, date: Date, runtimeinsec: number) {
        this.winner = winner;
        this.date = date;
        this.#runtime = runtimeinsec;
    }

    result(): string {
        return "Marathon: " + this.#runtime / 60 + " min " + this.#runtime % 60 + " s";
    }
}



class Calvinball implements Results {
    winner: string;
    date: Date;
    #resultvar: number;
    constructor(winner: string, date: Date) {
        this.winner = this.winners;
        this.date = date;
        this.#resultvar = randomResultNumber(10, 100);
    }

    set winners(thewinner: string) {
        if (thewinner === 'Calvin' || thewinner === 'Hobbes') {
            this.winner = thewinner;
        } else {
            let num: number = randomResultNumber(1, 2);
            if (num === 1) {
                this.winner = "Calvin";
            } else {
                this.winner = "Hobbes";
            }
        }
    }

    result(): string {
        return "Calvinball: " + this.#resultvar + " points";
    }

}

let eredmenyek: Results[] = [
new Football('Manchester United', 'Chelsea', new Date("2022.02.12")),
new Football('Burnley', 'Watford', new Date("2022.04.26")),
new Marathon('Usain Bolt', new Date("2007.05.20"), 10000),
new Marathon('Jesse Owens ', new Date("1939.06.01"), 16000),
new Calvinball("Calvin",new Date("2021.01.04")),
new Calvinball("Jack",new Date("2022.10.19")),
];

for (let s of eredmenyek) {
    console.log(s.result());
}
