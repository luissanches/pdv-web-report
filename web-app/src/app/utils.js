import { Toast } from 'quasar'
import b64 from 'js-base64'

export default {
    Toasts: {
        negative(msg) {
            Toast.create.negative({
                html: msg
            })
        },
        positive(msg) {
            Toast.create.positive({
                html: msg
            })
        }
    },
    Token: {
        toBase64(value) {
            return b64.Base64.encode(value)
        },
        fromBase64(value) {
            return b64.Base64.decode(value)
         }
    }
}
