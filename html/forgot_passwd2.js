var api = 'http://localhost:1001/'
var id = localStorage.getItem("adId");

$(document).on("click", "#btn_send", function(){
    var password1 = $("#password1").val();
    if(password1 == ''){
        alert('비밀번호 입력')
        $("#password1").focus();
    }
    var password2 = $("#password2").val();
    if(password2 == ''){
        alert('비밀번호 확인 입력')
        $("#password2").focus();
    }
    if(password1 != password2){
        alert('비밀번호를 확인하세요')
        return
    }
    var data = {'id' : id, 'password': ''+password1+''}
	$.ajax({
		url: api+'Password',
		headers: {
			'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
			'Accept': '*/*',  },
		type: 'POST',
		data: data,
		dataType: "JSON",
		success: function (result) {
			if(result.success == true){
                localStorage.clear();
                location.href = './login.html';
            }else{
                alert('비밀번호를 다시 확인 해주쇼')
                return
            }
        },  error: function (err) {
			console.log(err);
		}
	})
});