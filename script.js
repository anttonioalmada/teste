console.log("Olá Mundo!");
// <! -- Script Login e Senha
function Login(){
var done=0;
var username=document.login.username.value;
username=username.toLowerCase();
var password=document.login.password.value;
password=password.toLowerCase();
if (username=="123" && password=="123") { window.location.href="https://forms.gle/kv8aJSdKVkkpGe6A7"; done=1; }
if (username=="246" && password=="246") { window.location.href="https://forms.gle/kv8aJSdKVkkpGe6A7"; done=1; }
if (username=="135" && password=="135") { window.location.href="https://forms.gle/kv8aJSdKVkkpGe6A7"; done=1; }
if (done==0) { alert("Login Invalido!"); }
}
// Fim -->
