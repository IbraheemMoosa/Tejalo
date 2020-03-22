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
	res.render("home", {active: {"home": true}});
});

app.get('/login', (req, res) => {
	res.render("login", {css: "login.css", active: {"login": true}});
});

app.get('/register', (req, res) => {
	res.render("register", {css: "register.css", active: {"register": true}});
});

app.get('/frequent-flyers', (req, res) => {
	res.render("frequent-flyers", {css: "frequent-flyers.css", active: {"frequent-flyers": true}});
});


app.listen(port, () => console.log(`Server running on port ${port}`));
