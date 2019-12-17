function MissingTokenError(message) {
    this.name = this.constructor.name;
    this.message = message;
    Error.captureStackTrace(this, this.message)
}


module.exports =  {
    MissingTokenError
};
