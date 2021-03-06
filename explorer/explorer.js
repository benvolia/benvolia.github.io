var fs = require("fs");

var f = fs.readFileSync('./projects.json', 'utf8');
var projects = JSON.parse(f);
var html = ''
for (var key in projects) {
    var project = projects[key];
    var languages = ''
    for (var index in project.languages) {
        var language = project.languages[index]
        languages += ('<div class="btn btn-light fixed-width nonprofit" style="margin: 10px;">' + language + '</div>')
    }
    html += (
        '<div class="col-lg-4 col-sm-6">' +
        '<a class="portfolio-box" target="_blank" href="' + project.github + '">' +
        '<img class= "img-fluid" src = "images/portfolio/' + project.image + '" alt = "" >' +
        '<div class= "portfolio-box-caption" >' +
        '<div class="portfolio-box-caption-content">' +
        '<div class="project-category text-faded">' + project.category + '</div>' +
        '<div class="project-name">' + project.description + '</div>' +
        languages +
        '<br>' +
        '<i class= "fa fa-github" ></i >' +
        '</div ></div ></a >' +
        '</div >'
    );
}
fs.writeFile('explorer.html', html)
console.log('end')