$(function(){
    setTimeout(showModel, 2000);
    function showModel(){
        $("#modalBFTutTemp").fadeIn(1000);
    };
    
    $(".close").click(function(){
        $("#modalBFTutTemp").hide();
    })

    
});


