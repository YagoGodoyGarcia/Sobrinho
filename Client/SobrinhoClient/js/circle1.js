const sc = require('/home/cristian/Documents/Repositories/Sobrinho/Sobrinho/Client/SobrinhoClient/js/systemcolector');
var memory = sc.getMem();
console.log(memory);
var percent = 55;
( function( $ ){
    $( '#circle' ).progressCircle();

    $( document ).ready(function() {
        var nPercent        = $( '#percent' ).val() ? $( '#percent' ).val() : percent;
        var showPercentText = $( '#percentOn' ).prop( 'checked' );
        var thickness       = $( '#thickness' ).val() ? $( '#thickness' ).val() : 1;
        var circleSize      = $( '#circle-size' ).val() ? $( '#circle-size' ).val() : 300;

        $( '#circle' ).progressCircle({
            nPercent        : nPercent,
            showPercentText : showPercentText,
            thickness       : 1,
            circleSize      : circleSize
        });
    })
})( jQuery );
