function User(){
    this.username = null;
    this.password = null;
}

User.prototype.attemptLogin = function(){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            console.log("successful login");
        }
    };
    xhttp.open("GET", "/login/:"+this.username, true);
    xhttp.send();
};