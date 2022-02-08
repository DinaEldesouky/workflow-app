$(document).ready(function () {

    $('.childTable table tbody').on('click', 'tr', function() {
        $(this).toggleClass('selected');
        $(this).siblings('tr').removeClass('selected');
    });
    $.fn.dataTable.moment('DD/MM/YYYY');
    //Creat table row .create-row
    // $('#taskDetailsTabel').on('click', '.create-row', function () {
    //     $(this).find("i").toggleClass("fa-minus fa-plus");
    //     $(this).closest("table").find("tr.new-row").toggleClass('active');
    // });
//maintenance-order
// $('#setupDetailsTabel').on('click', '.maintenance-order', function () {
//     $(this).find("i").toggleClass("fa-minus fa-plus");
//         $(this).closest("table").find("tr.new-row").toggleClass('active');
// });
//maintenance-order
// $('#setupDetailsTabel').on('click', '.maintenance-plan', function () {
//     $(this).find("i").toggleClass("fa-minus fa-plus");
//         $(this).closest("table").find("tr.new-row").toggleClass('active');
// });
//maintenance-plan-main
// $('#setupDetailsTabel').on('click', '.maintenance-plan-main', function () {
//     $(this).find("i").toggleClass("fa-minus fa-plus");
//         $(this).closest("table").find("tr.new-row").toggleClass('active');
// });
//
    $('#setupDetailsTabel').on('click', 'input[name="selectRow"]', function () {
    if ($(this).is(":checked")) {
        $('.filter-action li').removeClass("inactive");
        $(this).parent().parent().addClass('selected')
    } else {
        $('.filter-action li').addClass("inactive");
        $(this).parent().parent().removeClass('selected');
        $(this).parent().parent().parent().siblings().children().children().children('input[name="selectAll"]').prop("checked", false);
    }
});
//
$('#setupDetailsTabel').on('click', 'input[name="selectAll"]', function () {
    if ($(this).is(":checked")) {
        $(this).parent().parent().parent().siblings().children().children().find('input[name = "selectRow"]').prop("checked", true).parent().parent().addClass('selected');
        $('.filter-action li').removeClass("inactive");
    } else {
        $(this).parent().parent().parent().siblings().children().children().find('input[name = "selectRow"]').prop("checked", false).parent().parent().removeClass('selected');
        $('.filter-action li').addClass("inactive");
    }
});
    //Creat table row .create-row
    // $('#setupDetailsTabel').on('click', '.details-equip', function () {
    //     $(this).find("i").toggleClass("fa-minus fa-plus");
    //     $(this).closest("table").find("tr.new-row").toggleClass('active');
    //     $('.filter-action li').toggleClass("inactive");
    // });
    // Row inline Add
    // $(document).on("click", ".addNewRow" , function() {
    //     var newRow = $(this).parent().parent().parent().siblings().children().find(".newrow");
    //     var newRowcontent = newRow.clone().removeClass("newrow");
    //     newRow.before(newRowcontent);
    // });

//
    var tabletaskDetails = taskDetailsTabel();
    function taskDetailsTabel() {
        var table = $('#taskDetailsTabel table').DataTable({
            "dom": 'tilp',
            "stateSave": false,
            "scrollCollapse": true,
            "info": true,
            "paging": true,
            "responsive": true,
            "ordering": false,
            "colReorder": true,
            "lengthMenu": [5, 10, 20],
            "rowReorder": true
        });
        return table;
    };
    FilterDatatable(tabletaskDetails);

    $('#taskDetailsTabel tbody').on('click', 'td.details-control', function () {
        var tr = $(this).closest('tr');
        var row = $(this).closest('table').DataTable().row(tr);//tablesetup.row(tr);
        if (row.child.isShown()) {
            row.child.hide();
            tr.removeClass('shown');
            $(this).children().removeClass('select');
        } else {
            row.child(format(row.data())).show();
            tr.addClass('shown');
          tr.removeClass('selected');
          $(this).children().addClass('select');
        }
    });
    function format(rowData) {
        var div = $('<div/>').addClass('loading').text('Loading...');
        div.load("taskDetails-" + rowData[0] + ".html", function () {
            $(".loading").removeClass('loading');
            // div.find("table").DataTable({
            //     "paging": false,
            // });
        });
        console.log(rowData[0]);
        return div;
    };


});
// setup tables
$(document).ready(function(){
var tablesetup = setupDetailsTabel();
function setupDetailsTabel() {
    var table = $('#setupDetailsTabel table').DataTable({
        "dom": 'tilp',
        "stateSave": false,
        "scrollCollapse": true,
        "info": true,
        "paging": true,
        "responsive": true,
        "ordering": false,
        "colReorder": false,
        "lengthMenu": [5, 10, 20],
        "rowReorder": false
    });
    return table;
};
FilterDatatable(tablesetup);

$('#setupDetailsTabel tbody').on('click', 'td.details-control', function () {
        var tr = $(this).closest('tr');
        // var row = tablesetup.row(tr);
        var row = $(this).closest('table').DataTable().row(tr);//tablesetup.row(tr);
        if (row.child.isShown()) {
            row.child.hide();
            tr.removeClass('shown');
            $(this).children().removeClass('select');
        } else {
            row.child(format(row.data())).show();
            tr.addClass('shown');
            tr.removeClass('selected');
            $(this).children().addClass('select');
        }
    });
function format(rowData) {
    var div = $('<div/>').addClass('loading').text('Loading...');
    div.load("setupDetails-" + rowData[0] + ".html", function () {
        $(".loading").removeClass('loading');
            div.find("table").parent().parent("techtable").removeClass("dnone");

    });
   console.log(rowData[0]);
    return div;
};
// /////////////////////////////
$('#setupDetailsTabel tbody').on('click', 'td.showdetalis', function () {
    var tr = $(this).closest('tr');
    // var row = tablesetup.row(tr);
    var row = $(this).closest('table').DataTable().row(tr);//tablesetup.row(tr);
    if (row.child.isShown()) {
        row.child.hide();
        tr.removeClass('shown');
        $(this).children().removeClass('select');
    } else {
        row.child(format2(row.data())).show();
        tr.addClass('shown');
       tr.removeClass('selected');
       $(this).children().addClass('select');
    }
});
function format2(rowData) {
var div = $('<div/>').addClass('loading').text('Loading...');
div.load("setupTechnician-" + rowData[0] + ".html", function () {
    $(".loading").removeClass('loading');
        div.find("table");
});
console.log(rowData[0]);
return div;
    };
// //////details-equip
$('#setupDetailsTabel tbody').on('click', 'td.details-equip', function () {
    var tr = $(this).closest('tr');
    var row = $(this).closest('table').DataTable().row(tr);
    if (row.child.isShown()) {
        row.child.hide();
        tr.removeClass('shown');
        $(this).children().removeClass('select');
        // $('.filter-action li').addClass("inactive");
    } else {
        // $('.filter-action li').removeClass("inactive");
        row.child(format3(row.data())).show();
        tr.addClass('shown');
        tr.removeClass('selected');
        $(this).children().addClass('select');
    }
});
function format3(rowData) {
var div = $('<div/>').addClass('loading').text('Loading...');
div.load("setupEquipMaint-" + rowData[0] + ".html", function () {
    $(".loading").removeClass('loading');
        div.find("table");

});
console.log(rowData[0]);
return div;
    };


//////Indicators
$('#setupDetailsTabel tbody').on('click', 'td.equp-Indicators a', function () {
    var tr = $(this).closest('tr');
    var row = $(this).closest('table').DataTable().row(tr);
    $('a').not(this).removeClass('select');
    if (row.child.isShown()) {
        row.child.hide();
        tr.removeClass('shown');
        $(this).removeClass('select');
    } else {
        row.child(format5(row.data())).show();
        tr.addClass('shown');
        tr.removeClass('selected');
        $(this).addClass('select');
    }
});
function format5(rowData) {
var div = $('<div/>').addClass('loading').text('Loading...');
div.load("EqupIndicators-" + rowData[0] + ".html", function () {
    $(".loading").removeClass('loading');
        div.find("table");

});
console.log(rowData[0]);
return div;
    };

//////Parts
    $('#setupDetailsTabel tbody').on('click', 'td a.Equp-Spare-Parts', function () {
    var tr = $(this).closest('tr');
    var row = $(this).closest('table').DataTable().row(tr);
    $('a').not(this).removeClass('select');
    if (row.child.isShown()) {
        row.child.hide();
        tr.removeClass('shown');
        $(this).removeClass('select');
    } else {
        row.child(format6(row.data())).show();
        tr.addClass('shown');
      tr.removeClass('selected');
       $(this).addClass('select');
    }
});
function format6(rowData) {
var div = $('<div/>').addClass('loading').text('Loading...');
    div.load("EqupSpareParts-" + rowData[0] + ".html", function () {
    $(".loading").removeClass('loading');
        div.find("table");

});
console.log(rowData[0]);
return div;
    };
//EqupTechnician
$('#setupDetailsTabel tbody').on('click', 'td a.Equp-Technician', function () {
    var tr = $(this).closest('tr');
    var row = $(this).closest('table').DataTable().row(tr);
    $('a').not(this).removeClass('select');
    if (row.child.isShown()) {
        row.child.hide();
        tr.removeClass('shown');
        $(this).removeClass('select');

    } else {
        row.child(format7(row.data())).show();
        tr.addClass('shown');
       tr.removeClass('selected');
       $(this).addClass('select');

    }
});
function format7(rowData) {
var div = $('<div/>').addClass('loading').text('Loading...');
div.load("EqupTechnician-" + rowData[0] + ".html", function () {
    $(".loading").removeClass('loading');
        div.find("table");

});
console.log(rowData[0]);
return div;
    };
    //////Parts
    $('#setupDetailsTabel tbody').on('click', 'td a.Equp-Parts', function () {
        var tr = $(this).closest('tr');
        var row = $(this).closest('table').DataTable().row(tr);
        $('a').not(this).removeClass('select');
        if (row.child.isShown()) {
            row.child.hide();
            tr.removeClass('shown');
            $(this).removeClass('select');
        } else {
            row.child(format8(row.data())).show();
            tr.addClass('shown');
             tr.removeClass('selected');
             $(this).addClass('select');
        }
    });
    function format8 (rowData) {
        var div = $('<div/>').addClass('loading').text('Loading...');
        div.load("EqupParts-" + rowData[0] + ".html", function () {
            $(".loading").removeClass('loading');
            div.find("table");


        });
        console.log(rowData[0]);
        return div;
    };

// prod-line
$('#setupDetailsTabel tbody').on('click', 'td.prod-line', function () {
    var tr = $(this).closest('tr');
    var row = $(this).closest('table').DataTable().row(tr);
    $('a').not(this).removeClass('select');
    if (row.child.isShown()) {
        row.child.hide();
        tr.removeClass('shown');
        $(this).children().removeClass('select');
    } else {
        row.child(format9(row.data())).show();
        tr.addClass('shown');
        tr.removeClass('selected');
        $(this).children().addClass('select');
    }
});
function format9 (rowData) {
    var div = $('<div/>').addClass('loading').text('Loading...');
    div.load("prodLine-" + rowData[0] + ".html", function () {
        $(".loading").removeClass('loading');
        div.find("table");

    });
    console.log(rowData[0]);
    return div;
};
// Plan-Technician
$('#setupDetailsTabel tbody').on('click', 'td.plan-technician', function () {
    var tr = $(this).closest('tr');
    var row = $(this).closest('table').DataTable().row(tr);
    $('a').not(this).removeClass('select');
    if (row.child.isShown()) {
        row.child.hide();
        tr.removeClass('shown');
        $(this).children().removeClass('select');
    } else {
        row.child(format10(row.data())).show();
        tr.addClass('shown');
        tr.removeClass('selected');
        $(this).children().addClass('select');
    }
});
function format10 (rowData) {
    var div = $('<div/>').addClass('loading').text('Loading...');
    div.load("plan-technician-" + rowData[0] + ".html", function () {
        $(".loading").removeClass('loading');
        div.find("table");

    });
    console.log(rowData[0]);
    return div;
};
// Plan-parts
$('#setupDetailsTabel tbody').on('click', 'td.plan-parts', function () {
    var tr = $(this).closest('tr');
    var row = $(this).closest('table').DataTable().row(tr);
    $('a').not(this).removeClass('select');
    if (row.child.isShown()) {
        row.child.hide();
        tr.removeClass('shown');
        $(this).children().removeClass('select');
    } else {
        row.child(format11(row.data())).show();
        tr.addClass('shown');
        tr.removeClass('selected');
        $(this).children().addClass('select');
    }
});
function format11 (rowData) {
    var div = $('<div/>').addClass('loading').text('Loading...');
    div.load("plan-parts-" + rowData[0] + ".html", function () {
        $(".loading").removeClass('loading');
        div.find("table");

    });
    console.log(rowData[0]);
    return div;
};

$('#taskDetailsTabel tbody').on('click', 'td a.details-sparparts', function () {
    var tr = $(this).closest('tr');
    var row = $(this).closest('table').DataTable().row(tr);
    if (row.child.isShown()) {
        row.child.hide();
        tr.removeClass('shown');
        $(this).children().removeClass('select');
    } else {
        row.child(format12(row.data())).show();
        tr.addClass('shown');
      tr.removeClass('selected');
      $(this).children().addClass('select');
    }
});
function format12(rowData) {
    var div = $('<div/>').addClass('loading').text('Loading...');
    div.load("taskDetails-" + rowData[0] + ".html", function () {
        $(".loading").removeClass('loading');
        div.find("table");
    });
    console.log(rowData[0]);
    return div;
};
    //breakDown-details
    $('#setupDetailsTabel tbody').on('click', 'td a.breakDown-details', function () {
        var tr = $(this).closest('tr');
        var row = $(this).closest('table').DataTable().row(tr);
        $('a').not(this).removeClass('select');
        if (row.child.isShown()) {
            row.child.hide();
            tr.removeClass('shown');
            $(this).removeClass('select');
        } else {
            row.child(format20(row.data())).show();
            tr.addClass('shown');
             tr.removeClass('selected');
             $(this).addClass('select');
        }
    });
    function format20 (rowData) {
        var div = $('<div/>').addClass('loading').text('Loading...');
        div.load("breakDown-details-" + rowData[0] + ".html", function () {
            $(".loading").removeClass('loading');
            div.find("table");

        });
        console.log(rowData[0]);
        return div;
    };
    //Corrective-details
    $('#setupDetailsTabel tbody').on('click', 'td a.Corrective-details', function () {
        var tr = $(this).closest('tr');
        var row = $(this).closest('table').DataTable().row(tr);
        $('a').not(this).removeClass('select');
        if (row.child.isShown()) {
            row.child.hide();
            tr.removeClass('shown');
            $(this).removeClass('select');
        } else {
            row.child(format21(row.data())).show();
            tr.addClass('shown');
             tr.removeClass('selected');
             $(this).addClass('select');
        }
    });
    function format21 (rowData) {
        var div = $('<div/>').addClass('loading').text('Loading...');
        div.load("Corrective-details-" + rowData[0] + ".html", function () {
            $(".loading").removeClass('loading');
            div.find("table");

        });
        console.log(rowData[0]);
        return div;
    };
    // equType-details
    $('#setupDetailsTabel tbody').on('click', 'td a.equType-details', function () {
        var tr = $(this).closest('tr');
        var row = $(this).closest('table').DataTable().row(tr);
        $('a').not(this).removeClass('select');
        if (row.child.isShown()) {
            row.child.hide();
            tr.removeClass('shown');
            $(this).removeClass('select');
        } else {
            row.child(format22(row.data())).show();
            tr.addClass('shown');
             tr.removeClass('selected');
             $(this).addClass('select');
        }
    });
    function format22 (rowData) {
        var div = $('<div/>').addClass('loading').text('Loading...');
        div.load("equType-details-" + rowData[0] + ".html", function () {
            $(".loading").removeClass('loading');
            div.find("table");

        });
        console.log(rowData[0]);
        return div;
    };
    // equClass-details
    $('#setupDetailsTabel tbody').on('click', 'td a.equClass-details', function () {
        var tr = $(this).closest('tr');
        var row = $(this).closest('table').DataTable().row(tr);
        $('a').not(this).removeClass('select');
        if (row.child.isShown()) {
            row.child.hide();
            tr.removeClass('shown');
            $(this).removeClass('select');
        } else {
            row.child(format23(row.data())).show();
            tr.addClass('shown');
             tr.removeClass('selected');
             $(this).addClass('select');
        }
    });
    function format23 (rowData) {
        var div = $('<div/>').addClass('loading').text('Loading...');
        div.load("equClass-details-" + rowData[0] + ".html", function () {
            $(".loading").removeClass('loading');
            div.find("table");

        });
        console.log(rowData[0]);
        return div;
    };
    // equ-details
    $('#setupDetailsTabel tbody').on('click', 'td a.equ-details', function () {
        var tr = $(this).closest('tr');
        var row = $(this).closest('table').DataTable().row(tr);
        $('a').not(this).removeClass('select');
        if (row.child.isShown()) {
            row.child.hide();
            tr.removeClass('shown');
            $(this).removeClass('select');
        } else {
            row.child(format24(row.data())).show();
            tr.addClass('shown');
             tr.removeClass('selected');
             $(this).addClass('select');
        }
    });
    function format24 (rowData) {
        var div = $('<div/>').addClass('loading').text('Loading...');
        div.load("equ-details-" + rowData[0] + ".html", function () {
            $(".loading").removeClass('loading');
            div.find("table");
        });
        console.log(rowData[0]);
        return div;
    };

    // maintenance-order
    $('#setupDetailsTabel tbody').on('click', 'td.maintenance-order', function () {
        var tr = $(this).closest('tr');
        var row = $(this).closest('table').DataTable().row(tr);
        $('a').not(this).removeClass('select');
        if (row.child.isShown()) {
            row.child.hide();
            tr.removeClass('shown');
            $(this).removeClass('select');
        } else {
            row.child(format40(row.data())).show();
            tr.addClass('shown');
             tr.removeClass('selected');
             $(this).addClass('select');
        }
    });
    function format40 (rowData) {
        var div = $('<div/>').addClass('loading').text('Loading...');
        div.load("maintenance-order-" + rowData[0] + ".html", function () {
            $(".loading").removeClass('loading');
           // div.find("table");
            div.find("table").DataTable({
                "paging": false,
                "searching": false,
                "ordering": false,
                "info":  false,
            });

        });
        console.log(rowData[0]);
        return div;
    };

    // maintenance-order////////////////////////////////
    $('#setupDetailsTabel tbody').on('click', 'td a.order-Parts', function () {

        var tr = $(this).closest('tr');
        var row = $(this).closest('table').DataTable().row(tr);
        $('td').not(this).removeClass('select');
        if (row.child.isShown()) {
            row.child.hide();
            tr.removeClass('shown');
            $(this).removeClass('select');
        } else {
            row.child(format41(row.data())).show();
            tr.addClass('shown');
          tr.removeClass('selected');
           $(this).addClass('select');
        }
        $("#setupDetailsTabel .ChildTable table").removeClass("dataTable");
    });
    function format41 (rowData) {
        var div = $('<div/>').addClass('loading').text('Loading...');
        div.load("order-parts-" + rowData[0] + ".html", function () {
            $(".loading").removeClass('loading');
          // div.find("table");
           div.find("table").DataTable({
            "paging": false,
            "searching": false,
            "ordering": false,
            "info":  false,
        });


        });
        console.log(rowData[0]);
        return div;
    };
    // maintenance-order Equp-Spare-Parts
    $('#setupDetailsTabel tbody').on('click', 'td a.order-technician', function () {
        var tr = $(this).closest('tr');
        var row = $(this).closest('table').DataTable().row(tr);
        $('td').not(this).removeClass('select');
        if (row.child.isShown()) {
            row.child.hide();
            tr.removeClass('shown');
            $(this).removeClass('select');
        } else {
            row.child(format44(row.data())).show();
            tr.addClass('shown');
          tr.removeClass('selected');
           $(this).addClass('select');
        }
    });
    function format44 (rowData) {
        var div = $('<div/>').addClass('loading').text('Loading...');
        div.load("order-technician-" + rowData[0] + ".html", function () {
            $(".loading").removeClass('loading');
           // div.find("table");
            div.find("table").DataTable({
                "paging": false,
                "searching": false,
                "ordering": false,
                "info":  false,
            });

        });
        console.log(rowData[0]);
        return div;
    };


//maintenance-plan-main
$('#setupDetailsTabel tbody').on('click', 'td.maintenance-plan-main', function () {
    var tr = $(this).closest('tr');
    var row = $(this).closest('table').DataTable().row(tr);
    $('a').not(this).removeClass('select');
    if (row.child.isShown()) {
        row.child.hide();
        tr.removeClass('shown');
        $(this).removeClass('select');
    } else {
        row.child(format46(row.data())).show();
        tr.addClass('shown');
         tr.removeClass('selected');
         $(this).addClass('select');
    }
});
function format46 (rowData) {
    var div = $('<div/>').addClass('loading').text('Loading...');
    div.load("maintenance-plan-" + rowData[0] + ".html", function () {
        $(".loading").removeClass('loading');
       // div.find("table");
        div.find("table").DataTable({
            "paging": false,
            "searching": false,
            "ordering": false,
            "info":  false,
        });

    });
    console.log(rowData[0]);
    return div;
    };
// -----------------
    // maintenance-order-card Equp-release-tech
    $('#setupDetailsTabel tbody').on('click', 'td a.release-tech', function () {
        var tr = $(this).closest('tr');
        var row = $(this).closest('table').DataTable().row(tr);
        $('td a').not(this).removeClass('select');
        if (row.child.isShown()) {
            row.child.hide();
            tr.removeClass('shown');
            $(this).removeClass('select');
        } else {
            row.child(format50(row.data())).show();
            tr.addClass('shown');
            tr.removeClass('selected');
            $(this).addClass('select');
        }
    });
    function format50 (rowData) {
        var div = $('<div/>').addClass('loading').text('Loading...');
        div.load("release-tech-" + rowData[0] + ".html", function () {
            $(".loading").removeClass('loading');
            $(".loading").removeClass('loading');
            // div.find("table");
            div.find("table").DataTable({
                "paging": false,
                "searching": false,
                "ordering": false,
                "info": false,
            });
        });
        console.log(rowData[0]);
        return div;
    };
    // maintenance-order-card Equp-Spare-Parts
    $('#setupDetailsTabel tbody').on('click', 'td a.release-spareparts', function () {
        var tr = $(this).closest('tr');
        var row = $(this).closest('table').DataTable().row(tr);
        $('a').not(this).removeClass('select');
        if (row.child.isShown()) {
            row.child.hide();
            tr.removeClass('shown');
            $(this).removeClass('select');
        } else {
            row.child(format51(row.data())).show();
            tr.addClass('shown');
            tr.removeClass('selected');
            $(this).addClass('select');
        }
    });
    function format51 (rowData) {
        var div = $('<div/>').addClass('loading').text('Loading...');
        div.load("release-spareparts-" + rowData[0] + ".html", function () {
            $(".loading").removeClass('loading');
            div.find("table");
        });
        console.log(rowData[0]);
        return div;
    };

    // maintenance-order-card Equp-release-tech
    $('#setupDetailsTabel tbody').on('click', 'td a.Execute-tech', function () {
        var tr = $(this).closest('tr');
        var row = $(this).closest('table').DataTable().row(tr);
        $('a').not(this).removeClass('select');
        if (row.child.isShown()) {
            row.child.hide();
            tr.removeClass('shown');
            $(this).removeClass('select');
        } else {
            row.child(format52(row.data())).show();
            tr.addClass('shown');
            tr.removeClass('selected');
            $(this).addClass('select');
        }
    });
    function format52 (rowData) {
        var div = $('<div/>').addClass('loading').text('Loading...');
        div.load("Execute-tech-" + rowData[0] + ".html", function () {
            $(".loading").removeClass('loading');
            $(".loading").removeClass('loading');
            // div.find("table");
            div.find("table").DataTable({
                "paging": false,
                "searching": false,
                "ordering": false,
                "info": false,
            });
        });
        console.log(rowData[0]);
        return div;
    };

    // maintenance-order-card Equp-Spare-Parts
    $('#setupDetailsTabel tbody').on('click', 'td a.Execute-spareparts', function () {
        var tr = $(this).closest('tr');
        var row = $(this).closest('table').DataTable().row(tr);
        $('a').not(this).removeClass('select');
        if (row.child.isShown()) {
            row.child.hide();
            tr.removeClass('shown');
            $(this).removeClass('select');
        } else {
            row.child(format53(row.data())).show();
            tr.addClass('shown');
            tr.removeClass('selected');
            $(this).addClass('select');
        }
    });
    function format53 (rowData) {
        var div = $('<div/>').addClass('loading').text('Loading...');
        div.load("Execute-spareparts-" + rowData[0] + ".html", function () {
            $(".loading").removeClass('loading');
            div.find("table");
        });
        console.log(rowData[0]);
        return div;
    };

    // maintenance-order-card Equp-Spare-Parts
    $('#setupDetailsTabel tbody').on('click', 'td a.Execute-overhead', function () {
        var tr = $(this).closest('tr');
        var row = $(this).closest('table').DataTable().row(tr);
        $('a').not(this).removeClass('select');
        if (row.child.isShown()) {
            row.child.hide();
            tr.removeClass('shown');
            $(this).removeClass('select');
        } else {
            row.child(format54(row.data())).show();
            tr.addClass('shown');
            tr.removeClass('selected');
            $(this).addClass('select');
        }
    });
    function format54 (rowData) {
        var div = $('<div/>').addClass('loading').text('Loading...');
        div.load("Execute-overhead-" + rowData[0] + ".html", function () {
            $(".loading").removeClass('loading');
            div.find("table");
        });
        console.log(rowData[0]);
        return div;
    };
   // announcment-service
    $('#setupDetailsTabel tbody').on('click', 'td a.announcment-service', function () {
        var tr = $(this).closest('tr');
        var row = $(this).closest('table').DataTable().row(tr);
        $('a').not(this).removeClass('select');
        if (row.child.isShown()) {
            row.child.hide();
            tr.removeClass('shown');
            $(this).removeClass('select');
        } else {
            row.child(format55(row.data())).show();
            tr.addClass('shown');
            tr.removeClass('selected');
            $(this).addClass('select');
        }
    });
    function format55 (rowData) {
        var div = $('<div/>').addClass('loading').text('Loading...');
        div.load("announcment-service-" + rowData[0] + ".html", function () {
            $(".loading").removeClass('loading');
            div.find("table");
        });
        console.log(rowData[0]);
        return div;
    };
    // announcment-parts
    $('#setupDetailsTabel tbody').on('click', 'td a.announcment-parts', function () {
        var tr = $(this).closest('tr');
        var row = $(this).closest('table').DataTable().row(tr);
        $('a').not(this).removeClass('select');
        if (row.child.isShown()) {
            row.child.hide();
            tr.removeClass('shown');
            $(this).removeClass('select');
        } else {
            row.child(format56(row.data())).show();
            tr.addClass('shown');
            tr.removeClass('selected');
            $(this).addClass('select');
        }
    });
    function format56 (rowData) {
        var div = $('<div/>').addClass('loading').text('Loading...');
        div.load("announcment-parts-" + rowData[0] + ".html", function () {
            $(".loading").removeClass('loading');
            div.find("table");
        });
        console.log(rowData[0]);
        return div;
    };

    // announcment-note
    $('#setupDetailsTabel tbody').on('click', 'td a.announcment-note', function () {
        var tr = $(this).closest('tr');
        var row = $(this).closest('table').DataTable().row(tr);
        $('a').not(this).removeClass('select');
        if (row.child.isShown()) {
            row.child.hide();
            tr.removeClass('shown');
            $(this).removeClass('select');
        } else {
            row.child(format57(row.data())).show();
            tr.addClass('shown');
            tr.removeClass('selected');
            $(this).addClass('select');
        }
    });
    function format57 (rowData) {
        var div = $('<div/>').addClass('loading').text('Loading...');
        div.load("announcment-note-" + rowData[0] + ".html", function () {
            $(".loading").removeClass('loading');
            div.find("table");
        });
        console.log(rowData[0]);
        return div;
    };
// announcment-tech
    $('#setupDetailsTabel tbody').on('click', 'td a.announcment-tech', function () {
        var tr = $(this).closest('tr');
        var row = $(this).closest('table').DataTable().row(tr);
        $('a').not(this).removeClass('select');
        if (row.child.isShown()) {
            row.child.hide();
            tr.removeClass('shown');
            $(this).removeClass('select');
        } else {
            row.child(format58(row.data())).show();
            tr.addClass('shown');
            tr.removeClass('selected');
            $(this).addClass('select');
        }
    });
    function format58 (rowData) {
        var div = $('<div/>').addClass('loading').text('Loading...');
        div.load("announcment-tech-" + rowData[0] + ".html", function () {
            $(".loading").removeClass('loading');
            div.find("table");
        });
        console.log(rowData[0]);
        return div;
    };

});
$(document).ready(function () {
    var tablesetup1 = setupDetailsTabel1();
    function setupDetailsTabel1 () {
        var table = $('#setupDetailsTabel1 table').DataTable({
            "dom": 'tilp',
            "stateSave": false,
            "scrollCollapse": true,
            "info": true,
            "paging": true,
            "responsive": true,
            "ordering": false,
            "colReorder": false,
            "lengthMenu": [5, 10, 20],
            "rowReorder": false
        });
        return table;
    };
    FilterDatatable(tablesetup1);
    //Creat table row .create-row
    // $('#setupDetailsTabel1').on('click', '.details-equip1', function () {
    //     $(this).find("i").toggleClass("fa-minus fa-plus")
    //     $(this).closest("table").find("tr.new-row").toggleClass('active');
    //     $('.filter-action li').toggleClass("inactive");

    // });
    // //////details-equip
    $('#setupDetailsTabel1 tbody').on('click', 'td.details-equip1', function () {
        var tr = $(this).closest('tr');
        var row = $(this).closest('table').DataTable().row(tr);
        if (row.child.isShown()) {
            row.child.hide();
            tr.removeClass('shown');
            $(this).children().removeClass('select');
        } else {
            row.child(format4(row.data())).show();
            tr.addClass('shown');
            tr.removeClass('selected');
            $(this).children().addClass('select');
        }
    });
    function format4 (rowData) {
        var div = $('<div/>').addClass('loading').text('Loading...');
        div.load("setupEquipMaint-" + rowData[0] + ".html", function () {
            $(".loading").removeClass('loading');
            div.find("table");

        });
        console.log(rowData[0]);
        return div;
    };


 });
// select-multiple
$(document).ready(function() {
    // select2
    $(".chosen-single").select2({
        width: "100%"
    });

    // select2 multiselection
    $(".chosen-multiple").select2({
        width: "100%",
        multiple: true,
        dropdownAutoWidth: true,
        allowClear: true,
        closeOnSelect: false,
        tags: true
    });
    //  result of selected items
    $('.chosen-multiple').on('select2:close', function(evt) {
        var uldiv       = $(this).siblings('span.select2').find('ul');
        var oldCount    = parseInt(uldiv.find('.count').text());
        oldCount = oldCount || 0;
        var count       = uldiv.find('li').length - 1 + oldCount;
        console.log($(this).siblings('span.select2').find('count'));
        uldiv.html("<li><span class='count'>"+count+"</span> items selected</li>")
    });

});
 $(document).ready(function() {
    //
     $('[data-toggle="tooltip"]').tooltip();
    //
    $(document).on("click", ".filter-btn" , function() {
        $('#groupBy.filter-box').slideUp();
        $('#filter.filter-box').slideToggle();
        $(this).addClass("select")
    });
    $(document).on("click", ".filterBtn" , function() {
        $(this).parent().parent().parent().slideToggle();
    });
    $(document).on("click", ".groupBy-btn" , function() {
    $('#filter.filter-box').slideUp();
    $('#groupBy.filter-box').slideToggle();
});
$(document).on("click", ".priority-btn" , function() {
    $(this).toggleClass("select").removeClass('unselect');
     $('.priority-btn').not(this).removeClass('select').addClass('unselect');
});
//addTask-btn add-task
$(document).on("click", ".addTask-btn" , function() {
    $(".add-task").toggleClass("dnone");
    $(".add-Corrective").addClass("dnone");
    $(".addCorrective-btn").removeClass("select");
    $(this).addClass("select");
});
// addCorrective-btn
    $(document).on("click", ".addCorrective-btn" , function() {
    $(".add-task").addClass("dnone");
    $(".add-Corrective").toggleClass("dnone");
    $(".addTask-btn").removeClass("select");
    $(this).addClass("select");
});
// req-save
$(document).on("click", ".req-save" , function() {
    $("#assign").addClass("select");
    $("#assign").siblings().addClass("select")
});
// req-save
    $(document).on("click", ".inprog-save" , function() {
    $("#results").addClass("select");
    $("#results").siblings().addClass("select")
});
//
$(document).on("click", ".addUploadFile" , function(e) {
    e.preventDefault();
    var newFile = $('.uploadFileBlock') /*.first()*/ ;
    var newFilecontent = newFile.clone().removeClass('uploadFileBlock');
    newFile.before(newFilecontent);
});
$(document).on("click", ".btn-remove" , function() {
    $(this).parent().parent('.uploadBlock').remove();
});

// Assign-Schedule Postponed cancelReq  Assign & Schedule Postponed Cancel Request
    $(document).on("click", 'input[name="AssignStatus"]' , function() {
    if($(this).attr("value")=="Assign & Schedule"){
        $("#Assign-Schedule").removeClass("dnone");
        $("#Postponed").addClass("dnone");
        $("#cancelReq").addClass("dnone");
    }else{};
    if($(this).attr("value")=="Postponed"){
        $("#Postponed").removeClass("dnone");
        $("#cancelReq").addClass("dnone");
        $("#Assign-Schedule").addClass("dnone");
    }
    if($(this).attr("value")=="Cancel Request"){
        $("#cancelReq").removeClass("dnone");
        $("#Assign-Schedule").addClass("dnone");
        $("#Postponed").addClass("dnone");
    }
});
// View type department
$(document).on("click", 'input[name="ViewType"]' , function() {
    if($(this).attr("value")=="location"){
        $("img, span, i").not(this).removeClass("select");
        //  $("span").not(this).removeClass("select");
        $(this).siblings('img, span, i').addClass("select");
        $(".locationView").removeClass("dnone");
        $(".productionView, .departmentView").addClass("dnone");
    };
    if($(this).attr("value")=="Production line"){
        $("img, span, i").not(this).removeClass("select");
        // $("span").not(this).removeClass("select");
        $(this).siblings('img, span, i').addClass("select");
        // $(this).siblings('img').addClass("select");
        // $(this).siblings('span').addClass("select");
        $(".productionView").removeClass("dnone");
        $(".locationView, .departmentView").addClass("dnone");
    };
    if ($(this).attr("value") == "departmant") {
        $("img, span, i").not(this).removeClass("select");
        $(this).siblings('img, span, i').addClass("select");
        $(".departmentView").removeClass("dnone");
        $(".productionView, .locationView").addClass("dnone");
    };
});
// View type
$(document).on("click", '.View-servrity input' , function() {
    if($(this).attr("value")=="high"){
         $("div").not(this).removeClass("select");
        $(this).siblings('div').addClass("select");
    };
    if($(this).attr("value")=="normal"){
        $("div").not(this).removeClass("select");
        $(this).siblings('div').addClass("select");
    };
    if($(this).attr("value")=="Low"){
        $("div").not(this).removeClass("select");
        $(this).siblings('div').addClass("select");
   };
});
// EquiType  AssetsSelect assets
$(document).on("change", '#EquiType' , function() {
        if ( this.value == 'assets'){
          $(".AssetsSelect").removeClass("dnone");
    }else{$(".AssetsSelect").addClass("dnone");
};

});
// basedOn table based-Frequency based-indicators
$(document).on("change", '.basedOn' , function() {
    if ( this.value == 'TimeBased'){
      $(".based-Frequency").removeClass("dnone");
      $(".based-indicators").addClass("dnone");
};
if ( this.value == 'EventBased'){
    $(".based-indicators").removeClass("dnone");
      $(".based-Frequency").addClass("dnone");
};
if ( this.value == 'Closest'){
    $(".based-Frequency").removeClass("dnone");
    $(".based-indicators").removeClass("dnone");
};
});

// Maint-For
$(document).on("change", '.Maint-For' , function() {
    if ( this.value == 'InternalPart'){
        $(this).siblings(".Equp-Parts").removeClass("dnone");
}else{$(this).siblings(".Equp-Parts").addClass("dnone");};

});
// Equp-detalis-btn
     $(document).on("click", '.Equp-detalis-btn', function () {
         $(this).children(".icon-circle").addClass("active");
         $(".Equp-detalis").removeClass("dnone");
         $(".Equp-add-btn").children(".icon-circle").removeClass("active");
         $(".Equp-add").addClass("dnone");
     });
     $(document).on("click", '.Equp-add-btn', function () {
         $(this).children(".icon-circle").addClass("active");
         $(".Equp-detalis-btn").children(".icon-circle").removeClass("active");
         $(".Equp-add").removeClass("dnone");
         $(".Equp-detalis").addClass("dnone");
     });

// addknowledge break-down
$(document).on("click", 'input[name="addKnowldge"]', function() {
    // $(".break-down").toggleClass("dnone");
    // $(this).parent().parent().parent().toggleClass("mt-10");
    if ($(this).is(":checked")) {
        $(".break-down").removeClass("dnone");
        $(this).parent().parent().parent().addClass("mt-10");
    } else {
        $(".break-down").addClass("dnone");
        $(this).parent().parent().parent().removeClass("mt-10");
    }
});

  // Row inline Add
//   $(document).on('click', '.t-add', function() {
//     var newRows = $(this).parent().parent().siblings('.new-row');
//     $('.addRow').hide();
//     newRows.toggleClass('active');
//     newRows.children('.row-inline-editable').addClass("active");
//     newRows.children('.row-inline-editable').each(function(index, value) {
//         var text = $(this).children("input[type='text']").val("");
//         var checkbox = $(this).children("input[type='checkbox']").val("");
//         var select = $(this).children("select").removeAttr('checked');
//     });
// });
// Row inline Add -top add btn in page title-
// $(document).on('click', '.addRowTable', function () {
//     var newRow = $(this).parent().parent().siblings().children().children().children().children().children().find('.new-row');
//     newRow.toggleClass('active');
//     newRow.children('.row-inline-editable').addClass("active");
//     newRow.children('.row-inline-editable').each(function (index, value) {
//         var text = $(this).children("input[type='text']").val("");
//         var checkbox = $(this).children("input[type='checkbox']").val("");
//         var select = $(this).children("select").removeAttr('checked');
//     });
// });
 // Row inline Add ib sub table
//  $(document).on('click', '.add-Row', function() {
//     var newRow = $(this).parent().parent().siblings().children().children().children('.new-row');
//     newRow.toggleClass('active');
//     newRow.children('.row-inline-editable').addClass("active");
//     newRow.children('.row-inline-editable').each(function(index, value) {
//         var text = $(this).children("input[type='text']").val("");
//         var checkbox = $(this).children("input[type='checkbox']").val("");
//         var select = $(this).children("select").removeAttr('checked');
//     });

// });

// info -------------------------------------------------- 19-8-2020 ------------------------------------------------------
$(document).on('click', '.infoview-btn', function(){
    $('.info-view').toggleClass('dnone');
    $('.info-view').siblings().toggleClass('col-md-8 col-lg-9');
    $('.info-view').siblings('info-siblings').toggleClass('col-md-8 col-lg-9');
    $('.filterSec').removeClass('col-md-8 col-lg-9').addClass('col-md-12');
});
//-----------------------------------------------
});
$(document).ready(function() {
  //
  dropCards(lists);
  // open popup appendTo list name
  $("#list2").droppable({
    drop: function () {
      $("#AssignPopup").modal("show");
    },
  });
  $("#list3").droppable({
    drop: function () {
      $("#InProgressPopup").modal("show");
    },
  });
  $("#list4").droppable({
    drop: function () {
      $("#ResultsPopup").modal("show");
    },
  });
  // view card details list-card-title card-desc card-info
    $(document).on("click", "#list1 .list-card", function () {

 $(this).children(".feedback").children("a").modal("#feedbackModal").show();
      window.location.href = "New-request.html";



  });
 $(document).on("click", "#list2 .list-card ", function () {
      $(this).children(".feedback").children("a").modal("#feedbackModal").show();
    window.location.href = "assign-Schedule.html";
  });
  $(document).on("click", "#list3 .list-card", function () {
    window.location.href = "In-Progress.html";
  });
  $(document).on("click", "#list4 .list-card", function () {
    window.location.href = "Results.html";
  });
});
// list collapse
$(document).ready(function() {
    $(".card-collaps").addClass('fas fa-chevron-left');
    $(document).on("click", ".card-collaps" , function() {
        var windowWidth = $(window).width();
    if($(this).hasClass('fa-chevron-left')) {
        $(this).parent().parent().animate({
            "grid-auto-columns": "50px",
            "display": "unset"
        },"easeout");
        $(this).parent().siblings().addClass('dnone');
    } else {
        $(this).parent().parent().animate({
            "grid-auto-columns": "255px"
        },"easeout");
        $(this).parent().siblings().removeClass('dnone');
    };
        $(this).toggleClass('fa-chevron-left fa-chevron-right')
    });
    // card collapse
    $(".side-collaps").addClass('fas fa-chevron-left');
    $(document).on("click", ".side-collaps", function() {
        var windowWidth = $(window).width();
        if($(this).hasClass('fa-chevron-left')) {
            $(this).parent().parent().removeClass('col-md-6').addClass('col-md-11');
            $(this).parent().parent().siblings('.left-card').removeClass('col-md-6').addClass('col-md-1');
            $('.left-card .block-section, .left-card .filter-form-title-info, .left-card .form-title span').addClass('dnone');
        } else {
            $(this).parent().parent().removeClass('col-md-11').addClass('col-md-6');
            $(this).parent().parent().siblings('.left-card').removeClass('col-md-1').addClass('col-md-6');
            $('.left-card .block-section, .left-card .filter-form-title-info, .left-card .form-title span').removeClass('dnone');
        };
        $(this).toggleClass('fa-chevron-left fa-chevron-right')
    });

});
//
$(document).ready(function () {

    //#parts-popup,#warranty-popup,#scrapped-popup,#contract-popup
    $(document).on("click", ".parts-btn" , function() {
        $(this).children(".parts-popup").toggle();
         //$(".parts-popup").not(this).children().hide();
        $(".warranty-popup, .scrapped-popup, .contract-popup").hide();
        $(".indicator-popup table").removeClass("dataTable");
    });
    $(document).on("click", ".warranty-btn" , function() {
        $(this).children(".warranty-popup").toggle();
         //$(".warranty-popup").not(this).children().hide();
        $(".parts-popup ,.scrapped-popup,.contract-popup").hide();
    });
    $(document).on("click", ".scrapped-btn" , function() {
        $(this).children(".scrapped-popup").toggle();
        // $(".scrapped-popup").not(this).children().hide();
        $(".parts-popup,.warranty-popup, .contract-popup").hide();
    });
    $(document).on("click", ".contract-btn" , function() {
        $(this).children(".contract-popup").toggle();
        // $(".contract-popup").not(this).children().hide();
        $(".parts-popup,.warranty-popup,.scrapped-popup").hide();
    });
    $(".printBtn").on("click", function() {
        $(this).siblings("#printPopup").toggleClass("dnone");
    });

    //
    $(document).on("click", ".calenviewby-btn" , function() {
        $(this).toggleClass("select").removeClass('unselect');
        $('.calenviewby-btn').not(this).removeClass('select').addClass('unselect');
    });

    //
    $(document).on("click", ".order-filter a" , function() {
        $(this).toggleClass("select");
        $('.order-filter a').not(this).removeClass('select');
    });

//all-main-btn preve-btn correct-btn preventive corrective

$(document).on("click", ".preve-btn" , function() {
    $('.corrective').parent().parent('tr').hide();
    $('.prevent').parent().parent('tr').show();
 });
$(document).on("click", ".correct-btn" , function() {
    $('.prevent').parent().parent('tr').hide();
    $('.corrective').parent().parent('tr').show();
 });
 $(document).on("click", ".all-main-btn" , function() {
    $('.prevent').parent().parent('tr').show();
    $('.corrective').parent().parent('tr').show();
 });

 //status-new status-released status-paused status-finished status-canceled status-execution
    $(document).on("click", ".status-new-btn", function () {
        $('.status-released ,.status-paused ,.status-finished ,.status-canceled,.status-execution').parent().parent('tr').hide();
        $('.status-new').parent().parent('tr').show();
    });
    $(document).on("click", ".status-released-btn", function () {
        $('.status-new ,.status-paused ,.status-finished ,.status-canceled,.status-execution').parent().parent('tr').hide();
        $('.status-released').parent().parent('tr').show();
    });

    //order-list li
    $(document).on("click", ".order-list li" , function(e) {
        e.preventDefault();
        $(this).toggleClass("select");
        $('.order-list li').not(this).removeClass('select');
    });

    //calendarView-btn agendaView-btn
        $(document).on("click", ".agendaView-btn" , function() {
        $(this).addClass("selected");
        $(".calendarView-btn").removeClass("selected");
        $(".calendarView").addClass("dnone");
        $(".agendaView").removeClass("dnone");
    });
        $(document).on("click", ".calendarView-btn" , function() {
        $(this).addClass("selected");
        $(".agendaView-btn").removeClass("selected");
        $(".calendarView").removeClass("dnone");
        $(".agendaView").addClass("dnone");
    });
    //grid-view-btn tab-view-btn
    $(document).on("click", ".grid-view-btn", function () {
        $(this).addClass("selected");
        $(".tab-view-btn").removeClass("selected");
        $(".tab-view").addClass("dnone");
        $(".grid-view").removeClass("dnone");
    });
    $(document).on("click", ".tab-view-btn", function () {
        $(this).addClass("selected");
        $(".grid-view-btn").removeClass("selected");
        $(".tab-view").removeClass("dnone");
        $(".grid-view").addClass("dnone");
    });

//fc-event-title-frame
$(document).on("click", ".fc-event-title-frame" , function() {
    $(".event-popup").toggleClass("dnone");
});

//  compareSelect compareSec
    $(document).on("change", '.compareSelect', function () {
        if (this.value == "Custom") {
            $(this).parent().siblings(".compareSec").removeClass("dnone");
            $(this).parent(".mt-20").removeClass("mt-20");
        } else {
            $(this).parent().siblings(".compareSec").addClass("dnone");
            $(this).parent().addClass("mt-20");
        };

    });
});
//hide popup if clicked outside
$(document).click(function (e) {
    var $tgt = $(e.target);
    if ($tgt.closest(".parts-btn,.warranty-btn,.scrapped-btn,.contract-btn").length) { } else {
        $(".parts-popup,.warranty-popup,.scrapped-popup,.contract-popup").hide();
    }
});
//
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      themeSystem: 'bootstrap',
      initialView: 'dayGridMonth',
      height: 'auto',
      nowIndicator: true,
      headerToolbar: {
        left: 'prevYear,prev,next,nextYear',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      navLinks: true,
      editable: true,
      selectable: true,
     selectMirror: true,
     eventDidMount: function(info) {
        var tooltip = new Tooltip(info.el, {
            title: info.event.extendedProps.description,
            placement: 'top',
            trigger: 'hover',
            container: 'body'
        });
    },
      events: [
        {
          title: 'All Day Event',
          start: '2020-07-01',
          description: 'description for All Day Event',
          color: '#A10404',
        },
        {
          title: 'Long Event',
          start: '2020-07-07',
          end: '2020-07-10',
          description: 'description for Long Event',
          color: '#10961a',
        },

        {
          title: 'Conference',
          start: '2020-07-11',
          end: '2020-07-13',
          description: 'description for Long Event',
          color: '#C57909',
        },
        {
          title: 'Birthday Party',
          start: '2020-07-13',
          end: '2020-07-143',
          description: 'description for Long Event',
          color: '#A10404',
        },

      ],

    });
    calendar.render();
});
