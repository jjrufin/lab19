$.get('api/facts', function (data){
  $('body').append('<p>'+ data + '</p>');
 // console.log(data);
});
