var fs = require('fs')
var path = require('path')

module.exports = function (dir, ext, callback) {
    ext = '.' + ext

    fs.readdir(dir, function (err, list) {
        if (err) return callback(err)
        // console.log(list);
        
        var filteredList = []
        list.forEach(element => {
            if(path.extname(element) == ext) {
                filteredList.push(element)
            }
        })
    return callback(null, filteredList)
    })
}