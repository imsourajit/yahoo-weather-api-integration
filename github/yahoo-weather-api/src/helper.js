var OAuth = require('oauth');
var header = {
    "Yahoo-App-Id": "your-app-id"
};

let consumerKey = "dj0yJmk9OFNTSXl6bXF0TjI1JnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTBh"
let consumerSecret = "c3b2eac36f99f61dd7c8e530f570b78702c6812c"

var request = new OAuth.OAuth(
    null,
    null,
    consumerKey,
    consumerSecret,
    '1.0',
    null,
    'HMAC-SHA1',
    null,
    header
);
request.get(
    `https://weather-ydn-yql.media.yahoo.com/forecastrss?lat=${lat}&lon=${long}&format=json`,
    null,
    null,
    function (err, data, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(data)
        }
    }
);