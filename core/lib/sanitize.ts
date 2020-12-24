
// This provides a utility function for sanitizing information sent through the 
// BluesBirds kernel socket connection

const sanitize = (function(data: String) {
    let validator = new RegExp(/\w/gi)
    let validated = data.match(validator)
    return validated === null ? "None" : validated[0]
})

module.exports = sanitize

//console.log(sanitize("Hello world")) //testing

