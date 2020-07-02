var fs = require('fs');
var path = require('path');

var dir = process.argv[2]
var filter = process.argv[3]

fs.readdir(dir, function (err, list) {
    if (err) {
        return console.log(err)
    }
    // console.log(list)

    for (let index = 0; index < list.length; index++) {
        if (path.extname(list[index]) == ".".concat(filter)) {
            console.log(list[index])
        }
    }
})

