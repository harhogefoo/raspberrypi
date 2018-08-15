var fs = require('fs');

var dir = '/sys/class/gpio';
var gpio3 = dir + '/gpio3';

fs.writeFileSync(dir + '/export', 3); 
fs.writeFileSync(gpio3 + '/direction', 'out');

var cnt = 0;

function isExistFile(file) {
  try {
    fs.statSync(file);
    return true
  } catch(err) {
    if(err.code === 'ENOENT') return false
  }
}

var intervalFn = setInterval(function(){
  cnt++;
  if (isExistFile(gpio3)) {
    fs.writeFileSync(gpio3 + '/value', cnt % 2);
  }
  if (cnt === 10) {
    if (isExistFile(gpio3)) {
      fs.writeFileSync(dir + '/unexport', 3);
    }
    clearInterval(intervalFn);
  }
}, 500);
