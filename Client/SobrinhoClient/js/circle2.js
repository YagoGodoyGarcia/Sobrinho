( function( $ ){
    $( '#circle2' ).progressCircle();

    $( document ).ready(function() {
        var nPercent        = $( '#percent' ).val() ? $( '#percent' ).val() : Math.floor((Math.random() * 100) + 1);;
        var showPercentText = $( '#percentOn' ).prop( 'checked' );
        var thickness       = $( '#thickness' ).val() ? $( '#thickness' ).val() : 1;
        var circleSize      = $( '#circle-size' ).val() ? $( '#circle-size' ).val() : 300;

        $( '#circle2' ).progressCircle({
            nPercent        : nPercent,
            showPercentText : showPercentText,
            thickness       : thickness,
            circleSize      : circleSize
        });
    })
})( jQuery );