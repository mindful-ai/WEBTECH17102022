function checkprime(n){
    var prime = true;
    for(i = 2; i < n; i++){
        if(n % i == 0){
            prime = false;
            break;
        }
    }
    return prime;
};