const fetch = require('node-fetch')
const cheerio = require('cheerio')

const url = 'https://en.wikipedia.org/wiki/George_Foreman'

function searchBoxer() {
  return fetch(url)
    .then( response => response.text())
    .then(body => {
      let boxerRec = []
      const $ = cheerio.load(body)
      $('.wikitable').not('.collapsible').not('.sortable')
        .children()
        .find("tr").each(function(i, elem){
          boxerRec[i] = {
            "number": $(this).find("td:nth-child(1)").text().replace(/\n/g, ''),
            "result": $(this).find("td:nth-child(2)").text().replace(/\n/g, ''),
            "record": $(this).find("td:nth-child(3)").text().replace(/\n/g, ''),
            "opponent": $(this).find("td:nth-child(4)").text().replace(/\n/g, ''),
            "type": $(this).find("td:nth-child(5)").text().replace(/\n/g, ''),
            "round": $(this).find("td:nth-child(6)").text().replace(/\n/g, ''),
            "date": $(this).find("td:nth-child(7)").text().replace(/\n/g, ''),
            "location": $(this).find("td:nth-child(8)").text().replace(/\n/g, ''),
            "notes": $(this).find("td:nth-child(9)").text().replace(/\n/g, '')
          }
        })
      return(boxerRec)
    })
}

module.exports = {
   searchBoxer
}




//////
/////////////
//////////////////
///////////
/////




// function searchMovie() {
//   return fetch(url)
//     .then( response => response.text())
//     .then(body => {
//       const movies = []
//       const $ = cheerio.load(body)
//       $('.findResult').each(function(i, element) {
//         const $element = $(element)
//         const $image = $element.find('td a img')
//         const $title = $element.find('td.result_text a')

//         const imdbID = $title.attr('href').match(/title\/(.*)\//)[1]

//         const movie = {
//           image: $image.attr('src'),
//           title: $title.text(),
//           imdbID
//         }
//         movies.push(movie)
//       })
//       return(movies)
//     })
// }

// module.exports = {
//    searchMovie
// }