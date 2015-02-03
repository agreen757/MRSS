//Serving the mrss feed

<<<<<<< HEAD
var Feed = require('rss')
=======
var Feed = require('feed')
>>>>>>> e69f24340b640eb1eff47ad8e20670dc22fe0126

//Example information

var info = [{
<<<<<<< HEAD
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
=======
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
>>>>>>> e69f24340b640eb1eff47ad8e20670dc22fe0126
    })
    
    for(var i in info){
        //console.log(info[i])
<<<<<<< HEAD
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
=======
        feed.addItem({
            title: info[i].title,
            link: info[i].link,
            description: info[i].description,
            content: info[i].content
        })
    }
    console.log(feed)
    return cb(null,feed)
>>>>>>> e69f24340b640eb1eff47ad8e20670dc22fe0126
}