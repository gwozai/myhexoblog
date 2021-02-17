$('#openNav').click(function () {
    if ($("#mobileNav").css("opacity") == "0") {
        $("#mobileNav").addClass("open");
        $("#mask").addClass("mask")
        $("html").css("overflow", "hidden")
        $("#mobileNav").css("opacity", "1")
        $("#toc").css("display", "none")
        

    } else {
        $("#mobileNav").css("opacity", "0")
        $("#mobileNav").removeClass("open")
    }
})


$('#mask').click(function () {
    $("#mobileNav").removeClass("open")
    $("#mobileNav").css("opacity", "0")
    $("#local-search").css("display", "none")
    $("html").css("overflow", "auto")
    $("#mask").removeClass("mask")
})

$('.search-btn').click(function () {
    if ($("#local-search").css("display") == "none") {
        $("#mask").addClass("mask")
        $("html").css("overflow", "hidden")
        $("#local-search").removeClass('search-animation-min')
        $("#local-search").addClass('search-animation-max');
        $("#local-search").css("display", "block")
        $("#toc").css("display", "none")
        $('#local-search-input').focus();
    } else {
        $("#local-search").removeClass('search-animation-max')
        $("#local-search").css("display", "none")
        
    }
})

$('.search-close-button').click(function () {
    $("html").css("overflow", "auto")
    $("#mask").removeClass("mask")

    $("#local-search").css("display", "none")
})


$(document).on('click', '.rightside-toc', function () {
    if ($("#toc").css("display") == "none") {
        $("#toc").css("display", "block")
        $("#toc").addClass('search-animation-max');
    } else {
        $("#toc").css("display", "none")
        $("#toc").removeClass('search-animation-max');
        
    }
})

// 当鼠标移动到代码块上时执行
$(".highlight-wrap").hover(
    function() {
        // 移除其他代码块的 CopyContent 属性
        $("[CopyContent]").removeAttr("CopyContent");
        // 在当前鼠标所在的元素下的 .code 元素上添加 CopyContent属性
        $(this).find(".code").attr("CopyContent", "");
    }
);

// 代码块复制
var clipboard = new ClipboardJS('.clipboard', {
    target: function() {
        // 返回 CopyContent 属性下的内容
        return document.querySelector("[CopyContent]");
    }
});

//  复制成功
clipboard.on('success', function(event) {
    event.trigger.innerHTML = "<i class='fa fa-check' style='color:green'></i>";
    setTimeout(function () {
        event.trigger.innerHTML = "<i class='fa fa-clipboard'></i>"
    }, 2000)
    event.clearSelection();
});
// 复制失败
clipboard.on('error', function(event) {
    event.trigger.innerHTML = "<i class='fa fa-times' style='color:red'></i>";
    setTimeout(function () {
        event.trigger.innerHTML = "<i class='fa fa-clipboard'></i>"
    }, 2000)
});

// 深色模式
if(localStorage.isDark=="dark"){
    $("body").addClass("dark")
    $("#darkmode i").attr("class","fas fa-sun")
}else{
    $("body").removeClass("dark")
    $("#darkmode i").attr("class","fas fa-moon")
}

$('#darkmode').click(function () {
    if($('#darkmode i').attr("class")=="fas fa-moon"){
        localStorage.isDark = "dark";
        $("body").addClass("dark")
        $("#darkmode i").attr("class","fas fa-sun")
    }else{
        localStorage.isDark = "";
        $("body").removeClass("dark")
        $("#darkmode i").attr("class","fas fa-moon")
    }
})

$(window).resize( function  () {           //当浏览器大小变化时

    if(document.body.clientWidth > 800){
        $("#local-search").css("display", "none")
    }

    if(document.body.clientWidth > 600){
        $("#mask").removeClass("mask")
        $("html").css("overflow", "auto")
        $("#mobileNav").css("opacity", "0")
        $("#mobileNav").removeClass("open")
    }
});


$(function() {
    var wintop = $(window).scrollTop(), docheight = $(document).height(), winheight = $(window).height();
        var num = parseInt((wintop/(docheight-winheight))*100)+1;
        
        if(num==1)num=0
        if(num>100)num=100
        $("#progress").val(num);
        $("#num").text(num+"%");
    $(window).scroll(function() {
        var wintop = $(window).scrollTop(), docheight = $(document).height(), winheight = $(window).height();
        var num = parseInt((wintop/(docheight-winheight))*100)+1;
        
        if(num==1)num=0
        if(num>100)num=100
        $("#progress").val(num);
        $("#num").text(num+"%");

        var rightside = $(window).scrollTop();
        if (rightside > 100) {
            $('#rightside').fadeIn(500);
        } else {
            $('#rightside').fadeOut(500);
        }
    });
});



