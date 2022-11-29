$(document).ready(function(){
    let fonte = 16
    $('#aumenta').click(function(){
        if(fonte<=24){
            $('body').css({'font-size': ++fonte+'px'})
            $('.formdescricao label, input, button').css({'font-size': ++fonte+'px'})
            $('.produto-single a').css({'font-size': ++fonte+'px'})
            $('.produto-single p').css({'font-size': ++fonte+'px'})
        }
    })
    $('#diminui').click(function(){
        if(fonte>=12){
            $('body').css({'font-size': --fonte+'px'})
            $('.formdescricao label, input, button').css({'font-size': --fonte+'px'})
            $('.produto-single a').css({'font-size': --fonte+'px'})
            $('.produto-single p').css({'font-size': --fonte+'px'})
        }
    })
})
