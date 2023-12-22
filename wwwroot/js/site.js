const user = JSON.parse(localStorage.getItem("user"));

if (user) {
    $("#loginBtn").hide();
    $("#logoutBtn").show();
    $("#employeesBtn").show();
} else {
    $("#loginBtn").show();
    $("#logoutBtn").hide();
    $("#employeesBtn").hide();
}

$("#logoutBtn").on("click", () => {
    localStorage.clear();
    window.location.href = "/";
});