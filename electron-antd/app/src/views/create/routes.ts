const routes: RouteConfig[] = [
  {
    key: 'Create',
    path: '/new',
    createConfig: {
      single: false,
    },
  },
  {
    key: 'PageParams',
    path: '/page-params/:test',
  },
]

export default routes
