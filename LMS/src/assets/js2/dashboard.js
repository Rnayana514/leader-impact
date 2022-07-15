(function ($) {
  "use strict";
  $(function () {
    Chart.defaults.global.legend.labels.usePointStyle = true;

    if ($("#inline-datepicker").length) {
      $("#inline-datepicker").datepicker({
        enableOnReadonly: true,
        todayHighlight: true,
        templates: {
          leftArrow: '<i class="mdi mdi-chevron-left"></i>',
          rightArrow: '<i class="mdi mdi-chevron-right"></i>',
        },
      });
    }
    // flot chart bar script

    // flot chart script
    $(function () {
      "use strict";

      var dashData2 = [
        [0, 20],
        [1, 68],
        [8, 64],
        [9, 67],
        [10, 66],
        [11, 64],
        [12, 62],
        [13, 63],
        [14, 60],
        [15, 64],
        [16, 10],
        [17, 60],
        [18, 62],
        [19, 63],
        [20, 67],
        [21, 64],
        [22, 62],
        [23, 63],
        [24, 62],
        [25, 67],
        [26, 63],
        [27, 65],
        [28, 68],
        [29, 70],
        [30, 73],
        [31, 72],
        [32, 79],
        [33, 72],
        [34, 76],
        [35, 72],
        [36, 73],
        [37, 71],
        [38, 78],
        [47, 75],
        [48, 71],
        [49, 72],
        [50, 75],
        [51, 61],
        [52, 60],
        [53, 66],
        [54, 66],
        [55, 60],
        [56, 64],
        [57, 61],
        [58, 60],
        [59, 64],
        [60, 61],
        [61, 66],
        [62, 61],
        [63, 65],
        [73, 64],
        [74, 61],
        [75, 65],
        [76, 61],
        [77, 60],
        [78, 60],
        [79, 90],
      ];

      var dashData3 = [
        [0, 15],
        [1, 15],
        [2, 13],
        [3, 14],
        [10, 16],
        [11, 14],
        [12, 12],
        [13, 13],
        [14, 10],
        [15, 14],
        [16, 13],
        [17, 10],
        [18, 12],
        [19, 13],
        [20, 17],
        [21, 14],
        [22, 12],
        [23, 13],
        [24, 12],
        [25, 17],
        [26, 13],
        [27, 15],
        [28, 10],
        [29, 10],
        [30, 13],
        [31, 12],
        [50, 15],
        [51, 11],
        [52, 10],
        [53, 16],
        [54, 16],
        [55, 10],
        [56, 14],
        [57, 11],
        [58, 10],
        [59, 14],
        [60, 11],
        [61, 16],
        [62, 11],
        [63, 15],
        [71, 13],
        [72, 10],
        [73, 14],
        [74, 11],
        [75, 15],
        [76, 11],
        [77, 10],
        [78, 10],
        [79, 15],
      ];

      var dashData4 = [
        [0, 25],
        [1, 25],
        [2, 23],
        [3, 24],
        [4, 22],
        [12, 22],
        [13, 23],
        [14, 20],
        [15, 24],
        [16, 23],
        [17, 20],
        [18, 22],
        [19, 23],
        [20, 27],
        [21, 24],
        [29, 25],
        [30, 23],
        [31, 22],
        [32, 23],
        [33, 25],
        [34, 22],
        [35, 22],
        [36, 26],
        [37, 21],
        [38, 28],
        [39, 27],
        [40, 28],
        [41, 25],
        [42, 24],
        [43, 24],
        [44, 24],
        [45, 20],
        [46, 28],
        [47, 26],
        [48, 21],
        [49, 22],
        [56, 24],
        [57, 21],
        [58, 20],
        [59, 24],
        [60, 21],
        [61, 26],
        [62, 21],
        [63, 25],
        [64, 25],
        [65, 20],
        [66, 21],
        [67, 24],
        [68, 20],
        [69, 22],
        [70, 20],
        [77, 20],
        [78, 20],
        [79, 25],
      ];

      function bgFlotData(num, val) {
        var data = [];
        for (var i = 0; i < num; ++i) {
          data.push([i, val]);
        }
        return data;
      }

      function bgFlotData(num, val) {
        var data = [];
        for (var i = 0; i < num; ++i) {
          data.push([i, val]);
        }
        return data;
      }

      var plot = $.plot(
        "#flotChart",
        [
          {
            data: dashData4,
            color: "#00D215",
            lines: {
              fillColor: "#00D215",
            },
          },
          {
            data: dashData3,
            color: "#3f50f6",
            lines: {
              fillColor: "#3f50f6",
            },
          },
          {
            data: dashData2,
            color: "#000",
            lines: {
              fillColor: { colors: [{ opacity: 0 }, { opacity: 0 }] },
            },
          },
        ],
        {
          series: {
            shadowSize: 0,
            lines: {
              show: true,
              lineWidth: 2,
              fill: true,
            },
          },
          grid: {
            borderWidth: 0,
            labelMargin: 8,
          },
          yaxis: {
            show: true,
            min: 0,
            max: 100,
            ticks: true,
          },
          xaxis: {
            show: true,
            color: "#fff",
            tickColor: "#eee",
            ticks: [
              [0, "January"],
              [10, "February"],
              [20, "March "],
              [30, "April "],
              [40, "May"],
              [50, "June"],
              [60, "July "],
              [70, "August"],
            ],
          },
        }
      );
    });
  });
})(jQuery);
