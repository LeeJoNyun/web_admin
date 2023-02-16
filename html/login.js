var api = 'http://localhost:1001/'

$(document).on("click", "#login", function(){
    var userid = $("#id").val();
    var password = $("#password").val();

    var data = {"userid" : userid, "password" : password}
    $.ajax({
		url: api+'Login',
		// url : testurl+'ReportView',
		headers: { 
		'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
		'Accept': '*/*',  },
		type: 'POST',
		data: data,
		dataType: "JSON",
		success: function (result) {
			if(result.success == true){
                var memberToken = result.memberToken;
				localStorage.setItem("isLogin", 1);
                location.href = "./index.html";
			    setCookie("Authorization", memberToken, 0.5);
            }else{
                alert(result.message);
            }
        },  error: function (err) {
			console.log(err);
		}
	})
})