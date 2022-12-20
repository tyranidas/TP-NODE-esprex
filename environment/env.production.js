const { readFileSync } = require('fs');
const {resolve} = require('path')

module.exports = {
        

        tls : {
        cert:readFileSync(resolve('tls', 'tyra.pem')),
        key: readFileSync(resolve('tls', 'tyra.key'))
        },
        port : {
                https : 443,
                http : 80
        }


    
}