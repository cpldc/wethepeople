
// function scrollWtpHeader(){
//     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//         document.getElementById("wtp-header").style.height = "30px";
//         document.getElementById("wtp-header-h2").style.fontSize = "20px";
//         document.getElementById("cpl-logo-lg").style.display = "none";
//         document.getElementById("cpl-logo-text").style.display = "none";
//         document.getElementById("wtp-header-h3").style.display = "none";
//         document.getElementById("cpl-logo-sm").style.display = "inherit";
//     } else {
//         document.getElementById("wtp-header").style.height = "60px";
//         document.getElementById("wtp-header-h2").style.fontSize = "32px";
//         document.getElementById("cpl-logo-lg").style.display = "inherit";
//         document.getElementById("cpl-logo-text").style.display = "inherit";
//         document.getElementById("wtp-header-h3").style.display = "inherit";
//         document.getElementById("cpl-logo-sm").style.display = "none";
//     }
// }
// window.onscroll = function() {scrollWtpHeader()};
$( document ).ready(function() {
    $("#tagtitle").click(function() {
        $(this).children().toggle()
      });
});