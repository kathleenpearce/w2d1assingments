var getHTML = require('./http-functions.js')

function printLength (html) {
  console.log('length', html.length);
}

function printLowerCase (html) {
   console.log(html.toLowerCase())

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printLowerCase);