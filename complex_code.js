/* 
   Filename: complex_code.js
   Description: This code demonstrates a complex implementation with multiple functions and objects to create a minimalistic CMS (Content Management System).
*/

// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Create express app and configure settings
const app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB database using Mongoose
mongoose.connect('mongodb://localhost/cms', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to database'))
    .catch(err => console.error('Failed to connect to database:', err));

// Define the database schema using Mongoose
const articleSchema = new mongoose.Schema({
    title: String,
    content: String,
    date: { type: Date, default: Date.now }
});
const Article = mongoose.model('Article', articleSchema);

// Routes and API endpoints

// Home route
app.get('/', (req, res) => {
    res.render('index');
});

// Get all articles
app.get('/articles', (req, res) => {
    Article.find({}, (err, articles) => {
        if (err) {
            console.error('Failed to fetch articles:', err);
            return res.status(500).json({ error: 'Failed to fetch articles' });
        }
        res.json(articles);
    });
});

// Create a new article
app.post('/articles', (req, res) => {
    const newArticle = new Article({
        title: req.body.title,
        content: req.body.content
    });

    newArticle.save()
        .then(article => {
            console.log('New article saved:', article);
            res.sendStatus(201);
        })
        .catch(err => {
            console.error('Failed to save article:', err);
            res.sendStatus(500);
        });
});

// Delete an article by ID
app.delete('/articles/:id', (req, res) => {
    Article.findByIdAndDelete(req.params.id)
        .then(() => {
            console.log('Article deleted');
            res.sendStatus(200);
        })
        .catch(err => {
            console.error('Failed to delete article:', err);
            res.sendStatus(500);
        });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// End of complex_code.js