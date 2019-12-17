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
    cheweybotapi.get(endpoint).then((res)=>{
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
```
or
```js
let cheweybotapi = require('cheweybot-api-wrapper')

cheweybotapi.get(endpoint, TOKEN).then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
```

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
|0x00002|No endpoint specified
| 0x00404     | No endpoint find     |