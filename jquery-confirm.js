$(document).ready(function () {
    var handler = function (event) {
        if (!confirm($(this).data('confirm'))) {
            event.preventDefault();
            event.stopImmediatePropagation();
        } else {
            $(this).off('click', handler);
        }
    };
    $('[data-confirm]').on('click', handler);
});
