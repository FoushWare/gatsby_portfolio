const path = require("path")

//create pages dynamically 
// 👽  Don't freak  out foush  😂 it's like react/Router 
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    //Select unique identifier for the blog posts and send it to the template 
    const result = await graphql(`
        {
            blogs:allStrapiBlogs {
                nodes {
                    slug
                }
            }
        } 
    `);

    result.data.blogs.nodes.forEach(blog => {
        createPage({
            path: `/blogs/${blog.slug}`,
            component: path.resolve(`src/templates/blog-template.js`),
            context: {
                slug: blog.slug
            }
        })
    })
}