window.addEventListener('load', function(event){
  var width_tool = document.createElement("DIV");
  width_tool.style.width = "100%";
  width_tool.style.position = "fixed";
  width_tool.style.top = "0";
  width_tool.id = "page-width";
  var text = document.createTextNode("Window width: " + window.innerWidth);
  width_tool.appendChild(text);
  document.body.appendChild(width_tool);
});

window.addEventListener('resize', function(event){
  var div = document.getElementById("page-width");
  div.innerHTML = "Window width: " + window.innerWidth;
});
