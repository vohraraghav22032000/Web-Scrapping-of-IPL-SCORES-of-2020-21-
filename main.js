
const url = 'https://www.espncricinfo.com/series/ipl-2020-21-1210595'

const request = require('request')
const cheerio = require('cheerio')

const fs = require('fs')
const path = require('path')

const allMatchObj = require("./allMatch")

function dirCreator(filePath){
    if(fs.existsSync(filePath)==false){
        fs.mkdirSync(filePath)
    }
}

// __dirPath : gives path of a current directory
let iplPath = path.join(__dirname , "IPL")
console.log("Paht of a current directory" , __dirname)

dirCreator(iplPath)

console.log("before")

request(url,cb)

function cb(err,response,html){
    if(err){
        console.error(err)
    }
    else{
        extractLink(html)
    }
}

function extractLink(html){
    let $ = cheerio.load(html)
    let anchorElem = $('a[data-hover="View All Results"]')

    console.log("anchor element is --------------------> " +anchorElem)
    let link =  anchorElem.attr("href")

    console.log(link)
    

    let fullLink = "https://www.espncricinfo.com" + link

    console.log(fullLink)

    allMatchObj.getAllMatch(fullLink)
}

//IN EXAMPLE.JSON FILE
//store keys in double codes
//we can give space here in keys 
//no comments allowed
//comma not allowed after last key
//boolean and integer values does not require double codes

//JSON FILE IS USED TO BUILD API




console.log("after")
