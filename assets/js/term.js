(function ($) {
    $("#journalContent").load("assets/journal/term_project.html");

    $('#fullSend').on('click', function(e) {
        e.preventDefault();
        
        $.ajax({
            url:'http://j0sh7ran.pythonanywhere.com/review',
            type: "POST",
            data: {
                review: $('#review').val()
            }
        }).done(function (data) {
            
            $("#result").html(data);
        });
    });

})(jQuery);