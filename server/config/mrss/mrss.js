//Serving the mrss feed

var Feed = require('feed')

//Example information

var info = [{
            title: "Title1",
            link: "link",
            description: "some description",
            content: "video"
            },
            {title: "Title2",
            link: "link2",
             description: "some description",
            content:"video"}]

exports.getFeed = function(cb){
    var feed = new Feed({
        title: 'Test feed',
        description: 'this is a test feed',
        link: 'http://example.com',
        image: 'http://example.com/logo',
        copyright: '@Copyright whatever.co.  All rights reserved',
        
        author: {
            name: 'Adrian Green',
            email: 'adrian@indmusicnetwork.com',
            link: 'http://www.indmusicnetwork.com'
        }
    })
    
    for(var i in info){
        //console.log(info[i])
        feed.addItem({
            title: info[i].title,
            link: info[i].link,
            description: info[i].description,
            content: info[i].content
        })
    }
    console.log(feed)
    return cb(null,feed)
}