
//ading new item in To-Do List
$("input[type = 'text'] ").on("keypress", function (event) {
    if (event.which === 13){ //when pressing enter
        var todoText = $(this).val(); // grabbing new todo text from input
        $(this).val(""); // clear input
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>"); //inserts html code 
    }

});



//click on trash can to remove item from To-Do List
$("ul").on("click","span", function (event) {
    // removes parent/ li
    $(this).parent().fadeOut(500, function () {
        $(this).remove(); // 'this' is referring to the 'li'
    });

    event.stopPropagation(); // stops event bubbling ( li on-click will not be activated )
});

// when ul is clicked, modify the li where user clicked, this way new li-s will change as well 
$("ul").on("click","li", function () {
        $(this).toggleClass("completedTask");
});


// fade input tag when clicking plus icon
$(".fa-plus").on("click",function(){
    $("input").fadeToggle()
});