<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
    <!-- jsp : Ŭ���̾�Ʈ�� �ƴ� �������� �ڷḦ �������ִ°� -->
    <!-- pageEncoding ���п� �ѱ��� �ȱ����� ���۵Ǵ°��̴� -->
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
out.println(hello+" �� ������ ���ϵ帳�ϴ�");

%>
</h1>
<!-- <h1>�ȳ� ������ ó������ �ݰ���!!</h1> -->
</body>
</html>