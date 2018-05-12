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


var percentCpu = 10;
(function runForever(){
    $( '#circle2' ).progressCircle({
        nPercent        : $( '#percent' ).val() ? $( '#percent' ).val() : percentCpu,
        showPercentText : $( '#percentOn' ).prop( 'checked' ),
        thickness       : 1,
        circleSize      : $( '#circle-size' ).val() ? $( '#circle-size' ).val() : 300
    });
    
    setTimeout(runForever, 1000)
    console.log(percentCpu);
    percentCpu = cpuload;
    
})()