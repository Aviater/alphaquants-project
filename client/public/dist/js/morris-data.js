/*Morris Init*/
$(function() {
	"use strict";
	
	if($('#morris_extra_line_chart').length > 0)
		Morris.Line({
        element: 'morris_extra_line_chart',
        data: [{
            period: '2019-08',
            algo: 0
        }, {
            period: '2019-09',
            algo: 0
        }],
        xkey: 'period',
        ykeys: ['algo'],
        labels: ['algo'],
        pointSize: 2,
        fillOpacity: 0,
		lineWidth:2,
		pointStrokeColors:['#4dad44'],
		behaveLikeLine: true,
		grid: false,
		hideHover: 'auto',
		lineColors: ['#4dad44'],
		resize: true,
		gridTextColor:'#878787',
		gridTextFamily:"Roboto"
    });
});
