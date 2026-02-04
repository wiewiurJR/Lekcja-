const NWD=(a,b)=>
{
    while(b!==0){
        let t = b;
        b=a%b;
        a=t;
    }
return a;
}

console.log("NWD(48,18) wynosi: ",NWD(48,18)+"\n");
console.log("NWD(100,25) wynosi: ",NWD(100,25));