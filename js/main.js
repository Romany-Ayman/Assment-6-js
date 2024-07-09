/// <reference types= "../@types/jquery"/>
// ==============================sild<<<<<<<<<
$('nav .open').on('click', function(){
   
    $('.linkNav').animate({width:'toggle'},1000)
    const textH3=document.getElementById('texth').innerHTML

    console.log(textH3);

    if(textH3 === "open"){
        document.getElementById('texth').innerHTML='close'
    }else{
        document.getElementById('texth').innerHTML='open'
    }
    
})
// !===============================Duration<<<<<<<<<<<<
$('.headSiger').on('click',function(){
    
    $(this).next(".textSinger").animate({height:'toggle'},1000)});
    

$('a').on('click',function(e){
   
    let href=e.target.getAttribute('href')
   
    let scroeA = $(href).offset().top;
   $('body,html').animate({scrollTop:scroeA} , 2000)

})
// ?===========================inputMaessage<<<<<<<<<
$('#floatingTextarea2').on('input',function(){
    const totleNumber= 100;
    const remaining= totleNumber -$(this).val().length;
    $(".numperMessage").text( remaining);

    if (remaining < 0) {
        $(".numperMessage").css("color", "red");
        $(".numperMessage") .text('your available character finished')
    } else {
        $(".numperMessage").css("color", "green");
    }

})
// ===============================Event<<<<<<<<<<<<<<<<<<<<<<<<<
var eventDate = new Date("Oct 25, 2024 00:00:00").getTime();


let countdownInterval = setInterval(function() {
    let now = new Date().getTime();
    
    let distance = eventDate - now;
    
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    $("#countdownDay").html(days + "Day" );
    $('#countdownHoues').html(hours + "Houes")
    $('#countdownMinute').html( minutes + "Minute")
    $('#countdownSeconds').html(seconds + "Seconds")

    
    if (distance < 0) {
        $(".textEvant").html("The event has started!");
        $(".textEvant").css("color", "red");
    }
}, 500);