const express = require('express');

const app = express();
console.log(app);

app.use(express.static('./dist/dashboard'));

app.get('/*', function(req, res) {
    res.sendFile('index.html', { root: 'dist/dashboard/' });
});

app.listen(process.env.PORT || 8080);