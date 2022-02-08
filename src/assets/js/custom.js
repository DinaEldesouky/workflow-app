//---------------------------------------------------------------------
//popups
$(function() {
    // add class popup to all popups
    $(".menu_popup,.menu_popup_1,.discount_popup,.tax_popup,.credit_popup,.paid_popup,.discountvalue_popup,.discountvalue_popup_1,.taxvalue_popup,.detail_popup,.addtax_popup,.addisc_popup").addClass("popup");

    $(".openpopup").on("click", function() {
        // $(this).addClass("addBtn");
        $(".popup").not(this).addClass("dnone");
        $(this).siblings(".menu_popup").toggleClass("dnone");
        //------------------------- Edit 17/10/2019 - calling popup position Func -------------------------
        if (!$(this).hasClass("dnone")) {
            popupPosition($(this).siblings(".menu_popup"));
        } else {}
    });

    // hide menu_popup when scroll----------------------------------------------
    $(".dataTables_scrollBody, .pageContent").scroll(function(e) {
        $(".menu_popup").addClass("dnone");

    });

    $(".action").on("click", function() {
        $(".popup").not(this).addClass("dnone");
        $(".menu_popup_1").toggleClass("dnone");
        $(this).parent().css({ position: 'relative' });
        $(".menu_popup_1").css({ position: 'absolute', top: '0px' });
    });

    $(".action-menu ul li a").on("click", function() {
        $(".menu_popup").addClass("dnone");
    });

    $(".printBtn").on("click", function() {
        $(this).siblings("#printPopup").toggleClass("dnone");
    });

    $("#printPopup ul li a").on("click", function() {
        $("#printPopup").addClass("dnone");
    });

    $(".discBtn").on("click", function() {
        //$(this).addClass("addBtn");
        $(".popup").not(this).addClass("dnone");
        $(this).siblings(".discount_popup").toggleClass("dnone");
        $(this).addClass("hover");
        //------------------------- Edit 17/10/2019 - calling popup position Func -------------------------
        if (!$(this).hasClass("dnone")) {
            popupPosition($(this).siblings(".discount_popup"));
        } else {}
    });

    $(".taxBtn").on("click", function() {
        //$(this).addClass("addBtn");
        $(".popup").not(this).addClass("dnone");
        $(this).siblings(".tax_popup").toggleClass("dnone");
        $(this).addClass("hover");
        //------------------------- Edit 17/10/2019 - calling popup position Func -------------------------
        if (!$(this).hasClass("dnone")) {
            popupPosition($(this).siblings(".tax_popup"));
        } else {}
    });

    $(".creditBtn").on("click", function() {
        // $(this).addClass("addBtn");
        $(".popup").not(this).addClass("dnone");
        $(this).siblings(".credit_popup").toggleClass("dnone");
        $(this).addClass("hover");
        //------------------------- Edit 17/10/2019 - calling popup position Func -------------------------
        if (!$(this).hasClass("dnone")) {
            popupPosition($(this).siblings(".credit_popup"));
        } else {}
    });

    $(".paidBtn").on("click", function() {
        // $(this).addClass("addBtn");
        $(".popup").not(this).addClass("dnone");
        $(this).siblings(".paid_popup").toggleClass("dnone");
        $(this).addClass("hover");
        //------------------------- Edit 17/10/2019 - calling popup position Func -------------------------
        if (!$(this).hasClass("dnone")) {
            popupPosition($(this).siblings(".paid_popup"));
        } else {}
    });

    $(".discValBtn").on("click", function() {
        $(".popup").not(this).addClass("dnone");
        $(this).siblings(".discountvalue_popup").toggleClass("dnone");
        //------------------------- Edit 17/10/2019 - calling popup position Func -------------------------
        if (!$(this).hasClass("dnone")) {
            popupPosition($(this).siblings(".discountvalue_popup"));
        } else {}
    });

    //
    $(".discValBtn_1").on("click", function() {
        $(".popup").not(this).addClass("dnone");
        $(this).siblings(".discountvalue_popup_1").toggleClass("dnone");
        $(this).addClass("hover");
        //------------------------- Edit 17/10/2019 - calling popup position Func -------------------------
        if (!$(this).hasClass("dnone")) {
            popupPosition($(this).siblings(".discountvalue_popup_1"));
        } else {}
    });
    //
    $(".taxValBtn").on("click", function() {
        $(".popup").not(this).addClass("dnone");
        $(this).siblings(".taxvalue_popup").toggleClass("dnone");
        $(this).addClass("hover");
        //------------------------- Edit 17/10/2019 - calling popup position Func -------------------------
        if (!$(this).hasClass("dnone")) {
            popupPosition($(this).siblings(".taxvalue_popup"));
        } else {}
    });
    $(".detailBtn").on("click", function() {

        // $(this).addClass("addBtn");
        $(".popup").not(this).addClass("dnone");
        $(this).siblings(".detail_popup").toggleClass("dnone");
        //------------------------- Edit 17/10/2019 - calling popup position Func -------------------------
        if (!$(this).hasClass("dnone")) {
            popupPosition($(this).siblings(".detail_popup"));
        } else {}
    });
    $(".addTaxBtn").on("click", function() {
        $(".popup").not(this).addClass("dnone");
        $(this).parent().siblings(".addtax_popup").toggleClass("dnone");
    });
    $(".policyBtn").on("click", function() {
        $(this).siblings(".policy_popup").toggleClass("dnone");
    });
    $(".deopsitBtn").on("click", function() {
        $(".deopsit-details").removeClass("dnone");
        $(".policy_popup").addClass("dnone");
    });
    $(".addDiscBtn").on("click", function() {
        $(".popup").not(this).addClass("dnone");
        $(this).parent().siblings(".addisc_popup").toggleClass("dnone");
    });

    //discValBtn on newInvoice table
    $("#newInvoice").on("click", ".discValBtn", function() {
        $(".popup").not(this).addClass("dnone");
        $(this).siblings(".discountvalue_popup").toggleClass("dnone");
        $(this).addClass("hover");
        //------------------------- Edit 17/10/2019 - calling popup position Func -------------------------
        if (!$(this).hasClass("dnone")) {
            popupPosition($(this).siblings(".discountvalue_popup"));
        } else {}
    });
    //taxValBtn on newInvoice table
    $("#newInvoice").on("click", ".taxValBtn", function() {
        $(".popup").not(this).addClass("dnone");
        $(this).siblings(".taxvalue_popup").toggleClass("dnone");
        $(this).addClass("hover");
        //------------------------- Edit 17/10/2019 - calling popup position Func -------------------------
        if (!$(this).hasClass("dnone")) {
            popupPosition($(this).siblings(".taxvalue_popup"));
        } else {}
    });
    //detailBtn on newInvoice table
    $("#newInvoice").on("click", ".detailBtn", function() {
        $(".popup").not(this).addClass("dnone");
        $(this).siblings(".detail_popup").toggleClass("dnone");
    });
    //t-delete on newInvoice table
    $("#newInvoice").on("click", ".t-delete", function() {
        if (confirm("You will delete the row ! Are you sure ?") == true) {
            $(this).closest('tr').remove();
        } else {
            return;
        }

    });

    //filterBtn filtr-result
    $(".fltersBtn").on("click", function() {
        $(".filtrresult").addClass('active');
    });
});

//hide popup if clicked outside
$(document).click(function(e) {
    var $tgt = $(e.target);
    if ($tgt.closest(".openpopup,.menu_popup,.action-menu ul li a,.printBtn,#printPopup ul li a,#printPopup,.discBtn,.discount_popup,.taxBtn,.tax_popup,.creditBtn,.credit_popup,.paidBtn,.paid_popup,.discountvalue_popup,.discValBtn,.taxvalue_popup,.taxValBtn,.detailBtn,.detail_popup,.discValBtn_1,.discountvalue_popup_1,.addtax_popup,.addTaxBtn,.addDiscBtn,.addisc_popup,.policyBtn,.policy_popup").length) {} else {
        $(".menu_popup,#printPopup,.discount_popup,.tax_popup,.credit_popup,.paid_popup,.discountvalue_popup,.taxvalue_popup,.detail_popup,.discountvalue_popup_1,.addtax_popup,.addisc_popup,.policy_popup").addClass("dnone");
    }
});

// alert when select option
$(document).ready(function() {
    var currentVal;
    $("select.safe-select").focus(function() {
        currentVal = this.value;
    }).change(function() {
        var selectedSafe = $(this).children("option:selected").val();
        $("#change-option").modal('show');
    });
});

// show deails on check
$(function() {
    $('table.setup-table tr td input:checkbox').click(function() {
        $('.new-data-section').toggle(this.checked);
    });
});

// rating
$(document).ready(function() {
    /* 1. Visualizing things on Hover - See next part for action on click */
    $('.stars li').on('mouseover', function() {
        var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on

        // Now highlight all the stars that's not after the current hovered star
        $(this).parent().children('li.star').each(function(e) {
            if (e < onStar) {
                $(this).addClass('hover');
            } else {
                $(this).removeClass('hover');
            }
        });
    }).on('mouseout', function() {
        $(this).parent().children('li.star').each(function(e) {
            $(this).removeClass('hover');
        });
    });

    /* 2. Action to perform on click */
    $('.stars li').on('click', function() {
        var onStar = parseInt($(this).data('value'), 10); // The star currently selected
        var stars = $(this).parent().children('li.star');
        for (i = 0; i < stars.length; i++) {
            $(stars[i]).removeClass('selected');
        }
        for (i = 0; i < onStar; i++) {
            $(stars[i]).addClass('selected');
        }
        // JUST RESPONSE (Not needed)
        var ratingValue = parseInt($('#stars li.selected').last().data('value'), 10);
        var msg = "";
        if (ratingValue > 1) {
            msg = "Thanks! You rated this " + ratingValue + " stars.";
        } else {
            msg = "We will improve ourselves. You rated this " + ratingValue + " stars.";
        }
        responseMessage(msg);
    });
});

// close modal when click row
$(function() {
    $('.modal-table tr').click(function() {
        $(this).closest('.modal').modal('hide');
    });
});

// DataTable #
$(function() {
    var table = $('.claimTabel table').DataTable({
        /* Codes
              {filter} : f
              {length} : l
              {processing} : r
              {table} : t
              {information} : i
              {pagination} : p
        */
        "dom": 'lrtip',
        stateSave: false,
        colReorder: true,
        "scrollCollapse": false,
        "info": true,
        "paging": true,
        "responsive": true,
        "ordering": true,
        "retrieve": true,
        "lengthMenu": [
            [5, 10, 25, 50],
            [5, 10, 25, 50]
        ],
        "columnDefs": [{
            "targets": [0, 1, ],
            "orderable": false,
        }]
    });

    $('.claimTabel tbody').on('click', 'tr', function() {
        $(this).toggleClass('selected');
    });
    $('#button').click(function() {
        alert(table.rows('.selected').data().length + ' row(s) selected');
    });
});

// Row inline Add - New invoice table -
$(document).ready(function() {

    $('.addRows-inv').click(function(e) {
        //e.preventDefault();
        var newRow = $('.newrow') /*.first()*/ ;
        console.log(newRow);
        var newRowcontent = newRow.clone().removeClass('newrow');
        console.log(newRowcontent);

        newRow.before(newRowcontent);

    });

});

// close div
$(function() {
    $('.closeBtn').click(function() {
        $(this).closest('div.active').removeClass('active');
    });
});

//deposLeft deposRight
$(function() {
    $('#Deposit table tr td input.ReceiptDis').on('change', function() {
        if ($(this).is(":checked")) {
            $('#deposLeft').addClass('col-sm-6 col-md-8');
            $('#deposRight').removeClass('dnone');
            $('#distrSubmit').addClass('dnone');
        } else if ($(this).is(":not(:checked)")) {
            $('#deposLeft').removeClass('col-sm-6 col-md-8');
            $('#deposRight, #distrSubmit, #paidInvo, #tranCust, #retVal, #tranCust').addClass('dnone');
        };
        // uncheck checkboxes in the same column
        $('td').find('input[type="checkbox"]:eq(' + $(this).index() + ')').not(this).prop('checked', false);
    });
});
// checkbox  - calearMeeting -
$(function() {

    $(".selectRow input[type=checkbox]").change(function() {
        if (this.checked) {
            $(this).parent().parent().parent().parent().parent().parent().parent().siblings(".actionTable").addClass("active");
        } else {
            $(this).parent().parent().parent().parent().parent().parent().parent().siblings(".actionTable").removeClass("active");
        }
    })
});