const scrape = require('website-scraper').default;
const path = require('path');

const options = {
    urls: ['https://www.inmoduran.com/'],
    directory: path.resolve(__dirname, 'public'),
    maxDepth: 1, // Only the first page
    request: {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36'
        }
    }
};

scrape(options).then((result) => {
    console.log("Entire website succesfully downloaded");
}).catch((err) => {
    console.log("An error ocurred", err);
});
