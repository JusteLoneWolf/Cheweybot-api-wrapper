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
function IncorrectLib(message) {
    this.name = this.constructor.name;
    this.message = message;
    this.status = "0x02403";
    Error.captureStackTrace(this, this.status)
}
function NoIPSpecified(message) {
    this.name = this.constructor.name;
    this.message = message;
    this.status = "0x01404";
    Error.captureStackTrace(this, this.status)
}
function NoLibSpecified(message) {
    this.name = this.constructor.name;
    this.message = message;
    this.status = "0x02404";
    Error.captureStackTrace(this, this.status)
}
function NoIDSpecified(message) {
    this.name = this.constructor.name;
    this.message = message;
    this.status = "0x03404";
    Error.captureStackTrace(this, this.status)
}
module.exports =  {
    MissingTokenError,
    NoEndpointFind,
    NoEndpointSpecified,
    IncorrectLogin,
    NoIPSpecified,
    NoLibSpecified,
    IncorrectLib,
    NoIDSpecified,
};
