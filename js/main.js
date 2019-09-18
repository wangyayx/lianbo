// JavaScript Document
$(".dropdown-toggle").on("click", function(e){
	$(this).parent().siblings().find(".dropdown-menu").hide();
    $(this).next(".dropdown-menu").slideToggle('medium');

    $(document).one("click", function(){
        $(".dropdown-menu").hide();
    });

    e.stopPropagation();
});
$(".dropdown-menu").on("click", function(e){
    e.stopPropagation();
});

$(".close_dialog").on("click", function(e){
	$(this).parents(".dialog").hide(200)
});

$('.manage_tab a').click(function() {
    var i = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    $('.manage_list .manage_item').eq(i).show().siblings().hide();
});

$('.in_taskbtn').click(function() {
	$(".dialog").show(200)
})
