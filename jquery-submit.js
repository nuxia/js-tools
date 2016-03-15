$('form').not('[data-not-lockable]').on('submit', function() {
    var method = $(this).attr('method') || '';

    if (method.toLowerCase() !== 'get') {
        lockButton($(this).find('input[type=submit], button'));
    }
});

function lockButton($button) {
    $button.attr('disabled', 'disabled');
}

function unlockButton($button) {
    $button.removeAttr('disabled');
}
