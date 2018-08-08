var fs = require('fs');

var dir = '/sys/class/gpio';
var gpio3 = dir + '/gpio3';

fs.writeFileSync(dir + '/export', 3); 
fs.writeFileSync(gpio3 + '/direction', 'out');
// fs.writeFileSync(gpio3 + '/value', 1);

var cnt = 0;

setInterval(function(){
  cnt++;
  fs.writeFileSync(gpio3 + '/value', cnt % 2);
  // fs.writeFileSync(dir + '/unexport', 3);
}, 500);
