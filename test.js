// CORE/ESPREX.JS
const esprexApp = (req, res) => {
    // routing --> déclenchement du bon ctrl en fonction de l'url de la requête
   
    if (esprexApp.router.routes[req.url])
    {
        esprexApp.router.routes[req.url](res,req);
    }
    res.end('Mon App');
  };
  
  class Pouet{
    
    Constructor(name){
        this.name = name;
    }
  }

  esprexApp.router = { 
    routes: {},
    post : {}
};
  
  esprexApp.get = function(paramRoute, paramCtrl) {
    esprexApp.router.routes[paramRoute] = paramCtrl;
  };
  
  

  
  // APP.JS
  const app = esprexApp;
  
  app.get('/home', (request, response) => { console.log('CTRL:', request.url); });
  app.get('/contact', (request, response) => { console.log('CTRL:', request.url); });
  app.get('/home', (request, response) => { console.log('CTRL HOME:', request.url); });
  
  
  // BIN/WWW
  require('http')
    .createServer(app)
    .listen(8989);
  
  
  
  
  
  // Node détecte une requête HTTP sur le port de notre serveur HTTPS
  // --> Node exécute esprexApp
  //
  
  // Requête 1 --> GET /home --> Node invoque la méthode --> esprexApp({}, {});
  // Requête 2 --> GET /contact --> Node invoque la méthode --> esprexApp({}, {});
  // Requête 3 --> GET /services --> Node invoque la méthode --> esprexApp({}, {});