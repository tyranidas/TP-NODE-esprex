

const esprexApp = (req, res) => {
    console.log(esprexApp.router.routes)
    switch (esprexApp.router.routes){
        case 'get':
            if (esprexApp.router.routes.get[req.url]){
                esprexApp.router.routes.get[req.url](req, res);
               }
            break;
        case 'post':
            if (esprexApp.router.routes.post[req.url]){
             esprexApp.router.routes.post[req.url](req, res);
            }
            break;
        default :
        res.end('error');
    }
  }



esprexApp.get = (route, controller) => {
 //    esprexApp.router.routes[route].set('POST',controller);
   }
esprexApp.post = (route, controller) => {
    esprexApp.router.routes[route].set('POST',controller);
   }

esprexApp.router = { routes: {
    '/home': new Map([
      
      ['PUT', () => {}],
      ['PATCH', () => {}],
      ['DELETE', () => {}],
    ]),
    '/contact': new Map([
      ['GET', () => {}],
      ['POST', () => {}],
    ]),
  }};
  

module.exports = () => esprexApp ;
