/*Morris Init*/
$(function() {
	"use strict";
	
    if($('#morris_area_chart').length > 0)
		// Area Chart
		Morris.Area({
			element: 'morris_area_chart',
			data: [{
				period: '2010 Q1',
				market: 2666,
				ipad: null,
				algo: 2647
			}, {
				period: '2010 Q2',
				market: 2778,
				ipad: 2294,
				algo: 2441
			}, {
				period: '2010 Q3',	
				market: 4912,
				ipad: 1969,
				algo: 2501
			}, {
				period: '2010 Q4',
				market: 3767,
				ipad: 3597,
				algo: 5689
			}, {
				period: '2011 Q1',
				market: 6810,
				ipad: 1914,
				algo: 2293
			}, {
				period: '2011 Q2',
				market: 5670,
				ipad: 4293,
				algo: 1881
			}, {
				period: '2011 Q3',
				market: 4820,
				ipad: 3795,
				algo: 1588
			}, {
				period: '2011 Q4',
				market: 15073,
				ipad: 5967,
				algo: 5175
			}, {
				period: '2012 Q1',
				market: 10687,
				ipad: 4460,
				algo: 2028
			}, {
				period: '2012 Q2',
				market: 8432,
				ipad: 5713,
				algo: 1791
			}],
			xkey: 'period',
			ykeys: ['market', 'ipad', 'algo'],
			labels: ['market', 'iPad', 'iPod Touch'],
			pointSize: 0,
			lineWidth:0,
			fillOpacity: 1,
			pointStrokeColors:['#4dad44', '#ed8739', '#243f6b'],
			behaveLikeLine: true,
			grid: false,
			hideHover: 'auto',
			lineColors: ['#4dad44', '#ed8739', '#243f6b'],
			resize: true,
			redraw: true,
			smooth: true,
			gridTextColor:'#878787',
			gridTextFamily:"Roboto",
		});

    if($('#morris_donut_chart').length > 0) {
		// Donut Chart
		Morris.Donut({
			element: 'morris_donut_chart',
			data: [{
				label: "Download Sales",
				value: 12
			}, {
				label: "In-Store Sales",
				value: 30
			}, {
				label: "Mail-Order Sales",
				value: 20
			}],
			colors: ['#243f6b', '#4dad44', '#fd6421'],
			resize: true,
			labelColor: '#878787',
		});
		$("div svg text").attr("style","font-family: Roboto").attr("font-weight","400");
	}	

    if($('#morris_line_chart').length > 0)
		// Line Chart
		Morris.Line({
			// ID of the element in which to draw the chart.
			element: 'morris_line_chart',
			// Chart data records -- each entry in this array corresponds to a point on
			// the chart.
			data: [{
				d: '2012-10-01',
				visits: 802
			}, {
				d: '2012-10-02',
				visits: 783
			}, {
				d: '2012-10-03',
				visits: 820
			}, {
				d: '2012-10-04',
				visits: 839
			}, {
				d: '2012-10-05',
				visits: 792
			}, {
				d: '2012-10-06',
				visits: 859
			}, {
				d: '2012-10-07',
				visits: 790
			}, {
				d: '2012-10-08',
				visits: 1680
			}, {
				d: '2012-10-09',
				visits: 1592
			}, {
				d: '2012-10-10',
				visits: 1420
			}, {
				d: '2012-10-11',
				visits: 882
			}, {
				d: '2012-10-12',
				visits: 889
			}, {
				d: '2012-10-13',
				visits: 819
			}, {
				d: '2012-10-14',
				visits: 849
			}, {
				d: '2012-10-15',
				visits: 870
			}, {
				d: '2012-10-16',
				visits: 1063
			}, {
				d: '2012-10-17',
				visits: 1192
			}, {
				d: '2012-10-18',
				visits: 1224
			}, {
				d: '2012-10-19',
				visits: 1329
			}, {
				d: '2012-10-20',
				visits: 1329
			}, {
				d: '2012-10-21',
				visits: 1239
			}, {
				d: '2012-10-22',
				visits: 1190
			}, {
				d: '2012-10-23',
				visits: 1312
			}, {
				d: '2012-10-24',
				visits: 1293
			}, {
				d: '2012-10-25',
				visits: 1283
			}, {
				d: '2012-10-26',
				visits: 1248
			}, {
				d: '2012-10-27',
				visits: 1323
			}, {
				d: '2012-10-28',
				visits: 1390
			}, {
				d: '2012-10-29',
				visits: 1420
			}, {
				d: '2012-10-30',
				visits: 1529
			}, {
				d: '2012-10-31',
				visits: 1892
			}, ],
			// The name of the data record attribute that contains x-visitss.
			xkey: 'd',
			// A list of names of data record attributes that contain y-visitss.
			ykeys: ['visits'],
			// Labels for the ykeys -- will be displayed when you hover over the
			// chart.
			labels: ['Visits'],
			// Disables line smoothing
			pointSize: 1,
			pointStrokeColors:['#4dad44'],
			behaveLikeLine: true,
			grid:false,
			gridTextColor:'#878787',
			lineWidth: 2,
			smooth: true,
			hideHover: 'auto',
			lineColors: ['#4dad44'],
			resize: true,
			gridTextFamily:"Roboto"
		});

	if($('#morris_bar_chart').length > 0)
	   // Bar Chart
		Morris.Bar({
			element: 'morris_bar_chart',
			data: [{
				device: 'market',
				geekbench: 136
			}, {
				device: 'market 3G',
				geekbench: 137
			}, {
				device: 'market 3GS',
				geekbench: 275
			}, {
				device: 'market 4',
				geekbench: 380
			}, {
				device: 'market 4S',
				geekbench: 655
			}, {
				device: 'market 5',
				geekbench: 1571
			}],
			xkey: 'device',
			ykeys: ['geekbench'],
			labels: ['Geekbench'],
			barRatio: 0.4,
			xLabelAngle: 35,
			pointSize: 1,
			barOpacity: 1,
			pointStrokeColors:['#4dad44'],
			behaveLikeLine: true,
			grid: false,
			gridTextColor:'#878787',
			hideHover: 'auto',
			barColors: ['#4dad44'],
			resize: true,
			gridTextFamily:"Roboto"
		});
	
	if($('#morris_extra_line_chart').length > 0)
		Morris.Line({
        element: 'morris_extra_line_chart',
        data: [{
            period: '2015-12',
            algo: 0
        }, {
            period: '2016-01',
            algo: 2.05
        }, {
            period: '2016-02',
            algo: 3.17
        }, {
            period: '2016-03',
            algo: 5.23
        }, {
            period: '2016-04',
            algo: 4.48
        }, {
            period: '2016-05',
            algo: 4.74
        }, {
            period: '2016-06',
            algo: 5.67
        }, {
            period: '2016-07',
            algo: 6.08
        }, {
            period: '2016-08',
            algo: 6.48
        }, {
            period: '2016-09',
            algo: 6.88
        }, {
            period: '2016-10',
            algo: 8.36
        }, {
            period: '2016-11',
            algo: 8.81
        }, {
            period: '2016-12',
            algo: 11.32
        }, {
            period: '2017-01',
            algo: 12.53
        }, {
            period: '2017-02',
            algo: 11.45
        }, {
            period: '2017-03',
            algo: 13.74
        }, {
            period: '2017-04',
            algo: 14.78
        }, {
            period: '2017-05',
            algo: 16.24
        },  {
            period: '2017-06',
            algo: 17.25
        },  {
            period: '2017-07',
            algo: 18.62
        }, {
            period: '2017-08',
            algo: 19.08
        }, {
            period: '2017-09',
            algo: 21.35
        }, {
            period: '2017-10',
            algo: 20.54
        }, {
            period: '2017-11',
            algo: 21.93
        }, {
            period: '2017-12',
            algo: 23.07
        }, {
            period: '2018-01',
            algo: 22.59
        }, {
            period: '2018-02',
            algo: 22.70
        }, {
            period: '2018-03',
            algo: 31.13
        }, {
            period: '2018-04',
            algo: 28.99
        }, {
            period: '2018-05',
            algo: 29.77
        }, {
            period: '2018-06',
            algo: 31.93
        }, {
            period: '2018-07',
            algo: 34.88
        }, {
            period: '2018-08',
            algo: 35.54
        }, {
            period: '2018-09',
            algo: 38.11
        }, {
            period: '2018-10',
            algo: 39.09
        }, {
            period: '2018-11',
            algo: 47.86
        }, {
            period: '2018-12',
            algo: 50.04
        }, {
            period: '2019-01',
            algo: 52.81
        }, {
            period: '2019-02',
            algo: 53.93
        }, {
            period: '2019-03',
            algo: 53.29
        }, {
            period: '2019-04',
            algo: 52.98
        }, {
            period: '2019-05',
            algo: 53.54
        }, {
            period: '2019-06',
            algo: 56.09
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
	
	if($('#morris_extra_bar_chart').length > 0)
		// Morris bar chart
		Morris.Bar({
			element: 'morris_extra_bar_chart',
			data: [{
				y: '2006',
				a: 100,
				b: 90,
				c: 60
			}, {
				y: '2007',
				a: 75,
				b: 65,
				c: 40
			}, {
				y: '2008',
				a: 50,
				b: 40,
				c: 30
			}, {
				y: '2009',
				a: 75,
				b: 65,
				c: 40
			}, {
				y: '2010',
				a: 50,
				b: 40,
				c: 30
			}, {
				y: '2011',
				a: 75,
				b: 65,
				c: 40
			}, {
				y: '2012',
				a: 100,
				b: 90,
				c: 40
			}],
			xkey: 'y',
			ykeys: ['a', 'b', 'c'],
			labels: ['A', 'B', 'C'],
			barColors:['#4dad44', '#243f6b', '#f33923'],
			barOpacity:1,
			hideHover: 'auto',
			grid: false,
			resize: true,
			gridTextColor:'#878787',
			gridTextFamily:"Roboto"
		});

});
