function divide(a,b) {
    try {
        if(b==0){
            throw new Error("Can't divide by zero")
        }else{
            return a/b;
        }
    } catch (err) {
        console.log(err.message);
    }
    // return a/b;
    
}
console.log(divide(10,0));

//undefined isliye aa rha kyunki console.log 2 times ho gya
