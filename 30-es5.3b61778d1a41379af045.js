(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{zUP8:function(l,n,e){"use strict";e.r(n);var u=e("CcnG"),o=function(){return function(){}}(),a=e("pMnS"),t=e("c/cy"),r=e("nMSU"),s=e("Lmtn"),i=e("ZYCi"),b=function(){return function(){}}(),c=u.Gb({encapsulation:2,styles:[],data:{}});function p(l){return u.cc(0,[(l()(),u.Ib(0,0,[["thfDocs",1]],null,85,"div",[["class","docs-api"]],null,null,null,null,null)),(l()(),u.Ib(1,0,null,null,2,"p",[["class","docs-api-module-import"]],null,null,null,null,null)),(l()(),u.Ib(2,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["import { PoHttpInterceptorModule } from '@portinari/portinari-ui';"])),(l()(),u.Ib(4,0,null,null,0,"div",[["class","docs-api-class-description"]],null,null,null,null,null)),(l()(),u.Ib(5,0,null,null,1,"h3",[["class","docs-api-h3"]],null,null,null,null,null)),(l()(),u.ac(-1,null,["Services"])),(l()(),u.Ib(7,0,null,null,2,"h4",[["class","docs-api-class-name"]],null,null,null,null,null)),(l()(),u.Ib(8,0,null,null,1,"code",[["class","doc-code"]],null,null,null,null,null)),(l()(),u.ac(-1,null,["PoHttpInterceptorService"])),(l()(),u.Ib(10,0,null,null,75,"div",[["class","docs-api-class-description"]],null,null,null,null,null)),(l()(),u.Ib(11,0,null,null,5,"p",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["O servi\xe7o Portinari Http Interceptor realiza o tratamento de requisi\xe7\xf5es HTTP conforme o padr\xe3o do\n"])),(l()(),u.Ib(13,0,null,null,2,"a",[["href","http://tdn.totvs.com/pages/viewpage.action?pageId=484701395"]],null,null,null,null,null)),(l()(),u.Ib(14,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["Guia de implementa\xe7\xe3o das APIs TOTVS"])),(l()(),u.ac(-1,null,[" para adapt\xe1-lo\nao modelo do PO."])),(l()(),u.Ib(17,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["Ao analisar o objeto "])),(l()(),u.Ib(19,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["_messages"])),(l()(),u.ac(-1,null,[" retornado pela requisi\xe7\xe3o, o servi\xe7o exibir\xe1 notifica\xe7\xf5es com mensagens na tela.\nOs retornos de erros com c\xf3digos 4xx e 5xx s\xe3o tratados automaticamente, sem a necessidade de incluir o "])),(l()(),u.Ib(22,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["_messages"])),(l()(),u.ac(-1,null,["."])),(l()(),u.Ib(25,0,null,null,14,"p",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["Tamb\xe9m existe a possibilidade de n\xe3o apresentar a notifica\xe7\xe3o quando houver algum erro com c\xf3digos 4xx e 5xx,\nutilizando o par\xe2metro "])),(l()(),u.Ib(27,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["X-Portinari-No-Error"])),(l()(),u.ac(-1,null,[" que foi definido conforme o\n"])),(l()(),u.Ib(30,0,null,null,2,"a",[["href","http://tdn.totvs.com/pages/viewpage.action?pageId=484701395"]],null,null,null,null,null)),(l()(),u.Ib(31,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["Guia de implementa\xe7\xe3o das APIs TOTVS"])),(l()(),u.ac(-1,null,[" (em Cabe\xe7alhos Customizados).\nO par\xe2metro "])),(l()(),u.Ib(34,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["X-Portinari-No-Error"])),(l()(),u.ac(-1,null,[" deve ser informado no cabe\xe7alho da requisi\xe7\xe3o com o valor "])),(l()(),u.Ib(37,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["'true'"])),(l()(),u.ac(-1,null,[" para funcionar corretamente,\npor exemplo:"])),(l()(),u.Ib(40,0,null,null,2,"pre",[],null,null,null,null,null)),(l()(),u.Ib(41,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["...\n const headers = { 'X-Portinari-No-Error': 'true' };\n\n this.http.get(`/customers/1`, { headers: headers });\n...\n"])),(l()(),u.Ib(43,0,null,null,2,"blockquote",[],null,null,null,null,null)),(l()(),u.Ib(44,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["Ap\xf3s a valida\xe7\xe3o no interceptor, o par\xe2metro ser\xe1 removido do cabe\xe7alho da requisi\xe7\xe3o."])),(l()(),u.Ib(46,0,null,null,11,"p",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["O "])),(l()(),u.Ib(48,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["Content-Type"])),(l()(),u.ac(-1,null,[" deve ser "])),(l()(),u.Ib(51,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["application/json"])),(l()(),u.ac(-1,null,[" e a estrutura de mensagem recebida pelo servi\xe7o deve seguir o\n"])),(l()(),u.Ib(54,0,null,null,2,"a",[["href","http://tdn.totvs.com/pages/viewpage.action?pageId=484701395"]],null,null,null,null,null)),(l()(),u.Ib(55,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["Guia de implementa\xe7\xe3o das APIs TOTVS"])),(l()(),u.ac(-1,null,["\n(em Mensagens de sucesso para cole\xe7\xf5es), exemplo:"])),(l()(),u.Ib(58,0,null,null,11,"ul",[],null,null,null,null,null)),(l()(),u.Ib(59,0,null,null,10,"li",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["_messages: lista de mensagens de erro ou informativo resultante do servi\xe7o."])),(l()(),u.Ib(61,0,null,null,8,"ul",[],null,null,null,null,null)),(l()(),u.Ib(62,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["type: success, warning, error, e information;"])),(l()(),u.Ib(64,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["code: t\xedtulo ou c\xf3digo da mensagem;"])),(l()(),u.Ib(66,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["message: texto da mensagem;"])),(l()(),u.Ib(68,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["detailedMessage: detalhamento do erro ou informativo;"])),(l()(),u.Ib(70,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["Ao importar o m\xf3dulo "])),(l()(),u.Ib(72,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["PoModule"])),(l()(),u.ac(-1,null,[" na aplica\xe7\xe3o, o "])),(l()(),u.Ib(75,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["po-http-interceptor"])),(l()(),u.ac(-1,null,[" \xe9 automaticamente configurado sem a necessidade\nde qualquer configura\xe7\xe3o extra."])),(l()(),u.Ib(78,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["Ao realizar requisi\xe7\xf5es utilize o "])),(l()(),u.Ib(80,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["HttpClient"])),(l()(),u.ac(-1,null,[", conforme exemplo abaixo:"])),(l()(),u.Ib(83,0,null,null,2,"pre",[],null,null,null,null,null)),(l()(),u.Ib(84,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["import { HttpClient } from '@angular/common/http';\n\n...\n\n@Injectable()\nexport class UserService {\n\n  constructor(private http: HttpClient) { }\n\n  getUsers() {\n    return this.http.get('/api/users');\n  }\n\n  ...\n\n}\n"]))],null,null)}u.Eb("sample-po-http-interceptor-doc",b,function(l){return u.cc(0,[(l()(),u.Ib(0,0,null,null,1,"sample-po-http-interceptor-doc",[],null,null,null,p,c)),u.Hb(1,49152,null,0,b,[],null,null)],null,null)},{},{},[]);var d=e("Ip0R"),m=e("bpOf"),g=e("gIcY"),h=function(){function l(l){this.http=l,this.text="Mensagem",this.code="000",this.help="http://po.portinari.com.br",this.type="success",this.status=200,this.noErrorHeaderParam=!1,this.typeOptions=[{label:"Sucesso",value:"success"},{label:"Erro",value:"error"},{label:"Aten\xe7\xe3o",value:"warning"},{label:"Informa\xe7\xe3o",value:"information"}],this.statusOptions=[{label:"200 - OK",value:200},{label:"201 - Criado com sucesso",value:201},{label:"401 - N\xe3o autorizado",value:401},{label:"500 - Erro interno do servidor",value:500}]}return l.prototype.ngOnDestroy=function(){this.apiSubscription&&this.apiSubscription.unsubscribe()},l.prototype.processRequest=function(){var l={"X-Portinari-No-Error":this.noErrorHeaderParam.toString()};this.apiSubscription=this.http.get("https://portinari.io/sample/api/message",{headers:l,params:{status:this.status.toString(),code:this.code,type:this.type,msg:this.text,help:this.help}}).subscribe(function(l){})},l}(),v=e("t/Na"),f=u.Gb({encapsulation:2,styles:[],data:{}});function I(l){return u.cc(0,[(l()(),u.Ib(0,0,null,null,51,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,e){var o=!0;"submit"===n&&(o=!1!==u.Sb(l,2).onSubmit(e)&&o);"reset"===n&&(o=!1!==u.Sb(l,2).onReset()&&o);return o},null,null)),u.Hb(1,16384,null,0,g.v,[],null,null),u.Hb(2,4210688,[["f",4]],0,g.m,[[8,null],[8,null]],null,null),u.Xb(2048,null,g.b,null,[g.m]),u.Hb(4,16384,null,0,g.l,[[4,g.b]],null,null),(l()(),u.Ib(5,0,null,null,21,"div",[["class","po-row"]],null,null,null,null,null)),(l()(),u.Ib(6,0,null,null,6,"po-input",[["class","po-lg-5"],["name","text"],["p-clean",""],["p-label","Texto da notifica\xe7\xe3o"],["p-maxlength","50"],["p-placeholder","Texto"],["p-required",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"keydown"],[null,"keyup"]],function(l,n,e){var o=!0,a=l.component;"keydown"===n&&(o=!1!==u.Sb(l,7).onKeydown(e)&&o);"keyup"===n&&(o=!1!==u.Sb(l,7).onKeyup(e)&&o);"ngModelChange"===n&&(o=!1!==(a.text=e)&&o);return o},t.xb,t.v)),u.Hb(7,4243456,null,0,s.bb,[u.q],{label:[0,"label"],name:[1,"name"],placeholder:[2,"placeholder"],setRequired:[3,"setRequired"],setClean:[4,"setClean"],maxlength:[5,"maxlength"]},null),u.Xb(1024,null,g.h,function(l){return[l]},[s.bb]),u.Xb(1024,null,g.i,function(l){return[l]},[s.bb]),u.Hb(10,671744,null,0,g.n,[[2,g.b],[6,g.h],[8,null],[6,g.i]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u.Xb(2048,null,g.j,null,[g.n]),u.Hb(12,16384,null,0,g.k,[[4,g.j]],null,null),(l()(),u.Ib(13,0,null,null,6,"po-input",[["class","po-md-4 po-lg-2"],["name","code"],["p-clean",""],["p-label","C\xf3digo"],["p-maxlength","5"],["p-placeholder","C\xf3digo"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"keydown"],[null,"keyup"]],function(l,n,e){var o=!0,a=l.component;"keydown"===n&&(o=!1!==u.Sb(l,14).onKeydown(e)&&o);"keyup"===n&&(o=!1!==u.Sb(l,14).onKeyup(e)&&o);"ngModelChange"===n&&(o=!1!==(a.code=e)&&o);return o},t.xb,t.v)),u.Hb(14,4243456,null,0,s.bb,[u.q],{label:[0,"label"],name:[1,"name"],placeholder:[2,"placeholder"],setClean:[3,"setClean"],maxlength:[4,"maxlength"]},null),u.Xb(1024,null,g.h,function(l){return[l]},[s.bb]),u.Xb(1024,null,g.i,function(l){return[l]},[s.bb]),u.Hb(17,671744,null,0,g.n,[[2,g.b],[6,g.h],[8,null],[6,g.i]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u.Xb(2048,null,g.j,null,[g.n]),u.Hb(19,16384,null,0,g.k,[[4,g.j]],null,null),(l()(),u.Ib(20,0,null,null,6,"po-url",[["class","po-md-8 po-lg-5"],["name","help"],["p-clean",""],["p-label","Url para Ajuda"],["p-placeholder","Url"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"keydown"],[null,"keyup"]],function(l,n,e){var o=!0,a=l.component;"keydown"===n&&(o=!1!==u.Sb(l,21).onKeydown(e)&&o);"keyup"===n&&(o=!1!==u.Sb(l,21).onKeyup(e)&&o);"ngModelChange"===n&&(o=!1!==(a.help=e)&&o);return o},t.dc,t.bb)),u.Hb(21,4374528,null,0,s.qc,[u.q],{label:[0,"label"],name:[1,"name"],placeholder:[2,"placeholder"],setClean:[3,"setClean"]},null),u.Xb(1024,null,g.h,function(l){return[l]},[s.qc]),u.Xb(1024,null,g.i,function(l){return[l]},[s.qc]),u.Hb(24,671744,null,0,g.n,[[2,g.b],[6,g.h],[8,null],[6,g.i]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u.Xb(2048,null,g.j,null,[g.n]),u.Hb(26,16384,null,0,g.k,[[4,g.j]],null,null),(l()(),u.Ib(27,0,null,null,14,"div",[["class","po-row"]],null,null,null,null,null)),(l()(),u.Ib(28,0,null,null,6,"po-radio-group",[["class","po-md-6"],["name","type"],["p-label","Tipo de Notifica\xe7\xe3o"],["p-required",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,e){var u=!0,o=l.component;"ngModelChange"===n&&(u=!1!==(o.type=e)&&u);return u},t.Pb,t.N)),u.Hb(29,311296,null,0,s.Jb,[u.C],{name:[0,"name"],required:[1,"required"],options:[2,"options"],label:[3,"label"]},null),u.Xb(1024,null,g.h,function(l){return[l]},[s.Jb]),u.Xb(1024,null,g.i,function(l){return[l]},[s.Jb]),u.Hb(32,671744,null,0,g.n,[[2,g.b],[6,g.h],[8,null],[6,g.i]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u.Xb(2048,null,g.j,null,[g.n]),u.Hb(34,16384,null,0,g.k,[[4,g.j]],null,null),(l()(),u.Ib(35,0,null,null,6,"po-radio-group",[["class","po-md-6"],["name","status"],["p-label","Status"],["p-required",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,e){var u=!0,o=l.component;"ngModelChange"===n&&(u=!1!==(o.status=e)&&u);return u},t.Pb,t.N)),u.Hb(36,311296,null,0,s.Jb,[u.C],{name:[0,"name"],required:[1,"required"],options:[2,"options"],label:[3,"label"]},null),u.Xb(1024,null,g.h,function(l){return[l]},[s.Jb]),u.Xb(1024,null,g.i,function(l){return[l]},[s.Jb]),u.Hb(39,671744,null,0,g.n,[[2,g.b],[6,g.h],[8,null],[6,g.i]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u.Xb(2048,null,g.j,null,[g.n]),u.Hb(41,16384,null,0,g.k,[[4,g.j]],null,null),(l()(),u.Ib(42,0,null,null,6,"div",[["class","po-row"]],null,null,null,null,null)),(l()(),u.Ib(43,0,null,null,5,"po-switch",[["class","po-lg-12"],["name","noErrorHeaderParam"],["p-help","Ativa/desativa o envio do parametro X-Portinari-No-Error no cabe\xe7alho da requisi\xe7\xe3o."],["p-label","Ativar X-Portinari-No-Error"],["p-label-off","N\xe3o"],["p-label-on","Sim"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,e){var u=!0,o=l.component;"ngModelChange"===n&&(u=!1!==(o.noErrorHeaderParam=e)&&u);return u},t.Vb,t.T)),u.Hb(44,8437760,null,0,s.Ub,[u.j],{name:[0,"name"],label:[1,"label"],help:[2,"help"],setLabelOn:[3,"setLabelOn"],setLabelOff:[4,"setLabelOff"]},{ngModelChange:"ngModelChange"}),u.Xb(1024,null,g.i,function(l){return[l]},[s.Ub]),u.Hb(46,671744,null,0,g.n,[[2,g.b],[8,null],[8,null],[6,g.i]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u.Xb(2048,null,g.j,null,[g.n]),u.Hb(48,16384,null,0,g.k,[[4,g.j]],null,null),(l()(),u.Ib(49,0,null,null,2,"div",[["class","po-row"]],null,null,null,null,null)),(l()(),u.Ib(50,0,null,null,1,"po-button",[["class","po-md-4"],["p-label","Gerar Requisi\xe7\xe3o"]],null,[[null,"p-click"]],function(l,n,e){var u=!0,o=l.component;"p-click"===n&&(u=!1!==o.processRequest()&&u);return u},t.fb,t.d)),u.Hb(51,49152,null,0,s.e,[],{label:[0,"label"],disabled:[1,"disabled"]},{click:"p-click"})],function(l,n){var e=n.component;l(n,7,0,"Texto da notifica\xe7\xe3o","text","Texto","","","50");l(n,10,0,"text",e.text);l(n,14,0,"C\xf3digo","code","C\xf3digo","","5");l(n,17,0,"code",e.code);l(n,21,0,"Url para Ajuda","help","Url","");l(n,24,0,"help",e.help);l(n,29,0,"type","",e.typeOptions,"Tipo de Notifica\xe7\xe3o");l(n,32,0,"type",e.type);l(n,36,0,"status","",e.statusOptions,"Status");l(n,39,0,"status",e.status);l(n,44,0,"noErrorHeaderParam","Ativar X-Portinari-No-Error","Ativa/desativa o envio do parametro X-Portinari-No-Error no cabe\xe7alho da requisi\xe7\xe3o.","Sim","N\xe3o");l(n,46,0,"noErrorHeaderParam",e.noErrorHeaderParam);l(n,51,0,"Gerar Requisi\xe7\xe3o",!u.Sb(n,2).form.valid)},function(l,n){l(n,0,0,u.Sb(n,4).ngClassUntouched,u.Sb(n,4).ngClassTouched,u.Sb(n,4).ngClassPristine,u.Sb(n,4).ngClassDirty,u.Sb(n,4).ngClassValid,u.Sb(n,4).ngClassInvalid,u.Sb(n,4).ngClassPending),l(n,6,0,u.Sb(n,12).ngClassUntouched,u.Sb(n,12).ngClassTouched,u.Sb(n,12).ngClassPristine,u.Sb(n,12).ngClassDirty,u.Sb(n,12).ngClassValid,u.Sb(n,12).ngClassInvalid,u.Sb(n,12).ngClassPending),l(n,13,0,u.Sb(n,19).ngClassUntouched,u.Sb(n,19).ngClassTouched,u.Sb(n,19).ngClassPristine,u.Sb(n,19).ngClassDirty,u.Sb(n,19).ngClassValid,u.Sb(n,19).ngClassInvalid,u.Sb(n,19).ngClassPending),l(n,20,0,u.Sb(n,26).ngClassUntouched,u.Sb(n,26).ngClassTouched,u.Sb(n,26).ngClassPristine,u.Sb(n,26).ngClassDirty,u.Sb(n,26).ngClassValid,u.Sb(n,26).ngClassInvalid,u.Sb(n,26).ngClassPending),l(n,28,0,u.Sb(n,34).ngClassUntouched,u.Sb(n,34).ngClassTouched,u.Sb(n,34).ngClassPristine,u.Sb(n,34).ngClassDirty,u.Sb(n,34).ngClassValid,u.Sb(n,34).ngClassInvalid,u.Sb(n,34).ngClassPending),l(n,35,0,u.Sb(n,41).ngClassUntouched,u.Sb(n,41).ngClassTouched,u.Sb(n,41).ngClassPristine,u.Sb(n,41).ngClassDirty,u.Sb(n,41).ngClassValid,u.Sb(n,41).ngClassInvalid,u.Sb(n,41).ngClassPending),l(n,43,0,u.Sb(n,48).ngClassUntouched,u.Sb(n,48).ngClassTouched,u.Sb(n,48).ngClassPristine,u.Sb(n,48).ngClassDirty,u.Sb(n,48).ngClassValid,u.Sb(n,48).ngClassInvalid,u.Sb(n,48).ngClassPending)})}u.Eb("sample-po-http-interceptor-labs",h,function(l){return u.cc(0,[(l()(),u.Ib(0,0,null,null,1,"sample-po-http-interceptor-labs",[],null,null,null,I,f)),u.Hb(1,180224,null,0,h,[v.c],null,null)],null,null)},{},{},[]);var Q=function(){function l(){this.hideSampleCodeTabs=!0,this.sampleCodeButtonLabel="Talk is cheap, show me the code!",this.sampleCodeButtonIcon="po-icon po-icon-plus"}return l.prototype.toggleSampleCodeTabs=function(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"po-icon-plus":"po-icon-minus"},l}(),C=u.Gb({encapsulation:2,styles:[],data:{}});function S(l){return u.cc(0,[(l()(),u.Ib(0,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.Ib(1,0,null,null,5,"blockquote",[["class","sample-blockquote"]],null,null,null,null,null)),(l()(),u.Ib(2,0,null,null,1,"label",[["class","sample-title po-font-text-large-bold"]],null,null,null,null,null)),(l()(),u.ac(-1,null,["Portinari Http Interceptor Labs"])),(l()(),u.Ib(4,0,null,null,2,"a",[["class","show-me-the-code"]],null,[[null,"click"]],function(l,n,e){var u=!0,o=l.component;"click"===n&&(u=!1!==o.toggleSampleCodeTabs()&&u);return u},null,null)),(l()(),u.Ib(5,0,null,null,0,"span",[],[[8,"className",0]],null,null,null,null)),(l()(),u.ac(6,null,[" ",""])),(l()(),u.Ib(7,0,null,null,22,"div",[],null,null,null,null,null)),u.Xb(512,null,d.B,d.C,[u.C,u.D,u.q,u.R]),u.Hb(9,278528,null,0,d.m,[d.B],{ngClass:[0,"ngClass"]},null),u.Vb(10,{"docs-sample-code-tabs":0}),(l()(),u.Ib(11,0,null,null,18,"po-tabs",[["p-size","2"]],null,null,null,t.Yb,t.W)),u.Hb(12,49152,null,1,s.ac,[u.j],null,null),u.Yb(603979776,1,{tabs:1}),(l()(),u.Ib(14,0,null,0,7,"po-tab",[["p-active",""],["p-label","HTML"]],null,null,null,t.Wb,t.U)),u.Hb(15,1097728,[[1,4]],0,s.Wb,[u.q],{active:[0,"active"],label:[1,"label"]},null),(l()(),u.Ib(16,0,null,0,5,"div",[],null,null,null,null,null)),(l()(),u.Ib(17,0,null,null,1,"label",[["class","doc-label-path"]],null,null,null,null,null)),(l()(),u.ac(-1,null,["sample-po-http-interceptor-labs.component.html"])),(l()(),u.Ib(19,0,null,null,2,"pre",[["appCodeHighlight",""],["class","html"]],null,null,null,null,null)),u.Hb(20,4210688,null,0,m.a,[u.q],null,null),(l()(),u.ac(-1,null,['<form #f="ngForm">\n\n  <div class="po-row">\n    <po-input class="po-lg-5"\n      name="text"\n      [(ngModel)]="text"\n      p-clean\n      p-label="Texto da notifica\xe7\xe3o"\n      p-placeholder="Texto"\n      p-maxlength="50"\n      p-required>\n    </po-input>\n\n    <po-input class="po-md-4 po-lg-2"\n      name="code"\n      [(ngModel)]="code"\n      p-clean\n      p-label="C\xf3digo"\n      p-maxlength="5"\n      p-placeholder="C\xf3digo">\n    </po-input>\n\n    <po-url class="po-md-8 po-lg-5"\n      name="help"\n      [(ngModel)]="help"\n      p-clean\n      p-label="Url para Ajuda"\n      p-placeholder="Url">\n    </po-url>\n  </div>\n\n  <div class="po-row">\n    <po-radio-group class="po-md-6"\n      name="type"\n      [(ngModel)]="type"\n      p-label="Tipo de Notifica\xe7\xe3o"\n      p-required\n      [p-options]="typeOptions">\n    </po-radio-group>\n\n    <po-radio-group class="po-md-6"\n      name="status"\n      [(ngModel)]="status"\n      p-label="Status"\n      p-required\n      [p-options]="statusOptions">\n    </po-radio-group>\n  </div>\n\n  <div class="po-row">\n    <po-switch class="po-lg-12"\n      name="noErrorHeaderParam"\n      [(ngModel)]="noErrorHeaderParam"\n      p-help="Ativa/desativa o envio do parametro X-Portinari-No-Error no cabe\xe7alho da requisi\xe7\xe3o."\n      p-label="Ativar X-Portinari-No-Error"\n      p-label-off="N\xe3o"\n      p-label-on="Sim">\n    </po-switch>\n  </div>\n\n  <div class="po-row">\n    <po-button class="po-md-4"\n      p-label="Gerar Requisi\xe7\xe3o"\n      [p-disabled]="!f.form.valid"\n      (p-click)="processRequest()">\n    </po-button>\n  </div>\n\n</form>\n'])),(l()(),u.Ib(22,0,null,0,7,"po-tab",[["p-label","TS"]],null,null,null,t.Wb,t.U)),u.Hb(23,1097728,[[1,4]],0,s.Wb,[u.q],{label:[0,"label"]},null),(l()(),u.Ib(24,0,null,0,5,"div",[],null,null,null,null,null)),(l()(),u.Ib(25,0,null,null,1,"label",[["class","doc-label-path"]],null,null,null,null,null)),(l()(),u.ac(-1,null,["sample-po-http-interceptor-labs.component.ts"])),(l()(),u.Ib(27,0,null,null,2,"pre",[["appCodeHighlight",""],["class","typescript"]],null,null,null,null,null)),u.Hb(28,4210688,null,0,m.a,[u.q],null,null),(l()(),u.ac(29,null,["import "," Component, OnDestroy } from '@angular/core';\nimport "," HttpClient } from '@angular/common/http';\n\nimport "," Subscription } from 'rxjs';\n\nimport "," PoRadioGroupOption } from '@portinari/portinari-ui';\n\n@Component(","\n  selector: 'sample-po-http-interceptor-labs',\n  templateUrl: './sample-po-http-interceptor-labs.component.html'\n})\nexport class SamplePoHttpInterceptorLabsComponent implements OnDestroy ","\n\n  text = 'Mensagem';\n  code = '000';\n  help = 'http://po.portinari.com.br';\n  type = 'success';\n  status = 200;\n  noErrorHeaderParam = false;\n\n  private apiSubscription: Subscription;\n\n  typeOptions: Array<PoRadioGroupOption> = [\n    "," label: 'Sucesso', value: 'success' },\n    "," label: 'Erro', value: 'error' },\n    "," label: 'Aten\xe7\xe3o', value: 'warning' },\n    "," label: 'Informa\xe7\xe3o', value: 'information' }\n  ];\n\n  statusOptions: Array<PoRadioGroupOption> = [\n    "," label: '200 - OK', value: 200 },\n    "," label: '201 - Criado com sucesso', value: 201 },\n    "," label: '401 - N\xe3o autorizado', value: 401 },\n    "," label: '500 - Erro interno do servidor', value: 500 }\n  ];\n\n  constructor(private http: HttpClient) "," }\n\n  ngOnDestroy() ","\n    if (this.apiSubscription) ","\n      this.apiSubscription.unsubscribe();\n    }\n  }\n\n  processRequest() ","\n    const headers = "," 'X-Portinari-No-Error': this.noErrorHeaderParam.toString() };\n\n    this.apiSubscription = this.http.get(\n      `https://portinari.io/sample/api/message`,\n      ","\n        headers: headers,\n        params: "," status: this.status.toString(), code: this.code, type: this.type, msg: this.text, help: this.help }\n      }\n    ).subscribe(response => "," });\n  }\n}\n"])),(l()(),u.Ib(30,0,null,null,2,"div",[["class","docs-sample-container"]],null,null,null,null,null)),(l()(),u.Ib(31,0,null,null,1,"sample-po-http-interceptor-labs",[],null,null,null,I,f)),u.Hb(32,180224,null,0,h,[v.c],null,null),(l()(),u.Ib(33,0,null,null,0,"hr",[],null,null,null,null,null))],function(l,n){var e=l(n,10,0,n.component.hideSampleCodeTabs);l(n,9,0,e);l(n,15,0,"","HTML");l(n,23,0,"TS")},function(l,n){var e=n.component;l(n,5,0,"po-icon "+e.sampleCodeButtonIcon),l(n,6,0,e.sampleCodeButtonLabel);l(n,29,1,["{","{","{","{","{","{","{","{","{","{","{","{","{","{","{","{","{","{","{","{","{","{"])})}u.Eb("sample-po-http-interceptor-labs-view",Q,function(l){return u.cc(0,[(l()(),u.Ib(0,0,null,null,1,"sample-po-http-interceptor-labs-view",[],null,null,null,S,C)),u.Hb(1,49152,null,0,Q,[],null,null)],null,null)},{},{},[]);var y=function(){function l(l,n){this.route=l,this.router=n,this.hideThfWebSample=!0,this.samplesLength=1,this.activeTab="\x1cdoc",this.actions=[{label:"Documenta\xe7\xe3o",action:this.goBack,icon:"po-icon-document-filled"},{label:"Colabore",action:this.improveDocs}]}return l.prototype.goBack=function(){this.router.navigate(["documentation"])},l.prototype.improveDocs=function(){window.open("https://github.com/portinariui/portinari-angular/tree/master/projects/ui/src/lib/interceptors/po-http-interceptor/po-http-interceptor.service.ts","_blank")},l.prototype.ngOnInit=function(){var l=this;this.sub=this.route.queryParams.subscribe(function(n){var e=n.view;l.activeTab=e||"doc",l.hideThfWebSample=0===l.samplesLength})},l.prototype.ngOnDestroy=function(){this.sub.unsubscribe()},l}(),P=u.Gb({encapsulation:2,styles:[],data:{}});function w(l){return u.cc(0,[(l()(),u.Ib(0,16777216,null,null,12,"po-page-default",[["p-title"," Http Interceptor"]],null,null,null,t.Ib,t.G)),u.Hb(1,1622016,null,0,s.yb,[u.gb,u.R,i.m],{actions:[0,"actions"],title:[1,"title"]},null),(l()(),u.Ib(2,0,null,0,10,"po-tabs",[["p-size","1"]],null,null,null,t.Yb,t.W)),u.Hb(3,49152,null,1,s.ac,[u.j],null,null),u.Yb(603979776,1,{tabs:1}),(l()(),u.Ib(5,0,null,0,3,"po-tab",[["p-label","Documenta\xe7\xe3o"]],null,null,null,t.Wb,t.U)),u.Hb(6,1097728,[[1,4]],0,s.Wb,[u.q],{active:[0,"active"],label:[1,"label"]},null),(l()(),u.Ib(7,0,null,0,1,"sample-po-http-interceptor-doc",[],null,null,null,p,c)),u.Hb(8,49152,null,0,b,[],null,null),(l()(),u.Ib(9,0,null,0,3,"po-tab",[["p-label","Exemplos"]],null,null,null,t.Wb,t.U)),u.Hb(10,1097728,[[1,4]],0,s.Wb,[u.q],{active:[0,"active"],hide:[1,"hide"],label:[2,"label"]},null),(l()(),u.Ib(11,0,null,0,1,"sample-po-http-interceptor-labs-view",[],null,null,null,S,C)),u.Hb(12,49152,null,0,Q,[],null,null)],function(l,n){var e=n.component;l(n,1,0,e.actions," Http Interceptor");l(n,6,0,e.activeTab.includes("doc"),"Documenta\xe7\xe3o");l(n,10,0,e.activeTab.includes("web"),e.hideThfWebSample,"Exemplos")},null)}var H=u.Eb("ng-component",y,function(l){return u.cc(0,[(l()(),u.Ib(0,0,null,null,1,"ng-component",[],null,null,null,w,P)),u.Hb(1,245760,null,0,y,[i.a,i.m],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),q=e("oVQh"),x=e("aVyw"),T=e("PCNd"),k=function(){return function(){}}();e.d(n,"DocPoHttpInterceptorModuleNgFactory",function(){return E});var E=u.Fb(o,[],function(l){return u.Pb([u.Qb(512,u.m,u.rb,[[8,[a.a,t.mc,t.gc,t.fc,t.hc,t.ic,t.a,t.lc,t.jc,t.kc,r.a,H]],[3,u.m],u.I]),u.Qb(4608,d.q,d.p,[u.E,[2,d.E]]),u.Qb(4608,v.m,v.s,[d.e,u.N,v.q]),u.Qb(4608,v.t,v.t,[v.m,v.r]),u.Qb(4608,s.r,s.r,[u.m,u.g,u.A]),u.Qb(4608,s.wb,s.wb,[s.r]),u.Qb(4608,s.z,s.z,[s.r]),u.Qb(4608,s.Qd,s.Qd,[]),u.Qb(5120,v.a,function(l,n,e,u,o){return[l,new s.S(n,e),new s.T(u,o)]},[v.t,s.wb,s.z,s.Qd,s.r]),u.Qb(4608,v.p,v.p,[]),u.Qb(6144,v.n,null,[v.p]),u.Qb(4608,v.l,v.l,[v.n]),u.Qb(6144,v.b,null,[v.l]),u.Qb(4608,v.g,v.o,[v.b,u.A]),u.Qb(4608,v.c,v.c,[v.g]),u.Qb(4608,g.s,g.s,[]),u.Qb(4608,g.d,g.d,[]),u.Qb(4608,s.Yd,s.Yd,[]),u.Qb(4608,s.ce,s.ce,[]),u.Qb(4608,s.de,s.de,[]),u.Qb(4608,s.wc,s.wc,[]),u.Qb(4608,d.g,d.g,[u.E]),u.Qb(4608,d.d,d.d,[u.E]),u.Qb(4608,d.f,d.f,[u.E]),u.Qb(4608,s.ic,s.ic,[]),u.Qb(4608,d.x,d.x,[]),u.Qb(4608,s.md,s.md,[]),u.Qb(4608,s.S,s.S,[s.wb,s.z]),u.Qb(4608,s.T,s.T,[s.Qd,s.r]),u.Qb(4608,s.zc,s.zc,[]),u.Qb(4608,s.be,s.be,[]),u.Qb(4608,s.ee,s.ee,[]),u.Qb(4608,s.W,s.W,[]),u.Qb(4608,q.y,q.y,[v.c]),u.Qb(4608,q.C,q.C,[v.c]),u.Qb(4608,q.H,q.H,[v.c]),u.Qb(4608,q.I,q.I,[q.H]),u.Qb(4608,q.M,q.M,[v.c]),u.Qb(4352,x.c,{language:"terraform",options:{keywords:["resource","provider","variable","output","module","true","false"],operators:["{","}","(",")","[","]","?",":"],tokenizer:{root:[["[a-z_$][\\w$]*",{cases:{"@keywords":"keyword","@default":"identifier"}}],{include:"@whitespace"},["\\d*\\.\\d+([eE][\\-+]?\\d+)?","number.float"],["0[x][0-9a-fA-F]+","number.hex"],["\\d+","number"],["[;,.]","delimiter"],['"([^"\\\\]|\\\\.)*$',"string.invalid"],['"',{token:"string.quote",bracket:"@open",next:"@string"}],["'[^\\\\']'","string"],["'","string.invalid"]],comment:[["[^\\/*]+","comment"],["[\\/*]","comment"],["[\\#.*]","comment"]],string:[['[^\\\\"\\$]+',"string"],["\\$","string.interpolated","@interpolated"],["\\\\.","string.escape.invalid"],['"',{token:"string.quote",bracket:"@close",next:"@pop"}]],whitespace:[["[ \\t\\r\\n]+","white"],["\\/\\/.*$","comment"],["\\#.*$","comment"]],interpolated:[["[{]",{token:"string.escape.curly",switchTo:"@interpolated_compound"}],["","","@pop"]]}}},[]),u.Qb(5120,u.d,function(l,n){return[s.tc(l,n)]},[s.Xd,s.Yd]),u.Qb(5120,s.X,s.uc,[s.Xd,v.c,s.Yd]),u.Qb(1073742336,d.c,d.c,[]),u.Qb(1073742336,v.e,v.e,[]),u.Qb(1073742336,v.d,v.d,[]),u.Qb(1073742336,g.r,g.r,[]),u.Qb(1073742336,g.g,g.g,[]),u.Qb(1073742336,g.p,g.p,[]),u.Qb(1073742336,s.b,s.b,[]),u.Qb(1073742336,i.p,i.p,[[2,i.u],[2,i.m]]),u.Qb(1073742336,s.d,s.d,[]),u.Qb(1073742336,s.Wd,s.Wd,[]),u.Qb(1073742336,s.hb,s.hb,[]),u.Qb(1073742336,s.i,s.i,[]),u.Qb(1073742336,s.oc,s.oc,[]),u.Qb(1073742336,s.g,s.g,[]),u.Qb(1073742336,s.k,s.k,[]),u.Qb(1073742336,s.m,s.m,[]),u.Qb(1073742336,s.u,s.u,[]),u.Qb(1073742336,s.D,s.D,[]),u.Qb(1073742336,s.C,s.C,[]),u.Qb(1073742336,s.F,s.F,[]),u.Qb(1073742336,s.Ib,s.Ib,[]),u.Qb(1073742336,s.H,s.H,[]),u.Qb(1073742336,s.Z,s.Z,[]),u.Qb(1073742336,s.qb,s.qb,[]),u.Qb(1073742336,s.hc,s.hc,[]),u.Qb(1073742336,s.Yb,s.Yb,[]),u.Qb(1073742336,s.N,s.N,[]),u.Qb(1073742336,s.dc,s.dc,[]),u.Qb(1073742336,s.K,s.K,[]),u.Qb(1073742336,s.P,s.P,[]),u.Qb(1073742336,s.gb,s.gb,[]),u.Qb(1073742336,s.fd,s.fd,[]),u.Qb(1073742336,s.mb,s.mb,[]),u.Qb(1073742336,s.ob,s.ob,[]),u.Qb(1073742336,s.pd,s.pd,[]),u.Qb(1073742336,s.td,s.td,[]),u.Qb(1073742336,s.wd,s.wd,[]),u.Qb(1073742336,s.ub,s.ub,[]),u.Qb(1073742336,s.Cb,s.Cb,[]),u.Qb(1073742336,s.Gb,s.Gb,[]),u.Qb(1073742336,s.Pb,s.Pb,[]),u.Qb(1073742336,s.Sb,s.Sb,[]),u.Qb(1073742336,s.bc,s.bc,[]),u.Qb(1073742336,s.mc,s.mc,[]),u.Qb(1073742336,s.sc,s.sc,[]),u.Qb(1073742336,s.s,s.s,[]),u.Qb(1073742336,s.A,s.A,[]),u.Qb(1073742336,s.Q,s.Q,[]),u.Qb(1073742336,s.R,s.R,[]),u.Qb(1073742336,s.U,s.U,[]),u.Qb(1073742336,s.cb,s.cb,[]),u.Qb(1073742336,s.Eb,s.Eb,[]),u.Qb(1073742336,s.Rd,s.Rd,[]),u.Qb(1073742336,s.q,s.q,[]),u.Qb(1073742336,s.Sd,s.Sd,[]),u.Qb(1073742336,s.Td,s.Td,[]),u.Qb(1073742336,s.y,s.y,[]),u.Qb(1073742336,s.vb,s.vb,[]),u.Qb(1073742336,s.Nb,s.Nb,[]),u.Qb(1073742336,s.rb,s.rb,[]),u.Qb(1073742336,q.c,q.c,[]),u.Qb(1073742336,q.f,q.f,[]),u.Qb(1073742336,q.h,q.h,[]),u.Qb(1073742336,q.k,q.k,[]),u.Qb(1073742336,q.m,q.m,[]),u.Qb(1073742336,q.o,q.o,[]),u.Qb(1073742336,q.q,q.q,[]),u.Qb(1073742336,q.s,q.s,[]),u.Qb(1073742336,q.u,q.u,[]),u.Qb(1073742336,q.w,q.w,[]),u.Qb(1073742336,q.a,q.a,[]),u.Qb(1073742336,q.x,q.x,[]),u.Qb(1073742336,s.V,s.V,[]),u.Qb(1073742336,x.b,x.b,[]),u.Qb(1073742336,T.a,T.a,[]),u.Qb(1073742336,k,k,[]),u.Qb(1073742336,o,o,[]),u.Qb(256,v.q,"XSRF-TOKEN",[]),u.Qb(256,v.r,"X-XSRF-TOKEN",[]),u.Qb(256,s.Xd,{contexts:{general:{en:{loginErrorPattern:"Invalid ID",loginPlaceholder:"Insert your ID",passwordErrorPattern:"Invalid PIN",passwordPlaceholder:"Insert your PIN",submitLabel:"Access your account",forgotPassword:"Forgot your ID or PIN?",highlightInfo:"For us the future is now"},es:{loginErrorPattern:"ID invalido",loginPlaceholder:"Inserte su ID",passwordErrorPattern:"Contrase\xf1a incorrecta",passwordPlaceholder:"Inserte su contrase\xf1a",submitLabel:"Accede a su cuenta",forgotPassword:"\xbfOlvid\xf3 su ID o contrase\xf1a?",highlightInfo:"Para nosotros el futuro es ahora"},pt:{loginErrorPattern:"ID inv\xe1lido",loginPlaceholder:"Insira seu ID",passwordErrorPattern:"Senha incorreta",passwordPlaceholder:"Insira sua senha",submitLabel:"Acesse a sua conta",forgotPassword:"Esqueceu seu ID ou sua senha?",highlightInfo:"Para n\xf3s o futuro \xe9 agora"}}},default:{context:"general",cache:!0}},[]),u.Qb(1024,i.k,function(){return[[{path:"",component:y}]]},[])])})}}]);