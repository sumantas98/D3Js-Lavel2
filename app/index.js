function barChart() {
    var that = {};
    that.render = function() {
      //add your code here


      d3.json("api/name.json",function(data){
         var svg = d3.select("body")
            .append("svg");

              svg.attr("width", 500)
                 .attr("height", 500);

      })

      };

        return that;
}

var c=barChart();
c.render();
