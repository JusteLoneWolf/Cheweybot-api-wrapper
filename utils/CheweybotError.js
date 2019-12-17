function MissingTokenError(message) {
    this.name = this.constructor.name;
    this.message = message;
    this.status = "0x00001"
    Error.captureStackTrace(this, this.message)
}
function Noendpointspecified(message) {
    this.name = this.constructor.name;
    this.message = message;
    this.status = "0x00002"
    Error.captureStackTrace(this, this.message)
}
function Noendpointfind(message) {
    this.name = this.constructor.name;
    this.message = message;
    this.status = "0x00404"
    Error.captureStackTrace(this, this.message)
}
function Incorrectlogin(message) {
    this.name = this.constructor.name;
    this.message = message;
    this.status = "0x00403"
    Error.captureStackTrace(this, this.message)
}
module.exports =  {
    MissingTokenError,
    Noendpointfind,
    Noendpointspecified,
    Incorrectlogin
};

/*
ERROR CODE
4e6f7420546f6b656e
 */