// Api Key: AIzaSyDVo1wSditnf5dqWnDXSCbG_DYmLK_uiEY

$("#getplacebtn").click(function(){
  // getPlaceID( createPlacesArr() );
  var throwaway = "112 Appomattox Court, West Lafayette, IN";
  getPlaceID(throwaway);
  // console.log('coordinatesArray', coordinatesArray);
  // var testAddress = "1521 Shininig Armor Ln, West Lafayette, IN" ;
  // getPlaceIDTest(testAddress)
  // console.log('turned off'); 
});

$("#getdistance").click(function(){
  getDistance(coordsArray);
});

$("#goButton").click(function(){
  getRoute();
});

var slowdown = function (){ setTimeout(() => { alert("slowlin") }, 1000) };

// generate aray with city and state name attached
function createPlacesArr() {
  let places = [];
  let placesWithoutCities = ["2721 Cambridge St.", "989 Onyx St.", "982 Onyx St.", "3143 Litchfield Lane", "3937 Deerpath Place", "5155 Flowermound Dr", "1004 Eton St.", "2936 Wilshire Ave.", "3650 Westmoreland Dr.", "971 Onyx St.", "3635 Cavendish Ct.","701 Avondale St.", "3640 Westmoreland Dr.", "129 Pathway Lane", "3401 Morgan St.", "3121 Stratus Dr.", "3682 Bixford Lane", "3561 Westmoreland Dr.", "1035 Onyx St.", "230 Cumberland Ave.", "1126 Montgomery St", "1150 Montgomery St.", "2208 Sycamore St.", "2923 Browning St", "3309 Webster St.", "1109 Barlow St.", "993 Marwyck St.", "1513 Roundtable Dr.", "2913 Browning St.", "1521 Shininig Armor Ln", "1220 Kingswood Dr.", "3640 Farnsworth Dr.", "915 Hall Rd.", "2705 Cambridge St.", "3357 Hamilton St.", "534 Trace Five", "380 Cumberland Ave.", "2704 Cambridge St.", "845 LaGrange St.", "200 Cumberland Ave.", "997 Devon St.", "3119 Decatur St.", "817 Warrick St.", "2909 Browning St.", "220 Hartman Ct.", "275 Sinclair Dr.", "246 Schilling St.", "1031 Marwyck St.", "3110 Onyx St.", "3318 Humboldt St.", "998 Devon St.", "3916 N 300 West", "436 Jennings St.", "2912 Browning St.", "287 Crum St.", "1166 Montgomery St.", "231 Schilling St.", "112 Appomattox Court", "3556 Hamilton St.", "5172 Flowermound Dr.", "818 Barlow St.", "3435 Putnam St.", "810 Elmwood Dr.", "1715 Woodland Ave.", "3603 W Capilano Dr.", "3132 Bluster Dr.", "988 Onyx St.", "993 Marwyck St.", "136 Creighton St.", "610 Meridian St.", "843 Sparta St.", "1019 Marwyck St.", "1004 Devon St.", "977 Onyx St", "3413 Covington St", "3157 Humboldt St.", "3413 Elkhart St.", "1005 Eton St.", "3019 Decatur St.", "992 Devon St.", "3137 Stratus Dr.", "2930 Yeager St.", "990 Devon St.", "2930 Wilshire Ave.", "999 Devon St.", "515 Park Ridge Dr.", "350 Sagamore Pkwy W", "2913 Manchester St.", "2712 Cambridge St.", "431 Jennings St.", "220 E Pine St", "2704 Cambridge St.", "1010 Northwestern Ave.", "994 Devon St.", "2710 Covington St.", "2807 Henderson St.", "2813 Henderson St.", "948 Marwyck St.", "232 Hartman Ct.", "5312 SR 26W", "3313 Secretariat Circle", "3348 Humboldt St.", "2950 Yeager Rd.", "840 Ashland St.", "3072 Georgton Dr.", "1000 Eton St.", "512 Parkridge Dr.", "2615 Manchester St.", "126 Pathway Lane", "1002 Happy Hollow Rd.", "203 Jennings St.", "2921 Browning St.", "1655 W. 350 North", "5316 State Rd 26 W", "901 Windsor Dr.", "436 Lagrange St.", "5180 Flowermound Dr.", "2918 Browning St.", "801 Essex St.", "3345 Humboldt St.", "3316 Webster St.", "3342 Humboldt St.", "556 Smokey Hill Rd.", "1109 Montgomery St.", "2221 Sandpiper Ct N", "1008 Devon St.", "2220 Drexel Dr.", "3737 Capilano Dr.", "5319 Lynnwood Dr.", "113 Northwood Dr.", "141 Drury Lane", "3440 W 250N", "4828 Homewood Dr.", "915 Elm Dr.", "612 Eden St.", "406 Buchanan Dr.", "3035 Decatur St.", "3330 Crawford St.", "3311 Edgerton St.", "834 Pike St.", "616 Crawford St", "3135 Litchfield Lane", "212 Tamiami Trail", "996 Devon St.", "509 Park Ridge Dr.", "180 Creighton St.", "3636 Farnsworth Dr.", "1805 King Eider Dr.", "5147 Flowermound Dr.", "3357 Humboldt St.", "1136 Cherry Lane", "987 Marwyck St.", "1746 King Eider Dr.", "621 Robinson St.", "3308 Jasper St.", "2769 Linda Lane", "3933 Deerpath Place", "3116 Covington St.", "434 Buchanan Dr.", "3116 Covington St.", "1125 Montgomery St.", "656 Matthew St.", "248 St. Joseph Ct.", "104 Tecumsah Park Ct.", "3365 Edgerton St.", "1814 Chenango Pl", "818 Essex St.", "255 St. Joseph Court", "733 Warrick St", "224 Jennings St.", "5159 Flowermound Dr.", "3486 Burnley Dr.", "3225 Stratus Ct.", "219 Tamiami Trail", "187 W 650N", "2248 Indian Trail Dr.", "127 Pawnee Dr.", "6276 Musket Way", "2218 Sandpiper Ct. North", "3364 Webster St.", "2915 Browning St.", "1117 Montgomery St.", "201 Quincy St", "3127 Hamilton St.", "315 Hamilton St.", "2800 Covington St."];
  
  placesWithoutCities.forEach( (place) => {
    places.push(place + ", West Lafayette, IN");
  });

  // return places ;
  return placesWithoutCities;
};

list = createPlacesArr();

console.log('list[56]', list[57]);


function getPlaceIDTest(query) {
    $.get('https://maps.googleapis.com/maps/api/place/textsearch/json?query='+query+'&key=AIzaSyDVo1wSditnf5dqWnDXSCbG_DYmLK_uiEY', function(data){
      console.log('data', data);
      
      // console.log('lat', data.results[0].geometry.location.lat);
      // console.log('lng', data.results[0].geometry.location.lng);
      // let lat = data.results[0].geometry.location.lat;
      // let lng = data.results[0].geometry.location.lng;
      // let coordinates = lng + "," + lat ;
      // console.log('coordinates test', coordinates);
    });
};


// transform places in to Latitude and Longitude coordinates
var coordinatesArray = [];
function getPlaceID(array) {
  // var place_id ;
  // array.forEach((query)=>{
  //   $.get('https://maps.googleapis.com/maps/api/place/textsearch/json?query='+query+'&key=AIzaSyDVo1wSditnf5dqWnDXSCbG_DYmLK_uiEY', function(data){
  //     console.log('lat', data.results[0].geometry.location.lat);
  //     console.log('lng', data.results[0].geometry.location.lng);
  //     let lat = data.results[0].geometry.location.lat;
  //     let lng = data.results[0].geometry.location.lng;
  //     let coordinates = lng + "," + lat ;
  
  //     coordinatesArray.push(coordinates);
  
  //     // place_id = data.results[0].place_id;
  //     // console.log('get Place ID', place_id);
  //   })
  //   .done(()=>{
  //   });
  // });

  $.get('https://maps.googleapis.com/maps/api/place/textsearch/json?query='+array+'&key=AIzaSyDVo1wSditnf5dqWnDXSCbG_DYmLK_uiEY', function(data){
    console.log('lat', data.results[0].geometry.location.lat);
    console.log('lng', data.results[0].geometry.location.lng);
    let lat = data.results[0].geometry.location.lat;
    let lng = data.results[0].geometry.location.lng;
    let coordinates = lng + "," + lat ;

    coordinatesArray.push(coordinates);
    console.log('coordinates Array fin: ', coordinatesArray);
    
    // place_id = data.results[0].place_id;
    // console.log('get Place ID', place_id);
  })
  .done(()=>{
  });
  
};

//osrm api
var coordsArray = ["-86.9116559,40.461655", "-86.921173,40.46331199999999", "-86.92182,40.46331", "-86.90959199999999,40.4673048", "-86.9364658,40.4795477", "-86.97491,40.475311", "-86.90780629999999,40.4946867", "-86.90099339999999,40.47090149999999", "-86.92161779999999,40.45996969999999", "-86.92226699999999,40.450081", "-86.9229952,40.4576658", "-86.92029099999999,40.463401", "-86.921531,40.463736", "-86.9042097,40.4640966", "-86.9121128,40.5065488", "-86.922682,40.46330700000001", "-86.91655659999999,40.448682", "-86.9032374,40.4725059", "-86.9030104,40.47211", "-86.98910599999999,40.435795", "-86.9470585,40.46160639999999", "-86.90726099999999,40.457912", "-86.90367379999999,40.4702912", "-86.9206475,40.4563979", "-86.92214899999999,40.464022", "-86.900339,40.459672", "-86.97382999999999,40.449302", "-86.92192299999999,40.46402299999999", "-86.92192299999999,40.46402299999999", "-86.9209882,40.4558656", "-86.922392,40.464772", "-86.92238429999999,40.4561841", "-86.90319699999999,40.470201", "-86.91618199999999,40.44306400000001", "-86.9213879,40.463311", "-86.902287,40.4597399", "-86.92333699999999,40.46582300000001", "-86.92049399999999,40.464429", "-86.92251870000001,40.4570323", "-86.92251870000001,40.4570323", "-86.91167399999999,40.45708200000001", "-86.92422619999999,40.4599124", "-86.899991,40.46002", "-86.9215006,40.4560527", "-86.92170999999999,40.4558068", "-86.907268,40.458125", "-86.92175399999999,40.466011", "-86.92249489999999,40.45743569999999", "-86.902929,40.436438", "-86.9230437,40.457017", "-86.9235267,40.45966790000001", "-86.91345799999999,40.462501", "-86.9037401,40.4616814", "-86.97474749999999,40.4698318", "-86.90358599999999,40.43591300000001", "-86.93565989999999,40.4809583", "-86.90704099999999,40.450664", "-86.904212,40.468008", "-86.912605,40.459863", "-86.9204049,40.4594798", "-86.9210629,40.45562419999999", "-86.90159770000001,40.4464379", "-86.9151212,40.4672016", "-86.94708179999999,40.4622685", "-86.90441299999999,40.4733185", "-86.91595099999999,40.4428539", "-86.913641,40.464265", "-86.91268819999999,40.46016090000001", "-86.9229896,40.45885539999999", "-86.9214539,40.4588589", "-86.95818,40.44019299999999", "-86.9229841,40.4598956", "-86.90440710000001,40.4634556", "-86.90970899999999,40.44376", "-86.9223178,40.45677069999999", "-86.9140998,40.45069039999999", "-86.92173199999999,40.463736", "-86.92152949999999,40.45702369999999", "-86.9219194,40.4594617", "-86.9047627,40.4275769", "-86.9216579,40.45682800000001", "-86.94530549999999,40.46210009999999", "-86.90733089999999,40.4669352", "-86.92151559999999,40.456582", "-86.9106985,40.468021", "-86.9134108,40.4344113", "-86.96760739999999,40.44236379999999", "-86.90859280000001,40.4957151", "-86.93700899999999,40.47727099999999", "-86.9048794,40.46432650000001", "-86.9149776,40.43535629999999", "-87.006254,40.446193", "-86.9225359,40.464021", "-86.912182,40.4684928", "-86.901938,40.459563", "-86.91795189999999,40.4486959", "-86.96258139999999,40.4735939", "-86.9099207,40.4539725", "-86.92136599999999,40.466677", "-86.9139403,40.4570951", "-86.903556,40.460123", "-86.9242385,40.4601718", "-86.965526,40.441883", "-86.90221249999999,40.4639461", "-86.921061,40.45961200000001", "-86.908164,40.4964152", "-86.9014909,40.4468511", "-86.922051,40.46654799999999", "-86.9204434,40.4555931", "-86.9128221,40.4558751", "-86.9172669,40.4475662", "-86.905456,40.46806000000001", "-86.8983949,40.4351232", "-86.921447,40.4665419", "-86.93681,40.467225","-86.9220392,40.4566504", "-86.91389199999999,40.4511251", "-86.9223631,40.45895790000001", "-86.91787,40.4443725", "-86.911987,40.4428569", "-86.9123709,40.458373", "-86.92397,40.46599200000001", "-86.90381459999999,40.4620847", "-86.902456,40.466833", "-86.972723,40.473822", "-86.9036868,40.4323547", "-86.9215198,40.45629", "-86.97055499999999,40.45336", "-86.905811,40.458188", "-86.89556569999999,40.4670613", "-86.9119364,40.465971", "-86.9006395,40.4709027", "-86.9036742,40.47012640000001", "-86.91445999999999,40.46559", "-86.93540229999999,40.44268840000001", "-86.9223581,40.4557842", "-86.906363,40.44906", "-86.974841,40.474783", "-86.8708375,40.3756539", "-86.9236167,40.43918240000001", "-86.89584889999999,40.4674077", "-86.92189599999999,40.4668149", "-86.8938199,40.4831527", "-86.8949897,40.466973", "-86.923974,40.467129", "-86.9214372,40.4584216", "-86.91160699999999,40.4663139", "-86.9208438,40.4583442", "-86.9015122,40.4643646", "-86.9011941,40.4684652", "-86.9138974,40.45832550000001", "-86.90787329999999,40.49496029999999", "-86.9100258,40.5106672", "-86.9144355,40.5049298", "-86.92190939999999,40.45991069999999", "-87.0066329,40.44619100000001", "-86.907856,40.45757599999999", "-86.9134504,40.45068019999999", "-86.93926189999999,40.4443481", "-86.907849,40.47492399999999", "-86.902863,40.46066099999999", "-86.921727,40.46402399999999", "-86.936115,40.4430479", "-86.91333379999999,40.4582861", "-86.958941,40.43704599999999", "-86.914131,40.46357", "-86.914131,40.46357", "-86.8976543,40.4840544", "-87.007003,40.446646", "-86.85873699999999,40.5112359", "-86.92218199999999,40.46713289999999", "-86.9055039,40.449656", "-86.9136365,40.45712109999999", "-86.92117569999999,40.45835829999999", "-86.9057196,40.4638648", "-86.912723,40.464264", "-86.922749,40.466002", "-86.95884799999999,40.489103", "-86.93999099999999,40.473621", "-86.94443559999999,40.4634988", "-86.9227051,40.45987420000001", "-86.9147869,40.5049379", "-86.9079381,40.4941612", "-86.9043732,40.42750729999999", "-86.93930929999999,40.4448615", "-86.901487,40.4679963"];
console.log('number 55,56,57:', coordsArray[54], coordsArray[55], coordsArray[56]);
console.log('length coordsArray', coordsArray.length);



function getDistance(array) {
  let coordString ;
  // array.forEach((item)=>{
  //   coordString += item+";";
  // });
  // console.log('coordString', coordString);
  // 100 coordinate max limit from OSRM
  coordString = "-86.9116559,40.461655;-86.921173,40.46331199999999;-86.92182,40.46331;-86.90959199999999,40.4673048;-86.9364658,40.4795477;-86.97491,40.475311;-86.90780629999999,40.4946867;-86.90099339999999,40.47090149999999;-86.92161779999999,40.45996969999999;-86.92226699999999,40.450081;-86.9229952,40.4576658;-86.92029099999999,40.463401;-86.921531,40.463736;-86.9042097,40.4640966;-86.9121128,40.5065488;-86.922682,40.46330700000001;-86.91655659999999,40.448682;-86.9032374,40.4725059;-86.9030104,40.47211;-86.98910599999999,40.435795;-86.9470585,40.46160639999999;-86.90726099999999,40.457912;-86.90367379999999,40.4702912;-86.9206475,40.4563979;-86.92214899999999,40.464022;-86.900339,40.459672;-86.97382999999999,40.449302;-86.92192299999999,40.46402299999999;-86.92192299999999,40.46402299999999;-86.9209882,40.4558656;-86.922392,40.464772;-86.92238429999999,40.4561841;-86.90319699999999,40.470201;-86.91618199999999,40.44306400000001;-86.9213879,40.463311;-86.902287,40.4597399;-86.92333699999999,40.46582300000001;-86.92049399999999,40.464429;-86.92251870000001,40.4570323;-86.92251870000001,40.4570323;-86.91167399999999,40.45708200000001;-86.92422619999999,40.4599124;-86.899991,40.46002;-86.9215006,40.4560527;-86.92170999999999,40.4558068;-86.907268,40.458125;-86.92175399999999,40.466011;-86.92249489999999,40.45743569999999;-86.902929,40.436438;-86.9230437,40.457017;-86.9235267,40.45966790000001;-86.91345799999999,40.462501;-86.9037401,40.4616814;-86.97474749999999,40.4698318;-86.90358599999999,40.43591300000001;-86.93565989999999,40.4809583;-86.90704099999999,40.450664;-86.904212,40.468008;-86.912605,40.459863;-86.9204049,40.4594798;-86.9210629,40.45562419999999;-86.90159770000001,40.4464379;-86.9151212,40.4672016;-86.94708179999999,40.4622685;-86.90441299999999,40.4733185;-86.91595099999999,40.4428539;-86.913641,40.464265;-86.91268819999999,40.46016090000001;-86.9229896,40.45885539999999;-86.9214539,40.4588589;-86.95818,40.44019299999999;-86.9229841,40.4598956;-86.90440710000001,40.4634556;-86.90970899999999,40.44376;-86.9223178,40.45677069999999;-86.9140998,40.45069039999999;-86.92173199999999,40.463736;-86.92152949999999,40.45702369999999;-86.9219194,40.4594617;-86.9047627,40.4275769;-86.9216579,40.45682800000001;-86.94530549999999,40.46210009999999;-86.90733089999999,40.4669352;-86.92151559999999,40.456582;-86.9106985,40.468021;-86.9134108,40.4344113;-86.96760739999999,40.44236379999999;-86.90859280000001,40.4957151;-86.93700899999999,40.47727099999999;-86.9048794,40.46432650000001;-86.9149776,40.43535629999999;-87.006254,40.446193;-86.9225359,40.464021;-86.912182,40.4684928;-86.901938,40.459563;-86.91795189999999,40.4486959;-86.96258139999999,40.4735939;-86.9099207,40.4539725;-86.92136599999999,40.466677;-86.9139403,40.4570951";
  
  $.get("http://router.project-osrm.org/table/v1/driving/"+coordString, function(data){
    console.log('data from OSRM', data);
    data.durations
  });
};

//What comes back from OSRM


function getRoute() {
  $.get('https://maps.googleapis.com/maps/api/directions/json?origin=Adelaide,SA&destination=Adelaide,SA&waypoints=optimize:true|Barossa+Valley,SA|Clare,SA|Connawarra,SA|McLaren+Vale,SA&key=AIzaSyDVo1wSditnf5dqWnDXSCbG_DYmLK_uiEY', function(data){
  console.log('data', data);
  
  $('#result').html(data);
  });
};