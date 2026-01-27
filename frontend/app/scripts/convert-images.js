const fs = require('fs').promises;
const path = require('path');
const sharp = require('sharp');

async function convertToWebp(dir) {
  const files = await fs.readdir(dir, { withFileTypes: true });
  
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    
    if (file.isDirectory()) {
      await convertToWebp(fullPath);
    } else if (/\.(jpg|jpeg|png)$/i.test(file.name)) {
      const webpPath = fullPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      
      try {
        await sharp(fullPath)
          .webp({ quality: 80 })
          .toFile(webpPath);
        console.log(`Converted: ${fullPath} → ${webpPath}`);
      } catch (error) {
        console.error(`Error converting ${fullPath}:`, error);
      }
    }
  }
}

// Convertir imágenes en public/
convertToWebp(path.join(__dirname, '../public'))
  .then(() => console.log('✅ Conversión completada'))
  .catch(console.error);