$('body').on('click', '[type="submit"]', function() {
    $(this).attr('disabled', 'disabled');
});