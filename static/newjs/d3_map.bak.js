/**
 * Created by admin on 2016-3-29.
 */

var map_svg = d3.select("#map1").append("svg")
 .attr("width", width)
 .attr("height", height)
 .append("g")
 .attr("transform", "translate(0,0)");

 var projection = d3.geo.mercator()
 .center([118.077345, 24.483843])
 .scale(2000*20)
 .translate([width/2, height/2]);

 var path = d3.geo.path()
 .projection(projection);


 var color = d3.scale.category20();


 d3.json("static/mapdata/geometryCouties/350200.json", function(error, root) {

 if (error)
 return console.error(error);
 console.log(root.features);

 map_svg.selectAll("path")
 .data( root.features )
 .enter()
 .append("path")
 .attr("stroke","#000")
 .attr("stroke-width",1)
 .attr("fill", function(d,i){
 return color(i);
 })
 .attr("d", path )
 .on("mouseover",function(d,i){
 d3.select(this)
 .attr("fill","yellow");
 })
 .on("mouseout",function(d,i){
 d3.select(this)
 .attr("fill",color(i));
 });

 });
