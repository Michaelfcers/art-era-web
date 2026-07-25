const fs = require('fs');
const path = require('path');

const mediaDir = path.join(__dirname, '..', 'out', '_next', 'static', 'media');

if (fs.existsSync(mediaDir)) {
  const files = fs.readdirSync(mediaDir);
  let removedCount = 0;
  for (const file of files) {
    if (file.endsWith('.wasm')) {
      const filePath = path.join(mediaDir, file);
      fs.unlinkSync(filePath);
      console.log(`[Clean WASM] Removed heavy asset to pass Cloudflare limit: ${file}`);
      removedCount++;
    }
  }
  if (removedCount === 0) {
    console.log('[Clean WASM] No .wasm files found in media directory.');
  }
} else {
  console.log('[Clean WASM] Media directory not found, skipping clean.');
}
