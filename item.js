var m=5;var rn='<div><h3>Nothing found!!!</h3></div>';var dw="";titles=[];titlesNum=0;urls=[];timeR=[];thumb=[];function rrl(b){for(var a=0;a<b.feed.entry.length;a++){var d=b.feed.entry[a];titles[titlesNum]=d.title.$t;for(var i=0;i<d.link.length;i++){if("alternate"==d.link[i].rel){urls[titlesNum]=d.link[i].href.replace("http:","https:");timeR[titlesNum]=d.published.$t;thumb[titlesNum]="media$thumbnail"in d?d.media$thumbnail.url:"//1.bp.blogspot.com/-AG04BxKSxTw/U92hin5p3UI/AAAAAAAADSs/Jn-pI5PX13M/loading-software-mirrors.gif";titlesNum++;break}}}}function rrD(){var b=[];c=[];e=[];f=[];g=[];for(var a=0;a<urls.length;a++){contains(b,urls[a])||(b.length+=1,b[b.length-1]=urls[a],c.length+=1,c[c.length-1]=titles[a],e.length+=1,e[e.length-1]=timeR[a],f.length+=1,f[f.length-1]=thumb[a],g.length+=1)}urls=b;titles=c;timeR=e;thumb=f}function contains(b,a){for(var d=0;d<b.length;d++){if(b[d]==a){return!0}}return!1}function prl(b){var a=b.indexOf("?m=0");-1!=a&&(b=b.replace(/\?m=0/g,""));for(var d=0;d<urls.length;d++){urls[d]==b&&(urls.splice(d,1),titles.splice(d,1),timeR.splice(d,1),thumb.splice(d,1))}b=Math.floor((titles.length-1)*Math.random());d=0;if(0==titles.length){dw+=rn}else{for(dw+="<ul>";d<titles.length&&20>d&&d<m;){-1!=a&&(urls[b]+="?m=0"),dw+='<li><a title="'+titles[b]+'" href="'+urls[b]+'" rel="nofollow"><img alt="'+titles[b]+'" src="'+thumb[b].replace("http:","https:").replace("/s72-c/","/s135-c/")+'"/></a><div><h3><a href="'+urls[b]+'">'+titles[b]+'</a></h3></div><div></div><div></div></li></div>',b<titles.length-1?b++:b=0,d++}dw+="</ul>"}urls.splice(0,urls.length);titles.splice(0,titles.length);document.getElementById("related-posts").innerHTML=dw}function los(a,b){var d=$(window).scrollTop()+$(window).height();at=a.offset().top;av=$(window).scrollTop();if(at>av&&at<d){b()}}function getfeed(){$(".post-body a[rel='tag']").each(function(){var b=$("span",this).html();var a="<script src='/feeds/posts/default/-/"+b+"?alt=json-in-script&amp;callback=rrl&amp;max-results=7' type='text/javascript'/>";$("head script").last().after(a)})}function p(){getfeed();var a=$(location).attr("href");rrD();prl(a)}function onl(a,b){$(a).append("<div class='loading'><img src='//1.bp.blogspot.com/-AG04BxKSxTw/U92hin5p3UI/AAAAAAAADSs/Jn-pI5PX13M/loading-software-mirrors.gif'/></div>");$(".loading").fadeIn(600);setTimeout(function(){b();$(".loading").fadeOut(1000,function(){$(this).remove()})},1500)}function disq(){var b="downloadsapp";var a=document.createElement("script");a.type="text/javascript";a.async=true;a.src="//"+b+".disqus.com/embed.js";(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(a)}function shr(){var a=$(".post img").attr("src").replace(/\/(w|s|h)[0-9][0-9]?[0-9]?[0-9]/,"/s1600");$(".shared").html("<div class='shared-text'>Share this post:</div><div class='addthis_sharing_toolbox' style='clear:none'></div>");$("head script").last().after("<script src='//s7.addthis.com/js/300/addthis_widget.js#pubid=ardman' type='text/javascript'/>")}$(document).ready(function(){$(".dno2").hide();$(".dno1,.dno").click(function(){$(".dno2").slideToggle()});$(window).on("scroll",function a(){var d=$("#ads2");los(d,function(){$(window).off("scroll",a);onl(d,p);shr();$(".shared").slideDown()})});$(window).on("scroll",function b(){var d=$(".commentsd");los(d,function(){$(window).off("scroll",b);onl(d,disq)})})});
