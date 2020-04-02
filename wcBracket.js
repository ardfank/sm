(function($){
bkt = function () {
	function w(u){$("#"+u).css({"background-color":"#0F0","text-decoration":"none"});}
    function l(u){$("#"+u).css({"background-color":"#F00","text-decoration":"line-through"});}
	function gg(o){
	var o1 = o+1;
	var n = $("#"+o).html();
	var n1 = $("#"+o1).html();
	var s = parseInt($("#s"+o).val());
	var s1 = parseInt($("#s"+o1).val());
	return{o1:o1,n:n,n1:n1,s:s,s1:s1}
	}
//	var o = (1*2)-1;
//	var h = gg(o);
//	s=h.s;s1=h.s1;n=h.n;n1=h.n1;o1=h.o1;
//	$("<div>o = "+o+" |o1 = "+o1+" |n = "+n+" |n1 = "+n1+" |s = "+s+" |s1 = "+s1+" |</div>").appendTo("body");
// 16 besar start	
	for (var i = 1; i <= 8; i++) {
	var o = (i*2)-1;
	var h = gg(o);
	s=h.s;s1=h.s1;n=h.n;n1=h.n1;o1=h.o1;
	if(s>s1){$("#8"+i).html(n);w(o);l(o1);}else if(s<s1){$("#8"+i).html(n1);w(o1);l(o);}
	}
// 16 besar end

// 8 besar start
	for (var i = 1; i <= 4; i++) {
    var o = (i*2)-1+80;
	var h = gg(o);
	s=h.s;s1=h.s1;n=h.n;n1=h.n1;o1=h.o1;
	if(s>s1){$("#4"+i).html(n);w(o);l(o1);}else if(s<s1){$("#4"+i).html(n1);w(o1);l(o);}
	}

// 4 besar start
	for (var i = 1; i <= 2; i++) {
    var o = (i*2)-1+40;
	var h = gg(o);
	s=h.s;s1=h.s1;n=h.n;n1=h.n1;o1=h.o1;
	if(s>s1){$("#2"+i).html(n);w(o);l(o1);}else if(s<s1){$("#2"+i).html(n1);w(o1);l(o);}
	}
	
// SF start
	var o = 21;
	var h = gg(o);
	s=h.s;s1=h.s1;n=h.n;n1=h.n1;o1=h.o1;
	if(s>s1){$("#f").html(n);w(o);l(o1);}else if(s<s1){$("#f").html(n1);w(o1);l(o);}
};
  
stt = function (){
var tz = $("#mrrr").val()-20;
$(".sch").each(function(){
var dy = $(this).data("y");
var dm = $(this).data("m");
var dd = $(this).data("d");
var dh = $(this).data("h");
var d = new Date(dy,dm,dd,dh);
d.setHours(d.getHours()+tz);
var cd = d.getDate();
var cm = d.getMonth();
var cy = d.getFullYear();  
var ch = d.getHours();
$(this).html(cd+" - "+cm+", "+cy+" - "+ch+":00");});};
  
})(jQuery);