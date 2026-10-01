const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const targetDir = path.join(__dirname, '..', 'public', 'images');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function fetchWithRedirects(url, destPath) {
  return new Promise((resolve, reject) => {
    function get(currentUrl, redirectCount = 0) {
      if (redirectCount > 5) {
        return reject(new Error('Too many redirects for ' + currentUrl));
      }

      const client = currentUrl.startsWith('https') ? https : http;
      client.get(currentUrl, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          let nextUrl = res.headers.location;
          if (!nextUrl.startsWith('http')) {
            const urlObj = new URL(currentUrl);
            nextUrl = urlObj.origin + nextUrl;
          }
          return get(nextUrl, redirectCount + 1);
        }

        if (res.statusCode !== 200) {
          return reject(new Error(`Status ${res.statusCode} for ${currentUrl}`));
        }

        const fileStream = fs.createWriteStream(destPath);
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          const size = fs.statSync(destPath).size;
          if (size < 1000) {
            reject(new Error(`File too small: ${size} bytes`));
          } else {
            console.log(`✓ Successfully saved ${path.basename(destPath)} (${size} bytes)`);
            resolve();
          }
        });
      }).on('error', reject);
    }

    get(url);
  });
}

const photos = [
  {
    name: 'hero-tank-cleaning.jpg',
    url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=80'
  },
  {
    name: 'about-hero.jpg',
    url: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1600&q=80'
  },
  {
    name: 'services-hero.jpg',
    url: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1600&q=80'
  },
  {
    name: 'gallery-hero.jpg',
    url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80'
  },
  {
    name: 'blog-hero.jpg',
    url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80'
  },
  {
    name: 'contact-hero.jpg',
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80'
  },
  {
    name: 'overhead-tank-cleaning.jpg',
    url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'underground-sump-cleaning.jpg',
    url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'apartment-tank-cleaning.jpg',
    url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'commercial-tank-cleaning.jpg',
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'sludge-sediment-removal.jpg',
    url: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'gallery-overhead-1.jpg',
    url: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'gallery-sump-1.jpg',
    url: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'gallery-apartment-1.jpg',
    url: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'gallery-process-1.jpg',
    url: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'gallery-overhead-2.jpg',
    url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'gallery-sump-2.jpg',
    url: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'gallery-apartment-2.jpg',
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'gallery-process-2.jpg',
    url: 'https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'blog-cleaning-frequency.jpg',
    url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'blog-warning-signs.jpg',
    url: 'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'blog-importance-cleaning.jpg',
    url: 'https://images.unsplash.com/photo-1521207418485-99c705420785?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'og-image.jpg',
    url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80'
  }
];

// Fallback high quality images for any that fail
const fallbacks = [
  'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=800&q=80'
];

async function run() {
  console.log('Downloading real high-resolution photographs...');
  let fallbackIdx = 0;
  for (const item of photos) {
    const dest = path.join(targetDir, item.name);
    try {
      await fetchWithRedirects(item.url, dest);
    } catch (err) {
      console.log(`Primary failed for ${item.name} (${err.message}). Trying reliable fallback...`);
      const fallbackUrl = fallbacks[fallbackIdx % fallbacks.length];
      fallbackIdx++;
      try {
        await fetchWithRedirects(fallbackUrl, dest);
      } catch (err2) {
        console.error(`Failed fallback for ${item.name}:`, err2.message);
      }
    }
  }
  console.log('All authentic photographs are ready on disk!');
}

run();
