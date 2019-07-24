const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fileUpload = require('express-fileupload');
const app = express();

// Controllers
const getHomepage = require('./controllers/getHomepage');
const getPostsNew = require('./controllers/getPostsNew');
const getPostsStore = require('./controllers/getPostsStore');
const getEachPost = require('./controllers/getEachPost');
const getRegister = require('./controllers/getRegister');
const postRegister = require('./controllers/postRegister');
const getLogin = require('./controllers/getLogin');
const postLogin = require('./controllers/postLogin');

// Middleware
const storePost = require('./middleware/storePost');
app.use('/posts/store', storePost);

dotenv.config();

mongoose
	.connect(process.env.DB_CONNECT, { useNewUrlParser: true })
	.then(() => 'Now Connected to MongoDB')
	.catch(err => console.error(`Something went wrong ${err}`));

app.use(fileUpload());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', getHomepage);

app.get('/posts/new', getPostsNew);
app.post('/posts/store', getPostsStore);
app.get('/post/:id', getEachPost);

app.get('/auth/register', getRegister);
app.post('/auth/register', postRegister);

app.get('/auth/login', getLogin);
app.post('/auth/login', postLogin);

app.listen(4000, () => {
	console.log('App listening on port 4000');
});
