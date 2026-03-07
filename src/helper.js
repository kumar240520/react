 function Generateno(n){

    let arr=[];

    for(let i=0;i<n;i++){

        arr[i]=Math.floor(Math.random()*10);
    }

    return arr;

   
}

 function sum(arr){
    let sums= arr.reduce((acc,curr)=>{
        return acc+curr
    },0);

    return sums;
}



export {Generateno,sum};