//左侧伸展按钮
function hide(){
	document.getElementById("display").style.display="inline"; //显示开始设置为隐藏的display按钮
	document.getElementById("hidden").style.display="none";
	document.getElementById("left").style.display="none"; //隐藏左边
	document.getElementById("content").style.width="100%"; //改变右边content的width铺满窗口
	document.getElementById("header").style.width="100%";
	document.getElementById("pages").style.textAlign="center";
	 document.getElementById("footer").style.left="18%";
	
		}
 function dis(){
	document.getElementById("hidden").style.display="inline";
	 document.getElementById("left").style.display="inline";  //显示左边
	 document.getElementById("content").style.width="79%";    //改变右边content的width属性
	 document.getElementById("display").style.display="none"  //隐藏display按钮，使得两次点击看似是同一个按钮
	 document.getElementById("header").style.width="79%";
	 document.getElementById("pages").style.textAlign="left";
	 document.getElementById("footer").style.left="5%";  //为嘛这里是7%了呢？
	
	 }