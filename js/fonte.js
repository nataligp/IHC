$(document).ready(function(){
    let fonte = 16
    $('#aumenta').click(function(){
        if(fonte<30){
            //fonte++
            $('body').css({'font-size': ++fonte+'px'})
            $('#cata a').css({'font-size': ++fonte+'px'})
            $('#btncat').css({'font-size': ++fonte+'px'})
            $('#produtos p').css({'font-size': ++fonte+'px'})
            $('#produtos a').css({'font-size': ++fonte+'px'})
            $('#btnformreg').css({'font-size': ++fonte+'px'})
            $('#nome_cad').css({'font-size': ++fonte+'px'})
            $('#email_cad').css({'font-size': ++fonte+'px'})
            $('#tel_cad').css({'font-size': ++fonte+'px'})
            $('#mensagem').css({'font-size': ++fonte+'px'})
            $('#desc').css({'font-size': ++fonte+'px'})
            $('#descinput').css({'font-size': ++fonte+'px'})
        }
    })
    $('#diminui').click(function(){
        if(fonte>10){
            $('body').css({'font-size': --fonte+'px'})
            $('#cata a').css({'font-size': --fonte+'px'})
            $('#btncat').css({'font-size': --fonte+'px'})
            $('#produtos p').css({'font-size': --fonte+'px'})
            $('#produtos a').css({'font-size': --fonte+'px'})
            $('#btnformreg').css({'font-size': --fonte+'px'})
            $('#nome_cad').css({'font-size': --fonte+'px'})
            $('#email_cad').css({'font-size': --fonte+'px'})
            $('#tel_cad').css({'font-size': --fonte+'px'})
            $('#mensagem').css({'font-size': --fonte+'px'})
            $('#desc').css({'font-size': --fonte+'px'})
        }
    })
})
