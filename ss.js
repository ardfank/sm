function cdt(a){var e=a.split("-");return new Date(e[0],e[1]-1,e[2])}function sex(a){return"Perempuan"==a?"&#128105;":"Laki-Laki"==a?"&#128104;":""}function alm(a){return"-"==a?"":a+", "}function rs(a){return a.substring(a.indexOf("-")+1)}function rm(a){return"odp"==a?"ODP - Selesai Pengawasan":"odp1"==a?"ODP - Proses Pengawasan":"pdp"==a?"PDP - Sehat":"pdp1"==a?"PDP - Dirawat PDP":"pdp2"==a?"PDP - PDP Meninggal":"pos"==a?"Positif - Dirawat Pasien Positif":"pos1"==a?"Positif - Meninggal":"Positif - Sembuh"}$(document).ready(function(){$("#anu").show();var a=[];$.ajax({url:"https://cdn.software-mirrors.com/covid/kab.json",jsonpCallback:"kab",dataType:"jsonp",success:function(e){a.push(e),$.each(e,function(a,e){var t="<option value='"+a+"'>"+a+"</option>";$("#kabss").append(t)})}}).done(function(){t("Total"),$("#kabss").val("Total"),$("#kabss").change(function(){var a=$(this).val();t(a),"Total"===a?(a="",$(".tsd").hide()):$(".tsd").hide().show(),$("#pos table").dataTable().fnFilter(a),$("#odp table").dataTable().fnFilter(a),$("#pdp table").dataTable().fnFilter(a)})});CanvasJS.addColorSet("gr",["#00F","#0F8","#844","#f00","#f80","#FF0","#444","#484"]);var e={animationEnabled:!0,colorSet:"gr",axisX:{valueFormatString:"DD-MMM",labelFontSize:12,crosshair:{enabled:!0}},axisY:[{title:"Positif",labelFontSize:12,gridDashType:"longDashDotDot"},{title:"PDP",labelFontSize:12}],axisY2:{title:"ODP",labelFontSize:12},toolTip:{shared:!0},legend:{cursor:"pointer",itemclick:function(a){void 0===a.dataSeries.visible||a.dataSeries.visible?a.dataSeries.visible=!1:a.dataSeries.visible=!0,a.chart.render()},fontSize:14,verticalAlign:"top"},data:[{type:"stackedColumn",name:"Positif - Dirawat",fillOpacity:.5,showInLegend:!0,xValueType:"dateTime",dataPoints:[]},{type:"stackedColumn",name:"Positif - Sembuh",showInLegend:!0,fillOpacity:.5,xValueType:"dateTime",dataPoints:[]},{type:"stackedColumn",name:"Positif - Meninggal",showInLegend:!0,fillOpacity:.5,xValueType:"dateTime",dataPoints:[]},{type:"spline",name:"PDP - Dirawat",axisYIndex:1,showInLegend:!0,lineThickness:4,xValueType:"dateTime",dataPoints:[]},{type:"spline",name:"PDP - Sehat",axisYIndex:1,showInLegend:!0,lineThickness:4,xValueType:"dateTime",dataPoints:[]},{type:"spline",name:"PDP - Meninggal",axisYIndex:1,showInLegend:!0,lineThickness:4,xValueType:"dateTime",dataPoints:[]},{type:"line",name:"ODP - Proses",showInLegend:!0,lineThickness:4,axisYType:"secondary",xValueType:"dateTime",dataPoints:[]},{type:"line",name:"ODP - Selesai",showInLegend:!0,lineThickness:4,axisYType:"secondary",xValueType:"dateTime",dataPoints:[]}]};function t(t){var n=[],i=[],s=[],d=[],o=[],l=[],p=[],r=[];$.each(a[0][t],function(a,e){n.push({x:cdt(a),y:e.sodp}),i.push({x:cdt(a),y:e.podp}),s.push({x:cdt(a),y:e.spdp}),d.push({x:cdt(a),y:e.dpdp}),o.push({x:cdt(a),y:e.mpdp}),l.push({x:cdt(a),y:e.spos}),p.push({x:cdt(a),y:e.mpos}),r.push({x:cdt(a),y:e.ppos})}),e.data[7].dataPoints=n,e.data[6].dataPoints=i,e.data[4].dataPoints=s,e.data[3].dataPoints=d,e.data[5].dataPoints=o,e.data[1].dataPoints=l,e.data[2].dataPoints=p,e.data[0].dataPoints=r,new CanvasJS.Chart("chart",e).render()}$.each(["odp","pdp","pos"],function(a,e){$.ajax({url:"https://cdn.software-mirrors.com/covid/"+e+".json",jsonpCallback:e,dataType:"jsonp",success:function(a){var t=a.filter(a=>a.status===rm(e)).length,n=a.filter(a=>a.status===rm(e+"1")).length,i=a.filter(a=>a.status===rm(e+"2")).length,s="odp"==e?"(Proses Pengawasan: "+n+" | Selesai Pengawasan: "+t+")":"pdp"==e?"(Dirawat: "+n+" | Sehat: "+t+" | Meninggal: "+i+")":"(Dirawat: "+t+" | Sembuh: "+i+" | Meninggal: "+n+")";$("#"+e+" h2").append(Object.keys(a).length+"<br/><span class='ds'>"+s+"</span>").click(function(){$("#"+e+" .tsd").toggle(200)}),$.each(a,function(a,t){$("#"+e+" .isin").append("<tr><td>"+rs(t.status)+"</td><td>"+t.kab+"</td><td>"+alm(t.alamat)+t.kec+"</td><td>"+sex(t.sex)+"</td><td>"+t.umur+"</td><td>"+t.tgg+"</td></tr>")})}}).done(function(){$("#"+e+" table").DataTable({paging:!1,dom:'<"top"fi>'}),"pos"==e&&$("#anu").hide()})})});
