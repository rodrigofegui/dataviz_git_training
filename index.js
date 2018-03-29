var http = require ('http');

//  req = request/pedido
//  res = response
var server = http.createServer(function(req, res){
    res.writeHead (200, {'Content-type' : 'text/plain'});
    res.write('Olá Mundo!');
    res.end();
});

server.listen(3600, function(){
    console.log('Servidor na porta 3600');
});
