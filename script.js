const apply = document.querySelector("#apply");
apply.addEventListener("click", showDiscount);
function showDiscount(e) {
    e.preventDefault();
    discount.style.display = "block";
}

const calculate = document.querySelector("#calculate");
calculate.addEventListener("click", calcMoney);

function calcMoney(e) {
    e.preventDefault();

    const bill = document.querySelector("#bill").value;
    const people = document.querySelector("#people").value;
    const discount = document.querySelector("#discount").value;

    if (bill === "" || people === "" || people < 1){
        Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Please enter your information!",
        });
    }

    else if (isNaN(bill) || isNaN(people)) {
        Swal.fire({
        icon: "error",
        title: "Ой!",
        text: "Нужно ввести число.",
        });
    }

    let billPerPerson = bill / people;
    let discountTotal = bill * discount;
    let totalPerPerson = billPerPerson - (discountTotal / people);

    billPerPerson = billPerPerson.toFixed(2);
    discountTotal = discountTotal.toFixed(2);
    totalPerPerson = totalPerPerson.toFixed(2);

    document.querySelector("#billPerPerson").textContent = billPerPerson;
    document.querySelector("#discountTotal").textContent = discountTotal;
    document.querySelector("#totalPerPerson").textContent = totalPerPerson;
}

