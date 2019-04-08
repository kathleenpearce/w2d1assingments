var getHTML = require('./http-functions.js')

function printLength (html) {
  console.log('length', html.length);
}

function printReverse (html) {
   console.log(html.split('').reverse().join(''));

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printReverse);