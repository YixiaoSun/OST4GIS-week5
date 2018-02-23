/* =====================
 Copy your code from Week 4 Lab 2 Part 2 part2-app-state.js in this space
===================== */
var map = L.map('map', {
  center: [39.9522, -75.1639],
  zoom: 14
});
var Stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);

/* =====================
 CODE EXECUTED HERE!
===================== */

/*downloadData.done(function(data) {
  var parsed = parseData(data);
  //console.log(parsed);
  var markers = makeMarkers(parsed);
  //console.log(markers);
  plotMarkers(markers);
  removeMarkers(markers);
});*/

$(document).ready(function(){
  var marker = {
    "stringField1":undefined,
    "stringField2":undefined,
    "stringField3":undefined
  };

  var input= function(){
    marker.stringField1=$('#url-input').val();
    console.log("stringField1",marker.stringField1);
    marker.stringField2=$('#text-input1').val();
    console.log("textField2",marker.stringField2);
    marker.stringField3=$('#text-input2').val();
    console.log("textField3",marker.stringField3);
  };

  var parseData = function(data) {
    parsed = JSON.parse (data);
    return parsed;
  };

  var makeMarkers = function(data) {
    return _.map(data, function(object){return L.marker([object[marker.stringField2],object[marker.stringField3]]);});
  };

  var plotMarkers = function(data3) {
  for (i=0; i<data3.length; i++){
    data3[i].addTo(map);
    }
  };

  $('button#button').click(function(e){
    input();
    var downloadData = $.ajax(marker.stringField1);

    downloadData.done(function(data) {
      var parsed = parseData(data);
      var markers = makeMarkers(parsed);
      plotMarkers(markers);
    });
  });
});
