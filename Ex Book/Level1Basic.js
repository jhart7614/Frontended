var a = "He said \"My name is Elliot\"";
var uppera = a.toUpperCase();
document.getElementById("aa").innerHTML = "Uppercase Version: " + uppera;

var b = "hi"
var c = 8
document.getElementById("bb").innerHTML = b + c;

var d = ["yy", "xx", "zz"];
document.getElementById("cc").innerHTML = "Array: " + d;
d.push("aa")
document.getElementById("dd").innerHTML = "Array add aa : " + d;
d.pop("aa")
document.getElementById("ee").innerHTML = "Array minus aa : " + d;



var person = {

    name: "Jack",
    age: 22,
    occupation: "Chef",
}

conditionals1();

function conditionals1() {

    if (person.age > 20 && person.age < 40) {
        document.getElementById("ff").innerHTML = "True";
    }
    else {
        document.getElementById("gg").innerHTML = "False";
    }
}

function Iteration1() {

    for (i = 1; i < 11; i++) {

        if (i % 2 == 0) {
            console.log(i);
        }

    }
}
Iteration1();

function Iteration3() {

    for (i = 1; i < 31; i++) {

        if (i % 3 == 0 && i % 5 == 0) {

            console.log("FizzBuzz!");
        }
        else if (i % 3 == 0) {
            console.log("Fizz!");
        }
        else if (i % 5 == 0) {

            console.log("Buzz!");
        }
        else {
            console.log(i);
        }
    }
}
Iteration3()

function Iteration4() {

    var a = document.getElementById("EnterNumber").value;

    var count= 0
    while (a != 1) {
        if (a % 3 == 0) {
            a = a/3;
            console.log(a);
            count++
        }
        else if ((a+1) % 3 == 0) {

            a = a + 1;
            console.log(a);
            count ++
        }

        else {

            a = a - 1;
            console.log(a);
            count++
        }

    }
    console.log("number of Iterations: " + count)
}

function Strings4() {

    var b = document.getElementById("EnterString").value;

    c=0;
    for (i=0; i < b.length; i++) {

        if (b.charAt(i) == (b.charAt(i+1)) && b.charAt(i) == (b.charAt(i+2))) {

          c  =c + 1;

        }
    }
    console.log(c);
}


function Ptag() {

    Deletetext();

    var p = document.createElement("p");
    p.setAttribute("id", "para");
    document.getElementsByTagName('body')[0].appendChild(p);

}

function Addtext() {

    var text = document.getElementById("EnterText").value;

    if (document.getElementById("para") !=null) {
        document.getElementById("para").innerHTML = text;
    }

}

function Deletetext() {

    if (document.getElementById("para") !=null) {

        document.getElementById("para").remove();
    }

}

var requestURL = 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json';

var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';

request.send();

request.onload = function() {

    var superHeroes = request.response;

    console.log("Our hero squad is named: " + superHeroes.squadName);

    console.log("One of our members is the " + superHeroes.members[1].name);

}

var requestURL1 = 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json';

var request1 = new XMLHttpRequest();

request1.open('GET', requestURL1);

request1.responseType = 'json';

request1.send();

request.onload = function() {

}


