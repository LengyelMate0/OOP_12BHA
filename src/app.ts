function generateNumbers(count: number, start: number, end: number): number[]{
    const numbers: number[] = []
    for(let i = 0; i < count; i++){
        numbers.push(Math.floor(Math.random()*end) + start);
    }
    return numbers;
};

const generateNumbers2 = (count: number, start: number, end: number): number[] =>(
    Array.from({length: count}, item => Math.floor(Math.random()*end) + start)
);

const array = generateNumbers2(30,1,5);
console.log(array.join(", ")); 

function getStatistic(a: Array<number>): Record<number, number>{
    const statistic : Record<number, number> = {};
    for (const key of array){
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

const statistic = getStatistic(array)

for (let key in statistic){
    console.log(`${key} szám: ${statistic[key]} db`);
};

function arraySum(num: number){
    const sum = 0;
    for (let key in statistic){
        
    }
};