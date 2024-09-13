const {Router}= require('express');

const {handleBlogCreate} = require('../handler/blogHandler');
const {getAllBlog} = require('../controllers/blog/getBlog')
const {getBlogById, getBlogBySlug,addComment,addReply,updateCommentLike,updateCommentLikeResponse} = require('../controllers/blog/getBlog')
const {updateBlog} = require('../controllers/blog/getBlog')

const blogRouter = Router();


blogRouter.post('/', handleBlogCreate);
blogRouter.get('/', getAllBlog);
blogRouter.get('/:slug', getBlogBySlug);
blogRouter.post('/:slug/comment', addComment);
blogRouter.post('/:slug/updateComment',updateCommentLike );
blogRouter.post('/:slug/updateCommentResponse',updateCommentLikeResponse );
blogRouter.post('/:slug/addReply', addReply);
blogRouter.get('/:id', getBlogById);
blogRouter.put('/:id', updateBlog);

module.exports = blogRouter;
