var page = 1
var totalPage
var api = 'http://localhost:1001/'



$(function () {
	getInquiryList(page)
});


//myReport left button click event
$(document).on("click","#left",function(){
	if(page > 1){
		page--
		m_left_button(page)
	}
})

// //myReport right button click event
$(document).on("click","#right",()=>{
	page++
	m_right_button(page)
})


function getInquiryList(page){
    var filter = "{'page': "+page+"}"

$.ajax({
		url: api+'Inquiry',
		headers: {
			'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
			'Accept': '*/*',  },
		type: 'GET',
		data: { 'filter': filter },
		dataType: "JSON",
		success: function (result) {
            console.log(result)
            var data = result.data
			
			//데이터 입력
			setList(data)

			totalPage = result.totalCnt/10
			totalPage = Math.ceil(totalPage)

			
			// pageing작업
			if(data.length > 0){
				if(page == 1 ){
					startPage(totalPage, page)
				}else if (page < totalPage) {
					page(totalPage, page)
				}else if (page == totalPage){
					endPage(totalPage, page)
				}
			}else{
				$("#list").hide();
			}

			

		},
		error: function (err) {
			console.log(err);
			
		}
	})
}


function setList(table){
	var table_value = table;
	var html = '';
    var status = ''
	for(var i = 0 ; i < table_value.length ; i++){
        status = table_value[i].status == 0 ? '미확인' : '처리완료';
		html += '<tr>';
		html += '<td>'+table_value[i].no+'</td>';
		html += '<td id="inq_id" hidden>'+table_value[i].inq_id+'</td>';
		html += '<td><a href="./inquiry_detail.html?id="'+table_value[i].inq_id+'><strong style="cursor: pointer;">'+table_value[i].title+'</strong></a></td>';
		html += '<td>'+table_value[i].name+'</td>';
		html += '<td>'+table_value[i].regDate+'</td>';
		html += '<td>'+status+'</td>';
		html += '<td><a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-trash me-1"></i> Delete</a></td>'
		html += '</tr>';
	}
    $("#body").empty();
	$("#body").append(html);
  }

// 페이지 셋업
//   =====================================================================
function startPage(totalPage, page){
	var txt = "";
	txt += page + '-' + totalPage +' of '+ totalPage + "  <span><img id='right' class='mright' id='myright' src='../assets/img/icons/arrow_right.svg' /></span>"
	//page 카운트 
	$("#list").html(txt)
}
function page(totalPage, page){
	var txt = "";
	txt += page + '-' + totalPage +' of '+ totalPage + " <span><img class='mleft' id='left' src='../assets/img/icons/arrow_left.svg' /></span> <span><img id='right' class='mright' id='myright' src='../assets/img/icons/arrow_right.svg' /></span>"
	//page 카운트 
	$("#list").html(txt)
}
function endPage(totalPage, page){
	var txt = "";
	txt += page + '-' + totalPage +' of '+ totalPage + " <span><img class='mleft' id='left' src='../assets/img/icons/arrow_left.svg' /></span>"
	//page 카운트 
	$("#list").html(txt)
}
//   =====================================================================

//  좌우 버튼 클릭
//   =====================================================================
//myReport page left button click function
function m_left_button(page){
	getInquiryList(page)
}

//myReport page left button click function
function m_right_button(page){
	getInquiryList(page)
}

//   =====================================================================