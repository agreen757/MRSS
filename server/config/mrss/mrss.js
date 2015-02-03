//Serving the mrss feed

var Feed = require('rss')

//Example information

var info = [{
            title: "Harlem Shake is for Lovers",
            link: "link",
            description: "some description",
            content: "video",
            author: "indmusic"
            }]

exports.getFeed = function(cb){
    var feed = new Feed({
        title: 'INDMUSICNETWORK Feed',
        description: 'this is a test feed',
        link: 'http://example.com',
        image: 'http://example.com/logo',
        copyright: '@Copyright INDMUSIC inc.  All rights reserved',
        author: 'INDMUSIC'
    })
    
    for(var i in info){
        //console.log(info[i])
        feed.item({
            title: info[i].title,
            link: info[i].link,
            description: info[i].description,
            content: info[i].content,
            author: info[i].author,
            custom_elements:['<media:content url="http://someurl/mov.mov" fileSize="416461481" type="QuickTime / MOV" medium="video" isDefault="true" expression="full" bitrate="71291552" channels ="2" duration="46.733333" height="720" width="1280" lang="en" />']
            
        })
    }
    console.log(feed)
    var feedfin = feed.xml()
    return cb(null,feedfin)
}