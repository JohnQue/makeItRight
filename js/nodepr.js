var fs = require('fs');

fs.readdir('../images', function(err, filelist){
    console.log(filelist);
})
