function hackTip() {
    var bill = document.getElementById("bill").value;
    var rating = document.getElementById("rating").value;
    var tip = document.getElementById("tip").value;
    var damage = document.getElementById("damage").value;
    var total = bill * rating;
    var totalBill = parseFloat(bill) + parseFloat(total);
    document.getElementById("tip").innerHTML = total;
    document.getElementById("damage").innerHTML = totalBill;
}

document.getElementById("hack").onclick = function() {
    hackTip();
}