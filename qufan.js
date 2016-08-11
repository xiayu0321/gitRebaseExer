let q =[1,2.4,5];
function getSum(q){
    let w = _(q).map().sum();
    console.log(w);
}
getSum(q);