(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{OO4K:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class o{}var t=u("pMnS"),b=u("c/cy"),a=u("nMSU"),i=u("8xxD"),s=u("iInd"),c=u("bpOf");class r{}var d=e.Eb({encapsulation:2,styles:[],data:{}});function p(l){return e.ac(0,[(l()(),e.Gb(0,0,[["thfDocs",1]],null,61,"div",[["class","docs-api"]],null,null,null,null,null)),(l()(),e.Gb(1,0,null,null,2,"p",[["class","docs-api-module-import"]],null,null,null,null,null)),(l()(),e.Gb(2,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Yb(-1,null,["import { PoSlideModule } from '@portinari/portinari-ui';"])),(l()(),e.Gb(4,0,null,null,19,"div",[["class","docs-api-class-description"]],null,null,null,null,null)),(l()(),e.Gb(5,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),e.Yb(-1,null,["M\xf3dulo do componente "])),(l()(),e.Gb(7,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Yb(-1,null,["po-slide"])),(l()(),e.Yb(-1,null,["."])),(l()(),e.Gb(10,0,null,null,8,"blockquote",[],null,null,null,null,null)),(l()(),e.Gb(11,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),e.Yb(-1,null,["Para o correto funcionamento do componente "])),(l()(),e.Gb(13,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Yb(-1,null,["po-slide"])),(l()(),e.Yb(-1,null,[", deve ser importado o m\xf3dulo "])),(l()(),e.Gb(16,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Yb(-1,null,["BrowserAnimationsModule"])),(l()(),e.Yb(-1,null,[" no\nm\xf3dulo principal da sua aplica\xe7\xe3o."])),(l()(),e.Gb(19,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Yb(-1,null,["M\xf3dulo da aplica\xe7\xe3o:"])),(l()(),e.Gb(21,0,null,null,2,"pre",[],null,null,null,null,null)),(l()(),e.Gb(22,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Yb(-1,null,["import { BrowserAnimationsModule } from '@angular/platform-browser/animations';\nimport { PoModule } from '@portinari/portinari-ui';\n...\n\n@NgModule({\n  imports: [\n    BrowserModule,\n    BrowserAnimationsModule,\n    ...\n    PoModule\n  ],\n  declarations: [\n    AppComponent,\n    ...\n  ],\n  providers: [],\n  bootstrap: [AppComponent]\n})\nexport class AppModule { }\n"])),(l()(),e.Gb(24,0,null,null,1,"h3",[["class","docs-api-h3"]],null,null,null,null,null)),(l()(),e.Yb(-1,null,["Componente"])),(l()(),e.Gb(26,0,null,null,2,"h4",[["class","docs-api-class-name"]],null,null,null,null,null)),(l()(),e.Gb(27,0,null,null,1,"code",[["class","doc-code"]],null,null,null,null,null)),(l()(),e.Yb(-1,null,["PoSlideContentTemplateDirective"])),(l()(),e.Gb(29,0,null,null,26,"div",[["class","docs-api-class-description"]],null,null,null,null,null)),(l()(),e.Gb(30,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Yb(-1,null,["Esta diretiva permite a customiza\xe7\xe3o de um slide."])),(l()(),e.Gb(32,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Yb(-1,null,["Deve-se utilizar como par\xe2metro a refer\xeancia do item e/ou \xedndice, sendo por padr\xe3o o item."])),(l()(),e.Gb(34,0,null,null,10,"ul",[],null,null,null,null,null)),(l()(),e.Gb(35,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),e.Yb(-1,null,["Item: "])),(l()(),e.Gb(37,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Yb(-1,null,["item"])),(l()(),e.Yb(-1,null,[" determina o item do slide corrente."])),(l()(),e.Gb(40,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),e.Yb(-1,null,["\xcdndice: "])),(l()(),e.Gb(42,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Yb(-1,null,["index"])),(l()(),e.Yb(-1,null,[" determina o \xedndice do slide corrente."])),(l()(),e.Gb(45,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),e.Yb(-1,null,["Esta diretiva pode ser usada de duas formas: expl\xedcita ou "])),(l()(),e.Gb(47,0,null,null,1,"em",[],null,null,null,null,null)),(l()(),e.Yb(-1,null,["syntax sugar"])),(l()(),e.Yb(-1,null,[". Veja a seguir ambos, respectivamente:"])),(l()(),e.Gb(50,0,null,null,2,"pre",[],null,null,null,null,null)),(l()(),e.Gb(51,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Yb(-1,null,['...\n<po-slide\n  [p-slides]="[{ id: 1, name: \'Register\', email: \'register@portinari.com\' }]">\n\n  <ng-template p-slide-content-template let-item let-code="index">\n    <div class="po-row">\n      <po-info class="po-md-6" p-label="Code" [p-value]="item.id"></po-info>\n      <po-info class="po-md-6" p-label="Email" [p-value]="item.email"></po-info>\n    </div>\n  </ng-template>\n\n</po-slide>\n\n...\n'])),(l()(),e.Gb(53,0,null,null,2,"pre",[],null,null,null,null,null)),(l()(),e.Gb(54,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Yb(-1,null,['...\n<po-slide\n   [p-slides]="[{ id: 1, name: \'Register\', email: \'register@portinari.com\' }]">\n\n   <div *p-slide-content-template="let item, let i=index" class="po-row">\n     <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>\n   </div>\n</po-slide>\n...\n'])),(l()(),e.Gb(56,0,null,null,5,"div",[["class","docs-api-directive-selectors"]],null,null,null,null,null)),(l()(),e.Gb(57,0,null,null,1,"h4",[["class","docs-api-class-selector-label"]],null,null,null,null,null)),(l()(),e.Yb(-1,null,["Seletor"])),(l()(),e.Gb(59,0,null,null,2,"pre",[["appCodeHighlight",""]],null,null,null,null,null)),e.Fb(60,4210688,null,0,c.a,[e.q],null,null),(l()(),e.Yb(-1,null,["<[p-slide-content-template] >\n</[p-slide-content-template]>\n"]))],null,null)}e.Cb("sample-po-slide-content-template-doc",r,function(l){return e.ac(0,[(l()(),e.Gb(0,0,null,null,1,"sample-po-slide-content-template-doc",[],null,null,null,p,d)),e.Fb(1,49152,null,0,r,[],null,null)],null,null)},{},{},[]);class O{constructor(l,n){this.route=l,this.router=n,this.hideThfWebSample=!0,this.samplesLength=0,this.activeTab="\x1cdoc",this.actions=[{label:"Documenta\xe7\xe3o",action:this.goBack,icon:"po-icon-document-filled"},{label:"Colabore",action:this.improveDocs}]}goBack(){this.router.navigate(["documentation"])}improveDocs(){window.open("https://github.com/portinariui/portinari-angular/tree/master/projects/ui/src/lib/components/po-slide/directives/po-slide-content-template.directive.ts","_blank")}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{const n=l.view;this.activeTab=n||"doc",this.hideThfWebSample=0===this.samplesLength})}ngOnDestroy(){this.sub.unsubscribe()}}var m=e.Eb({encapsulation:2,styles:[],data:{}});function g(l){return e.ac(0,[(l()(),e.Gb(0,16777216,null,null,10,"po-page-default",[["p-title"," Slide Content Template"]],null,null,null,b.Nb,b.I)),e.Fb(1,1622016,null,0,i.Bb,[e.eb,e.Q,s.m],{actions:[0,"actions"],title:[1,"title"]},null),(l()(),e.Gb(2,0,null,0,8,"po-tabs",[["p-size","1"]],null,null,null,b.ec,b.Z)),e.Fb(3,49152,null,1,i.hc,[e.j],null,null),e.Wb(603979776,1,{tabs:1}),(l()(),e.Gb(5,0,null,0,3,"po-tab",[["p-label","Documenta\xe7\xe3o"]],null,null,null,b.cc,b.X)),e.Fb(6,1097728,[[1,4]],0,i.cc,[e.q],{active:[0,"active"],label:[1,"label"]},null),(l()(),e.Gb(7,0,null,0,1,"sample-po-slide-content-template-doc",[],null,null,null,p,d)),e.Fb(8,49152,null,0,r,[],null,null),(l()(),e.Gb(9,0,null,0,1,"po-tab",[["p-label","Exemplos"]],null,null,null,b.cc,b.X)),e.Fb(10,1097728,[[1,4]],0,i.cc,[e.q],{active:[0,"active"],hide:[1,"hide"],label:[2,"label"]},null)],function(l,n){var u=n.component;l(n,1,0,u.actions," Slide Content Template");l(n,6,0,u.activeTab.includes("doc"),"Documenta\xe7\xe3o");l(n,10,0,u.activeTab.includes("web"),u.hideThfWebSample,"Exemplos")},null)}var h=e.Cb("ng-component",O,function(l){return e.ac(0,[(l()(),e.Gb(0,0,null,null,1,"ng-component",[],null,null,null,g,m)),e.Fb(1,245760,null,0,O,[s.a,s.m],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),f=u("SVse"),v=u("IheW"),G=u("s7LF"),w=u("XiHK"),Y=u("YoMC"),I=u("PCNd");class P{}u.d(n,"DocPoSlideContentTemplateModuleNgFactory",function(){return x});var x=e.Db(o,[],function(l){return e.Nb([e.Ob(512,e.m,e.pb,[[8,[t.a,b.lc,b.mc,b.nc,b.oc,b.qc,b.pc,b.rc,b.sc,b.tc,b.a,b.uc,a.a,h]],[3,e.m],e.I]),e.Ob(4608,f.q,f.p,[e.E,[2,f.E]]),e.Ob(4608,v.m,v.s,[f.e,e.N,v.q]),e.Ob(4608,v.t,v.t,[v.m,v.r]),e.Ob(4608,i.u,i.u,[e.m,e.g,e.A]),e.Ob(4608,i.zb,i.zb,[i.u]),e.Ob(4608,i.C,i.C,[i.u]),e.Ob(4608,i.ie,i.ie,[]),e.Ob(5120,v.a,function(l,n,u,e,o){return[l,new i.V(n,u),new i.W(e,o)]},[v.t,i.zb,i.C,i.ie,i.u]),e.Ob(4608,v.p,v.p,[]),e.Ob(6144,v.n,null,[v.p]),e.Ob(4608,v.l,v.l,[v.n]),e.Ob(6144,v.b,null,[v.l]),e.Ob(4608,v.g,v.o,[v.b,e.A]),e.Ob(4608,v.c,v.c,[v.g]),e.Ob(4608,G.s,G.s,[]),e.Ob(4608,G.d,G.d,[]),e.Ob(4608,i.oe,i.oe,[]),e.Ob(4608,i.se,i.se,[]),e.Ob(4608,i.te,i.te,[]),e.Ob(4608,i.Hc,i.Hc,[]),e.Ob(4608,i.Kc,i.Kc,[]),e.Ob(4608,i.re,i.re,[]),e.Ob(4608,i.ue,i.ue,[]),e.Ob(4608,f.g,f.g,[e.E]),e.Ob(4608,f.d,f.d,[e.E]),e.Ob(4608,f.f,f.f,[e.E]),e.Ob(4608,i.pc,i.pc,[]),e.Ob(4608,f.x,f.x,[]),e.Ob(4608,i.Fd,i.Fd,[]),e.Ob(4608,i.V,i.V,[i.zb,i.C]),e.Ob(4608,i.W,i.W,[i.ie,i.u]),e.Ob(4608,i.Z,i.Z,[]),e.Ob(4608,w.y,w.y,[v.c]),e.Ob(4608,w.C,w.C,[v.c]),e.Ob(4608,w.H,w.H,[v.c]),e.Ob(4608,w.I,w.I,[w.H]),e.Ob(4608,w.M,w.M,[v.c]),e.Ob(4352,Y.c,{language:"terraform",options:{keywords:["resource","provider","variable","output","module","true","false"],operators:["{","}","(",")","[","]","?",":"],tokenizer:{root:[["[a-z_$][\\w$]*",{cases:{"@keywords":"keyword","@default":"identifier"}}],{include:"@whitespace"},["\\d*\\.\\d+([eE][\\-+]?\\d+)?","number.float"],["0[x][0-9a-fA-F]+","number.hex"],["\\d+","number"],["[;,.]","delimiter"],['"([^"\\\\]|\\\\.)*$',"string.invalid"],['"',{token:"string.quote",bracket:"@open",next:"@string"}],["'[^\\\\']'","string"],["'","string.invalid"]],comment:[["[^\\/*]+","comment"],["[\\/*]","comment"],["[\\#.*]","comment"]],string:[['[^\\\\"\\$]+',"string"],["\\$","string.interpolated","@interpolated"],["\\\\.","string.escape.invalid"],['"',{token:"string.quote",bracket:"@close",next:"@pop"}]],whitespace:[["[ \\t\\r\\n]+","white"],["\\/\\/.*$","comment"],["\\#.*$","comment"]],interpolated:[["[{]",{token:"string.escape.curly",switchTo:"@interpolated_compound"}],["","","@pop"]]}}},[]),e.Ob(5120,e.d,function(l,n){return[i.Ac(l,n)]},[i.je,i.oe]),e.Ob(5120,i.ab,i.Bc,[i.je,v.c,i.oe]),e.Ob(1073742336,f.c,f.c,[]),e.Ob(1073742336,v.e,v.e,[]),e.Ob(1073742336,v.d,v.d,[]),e.Ob(1073742336,G.r,G.r,[]),e.Ob(1073742336,G.g,G.g,[]),e.Ob(1073742336,G.p,G.p,[]),e.Ob(1073742336,i.c,i.c,[]),e.Ob(1073742336,i.e,i.e,[]),e.Ob(1073742336,s.p,s.p,[[2,s.u],[2,s.m]]),e.Ob(1073742336,i.g,i.g,[]),e.Ob(1073742336,i.ne,i.ne,[]),e.Ob(1073742336,i.kb,i.kb,[]),e.Ob(1073742336,i.l,i.l,[]),e.Ob(1073742336,i.vc,i.vc,[]),e.Ob(1073742336,i.j,i.j,[]),e.Ob(1073742336,i.n,i.n,[]),e.Ob(1073742336,i.p,i.p,[]),e.Ob(1073742336,i.x,i.x,[]),e.Ob(1073742336,i.G,i.G,[]),e.Ob(1073742336,i.F,i.F,[]),e.Ob(1073742336,i.I,i.I,[]),e.Ob(1073742336,i.Lb,i.Lb,[]),e.Ob(1073742336,i.K,i.K,[]),e.Ob(1073742336,i.cb,i.cb,[]),e.Ob(1073742336,i.tb,i.tb,[]),e.Ob(1073742336,i.Nb,i.Nb,[]),e.Ob(1073742336,i.Jc,i.Jc,[]),e.Ob(1073742336,i.t,i.t,[]),e.Ob(1073742336,i.Lc,i.Lc,[]),e.Ob(1073742336,i.Mc,i.Mc,[]),e.Ob(1073742336,i.B,i.B,[]),e.Ob(1073742336,i.yb,i.yb,[]),e.Ob(1073742336,i.Tb,i.Tb,[]),e.Ob(1073742336,i.oc,i.oc,[]),e.Ob(1073742336,i.fc,i.fc,[]),e.Ob(1073742336,i.Q,i.Q,[]),e.Ob(1073742336,i.kc,i.kc,[]),e.Ob(1073742336,i.N,i.N,[]),e.Ob(1073742336,i.S,i.S,[]),e.Ob(1073742336,i.jb,i.jb,[]),e.Ob(1073742336,i.yd,i.yd,[]),e.Ob(1073742336,i.pb,i.pb,[]),e.Ob(1073742336,i.rb,i.rb,[]),e.Ob(1073742336,i.Hd,i.Hd,[]),e.Ob(1073742336,i.Ld,i.Ld,[]),e.Ob(1073742336,i.Od,i.Od,[]),e.Ob(1073742336,i.xb,i.xb,[]),e.Ob(1073742336,i.Fb,i.Fb,[]),e.Ob(1073742336,i.Jb,i.Jb,[]),e.Ob(1073742336,i.Vb,i.Vb,[]),e.Ob(1073742336,i.Yb,i.Yb,[]),e.Ob(1073742336,i.ic,i.ic,[]),e.Ob(1073742336,i.tc,i.tc,[]),e.Ob(1073742336,i.zc,i.zc,[]),e.Ob(1073742336,i.v,i.v,[]),e.Ob(1073742336,i.D,i.D,[]),e.Ob(1073742336,i.T,i.T,[]),e.Ob(1073742336,i.U,i.U,[]),e.Ob(1073742336,i.X,i.X,[]),e.Ob(1073742336,i.fb,i.fb,[]),e.Ob(1073742336,i.Hb,i.Hb,[]),e.Ob(1073742336,i.ub,i.ub,[]),e.Ob(1073742336,w.c,w.c,[]),e.Ob(1073742336,w.f,w.f,[]),e.Ob(1073742336,w.h,w.h,[]),e.Ob(1073742336,w.k,w.k,[]),e.Ob(1073742336,w.m,w.m,[]),e.Ob(1073742336,w.o,w.o,[]),e.Ob(1073742336,w.q,w.q,[]),e.Ob(1073742336,w.s,w.s,[]),e.Ob(1073742336,w.u,w.u,[]),e.Ob(1073742336,w.w,w.w,[]),e.Ob(1073742336,w.a,w.a,[]),e.Ob(1073742336,w.x,w.x,[]),e.Ob(1073742336,i.Y,i.Y,[]),e.Ob(1073742336,Y.b,Y.b,[]),e.Ob(1073742336,I.a,I.a,[]),e.Ob(1073742336,P,P,[]),e.Ob(1073742336,o,o,[]),e.Ob(256,v.q,"XSRF-TOKEN",[]),e.Ob(256,v.r,"X-XSRF-TOKEN",[]),e.Ob(256,i.je,{contexts:{general:{en:{loginErrorPattern:"Invalid ID",loginPlaceholder:"Insert your ID",passwordErrorPattern:"Invalid PIN",passwordPlaceholder:"Insert your PIN",submitLabel:"Access your account",forgotPassword:"Forgot your ID or PIN?",highlightInfo:"For us the future is now"},es:{loginErrorPattern:"ID invalido",loginPlaceholder:"Inserte su ID",passwordErrorPattern:"Contrase\xf1a incorrecta",passwordPlaceholder:"Inserte su contrase\xf1a",submitLabel:"Accede a su cuenta",forgotPassword:"\xbfOlvid\xf3 su ID o contrase\xf1a?",highlightInfo:"Para nosotros el futuro es ahora"},pt:{loginErrorPattern:"ID inv\xe1lido",loginPlaceholder:"Insira seu ID",passwordErrorPattern:"Senha incorreta",passwordPlaceholder:"Insira sua senha",submitLabel:"Acesse a sua conta",forgotPassword:"Esqueceu seu ID ou sua senha?",highlightInfo:"Para n\xf3s o futuro \xe9 agora"}}},default:{context:"general",cache:!0}},[]),e.Ob(1024,s.k,function(){return[[{path:"",component:O}]]},[])])})}}]);