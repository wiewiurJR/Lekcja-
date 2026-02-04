


let arr=[4,6,2,1,3];
let arrMin=arr[0];
let arrMax=arr[0];

for(let i=0; i <arr.length; i++ ){

if(arr[i]>arrMax){
    arrMax=arr[i];
}
if(arr[i]<arrMin){
    arrMin = arr[i];
}

}
console.log("ArrayMin "+arrMin +"\n");
console.log("ArrayMax "+ arrMax );


/*
Złożoność O(n) -> jeżeli dane zostaną zwiększone np 2 krotnie to czas zwiększy się proporcjonalnie
Wady jednorazowego przejścia -> jeżeli tablica była by posortowana dało by się znaleść min i max szybciej
 */