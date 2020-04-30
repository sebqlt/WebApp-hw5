function myFunction(){
    var str1= document.getElementById('num1').value;
    var str2 = document.getElementById('num2').value;
    var num1 = parseInt(str1)
    var num2 = parseInt(str2)
    if((2<=num1&&num1<=100)&&(2<=num2&&num2<=100)){
        myArray=prime(num1,num2)
        document.getElementById("result").innerHTML="<p style='color:blue;font-size:xx-large'> There are "+myArray.length+" prime numbers</p><p style='color:red;font-size:xx-large'>"+myArray+"</p>"    
    }
    else{
        document.getElementById("result").innerHTML="<p style='color:red;font-size:xx-large'>Invalid input, please try again</p>"
    }
}

function prime(numb1,numb2){
    var primeArray=[]
    if(numb1<numb2){
        for (i=numb1;i<=numb2;i++){
            if(isPrime(i)){
               primeArray.push(i)
            }
        }
    }
    else if(numb1>numb2){
        for (i=numb2;i<=numb1;i++){
            if(isPrime(i)){
               primeArray.push(i)
            }
        }
    }
    return primeArray
}

function isPrime(n){
    if(n === 2)
    {
      return true;
    }else
    {
      for(var x = 2; x < n; x++)
      {
        if(n % x === 0)
        {
          return false;
        }
      }
      return true;  
    }
}


