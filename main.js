let inp50 = document.getElementById("inp50");
let inp20 = document.getElementById("inp20");
let inp10 = document.getElementById("inp10");
let inp5 = document.getElementById("inp5");
let inpp5 = document.getElementById("inpp5");
let inp2 = document.getElementById("inp2");
let inp1 = document.getElementById("inp1");
let inp05 = document.getElementById("inp0.5");
let inp200 = document.getElementById("inp200");
let inp100 = document.getElementById("inp100");
let inp50m = document.getElementById("inp50m");
let TR4 = document.getElementById("TR4")
let TR5 = document.getElementById("TR5")
let TR6 = document.getElementById("TR6")
let TR7 = document.getElementById("TR7")
let TR8 = document.getElementById("TR8")
let TR9 = document.getElementById("TR9")
let TR10 = document.getElementById("TR10")
let TR50 = document.getElementById("TR50")
let TR100 = document.getElementById("TR100")


let reslt50 = document.getElementById("reslt50");
let reslt20 = document.getElementById("reslt20");
let reslt10 = document.getElementById("reslt10");
let reslt5 = document.getElementById("reslt5");
let resltp5 = document.getElementById("resltp5");
let reslt2 = document.getElementById("reslt2");
let reslt1 = document.getElementById("reslt1");
let reslt05 = document.getElementById("reslt0.5");
let reslt200 = document.getElementById("reslt200");
let reslt100 = document.getElementById("reslt100");
let reslt50m = document.getElementById("reslt50m");
let resltTR4 = document.getElementById("resltTR4")
let resltTR5 = document.getElementById("resltTR5")
let resltTR6 = document.getElementById("resltTR6")
let resltTR7 = document.getElementById("resltTR7")
let resltTR8 = document.getElementById("resltTR8")
let resltTR9 = document.getElementById("resltTR9")
let resltTR10 = document.getElementById("resltTR10")
let resltTR50 = document.getElementById("resltTR50")
let resltTR100 = document.getElementById("resltTR100")

let total = document.getElementById("total");
let cais = document.getElementById("cais");
let écare = document.getElementById("écar");

let btn = document.getElementById("btn");



// console.log(JSON.stringify(sp50.value))

btn.onclick = function () {
    reslt50.value = inp50.value * 50;
    reslt20.value = inp20.value * 20;
    reslt10.value = inp10.value * 10;
    reslt5.value = inp5.value * 5;
    resltp5.value = inpp5.value * 5;
    reslt2.value = inp2.value * 2;
    reslt1.value = inp1.value * 1;
    reslt05.value = inp05.value * 0.5;
    reslt200.value = inp200.value * 0.2;
    reslt100.value = inp100.value * 0.1;
    reslt50m.value = inp50m.value * 0.05;

    resltTR4.value = (TR4.value  - TR4.value * 0.1) * 4 ;
    resltTR5.value = (TR5.value - TR5.value * 0.1) * 5;
    resltTR6.value = (TR6.value - TR6.value * 0.1) * 6;
    resltTR7.value = (TR7.value - TR7.value * 0.1) * 7;
    resltTR8.value = (TR8.value - TR8.value * 0.1) * 8;
    resltTR9.value = (TR9.value - TR9.value * 0.1) * 9;
    resltTR10.value = (TR10.value - TR10.value * 0.1) * 10;
    resltTR50.value = (TR50.value - TR50.value * 0.1) * 50;
    resltTR100.value = (TR100.value - TR100.value * 0.1) * 100;

    total.value = +reslt10.value + +reslt20.value +
     +reslt50.value + +reslt5.value + +resltp5.value + 
     +reslt2.value + +reslt1.value + +reslt05.value + 
     +reslt200.value + +reslt100.value + +reslt50m.value + 
    +resltTR4.value + +resltTR5.value + 
    +resltTR6.value + +resltTR7.value ;
    écare.value = +total.value - +cais.value - 200;
    // sp50.value = sp50.value;
}