const fs = require('fs');
const yaml = require('js-yaml');

const pkg = require('./package.json');

const staticConfig = yaml.load(fs.readFileSync('./site.yml', 'utf8'));

module.exports = {
  siteMetadata: {
    title: 'Static CMS | Open-Source Content Management System',
    description: 'Open source content management for your Git workflow',
    siteUrl: pkg.homepage,
    menu: staticConfig.menu,
  },
  pathPrefix: `/static-cms`,
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'StaticCms',
        short_name: 'StaticCms',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'standalone',
        icon: 'static/img/favicon/icon-512x512.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'content',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/data`,
        name: 'data',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        // prettier-ignore
        plugins: [
          'gatsby-remark-autolink-headers',
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "noopener noreferrer"
            }
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              noInlineHighlight: true,
            },
          },
        ],
      },
    },
    'gatsby-transformer-yaml',
    'gatsby-transformer-json',
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
  ],
};