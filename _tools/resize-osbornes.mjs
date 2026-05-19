import sharp from 'sharp';
import { stat } from 'node:fs/promises';

const SRC = '/mnt/c/Users/drdav/My Drive/Claude Cowork/L0_Primary_Sources/Image_Corpus/lane_c_curated/by_state/OR/land_use/OR_Slash-and-burn_Oregon_TK1_ff33e737.jpg';
const DST = '/home/drdav/orww-store/src/assets/images/osbornes-hero.jpg';

const meta = await sharp(SRC).metadata();
console.log(`Source: ${meta.width}x${meta.height}, ${meta.format}`);

await sharp(SRC)
  .rotate()
  .resize({ width: 2000, height: 1333, fit: 'cover', position: 'centre' })
  .jpeg({ quality: 80, mozjpeg: true })
  .withMetadata({ orientation: undefined })
  .toFile(DST);

const out = await stat(DST);
const outMeta = await sharp(DST).metadata();
console.log(`Output: ${outMeta.width}x${outMeta.height}, ${(out.size / 1024).toFixed(0)} KB`);
