<!-- Begin
function Login(){
var done=0;
var username=document.login.username.value;
username=username.toLowerCase();
var password=document.login.password.value;
password=password.toLowerCase();
if (username=="123" && password=="123") { window.location="google.com"; done=1; }
if (username=="usuario2" && password=="password2") { window.location="page2.html"; done=1; }
if (username=="usuario3" && password=="password3") { window.location="page3.html"; done=1; }
if (done==0) { alert("Login Invalido!"); }
}
// End -->
