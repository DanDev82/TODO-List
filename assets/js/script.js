var template = function(text) {
  return '<p><input type="checkbox"><i class="glyphicon glyphicon-star" title="Active"></i><span>' + text + '</span><i class="glyphicon glyphicon-remove" title="Remove"></i></p>';
  
};

var main = function() {
  $('form').submit(function() {
     	var text = $('input[id=todo]').val();
    	var html = template(text);
    	$('.list').append(html);
    	$('input[id=todo]').val('');
    
    return false;  
  });

  $('.list').on("click",'.glyphicon-star',function() {
  		$(this).toggleClass('active');
  });

  $('.list').on("click",'.glyphicon-remove',function() {
  		$(this).parent().remove();
  });
  
  
};

$(document).ready(main);