function MissingTokenError(message) {
    this.name = this.constructor.name;
    this.message = message;
    this.status = "0x00001";
    Error.captureStackTrace(this, this.message)
}
function NoEndpointSpecified(message) {
    this.name = this.constructor.name;
    this.message = message;
    this.status = "0x00002";
    Error.captureStackTrace(this, this.message)
}
function NoEndpointFind(message) {
    this.name = this.constructor.name;
    this.message = message;
    this.status = "0x00404";
    Error.captureStackTrace(this, this.message)
}
function IncorrectLogin(message) {
    this.name = this.constructor.name;
    this.message = message;
    this.status = "0x00403";
    Error.captureStackTrace(this, this.status)
}
function NoIPSpecified(message) {
    this.name = this.constructor.name;
    this.message = message;
    this.status = "0x01404";
    Error.captureStackTrace(this, this.status)
}
module.exports =  {
    MissingTokenError,
    NoEndpointFind,
    NoEndpointSpecified,
    IncorrectLogin,
    NoIPSpecified
};
