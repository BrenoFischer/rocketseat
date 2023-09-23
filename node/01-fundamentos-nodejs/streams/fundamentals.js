import { Readable, Writable, Transform } from 'node:stream'

class OneToHundredStream extends Readable {
    index = 1
    
    _read() {
        const i = this.index++

        if(i > 100) {
            this.push(null)
        } else {
            const buf = Buffer.from(String(i))

            this.push(buf)
        }
    }
}

class MultiplyByTenStream extends Writable {
    _write(chunk, encoding, callback) {
        console.log(Number(chunk.toString())*10)
        callback()
    }
}

class RevertNumberStream extends Transform {
    _transform(chunk, encoding, callback) {
        const transformedChunk = Number(chunk.toString()) * -1

        callback(null, Buffer.from(String(transformedChunk)))
    }
}

new OneToHundredStream()
    .pipe(new RevertNumberStream())
    .pipe(new MultiplyByTenStream())
