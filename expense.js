let token = window.localStorage.getItem("token");

if (!token) {
    window.location.href = "index.html";
    window.alert("please login first.")
}

const logout = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("expenses");
    window.location.href = "index.html";
}

let titleElement = document.querySelector("#title");
let descriptionElement = document.querySelector("#description");
let amountElement = document.querySelector("#amount");
let dateElement = document.querySelector("#date");
let tableElement = document.querySelector("#expense-table");
let wholeTable = document.querySelector("#table");

let errorTitle = document.querySelector("#err-title");
let errorAmount = document.querySelector("#err-amount");
let errorDate = document.querySelector("#err-date");
let successMessage = document.querySelector("#save-msg");
let noDataMessage = document.querySelector("#no-data");

errorTitle.style.display = "none";
errorAmount.style.display = "none";
errorDate.style.display = "none";
successMessage.style.display = "none";
noDataMessage.style.display = "none";

let expensesArray = JSON.parse(localStorage.getItem("expenses"));

if (!expensesArray) {
    expensesArray = [];
    wholeTable.style.display = "none";
    noDataMessage.style.display = "block";
}

expensesArray.forEach((expense, index) => {
    let trElement = document.createElement("tr");
    let thElement0 = document.createElement("th");
    let tdElement1 = document.createElement("td");
    let tdElement2 = document.createElement("td");
    let tdElement3 = document.createElement("td");
    let tdElement4 = document.createElement("td");

    thElement0.setAttribute("scope", "col");

    thElement0.innerHTML = index +1;
    tdElement1.innerHTML = expense.title;
    tdElement2.innerHTML = expense.description;
    tdElement3.innerHTML = expense.amount;
    tdElement4.innerHTML = expense.date;

    trElement.appendChild(thElement0);
    trElement.appendChild(tdElement1);
    trElement.appendChild(tdElement2);
    trElement.appendChild(tdElement3);
    trElement.appendChild(tdElement4);

    //console.log(trElement);

    tableElement.appendChild(trElement);

    //console.log(tableElement);

    wholeTable.style.display = "";
    noDataMessage.style.display = "none";
});


const addExpense = () => {
    let title = titleElement.value;
    let description = descriptionElement.value;
    let amount = amountElement.value;
    let date = dateElement.value;
    let isError = false;

    if (title.trim().length === 0) {
        errorTitle.innerHTML = "Title cannot be empty";
        errorTitle.style.display = "block";
        titleElement.classList.add("error");
        isError = true;
    } else {
        errorTitle.style.display = "none";
        titleElement.classList.remove("error");
    }

    if (amount.toString().trim().length === 0) {
        errorAmount.innerHTML = "Amount cannot be empty";
        errorAmount.style.display = "block";
        amountElement.classList.add("error");
        isError = true;
    } else {
        errorAmount.style.display = "none";
        amountElement.classList.remove("error");
    }

    if (date.trim().length === 0) {
        errorDate.innerHTML = "Date cannot be empty";
        errorDate.style.display = "block";
        dateElement.classList.add("error");
        isError = true;
    } else {
        errorDate.style.display = "none";
        dateElement.classList.remove("error");
    }

    if (isError) {
        return;
    }

    expensesArray.push({ 
        title,
        description,
        amount,
        date
    });

    localStorage.setItem("expenses", JSON.stringify(expensesArray));


    let trElement = document.createElement("tr");
    let thElement0 = document.createElement("th");
    let tdElement1 = document.createElement("td");
    let tdElement2 = document.createElement("td");
    let tdElement3 = document.createElement("td");
    let tdElement4 = document.createElement("td");

    thElement0.setAttribute("scope", "col");

    thElement0.innerHTML = expensesArray.length;
    tdElement1.innerHTML = title
    tdElement2.innerHTML = description;
    tdElement3.innerHTML = amount;
    tdElement4.innerHTML = date;

    trElement.appendChild(thElement0);
    trElement.appendChild(tdElement1);
    trElement.appendChild(tdElement2);
    trElement.appendChild(tdElement3);
    trElement.appendChild(tdElement4);

    tableElement.appendChild(trElement);

    wholeTable.style.display = "";
    noDataMessage.style.display = "none";
    successMessage.style.display = "block";
    

    console.log(expensesArray);
}

const dismiss =  () => {
    successMessage.style.display = "none";
}



