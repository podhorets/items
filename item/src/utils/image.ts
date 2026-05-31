/**
 * Make an image URL safe to render in the browser.
 *
 * iPhone photos are usually HEIC, which browsers can't display — they download
 * the file or block it (OpaqueResponseBlocking) instead. When the photo is
 * hosted on Cloudinary we let Cloudinary transcode it on the fly:
 *   - `f_auto` delivers a browser-friendly format (AVIF/WebP/JPEG),
 *   - `q_auto` picks a sensible quality,
 *   - `w_<width>` caps the delivered size to keep things light.
 * The `.heic` extension is swapped to `.jpg` as a belt-and-suspenders fallback.
 *
 * Non-Cloudinary URLs (e.g. Unsplash) are returned unchanged.
 */
export function imageUrl(url: string, width = 1000): string {
  const marker = "/image/upload/";
  const at = url.indexOf(marker);
  if (at === -1) return url;

  const start = at + marker.length;
  const rest = url.slice(start);

  // Don't double-apply if the URL already carries a transformation.
  const transformed = /^[a-z]_/.test(rest) ? rest : `f_auto,q_auto,w_${width}/${rest}`;

  return url.slice(0, start) + transformed.replace(/\.heic(\?|$)/i, ".jpg$1");
}
