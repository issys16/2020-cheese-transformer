# 2020-cheese-transformer

以下をブックマークに保存する

```
javascript:(function(a){var b=document.createElement("script");b.src="//ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js";b.onload=function(){a(jQuery.noConflict(!0))};document.body.appendChild(b)})(function(a){a("img").attr("src","https://bit.ly/36oKggr").hover(function(){for(var b=Math.floor(2*Math.random()),c=0;c<=b;c++)a("body").after('<img src="https://bit.ly/2P3SrJn" class="mouse" style="position: absolute; width:70px; top: -50px; left:-50px; z-index: 99999;">');var d=a(this).offset(),e=a(this).height(),f=a(this).width();a(".mouse").each(function(b,c){var g=d.top+Math.floor(Math.random()*e),h=d.left+Math.floor(Math.random()*f);a(c).animate({top:g,left:h},800*Math.random()+200,"swing")})})});
```
