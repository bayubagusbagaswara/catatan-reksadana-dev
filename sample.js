var chartNav;
function drawNav(pid, startdate, enddate, type) {
  if ($("#mutualfund-nav-chart").length == 0) return false;
  drawChartStock({
    chart: {
      renderTo: "mutualfund-nav-chart",
      zoomType: "x",
      type: type,
      events: {
        load: function () {
          chartNav = this;
          chartNav.showLoading();
          var data = [];
          var date;
          $.getJSON(
            SITEURL +
              "ajax/mutualfund/nav/product/?id=" +
              pid +
              "&startdate=" +
              startdate +
              "&enddate=" +
              enddate,
            function (json) {
              var min_val = 0;
              if (json.status) {
                $.each(json.data, function (key, val) {
                  var series = { id: val.pid, name: val.pname, data: [] };
                  var added = false;
                  $.each(val.nav, function (key2, val2) {
                    date = val2.date.split("-");
                    var x = Date.UTC(date[0], date[1] - 1, date[2], 0, 0, 0);
                    if (added === false) {
                      chartNav.scroller.xAxis.dataMin = x;
                      series.data.push([x, parseFloat(0)]);
                      added = true;
                      return;
                    }
                    series.data.push([x, parseFloat(val2.value)]);
                  });
                  chartNav.addSeries(series, false);
                });
                chartNav.redraw();
                chartNav.hideLoading();
              } else {
                chartNav.showLoading("No results");
              }
            }
          );
        },
      },
    },
    title: {
      style: { color: "#52b411 !important" },
      text: "GRAFIK NILAI ASET BERSIH",
    },
    scrollbar: { enabled: true },
    navigator: { enabled: true },
    exporting: { buttons: { contextButton: { enabled: false } } },
    credits: {
      enabled: true,
      href: "http://www.bareksa.com",
      text: "aaaaaaaaa.com",
    },
    tooltip: {
      formatter: function () {
        var s = "";
        $.each(this.points, function (i, point) {
          s += "<b>" + this.series.name + "</b><br>";
        });
        s +=
          Highcharts.dateFormat("%b %e, %Y", this.x) +
          "<br>" +
          formatNumber(this.y, 2, $.cookie("clang"));
        return s;
      },
    },
  });
}
function drawNav2(period, pid, startdate, enddate, type, judul) {
  var cperiod = period;
  $.getJSON(
    SITEURL +
      "ajax/mutualfund/nav/product1/?id=" +
      pid +
      "&cperiod=" +
      cperiod +
      "&startdate=" +
      startdate +
      "&enddate=" +
      enddate +
      "&requested_page=profile.graph",
    function (json) {
      var data = [];
      var i = 0;
      if (json.status) {
        if (json.data.auth) {
          $("#periodeAwal").val(json.data.startdate);
          $("#periodeAkhir").val(json.data.enddate);
          $.each(json.data.datas, function (key, val) {
            var lastValx = 0;
            var lastValy = 0;
            var pushed = false;
            $.each(val.nav, function (k, v) {
              var tgl = v.date.split("-");
              var x = Date.UTC(tgl[0], tgl[1] - 1, tgl[2]);
              data.push([x, parseFloat(v.value)]);
            });
          });
          var chart = drawChart({
            chart: {
              renderTo: "mutualfund-nav-chart",
              type: "area",
              zoomType: "x",
              borderRadius: 0,
            },
            scrollbar: { enabled: true },
            navigator: {
              enabled: true,
              adaptToUpdatedData: false,
              outlineColor: "#52b411",
              outlineWidth: 2,
              baseSeries: 0,
              series: {
                type: "areaspline",
                color: "#dcf3d6",
                lineColor: "#52b411",
                fillOpacity: 0.8,
                dataGrouping: { smoothed: true },
                lineWidth: 1,
                marker: { enabled: false },
              },
              maskFill: "rgba(174, 190, 60, 0.4)",
            },
            rangeSelector: { enabled: false },
            plotOptions: {
              area: {
                fillColor: "#dcf3d6",
                lineWidth: 1,
                marker: {
                  enabled: false,
                  states: {
                    hover: {
                      enabled: true,
                      lineColor: "#FFFFFF",
                      fillColor: "#7d7d7d",
                      radius: 5,
                    },
                  },
                },
                shadow: false,
                states: { hover: { lineWidth: 1 } },
                threshold: null,
              },
            },
            title: { style: { color: "#52b411 !important" }, text: judul },
            subtitle: {
              style: { color: "#666666 !important", margin: "5px" },
              text: json.data.subtitle,
            },
            xAxis: { type: "datetime" },
            yAxis: {
              lineColor: "#7d7d7d",
              lineWidth: 1,
              tickColor: "#666",
              tickWidth: 1,
              tickLength: 3,
              gridLineColor: "#ddd",
              title: {
                text: "NAV/Unit (" + json.data.unitY + ")",
                rotation: -90,
                margin: 10,
              },
              labels: {
                formatter: function () {
                  return formatNumber(
                    this.value,
                    json.data.unitY == "USD" ? 2 : 0,
                    $.cookie("clang")
                  );
                },
                align: "right",
                x: -13,
                y: -2,
              },
            },
            series: [{ name: "NAV", data: data }],
            exporting: { buttons: { contextButton: { enabled: false } } },
            credits: {
              enabled: true,
              href: "http://www.bareksa.com",
              text: "Bareksa.com",
            },
            tooltip: { pointFormat: "NAV: {point.y:.2f}" },
          });
        } else {
          window.location.href = json.data.redirect_url;
        }
      } else {
        chart.showLoading("No results");
      }
    }
  );
}
var chartReturn;
function drawReturn(pid, startdate, enddate, type) {
  drawChartStock({
    chart: {
      renderTo: "mutualfund-return-chart",
      type: type,
      events: {
        load: function () {
          chartReturn = this;
          chart.showLoading();
          var data = [];
          var date;
          $.getJSON(
            SITEURL +
              "ajax/mutualfund/return/product/?id=" +
              pid +
              "&startdate=" +
              startdate +
              "&enddate=" +
              enddate,
            function (json) {
              chartReturn.counters.color = 0;
              var min_val = 0;
              if (json.status) {
                $.each(json.data, function (key, val) {
                  var series = { id: val.pid, name: val.pname, data: [] };
                  $.each(val.return, function (key2, val2) {
                    date = val2.date.split("-");
                    var x = Date.UTC(date[0], date[1] - 1, date[2]);
                    series.data.push([x, parseFloat(val2.oneday)]);
                  });
                  chartReturn.addSeries(series, false);
                });
                chartReturn.redraw();
                chartReturn.hideLoading();
                chartReturn.rangeSelector.clickButton(
                  3,
                  { type: "year", count: 1 },
                  true
                );
              } else {
                chartReturn.showLoading("No results");
              }
            }
          );
        },
      },
    },
    scrollbar: { enabled: true },
    exporting: { buttons: { contextButton: { enabled: false } } },
    navigator: { enabled: true },
  });
}
function drawNormalize(pid, startdate, enddate, type) {
  var chart = drawChartStock({
    chart: { renderTo: "mutualfund-normalized-chart", type: type },
    rangeSelector: {
      enabled: true,
      buttons: [
        { type: "month", count: 1, text: "1m" },
        { type: "month", count: 3, text: "3m" },
        { type: "month", count: 6, text: "6m" },
        { type: "year", count: 1, text: "1y" },
        { type: "year", count: 3, text: "3y" },
        { type: "year", count: 5, text: "5y" },
        { type: "year", count: 10, text: "10y" },
        { type: "all", text: "All" },
      ],
    },
    exporting: { buttons: { contextButton: { enabled: false } } },
    tooltip: {
      formatter: function () {
        var s = "";
        $.each(this.points, function (i, point) {
          s +=
            '<span style="font-weight: bold; color:' +
            point.series.color +
            '">' +
            point.series.name +
            "</span><br />Date: " +
            Highcharts.dateFormat("%A, %b %e, %Y", point.x) +
            "<br />Return: " +
            Highcharts.numberFormat(point.y, 2) +
            "%<br />";
        });
        return s;
      },
      shared: true,
    },
  });
  chart.showLoading();
  var data = [];
  var date;
  $.getJSON(
    SITEURL +
      "ajax/mutualfund/return/product/?id=" +
      pid +
      "&startdate=" +
      startdate +
      "&enddate=" +
      enddate,
    function (json) {
      chart.counters.color = 0;
      var min_val = 0;
      var added = false;
      if (json.status) {
        $.each(json.data, function (key, val) {
          var series = { id: val.pid, name: val.pname, data: [] };
          added = false;
          $.each(val.return, function (key2, val2) {
            date = val2.date.split("-");
            var x = Date.UTC(date[0], date[1] - 1, date[2]);
            if (added === false) {
              series.data.push([x, parseFloat(0)]);
              added = true;
              return true;
            }
            series.data.push([x, parseFloat(val2.oneday * 100)]);
          });
          chart.addSeries(series, false);
        });
        chart.redraw();
        chart.hideLoading();
        chart.rangeSelector.clickButton(3, { type: "year", count: 1 }, true);
      } else {
        chart.showLoading("No results");
      }
    }
  );
}
var chartNN;
function drawNormalizeNav(
  period,
  pid,
  startdate,
  enddate,
  type,
  judul,
  subjudul
) {
  var cperiod = period;
  var chart = drawChartStock({
    chart: {
      renderTo: "mutualfund-normalized-chart",
      zoomType: "x",
      marginLeft: 70,
      type: type,
    },
    scrollbar: { enabled: true },
    navigator: {
      enabled: true,
      adaptToUpdatedData: false,
      outlineColor: "#52b411",
      outlineWidth: 2,
      baseSeries: 0,
      series: {
        type: "areaspline",
        color: "#dcf3d6",
        lineColor: "#52b411",
        fillOpacity: 0.8,
        dataGrouping: { smoothed: true },
        lineWidth: 1,
        marker: { enabled: false },
      },
      maskFill: "rgba(174, 190, 60, 0.4)",
    },
    title: { style: { color: "#52b411 !important" }, text: judul },
    subtitle: {
      style: { color: "#666666 !important", margin: "5px" },
      text: "Sub Title",
    },
    yAxis: {
      lineColor: "#7d7d7d",
      lineWidth: 1,
      tickColor: "#666",
      tickWidth: 1,
      tickLength: 3,
      gridLineColor: "#ddd",
      title: { text: "Return (%)", rotation: -90, margin: 10 },
      labels: { align: "right", x: -13, y: -2 },
    },
    exporting: { buttons: { contextButton: { enabled: false } } },
    legend: { enabled: true, borderWidth: 0, itemDistance: 20 },
    tooltip: {
      formatter: function () {
        var s = "";
        var date = Highcharts.dateFormat("%A, %b %e, %Y", this.points[0].x);
        s += "Date: " + date + "<br />";
        $.each(this.points, function (i, point) {
          s +=
            '<span style="font-weight: bold; color:' +
            point.series.color +
            '">' +
            point.series.name +
            "</span>: " +
            Highcharts.numberFormat(point.y, 2) +
            "%<br />";
        });
        return s;
      },
      shared: true,
    },
  });
  var data = [];
  var date;
  $.getJSON(
    SITEURL +
      "ajax/mutualfund/nav/product1/?id=" +
      pid +
      "&cperiod=" +
      cperiod +
      "&startdate=" +
      startdate +
      "&enddate=" +
      enddate +
      "&requested_page=compare",
    function (json) {
      var added = false;
      if (json.status) {
        if (json.data.auth) {
          chart.showLoading();
          $("#periodeAwal").val(json.data.startdate);
          $("#periodeAkhir").val(json.data.enddate);
          $.each(json.data.datas, function (key, val) {
            var series = { id: val.pid, name: val.pname, data: [] };
            added = false;
            var firstVal = 0;
            var i = 0;
            $.each(val.nav, function (key2, val2) {
              if (i == 0 || firstVal == 0) firstVal = val2.value;
              i++;
              date = val2.date.split("-");
              var x = Date.UTC(date[0], date[1] - 1, date[2]);
              if (added === false) {
                chart.scroller.xAxis.dataMin = x;
                series.data.push([x, parseFloat(0)]);
                added = true;
                return;
              }
              var nnav = ((val2.value - firstVal) * 100) / firstVal;
              series.data.push([x, parseFloat(nnav)]);
            });
            chart.addSeries(series, false);
          });
          chart.redraw();
          chart.setTitle({ text: judul }, { text: json.data.subtitle });
          chart.hideLoading();
        } else {
          alert("blabla");
        }
      } else {
        chart.showLoading("No results");
      }
    }
  );
  return chart;
}
function drawNormalizeNavIndex(
  period,
  pid,
  sector_code,
  product_type_id,
  startdate,
  enddate,
  type,
  judul,
  subjudul
) {
  var cperiod = period;
  var chart = drawChartStock({
    chart: {
      renderTo: "mutualfund-normalized-chart",
      zoomType: "x",
      marginLeft: 70,
      type: type,
    },
    scrollbar: { enabled: true },
    navigator: {
      enabled: true,
      adaptToUpdatedData: false,
      outlineColor: "#52b411",
      outlineWidth: 2,
      baseSeries: 0,
      series: {
        type: "areaspline",
        color: "#dcf3d6",
        lineColor: "#52b411",
        fillOpacity: 0.8,
        dataGrouping: { smoothed: true },
        lineWidth: 1,
        marker: { enabled: false },
      },
      maskFill: "rgba(174, 190, 60, 0.4)",
    },
    title: { style: { color: "#52b411 !important" }, text: judul },
    subtitle: {
      style: { color: "#666666 !important", margin: "5px" },
      text: "Sub Title",
    },
    yAxis: {
      lineColor: "#7d7d7d",
      lineWidth: 1,
      title: { text: "Return (%)", rotation: -90, margin: 10 },
      labels: {
        labels: {
          formatter: function () {
            return formatNumber(this.value, 0, $.cookie("clang"));
          },
        },
        align: "right",
        x: -13,
        y: -2,
      },
    },
    exporting: { buttons: { contextButton: { enabled: false } } },
    legend: { enabled: true, borderWidth: 0, itemDistance: 70 },
    tooltip: {
      formatter: function () {
        var s = "";
        var date = Highcharts.dateFormat("%A, %b %e, %Y", this.points[0].x);
        s += "Date: " + date + "<br />";
        $.each(this.points, function (i, point) {
          s +=
            '<span style="font-weight: bold; color:' +
            point.series.color +
            '">' +
            point.series.name +
            "</span>: " +
            Highcharts.numberFormat(point.y, 2) +
            "%<br />";
        });
        return s;
      },
      shared: true,
    },
  });
  chart.showLoading();
  var data = [];
  var date;
  $.getJSON(
    SITEURL +
      "ajax/mutualfund/nav/product_index/?id=" +
      pid +
      "&sid=" +
      sector_code +
      "&mfid=" +
      product_type_id +
      "&cperiod=" +
      cperiod +
      "&startdate=" +
      startdate +
      "&enddate=" +
      enddate,
    function (json) {
      chart.counters.color = 0;
      var min_val = 0;
      var added = false;
      if (json.status) {
        if (json.data.auth) {
          $("#periodeAwal").val(json.data.startdate);
          $("#periodeAkhir").val(json.data.enddate);
          if (json.data.mfs) {
            $.each(json.data.mfs, function (key, val) {
              var series = { id: val.pid, name: val.pname, data: [] };
              added = false;
              var firstVal = 0;
              var i = 0;
              var lastValx = 0;
              var lastValy = 0;
              $.each(val.nav, function (key2, val2) {
                if (i == 0 || firstVal == 0) firstVal = val2.value;
                i++;
                date = val2.date.split("-");
                var x = Date.UTC(date[0], date[1] - 1, date[2]);
                var nnav = ((val2.value - firstVal) * 100) / firstVal;
                lastValy = nnav;
                lastValx = x;
                series.data.push([x, parseFloat(nnav)]);
              });
              chart.addSeries(series, false);
            });
          }
          if (json.data.sis) {
            $.each(json.data.sis, function (key, val) {
              var series = {
                id: val.sector_code,
                name: val.sector_code,
                data: [],
              };
              added = false;
              var firstVal = 0;
              var i = 0;
              var lastValx = 0;
              var lastValy = 0;
              $.each(val.index, function (key2, val2) {
                if (i == 0 || firstVal == 0) firstVal = val2.value;
                i++;
                date = val2.recdate.split("-");
                var x = Date.UTC(date[0], date[1] - 1, date[2]);
                var nnav = ((val2.value - firstVal) * 100) / firstVal;
                lastValy = nnav;
                lastValx = x;
                series.data.push([x, parseFloat(nnav)]);
              });
              chart.addSeries(series, false);
            });
          }
          if (json.data.mfis) {
            $.each(json.data.mfis, function (key, val) {
              var series = {
                id: val.product_type_id,
                name: val.product_type_name,
                data: [],
              };
              added = false;
              var firstVal = 0;
              var i = 0;
              var lastValx = 0;
              var lastValy = 0;
              $.each(val.index, function (key2, val2) {
                if (i == 0 || firstVal == 0) firstVal = val2.value;
                i++;
                date = val2.date.split("-");
                var x = Date.UTC(date[0], date[1] - 1, date[2]);
                var nnav = ((val2.value - firstVal) * 100) / firstVal;
                lastValy = nnav;
                lastValx = x;
                series.data.push([x, parseFloat(nnav)]);
              });
              chart.addSeries(series, false);
            });
          }
          chart.redraw();
          chart.setTitle({ text: judul }, { text: json.data.subtitle });
          chart.hideLoading();
        } else {
          window.location.href = json.data.redirect_url;
        }
      } else {
        chart.showLoading("No results");
      }
    }
  );
  return chart;
}
function drawNormalizeNavMFIndex(
  period,
  pid,
  b_code,
  startdate,
  enddate,
  type,
  judul,
  subjudul
) {
  var cperiod = period;
  var chart = drawChartStock({
    chart: {
      renderTo: "mutualfund-normalized-chart",
      zoomType: "x",
      marginLeft: 70,
      type: type,
    },
    scrollbar: { enabled: true },
    navigator: {
      enabled: true,
      adaptToUpdatedData: false,
      outlineColor: "#52b411",
      outlineWidth: 2,
      baseSeries: 0,
      series: {
        type: "areaspline",
        color: "#dcf3d6",
        lineColor: "#52b411",
        fillOpacity: 0.8,
        dataGrouping: { smoothed: true },
        lineWidth: 1,
        marker: { enabled: false },
      },
      maskFill: "rgba(174, 190, 60, 0.4)",
    },
    title: { style: { color: "#52b412 !important" }, text: judul },
    subtitle: {
      style: { color: "#666666 !important", margin: "5px" },
      text: "Sub Title",
    },
    yAxis: {
      lineColor: "#7d7d7d",
      lineWidth: 1,
      title: { text: "Return (%)", rotation: -90, margin: 10 },
      labels: { align: "right", x: -13, y: -2 },
    },
    exporting: { buttons: { contextButton: { enabled: false } } },
    legend: { enabled: true, borderWidth: 0, itemDistance: 70 },
    tooltip: {
      formatter: function () {
        var s = "";
        var date = Highcharts.dateFormat("%A, %b %e, %Y", this.points[0].x);
        s += "Date: " + date + "<br />";
        $.each(this.points, function (i, point) {
          s +=
            '<span style="font-weight: bold; color:' +
            point.series.color +
            '">' +
            point.series.name +
            "</span>: " +
            Highcharts.numberFormat(point.y, 2) +
            "%<br />";
        });
        return s;
      },
      shared: true,
    },
  });
  chart.showLoading();
  var data = [];
  var date;
  $.getJSON(
    SITEURL +
      "ajax/mutualfund/nav/productmf_index/?id=" +
      pid +
      "&bcode=" +
      b_code +
      "&cperiod=" +
      cperiod +
      "&startdate=" +
      startdate +
      "&enddate=" +
      enddate,
    function (json) {
      chart.counters.color = 0;
      var min_val = 0;
      var added = false;
      if (json.status) {
        if (json.data.auth) {
          $("#periodeAwal").val(json.data.startdate);
          $("#periodeAkhir").val(json.data.enddate);
          if (json.data.mfs) {
            $.each(json.data.mfs, function (key, val) {
              var series = { id: val.pid, name: val.pname, data: [] };
              added = false;
              var firstVal = 0;
              var i = 0;
              var lastValx = 0;
              var lastValy = 0;
              $.each(val.nav, function (key2, val2) {
                if (i == 0 || firstVal == 0) firstVal = val2.value;
                i++;
                date = val2.date.split("-");
                var x = Date.UTC(date[0], date[1] - 1, date[2]);
                if (added === false) {
                  chart.scroller.xAxis.dataMin = x;
                  series.data.push([x, parseFloat(0)]);
                  added = true;
                  return;
                }
                var nnav = ((val2.value - firstVal) * 100) / firstVal;
                lastValy = nnav;
                lastValx = x;
                series.data.push([x, parseFloat(nnav)]);
              });
              chart.addSeries(series, false);
            });
          }
          if (json.data.benchmarks) {
            $.each(json.data.benchmarks, function (key, val) {
              var series = { id: val.b_code, name: val.b_name, data: [] };
              added = false;
              var firstVal = 0;
              var i = 0;
              var lastValx = 0;
              var lastValy = 0;
              $.each(val.value, function (key2, val2) {
                if (i == 0 || firstVal == 0) firstVal = val2.price;
                i++;
                date = val2.date.split("-");
                var x = Date.UTC(date[0], date[1] - 1, date[2]);
                if (added === false) {
                  chart.scroller.xAxis.dataMin = x;
                  series.data.push([x, parseFloat(0)]);
                  added = true;
                  return;
                }
                var nnav = ((val2.price - firstVal) * 100) / firstVal;
                lastValy = nnav;
                lastValx = x;
                series.data.push([x, parseFloat(nnav)]);
              });
              chart.addSeries(series, false);
            });
          }
          chart.redraw();
          chart.setTitle({ text: judul }, { text: json.data.subtitle });
          chart.hideLoading();
        } else {
          window.location.href = json.data.redirect_url;
        }
      } else {
        chart.showLoading("No results");
      }
    }
  );
  return chart;
}
function drawTotalMarketShare(
  periode,
  categori,
  mi_id,
  periode_awal,
  periode_akhir,
  currency,
  judul
) {
  var chart = drawChart({
    chart: {
      renderTo: "chartTotalMarketShare",
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      marginTop: 30,
      marginBottom: 0,
    },
    credits: { enabled: false },
    title: { text: judul },
    tooltip: { pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>" },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: { enabled: false },
        showInLegend: true,
      },
    },
    exporting: { buttons: { contextButton: { enabled: false } } },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %",
        },
      },
    },
    series: [{ type: "pie", name: "Market Share", data: [] }],
  });
  chart.showLoading();
  $.getJSON(
    SITEURL +
      "ajax/mutualfund/marketshare/data_industri?periode=" +
      periode +
      "&categori=" +
      categori +
      "&mi_id=" +
      mi_id +
      "&periode_awal=" +
      periode_awal +
      "&periode_akhir=" +
      periode_akhir +
      "&currency=" +
      currency,
    function (json) {
      chart.counters.color = 0;
      if (json.status) {
        var data = [];
        $.each(json.data.ms, function (key, val) {
          console.log(val);
          if (val.mftype_name)
            data.push([val.mftype_name, parseFloat(val.persen)]);
        });
        chart.series[0].setData(data);
        chart.redraw();
        chart.hideLoading();
      }
    }
  );
}
function drawTotalMarketShareMI() {
  var chart = drawChart({
    chart: {
      renderTo: "chartTotalMarketShareMI",
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
    },
    title: { text: "Total market shares MI: AAA Asset Management, PT, 2014" },
    tooltip: { pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>" },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: { enabled: false },
        showInLegend: true,
      },
    },
    series: [
      {
        type: "pie",
        name: "Browser share",
        data: [
          ["Firefox", 45.0],
          ["IE", 26.8],
          { name: "Chrome", y: 12.8, sliced: true, selected: true },
          ["Safari", 8.5],
          ["Opera", 6.2],
          ["Others", 0.7],
        ],
      },
    ],
  });
}
var chartAUM;
function drawAumUnit(id, startdate, enddate, judul, subjudul, unitY) {
  var chartAUMUnit;
  chartAUMUnit = drawChartStock({
    chart: {
      renderTo: "mutualfund-aum-chart",
      zoomType: "xy",
      spacingRight: 50,
      spacingLeft: 20,
      marginRight: 100,
      marginLeft: 120,
      events: {
        load: function () {
          chartAUMUnit = this;
          chartAUMUnit.showLoading();
          var data = [];
          var data2 = [];
          var date;
          var date2;
          $.getJSON(
            SITEURL +
              "ajax/mutualfund/aum/product/?id=" +
              id +
              "&startdate=" +
              startdate +
              "&enddate=" +
              enddate,
            function (json) {
              if (json.status) {
                added = false;
                $.each(json.data, function (key, val) {
                  date = val.date.split("-");
                  var x = Date.UTC(date[0], date[1] - 1, date[2]);
                  chartAUMUnit.scroller.xAxis.dataMin = x;
                  data.push([x, parseFloat(val.value)]);
                });
                chartAUMUnit.hideLoading();
                chartAUMUnit.series[0].setData(data);
              } else {
                chartAUMUnit.showLoading("No results");
              }
            }
          );
          $.getJSON(
            SITEURL +
              "ajax/mutualfund/aum/product_unit/?id=" +
              id +
              "&startdate=" +
              startdate +
              "&enddate=" +
              enddate,
            function (json) {
              if (json.status) {
                added = false;
                $.each(json.data, function (key, val) {
                  date2 = val.date.split("-");
                  var x = Date.UTC(date2[0], date2[1] - 1, date2[2]);
                  chartAUMUnit.scroller.xAxis.dataMin = x;
                  data2.push([x, parseFloat(val.value)]);
                });
                chartAUMUnit.hideLoading();
                chartAUMUnit.series[1].setData(data2);
              } else {
                chartAUMUnit.showLoading("No results");
              }
            }
          );
        },
      },
    },
    title: { text: judul },
    subtitle: { text: subjudul },
    xAxis: [{ gridLineWidth: 0, categories: [], crosshair: true }],
    exporting: { buttons: { contextButton: { enabled: false } } },
    yAxis: [
      {
        min: 0,
        minRange: 0.1,
        lineColor: "#7d7d7d",
        lineWidth: 1,
        tickColor: "#666",
        tickWidth: 1,
        tickLength: 3,
        gridLineColor: "#ddd",
        labels: {
          formatter: function () {
            return unitY == "IDR"
              ? formatNumber(this.value / 1000000000, 0, $.cookie("clang"))
              : formatNumber(this.value, 0, $.cookie("clang"));
          },
          align: "right",
          x: -10,
          y: 0,
        },
        title: {
          text:
            "AUM (" +
            (unitY == "IDR"
              ? $.cookie("clang") == "id"
                ? " Miliar"
                : " Billion"
              : "") +
            " " +
            unitY +
            " )",
          style: { color: "#555" },
          x: -5,
          y: 0,
        },
      },
      {
        lineColor: "#7d7d7d",
        lineWidth: 1,
        min: 0,
        minRange: 0.1,
        tickColor: "#666",
        tickWidth: 1,
        tickLength: 3,
        gridLineColor: "#ddd",
        title: {
          text:
            unitY == "IDR"
              ? "UNIT (" +
                ($.cookie("clang") == "id" ? " Juta" : " Million") +
                " )"
              : "UNIT",
          style: { color: "#555" },
        },
        labels: {
          formatter: function () {
            return unitY == "IDR"
              ? formatNumber(this.value / 1000000, 0, $.cookie("clang"))
              : formatNumber(this.value, 0, $.cookie("clang"));
          },
          align: "left",
          x: 5,
          y: 0,
        },
        opposite: true,
      },
    ],
    tooltip: { shared: true },
    legend: {
      layout: "vertical",
      align: "left",
      x: 120,
      verticalAlign: "top",
      y: 100,
      floating: true,
      backgroundColor:
        (Highcharts.theme && Highcharts.theme.legendBackgroundColor) ||
        "#FFFFFF",
    },
    tooltip: {
      formatter: function () {
        var s = "";
        var p = 0;
        $.each(this.points, function (i, point) {
          if (p == 0) s += Highcharts.dateFormat("%b %Y", this.x);
          s += "<br>";
          if (p == 0)
            s +=
              '<span style="color:#52b411">' +
              this.series.name +
              ": " +
              formatNumber(this.y, 0, $.cookie("clang")) +
              "</span>";
          else
            s +=
              '<span style="color:#7d7d7d">' +
              this.series.name +
              ": " +
              formatNumber(this.y, 0, $.cookie("clang")) +
              "</span>";
          s += "<br><br>";
          ++p;
        });
        return s;
      },
    },
    scrollbar: { enabled: true },
    navigator: {
      enabled: true,
      outlineColor: "#52b411",
      outlineWidth: 2,
      series: {
        type: "areaspline",
        color: "#dcf3d6",
        lineColor: "#52b411",
        fillOpacity: 0.8,
        dataGrouping: { smoothed: true },
        lineWidth: 1,
        marker: { enabled: false },
      },
      maskFill: "rgba(255, 255, 255, 0.6)",
    },
    series: [
      { name: "AUM", type: "column", yAxis: 0, data: [] },
      { name: "UNIT", type: "line", yAxis: 1, color: "#7d7d7d", data: [] },
    ],
  });
}
function drawAum(type, id, startdate, enddate, judul, subjudul, unitY) {
  if ($("#mutualfund-aum-chart").length == 0) return false;
  chartAUM = drawChartStock({
    chart: {
      renderTo: "mutualfund-aum-chart",
      zoomType: "x",
      spacingRight: 0,
      spacingBottom: 5,
      spacingTop: 5,
      spacingLeft: 20,
      marginLeft: 170,
      marginRight: 50,
      backgroundColor: "",
      events: {
        load: function () {
          chartAUM = this;
          chartAUM.showLoading();
          var data = [];
          var date;
          $.getJSON(
            SITEURL +
              "ajax/mutualfund/aum/" +
              type +
              "/?id=" +
              id +
              "&startdate=" +
              startdate +
              "&enddate=" +
              enddate,
            function (json) {
              if (json.status) {
                added = false;
                $.each(json.data, function (key, val) {
                  date = val.date.split("-");
                  var x = Date.UTC(date[0], date[1] - 1, date[2]);
                  if (added === false) {
                    chartAUM.scroller.xAxis.dataMin = x;
                    data.push([x, parseFloat(0)]);
                    data.push([x, parseFloat(val.value)]);
                    added = true;
                    return;
                  }
                  data.push([x, parseFloat(val.value)]);
                });
                chartAUM.hideLoading();
                chartAUM.series[0].setData(data);
              } else {
                chartAUM.showLoading("No results");
              }
            }
          );
        },
      },
    },
    tooltip: {
      formatter: function () {
        var s = "";
        $.each(this.points, function (i, point) {
          s += "<b>" + this.series.name + "</b><br>";
        });
        s +=
          Highcharts.dateFormat("%b %Y", this.x) +
          "<br>" +
          formatNumber(this.y, 0, $.cookie("clang"));
        return s;
      },
    },
    scrollbar: { enabled: true },
    exporting: { buttons: { contextButton: { enabled: false } } },
    navigator: {
      enabled: true,
      outlineColor: "#52b411",
      outlineWidth: 2,
      series: {
        type: "areaspline",
        color: "#dcf3d6",
        lineColor: "#52b411",
        fillOpacity: 0.8,
        dataGrouping: { smoothed: true },
        lineWidth: 1,
        marker: { enabled: false },
      },
      maskFill: "rgba(255, 255, 255, 0.6)",
    },
    credits: 0,
    title: { style: { color: "#52b412 !important" }, text: judul },
    subtitle: {
      style: { color: "#666666 !important", margin: "5px" },
      text: subjudul,
    },
    xAxis: { gridLineWidth: 0, categories: [] },
    yAxis: {
      lineColor: "#7d7d7d",
      lineWidth: 1,
      tickColor: "#666",
      tickWidth: 1,
      tickLength: 3,
      gridLineColor: "#ddd",
      title: { text: "AUM (" + unitY + ")", rotation: -90, margin: 10 },
      labels: {
        formatter: function () {
          return formatNumber(this.value, 0, $.cookie("clang"));
        },
        align: "right",
        x: -10,
        y: -2,
      },
    },
    plotOptions: {
      series: { dataGrouping: { enabled: false } },
      line: {
        dataLabels: { enabled: true },
        color: "#f3f3f3",
        enableMouseTracking: false,
      },
    },
    series: [{ name: "AUM", type: "column", color: "#52b411", data: [] }],
  });
}
function setMatrixProducts(json, callback) {
  var $clone = $("#matrix-products").clone();
  $("#matrix-products").html("");
  if (typeof json.data === "undefined") {
    callback(false);
    return;
  }
  var i = 0;
  $.each(json.data, function (key, val) {
    i++;
    var is_checked = true;
    if (val.risk != null && val.return != null) {
      $(
        '<div class="list"><input class="matrix-product-items" type="checkbox" value="' +
          val.id +
          '" data-name="' +
          val.name +
          '" data-risk="' +
          val.risk +
          '" data-return="' +
          val.return +
          '" name="matrix-items[]" ' +
          (is_checked ? "checked" : "") +
          '> <label class="vm">' +
          val.name +
          "</label></div>"
      ).appendTo("#matrix-products");
    }
  });
  window.plotx = json.plotx;
  window.ploty = json.ploty;
  callback(true);
}
function drawMatrix(judul, status, callback) {
  if ($("#mutualfund-matrix-chart").length == 0) {
    callback(false);
    return false;
  }
  var chart = drawChart({
    chart: {
      renderTo: "mutualfund-matrix-chart",
      type: "scatter",
      zoomType: "xy",
    },
    title: { style: { color: "#52b412 !important" }, text: judul },
    exporting: { buttons: { contextButton: { enabled: false } } },
    xAxis: {
      title: { enabled: true, text: "Risk" },
      endOnTick: true,
      showLastLabel: true,
      startOnTick: true,
      plotLines: [
        {
          color: "#F60",
          width: 2,
          zIndex: 0,
          value: 0,
          label: { text: "Y Quadrant" },
        },
      ],
    },
    yAxis: {
      title: { text: "Return (%)" },
      tickInterval: 2,
      plotLines: [
        { color: "#F60", width: 2, value: 0, label: { text: "X Quadrant" } },
      ],
    },
    tooltip: {
      formatter: function () {
        return (
          "<b>" +
          this.point.name +
          "</b><br/>Risk: " +
          Math.round(this.x * 100000) / 100000 +
          " <br/>Return: " +
          Math.round(this.y * 100000) / 100000 +
          " %"
        );
      },
    },
    label: {
      items: {
        html: "<b>High Risk High Return</b>",
        style: { left: "10%", top: "10%" },
      },
    },
    plotOptions: {
      scatter: {
        marker: {
          symbol: "circle",
          radius: 5,
          states: { hover: { enabled: true } },
        },
        states: { hover: { marker: { enabled: false } } },
      },
    },
    series: [{ name: "Matrix" }],
  });
  chart.showLoading();
  if (!status) {
    chart.showLoading("No results");
    callback(false);
    return;
  }
  var data = [];
  var ris = 0;
  var ret = 0;
  var ci = 0;
  $(".matrix-product-items:checked").each(function (key, val) {
    ci = ci > $(".matrix-product-color:checked").length - 1 ? 0 : ci;
    var rgb = $(".matrix-product-color:checked").eq(ci).rgb2hex();
    data.push({
      name: $(val).data("name"),
      x: $(val).data("risk"),
      y: $(val).data("return") * 100,
      marker: {
        fillColor: "rgba(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ", .5)",
      },
    });
    ci++;
  });
  var dataCount = 0;
  $(".matrix-product-items").each(function (key, val) {
    dataCount++;
    ris += parseFloat($(val).data("risk"));
    ret += parseFloat($(val).data("return"));
  });
  ci = 0;
  var plotx = dataCount > 0 ? ris / dataCount : 0;
  var ploty = dataCount > 0 && ret > 0 ? (ret * 100) / dataCount : 0;
  chart.xAxis[0].plotLinesAndBands[0].options.value = plotx;
  chart.yAxis[0].plotLinesAndBands[0].options.value = ploty;
  chart.series[0].setData(data);
  chart.hideLoading();
  callback(true, plotx, ploty);
  return chart;
}
function insertMatrixTable(status, plotx, ploty) {
  if ($("#mutualfund-matrix-table").length == 0 || !status) return false;
  var ci = 0;
  $("#mutualfund-matrix-table > tbody").html("");
  $(".matrix-product-items:checked").each(function (key, val) {
    ci = ci > $(".matrix-product-color:checked").length - 1 ? 0 : ci;
    var color = $(".matrix-product-color:checked").eq(ci).val();
    var ris = $(val).data("risk");
    var ret = $(val).data("return") * 100;
    if (ris < plotx && ret > ploty) {
      var kat = "High Return Low Risk";
    } else if (ris < plotx && ret < ploty) {
      var kat = "Low Return Low Risk";
    } else if (ris >= plotx && ret >= ploty) {
      var kat = "High Return High Risk";
    } else if (ris >= plotx && ret < ploty) {
      var kat = "Low Return High Risk";
    } else {
      var kat = "N/A";
    }
    $(
      '<tr><td><div style="display: block; width: 10px; height: 20px; background:' +
        color +
        '"></div></td><td>' +
        (key + 1) +
        '.</td><td class="left"><a href="' +
        SITEURL +
        $.cookie("clang") +
        "/data/mutualfund/" +
        $(this).val() +
        "/" +
        $(val)
          .data("name")
          .toLowerCase()
          .replace(/ /g, "-")
          .replace(/[-]+/g, "-")
          .replace(/[^\w-]+/g, "") +
        '">' +
        $(val).data("name") +
        '</a></td><td style="text-align: right">' +
        parseFloat(ret).toFixed(2) +
        '</td><td style="text-align: right">' +
        parseFloat(ris).toFixed(2) +
        "</td><td>" +
        kat +
        '&nbsp;</td><!--<td><a class="button type2 small">BELI</a></td>--></tr>'
    ).appendTo("#mutualfund-matrix-table > tbody");
    ci++;
  });
  ci = 0;
}
