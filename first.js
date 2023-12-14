function ans() {
    let a = parseInt(document.getElementById("tl1").value);
  
    for (let b = 1; b <= 10; b++) {
      document.getElementById("result").innerHTML +=
        a + " * " + b + " = " + a * b + "<br>";
    }
  return null;
  }