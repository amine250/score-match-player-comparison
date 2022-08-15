var compare_on = false

$(document).ready(function () {
    $('#data').DataTable({
        paging: false
    });
});

configure_highlighting();

function configure_highlighting() {
    var $compareBtn = $('.btn-compare'),
        $clearBtn = $('.btn-clear'),
        $rows = $('#data tbody tr');

    // Allow row highlighting by clicking.
    $rows.click(function () {
        $(this).toggleClass('highlight');
        update_compare_button();
    });

    $compareBtn.click(function () {
        compare_on = !compare_on;
        update_compare_button();
        update_visible_rows();
    });
    
    $clearBtn.click(function() {
        compare_on = false
        $rows.filter('.highlight').toggleClass('highlight');
        update_compare_button();
        update_visible_rows();
    })

    update_compare_button();
    update_visible_rows();
}

function update_compare_button() {
    var $compareBtn = $('.btn-compare'),
        $rows = $('#data tbody tr');

    if (!compare_on) {
        $compareBtn
            .text($compareBtn.data('textOff'))
            .addClass('btn-primary')
            .removeClass('btn-success')
            .prop('disabled', !$rows.is('.highlight'));
    } else {
        $compareBtn.text($compareBtn.data('textOn'))
        .addClass('btn-success')
        .removeClass('btn-primary');
    }
}

function update_visible_rows() {
    var $rows = $('#data tbody tr');
    if (!compare_on) {
        $rows.show();
    } else {
        $rows.filter(':not(.highlight)').hide();
    }
}
