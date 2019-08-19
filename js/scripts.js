$(document).ready(function(){
  var items = [];
  $("button#add").click(function(){
    items.push($(".item").val());
    $(".item").focus();
    $(".item").val('');
  });
  $(".form").submit(function(event){
    $(".formhide").hide();
    items.sort();
    var newItems = items.map(function(item){
      return item.toUpperCase();
    });

    newItems.forEach(function(item){
      $(".output").append("<li>" + item + "</li>");
    });
    event.preventDefault();
  });
});
