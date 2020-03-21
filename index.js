const express = require('express');
const path = require('path');
const exphbs  = require('express-handlebars');

const app = express();
const port = 3000;

const hbs = exphbs.create({
	extname: '.html'
});

app.engine('html', hbs.engine);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
	res.render("home");
});

app.listen(port, () => console.log(`Server running on port ${port}`));