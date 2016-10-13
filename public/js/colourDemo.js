window.onload = function(){
  function shadeColor2(color, percent) {
    var f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
    return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
  }

  var colourPicker = document.getElementById("pickColour");
  var container = document.getElementsByClassName("rw-container")[0];
  var search = document.getElementsByClassName("rw-search-form")[0];

  colourPicker.addEventListener("input", function(){
    container.style.background = this.value;
    search.style.background = shadeColor2(this.value, -0.2);
  });
};
