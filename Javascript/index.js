// manipuler le dom a la place de params (click)
let params = new URLSearchParams(location.search);
console.log(params);
let nb1 = Number(params.get(nb1));
console.log(nb1);
let nb2 = Number(params.get(nb2));
console.log(nb2);
let operation = params.get("operation");
console.log(operation);

let resulat;

if (operation === "+") {
    resulat = nb1+nb2;
}

document.getElementById("resultat").textContent = "resulat :" + resultat;