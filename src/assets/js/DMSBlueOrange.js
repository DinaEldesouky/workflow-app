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


    $('.main-content').outerWidth(windowWidth);

    //console.log(windowWidth+" - "+ leftMenu);
    $('.content , .pageTitle').outerWidth(windowWidth - leftMenu);


    console.log($('.content').outerWidth());

};

$(document).ready(function () {
    /************* Side Menu Collapse ****************/
    $(".collaps-smenu").addClass('glyphicon  glyphicon-chevron-left');

    $(".collaps-smenu").click(function () {

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

    $(function () {
        var sidemenu = $(".sidemenu");
        var menuItems = $(".sidemenu > li");
        $(".has-sub").on("click", function () {
            menuItems.removeClass("active");

            $(this).parent("li").addClass("active");

            /*$(".sidemenu > li.active .glyphicon.glyphicon-chevron-down").removeClass("glyphicon-chevron-down").addClass("glyphicon-chevron-right");
            console.log($(".sidemenu > li.active .glyphicon.glyphicon-chevron-down"));
            $(this).find(".glyphicon.glyphicon-chevron-right").removeClass("glyphicon-chevron-right").addClass("glyphicon-chevron-down");*/
        });

        $(".sub a").on("click", function () {


        });
    })

    $('.has-sub').click(function () {
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

    $('ul.sub > li a').click(function () {

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
    $('.s-sub').click(function () {
        $(this).parent().siblings(".has-sub").find(".s-sub.opened").siblings().slideToggle().siblings().toggleClass("opened");
        $(this).siblings('.sub').slideToggle();
        $(this).toggleClass('opened');
    });
    //***Notification & Messages
    //***************************
    $('#1.notification').click(function () {
        $('#4.alert-view').slideUp();
        $('#2.alert-view').slideToggle();
    });
    $('#3.notification').click(function () {
        $('#2.alert-view').slideUp();
        $('#4.alert-view').slideToggle();
    });







    /****************** Edit/Save Row ***************/

    // Row inline editing
    // $(document).on('click', '.row-inline-edit', function () {
    //     rowInlineEditing($(this).closest('tr'));
    //     console.log($(this).closest('tr'));

    // });

    // Row inline Add
    // $(document).on('click', '.addRow', function () {
    //     var newRow = $(this).closest('tbody').find('.new-row');

    //     //$('.addRow').hide();

    //     newRow.toggleClass('active');
    //     newRow.children('.row-inline-editable').addClass("active");

    //     newRow.children('.row-inline-editable').each(function (index, value) {
    //         var text = $(this).children("input[type='text']").val("");
    //         var checkbox = $(this).children("input[type='checkbox']").val("");
    //         var select = $(this).children("select").removeAttr('checked');

    //     });

    // });

    // Row inline Save After Adding
    // $(document).on('click', '.row-inline-add', function () {

    //     $('.addRow').show();

    //     var newRow = $(this).closest('tr');
    //     //console.log(newRow)
    //     var oldRow = newRow.prev();
    //     rowInlineEditing(newRow);
    //     var newRowcontent = newRow.clone();

    //     newRowcontent.removeClass("new-row active").children().removeClass("active").find(".row-inline-add").removeClass("row-inline-add").addClass("row-inline-edit");
    //     //newRowcontent.find(".chosen-container").remove();
    //     //newRowcontent.find(".chosen ").attr('style', '').removeClass('active');

    //     newRow.before(newRowcontent);
    //     newRow.removeClass("active main").find(".glyphicon-pencil.row-inline-add").removeClass("glyphicon-pencil").addClass("glyphicon-floppy-disk");

    //     //updateChosen();
    // });

    // Row inline Editing Function
    function rowInlineEditing(element) {
        var editIcon = element.find('.row-inline-edit');

        //console.log(editIcon);
        //Editing
        if (editIcon.hasClass('glyphicon-pencil')) {
            editIcon.removeClass("glyphicon-pencil").addClass("glyphicon-floppy-disk");
            element.children('.row-inline-editable').addClass("active");
            console.log("Edit Mode");


        }
        //Saving
        else if (editIcon.hasClass('glyphicon-floppy-disk')) {
            console.log("Save Mode");
            editIcon.removeClass("glyphicon-floppy-disk").addClass("glyphicon-pencil");


            element.children('.row-inline-editable').each(function (index, value) {

                var value = $(this).children("span").text();
                var span = $(this).children("span");
                var text = $(this).children("input[type='text']");
                var checkbox = $(this).children("input[type='checkbox']");
                var select = $(this).children("select");
                var dataSearch =$(this); //
//console.log("this is it: "+$(this));

                if (select.length) {
                    var input = select;
                    var value = input.val();
                    if (value) {
                       span.text(value);
                       dataSearch.attr("data-search",value);
                        // put datasearch value
                            // dataSearch.text(value);

                    } else {
                        span.text("");
                        dataSearch.attr("data-search","");
                        
                    }

                    //console.log("Select: "+ value);
                } else if (text.length) {
                    var input = text;
                    var value = input.val();
                    span.text(value);
                    dataSearch.attr("data-search",value);
                    
                    //console.log("input: "+ value);
                } else if (checkbox.length) {
                    var input = checkbox;
                    var value = input.val();
                    //console.log("checkbox: "+ value);
                    if (checkbox.is(':checked')) {
                        span.removeClass("glyphicon-remove")
                        span.addClass("glyphicon-ok")
                        dataSearch.attr("data-search","Yes");
                    } else {
                        span.removeClass("glyphicon-ok")
                        span.addClass("glyphicon-remove")
                        dataSearch.attr("data-search","No");
                    }
                }

            });

            element.children('.row-inline-editable').removeClass("active");
        }

    }

    // Cell inline editing
    // $("inline-editable span").click(function (e) {
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
        $(input).blur(function () {

            //Send to DB and if success
            var value = input.val();
            span.text(value);
            $(element).removeClass("active");
        });
    }

    $('.t-delete').click(function () {
        if (confirm("You will delete the row ! Are you sure ?") == true) {
            $(this).closest('tr').remove();
        } else {
            return;
        }

    });


});



// Row inline Add
// $(function () {
//     var row = 1;
//     $('.addRows').click(function (e) {
//         e.preventDefault();
//         var template = $('.new-row')
//             .clone() // CLONE THE TEMPLATE
//             .attr('id', 'row' + (row++)) // MAKE THE ID UNIQUE
//             .appendTo($('th')) // APPEND TO THE TABLE
//             .show(); // SHOW IT
//     });
// });

// select row in table
$('tbody').on('click', 'tr', function () {

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
$(function () {
    var dateFormat = "mm/dd/yy",
        from = $(".from")
        .datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 1,
            changeYear: true
        })
        .on("change", function () {
            to.datepicker("option", "minDate", getDate(this));
        }),
        to = $(".to").datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 1,
            changeYear: true
        })
        .on("change", function () {
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
$(function () {
    $(".datepicker1").datepicker();
});

//table Modification & Addition
$(function () {
    $('.edit-data').on('click', function () {
        $(this).closest('fieldset.active').find('.new-data-section').removeClass('active');
        $(this).closest('fieldset.active').find('.edit-data-section').addClass('active');

    });
    $('.add-data').on('click', function () {
        $(this).closest('fieldset.active').find('.edit-data-section').removeClass('active');
        $(this).closest('fieldset.active').find('.new-data-section').addClass('active');
    });
});

// show deails on check
$(function () {
    $('table.setup-table tr td input:checkbox').click(function () {
        $('.new-data-section').toggle(this.checked);
    });
});

// rating
$(document).ready(function () {
    /* 1. Visualizing things on Hover - See next part for action on click */
    $('.stars li').on('mouseover', function () {
        var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on

        // Now highlight all the stars that's not after the current hovered star
        $(this).parent().children('li.star').each(function (e) {
            if (e < onStar) {
                $(this).addClass('hover');
            } else {
                $(this).removeClass('hover');
            }
        });
    }).on('mouseout', function () {
        $(this).parent().children('li.star').each(function (e) {
            $(this).removeClass('hover');
        });
    });

    /* 2. Action to perform on click */
    $('.stars li').on('click', function () {
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
$(function () {
    $('.modal-table tr').click(function () {
        $(this).closest('.modal').modal('hide');
    });
});



