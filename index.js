var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');
const exec = require('child_process').exec

app.listen(8081);
cronMotor();
function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }
    res.writeHead(200);
    res.end(data);
  });
}

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

function cronMotor(){
  exec('echo "#'+' segundo-¡¡¡ '+' = Descripcion del crontab de abajo" >> /home/isaac/Documentos/node/crontabs/mycrontab'+2)
//  exec('echo "'+a+' python /home/martin/correo.py" >> /home/martin/mycrontab')
  exec('crontab /home/isaac/Documentos/node/crontabs/mycrontab'+2)
console.log("Simon se aplica")
}