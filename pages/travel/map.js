import * as echarts from '../../ec-canvas/echarts';
import geoJson from '../../data/chinaGeo';

const app = getApp();

const itemStyle = {
  areaColor: '#f00',
  color: '#ff0',
}

var data = [
  {name: '京', value: 0},
  {name: '津', value: 1},
  {name: '沪', value: 2},
  {name: '渝', value: 3},
  {name: '港', value: 4},
  {name: '澳', value: 5},
  {name: '吉', value: 6},
  {name: '黑', value: 7},
  {name: '辽', value: 8},
  {name: '新', value: 9},
  {name: '甘', value: 10},
  {name: '宁', value: 11},
  {name: '陕', value: 12},
  {name: '青', value: 13},
  {name: '蒙', value: 14},
  {name: '冀', value: 15},
  {name: '晋', value: 16},
  {name: '豫', value: 17},
  {name: '皖', value: 18},
  {name: '湘', value: 19},
  {name: '鄂', value: 20},
  {name: '赣', value: 21},
  {name: '鲁', value: 22},
  {name: '苏', value: 23},
  {name: '浙', value: 24},
  {name: '闽', value: 25},
  {name: '台', value: 26},
  {name: '粤', value: 27},
  {name: '桂', value: 28},
  {name: '琼', value: 29},
  {name: '川', value: 30},
  {name: '黔', value: 31},
  {name: '滇', value: 32},
  {name: '藏', value: 33}
];

var geoCoordMap = {
'津':[117.20000,39.13333],
'沪':[121.55333,31.20000],
'渝':[106.45000, 29.56667],
'京': [116.41667,39.91667],
'港': [114.10000,22.20000],
'澳': [113.50000,22.20000],

'吉':[125.35000,43.88333],
'黑':[127.63333,47.75000],
'辽':[123.38333,41.80000],

'新':[87.68333,43.76667],
'甘':[103.73333,36.03333],
'宁':[106.26667,37.46667],
'陕':[108.95000,34.26667],
'青':[96.75000,36.56667],

'蒙':[111.670801, 41.818311],
'冀':[115.48333,38.03333],

'晋':[112.53333,37.86667],
'豫':[113.65000,34.76667],
'皖':[117.283042, 31.86119],
'湘':[113.00000,28.21667],
'鄂':[114.298572, 30.584355],
'赣':[115.90000,28.68333],


'鲁':[117.000923, 36.675807],
'苏':[119.78333,32.05000],
'浙':[120.20000,30.26667],
'闽':[118.30000,26.08333],
'台': [121.30, 25.03],


'粤':[113.23333,23.16667],
'桂':[108.320004, 22.82402],
'琼':[110.35000,20.01667],

'川':[104.06667,30.66667],
'黔':[106.71667,26.56667],
'滇':[102.73333,25.05000],
'藏':[91.00000,30.60000],
};


function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width, 
    height,
  });

  canvas.setChart(chart);
  
  
  echarts.registerMap('china', geoJson, {
   });


  const option = {
    tooltip: {
        show: true
    },
   
    geo: {
        map: 'china',
        roam: false,
        selectedMode: 'multiple',
        label: {
            normal: {
                show: false,
            },
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            normal:{
                borderColor: '#eee',
                areaColor: '#ccc'
            },
            emphasis:{
                borderWidth: 0,
                areaColor: '#ff0'
            }
        },
        regions: [{
            name: '粤',
            itemStyle: {
                areaColor: '#7CCD7C',
                color: '#f00'
            }
        }]
    },
    series : [
        
        {
            name: 'china',
            type: 'map',
            z:1,
            geoIndex: 0,
            data
          //  map: 'china',
          //  selectedMode: 'multiple',
          //  roam: false
        },
        {
          type: 'scatter',
          z:10,
          coordinateSystem: 'geo',
          data: convertData(data),
          symbolSize: 5,
          symbol: 'circle',
          label: {
              normal: {
                  show: true,
                  color: '#666',
                  fontSize: 10,
                  formatter: '{b}',
                  position: 'bottom',
              }
          },
          itemStyle: {
              normal: {
                   color: '#f00'
              },
              emphasis: {
                  color: '#fff'
              }
          }
       },
    ]
};

  chart.setOption(option);

  chart.on('mapselectchanged', params => {
    console.log(params.batch[0].selected,Object.values(params.batch[0].selected).length)
  })

  return chart;
}

function convertData(data) {
 var res = [];
 for (var i = 0; i < data.length; i++) {
     var geoCoord = geoCoordMap[data[i].name];
     if (geoCoord) {
         res.push({
             name: data[i].name,
             value: geoCoord.concat(data[i].value),
         });
     }
 }
 return res;
};

Page({
  data: {
    ec: {
      onInit: initChart
    }
  },
  onShareAppMessage: res => {
    return {
      title: 'wbiokr踪迹小程序',
      path: '/pages/travel/map',
    }
  },
  onLoad() {
    // wx.request({
    //   url: '../../data/chinaGeo.json',
    //   method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    //   success: function(res){
    //     // success
    //     console.log(res)
    //   },
    //   fail: function() {
    //     // fail
    //   },
    //   complete: function() {
    //     // complete
    //   }
    // })
  },

  
})