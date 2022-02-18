
var a = parseInt(prompt("Enter Your Number : "));

if(a%2 === 0 ){
    document.write(" You Entered Number is : "+ a + " and  It's a Even Number <br><br><br>")
}else if(a%2 !==0 ){
    document.write(" You Entered Number is : "+ a + " and It's a Odd Number <br><br><br>")
}
else{
    document.write("Invalid number <br><br><br>")
}



for(a=0;a<=100;a++){
    if(a%2 === 0 ){
        document.write(" You Entered Number is : "+ a + " and  It's a Even Number <br><br>")
    }else if(a%2 !==0 ){
        document.write(" You Entered Number is : "+ a + " and It's a Odd Number <br><br>")
    }
    else{
        document.write("Invalid number <br><br><br>")
    }
}