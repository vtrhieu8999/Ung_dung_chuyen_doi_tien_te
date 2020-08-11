function chuyen_doi(){
    let a = document.getElementById("amount").value;
    let b = document.getElementById("from").value;
    let c = document.getElementById("to").value;
    let amount = parseFloat(a);
    let from = parseInt(b);
    let to = parseInt(c);
    let result = amount*(from/to) ;
    alert("So tien sau khi chuyen doi la: " + result);

}