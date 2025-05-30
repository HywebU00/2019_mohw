// 自行加入的JS請寫在這裡
$(function() {
  $('.mpSlider').slick({
    dots: true,
    arrow: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    cssEase: 'ease'
  });
  $('.happiness_slider').slick({
    dots: true,
    arrow: true,
    infinite: true,
    speed: 500,
    autoplay: false,
    cssEase: 'ease'
  });
  $('.happiness_class_slider').slick({
    dots: false,
    arrow: true,
    infinite: true,
    speed: 500,
    autoplay: false,
    cssEase: 'ease',
    slidesToShow: 2,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }]
  });
  $('.nurseProject').slick({
    dots: false,
    arrow: true,
    infinite: true,
    speed: 500,
    autoplay: false,
    fade: true,
    cssEase: 'ease'
  });
  $('.course>ul').slick({
    // centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [{
        breakpoint: 768,
        settings: {
          arrows: true,
          // centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          // centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
  // lazyload
  //可以指定你想要的元素做lazyload
  // $("img").lazyload({ effect: "fadeIn" });
  //燈箱slick+lightBox組合
  $('.cp_slider').slick({
    dots: true,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    pauseOnFocus: true,
    focusOnSelect: true,
    accessibility: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    }, {
      breakpoint: 545,
      settings: {
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 480,
      settings: {
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }]
  });
  $('.cp_slider').slickLightbox({
    caption: 'caption',
    useHistoryApi: 'true',
    lazy: true
  });
  // cp_photo
  $('.Slider-for').on('init reInit afterChange', function(event, slick, currentSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.controls').html(i + '/' + slick.slideCount);
  });
  $('.Slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.Slider-nav',
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true
  });
  $('.Slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.Slider-for',
    dots: true,
    arrows: true,
    focusOnSelect: true,
    infinite: true,
  });
});
// $(function(){
//   $('.topic_title>a').click(function(e){
//     $(this).next('.topic_content').slideDown();
//     e.preventDefault();
//   });
//   $('.topic_content .close a').click(function(e){
//     $('.topic_content').slideUp();
//     e.preventDefault();
//   });
// });
$(function() {
  $(".hero_block .video .close").click(function(e) {
    $('.hero_block .video').hide();
    e.preventDefault();
  });
})

 // password_toggle
 var passShow = false;
 $('.password_toggle').each(function (index, el) {
   $(this)
     .find('.btn-icon')
     .off()
     .click(function (e) {
       if (!passShow) {
         $(this).children('i').removeClass().addClass('i_show');
         $(this).parents('.password_toggle').find('input[type="password"]').attr('type', 'text');
         passShow = true;
         // console.log(passShow);
       } else {
         $(this).children('i').removeClass().addClass('i_hide');
         $(this).parents('.password_toggle').find('input[type="text"]').attr('type', 'password');
         passShow = false;
         // console.log(passShow);
       }
       e.preventDefault();
     });
 });

$(function() {
  // chart1 近年護理人員統計
  $('.chart1 .chart').highcharts({
    exporting: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    style: {
      color: '#555',
      fontSize: "12px",
      fontWeight: "blod",
      fontFamily: "Courier new",
    },
    chart: {
      type: 'line',
      backgroundColor: 'rgba(255, 255, 255, 0)'
    },
    title: {
      text: '近年護理人員統計'
    },
    subtitle: {
      text: '107年2-11月'
    },
    xAxis: {
      categories: ['二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
    },
    yAxis: {
      min: 0,
      title: {
        text: '數量'
      }
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true,
        }
      }
    },
    series: [{
      name: '案件數',
      data: [9, 12, 7, 22, 21, 14, 9, 21, 12, 12],
      color: "#ff6633"
    }],
  });
  // chart2 案件分析-縣市別
  $('.chart2 .chart').highcharts({
    exporting: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    chart: {
      type: 'column',
      inverted: true,
      backgroundColor: 'rgba(255, 255, 255, 0)'
    },
    title: {
      text: '案件分析-縣市別'
    },
    subtitle: {
      text: '共有16縣市機構通報(107.2.1-11.30)'
    },
    xAxis: {
      type: 'category'
    },
    yAxis: {
      title: {
        text: '案件數'
      }
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: '{point.y:.1f}'
        }
      }
    },
    series: [{
      name: '案件數',
      colorByPoint: true,
      data: [{
        name: '1',
        y: 33,
        color: "#335498"
      }, {
        name: '2',
        y: 20,
        color: "#008bc0"
      }, {
        name: '3',
        y: 19,
        color: "#0099d8"
      }, {
        name: '4',
        y: 18,
        color: "#5cb9ed"
      }, {
        name: '5',
        y: 9,
        color: "#00a39b"
      }, {
        name: '6',
        y: 7,
        color: "#00bc9c"
      }, {
        name: '7',
        y: 7,
        color: "#56cc9b"
      }, {
        name: '8',
        y: 5,
        color: "#913589"
      }, {
        name: '9',
        y: 4,
        color: "#9145aa"
      }, {
        name: '10',
        y: 4,
        color: "#9e59b3"
      }, {
        name: '11',
        y: 3,
        color: "#f07d26"
      }, {
        name: '12',
        y: 3,
        color: "#fa7752"
      }, {
        name: '13',
        y: 3,
        color: "#fab35b"
      }, {
        name: '14',
        y: 2,
        color: "#ebca56"
      }, {
        name: '15',
        y: 1,
        color: "#aab7b7"
      }, {
        name: '16',
        y: 1,
        color: "#d3d2d2"
      }, {
        name: '17',
        y: 1,
        color: "#571a0d"
      }, {
        name: '18',
        y: 1,
        color: "#ad3b1f"
      }, {
        name: '19',
        y: 1,
        color: "#e85212"
      }, {
        name: '20',
        y: 1,
        color: "#e79217"
      }, {
        name: '21',
        y: 1,
        color: "#cd9b2a"
      }, {
        name: '22',
        y: 1,
        color: "#c1c82d"
      }]
    }],
  });
  // chart3 近年專科護理師領證數統計
  $('.chart3 .chart').highcharts({
    exporting: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    style: {
      color: '#555',
      fontSize: "12px",
      fontWeight: "blod",
      fontFamily: "Courier new",
    },
    chart: {
      type: 'line',
      backgroundColor: 'rgba(255, 255, 255, 0)'
    },
    title: {
      text: '近年專科護理師領證數統計'
    },
    subtitle: {
      text: '107年2-11月'
    },
    xAxis: {
      categories: ['二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
    },
    yAxis: {
      min: 0,
      title: {
        text: '數量'
      }
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true,
        }
      }
    },
    series: [{
      name: '案件數',
      data: [9, 12, 7, 22, 21, 14, 9, 21, 12, 12],
      color: "#ff6633"
    }],
  });
  // chart4 案件分析-爭議別
  $('.chart4 .chart').highcharts({
    exporting: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    chart: {
      type: 'pie',
      spacing: [40, 0, 40, 0],
      backgroundColor: 'rgba(255, 255, 255, 0)'
    },
    title: {
      text: '內外科專科護理師領證人數比'
    },
    subtitle: {
      text: '107年2-11月'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        showInLegend: true,
        dataLabels: {
          enabled: true,
          format: '{point.percentage:.1f} %',
          style: {
            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
          }
        }
      }
    },
    series: [{
      type: 'pie',
      innerSize: '50%',
      name: '內外科專科護理師領證人數比',
      data: [{
        name: '內科',
        y: 54,
        color: "#ff6633"
      }, {
        name: '外科',
        y: 46,
        color: "#b04fad"
      }]
    }],
    legend: {
      layout: "horizontal"
    }
  });
  // chart5 評鑑護理機構各類型比例
  $('.chart5 .chart').highcharts({
    exporting: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    chart: {
      type: 'pie',
      spacing: [40, 0, 40, 0],
      backgroundColor: 'rgba(255, 255, 255, 0)'
    },
    title: {
      text: '勞基法相關案件-病房/單位類別'
    },
    subtitle: {
      text: '107年2-11月'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        showInLegend: true,
        dataLabels: {
          enabled: true,
          format: '{point.percentage:.1f} %',
          style: {
            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
          }
        }
      }
    },
    series: [{
      type: 'pie',
      innerSize: '50%',
      name: '病房/單位類別',
      data: [{
        name: '醫院/門診',
        y: 75,
        color: "#ab2aa7"
      }, {
        name: '醫院/急診',
        y: 4,
        color: "#b04fad"
      }, {
        name: '醫院/病房',
        y: 4,
        color: "#ca69c7"
      }, {
        name: '醫院/其他單位',
        y: 19,
        color: "#e391e0"
      }, {
        name: '診所',
        y: 3,
        color: "#5d4fb0"
      }, {
        name: '護理機構',
        y: 16,
        color: "#ff6633"
      }, {
        name: '其他',
        y: 5,
        color: "#aab7b7"
      }]
    }],
    legend: {
      layout: "horizontal"
    }
  });
  // chart6 原鄉離島公費生養成身份與籍屬
  $('.chart6 .chart').highcharts({
    exporting: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    chart: {
      type: 'column',
      backgroundColor: 'rgba(255, 255, 255, 0.1)'
    },
    title: {
      text: '原鄉離島公費生養成身份與籍屬'
    },
    subtitle: {
      text: '107年2-11月'
    },
    xAxis: {
      categories: ['醫師', '牙醫師', '護理人員', '其他']
    },
    yAxis: {
      min: 0,
      title: {
        text: '件數'
      },
      stackLabels: {
        enabled: true,
      }
    },
    tooltip: {
      formatter: function() {
        return '<b>' + this.x + '</b><br/>' +
          this.series.name + ': ' + this.y + ' 件<br/>' +
          '總數: ' + this.point.stackTotal + ' 件';
      }
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        dataLabels: {
          enabled: true,
          color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
          style: {
            textShadow: '0 0 3px black'
          }
        }
      }
    },
    series: [{
      name: '籍屬原住民',
      data: [253, 35, 84, 68],
      color: "#ff6633"
    }, {
      name: '籍屬離島地區',
      data: [258, 39, 167, 45],
      color: "#b04fad"
    }]
  });
  $('.chart7 .chart').highcharts({
    exporting: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    style: {
      color: '#555',
      fontSize: "12px",
      fontWeight: "blod",
      fontFamily: "Courier new",
    },
    chart: {
      type: 'line',
      backgroundColor: 'rgba(255, 255, 255, 0)'
    },
    title: {
      text: '近年專科護理師領證數統計'
    },
    subtitle: {
      text: '107年2-11月'
    },
    xAxis: {
      categories: ['二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
    },
    yAxis: {
      min: 0,
      title: {
        text: '數量'
      }
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true,
        }
      }
    },
    series: [{
      name: '案件數',
      data: [9, 12, 7, 22, 21, 14, 9, 21, 12, 12],
      color: "#ff6633"
    }],
  });
  // chart8 一般護理之家
  $('#chart8').highcharts({
    exporting: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    chart: {
      type: 'bar',
      inverted: true,
      backgroundColor: 'rgba(255, 255, 255, 0)'
    },
    title: {
      text: '近三年評鑑家數'
    },
    xAxis: {
      categories: ['109', '108', '107'],
      title: {
        text: '評鑑年度'
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: '評鑑家數'
      },
      stackLabels: {
        enabled: true,
      }
    },
    legend: {
      reversed: true
    },
    tooltip: {
      formatter: function() {
        return '<b>' + this.x + '</b><br/>' +
          this.series.name + ': ' + this.y + ' 件<br/>' +
          '總數: ' + this.point.stackTotal + ' 件';
      }
    },
    plotOptions: {
      series: {
        stacking: 'normal',
        dataLabels: {
          enabled: true,
          color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
          style: {
            textShadow: '0 0 3px black'
          }
        }
      }
    },
    series: [{
      name: '不合格',
      data: [5, 5, 5],
      color: "#fc6578"
    }, {
      name: '合格',
      data: [70, 177, 300],
      color: "#c49be5"
    }]
  });
  // chart9 各縣市評鑑統計
  $('#chart9').highcharts({
    exporting: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    chart: {
      type: 'column',
      backgroundColor: 'rgba(255, 255, 255, 0.1)'
    },
    title: {
      text: '各縣市評鑑統計'
    },
    subtitle: {
      text: '107年2-11月'
    },
    xAxis: {
      categories: ['臺北市', '新北市', '桃園市', '臺中市', '臺南市', '高雄市', '基隆市', '新竹市', '新竹縣', '苗栗縣', '彰化縣', '南投縣', '雲林縣', '嘉義市', '嘉義縣', '屏東縣', '宜蘭縣', '花蓮縣', '台東縣', '澎湖縣', '連江縣']
    },
    yAxis: {
      min: 0,
      title: {
        text: '有效家數'
      },
      stackLabels: {
        enabled: true,
      }
    },
    tooltip: {
      formatter: function() {
        return '<b>' + this.x + '</b><br/>' +
          this.series.name + ': ' + this.y + ' 件<br/>' +
          '總數: ' + this.point.stackTotal + ' 件';
      }
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        dataLabels: {
          enabled: true,
          color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
          style: {
            textShadow: '0 0 3px black'
          }
        }
      }
    },
    series: [{
      name: '尚未評鑑',
      data: [0, 0, 49, 6, 4, 0, 0, 1, 5, 2, 1, 1, 0, 0, 1, 2, 0, 2, 0, 0, 0],
      color: "#434343"
    }, {
      name: '不合格',
      data: [2, 0, 0, 5, 5, 0, 0, 2, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
      color: "#fc6578"
    }, {
      name: '合格',
      data: [18, 82, 40, 65, 70, 66, 9, 4, 10, 10, 40, 16, 12, 13, 13, 20, 8, 3, 4, 2, 1],
      color: "#c49be5"
    }]
  });
  // chart10 一般護理之家
  $('#chart10').highcharts({
    exporting: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    chart: {
      type: 'bar',
      inverted: true,
      backgroundColor: 'rgba(255, 255, 255, 0)'
    },
    title: {
      text: '近三年評鑑家數'
    },
    xAxis: {
      categories: ['109', '108', '107'],
      title: {
        text: '評鑑年度'
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: '評鑑家數'
      },
      stackLabels: {
        enabled: true,
      }
    },
    legend: {
      reversed: true
    },
    tooltip: {
      formatter: function() {
        return '<b>' + this.x + '</b><br/>' +
          this.series.name + ': ' + this.y + ' 件<br/>' +
          '總數: ' + this.point.stackTotal + ' 件';
      }
    },
    plotOptions: {
      series: {
        stacking: 'normal',
        dataLabels: {
          enabled: true,
          color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
          style: {
            textShadow: '0 0 3px black'
          }
        }
      }
    },
    series: [{
      name: '復業／開業未滿一年',
      data: [5, 5, 5],
      color: "#18489a"
    }, {
      name: '不合格',
      data: [5, 5, 5],
      color: "#fc6578"
    }, {
      name: '合格',
      data: [70, 177, 300],
      color: "#c49be5"
    }]
  });
  // chart11 各縣市評鑑統計
  $('#chart11').highcharts({
    exporting: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    chart: {
      type: 'column',
      backgroundColor: 'rgba(255, 255, 255, 0.1)'
    },
    title: {
      text: '各縣市評鑑統計'
    },
    subtitle: {
      text: '107年2-11月'
    },
    xAxis: {
      categories: ['臺北市', '新北市', '桃園市', '臺中市', '臺南市', '高雄市', '基隆市', '新竹市', '新竹縣', '苗栗縣', '彰化縣', '南投縣', '雲林縣', '嘉義市', '嘉義縣', '屏東縣', '宜蘭縣', '花蓮縣', '台東縣', '澎湖縣', '連江縣']
    },
    yAxis: {
      min: 0,
      title: {
        text: '有效家數'
      },
      stackLabels: {
        enabled: true,
      }
    },
    tooltip: {
      formatter: function() {
        return '<b>' + this.x + '</b><br/>' +
          this.series.name + ': ' + this.y + ' 件<br/>' +
          '總數: ' + this.point.stackTotal + ' 件';
      }
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        dataLabels: {
          enabled: true,
          color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
          style: {
            textShadow: '0 0 3px black'
          }
        }
      }
    },
    series: [{
      name: '尚未評鑑',
      data: [0, 0, 49, 6, 4, 0, 0, 1, 5, 2, 1, 1, 0, 0, 1, 2, 0, 2, 0, 0, 0],
      color: "#434343"
    }, {
      name: '不合格',
      data: [2, 0, 0, 5, 5, 0, 0, 2, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
      color: "#fc6578"
    }, {
      name: '合格',
      data: [18, 82, 40, 65, 70, 66, 9, 4, 10, 10, 40, 16, 12, 13, 13, 20, 8, 3, 4, 2, 1],
      color: "#c49be5"
    }]
  });
  // chart12 一般護理之家
  $('#chart12').highcharts({
    exporting: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    chart: {
      type: 'bar',
      inverted: true,
      backgroundColor: 'rgba(255, 255, 255, 0)'
    },
    title: {
      text: '近三年評鑑家數'
    },
    xAxis: {
      categories: ['109', '108', '107'],
      title: {
        text: '評鑑年度'
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: '評鑑家數'
      },
      stackLabels: {
        enabled: true,
      }
    },
    legend: {
      reversed: true
    },
    tooltip: {
      formatter: function() {
        return '<b>' + this.x + '</b><br/>' +
          this.series.name + ': ' + this.y + ' 件<br/>' +
          '總數: ' + this.point.stackTotal + ' 件';
      }
    },
    plotOptions: {
      series: {
        stacking: 'normal',
        dataLabels: {
          enabled: true,
          color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
          style: {
            textShadow: '0 0 3px black'
          }
        }
      }
    },
    series: [{
      name: '不合格',
      data: [5, 5, 5],
      color: "#fc6578"
    }, {
      name: '合格',
      data: [70, 177, 300],
      color: "#c49be5"
    }]
  });
  // chart13 各縣市評鑑統計
  $('#chart13').highcharts({
    exporting: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    chart: {
      type: 'column',
      backgroundColor: 'rgba(255, 255, 255, 0.1)'
    },
    title: {
      text: '各縣市評鑑統計'
    },
    subtitle: {
      text: '107年2-11月'
    },
    xAxis: {
      categories: ['臺北市', '新北市', '桃園市', '臺中市', '臺南市', '高雄市', '基隆市', '新竹市', '新竹縣', '苗栗縣', '彰化縣', '南投縣', '雲林縣', '嘉義市', '嘉義縣', '屏東縣', '宜蘭縣', '花蓮縣', '台東縣', '澎湖縣', '連江縣']
    },
    yAxis: {
      min: 0,
      title: {
        text: '有效家數'
      },
      stackLabels: {
        enabled: true,
      }
    },
    tooltip: {
      formatter: function() {
        return '<b>' + this.x + '</b><br/>' +
          this.series.name + ': ' + this.y + ' 件<br/>' +
          '總數: ' + this.point.stackTotal + ' 件';
      }
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        dataLabels: {
          enabled: true,
          color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
          style: {
            textShadow: '0 0 3px black'
          }
        }
      }
    },
    series: [{
      name: '尚未評鑑',
      data: [0, 0, 49, 6, 4, 0, 0, 1, 5, 2, 1, 1, 0, 0, 1, 2, 0, 2, 0, 0, 0],
      color: "#434343"
    }, {
      name: '不合格',
      data: [2, 0, 0, 5, 5, 0, 0, 2, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
      color: "#fc6578"
    }, {
      name: '合格',
      data: [18, 82, 40, 65, 70, 66, 9, 4, 10, 10, 40, 16, 12, 13, 13, 20, 8, 3, 4, 2, 1],
      color: "#c49be5"
    }]
  });
});
// happy chart
/*$(function() {
  // happyChart1
  $('.happyChart1 .chart').highcharts({
    exporting: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    chart: {
      type: 'pie',
      spacing: [40, 0, 40, 0],
      backgroundColor: 'rgba(255, 255, 255, 0)'
    },
    title: {
      text: '勞基法相關案件-病房/單位類別'
    },
    subtitle: {
      text: '107年2-11月'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        showInLegend: true,
        dataLabels: {
          enabled: true,
          format: '{point.percentage:.1f} %',
          style: {
            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
          }
        }
      }
    },
    series: [{
      type: 'pie',
      innerSize: '50%',
      name: '病房/單位類別',
      data: [{
        name: '醫院/醫學中心',
        y: 75,
        color: "#00adb9"
      }, {
        name: '醫院/區域醫院',
        y: 4,
        color: "#00a69c"
      }, {
        name: '醫院/病房',
        y: 4,
        color: "#00c09a"
      }, {
        name: '醫院/其他單位',
        y: 19,
        color: "#00d098"
      }, {
        name: '診所',
        y: 3,
        color: "#fb702a"
      }, {
        name: '護理機構',
        y: 16,
        color: "#f0c937"
      }, {
        name: '其他',
        y: 5,
        color: "#a7b7b7"
      }]
    }],
    legend: {
      layout: "horizontal"
    }
  });
  // happyChart2
  $('.happyChart2 .chart').highcharts({
    exporting: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    chart: {
      type: 'pie',
      spacing: [40, 0, 40, 0],
      backgroundColor: 'rgba(255, 255, 255, 0)'
    },
    title: {
      text: '勞基法相關案件-病房/單位類別'
    },
    subtitle: {
      text: '107年2-11月'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        showInLegend: true,
        dataLabels: {
          enabled: true,
          format: '{point.percentage:.1f} %',
          style: {
            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
          }
        }
      }
    },
    series: [{
      type: 'pie',
      innerSize: '50%',
      name: '病房/單位類別',
      data: [{
        name: '醫院/門診',
        y: 75,
        color: "#ab2aa7"
      }, {
        name: '醫院/急診',
        y: 4,
        color: "#b04fad"
      }, {
        name: '醫院/病房',
        y: 4,
        color: "#ca69c7"
      }, {
        name: '醫院/其他單位',
        y: 19,
        color: "#e391e0"
      }, {
        name: '診所',
        y: 3,
        color: "#5d4fb0"
      }, {
        name: '護理機構',
        y: 16,
        color: "#ff6633"
      }, {
        name: '其他',
        y: 5,
        color: "#aab7b7"
      }]
    }],
    legend: {
      layout: "horizontal"
    }
  });
  // happyChart3
  $('.happyChart3 .chart').highcharts({
    exporting: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    chart: {
      type: 'pie',
      spacing: [40, 0, 40, 0],
      backgroundColor: 'rgba(255, 255, 255, 0)'
    },
    title: {
      text: '勞基法相關案件-病房/單位類別'
    },
    subtitle: {
      text: '107年2-11月'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        showInLegend: true,
        dataLabels: {
          enabled: true,
          format: '{point.percentage:.1f} %',
          style: {
            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
          }
        }
      }
    },
    series: [{
      type: 'pie',
      innerSize: '50%',
      name: '病房/單位類別',
      data: [{
        name: '醫院/門診',
        y: 75,
        color: "#ab2aa7"
      }, {
        name: '醫院/急診',
        y: 4,
        color: "#b04fad"
      }, {
        name: '醫院/病房',
        y: 4,
        color: "#ca69c7"
      }, {
        name: '醫院/其他單位',
        y: 19,
        color: "#e391e0"
      }, {
        name: '診所',
        y: 3,
        color: "#5d4fb0"
      }, {
        name: '護理機構',
        y: 16,
        color: "#ff6633"
      }, {
        name: '其他',
        y: 5,
        color: "#aab7b7"
      }]
    }],
    legend: {
      layout: "horizontal"
    }
  });
  // happyChart4
  $('.happyChart4 .chart').highcharts({
    exporting: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    chart: {
      type: 'pie',
      spacing: [40, 0, 40, 0],
      backgroundColor: 'rgba(255, 255, 255, 0)'
    },
    title: {
      text: '勞基法相關案件-病房/單位類別'
    },
    subtitle: {
      text: '107年2-11月'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        showInLegend: true,
        dataLabels: {
          enabled: true,
          format: '{point.percentage:.1f} %',
          style: {
            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
          }
        }
      }
    },
    series: [{
      type: 'pie',
      innerSize: '50%',
      name: '病房/單位類別',
      data: [{
        name: '醫院/門診',
        y: 75,
        color: "#ab2aa7"
      }, {
        name: '醫院/急診',
        y: 4,
        color: "#b04fad"
      }, {
        name: '醫院/病房',
        y: 4,
        color: "#ca69c7"
      }, {
        name: '醫院/其他單位',
        y: 19,
        color: "#e391e0"
      }, {
        name: '診所',
        y: 3,
        color: "#5d4fb0"
      }, {
        name: '護理機構',
        y: 16,
        color: "#ff6633"
      }, {
        name: '其他',
        y: 5,
        color: "#aab7b7"
      }]
    }],
    legend: {
      layout: "horizontal"
    }
  });
  // happyChart5
  $('.happyChart5 .chart').highcharts({
    exporting: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    chart: {
      type: 'pie',
      spacing: [40, 0, 40, 0],
      backgroundColor: 'rgba(255, 255, 255, 0)'
    },
    title: {
      text: '勞基法相關案件-病房/單位類別'
    },
    subtitle: {
      text: '107年2-11月'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        showInLegend: true,
        dataLabels: {
          enabled: true,
          format: '{point.percentage:.1f} %',
          style: {
            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
          }
        }
      }
    },
    series: [{
      type: 'pie',
      innerSize: '50%',
      name: '病房/單位類別',
      data: [{
        name: '醫院/門診',
        y: 75,
        color: "#ab2aa7"
      }, {
        name: '醫院/急診',
        y: 4,
        color: "#b04fad"
      }, {
        name: '醫院/病房',
        y: 4,
        color: "#ca69c7"
      }, {
        name: '醫院/其他單位',
        y: 19,
        color: "#e391e0"
      }, {
        name: '診所',
        y: 3,
        color: "#5d4fb0"
      }, {
        name: '護理機構',
        y: 16,
        color: "#ff6633"
      }, {
        name: '其他',
        y: 5,
        color: "#aab7b7"
      }]
    }],
    legend: {
      layout: "horizontal"
    }
  });
  // happyChart6
});*/

$(document).ready(function() {
  var chart = {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false
  };
  var title = {
    text: '<b>總積分<br><span style="color: #994696">62.50</span> / 120.00</b>',
    align: 'center',
    floating: true,
    x: 0,
    y: 150
  };
  var tooltip = {
    headerFormat: '',
    pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
      '目前積分數: <b>{point.y}分 </b>' + '<b>({point.percentage:.1f}%)</b>'
  };
  var plotOptions = {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: ' <b>{point.name}</b>',
        style: {
          color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
        }
      },
      showInLegend: true
    }
  };
  var credits = {
    enabled: false
  };
  var series = [{
    minPointSize: '40',
    type: 'pie',
    innerSize: '70%',
    zMin: '0',
    data: [{
      name: '專業課程',
      y: 50.50,
      color: "#b04fad"
    }, {
      name: '專業品質',
      y: 3.50,
      color: "#913589"
    }, {
      name: '專業倫理',
      y: 1.50,
      color: "#f07d26"
    }, {
      name: '專業相關法規',
      y: 7.00,
      color: "#FECD3C"
    }, {
      name: '尚缺積分',
      y: 57.50,
      color: "#7B7B7B"
    }]
  }];
  var json = {};
  json.chart = chart;
  json.title = title;
  json.tooltip = tooltip;
  json.credits = credits;
  json.series = series;
  json.plotOptions = plotOptions;
  $('.happyChart6 .chart').highcharts(json);
});
jQuery('img.svg').each(function() {
  var $img = jQuery(this);
  var imgID = $img.attr('id');
  var imgClass = $img.attr('class');
  var imgURL = $img.attr('src');

  jQuery.get(imgURL, function(data) {
    // Get the SVG tag, ignore the rest
    var $svg = jQuery(data).find('svg');

    // Add replaced image's ID to the new SVG
    if (typeof imgID !== 'undefined') {
      $svg = $svg.attr('id', imgID);
    }
    // Add replaced image's classes to the new SVG
    if (typeof imgClass !== 'undefined') {
      $svg = $svg.attr('class', imgClass + ' replaced-svg');
    }

    // Remove any invalid XML tags as per http://validator.w3.org
    $svg = $svg.removeAttr('xmlns:a');

    // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
    if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
      $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
    }

    // Replace image with new SVG
    $img.replaceWith($svg);

  }, 'xml');

});
// accordion
$(".certificate_accordion").each(function() {
  $(this).find(".certificate_accordion_content").hide();
  var _accordionItem = $(this).children("ul").children("li").children("a");
  _accordionItem.each(function() {
    function accordion(e) {
      $(this).parent("li").siblings().children("a").removeClass("active");
      $(this).toggleClass("active");
      $(this).parent("li").siblings().children(".certificate_accordion_content").slideUp();
      $(this).next(".certificate_accordion_content").slideToggle();
      e.preventDefault();
    }
    $(this).click(accordion);
    $(this).keyup(accordion);
  });
});
// $(function() {
//   $('.number_row .number span').each(function() {
//     var $this = $(this),
//       countTo = $this.attr('data-count');
//     $({ countNum: $this.text() }).animate({
//       countNum: countTo
//     }, {
//       duration: 8000,
//       easing: 'linear',
//       step: function() {
//         $this.text(Math.floor(this.countNum));
//       },
//       complete: function() {
//         $this.text(this.countNum);
//         //alert('finished');
//       }
//     });
//   });
// });

//counting number
function animateNumber(element, start, stop, duration, dot) {
  let startTime = null;
  const isCountdown = start > stop;
  let dotCheck = dot !== undefined ? dot : true;

  function numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function animationStep(timestamp) {
    if (!startTime) {
      startTime = timestamp;
    }
    const elapsedTime = timestamp - startTime;
    const progress = elapsedTime / duration;
    let currentValue;
    if (isCountdown) {
      currentValue = Math.floor(start - (start - stop) * progress);
    } else {
      currentValue = Math.floor(start + (stop - start) * progress);
    }
    element.textContent = dotCheck
      ? numberWithCommas(currentValue)
      : currentValue;
    if (progress < 1) {
      requestAnimationFrame(animationStep);
    } else {
      element.textContent = dotCheck ? numberWithCommas(stop) : stop;
    }
  }
  requestAnimationFrame(animationStep);
}

const countItem = document.querySelectorAll(".numberCount");

countItem.forEach((item) => {
  const value = item.getAttribute("data-people");
  animateNumber(item.querySelector("span"), 0, value, 2000);
});
//懶人包展開收合
$(function() {
  $('.dummies>ul>li').each(function() {
    $(this).find('.dummiesContent').hide();
    var _item = $(this).children('.dummiesTitle').children('a');
    // var _scrollTop = $(this).offset().top - 55;
    _item.each(function() {
      function dummies(e) {
        // $('html, body').stop(true, true).animate({ scrollTop: _scrollTop }, 800, 'easeOutExpo');
        // $(this).parents('li').siblings().children('.dummiesTitle').children('a').removeClass('active');
        $(this).toggleClass('active');
        // $(this).parents('li').siblings().children('.dummiesContent').slideUp();
        $(this).parent('.dummiesTitle').next('.dummiesContent').slideToggle();
        e.preventDefault();
      }
      $(this).click(dummies);
      $(this).keyup(dummies);
    });
  });
});

$('.dummiesPolicy .policy1 a').click(function(e) {
  let _scrollTop = $(".dummies .policy1").offset().top - 100;
      $('html, body').stop(true, true).animate({ scrollTop: _scrollTop }, 800, 'easeOutExpo');
      e.preventDefault();

});
$('.dummiesPolicy .policy2 a').click(function(e) {
  let _scrollTop = $(".dummies .policy2").offset().top - 100;
      $('html, body').stop(true, true).animate({ scrollTop: _scrollTop }, 800, 'easeOutExpo');
      e.preventDefault();

});
$('.dummiesPolicy .policy3 a').click(function(e) {
  let _scrollTop = $(".dummies .policy3").offset().top - 100;
      $('html, body').stop(true, true).animate({ scrollTop: _scrollTop }, 800, 'easeOutExpo');
      e.preventDefault();

});

// function tabFunction(obj) {
//   'use strict';
//   // const tabSet = document.querySelector(obj.target) || null;
//   const tabSet = document.querySelectorAll(obj.target) || null;
//   const autoClose = obj.autoClose;
//   const openSwitch = obj.openSwitch;
//   const openFirst = obj.openFirst;
//   const modeSwitch = obj.modeSwitch;
//   const widthCheck = obj.width;

//   if (tabSet) {
//     tabSet.forEach((tab) => {
//       let id = [];
//       let mode = '';
//       let modeBBtn;
//       const modeABtn = tab.querySelectorAll('.tabItems button');
//       const modeAContent = tab.querySelectorAll('.tabContent');
//       const modeBContent = tab.querySelectorAll('.content');
//       const count = modeABtn.length;
//       let nowIndex = obj.index === null ? null : obj.index <= count ? obj.index : count;
//       const lastTab = modeABtn[modeABtn.length - 1];

//       for (let i = 0; i < modeABtn.length; i++) {
//         id.push(`tab_${randomLetter(3)}${randomFloor(0, 999)}`);
//       }

//       // 內容增加標題給模式B使用
//       modeABtn.forEach((item, index) => {
//         const btn = document.createElement('button');
//         btn.classList.add('modeBBtn');
//         btn.innerText = item.innerText;
//         modeAContent.forEach((content, i) => (i === index ? content.prepend(btn) : null));
//       });

//       modeBBtn = tab.querySelectorAll('.modeBBtn');

//       // 判斷寬度
//       const init = () => {
//         if (window.innerWidth <= widthCheck && modeSwitch) {
//           // 模式B
//           mode = 'B';
//           if (modeSwitch) {
//             modeABtn.forEach((content) => content.classList.remove('active'));
//             modeAContent.forEach((content) => content.classList.remove('active'));
//             // 移除模式A無障礙設置
//             modeABtn.forEach((item, index) => {
//               item.removeAttribute('aria-controls');
//               item.removeAttribute('role');
//               modeAContent[index].removeAttribute('aria-labelledby');
//               modeAContent[index].removeAttribute('role');
//               modeAContent[index].removeAttribute('aria-label');
//             });
//             // 增加模式B無障礙設置
//             modeBBtn.forEach((item, index) => {
//               item.setAttribute('aria-controls', id[index]);
//               modeBContent[index].setAttribute('aria-labelledby', id[index]);
//               modeBContent[index].setAttribute('id', id[index]);
//               // item.setAttribute('role', 'tab');
//               // modeBContent[index].setAttribute('role', 'tabpanel');
//               modeBContent[index].setAttribute('aria-label', item.innerText);
//             });

//             tab.classList.add('modeB');

//             if (nowIndex !== null) {
//               modeBBtn[nowIndex].classList.add('active');
//               modeBBtn[nowIndex].setAttribute('aria-selected', 'true');
//               modeBContent[nowIndex].classList.add('active');
//             }
//           }
//           // 模式B
//         } else if (window.innerWidth > widthCheck || !modeSwitch) {
//           // 模式A
//           mode = 'A';

//           if (modeSwitch) {
//             modeBContent.forEach((item) => item.style.removeProperty('display'));
//             modeBBtn.forEach((content) => content.classList.remove('active'));
//             modeBContent.forEach((content) => content.classList.remove('active'));

//             // 移除模式B無障礙設置
//             modeBBtn.forEach((item, index) => {
//               item.removeAttribute('aria-controls');
//               item.removeAttribute('role');
//               modeBContent[index].removeAttribute('aria-labelledby');
//               modeBContent[index].removeAttribute('role');
//               modeBContent[index].removeAttribute('aria-label');
//               modeBContent[index].removeAttribute('id');
//             });
//           }
//           // 增加模式A無障礙設置
//           modeABtn.forEach((item, index) => {
//             item.setAttribute('aria-controls', id[index]);
//             item.setAttribute('role', 'tab');
//             item.setAttribute('aria-selected', 'false');
//             modeAContent[index].setAttribute('aria-labelledby', id[index]);
//             modeAContent[index].setAttribute('role', 'tabpanel');
//             modeAContent[index].setAttribute('aria-label', item.innerText);
//           });

//           tab.classList.remove('modeB');

//           nowIndex === null ? (nowIndex = 0) : nowIndex;
//           modeABtn[nowIndex].classList.add('active');
//           modeAContent[nowIndex].classList.add('active');
//           modeABtn[nowIndex].setAttribute('aria-selected', 'true');
//           // 模式A
//         }
//       };
//       init();

//       // 預先展開模式
//       function openCheck() {
//         // 預先展開模式
//         if (!openFirst && mode === 'B' && nowIndex !== null) {
//           const siblings = Array.prototype.filter.call(modeBContent[nowIndex].parentElement.parentElement.children, (child) => {
//             return child !== modeBContent[nowIndex].parentElement;
//           });
//           siblings.forEach((item) => $(item).find('.content').slideUp('fast'));
//         } else if (mode === 'B' && nowIndex === null) {
//           modeBContent.forEach((item) => $(item).slideUp('fast'));
//         } else {
//           modeBContent.forEach((item) => $(item).slideDown('fast'));
//         }
//       }
//       openCheck();

//       // 模式A共用
//       function modeAFn(item, index) {
//         modeABtn.forEach((content) => content.classList.remove('active'));
//         modeAContent.forEach((content) => content.classList.remove('active'));
//         modeAContent[index].classList.add('active');
//         item.classList.add('active');
//         modeABtn.forEach((content) => content.setAttribute('aria-selected', 'false'));
//         item.setAttribute('aria-selected', 'true');
//         nowIndex = index;
//       }

//       modeAContent.forEach((item, index) => {
//         const itemAllTarget = modeAContent[index].querySelectorAll('a,button,input,textarea,select');
//         const firstItem = itemAllTarget[1];
//         const lastItem = itemAllTarget[itemAllTarget.length - 1];
//         const prevItemAllTarget = modeAContent[index - 1]?.querySelectorAll('a,button,input,textarea,select');
//         const siblings = Array.prototype.filter.call(modeBBtn[index].parentElement.parentElement.children, (child) => {
//           return child !== modeBBtn[index].parentElement;
//         });

//         // 模式A
//         if (modeSwitch || mode === 'A') {
//           // 模式A點擊
//           if (openSwitch) {
//             modeABtn[index].addEventListener('click', (e) => {
//               e.preventDefault();
//               modeAFn(e.target, index);
//             });

//             // 模式A鍵盤
//             modeABtn[index].addEventListener('keydown', (e) => {
//               if (e.which === 9 && !e.shiftKey) {
//                 modeAFn(e.target, index);
//                 if (itemAllTarget.length > 1 && e.target !== lastTab) {
//                   e.preventDefault();
//                   firstItem.focus();
//                 } else if (itemAllTarget.length === 1 && e.target !== lastTab) {
//                   e.preventDefault();
//                   modeABtn[index + 1]?.focus();
//                 } else if (itemAllTarget.length > 1 && e.target === lastTab) {
//                   modeABtn[index + 1]?.focus();
//                 } else if (itemAllTarget.length === 1 && e.target === lastTab) {
//                   setTimeout(() => {
//                     lastTab.focus();
//                     lastTab.blur();
//                   }, 10);
//                 }
//               } else if (e.which === 9 && e.shiftKey) {
//                 e.preventDefault();
//                 modeAFn(modeABtn[index], index);
//                 lastItem?.focus();
//                 if (itemAllTarget.length === 1) {
//                   modeABtn[index - 1]?.focus();
//                 }
//               }
//             });
//           }
//         }

//         // 模式B
//         if (modeSwitch || mode === 'B') {
//           // 模式B點擊
//           if (openSwitch) {
//             modeBBtn[index].addEventListener('click', (e) => {
//               e.preventDefault();
//               siblings.forEach((content) => content.querySelector('.modeBBtn').classList.remove('active'));
//               e.target.classList.toggle('active');
//               $(modeBContent[index]).slideToggle('fast');
//               nowIndex = index;

//               if (autoClose) {
//                 siblings.forEach((con) => {
//                   $(con.querySelector('.content')).slideUp('fast');
//                   con.classList.remove('active');
//                   con.querySelector('.modeBBtn').setAttribute('aria-selected', 'false');
//                 });
//               }
//             });

//             // 模式B鍵盤
//             modeBBtn[index].addEventListener('keydown', (e) => {
//               e.target.classList.add('active');
//               let firstTabStyle = window.getComputedStyle(modeBContent[index]);
//               nowIndex = index;

//               if (autoClose & !openFirst) {
//                 siblings.forEach((content) => {
//                   $(content.querySelector('.content')).slideUp('fast');
//                   content.querySelector('.modeBBtn').classList.remove('active');
//                   content.querySelector('.modeBBtn').setAttribute('aria-expanded', 'false');
//                 });
//               }

//               if (e.which === 9 && !e.shiftKey) {
//                 $(modeBContent[index]).slideDown('fast');
//                 if (index === 0) {
//                   e.target.classList.add('active');
//                 }

//                 if (itemAllTarget.length > 1) {
//                   e.preventDefault();
//                   firstItem?.focus();
//                 } else if (itemAllTarget.length === 1) {
//                   modeBBtn[index]?.focus();
//                 }
//               } else if (e.which === 9 && e.shiftKey) {
//                 e.preventDefault();
//                 $(modeBContent[index]).slideDown('fast');
//                 if (itemAllTarget.length > 1) {
//                   lastItem?.focus();
//                 } else if (itemAllTarget.length === 1) {
//                   modeBBtn[index - 1]?.focus();
//                 }
//               }
//             });
//           }
//         }

//         // 內容鍵盤遊走
//         itemAllTarget.forEach((n, i) => {
//           if (i > 0) {
//             n.addEventListener('keydown', (e) => {
//               if (mode === 'A') {
//                 if ((e.which === 9 && !e.shiftKey && e.target === lastItem && modeABtn[index] !== lastTab) || (e.which === 9 && e.shiftKey && e.target === firstItem)) {
//                   modeABtn[index]?.focus();
//                 }
//               } else if (mode === 'B') {
//                 if (e.which === 9 && e.shiftKey) {
//                   if (e.target === firstItem) {
//                     modeBBtn[index]?.focus();
//                   } else if (itemAllTarget.length === 1) {
//                     modeBBtn[index - 1]?.focus();
//                   }
//                 }
//               }
//             });
//           }
//         });
//       });

//       window.addEventListener('resize', init);
//     });
//   }
// }

// tabFunction({
// target: '.tabSet',
// openFirst: false, // 預設先展開所有內容，鍵盤的自動開合功能無效
// openSwitch: true, // 是否可開合/切換
// autoClose: true, // 自動關閉其他開啟內容
// modeSwitch: true, // 預設模式自動切換，尺寸以上tab功能，尺寸以下手風琴功能
// width: 767, // 尺寸以上tab功能，尺寸以下手風琴功能
// index: 0, // 預設開啟第幾個
// });

document.addEventListener("DOMContentLoaded", function () {
  const cpDivs = document.querySelectorAll('.cp iframe');

  cpDivs.forEach(iframe => {
    // 移除 width 和 height 屬性
    iframe.removeAttribute('width');
    iframe.removeAttribute('height');

    // 將 iframe 包裝在一個具有 RWD 的 div 裡
    const wrapper = document.createElement('div');
    wrapper.style.position = 'relative';
    wrapper.style.paddingBottom = '56.25%'; // 16:9 比例
    wrapper.style.height = '0';
    wrapper.style.overflow = 'hidden';

    iframe.style.position = 'absolute';
    iframe.style.top = '0';
    iframe.style.left = '0';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = '0';

    const parent = iframe.parentNode;
    parent.replaceChild(wrapper, iframe);
    wrapper.appendChild(iframe);
  });
});
// 住院整合照護服務進階搜尋收合展開
$(document).ready(function() {
  // === 預設是否展開 ===
  var isSearchAdvVisible = true; // true = 展開；false = 收合

  // 根據預設開關狀態來處理初始顯示
  if (!isSearchAdvVisible) {
    $('.search_adv').hide();
    $('.filters').removeClass('active');
  } else {
    $('.search_adv').show();
    $('.filters').addClass('active');
  }

  // 點擊 .filters 切換開關與樣式
  $('.filters').on('click', function() {
    $('.search_adv').slideToggle();
    $(this).toggleClass('active');
  });
});
//住院整合照護服務下拉選單
$(document).ready(function () {
  // 點擊展開/收起選單
  $('.filter_content .selected_option').on('click', function (e) {
    e.stopPropagation();
    $('.filter_content .options_list').not($(this).next()).hide(); // 關閉其他
    $(this).next('.options_list').toggle();
  });

  // 點選選項 -> 更換文字 + 關閉選單
  $('.filter_content .options_list li').on('click', function (e) {
    e.stopPropagation();
    var selectedText = $(this).text();
    $(this).closest('.filter_content').find('.selected_option').text(selectedText);
    $(this).parent().hide();
  });

  // 點畫面其他地方關閉選單
  $(document).on('click', function () {
    $('.filter_content .options_list').hide();
  });
});

