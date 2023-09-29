jQuery(document).ready(function () {
     
     //$(".home_phone").mask("+999 999 999 999"); 
    
   
    jQuery('.send-form').click( function() {
    	var form = jQuery(this).closest('form');
		
    	
    	if ( form.valid() ) {
    		var actUrl = form.attr('action');

    		jQuery.ajax({
    			url: actUrl,
    			type: 'post',
    			dataType: 'html',
    			data: form.serialize(),
    			success: function(data) {
    				//form.html(data);
    				//form.css('opacity','1');
                    form.find('.status').html('Ваше обращение зарегистрировано, ожидайте ответа😁');
					form.find('.status').addClass('visible');
                    //$('#myModal').modal('show') // для бутстрапа


					setTimeout(function () {
					form.find('.status').removeClass('visible');
					}, 4000);
    			},
    			error:	 function() {
    			    form.find('.status').html('серверная ошибка');
					form.find('.status').addClass('visible');


					setTimeout(function () {
					form.find('.status').removeClass('visible');
					}, 4000);
    			}
    		});
    	}
    });


});
jQuery(document).on('click', function (event) {
    var target = jQuery(event.target);
    var statusBlock = jQuery('.status');

    if (!target.closest('.status').length) {
        
        statusBlock.removeClass('visible');
    }
});

jQuery('.status').click(function () {
    jQuery(this).removeClass('visible');
});

jQuery(document).on('click', '*', function () {
    var statusBlock = jQuery('.status');
    statusBlock.removeClass('visible');
});