chartOptions["I.01.8.0001"] = {
  "yAxis": {
    "labels": {
      "format": "{value:,.2f}",
    }
  },
  "xAxis": {
    "tickInterval": 1
  },
  "series": [
    {
      "marker": {
        "symbol": "circle",
        "enabled": true
      },
      "index": 0,
      "color": "#008AC3"
    },
    {
      "marker": {
        "symbol": "circle",
        "enabled": true
      },
      "index": 1,
      "color": "#990300"
    },
    {
      "marker": {
        "symbol": "circle",
        "enabled": true
      },
      "index": 1,
      "color": "orange"
    }
  ],
  "tooltip": {
    "shared": false
  },
  "plotOptions": {
    "series": {
      "dataLabels": {
        "enabled": true,
          //display label at first or last point: https://gist.github.com/jeremywrowe/3506869
          formatter: function() {
            var last  = this.series.data[this.series.data.length - 1];
            if (this.point.category === last.category  &&  this.point.y === last.y ) {
              return this.series.name;
            }
            return "";
          }
      }
    }
  }
};
