const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app
    .use('/static', express.static(path.join(__dirname, '../NoFramework')))

    .get(   '/', 
            (req, res) => res.send('Hello New Paltz!')
        )
    .get(   '/heb', 
        function(req, res){
             res.send('Shalom World!')
        }
    );

app.listen(port, () => console.log(`Running on http://localhost:${port}`));