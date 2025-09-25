import { log } from "console";

class NumberHandler {

    protected _start: number;
    private _end: number;
    private _count: number;
    private _numbers: number[];
    private _statistic: Record<number,number>;

    constructor(start: number, end: number, count: number) {
        this._start = start;
        this._end = end;
        this._count = count;
        this._numbers = this.generateNumbers()
        this._statistic = {};
    }

    private generateNumbers(): number[] {
        const ns: number[] = []
        for (let i = 0; i < this._count; i++) {
            ns.push(Math.floor(Math.random() * this._end) + this._start);
        }
        return ns;
    };

    generateNumbers2 = (): number[] => (
        Array.from({ length: this._count }, item => Math.floor(Math.random() * this._end) + this._start)
    );

    getStatistic(a: Array<number>): Record<number, number> {
        const statistic: Record<number, number> = {};
        for (const key of this._numbers) {
            statistic[key] = (statistic[key] ?? 0) + 1;
        }
        return statistic;
    }

    print = () => {
      for (let key in this._statistic) console.log(`${key} szám: ${this._statistic[key]} db`);
    }

    getSum(): number {
        /* let sum = 0;
        for (let key of statistic){
            sum += key;
        return sum;
        } */
        return this._numbers.reduce((summa, item) => summa + item, 0)
    };

    getFilteredNums(attr: number): number[] {
        return this._numbers.filter(item => item % attr === 0)
    }

    getOrderedNum(value: number): number {
        return this._numbers.findIndex(item => item === value) + 1;
    };

    getOrderedNum2(value: number): number {
        let i = 0;
        while (i < this._numbers.length && this._numbers[i] != value) {
            i++;
        }
        return i + 1;
    };

    static help() {
        console.log("Ez a program így működik...")
    } 
}

// Öröklés
class ExtendedNumHandler extends NumberHandler{
    constructor(start: number, end: number, count: number, range:number){
        super(start, end: number, count: number);
    }
}

// Példányosítás, létrejön az objektum:
const num = new NumberHandler(1, 10, 20);
NumberHandler.help();
console.log(num.generateNumbers2());
console.log(num.getFilteredNums(5));
const num2 = new ExtendedNumHandler()