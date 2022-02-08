//Define Lists and Relations
var lists = [
            ['#list1', ['#list2','#list6','#list7']],
            ['#list2', ['#list3']],
            ['#list3', ['#list4','#list5','#list6']]
            ];


function dropCards(lists) {
    //Loop through Relations
    $.each(lists, function(listsIndex, listsValue){
        var draggablelist = $(listsValue[0]),
            dropablelists = $(listsValue[1]);
        // Make Original Draggable List Draggable
        $( ".list-card", draggablelist ).draggable({
            cancel: "a.ui-icon", // clicking an icon won't initiate dragging
            revert: "invalid", // when not dropped, the item will revert back to its initial position
            containment: "document",
            helper: "clone",
            cursor: "move"
        });
        // Loop Through Droppable List of Each of the Relations
        $.each(dropablelists, function(dropablelistsIndex, dropablelistsValue){
            // Make One Droppable List Droppable
            dropablelist = $(dropablelistsValue);
            dropablelist.droppable({
                accept: listsValue[0] +" > .list-card",
                classes: {
                    "ui-droppable-active": "ui-state-highlight"
                },
                drop: function( event, ui ) {
                    ui.draggable.appendTo( dropablelistsValue );
                    //Catch This event to make what ever you want
                    //$('#AssignPopup').modal('show');
                   
                }
            });
        });
    });
};
