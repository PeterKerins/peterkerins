const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
    {
      allPrismicProject {
        edges {
          node {
            id
            prismicId
            uid
          }
        }
      }
    }
  `)

  pages.data.allPrismicProject.edges.forEach(edge => {
    createPage({
      path: `/projects/${edge.node.uid}`,
      component: path.resolve(`./src/templates/project-post.js`),
      context: {
        prismicId: edge.node.prismicId,
        test: 'peter',
        second: `${edge.node.id}`,
      },
    })
  })
}
