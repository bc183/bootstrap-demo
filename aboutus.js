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