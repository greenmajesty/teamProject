var fs = require('fs');
var posthtml = require('posthtml');
var include = require('posthtml-include');

var files = ['index.html', 'subpage.html', 'detail.html', 'signin.html','login.html'];

files.forEach(function(file) {
    var html = fs.readFileSync(file);

    posthtml()
        .use(include({ encoding: 'utf8' }))
        .process(html, { from: file })
        .then(function(result) {
            fs.writeFileSync(file, result.html);
        });
});