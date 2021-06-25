# 2020-cheese-transformer

以下をブックマークに保存する

```
javascript:(function(a){var b=document.createElement("script");b.src="//ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js";b.onload=function(){a(jQuery.noConflict(true))};document.body.appendChild(b)})(function(a){a("img").attr("src","https://bit.ly/3gWFv6g").hover(function(){var e=Math.floor(Math.random()*2);for(var c=0;c<=e;c++){a("body").after('<img src="https://bit.ly/3zWboTR" class="mouse" style="position: absolute; width:70px; top: -50px; left:-50px; z-index: 99999;">')}var f=a(this).offset();var b=a(this).height();var d=a(this).width();a(".mouse").each(function(g,k){var j=f.top+Math.floor(Math.random()*b);var h=f.left+Math.floor(Math.random()*d);a(k).animate({top:j,left:h},Math.random()*800+200,"swing")})})});
```
