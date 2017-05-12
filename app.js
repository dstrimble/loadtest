
var http = require('http');
var httpProxy = require('http-proxy');
 
var proxy = httpProxy.createProxyServer({});

// var server = restify.createServer({
//   name: 'MyApp'
// });

// server.use(restify.bodyParser({ mapParams: true }));

//  server.post('/loadtest', function create(req, res, next) {

//     restify.createJsonClient({url: 'http://jvdweb10901.jbhunt.com', requestTimeout: 50000, connectTimeout: 10000})
//             .post('/ws_rateService/service/currentMarketRatesForExternal', req.body, function(err, request, response, obj) {
//         if(err){
//             console.log(err);
            
//             session.send("No rate found");
//             session.replaceDialog("/");
//         }

//         if(response.body){ 

//             console.log(response.body);
//             res.body = response.body;
            
//             res.send(200);
//             return next();
//         } else {
//             res.body = 'fail';
//             res.send(500);
//             return next();
//         }

            
//     });
        
//  });

 
// server.listen(process.env.PORT || 8080);



var server = http.createServer(function(request, response) {

    proxy.web(request,  response, { target: 'http://jbhappinfobot-dev.jbhunt.com' });

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port); 
