var arg = process.argv[2],
    ffmpeg = require('fluent-ffmpeg');

ffmpeg.ffprobe(arg, function(err,meta){
    console.log(err,meta);
})