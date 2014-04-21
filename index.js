
  handlerData = function(jsonResponse){
    var
      templateSource = $("#index").html(),
      template       = Handlebars.compile(templateSource),
      instaHTML      = template(jsonResponse)
    ;
   $('#content').html(instaHTML);
  };

  loadInstaData =  function(){
    console.log('interval go!');
    $.ajax({
      url:"https://api.instagram.com/v1/media/popular?client_id=4c8024b628ca48699e788d1497912270",
      method:'get',
      dataType: 'jsonp',
      success:handlerData
    });
    setTimeout(loadInstaData, 60000);
  };

$(document).ready(function(){
  loadInstaData();
});






