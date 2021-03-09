//creo un for che scorre da 1 a 100

for (var i = 1; i <=100; i++) {

  //verifico se i è multiplo di 5 e di 3
  if (!(i%3) && !(i%5 )){
    console.log("FizzBuzz");
    document.getElementById("stringa").innerHTML+=  "<li>"+ "FizzBuzz" + "</li>";
  //verifico se i è multiplo di 3
  }else if(!(i%3)){
    console.log("Fizz");
    document.getElementById("stringa").innerHTML+=  "<li>"+ "Fizz" + "</li>";
  //verifico se i è multiplo di 5
  }else if(!(i%5)){
    console.log("Buzz")
    document.getElementById("stringa").innerHTML+=  "<li>"+ "Buzz" + "</li>";
  }else {
    console.log(i);
    document.getElementById("stringa").innerHTML+=  "<li>"+ i + "</li>";

  }
}
