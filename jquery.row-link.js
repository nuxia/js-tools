if ($('table a.row-link').exist()) {
    $('table tbody td:not(.actions)').each(function () {
        var $this = $(this),
            $link = $this.parent('tr').find('a.row-link');

        if ($link.exist()) {
            $this.addClass('pointer');
            $this.on('click', function (e) {
                if ($link.attr('target') === '_blank') {
                    window.open($link.attr('href'));
                } else {
                    window.location = $link.attr('href');
                }
            });
        }
    });

    $('table tbody tr a').click(function (e) {
        e.stopPropagation();
    });
}
