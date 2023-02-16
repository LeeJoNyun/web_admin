var api = 'http://localhost:1001/'


$(document).on("click", "#btn_signIn", function(){
    var check = $('#agreeCheck').is(':checked');
    if(!check){
        alert('개인정도 활용 동의 체크')
        return
    }
    var id = $("#id").val();
    var username = $("#username").val();
    var password = $("#password").val();
    var email = $("#email").val();
    
    var data = {"userid" : id, "password" : password, "name" : username, "email" : email}
    $.ajax({
		url: api+'User',
		// url : testurl+'ReportView',
		headers: { 
		'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
		'Accept': '*/*',  },
		type: 'POST',
		data: data,
		dataType: "JSON",
		success: function (result) {
			if(result.success == true){
                location.href = "./login.html"
            }else{
                alert(result.message);
            }
        }, beforeSend: function(){
			$('.wrap-loading').removeClass('display-none');
		}, complete : function(){
            $('.wrap-loading').addClass('display-none');
		}, error: function (err) {
			console.log(err);
		}
	})
    
})