/* const express = require('express');
const dayjs = require('dayjs');


var timezone = require("dayjs/plugin/timezone");
var utc = require("dayjs/plugin/utc");


dayjs.extend(timezone);
dayjs.extend(utc);


const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const currentTime = dayjs().format('HH:mm:ss');
    const currentDate = dayjs().format('YYYY-MM-DD');
    const currentTimezone = dayjs.tz.guess(); // Corrected to use timezone

    res.send(`Current time: ${currentTime}<br>Current date: ${currentDate}<br>Current timezone: ${currentTimezone}`);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); */

const express = require('express');
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');

dayjs.extend(utc);
dayjs.extend(timezone);


const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});



app.post('/timezone', (req, res) => {
    const selectedTimezone = req.body.timezone;
    const currentTime = dayjs().tz(selectedTimezone).format('HH:mm:ss');
    const currentDate = dayjs().tz(selectedTimezone).format('YYYY-MM-DD');

    res.send(`
        Current time: ${currentTime}<br>
        Current date: ${currentDate}<br>
        Current timezone: ${selectedTimezone}<br>
        <button onclick="window.history.back()">Go back</button>   
    `);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



