import { Readable, pipeline as nodePipeline } from 'stream';
import { promisify } from 'util';
/**
 * Returns a boolean indication if stream param
 * is a readable stream or not.
 */
export function isReadableStream(stream: any): stream is Readable {
  return (
    stream !== null &&
    typeof stream === 'object' &&
    typeof stream.pipe === 'function' &&
    typeof stream._read === 'function' &&
    typeof stream._readableState === 'object' &&
    stream.readable !== false
  );
}

export const pipeline = promisify(nodePipeline);
