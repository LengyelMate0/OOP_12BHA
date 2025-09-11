import { log } from "console";

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

console.log(generateNumbers2(10,1,5));
