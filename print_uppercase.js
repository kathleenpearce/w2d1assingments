var getHTML = require('./http-functions.js')

function printLength (html) {
  console.log('length', html.length);
}

function printUpperCase (html) {
   console.log(html.toUpperCase())

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printUpperCase);