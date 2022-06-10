$(".show-sidebar-btn").click(function(){
    console.log("click");
    $(".sidebar").animate({marginLeft:0});
    
});
$(".hide-sidebar-btn").click(function(){
    console.log("click");
    $(".sidebar").animate({marginLeft:"-100%"});
    
});
function go(url){
    setTimeout(function(){
        location.href=`${url}`;
    },500);
}
$(function () {
    $('[data-toggle="popover"]').popover()
  })

$(".full-screen-btn").click(function(){
    let current=$(this).closest(".card");
    current.toggleClass("full-screen-card");
    console.log(current.hasClass("full-screen-card"));
    if(current.hasClass("full-screen-card")){
        $(this).html(`<i class="feather-minimize-2"></i>`);
    }else{
        $(this).html(`<i class="feather-maximize-2"></i>`);
    }
})

$(document).ready(function() {
    $('#List').DataTable();
} );

let screenHeight=$(window).height();
let currentMenuHeight=$(".nav-menu .active").offset().top;

if(currentMenuHeight>screenHeight*0.8){
    $(".sidebar").animate({
        scrollTop:currentMenuHeight

    },1000)
}


let upload=document.getElementById("file");
let dropdown_img=$("#dropdownMenuButton").html();
let upload_btn=document.getElementById("upload_btn");
        console.log("hello");
        console.log(upload);
        console.log(dropdown_img);
        function addProfile(src){
            console.log("hi");
        }
        let photo=$("#file").files;
        console.log(photo);
        upload.onchange(function(){
            let photo=$(this).val();
            console.log(photo);
                const reader=new FileReader();
                reader.addEventListener("load",function(){
                    console.log(reader.result);
                    addProfile(reader.result);
                });
                reader.readAsDataURL(photo);
                
        });

        