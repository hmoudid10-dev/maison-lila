import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig, Plugin} from 'vite';

// LINT.IfChange(aistudio_media_plugin)
function aistudioMediaPlugin(): Plugin {
  return {
    name: 'vite-plugin-aistudio-media',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url && req.url.startsWith('/assets/aistudio/')) {
          const rawPath = req.url.split('?')[0].split('#')[0];
          try {
            const decodedPath = decodeURIComponent(rawPath);
            const relativePath = decodedPath.replace(/^\//, '');
            const aistudioDir = path.resolve(
              __dirname,
              'public',
              'assets',
              'aistudio',
            );
            const filePath = path.resolve(__dirname, 'public', relativePath);
            if (
              filePath.startsWith(aistudioDir + path.sep) &&
              fs.existsSync(filePath) &&
              fs.statSync(filePath).isFile()
            ) {
              const ext = path.extname(filePath).toLowerCase();
              const mimeMap: Record<string, string> = {
                '.jpg': 'image/jpeg',
                '.jpeg': 'image/jpeg',
                '.png': 'image/png',
                '.gif': 'image/gif',
                '.webp': 'image/webp',
                '.svg': 'image/svg+xml',
                '.bmp': 'image/bmp',
                '.ico': 'image/x-icon',
                '.mp4': 'video/mp4',
                '.webm': 'video/webm',
                '.ogv': 'video/ogg',
                '.mp3': 'audio/mpeg',
                '.wav': 'audio/wav',
                '.ogg': 'audio/ogg',
                '.pdf': 'application/pdf',
              };
              res.setHeader(
                'Content-Type',
                mimeMap[ext] || 'application/octet-stream',
              );
              res.setHeader('Cache-Control', 'no-cache');
              fs.createReadStream(filePath).pipe(res);
              return;
            }
          } catch {
            // Fall through if URI decoding or file access fails
          }
        }
        const filename = (req.url || '').split('?')[0].replace(/^\//, '');
        const exactImages = [
          'magasin.jpg',
          'patisserie-marocaine.jpg',
          'macarons.jpg',
          'cookies.jpg',
          'wedding-cake.jpg',
          'donuts.jpg',
          'viennoiseries.jpg',
          'cupcakes.jpg',
        ];

        // API: Check which photos exist on disk
        if (req.method === 'GET' && req.url === '/api/check-photos') {
          const status: Record<string, boolean> = {};
          for (const imgName of exactImages) {
            const publicPath = path.resolve(__dirname, 'public', imgName);
            const rootPath = path.resolve(__dirname, imgName);
            status[imgName] =
              (fs.existsSync(publicPath) && fs.statSync(publicPath).isFile()) ||
              (fs.existsSync(rootPath) && fs.statSync(rootPath).isFile());
          }
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ status }));
          return;
        }

        // API: Upload user-provided photo
        if (req.method === 'POST' && req.url === '/api/upload-photo') {
          const chunks: Buffer[] = [];
          req.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
          req.on('end', () => {
            try {
              const bodyStr = Buffer.concat(chunks).toString('utf-8');
              const { filename, base64 } = JSON.parse(bodyStr);
              if (!exactImages.includes(filename) || !base64) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: 'Fichier non reconnu ou données manquantes' }));
                return;
              }
              const data = base64.replace(/^data:image\/\w+;base64,/, '');
              const buf = Buffer.from(data, 'base64');
              const publicDir = path.resolve(__dirname, 'public');
              if (!fs.existsSync(publicDir)) {
                fs.mkdirSync(publicDir, { recursive: true });
              }
              const publicPath = path.resolve(publicDir, filename);
              const rootPath = path.resolve(__dirname, filename);
              fs.writeFileSync(publicPath, buf);
              fs.writeFileSync(rootPath, buf);
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true, filename }));
            } catch (err: any) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: err?.message || 'Erreur serveur' }));
            }
          });
          return;
        }

        if (exactImages.includes(filename)) {
          const rootPath = path.resolve(__dirname, filename);
          const publicPath = path.resolve(__dirname, 'public', filename);
          const target = fs.existsSync(publicPath)
            ? publicPath
            : fs.existsSync(rootPath)
            ? rootPath
            : null;
          if (target && fs.statSync(target).isFile()) {
            res.setHeader('Content-Type', 'image/jpeg');
            res.setHeader('Cache-Control', 'no-cache');
            fs.createReadStream(target).pipe(res);
            return;
          }
        }

        next();
      });
    },
    buildStart() {
      const exactImages = [
        'magasin.jpg',
        'patisserie-marocaine.jpg',
        'macarons.jpg',
        'cookies.jpg',
        'wedding-cake.jpg',
        'donuts.jpg',
        'viennoiseries.jpg',
        'cupcakes.jpg',
      ];
      for (const imgName of exactImages) {
        const rootPath = path.resolve(__dirname, imgName);
        const publicPath = path.resolve(__dirname, 'public', imgName);
        if (fs.existsSync(rootPath) && !fs.existsSync(publicPath)) {
          try {
            fs.copyFileSync(rootPath, publicPath);
          } catch {
            // ignore copy errors
          }
        }
      }
    },
  };
}
// LINT.ThenChange(//depot/google3/java/com/google/alkali/boq/makersuite/applet_dev_service/templates/initializers/react_theme/vite.config.ts:aistudio_media_plugin)

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), aistudioMediaPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
