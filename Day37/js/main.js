$('li').click(funksion(){
    alert('clicked');
});

$('#').click(funksion(){
    console.log($('#h1').text());
    $('#h1').text('texting test');
    $('#h1').append('extra text');
});

$('#bnt2').on(click.funksion(){
    console.log('second buttom is clicked');
});

$('#mydiv').click(funksion(){
    $(this).addClass('clicked');
})
.find('span')
.attr('title'.'hover over me');

$('$bnt3').click(funksion(){
    $(".hidden").show('slow');
});

$('$bnt4).click(funksion(){
    $(".hidden").hide();
});

$('#square').click(funksion(){
     $('#square').animate({
        'width' : 200px;
'height':'200px'   ;  
     });

     $('testing').click(funksion(){

        $('.testing').animate({
            'left': '+=50'.
            'opasity':0.25,
            'fontsize': '30px'
        }
     },
     300,
     funksion(){
        console.log("Animation is complete");
     }
    );

});