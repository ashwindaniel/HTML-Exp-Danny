function onsub() {
    var obj = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        passwordcopy: document.getElementById("passwordcopy").value,
        telephone: document.getElementById("tel").value,
        descripttion: document.getElementById("radioButton").value,
        satisfied: document.getElementById("check").value,
        recommend: document.getElementById("datalist").value,
        comments: document.getElementById("comment").value
    };
    console.log(obj);
}