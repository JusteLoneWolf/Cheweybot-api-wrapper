const axios = require('axios');
const chalk = require('chalk');
const error = require('./utils/CheweybotError');
const settings = {
    token: "",
    active: false
};
module.exports.login =(ApiToken)=>{
    if (settings.active){
        return new Promise((resolve, reject) => {
            throw reject('The API is already initialized')
        })
    }else if (typeof ApiToken == "string") {
        settings.token = ApiToken;
        return new Promise(async (resolve, reject) => {
            await axios.get(`https://api.chewey-bot.ga/endpoints`, {headers: {"Authorization":ApiToken}}).then(() => {
                settings.active = true
            }).catch((error) => {
                reject(error)
            })
        })
    } else {
        reject( new error.MissingTokenError('Token must be a string or not specified'))
    }
};

module.exports.image ={
    async get(endpoint,token) {
        return new Promise(async (resolve, reject) => {
            if (!settings.token && !token|| token && typeof token !== 'string') {
                throw new error.MissingTokenError('Token must be a string or not specified')
            }
            if(!endpoint){
                reject(  new error.NoEndpointSpecified('No endpoint specified'))
            }
            await axios.get(`https://api.chewey-bot.ga/${endpoint}`, {headers: {"Authorization": token ? token : settings.token}}).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                if (err.response.status === 404) {
                    reject( new error.NoEndpointFind('No endpoint find'))
                } else if(token || settings.token) {
                    if(err.response.status === 403) {
                        reject( new error.IncorrectLogin('Incorrect token provided'))
                    }
                }else{
                    reject(`${chalk.blue('[CheWeyBot-Wrapper]')} ${chalk.red('[Error]')} Internal error: ${error.toString()} with error code ${error.response.status}`);
                }
            })
        })
    }
};


module.exports.mc = async (ip,token) =>{
    return new Promise(async (resolve, reject) => {
        if (!settings.token && !token|| token && typeof token !== 'string') {

            throw new error.MissingTokenError('Token must be a string or not specified')
        }
        if(!ip){
            throw new error.NoIPSpecified('No ip specified')
        }
        await axios.get(`https://api.chewey-bot.ga/mcap/server/${ip}`, {headers: {"Authorization": token ? token : settings.token}}).then((res) => {
            resolve(res.data)
        }).catch(err => {
             if(token || settings.token) {
                if(err.response.status === 403) {
                    throw new error.IncorrectLogin('Incorrect token provided')
                }
            }else{
                reject(`${chalk.blue('[CheWeyBot-Wrapper]')} ${chalk.red('[Error]')} Internal error: ${error.toString()} with error code ${error.response.status}`);
            }
        })
    })
};