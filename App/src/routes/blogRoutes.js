const {Router}= require('express');

const {handleBlogCreate} = require('../handler/blogHandler');
const {getAllBlog} = require('../controllers/blog/getBlog')
const {getBlogById} = require('../controllers/blog/getBlog')
const {updateBlog} = require('../controllers/blog/getBlog')

const blogRouter = Router();


blogRouter.post('/', handleBlogCreate);
blogRouter.get('/', getAllBlog);
blogRouter.get('/:id', getBlogById);
blogRouter.put('/:id', updateBlog);

module.exports = blogRouter;
