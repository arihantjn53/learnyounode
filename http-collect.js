const http = require('http')

var url = process.argv[2]

http.get(url, function callback(response) {
    response.setEncoding('utf8')
    let rawData = ''
    response.on('error', function (error) {
        console.log(error)
    })
    response.on('data', function (data) {
        rawData += data.toString()
    })
    response.on('end', function () {
        console.log(rawData.length)
        console.log(rawData)
    })
})