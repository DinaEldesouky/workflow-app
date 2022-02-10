//**Page Sizing
///////////////////////////////////
function sizing() {
    var windowHeight = $(window).height(),
        windowWidth = $(window).width(),
        headerHeight = $('header').height(),
        footerHeight = $('footer').outerHeight(),
        leftMenu = $('.side-menu').outerWidth(),
        //fix the non-existence of the left menu in the setup pages
        leftMenu = (typeof leftMenu === 'undefined') ? 0 : leftMenu,
        leftMenuMinWidth = $('.slidemenu').outerWidth(),
        rightContentWidth = $('.content').outerWidth();
    $('.main-content, .side-menu, .content').outerHeight(windowHeight - headerHeight - footerHeight - 2);
    $('.safe-pre-scrollable').outerHeight(windowHeight - footerHeight - 20);

    var filterSecHeight = $('.filterSec').height(),
        statusBarHeight = $('.statusBar').height(),

         pageTitleHeight = $('.pageTitle').outerHeight();

    //console.log(contentHeight);
    $('.main-content').outerWidth(windowWidth);
    //console.log(windowWidth+" - "+ leftMenu);
    $('.content , .pageTitle').outerWidth(windowWidth - leftMenu);
    //console.log($('.content').outerWidth());

    var contentHeight = $('.content').outerHeight();
    //$('#FixedAssetsTabel.pre-scrollable').outerHeight(contentHeight - filterSecHeight - statusBarHeight - 20 - 73);
    $('#FixedAssetsTabel.pre-scrollable').css("max-height", contentHeight - filterSecHeight - statusBarHeight - 20 - 73 + "px");
    $('.assets-type-defin').css("max-height", contentHeight - pageTitleHeight - 42 + "px");


};

$(document).ready(function() {
    /************* Side Menu Collapse ****************/
    $(".collaps-smenu").addClass('glyphicon  glyphicon-chevron-left');
    $(".collaps-smenu").click(function() {
        $(".search").toggleClass('max-width');

        var windowWidth = $(window).width(),
            leftColWidth = $('.side-menu').width(),
            rightContentWidth = $('.content').width();

        if ($(this).hasClass('glyphicon-chevron-left')) {

            $(".side-menu").animate({
                "width": "45px"
            }, "easeOut");

            var NewContentwidth = $('.content').width() + 215;
            $(".content,.pageTitle").animate({
                "width": "" + NewContentwidth + "px"
            }, "easeOut");

            $('.sidemenu .sub').slideUp();
        } else {
            $(".side-menu").animate({
                "width": "260px"
            }, "easeOut");

            var NewContentwidth = $('.content').width() - 215;
            $(".content,.pageTitle").animate({
                "width": "" + NewContentwidth + "px"
            }, "easeOut");
        };
        $(this).toggleClass('glyphicon-chevron-left glyphicon-chevron-right');

    });
    /************** Slide Fisrt Sub Menu **************/
    $(function() {
        var sidemenu = $(".sidemenu");
        var menuItems = $(".sidemenu > li");
        $(".has-sub").on("click", function() {
            menuItems.removeClass("active");

            $(this).parent("li").addClass("active");

            /*$(".sidemenu > li.active .glyphicon.glyphicon-chevron-down").removeClass("glyphicon-chevron-down").addClass("glyphicon-chevron-right");
            console.log($(".sidemenu > li.active .glyphicon.glyphicon-chevron-down"));
            $(this).find(".glyphicon.glyphicon-chevron-right").removeClass("glyphicon-chevron-right").addClass("glyphicon-chevron-down");*/
        });

        $(".sub a").on("click", function() {

        });
    })
    $('.has-sub').click(function() {
        var $clicked = $(this).siblings('.firstsub');
        if (!$('.side-menu').hasClass('slidemenu')) {
            /***** if menu is opened **********/

            if (!$('.firstsub').hasClass('opend-sub')) {
                /***** if nothing selected before ****/
                $clicked.slideToggle();
                $clicked.addClass('opend-sub');
                $(this).find(".glyphicon.glyphicon-chevron-right").removeClass("glyphicon-chevron-right").addClass("glyphicon-chevron-down");

            } else {
                /********* if there was an active category *******/
                if ($('.opend-sub').is($clicked)) {
                    /******** if you clicked on the active category *****/
                    $('.opend-sub').slideToggle();
                    $('.firstsub').removeClass('opend-sub');
                    $('.firstsub').siblings(".has-sub").find(".glyphicon.glyphicon-chevron-down").removeClass("glyphicon-chevron-down").addClass("glyphicon-chevron-right");

                } else {
                    /******** if you clicked on inActive category *****/
                    $('.opend-sub').slideToggle();
                    $('.firstsub').removeClass('opend-sub');
                    $('.firstsub').siblings(".has-sub").find(".glyphicon.glyphicon-chevron-down").removeClass("glyphicon-chevron-down").addClass("glyphicon-chevron-right");
                    $(this).find(".glyphicon.glyphicon-chevron-right").removeClass("glyphicon-chevron-right").addClass("glyphicon-chevron-down");

                    console.log($('.firstsub').siblings(".has-sub"));
                    $clicked.slideToggle();
                    $clicked.addClass('opend-sub');

                }
            }

        } else {
            /********* if Menu Collapsed ************/
            $('.content').toggleClass('max-w');
            $('.collaps-smenu').toggleClass('openmenu');
            if (!$('.firstsub').hasClass('opend-sub')) {
                $('.side-menu').removeClass('slidemenu');
                $clicked.slideToggle();
                $clicked.addClass('opend-sub');
            } else {
                $('.side-menu').removeClass('slidemenu');
                if ($('.opend-sub').is($clicked)) {
                    $('.opend-sub').slideToggle();
                } else {
                    $('.firstsub').removeClass('opend-sub');
                    /*$(this).find(".glyphicon.glyphicon-chevron-down").removeClass("glyphicon-chevron-down").addClass("glyphicon-chevron-right");*/
                    $clicked.slideToggle();
                    $clicked.addClass('opend-sub');
                }
            }
        }

    });
    /******** Set Active  Sub Menu ************/
    $('ul.sub > li a').click(function() {
        if ($(this).hasClass('s-sub')) {

            $('ul.sub > li a').removeClass('active');
            $(this).toggleClass('active')
        } else {

            if ($(this).hasClass('active')) {
                $(this).removeClass('active')
            } else {
                $('ul.sub > li a').removeClass('active');
                $(this).addClass('active')
            }
        }

    });
    /*************** Multi Sub ***************/
    $('.s-sub').click(function() {
        $(this).parent().siblings(".has-sub").find(".s-sub.opened").siblings().slideToggle().siblings().toggleClass("opened");
        $(this).siblings('.sub').slideToggle();
        $(this).toggleClass('opened');
    });
    //***Notification & Messages
    //***************************
    $('#1.notification').click(function() {
        $('#4.alert-view').slideUp();
        $('#2.alert-view').slideToggle();
    });
    $('#3.notification').click(function() {
        $('#2.alert-view').slideUp();
        $('#4.alert-view').slideToggle();
    });

    //Safe list
    // $('.sortable').nestedSortable({
    //     forcePlaceholderSize: true,
    //     handle: 'div',
    //     helper: 'clone',
    //     items: 'li',
    //     opacity: .6,
    //     placeholder: 'placeholder',
    //     revert: 250,
    //     tabSize: 25,
    //     tolerance: 'pointer',
    //     toleranceElement: '> div',
    //     maxLevels: 2,
    //     isTree: true,
    //     expandOnHover: 700,
    //     startCollapsed: false
    // });

    $('.disclose').on('click', function() {
        $(this).closest('li').toggleClass('mjs-nestedSortable-collapsed').toggleClass('mjs-nestedSortable-expanded');
        $(this).toggleClass('ui-icon-plusthick').toggleClass('ui-icon-minusthick');
    });

    //table Modification & Addition
    $('.edit-safe, .add-safe').on('click', function() {
        $(this).closest('.tab-pane.active').find('.no-safe-meta-data').removeClass('active');
        console.log($(this));
        console.log($(this).closest('.tab-pane.active').find('.no-safe-meta-data'));
        $(this).closest('.tab-pane.active').find('.safe-meta-data').addClass('active');

        if (title = $(this).attr('title')) {
            //Modify a Safe
            $('.safe-meta-data').find('.section-head span').text(title);

            //Load safe data in the input text , select and check boxes

        } else if (title = $(this).text()) {
            $('.safe-meta-data').find('.section-head span').text(title);
            //Add a Safe
            //Empty safe data input text , select and check boxes

        }
    });

    /****************** Edit/Save Row ***************/

    // Row inline editing
    // $(document).on('click', '.row-inline-edit', function() {
    //     rowInlineEditing($(this).parent().parent('tr'));
    //     //console.log($(this).parent().parent('tr'));

    // });

    // Row inline Add
    // $(document).on('click', '.addRow', function() {
    //     var newRow = $(this).parent().parent().find('.new-row');
    //     $('.addRow').hide();
    //     newRow.toggleClass('active');
    //     newRow.children('.row-inline-editable').addClass("active");
    //     newRow.children('.row-inline-editable').each(function(index, value) {
    //         var text = $(this).children("input[type='text']").val("");
    //         var checkbox = $(this).children("input[type='checkbox']").val("");
    //         var select = $(this).children("select").removeAttr('checked');

    //     });

    // });

    // Row inline Save After Adding
    // $(document).on('click', '.row-inline-add', function() {
    //     $('.addRow').show();
    //     var newRow = $(this).parent().parent();
    //     var oldRow = newRow.prev();
    //     rowInlineEditing(newRow);
    //     var newRowcontent = newRow.clone();
    //     newRowcontent.removeClass("new-row new-room active").children().removeClass("active").first().children(".row-inline-add").removeClass("row-inline-add").addClass("row-inline-edit");
    //     //newRowcontent.find(".chosen-container").remove();
    //     //newRowcontent.find(".chosen ").attr('style', '').removeClass('active');
    //     newRow.before(newRowcontent);
    //     newRow.removeClass("active main").children().first().children(".glyphicon-pencil.row-inline-add").removeClass("glyphicon-pencil").addClass("glyphicon-floppy-disk");
    //     //updateChosen();
    // });

    // Row inline Editing Function
    // function rowInlineEditing(element) {
    //     var editIcon = element.children().last().children().first();
    //     //Editing
    //     if (editIcon.hasClass('glyphicon-pencil')) {
    //         editIcon.removeClass("glyphicon-pencil").addClass("glyphicon-floppy-disk");
    //         element.children('.row-inline-editable').addClass("active");
    //     }
    //     //Saving
    //     else if (editIcon.hasClass('glyphicon-floppy-disk')) {
    //         //console.log("Save Mode");
    //         editIcon.removeClass("glyphicon-floppy-disk").addClass("glyphicon-pencil");
    //         element.children('.row-inline-editable').each(function(index, value) {
    //             var value = $(this).children("span").text();
    //             var span = $(this).children("span");
    //             var text = $(this).children("input[type='text']");
    //             var checkbox = $(this).children("input[type='checkbox']");
    //             var select = $(this).children("select");
    //             if (select.length) {
    //                 var input = select;
    //                 var value = input.val();
    //                 if (value) {
    //                     span.text(value);
    //                 } else {
    //                     span.text("");
    //                 }
    //                 //console.log("Select: "+ value);
    //             } else if (text.length) {
    //                 var input = text;
    //                 var value = input.val();
    //                 span.text(value);
    //                 //console.log("input: "+ value);
    //             } else if (checkbox.length) {
    //                 var input = checkbox;
    //                 var value = input.val();
    //                 //console.log("checkbox: "+ value);
    //                 if (checkbox.is(':checked')) {
    //                     // span.removeClass("fa-times text-danger");
    //                     // span.addClass("fa-check text-success")
    //                     $(this).find("span i").removeClass("fa-times");
    //                     $(this).find("span i").addClass("fa-check")
    //                 } else {
    //                     // span.removeClass("fa-check text-success");
    //                     // span.addClass("fa-times text-danger")
    //                     $(this).find("span i").removeClass("fa-check");
    //                     $(this).find("span i").addClass("fa-times")
    //                 }
    //             }

    //         });

    //         element.children('.row-inline-editable').removeClass("active");
    //     }

    // }

    // Cell inline editing
    // $("inline-editable span").click(function(e) {
    //     inlineEditing($(this).parent());

    // });

    // Cell inline Editing Function Used for Row in Line editing
    function inlineEditing(element) {
        var value = element.children("span").text();
        var span = element.children("span");
        var text = element.children("input");
        var select = element.children("select");

        if (select.length) {
            var input = select;
        }

        if (text.length) {
            var input = text;
        }
        element.addClass("active");

        input.val(value);

        $(input).focus();
        $(input).blur(function() {

            //Send to DB and if success
            var value = input.val();
            span.text(value);
            $(element).removeClass("active");
        });
    }

    // $('.t-delete').click(function() {
    //     if (confirm("You will delete the row ! Are you sure ?") == true) {
    //         $(this).closest('tr').remove();
    //     } else {
    //         return;
    //     }

    // });

    //
    $.fn.dataTable.moment('DD/MM/YYYY');

    // DataTable
    var table = $('#ordersTabel table').DataTable({
        /* Codes
              {filter} : f
              {length} : l
              {processing} : r
              {table} : t
              {information} : i
              {pagination} : p
        */
        "dom": 'lrtip',
        //        "scrollY": "200px",
        stateSave: false,
        colReorder: true,
        "scrollCollapse": false,
        "info": true,
        "paging": true,
        "responsive": true,
        "ordering": true,
        "lengthMenu": [
            [5, 10, 25, 50],
            [5, 10, 25, 50]
        ],
        "columnDefs": [{
            "targets": [8, 9, 10],
            "orderable": false,
        }]

    });

    $('.searchableTh .fa-search').click(function() {
        $(this).parent().toggleClass("searching");
        $(this).siblings("input").focus();
        $(this).siblings("input").val("");
        $(this).siblings("input").trigger("change");
        /*table.columns().search( "" ).draw();*/
        event.stopPropagation();
    });

    $('.searchableTh input').click(function() {
        event.stopPropagation();
    });

    // Apply the search
    table.columns().every(function() {
        var that = this;

        $('input', this.header()).on('keyup change', function() {
            if (that.search() !== this.value) {
                that
                    .search(this.value)
                    .draw();
            }
        });
    });
    //  select one row
    $('#ordersTabel table tbody').on('click', 'tr', function() {

        if ($(this).hasClass("selected")) {
            $(this).removeClass('selected');
            $(this).find("input").prop('checked', false);

        } else {
            $(this).addClass('selected');
            $(this).find("input").prop('checked', true);
            //console.log( $(this).find("input"));

            //  select one row
            //            $('#ordersTabel table tbody tr').not(this).removeClass('selected');
            //            $('#ordersTabel table tbody tr').not(this).find("input").prop('checked', false);
        }

    });

    //**Select Payment
    ///////////////////////////////////

    // Detect Card Type
    // Read More on https://en.wikipedia.org/wiki/Payment_card_number

    $("#paymentTable").on('change', 'input[name=\'cardNumber\']', function() {
        var CardNumber = $(this).val();
        var Cardtype = detectCardType(Number(CardNumber));
        $(this).siblings("input[name='cardType']").attr("value", Cardtype);
        //console.log($(this).siblings("input[name='cardType']"));
    });

    function detectCardType(number) {
        var re = {
            electron: /^(4026|417500|4405|4508|4844|4913|4917)\d+$/,
            maestro: /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/,
            dankort: /^(5019)\d+$/,
            interpayment: /^(636)\d+$/,
            unionpay: /^(62|88)\d+$/,
            visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
            mastercard: /^5[1-5][0-9]{14}$/,
            amex: /^3[47][0-9]{13}$/,
            diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
            discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
            jcb: /^(?:2131|1800|35\d{3})\d{11}$/

        }
        for (var key in re) {
            if (re[key].test(number)) {
                return key
            }
        }
    }

    $('.add-payment').click(function() {
        $('#paymentTable tr.payment:last').after('                                    <tr class="payment">\n' +
            '                                        <td class="">Paid<div class="delete-payment right">\n' +
            '                                            <a class="btn btn-danger deleteBtn "> <span class="glyphicon glyphicon-minus"></span></a>\n' +
            '                                        </div></td>\n' +
            '                                        <td class=""><select class="form-control payment-type"> <option value="cash" selected="selected"> Cash</option> <option value="card"> Card</option> <option value="check"> Check</option></select></td>\n' +
            '                                        <td class="amount text-right"><input type="text" class="form-control"> </td>\n' +
            '                                        <td class=" "><select class="form-control currency-select" > <option value="EGP" data-ex-rate="1"> EGP</option> <option value="USD" data-ex-rate="17.65"> USD</option> <option value="SAR" data-ex-rate="4.71"> SAR</option></select></td>\n' +
            '\n' +
            '                                        <td class=" cash-td" colspan="2"></td>\n' +
            '\n' +
            '                                        <td class="width20 card-td"><input type="text" name="cardNumber" placeholder="Card Number" maxlength="16" class="form-control"> <input type="hidden" name="cardType"> </td>\n' +
            '                                        <td class=" card-td"><input type="month" placeholder="MM/YY" class="form-control"> </td>\n' +
            '\n' +
            '                                        <td class=" check-td" colspan="2"><input type="text" placeholder="Check Number" class="form-control"> </td>\n' +
            '\n' +
            '                                        <td class="currency-td"><span class="currency-name">EGP</span> = <span class="currency-rate">1.00</span> LE</td>\n' +
            '                                        <td class="width20">Total = <span class="ex-value"></span></td>\n' +
            '                                    </tr>');
    });

    $('#paymentTable').on('click', '.delete-payment', function() {
        if ($(this).parent().parent().find("td.amount input").val() >= 1) {

            if (confirm("Are you sure you want to delete a payment line?")) {
                $(this).parent().parent("tr.payment").remove();
                var totalPaid = 0;
                $('.ex-value').each(function() {
                    totalPaid += Number($(this).text());
                    //console.log(totalPaid);
                });
                var totalOrder = $("#total-order").text();

                $("#remaining").text(Number(totalOrder) - totalPaid);

                $("#totalPaid").text(totalPaid);
            }
            return false;
        } else {
            $(this).parent().parent("tr.payment").remove();

        }

    });

    $(this).parent().siblings("." + $(this).val() + "-td").show();

    $('body').on('change', 'select.payment-type', function() {
        $(this).parent().siblings(".check-td, .card-td, .cash-td").hide();
        $(this).parent().siblings("." + $(this).val() + "-td").show();

    });

    $('body').on('change', 'select.currency-select', function() {
        var totalPaid = 0;
        var currencyName = $(this).val();
        var currencyRate = Number($('option:selected', this).attr('data-ex-rate'));
        var inputAmount = $(this).parent().siblings("td.amount").children("input").val();
        var inputAmount = inputAmount.replace(/\,/g, '');
        var inputAmount = parseInt(inputAmount, 10);
        var amount = inputAmount * currencyRate;
        /*var amount          = Number($(this).parent().siblings("td.amount").children("input").val()) * currencyRate;*/
        var totalOrder = Number($("#total-order").text());
        var remaining = Number($("#remaining").text());

        $(this).parent().siblings(".currency-td").children(".currency-name").text(currencyName);
        $(this).parent().siblings(".currency-td").children(".currency-rate").text(currencyRate);
        $(this).parent().siblings().last().children(".ex-value").text(amount);

        $('.ex-value').each(function() {
            //console.log(totalPaid);
            totalPaid += Number($(this).text());
            //totalPaid = Number($(this).text()) + totalPaid;
        });

        $("#remaining").text(totalOrder - totalPaid);
        $("#totalPaid").text(totalPaid);
    });

    $('body').on('change', 'td.amount input', function() {
        var currencyRate = Number($(this).parent().siblings().children(" td .currency-rate").text());
        var iputAmount = $(this).val();
        iputAmount = iputAmount.replace(/\,/g, '');
        iputAmount = parseInt(iputAmount, 10);
        var amount = iputAmount * currencyRate;

        /*var amount          = Number($(this).val()) * currencyRate;*/
        var totalOrder = Number($("#total-order").text());
        var remaining = Number($("#remaining").text());
        var totalPaid = 0;

        $(this).parent().siblings().last().children(".ex-value").text(amount);

        $('.ex-value').each(function() {
            totalPaid = Number($(this).text()) + totalPaid;
        });

        $("#remaining").text(totalOrder - totalPaid);
        $("#totalPaid").text(totalPaid);
    });

    $('body').on('change', '', function() {

        $('.amount input').mask('#,##0', {
            reverse: true
        });
        $('.card-td input[name="cardNumber"]').mask('0000-0000-0000-0000');
        $('.card-td input[type="month"]').mask("00/00", {
            placeholder: "__/__"
        });
    });

    $(".datetimepicker").datetimepicker({
        format: 'd/m/Y H:i'
    });
    $(".datepicker").datetimepicker({
        timepicker: false,
        format: 'd/m/Y'
    });

});

// filter collaps
$(function() {
    $('.filter-collapse').click(function() {
        $('.filter-form').slideToggle("slow", "swing", function() {
            sizing();
        });
        $(this).children().toggleClass('glyphicon-chevron-up glyphicon-chevron-down active');
    });
});

//jQuery Mask Plugin
$(document).ready(function() {
    $('.money').mask('000.000.000.000.000,000', {
        reverse: true
    });
});

// Row inline Add
// $(function() {
//     var row = 1;
//     $('.addRows').click(function(e) {
//         e.preventDefault();
//         var template = $('.new-row')
//             .clone() // CLONE THE TEMPLATE
//             .attr('id', 'row' + (row++)) // MAKE THE ID UNIQUE
//             .appendTo($('#FixedAssetsTabel tbody')) // APPEND TO THE TABLE
//             .show(); // SHOW IT
//     });
// });

// select row in table
$('tbody').on('click', 'tr', function() {

    if ($(this).hasClass("selected")) {
        $(this).removeClass('selected');
        $(this).find("input").prop('checked', true);

    } else {
        $(this).addClass('selected');
        $(this).find("input").prop('checked', false);

        $('tbody tr').not(this).removeClass('selected');
        $('tbody tr').not(this).find("input").prop('checked', false);
    }
});

// datapicker rang
$(function() {
    var dateFormat = "mm/dd/yy",
        from = $(".from")
        .datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 1,
            changeYear: true
        })
        .on("change", function() {
            to.datepicker("option", "minDate", getDate(this));
        }),
        to = $(".to").datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 1,
            changeYear: true
        })
        .on("change", function() {
            from.datepicker("option", "maxDate", getDate(this));
        });

    function getDate(element) {
        var date;
        try {
            date = $.datepicker.parseDate(dateFormat, element.value);
        } catch (error) {
            date = null;
        }
        return date;
    }
});

//datapicker
$(function() {
    $(".datepicker1").datepicker();
});

//table Modification & Addition
$(function() {
    $('.edit-data').on('click', function() {
        $(this).closest('fieldset.active').find('.new-data-section').removeClass('active');
        $(this).closest('fieldset.active').find('.edit-data-section').addClass('active');

    });
    $('.add-data').on('click', function() {
        $(this).closest('fieldset.active').find('.edit-data-section').removeClass('active');
        $(this).closest('fieldset.active').find('.new-data-section').addClass('active');
    });
});

// close modal when click row
$(function() {
    $('.modal-table tr').click(function() {
        $(this).closest('.modal').modal('hide');
    });
});


// Apply the search
function FilterDatatable(table) {
    table.columns().every(function() {
        var that = this;

        $('input', this.header()).on('keyup change', function() {
            if (that.search() !== this.value) {
                that
                    .search(this.value)
                    .draw();
            }
        });

        $('select', this.header()).on('change', function() {

            if (that.search() !== this.value) {
                that
                    .search(this.value)
                    .draw();
            }
        });

    });
}