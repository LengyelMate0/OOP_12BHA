class NumberHandler {

    private _start: number;
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

    const generateNumbers2 = (count: number, start: number, end: number): number[] => (
        Array.from({ length: count }, item => Math.floor(Math.random() * end) + start)
    );

    //const array = generateNumbers2(30, 1, 5);
    //console.log(array.join(", "));

    getStatistic(a: Array<number>): Record<number, number> {
        const statistic: Record<number, number> = {};
        for (const key of this._numbers) {
            /* Az adott kulcs benne van-e az objektumban (rekordban)? 
            if (key in statistic){
                statistic[key]! ++;
            } else{
                statistic[key] = 1;
            } */
            statistic[key] = (statistic[key] ?? 0) + 1;
        }
        return statistic;
    }

    //const statistic = getStatistic(array)

   /*  for (let key in statistic) {
        console.log(`${key} szám: ${statistic[key]} db`);
    };
 */

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
}

