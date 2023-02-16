var isLogin = localStorage.getItem("isLogin");


$(document).ready(function(){
    if(isLogin == null){
        location.href = './login.html';
    }
})

