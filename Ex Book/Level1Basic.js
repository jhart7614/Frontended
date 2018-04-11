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

}