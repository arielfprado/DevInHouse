function calculate() {
    let value1 = ~~document.getElementById("firstValue").value;

    let value2 = ~~document.getElementById("secondValue").value;

    let result = value1 + value2;

    document.getElementById("result").value = result;
}

let btn = document.getElementsByClassName("btn")[0];

btn.addEventListener("click",calculate);