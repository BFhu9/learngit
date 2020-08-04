function showPic(P){
	var P1 = P.getAttribute("href");
	var FK = document.getElementById("FK");
	FK.setAttribute("src",P1);
	var T1 = P.getAttribute("title");
	var T = document.getElementById("T");
	T.firstChild.nodeValue = T1;
}