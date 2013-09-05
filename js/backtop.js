 function getScrollTop(){
        if(window.pageYOffset != null)
            return window.pageYOffset;
        var d = window.document;
        if(document.compatMode == "CSS1Compat")
            return d.document.documentElement.scrollTop;
        return d.document.body.scrollTop;
    }
    window.onscroll = function(){
        var top = getScrollTop();
        var btn = document.getElementById("btn");
        if(top>0){
          btn.style.display = "block";
        }
        else btn.style.display = "none";
    }
    function backTop(){
         (function() {  
             var top = getScrollTop();  
             if (top > 0) {  
             window.scrollTo(0, top / 1.2)  
             setTimeout(arguments.callee, 10);  
             }  
         })() 
    }