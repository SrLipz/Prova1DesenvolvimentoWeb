function validateForm() {
    let x = document.forms["myForm"]["nome"].value;
    if (x == "") {
      alert("Campo nome Está Vazio");
      return false;
    }
    let y = document.forms["myForm"]["email"].value;
    if (y == "") {
      alert("Campo email Está Vazio");
      return false;
    }
    let w = document.forms["myForm"]["mensagem"].value;
    if (w == "") {
      alert("Campo mensagem Está Vazio");
      return false;
    }
}