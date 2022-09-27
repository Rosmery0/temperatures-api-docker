const express = require('express');
const app = express();

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.query());

// routes
app.use('/temps/api', require('./routes/index'));

// startin the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})