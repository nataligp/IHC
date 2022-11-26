$(document).ready(function(){
    let fonte = 16
    $('#aumenta').click(function(){
        if(fonte<24){
            //fonte++
            $('body').css({'font-size': ++fonte+'px'})
            $('#cata a').css({'font-size': ++fonte+'px'})
            $('#btncat').css({'font-size': ++fonte+'px'})
            $('#produtos p').css({'font-size': ++fonte+'px'})
            $('#produtos a').css({'font-size': ++fonte+'px'})
            $('#btnformreg').css({'font-size': ++fonte+'px'})
        }
    })
    $('#diminui').click(function(){
        if(fonte>14){
            $('body').css({'font-size': --fonte+'px'})
            $('#cata a').css({'font-size': --fonte+'px'})
            $('#btncat').css({'font-size': --fonte+'px'})
            $('#produtos p').css({'font-size': --fonte+'px'})
            $('#produtos a').css({'font-size': --fonte+'px'})
            $('#btnformreg').css({'font-size': --fonte+'px'})
        }
    })
})
