// vite-plugin-mime-types.js
export default function viteMimeTypePlugin() {
  return {
    name: 'vite-plugin-mime-types',
    configureServer(server) {
      // Add correct MIME types to dev server
      server.middlewares.use((req, res, next) => {
        if (req.url.endsWith('.js')) {
          res.setHeader('Content-Type', 'application/javascript');
        } else if (req.url.endsWith('.css')) {
          res.setHeader('Content-Type', 'text/css');
        }
        next();
      });
    },
    generateBundle(options, bundle) {
      // Add headers to the bundled files
      Object.keys(bundle).forEach(fileName => {
        const file = bundle[fileName];
        if (fileName.endsWith('.js')) {
          file.headers = { 'Content-Type': 'application/javascript' };
        } else if (fileName.endsWith('.css')) {
          file.headers = { 'Content-Type': 'text/css' };
        }
      });
    }
  };
}
