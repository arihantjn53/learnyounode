const fs = require('fs')
var n_lines = undefined

fs.readFile(process.argv[2], function doneReading(err, fileContents) {
    if (err) {
        return console.log(err)
    }
    n_lines = fileContents.toString().split('\n').length - 1
    console.log(n_lines)
})
