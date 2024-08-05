/**
 * WEBSITE: https://jwdis.com
 * FACEBOOK: https://www.facebook.com/jwdis
 * GITHUB: https://github.com/jwdis/
 */

function init(conf){
    var d = document.createElement('div');
    d.innerHTML = '<link rel="stylesheet" id="wdi-whatsapp-css" href="https://wdison.github.io/wdi/src/whatsapp/wdi.whatsapp.css" media="all">';
    d.setAttribute('id','wdi-whatsapp-container');
    document.body.append(d);

    e = document.createElement('script');e.type = 'text/javascript';
    e.onload = function() {setTimeout(function(){_OnLoadWhatsApp(conf);}, 1000);}
    e.setAttribute('src','https://wdison.github.io/wdi/src/whatsapp/wdi.whatsapp.js');
    document.body.append(e);
}
var nomeAtendente = 'JWdis'
var conf = {phone:'5511983150718',
                        textToSend:`Olá ${nomeAtendente}, tudo bem? Quero saber mais detalhes sobre seus serviços.`,
                        textInit:'Enviar msg',
                        tooltip:'Dúvidas? Fala comigo aqui!',
                        title:'Equipe de Suporte',
                        textChat:`Olá!<br>Sou ${nomeAtendente}<br>Como posso te ajudar?`
                      }
init(conf);