var fs = require('fs'), str = 'string to append to file';
/*fs.open('chicken.txt', 'a', 666, function( e, id ) {
  fs.write( id, str, null, 'utf8', function(){
    fs.close(id, function(){
      console.log('file closed');
    });
  });
});*/
fs.appendFile('message.txt', 'data to append', (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});