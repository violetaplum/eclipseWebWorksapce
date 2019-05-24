window.onload = function() //객체.속성=값 --> .이벤트=이벤트처리함수
/* window.onload : web page가 올라오면 바로 시작 */
{ //<body onclick="kaja()" // 웹페이지가 로딩될때
	var kong = document.getElementById('kong') //html에서 button있는 위치
	//객체
	if(kong!=null) //객체가 만들어졌으면
	{ //평강공주러브라인버튼을 누르면 --> JJIK처리하러가
		if(kong.addEventListener)
		{
			/* element.addEventListener : (표준형) ~를 눌렀을때 ~~로 가라*/
			kong.addEventListener('click',Kaja.JJIK,false)//표준형

			/* element.addEventListener('action',,true/false) : capturing에 해당하는 element가 있으면 처리할지 말지*/
											//event-captur
		}
		else
		{	/* element.attachEvent : (익스플로러형) ~를 눌렀을때 ~~로 가라*/
			kong.attachEvent('onclick',Kaja.JJIK) //ie
			//<body onclick="JJICK()">
			//documnet.form1.onclick=kaja //ie7 , 8
			//document.form1.onclick=kaja
		}
	}

//var kaja1=30 //변수 var kaja2={ } //객체 //new x
//자바 객체.속성 클래스명.속성

	
}
var Kaja = //Kaja객체, new x --> Kaja.메소드() Kaja.속성
	{
		JJIK : function(event) //JJICK메소드, do you remember JSON?
		{
			if(document.getElementById('kaja1') != null && document.getElementById('kaja2') != null)  //에러가 아니면
			{
				document.getElementById('kaja1').innerHTML = "baba"
				document.getElementById('kaja2').innerHTML = "ondal"
				//각각의 div tag 안에 위치시킨다.
			}
		}
	}