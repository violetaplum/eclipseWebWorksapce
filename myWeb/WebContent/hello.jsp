<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
    <!-- jsp : 클라이언트가 아닌 서버에서 자료를 공급해주는것 -->
    <!-- pageEncoding 덕분에 한글이 안깨지고 전송되는것이다 -->
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
</head>
<body bgcolor="blue" text="yellow">
<h1>
<%
String hello=String.valueOf(request.getParameter("name"));
out.println(hello+" 님 가입을 축하드립니다");

%>
</h1>
<!-- <h1>안녕 서버는 처음이지 반가워!!</h1> -->
</body>
</html>