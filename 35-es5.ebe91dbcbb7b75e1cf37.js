(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"/m9o":function(l,n,e){"use strict";e.r(n);var u=e("CcnG"),t=function(){return function(){}}(),o=e("pMnS"),a=e("c/cy"),s=e("nMSU"),r=e("Lmtn"),i=e("ZYCi"),c=function(){return function(){}}(),b=u.Gb({encapsulation:2,styles:[],data:{}});function p(l){return u.cc(0,[(l()(),u.Ib(0,0,[["thfDocs",1]],null,66,"div",[["class","docs-api"]],null,null,null,null,null)),(l()(),u.Ib(1,0,null,null,2,"p",[["class","docs-api-module-import"]],null,null,null,null,null)),(l()(),u.Ib(2,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["import { PoHttpRequestModule } from '@portinari/portinari-ui';"])),(l()(),u.Ib(4,0,null,null,0,"div",[["class","docs-api-class-description"]],null,null,null,null,null)),(l()(),u.Ib(5,0,null,null,1,"h3",[["class","docs-api-h3"]],null,null,null,null,null)),(l()(),u.ac(-1,null,["Services"])),(l()(),u.Ib(7,0,null,null,2,"h4",[["class","docs-api-class-name"]],null,null,null,null,null)),(l()(),u.Ib(8,0,null,null,1,"code",[["class","doc-code"]],null,null,null,null,null)),(l()(),u.ac(-1,null,["PoHttpRequestInterceptorService"])),(l()(),u.Ib(10,0,null,null,56,"div",[["class","docs-api-class-description"]],null,null,null,null,null)),(l()(),u.Ib(11,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["O servi\xe7o Portinari Http Request Interceptor realiza a contabiliza\xe7\xe3o de requisi\xe7\xf5es pendentes na aplica\xe7\xe3o."])),(l()(),u.Ib(13,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["Existe a possibilidade de n\xe3o efetuar a contabiliza\xe7\xe3o das requisi\xe7\xf5es pendentes, utilizando o par\xe2metro\n"])),(l()(),u.Ib(15,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["X-Portinari-No-Count-Pending-Requests"])),(l()(),u.ac(-1,null,[". Para isso deve ser informado no cabe\xe7alho da requisi\xe7\xe3o com o valor "])),(l()(),u.Ib(18,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["'true'"])),(l()(),u.ac(-1,null,[",\npor exemplo:"])),(l()(),u.Ib(21,0,null,null,2,"pre",[],null,null,null,null,null)),(l()(),u.Ib(22,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["...\n const headers = { 'X-Portinari-No-Count-Pending-Requests': 'true' };\n\n this.http.get(`/customers/1`, { headers: headers });\n...\n"])),(l()(),u.Ib(24,0,null,null,10,"p",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["Para obter a quantidade de requisi\xe7\xf5es pendentes, deve inscrever-se no m\xe9todo "])),(l()(),u.Ib(26,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["getCountPendingRequests"])),(l()(),u.ac(-1,null,[" do\nservi\xe7o "])),(l()(),u.Ib(29,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["PoHttpRequestInterceptorService"])),(l()(),u.ac(-1,null,[", com isso, ao realizar requisi\xe7\xf5es utilizando "])),(l()(),u.Ib(32,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["HttpClient"])),(l()(),u.ac(-1,null,[",\nser\xe1 retornado a quantidade de requisi\xe7\xf5es pendentes."])),(l()(),u.Ib(35,0,null,null,10,"p",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["Tamb\xe9m existe a possibildade de travar a tela e mostrar uma imagem de "])),(l()(),u.Ib(37,0,null,null,1,"em",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["loading"])),(l()(),u.ac(-1,null,[" durante o processamento de uma requisi\xe7\xe3o\ndeve-se passar o par\xe2metro "])),(l()(),u.Ib(40,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["X-Portinari-Screen-Lock"])),(l()(),u.ac(-1,null,[" no cabe\xe7alho da requisi\xe7\xe3o com valor "])),(l()(),u.Ib(43,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["'true'"])),(l()(),u.ac(-1,null,["."])),(l()(),u.Ib(46,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["por exemplo:"])),(l()(),u.Ib(48,0,null,null,2,"pre",[],null,null,null,null,null)),(l()(),u.Ib(49,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["...\n const headers = { 'X-Portinari-Screen-Lock': 'true' };\n\n this.http.get(`/customers/1`, { headers: headers });\n...\n"])),(l()(),u.Ib(51,0,null,null,2,"blockquote",[],null,null,null,null,null)),(l()(),u.Ib(52,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["Ap\xf3s a valida\xe7\xe3o no interceptor, o par\xe2metro ser\xe1 removido do cabe\xe7alho da requisi\xe7\xe3o."])),(l()(),u.Ib(54,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["Ao importar o m\xf3dulo "])),(l()(),u.Ib(56,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["PoModule"])),(l()(),u.ac(-1,null,[" na aplica\xe7\xe3o, o "])),(l()(),u.Ib(59,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["po-http-request-interceptor"])),(l()(),u.ac(-1,null,[" \xe9 automaticamente configurado sem a necessidade\nde qualquer configura\xe7\xe3o extra."])),(l()(),u.Ib(62,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["Segue abaixo um exemplo de uso:"])),(l()(),u.Ib(64,0,null,null,2,"pre",[],null,null,null,null,null)),(l()(),u.Ib(65,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["import { HttpClient } from '@angular/common/http';\n\n...\n\n@Injectable()\nexport class CustomersService {\n\n headers = { 'X-Portinari-No-Count-Pending-Requests': true, 'X-Portinari-Screen-Lock': 'true' }\n pendingRequests: number = 0;\n subscription: Subscription;\n\n constructor(\n   private http: HttpClient,\n   private httpRequestInterceptor: PoHttpRequestInterceptorService) { }\n\n ngOnDestroy(): void {\n   this.subscription.unsubscribe();\n }\n\n ngOnInit(): void {\n   this.subscription = this.httpRequestInterceptor.getCountPendingRequests().subscribe(data => {\n     this.pendingRequests = data;\n   });\n }\n\n getCustomers() {\n   return this.http.get(`/customers/1`, { headers: headers });\n }\n\n ...\n\n}\n"]))],null,null)}u.Eb("sample-po-http-request-interceptor-doc",c,function(l){return u.cc(0,[(l()(),u.Ib(0,0,null,null,1,"sample-po-http-request-interceptor-doc",[],null,null,null,p,b)),u.Hb(1,49152,null,0,c,[],null,null)],null,null)},{},{},[]);var d=e("Ip0R"),h=e("bpOf"),m=e("gIcY"),g=function(){function l(l,n){this.http=l,this.httpRequestInterceptor=n,this.countPendingRequestHeaderParam=!1,this.screenLockHeaderParam=!1,this.pendingRequests=0,this.url=""}return l.prototype.ngOnDestroy=function(){this.subscription.unsubscribe(),this.apiSubscription&&this.apiSubscription.unsubscribe()},l.prototype.ngOnInit=function(){var l=this;this.subscription=this.httpRequestInterceptor.getCountPendingRequests().subscribe(function(n){l.pendingRequests=n})},l.prototype.getRequest=function(){var l={"X-Portinari-No-Count-Pending-Requests":this.countPendingRequestHeaderParam.toString(),"X-Portinari-Screen-Lock":this.screenLockHeaderParam.toString()};this.apiSubscription=this.http.get(this.url,{headers:l}).subscribe(function(){})},l}(),I=e("t/Na"),Q=u.Gb({encapsulation:2,styles:[],data:{}});function f(l){return u.cc(0,[(l()(),u.Ib(0,0,null,null,2,"div",[["class","po-row"]],null,null,null,null,null)),(l()(),u.Ib(1,0,null,null,1,"po-info",[["class","po-lg-12"],["p-label","Pending Requests"]],null,null,null,a.Eb,a.x)),u.Hb(2,49152,null,0,r.db,[],{label:[0,"label"],value:[1,"value"]},null),(l()(),u.Ib(3,0,null,null,7,"div",[["class","po-row"]],null,null,null,null,null)),(l()(),u.Ib(4,0,null,null,6,"po-input",[["class","po-lg-6"],["name","url"],["p-help","https://thf.totvs.com.br/sample/api/comboOption/heroes"],["p-label","URL"],["p-required",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"keydown"],[null,"keyup"]],function(l,n,e){var t=!0,o=l.component;"keydown"===n&&(t=!1!==u.Sb(l,5).onKeydown(e)&&t);"keyup"===n&&(t=!1!==u.Sb(l,5).onKeyup(e)&&t);"ngModelChange"===n&&(t=!1!==(o.url=e)&&t);return t},a.Fb,a.y)),u.Hb(5,4243456,null,0,r.gb,[u.q],{label:[0,"label"],help:[1,"help"],name:[2,"name"],setRequired:[3,"setRequired"]},null),u.Xb(1024,null,m.h,function(l){return[l]},[r.gb]),u.Xb(1024,null,m.i,function(l){return[l]},[r.gb]),u.Hb(8,671744,null,0,m.n,[[8,null],[6,m.h],[8,null],[6,m.i]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u.Xb(2048,null,m.j,null,[m.n]),u.Hb(10,16384,null,0,m.k,[[4,m.j]],null,null),(l()(),u.Ib(11,0,null,null,14,"div",[["class","po-row"]],null,null,null,null,null)),(l()(),u.Ib(12,0,null,null,6,"po-switch",[["class","po-lg-6"],["name","countPendingRequestHeaderParam"],["ngDefaultControl",""],["p-help","Enable/disable the sent param in header of request"],["p-label","X-Portinari-No-Count-Pending-Requests"],["p-label-off","Disable"],["p-label-on","Enable"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,e){var t=!0,o=l.component;"input"===n&&(t=!1!==u.Sb(l,13)._handleInput(e.target.value)&&t);"blur"===n&&(t=!1!==u.Sb(l,13).onTouched()&&t);"compositionstart"===n&&(t=!1!==u.Sb(l,13)._compositionStart()&&t);"compositionend"===n&&(t=!1!==u.Sb(l,13)._compositionEnd(e.target.value)&&t);"ngModelChange"===n&&(t=!1!==(o.countPendingRequestHeaderParam=e)&&t);return t},a.ec,a.X)),u.Hb(13,16384,null,0,m.c,[u.R,u.q,[2,m.a]],null,null),u.Hb(14,12632064,null,0,r.cc,[u.j],{name:[0,"name"],label:[1,"label"],help:[2,"help"],setLabelOn:[3,"setLabelOn"],setLabelOff:[4,"setLabelOff"]},{ngModelChange:"ngModelChange"}),u.Xb(1024,null,m.i,function(l,n){return[l,n]},[r.cc,m.c]),u.Hb(16,671744,null,0,m.n,[[8,null],[8,null],[8,null],[6,m.i]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u.Xb(2048,null,m.j,null,[m.n]),u.Hb(18,16384,null,0,m.k,[[4,m.j]],null,null),(l()(),u.Ib(19,0,null,null,6,"po-switch",[["class","po-lg-6"],["name","screenLockHeaderParam"],["ngDefaultControl",""],["p-help","Enable/disable the sent param in header of request"],["p-label","X-Portinari-Screen-Lock"],["p-label-off","Disable"],["p-label-on","Enable"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,e){var t=!0,o=l.component;"input"===n&&(t=!1!==u.Sb(l,20)._handleInput(e.target.value)&&t);"blur"===n&&(t=!1!==u.Sb(l,20).onTouched()&&t);"compositionstart"===n&&(t=!1!==u.Sb(l,20)._compositionStart()&&t);"compositionend"===n&&(t=!1!==u.Sb(l,20)._compositionEnd(e.target.value)&&t);"ngModelChange"===n&&(t=!1!==(o.screenLockHeaderParam=e)&&t);return t},a.ec,a.X)),u.Hb(20,16384,null,0,m.c,[u.R,u.q,[2,m.a]],null,null),u.Hb(21,12632064,null,0,r.cc,[u.j],{name:[0,"name"],label:[1,"label"],help:[2,"help"],setLabelOn:[3,"setLabelOn"],setLabelOff:[4,"setLabelOff"]},{ngModelChange:"ngModelChange"}),u.Xb(1024,null,m.i,function(l,n){return[l,n]},[r.cc,m.c]),u.Hb(23,671744,null,0,m.n,[[8,null],[8,null],[8,null],[6,m.i]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u.Xb(2048,null,m.j,null,[m.n]),u.Hb(25,16384,null,0,m.k,[[4,m.j]],null,null),(l()(),u.Ib(26,0,null,null,2,"div",[["class","po-row"]],null,null,null,null,null)),(l()(),u.Ib(27,0,null,null,1,"po-button",[["class","po-md-4"],["p-label","Get request"]],null,[[null,"p-click"]],function(l,n,e){var u=!0,t=l.component;"p-click"===n&&(u=!1!==t.getRequest()&&u);return u},a.mb,a.f)),u.Hb(28,49152,null,0,r.h,[],{label:[0,"label"],disabled:[1,"disabled"]},{click:"p-click"})],function(l,n){var e=n.component;l(n,2,0,"Pending Requests",e.pendingRequests);l(n,5,0,"URL","https://thf.totvs.com.br/sample/api/comboOption/heroes","url","");l(n,8,0,"url",e.url);l(n,14,0,"countPendingRequestHeaderParam","X-Portinari-No-Count-Pending-Requests","Enable/disable the sent param in header of request","Enable","Disable");l(n,16,0,"countPendingRequestHeaderParam",e.countPendingRequestHeaderParam);l(n,21,0,"screenLockHeaderParam","X-Portinari-Screen-Lock","Enable/disable the sent param in header of request","Enable","Disable");l(n,23,0,"screenLockHeaderParam",e.screenLockHeaderParam);l(n,28,0,"Get request",!e.url)},function(l,n){l(n,4,0,u.Sb(n,10).ngClassUntouched,u.Sb(n,10).ngClassTouched,u.Sb(n,10).ngClassPristine,u.Sb(n,10).ngClassDirty,u.Sb(n,10).ngClassValid,u.Sb(n,10).ngClassInvalid,u.Sb(n,10).ngClassPending),l(n,12,0,u.Sb(n,18).ngClassUntouched,u.Sb(n,18).ngClassTouched,u.Sb(n,18).ngClassPristine,u.Sb(n,18).ngClassDirty,u.Sb(n,18).ngClassValid,u.Sb(n,18).ngClassInvalid,u.Sb(n,18).ngClassPending),l(n,19,0,u.Sb(n,25).ngClassUntouched,u.Sb(n,25).ngClassTouched,u.Sb(n,25).ngClassPristine,u.Sb(n,25).ngClassDirty,u.Sb(n,25).ngClassValid,u.Sb(n,25).ngClassInvalid,u.Sb(n,25).ngClassPending)})}u.Eb("sample-po-http-request-interceptor-labs",g,function(l){return u.cc(0,[(l()(),u.Ib(0,0,null,null,1,"sample-po-http-request-interceptor-labs",[],null,null,null,f,Q)),u.Hb(1,245760,null,0,g,[I.c,r.Y],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]);var v=function(){function l(){this.hideSampleCodeTabs=!0,this.sampleCodeButtonLabel="Talk is cheap, show me the code!",this.sampleCodeButtonIcon="po-icon po-icon-plus"}return l.prototype.toggleSampleCodeTabs=function(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"po-icon-plus":"po-icon-minus"},l}(),q=u.Gb({encapsulation:2,styles:[],data:{}});function P(l){return u.cc(0,[(l()(),u.Ib(0,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.Ib(1,0,null,null,5,"blockquote",[["class","sample-blockquote"]],null,null,null,null,null)),(l()(),u.Ib(2,0,null,null,1,"label",[["class","sample-title po-font-text-large-bold"]],null,null,null,null,null)),(l()(),u.ac(-1,null,["Portinari Http Request Interceptor Labs"])),(l()(),u.Ib(4,0,null,null,2,"a",[["class","show-me-the-code"]],null,[[null,"click"]],function(l,n,e){var u=!0,t=l.component;"click"===n&&(u=!1!==t.toggleSampleCodeTabs()&&u);return u},null,null)),(l()(),u.Ib(5,0,null,null,0,"span",[],[[8,"className",0]],null,null,null,null)),(l()(),u.ac(6,null,[" ",""])),(l()(),u.Ib(7,0,null,null,22,"div",[],null,null,null,null,null)),u.Xb(512,null,d.C,d.D,[u.C,u.D,u.q,u.R]),u.Hb(9,278528,null,0,d.m,[d.C],{ngClass:[0,"ngClass"]},null),u.Vb(10,{"docs-sample-code-tabs":0}),(l()(),u.Ib(11,0,null,null,18,"po-tabs",[["p-size","2"]],null,null,null,a.hc,a.ab)),u.Hb(12,49152,null,1,r.jc,[u.j],null,null),u.Yb(603979776,1,{tabs:1}),(l()(),u.Ib(14,0,null,0,7,"po-tab",[["p-active",""],["p-label","HTML"]],null,null,null,a.fc,a.Y)),u.Hb(15,1097728,[[1,4]],0,r.ec,[u.q],{active:[0,"active"],label:[1,"label"]},null),(l()(),u.Ib(16,0,null,0,5,"div",[],null,null,null,null,null)),(l()(),u.Ib(17,0,null,null,1,"label",[["class","doc-label-path"]],null,null,null,null,null)),(l()(),u.ac(-1,null,["sample-po-http-request-interceptor-labs.component.html"])),(l()(),u.Ib(19,0,null,null,2,"pre",[["appCodeHighlight",""],["class","html"]],null,null,null,null,null)),u.Hb(20,4210688,null,0,h.a,[u.q],null,null),(l()(),u.ac(-1,null,['<div class="po-row">\n  <po-info\n    class="po-lg-12"\n    p-label="Pending Requests"\n    [p-value]="pendingRequests">\n  </po-info>\n</div>\n\n<div class="po-row">\n  <po-input\n    class="po-lg-6"\n    name="url"\n    [(ngModel)]="url"\n    p-help="https://thf.totvs.com.br/sample/api/comboOption/heroes"\n    p-label="URL"\n    p-required>\n  </po-input>\n</div>\n\n<div class="po-row">\n  <po-switch\n    class="po-lg-6"\n    name="countPendingRequestHeaderParam"\n    [(ngModel)]="countPendingRequestHeaderParam"\n    p-help="Enable/disable the sent param in header of request"\n    p-label="X-Portinari-No-Count-Pending-Requests"\n    p-label-off="Disable"\n    p-label-on="Enable"\n    ngDefaultControl>\n  </po-switch>\n\n  <po-switch\n    class="po-lg-6"\n    name="screenLockHeaderParam"\n    [(ngModel)]="screenLockHeaderParam"\n    p-help="Enable/disable the sent param in header of request"\n    p-label="X-Portinari-Screen-Lock"\n    p-label-off="Disable"\n    p-label-on="Enable"\n    ngDefaultControl>\n  </po-switch>\n</div>\n\n<div class="po-row">\n  <po-button\n    class="po-md-4"\n    p-label="Get request"\n    [p-disabled]="!url"\n    (p-click)="getRequest()">\n  </po-button>\n</div>\n'])),(l()(),u.Ib(22,0,null,0,7,"po-tab",[["p-label","TS"]],null,null,null,a.fc,a.Y)),u.Hb(23,1097728,[[1,4]],0,r.ec,[u.q],{label:[0,"label"]},null),(l()(),u.Ib(24,0,null,0,5,"div",[],null,null,null,null,null)),(l()(),u.Ib(25,0,null,null,1,"label",[["class","doc-label-path"]],null,null,null,null,null)),(l()(),u.ac(-1,null,["sample-po-http-request-interceptor-labs.component.ts"])),(l()(),u.Ib(27,0,null,null,2,"pre",[["appCodeHighlight",""],["class","typescript"]],null,null,null,null,null)),u.Hb(28,4210688,null,0,h.a,[u.q],null,null),(l()(),u.ac(29,null,["import "," Component, OnDestroy, OnInit } from '@angular/core';\nimport "," HttpClient } from '@angular/common/http';\n\nimport "," Subscription } from 'rxjs';\n\nimport "," PoHttpRequestInterceptorService } from '@portinari/portinari-ui';\n\n@Component(","\n  selector: 'sample-po-http-request-interceptor-labs',\n  templateUrl: './sample-po-http-request-interceptor-labs.component.html'\n})\nexport class SamplePoHttpRequestInterceptorLabsComponent implements OnInit, OnDestroy ","\n\n  countPendingRequestHeaderParam = false;\n  screenLockHeaderParam = false;\n\n  pendingRequests: number = 0;\n  url: string = '';\n\n  private subscription: Subscription;\n  private apiSubscription: Subscription;\n\n  constructor(\n    private http: HttpClient,\n    private httpRequestInterceptor: PoHttpRequestInterceptorService) "," }\n\n  ngOnDestroy(): void ","\n    this.subscription.unsubscribe();\n\n    if (this.apiSubscription) ","\n      this.apiSubscription.unsubscribe();\n    }\n  }\n\n  ngOnInit(): void ","\n    this.subscription = this.httpRequestInterceptor.getCountPendingRequests().subscribe(data => ","\n      this.pendingRequests = data;\n    });\n  }\n\n  getRequest() ","\n    const headers = ","\n      'X-Portinari-No-Count-Pending-Requests': this.countPendingRequestHeaderParam.toString(),\n      'X-Portinari-Screen-Lock': this.screenLockHeaderParam.toString()\n    };\n\n    this.apiSubscription = this.http.get(this.url, "," headers: headers }).subscribe(() => ","});\n  }\n\n}\n"])),(l()(),u.Ib(30,0,null,null,2,"div",[["class","docs-sample-container"]],null,null,null,null,null)),(l()(),u.Ib(31,0,null,null,1,"sample-po-http-request-interceptor-labs",[],null,null,null,f,Q)),u.Hb(32,245760,null,0,g,[I.c,r.Y],null,null),(l()(),u.Ib(33,0,null,null,0,"hr",[],null,null,null,null,null))],function(l,n){var e=l(n,10,0,n.component.hideSampleCodeTabs);l(n,9,0,e);l(n,15,0,"","HTML");l(n,23,0,"TS"),l(n,32,0)},function(l,n){var e=n.component;l(n,5,0,"po-icon "+e.sampleCodeButtonIcon),l(n,6,0,e.sampleCodeButtonLabel);l(n,29,1,["{","{","{","{","{","{","{","{","{","{","{","{","{","{","{"])})}u.Eb("sample-po-http-request-interceptor-labs-view",v,function(l){return u.cc(0,[(l()(),u.Ib(0,0,null,null,1,"sample-po-http-request-interceptor-labs-view",[],null,null,null,P,q)),u.Hb(1,49152,null,0,v,[],null,null)],null,null)},{},{},[]);var C=function(){function l(l,n){this.route=l,this.router=n,this.hideThfWebSample=!0,this.samplesLength=1,this.activeTab="\x1cdoc",this.actions=[{label:"Documenta\xe7\xe3o",action:this.goBack,icon:"po-icon-document-filled"},{label:"Colabore",action:this.improveDocs}]}return l.prototype.goBack=function(){this.router.navigate(["documentation"])},l.prototype.improveDocs=function(){window.open("https://github.com/portinariui/portinari-angular/tree/master/projects/ui/src/lib/interceptors/po-http-request/po-http-request-interceptor.service.ts","_blank")},l.prototype.ngOnInit=function(){var l=this;this.sub=this.route.queryParams.subscribe(function(n){var e=n.view;l.activeTab=e||"doc",l.hideThfWebSample=0===l.samplesLength})},l.prototype.ngOnDestroy=function(){this.sub.unsubscribe()},l}(),H=u.Gb({encapsulation:2,styles:[],data:{}});function S(l){return u.cc(0,[(l()(),u.Ib(0,16777216,null,null,12,"po-page-default",[["p-title"," Http Request Interceptor"]],null,null,null,a.Qb,a.J)),u.Hb(1,1622016,null,0,r.Db,[u.gb,u.R,i.m],{actions:[0,"actions"],title:[1,"title"]},null),(l()(),u.Ib(2,0,null,0,10,"po-tabs",[["p-size","1"]],null,null,null,a.hc,a.ab)),u.Hb(3,49152,null,1,r.jc,[u.j],null,null),u.Yb(603979776,1,{tabs:1}),(l()(),u.Ib(5,0,null,0,3,"po-tab",[["p-label","Documenta\xe7\xe3o"]],null,null,null,a.fc,a.Y)),u.Hb(6,1097728,[[1,4]],0,r.ec,[u.q],{active:[0,"active"],label:[1,"label"]},null),(l()(),u.Ib(7,0,null,0,1,"sample-po-http-request-interceptor-doc",[],null,null,null,p,b)),u.Hb(8,49152,null,0,c,[],null,null),(l()(),u.Ib(9,0,null,0,3,"po-tab",[["p-label","Exemplos"]],null,null,null,a.fc,a.Y)),u.Hb(10,1097728,[[1,4]],0,r.ec,[u.q],{active:[0,"active"],hide:[1,"hide"],label:[2,"label"]},null),(l()(),u.Ib(11,0,null,0,1,"sample-po-http-request-interceptor-labs-view",[],null,null,null,P,q)),u.Hb(12,49152,null,0,v,[],null,null)],function(l,n){var e=n.component;l(n,1,0,e.actions," Http Request Interceptor");l(n,6,0,e.activeTab.includes("doc"),"Documenta\xe7\xe3o");l(n,10,0,e.activeTab.includes("web"),e.hideThfWebSample,"Exemplos")},null)}var R=u.Eb("ng-component",C,function(l){return u.cc(0,[(l()(),u.Ib(0,0,null,null,1,"ng-component",[],null,null,null,S,H)),u.Hb(1,245760,null,0,C,[i.a,i.m],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),k=e("oVQh"),w=e("aVyw"),y=e("PCNd"),L=function(){return function(){}}();e.d(n,"DocPoHttpRequestInterceptorModuleNgFactory",function(){return D});var D=u.Fb(t,[],function(l){return u.Pb([u.Qb(512,u.m,u.rb,[[8,[o.a,a.pc,a.qc,a.rc,a.sc,a.tc,a.uc,a.wc,a.vc,a.xc,a.yc,a.zc,a.Ac,a.a,a.Bc,s.a,R]],[3,u.m],u.I]),u.Qb(4608,d.q,d.p,[u.E,[2,d.H]]),u.Qb(4608,I.l,I.r,[d.e,u.N,I.p]),u.Qb(4608,I.s,I.s,[I.l,I.q]),u.Qb(4608,r.v,r.v,[u.m,u.g,u.A]),u.Qb(4608,r.Bb,r.Bb,[r.v]),u.Qb(4608,r.Ce,r.Ce,[]),u.Qb(5120,I.a,function(l,n,e,u,t){return[l,new r.X(n,e),new r.Y(u,t)]},[I.s,r.Bb,r.v,r.Ce,r.v]),u.Qb(4608,I.o,I.o,[]),u.Qb(6144,I.m,null,[I.o]),u.Qb(4608,I.k,I.k,[I.m]),u.Qb(6144,I.b,null,[I.k]),u.Qb(4608,I.g,I.n,[I.b,u.A]),u.Qb(4608,I.c,I.c,[I.g]),u.Qb(4608,m.s,m.s,[]),u.Qb(4608,m.d,m.d,[]),u.Qb(4608,r.He,r.He,[]),u.Qb(4608,r.Le,r.Le,[]),u.Qb(4608,r.Me,r.Me,[]),u.Qb(4608,r.Sc,r.Sc,[]),u.Qb(4608,r.Wc,r.Wc,[]),u.Qb(4608,r.Ke,r.Ke,[]),u.Qb(4608,r.Ne,r.Ne,[]),u.Qb(4608,r.E,r.E,[r.v]),u.Qb(4608,d.g,d.g,[u.E]),u.Qb(4608,d.d,d.d,[u.E]),u.Qb(4608,d.f,d.f,[u.E]),u.Qb(4608,r.rc,r.rc,[]),u.Qb(4608,d.y,d.y,[]),u.Qb(4608,r.Gd,r.Gd,[I.c]),u.Qb(4608,r.Hd,r.Hd,[I.c]),u.Qb(4608,r.Jd,r.Jd,[I.c]),u.Qb(4608,r.Ud,r.Ud,[]),u.Qb(4608,r.X,r.X,[r.Bb,r.v]),u.Qb(4608,r.Y,r.Y,[r.Ce,r.v]),u.Qb(4608,r.bb,r.bb,[]),u.Qb(4608,k.y,k.y,[I.c]),u.Qb(4608,k.C,k.C,[I.c]),u.Qb(4608,k.H,k.H,[I.c]),u.Qb(4608,k.I,k.I,[k.H]),u.Qb(4608,k.M,k.M,[I.c]),u.Qb(4352,w.c,{language:"terraform",options:{keywords:["resource","provider","variable","output","module","true","false"],operators:["{","}","(",")","[","]","?",":"],tokenizer:{root:[["[a-z_$][\\w$]*",{cases:{"@keywords":"keyword","@default":"identifier"}}],{include:"@whitespace"},["\\d*\\.\\d+([eE][\\-+]?\\d+)?","number.float"],["0[x][0-9a-fA-F]+","number.hex"],["\\d+","number"],["[;,.]","delimiter"],['"([^"\\\\]|\\\\.)*$',"string.invalid"],['"',{token:"string.quote",bracket:"@open",next:"@string"}],["'[^\\\\']'","string"],["'","string.invalid"]],comment:[["[^\\/*]+","comment"],["[\\/*]","comment"],["[\\#.*]","comment"]],string:[['[^\\\\"\\$]+',"string"],["\\$","string.interpolated","@interpolated"],["\\\\.","string.escape.invalid"],['"',{token:"string.quote",bracket:"@close",next:"@pop"}]],whitespace:[["[ \\t\\r\\n]+","white"],["\\/\\/.*$","comment"],["\\#.*$","comment"]],interpolated:[["[{]",{token:"string.escape.curly",switchTo:"@interpolated_compound"}],["","","@pop"]]}}},[]),u.Qb(5120,u.d,function(l,n){return[r.Ec(l,n)]},[r.De,r.He]),u.Qb(5120,r.cb,r.Fc,[r.De,I.c,r.He]),u.Qb(1073742336,d.c,d.c,[]),u.Qb(1073742336,I.e,I.e,[]),u.Qb(1073742336,I.d,I.d,[]),u.Qb(1073742336,m.r,m.r,[]),u.Qb(1073742336,m.g,m.g,[]),u.Qb(1073742336,m.p,m.p,[]),u.Qb(1073742336,r.c,r.c,[]),u.Qb(1073742336,r.e,r.e,[]),u.Qb(1073742336,i.p,i.p,[[2,i.u],[2,i.m]]),u.Qb(1073742336,r.g,r.g,[]),u.Qb(1073742336,r.Ge,r.Ge,[]),u.Qb(1073742336,r.mb,r.mb,[]),u.Qb(1073742336,r.l,r.l,[]),u.Qb(1073742336,r.xc,r.xc,[]),u.Qb(1073742336,r.j,r.j,[]),u.Qb(1073742336,r.n,r.n,[]),u.Qb(1073742336,r.p,r.p,[]),u.Qb(1073742336,r.y,r.y,[]),u.Qb(1073742336,r.I,r.I,[]),u.Qb(1073742336,r.H,r.H,[]),u.Qb(1073742336,r.K,r.K,[]),u.Qb(1073742336,r.Nb,r.Nb,[]),u.Qb(1073742336,r.M,r.M,[]),u.Qb(1073742336,r.eb,r.eb,[]),u.Qb(1073742336,r.Pc,r.Pc,[]),u.Qb(1073742336,r.Oc,r.Oc,[]),u.Qb(1073742336,r.vb,r.vb,[]),u.Qb(1073742336,r.Pb,r.Pb,[]),u.Qb(1073742336,r.Vc,r.Vc,[]),u.Qb(1073742336,r.u,r.u,[]),u.Qb(1073742336,r.Xc,r.Xc,[]),u.Qb(1073742336,r.Yc,r.Yc,[]),u.Qb(1073742336,r.D,r.D,[]),u.Qb(1073742336,r.Ab,r.Ab,[]),u.Qb(1073742336,r.Vb,r.Vb,[]),u.Qb(1073742336,r.Lb,r.Lb,[]),u.Qb(1073742336,r.qc,r.qc,[]),u.Qb(1073742336,r.hc,r.hc,[]),u.Qb(1073742336,r.S,r.S,[]),u.Qb(1073742336,r.mc,r.mc,[]),u.Qb(1073742336,r.P,r.P,[]),u.Qb(1073742336,r.U,r.U,[]),u.Qb(1073742336,r.lb,r.lb,[]),u.Qb(1073742336,r.Nd,r.Nd,[]),u.Qb(1073742336,r.rb,r.rb,[]),u.Qb(1073742336,r.tb,r.tb,[]),u.Qb(1073742336,r.Wd,r.Wd,[]),u.Qb(1073742336,r.ae,r.ae,[]),u.Qb(1073742336,r.de,r.de,[]),u.Qb(1073742336,r.zb,r.zb,[]),u.Qb(1073742336,r.Hb,r.Hb,[]),u.Qb(1073742336,r.Xb,r.Xb,[]),u.Qb(1073742336,r.ac,r.ac,[]),u.Qb(1073742336,r.kc,r.kc,[]),u.Qb(1073742336,r.vc,r.vc,[]),u.Qb(1073742336,r.zc,r.zc,[]),u.Qb(1073742336,r.Dc,r.Dc,[]),u.Qb(1073742336,r.w,r.w,[]),u.Qb(1073742336,r.F,r.F,[]),u.Qb(1073742336,r.V,r.V,[]),u.Qb(1073742336,r.W,r.W,[]),u.Qb(1073742336,r.Z,r.Z,[]),u.Qb(1073742336,r.hb,r.hb,[]),u.Qb(1073742336,r.Jb,r.Jb,[]),u.Qb(1073742336,r.wb,r.wb,[]),u.Qb(1073742336,k.c,k.c,[]),u.Qb(1073742336,k.f,k.f,[]),u.Qb(1073742336,k.h,k.h,[]),u.Qb(1073742336,k.k,k.k,[]),u.Qb(1073742336,k.m,k.m,[]),u.Qb(1073742336,k.o,k.o,[]),u.Qb(1073742336,k.q,k.q,[]),u.Qb(1073742336,k.s,k.s,[]),u.Qb(1073742336,k.u,k.u,[]),u.Qb(1073742336,k.w,k.w,[]),u.Qb(1073742336,k.a,k.a,[]),u.Qb(1073742336,k.x,k.x,[]),u.Qb(1073742336,r.ab,r.ab,[]),u.Qb(1073742336,w.b,w.b,[]),u.Qb(1073742336,y.a,y.a,[]),u.Qb(1073742336,L,L,[]),u.Qb(1073742336,t,t,[]),u.Qb(256,I.p,"XSRF-TOKEN",[]),u.Qb(256,I.q,"X-XSRF-TOKEN",[]),u.Qb(256,r.De,{contexts:{general:{en:{loginErrorPattern:"Invalid ID",loginPlaceholder:"Insert your ID",passwordErrorPattern:"Invalid PIN",passwordPlaceholder:"Insert your PIN",submitLabel:"Access your account",forgotPassword:"Forgot your ID or PIN?",highlightInfo:"For us the future is now"},es:{loginErrorPattern:"ID invalido",loginPlaceholder:"Inserte su ID",passwordErrorPattern:"Contrase\xf1a incorrecta",passwordPlaceholder:"Inserte su contrase\xf1a",submitLabel:"Accede a su cuenta",forgotPassword:"\xbfOlvid\xf3 su ID o contrase\xf1a?",highlightInfo:"Para nosotros el futuro es ahora"},pt:{loginErrorPattern:"ID inv\xe1lido",loginPlaceholder:"Insira seu ID",passwordErrorPattern:"Senha incorreta",passwordPlaceholder:"Insira sua senha",submitLabel:"Acesse a sua conta",forgotPassword:"Esqueceu seu ID ou sua senha?",highlightInfo:"Para n\xf3s o futuro \xe9 agora"}}},default:{context:"general",cache:!0}},[]),u.Qb(1024,i.k,function(){return[[{path:"",component:C}]]},[])])})}}]);