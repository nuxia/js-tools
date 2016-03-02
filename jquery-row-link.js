$(document).ready(function () {
    $('.row-link').each(function() {
        var $link = $(this),
            $row = $link.closest('tr');

        $row.find('td').not('.actions').addClass('pointer');

        $row.on('click', function(event) {
            var $target = $(event.target);

            if ($target.closest('td.actions').length > 0 || $target.hasClass('row-link')) {
                return;
            }

            $link[0].click();
        });
    });
});
