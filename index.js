const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const Author = require('./models/author');
const Blog = require('./models/blog');

const app = express();
const port = 3000;

mongoose.connect('mongodb+srv://hemashreemudalaje:hemashree2004@cluster0.bxf2c6x.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// POST API to create a new author
app.post('/author', async (req, res) => {
  try {
    const { name, email } = req.body;
    const author = new Author({ name, email });
    await author.save();
    res.status(201).send(author);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// POST API to create a new blog
app.post('/blog', async (req, res) => {
    try {
        const { name, email } = req.body;
        const author = new Author({ name, email });
        await author.save();
        res.status(201).send(author);
      } catch (err) {
        res.status(400).send(err.message);
      }
    });
    
    // POST API to create a new blog
    app.post('/blog', async (req, res) => {
      try {
        const { title, blogContent, authorName } = req.body;
        const blog = new Blog({ title, blogContent, authorName });
        await blog.save();
        res.status(201).send(blog);
      } catch (err) {
        res.status(400).send(err.message);
      }
    });
    
    // GET API to fetch all blogs
    app.get('/blogs', async (req, res) => {
      try {
        const blogs = await Blog.find();
        res.send(blogs);
      } catch (err) {
        res.status(500).send(err.message);
      }
    });
    
    app.listen(port, () => console.log('App listening at http://localhost:${port}'));