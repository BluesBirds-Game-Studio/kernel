
import sanitize from "./sanitize"

function sendValidResponse(msg: String) {
    let response = sanitize(msg)
    return {response: response}
}