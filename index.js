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

app.get('/login', (req, res) => {
	res.render("login", {css: "login.css"});
});

app.get('/register', (req, res) => {
	res.render("register", {css: "register.css"});
});


app.listen(port, () => console.log(`Server running on port ${port}`));