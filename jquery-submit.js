$('form').on('submit', function() {
    lockButton($(this).find('input[type=submit], button'));
});

function lockButton($button) {
    $button.attr('disabled', 'disabled');
}
