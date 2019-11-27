let AWS = require('aws-sdk');
const rekognition = new AWS.Rekognition();

exports.handler = function (event, context, callback) {
    rekognition.compareFaces({
        SourceImage: {
            S3Object: {
                Bucket: "test.indunil1",
                Name: "quiz400.jpg"
            }
        },
        TargetImage: {
            S3Object: {
                Bucket: "test.indunil1",
                Name: "quiz400.jpg"
            }
        }
    }).promise()
        .then(data => {
            console.log(data);
            console.log("passs");


            // your code goes here
        })
        .catch(err => {
            console.log(err);
            console.log("failllll");


            // error handling goes here
        });

    callback(null, { "message": "Successfully executed" });
}