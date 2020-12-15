function palindrome(str) {

    var len = str.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) 
    {
        if (str[i] !== str[len - 1 - i]) {
            console.log("It is not pelindrone");
        }
        else{
            console.log("It is pelindrone");
        }
    }

    
}
palindrome("lil")
