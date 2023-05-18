/* eslint-disable import/extensions */
import { convertTokenBytePairEncodingFromTuples } from '../convertTokenBytePairEncodingFromTuples.js'
import encoder from '../encodings/r50k_base.js'
import { GptEncoding } from '../GptEncoding.js'

const api = GptEncoding.getEncodingApi('r50k_base', () =>
  convertTokenBytePairEncodingFromTuples(encoder),
)
const {
  decode,
  decodeAsyncGenerator,
  decodeGenerator,
  encode,
  encodeGenerator,
  isWithinTokenLimit,
} = api
export {
  decode,
  decodeAsyncGenerator,
  decodeGenerator,
  encode,
  encodeGenerator,
  isWithinTokenLimit,
}