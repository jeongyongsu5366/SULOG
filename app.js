const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

mongoose
	.connect(process.env.DB_CONNECT, { useNewUrlParser: true })
	.then(() => 'Now Connected to MongoDB')
	.catch(err => console.error(`Something went wrong ${err}`));

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(4000, () => {
	console.log(`App listening on port 4000`);
});
