const routes: RouteConfig[] = [
  {
    key: 'Home',
    path: '/',
    redirect: { to: '/new_bid' },
    // redirect: { to: '/new_bid?form=home' },
    windowOptions: {
      title: 'App Home (redirect to demo)',
      width: 1200,
      height: 800,
      minWidth: 800,
      minHeight: 600,
    },
    createConfig: {
      showSidebar: true,
      saveWindowBounds: true,
      // openDevTools: true,
    },
  },
]

export default routes
