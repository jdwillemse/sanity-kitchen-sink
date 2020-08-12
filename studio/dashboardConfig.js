export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f33e5e2ea7793d0a95a1f04',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-1apm5k1v',
                  apiId: 'd3313752-4d9e-40b6-8f5d-f9d5508ea74b'
                },
                {
                  buildHookId: '5f33e5e22a7235dfbb1bb4f0',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-c3v1kw85',
                  apiId: '8108b507-ed56-4755-9c49-b491bb456bf4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jdwillemse/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-c3v1kw85.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
