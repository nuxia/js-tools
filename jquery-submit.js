$('form').on('submit', function() {
    var method = $(this).attr('method') || '';
    
    if (method.toLowerCase() !== 'get') {
        lockButton($(this).find('input[type=submit], button'));
    }
});

function lockButton($button) {
    $button.attr('disabled', 'disabled');
}
