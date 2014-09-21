var http = require('http');
var sys = require('sys');
var server = http.createServer(function(req, res) {

 var origin = (req.headers.origin || "*");
 console.log('req.url='+req.url);
    
  if(req.url === '/location/states') {
  res.writeHead(200, {
          'access-control-allow-origin': origin,
          'Content-Type': 'application/json'
     });
     res.end(JSON.stringify(getStates()));
 } else if (req.url === '/parcel/1') {
  res.writeHead(200, {
          'access-control-allow-origin': origin,
          'Content-Type': 'application/json'
     });
     res.end(JSON.stringify(getTrackInfoJson()));
 } else {
    console.log('default');
  res.writeHead(200, {
          'access-control-allow-origin': origin,
          'Content-Type': 'application/json'
     });
     res.end(JSON.stringify(getData(req.url))); 
 }

});
//server.listen(8124, "127.0.0.1");
//console.log('Server running at http://127.0.0.1:8124/');
/**
 * Grab the openshift ip and port for our 
 * public http server or default to localhost
 **/
var ip = process.env.OPENSHIFT_NODEJS_IP ||
         process.env.NODEJS_IP ||
         '127.0.0.1';
var listenPort = process.env.OPENSHIFT_NODEJS_PORT ||
           process.env.NODEJS_PORT ||
           8124;


server.listen(listenPort, ip, 511, function() {
  // // Once the server is listening we automatically open up a browser
  //var open = require('open');
  //open('http://localhost:' + config.server.listenPort + '/');
});
console.log('Angular App Server - listening on port: ' + listenPort);
//secureServer.listen(config.server.securePort);

function getStatsInfoJson() {
return { "statinfo1":{
  "type":"bar",
  "category":"parcelslast6",
  "data" : [232, 242, 32, 342, 100, 98]
 }
 }
}

function getStates() {
return { "states": [
 {
  "name":"CA",
  "state":"California"
 },
 {
  "name":"WA",
  "state":"Washington"
 },
 {
  "name":"OR",
  "state":"Oregone"
 }
 ]};
}



function getTrackInfoJson() {
 return { 
     "trackinfo":{
         "parcelnr":123456,
         "provider":"DHL",
         "trackdetails":{
             "trackdetail":[
                 {
                     "date":"01.01.2010",
                     "info":"Got parcel from Customer"
                 },
                 {
                     "date":"02.01.2010",
                     "info":"Shipped to Target depot"
                 },
                 {
                     "date":"03.01.2010",
                     "info":"Delivered to Customer"
                 }
             ]
         }
     }
 };
}

function getData(req) {
    var result; 
    if (req === '/null') {
         result = [{"name":"TEST","value":"test","parent":null,"id":100,"parentName":null,"children":null,
             "longdesc":"test","parentId":null,"position":null,"markDefault":false,"isSeeded":null,"cacheKey":null,
             "dropDownModelObjet":null,"dropDownModelList":null,"columnModelList":null,"cacheValue":null,"isVersionable":null}];
    } else if 
(req === '/100') {
         result = [{"name":"FREMONT","value":"Fremont","parent":null,"id":101,"parentName":null,"children":null,"longdesc":"Fremont",
"parentId":null,"position":null,"markDefault":false,"isSeeded":null,"cacheKey":null,"dropDownModelObjet":null,
"dropDownModelList":null,"columnModelList":null,"cacheValue":null,"isVersionable":null},
{"name":"SAN JOSE","value":"San Jose","parent":null,"id":103,"parentName":null,"children":null,"longdesc":"San Jose","parentId":null,"position":null,"markDefault":false,"isSeeded":null,"cacheKey":null,"dropDownModelObjet":null,"dropDownModelList":null,"columnModelList":null,"cacheValue":null,"isVersionable":null},
{"name":"FREMONT1","value":"Fremont","parent":null,"id":104,"parentName":null,"children":null,"longdesc":"Fremont1",
"parentId":null,"position":null,"markDefault":false,"isSeeded":null,"cacheKey":null,"dropDownModelObjet":null,
"dropDownModelList":null,"columnModelList":null,"cacheValue":null,"isVersionable":null},
{"name":"SAN CRISTOBAL","id":105,"children":null},
{"name":"SAN PHILLIPE","id":106,"children":null},
{"name":"SAN CARLOS","id":107,"children":null},
{"name":"SAN FRANCISCO","id":108,"children":null},
{"name":"HAYWARD","id":109,"children":null},
{"name":"CASTRO VALLEY","id":110,"children":null},
{"name":"OAKLAND","id":111,"children":null},
{"name":"SAN RAFAEL","id":112,"children":null},
{"name":"WALNUT CREEK","id":113,"children":null},
{"name":"PLEASANTON","id":114,"children":null}];
    } else if 
(req === '/100-1') {
         result = [{"name":"FREMONT","value":"Fremont","parent":null,"id":101,"parentName":null,"children":null,"longdesc":"Fremont","parentId":null,"position":null,"markDefault":false,"isSeeded":null,"cacheKey":null,"dropDownModelObjet":null,"dropDownModelList":null,"columnModelList":null,"cacheValue":null,"isVersionable":null},{"name":"SAN JOSE","value":"San Jose","parent":null,"id":103,"parentName":null,"children":null,"longdesc":"San Jose","parentId":null,"position":null,"markDefault":false,"isSeeded":null,"cacheKey":null,"dropDownModelObjet":null,"dropDownModelList":null,"columnModelList":null,"cacheValue":null,"isVersionable":null},
{"name":"SAN JUAN","id":104,"children":null},
{"name":"SAN CRISTOBAL","id":105,"children":null},
{"name":"SAN PHILLIPE","id":106,"children":null}
];
    } else if 
(req === '/100-2') {
         result = [
{"name":"SAN CARLOS","id":107,"children":null},
{"name":"SAN FRANCISCO","id":108,"children":null},
{"name":"HAYWARD","id":109,"children":null},
{"name":"CASTRO VALLEY","id":110,"children":null},
{"name":"OAKLAND","id":111,"children":null}
];
    } else if 
(req === '/100-3') {
         result = [
{"name":"SAN RAFAEL","id":112,"children":null},
{"name":"WALNUT CREEK","id":113,"children":null},
{"name":"PLEASANTON","id":114,"children":null}
];
    } else if 
(req === '/101') {
         result = [{"name":"1000 MOWRY","value":"1000 Mowry","parent":null,"id":102,"parentName":null,"children":null,"longdesc":"1000 Mowry","parentId":null,"position":null,"markDefault":false,"isSeeded":null,"cacheKey":null,"dropDownModelObjet":null,"dropDownModelList":null,"columnModelList":null,"cacheValue":null,"isVersionable":null},{"name":"1 FREMONT BLVD","value":"1 Fremont Blvd","parent":null,"id":104,"parentName":null,"children":null,"longdesc":"1 Fremont Blvd","parentId":null,"position":null,"markDefault":false,"isSeeded":null,"cacheKey":null,"dropDownModelObjet":null,"dropDownModelList":null,"columnModelList":null,"cacheValue":null,"isVersionable":null}];
   }    
    return result;
}



function getLocationRoot() {
    return {root:"root"};
}

