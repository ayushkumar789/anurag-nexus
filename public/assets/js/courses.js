$(document).ready(function() {
    // Initialize popovers dynamically
    $('[data-toggle="popover"]').each(function() {
        var popoverTargetId = $(this).data('popover-content-id');
        var popoverHtml = $('#' + popoverTargetId).html();
        $(this).attr('data-content', popoverHtml);
        $(this).popover();
    });

    // Close popover on clicking anywhere else on the page
    $(document).on('click', function (e) {
        $('[data-toggle="popover"]').each(function () {
            // Only close if the click is outside of the popover
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                $(this).popover('hide');
            }
        });
    });
});
