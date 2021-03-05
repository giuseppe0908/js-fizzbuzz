//creo un for che scorre da 1 a 100

for (var i = 1; i <=100; i++) {

  //verifico se i è multiplo di 5 e di 3
  if ((i%3 == 0) && (i%5 == 0)) {
    console.log("FizzBuzz");
  //verifico se i è multiplo di 3
  }else if(i%3 == 0) {
    console.log("Fizz");
  //verifico se i è multiplo di 5
  }else if(i%5 == 0) {
    console.log("Buzz")
  }else {
    console.log(i);
  }
}
