$('form'.on('submit', function() {
    $(this).find('input[type=submit], button').attr('disabled', 'disabled');
});