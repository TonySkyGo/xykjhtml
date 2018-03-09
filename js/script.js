/*点击小标签替换出做出相应的内容替换*注意确保内没有标签*/
function navcon(divnav, navcss, divcon) {
    $(divnav).click(function (e) {
        e.preventDefault();
        var i = $(this).index();
        $(this).addClass(navcss).siblings().removeClass(navcss);
        $(divcon).eq(i).show().siblings(divcon).hide();
    })
}


$(function(){
	var oIndex = $(".menuItem .active").parents(".menuItem").index(".menuItem");
    $(".menuItem").mouseover(function(){
        $(".menuItem").find("span").removeClass("active");
        $(this).find("span").addClass("active");
        $(this).find(".menuDetails").show();
    });
    $(".menuItem").mouseout(function(event){
        $(this).find("span").removeClass("active");
        $(this).find(".menuDetails").hide();
        //	event.stopPropagation();
    });
    $(".menuContent").mouseout(function(){
    	if(oIndex!=-1)
        	$(".menuItem").eq(oIndex).find("span").addClass("active");
    });
});





