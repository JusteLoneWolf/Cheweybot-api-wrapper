# Cheweybot-api-wrapper

A simply wrapper for https://api.chewey-bot.ga api

## Installation

`npm i cheweybot-api-wrapper`

## How to get token

1. Join [discord server]( https://discords.ga/chewey)
2. Ran command in commands channel `!role-me api-user`
3. DM Chewey Bot and ran `!claim-api-key`

If you couldn't DM not the bot please check your privacy settings
## How to use

```js
let cheweybotapi = require('cheweybot-api-wrapper')

cheweybotapi.login(Token) //It must be once in all your code
    cheweybotapi.image.get(endpoint).then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    })

/*[ 'space',
    'cat',
    'dog',
    'birb',
    'nature',
    'fantasy-art',
    'plane',
    'otter',
    'rabbit',
    'snake',
    'car',
    'turtle',
    'duck',
    'panda',
    'wolf',
    'fox' ]
*/

api.mc(MCIP).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})
```
or
```js
let cheweybotapi = require('cheweybot-api-wrapper')

cheweybotapi.image.get(endpoint, TOKEN).then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
```
## Usage
Call this module
```js
let cheweybotapi = require('cheweybot-api-wrapper') 
```
----------------------------------------
#### _List of feature_
_Text between `[]` is not require_

##### **cheweybotapi.login(token)** `Note if using this, '[,token]' in calling function is not require`
##### **cheweybotapi.image.get(url[,token])**
##### **cheweybotapi.mc(ip[,token])**

----------------------------------------

#### _Response_
All endpoints respond on data
```js
{data:'your-image'}
```
----------------------------------------
#### _Error_
##### Each error is specified 
Exemple Error:
```js
Noendpointfind: {
  name: 'Noendpointfind', //Name of this error
  message: 'No endpoint find', // description of this error
  status: '0x00404' //Error code (for all error codes, it is below)  
}
```

## Endpoint
#### Image

space,cat,dog,bird,nature,fantasy-art,plane,otter,rabbit,snake,car,turtle,duck,panda,wolf,fox 


#### MC API 
<div align="center">
  <br />
  <p>
    <a href="https://chewey-bot.ga"><img src="https://api.chewey-bot.ga/mcap/image/default/19081180148127185202193186201182189127191182197205133133136136131128138129129129129113193189178202182195196205192191189186191182205153202193186201182189113159182197200192195188172130127137126130127130134174.png" width="546" alt="discord.js" /></a>
  </p>
  <br />
</div>

## Link

[Support server]( https://discords.ga/chewey),
[Website API](https://api.chewey-bot.ga/)

## Credit
Thanks to Chewey#1635 for accepting the creation of this module

## Notes
#### Error Code
| Error codes       | Signification           |
| ------------- |:-------------:|
| 0x00001      | No token specified |
|0x00002|No endpoint specified|
|0x00403|Incorrect login|
| 0x00404     | No endpoint find     |
|0x01404|No IP specified|
