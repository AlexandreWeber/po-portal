(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{OO4K:function(l,n,e){"use strict";e.r(n);var u=e("8Y7J");class o{}var t=e("pMnS"),b=e("c/cy"),a=e("nMSU"),i=e("8xxD"),s=e("iInd"),r=e("bpOf");class c{}var d=u.Eb({encapsulation:2,styles:[],data:{}});function p(l){return u.ac(0,[(l()(),u.Gb(0,0,[["thfDocs",1]],null,61,"div",[["class","docs-api"]],null,null,null,null,null)),(l()(),u.Gb(1,0,null,null,2,"p",[["class","docs-api-module-import"]],null,null,null,null,null)),(l()(),u.Gb(2,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.Yb(-1,null,["import { PoSlideModule } from '@portinari/portinari-ui';"])),(l()(),u.Gb(4,0,null,null,19,"div",[["class","docs-api-class-description"]],null,null,null,null,null)),(l()(),u.Gb(5,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),u.Yb(-1,null,["M\xf3dulo do componente "])),(l()(),u.Gb(7,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.Yb(-1,null,["po-slide"])),(l()(),u.Yb(-1,null,["."])),(l()(),u.Gb(10,0,null,null,8,"blockquote",[],null,null,null,null,null)),(l()(),u.Gb(11,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),u.Yb(-1,null,["Para o correto funcionamento do componente "])),(l()(),u.Gb(13,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.Yb(-1,null,["po-slide"])),(l()(),u.Yb(-1,null,[", deve ser importado o m\xf3dulo "])),(l()(),u.Gb(16,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.Yb(-1,null,["BrowserAnimationsModule"])),(l()(),u.Yb(-1,null,[" no\nm\xf3dulo principal da sua aplica\xe7\xe3o."])),(l()(),u.Gb(19,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.Yb(-1,null,["M\xf3dulo da aplica\xe7\xe3o:"])),(l()(),u.Gb(21,0,null,null,2,"pre",[],null,null,null,null,null)),(l()(),u.Gb(22,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.Yb(-1,null,["import { BrowserAnimationsModule } from '@angular/platform-browser/animations';\nimport { PoModule } from '@portinari/portinari-ui';\n...\n\n@NgModule({\n  imports: [\n    BrowserModule,\n    BrowserAnimationsModule,\n    ...\n    PoModule\n  ],\n  declarations: [\n    AppComponent,\n    ...\n  ],\n  providers: [],\n  bootstrap: [AppComponent]\n})\nexport class AppModule { }\n"])),(l()(),u.Gb(24,0,null,null,1,"h3",[["class","docs-api-h3"]],null,null,null,null,null)),(l()(),u.Yb(-1,null,["Componente"])),(l()(),u.Gb(26,0,null,null,2,"h4",[["class","docs-api-class-name"]],null,null,null,null,null)),(l()(),u.Gb(27,0,null,null,1,"code",[["class","doc-code"]],null,null,null,null,null)),(l()(),u.Yb(-1,null,["PoSlideContentTemplateDirective"])),(l()(),u.Gb(29,0,null,null,26,"div",[["class","docs-api-class-description"]],null,null,null,null,null)),(l()(),u.Gb(30,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.Yb(-1,null,["Esta diretiva permite a customiza\xe7\xe3o de um slide."])),(l()(),u.Gb(32,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.Yb(-1,null,["Deve-se utilizar como par\xe2metro a refer\xeancia do item e/ou \xedndice, sendo por padr\xe3o o item."])),(l()(),u.Gb(34,0,null,null,10,"ul",[],null,null,null,null,null)),(l()(),u.Gb(35,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),u.Yb(-1,null,["Item: "])),(l()(),u.Gb(37,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.Yb(-1,null,["item"])),(l()(),u.Yb(-1,null,[" determina o item do slide corrente."])),(l()(),u.Gb(40,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),u.Yb(-1,null,["\xcdndice: "])),(l()(),u.Gb(42,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.Yb(-1,null,["index"])),(l()(),u.Yb(-1,null,[" determina o \xedndice do slide corrente."])),(l()(),u.Gb(45,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),u.Yb(-1,null,["Esta diretiva pode ser usada de duas formas: expl\xedcita ou "])),(l()(),u.Gb(47,0,null,null,1,"em",[],null,null,null,null,null)),(l()(),u.Yb(-1,null,["syntax sugar"])),(l()(),u.Yb(-1,null,[". Veja a seguir ambos, respectivamente:"])),(l()(),u.Gb(50,0,null,null,2,"pre",[],null,null,null,null,null)),(l()(),u.Gb(51,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.Yb(-1,null,['...\n<po-slide\n  [p-slides]="[{ id: 1, name: \'Register\', email: \'register@portinari.com\' }]">\n\n  <ng-template p-slide-content-template let-item let-code="index">\n    <div class="po-row">\n      <po-info class="po-md-6" p-label="Code" [p-value]="item.id"></po-info>\n      <po-info class="po-md-6" p-label="Email" [p-value]="item.email"></po-info>\n    </div>\n  </ng-template>\n\n</po-slide>\n\n...\n'])),(l()(),u.Gb(53,0,null,null,2,"pre",[],null,null,null,null,null)),(l()(),u.Gb(54,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.Yb(-1,null,['...\n<po-slide\n   [p-slides]="[{ id: 1, name: \'Register\', email: \'register@portinari.com\' }]">\n\n   <div *p-slide-content-template="let item, let i=index" class="po-row">\n     <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>\n   </div>\n</po-slide>\n...\n'])),(l()(),u.Gb(56,0,null,null,5,"div",[["class","docs-api-directive-selectors"]],null,null,null,null,null)),(l()(),u.Gb(57,0,null,null,1,"h4",[["class","docs-api-class-selector-label"]],null,null,null,null,null)),(l()(),u.Yb(-1,null,["Seletor"])),(l()(),u.Gb(59,0,null,null,2,"pre",[["appCodeHighlight",""]],null,null,null,null,null)),u.Fb(60,4210688,null,0,r.a,[u.q],null,null),(l()(),u.Yb(-1,null,["<[p-slide-content-template] >\n</[p-slide-content-template]>\n"]))],null,null)}u.Cb("sample-po-slide-content-template-doc",c,function(l){return u.ac(0,[(l()(),u.Gb(0,0,null,null,1,"sample-po-slide-content-template-doc",[],null,null,null,p,d)),u.Fb(1,49152,null,0,c,[],null,null)],null,null)},{},{},[]);class m{constructor(l,n){this.route=l,this.router=n,this.hideThfWebSample=!0,this.samplesLength=0,this.activeTab="\x1cdoc",this.actions=[{label:"Documenta\xe7\xe3o",action:this.goBack,icon:"po-icon-document-filled"},{label:"Colabore",action:this.improveDocs}]}goBack(){this.router.navigate(["documentation"])}improveDocs(){window.open("https://github.com/portinariui/portinari-angular/tree/master/projects/ui/src/lib/components/po-slide/directives/po-slide-content-template.directive.ts","_blank")}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{const n=l.view;this.activeTab=n||"doc",this.hideThfWebSample=0===this.samplesLength})}ngOnDestroy(){this.sub.unsubscribe()}}var O=u.Eb({encapsulation:2,styles:[],data:{}});function h(l){return u.ac(0,[(l()(),u.Gb(0,16777216,null,null,10,"po-page-default",[["p-title"," Slide Content Template"]],null,null,null,b.Jb,b.G)),u.Fb(1,1622016,null,0,i.yb,[u.eb,u.Q,s.m],{actions:[0,"actions"],title:[1,"title"]},null),(l()(),u.Gb(2,0,null,0,8,"po-tabs",[["p-size","1"]],null,null,null,b.ac,b.X)),u.Fb(3,49152,null,1,i.ec,[u.j],null,null),u.Wb(603979776,1,{tabs:1}),(l()(),u.Gb(5,0,null,0,3,"po-tab",[["p-label","Documenta\xe7\xe3o"]],null,null,null,b.Yb,b.V)),u.Fb(6,1097728,[[1,4]],0,i.Zb,[u.q],{active:[0,"active"],label:[1,"label"]},null),(l()(),u.Gb(7,0,null,0,1,"sample-po-slide-content-template-doc",[],null,null,null,p,d)),u.Fb(8,49152,null,0,c,[],null,null),(l()(),u.Gb(9,0,null,0,1,"po-tab",[["p-label","Exemplos"]],null,null,null,b.Yb,b.V)),u.Fb(10,1097728,[[1,4]],0,i.Zb,[u.q],{active:[0,"active"],hide:[1,"hide"],label:[2,"label"]},null)],function(l,n){var e=n.component;l(n,1,0,e.actions," Slide Content Template");l(n,6,0,e.activeTab.includes("doc"),"Documenta\xe7\xe3o");l(n,10,0,e.activeTab.includes("web"),e.hideThfWebSample,"Exemplos")},null)}var g=u.Cb("ng-component",m,function(l){return u.ac(0,[(l()(),u.Gb(0,0,null,null,1,"ng-component",[],null,null,null,h,O)),u.Fb(1,245760,null,0,m,[s.a,s.m],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),f=e("SVse"),v=e("IheW"),w=e("s7LF"),G=e("XiHK"),I=e("YoMC"),Y=e("PCNd");class P{}e.d(n,"DocPoSlideContentTemplateModuleNgFactory",function(){return D});var D=u.Db(o,[],function(l){return u.Nb([u.Ob(512,u.m,u.pb,[[8,[t.a,b.oc,b.hc,b.ic,b.kc,b.jc,b.lc,b.mc,b.a,b.nc,a.a,g]],[3,u.m],u.I]),u.Ob(4608,f.q,f.p,[u.E,[2,f.E]]),u.Ob(4608,v.m,v.s,[f.e,u.N,v.q]),u.Ob(4608,v.t,v.t,[v.m,v.r]),u.Ob(4608,i.r,i.r,[u.m,u.g,u.A]),u.Ob(4608,i.wb,i.wb,[i.r]),u.Ob(4608,i.z,i.z,[i.r]),u.Ob(4608,i.ce,i.ce,[]),u.Ob(5120,v.a,function(l,n,e,u,o){return[l,new i.S(n,e),new i.T(u,o)]},[v.t,i.wb,i.z,i.ce,i.r]),u.Ob(4608,v.p,v.p,[]),u.Ob(6144,v.n,null,[v.p]),u.Ob(4608,v.l,v.l,[v.n]),u.Ob(6144,v.b,null,[v.l]),u.Ob(4608,v.g,v.o,[v.b,u.A]),u.Ob(4608,v.c,v.c,[v.g]),u.Ob(4608,w.s,w.s,[]),u.Ob(4608,w.d,w.d,[]),u.Ob(4608,i.ee,i.ee,[]),u.Ob(4608,i.ie,i.ie,[]),u.Ob(4608,i.je,i.je,[]),u.Ob(4608,i.Ac,i.Ac,[]),u.Ob(4608,i.Cc,i.Cc,[]),u.Ob(4608,i.he,i.he,[]),u.Ob(4608,i.ke,i.ke,[]),u.Ob(4608,f.g,f.g,[u.E]),u.Ob(4608,f.d,f.d,[u.E]),u.Ob(4608,f.f,f.f,[u.E]),u.Ob(4608,i.mc,i.mc,[]),u.Ob(4608,f.x,f.x,[]),u.Ob(4608,i.xd,i.xd,[]),u.Ob(4608,i.S,i.S,[i.wb,i.z]),u.Ob(4608,i.T,i.T,[i.ce,i.r]),u.Ob(4608,i.W,i.W,[]),u.Ob(4608,G.y,G.y,[v.c]),u.Ob(4608,G.C,G.C,[v.c]),u.Ob(4608,G.H,G.H,[v.c]),u.Ob(4608,G.I,G.I,[G.H]),u.Ob(4608,G.M,G.M,[v.c]),u.Ob(4352,I.c,{language:"terraform",options:{keywords:["resource","provider","variable","output","module","true","false"],operators:["{","}","(",")","[","]","?",":"],tokenizer:{root:[["[a-z_$][\\w$]*",{cases:{"@keywords":"keyword","@default":"identifier"}}],{include:"@whitespace"},["\\d*\\.\\d+([eE][\\-+]?\\d+)?","number.float"],["0[x][0-9a-fA-F]+","number.hex"],["\\d+","number"],["[;,.]","delimiter"],['"([^"\\\\]|\\\\.)*$',"string.invalid"],['"',{token:"string.quote",bracket:"@open",next:"@string"}],["'[^\\\\']'","string"],["'","string.invalid"]],comment:[["[^\\/*]+","comment"],["[\\/*]","comment"],["[\\#.*]","comment"]],string:[['[^\\\\"\\$]+',"string"],["\\$","string.interpolated","@interpolated"],["\\\\.","string.escape.invalid"],['"',{token:"string.quote",bracket:"@close",next:"@pop"}]],whitespace:[["[ \\t\\r\\n]+","white"],["\\/\\/.*$","comment"],["\\#.*$","comment"]],interpolated:[["[{]",{token:"string.escape.curly",switchTo:"@interpolated_compound"}],["","","@pop"]]}}},[]),u.Ob(5120,u.d,function(l,n){return[i.xc(l,n)]},[i.de,i.ee]),u.Ob(5120,i.X,i.yc,[i.de,v.c,i.ee]),u.Ob(1073742336,f.c,f.c,[]),u.Ob(1073742336,v.e,v.e,[]),u.Ob(1073742336,v.d,v.d,[]),u.Ob(1073742336,w.r,w.r,[]),u.Ob(1073742336,w.g,w.g,[]),u.Ob(1073742336,w.p,w.p,[]),u.Ob(1073742336,i.b,i.b,[]),u.Ob(1073742336,s.p,s.p,[[2,s.u],[2,s.m]]),u.Ob(1073742336,i.d,i.d,[]),u.Ob(1073742336,i.be,i.be,[]),u.Ob(1073742336,i.hb,i.hb,[]),u.Ob(1073742336,i.i,i.i,[]),u.Ob(1073742336,i.sc,i.sc,[]),u.Ob(1073742336,i.g,i.g,[]),u.Ob(1073742336,i.k,i.k,[]),u.Ob(1073742336,i.m,i.m,[]),u.Ob(1073742336,i.u,i.u,[]),u.Ob(1073742336,i.D,i.D,[]),u.Ob(1073742336,i.C,i.C,[]),u.Ob(1073742336,i.F,i.F,[]),u.Ob(1073742336,i.Ib,i.Ib,[]),u.Ob(1073742336,i.H,i.H,[]),u.Ob(1073742336,i.Z,i.Z,[]),u.Ob(1073742336,i.qb,i.qb,[]),u.Ob(1073742336,i.Bc,i.Bc,[]),u.Ob(1073742336,i.q,i.q,[]),u.Ob(1073742336,i.Dc,i.Dc,[]),u.Ob(1073742336,i.Ec,i.Ec,[]),u.Ob(1073742336,i.y,i.y,[]),u.Ob(1073742336,i.vb,i.vb,[]),u.Ob(1073742336,i.Qb,i.Qb,[]),u.Ob(1073742336,i.lc,i.lc,[]),u.Ob(1073742336,i.cc,i.cc,[]),u.Ob(1073742336,i.N,i.N,[]),u.Ob(1073742336,i.hc,i.hc,[]),u.Ob(1073742336,i.K,i.K,[]),u.Ob(1073742336,i.P,i.P,[]),u.Ob(1073742336,i.gb,i.gb,[]),u.Ob(1073742336,i.pd,i.pd,[]),u.Ob(1073742336,i.mb,i.mb,[]),u.Ob(1073742336,i.ob,i.ob,[]),u.Ob(1073742336,i.zd,i.zd,[]),u.Ob(1073742336,i.Dd,i.Dd,[]),u.Ob(1073742336,i.Gd,i.Gd,[]),u.Ob(1073742336,i.ub,i.ub,[]),u.Ob(1073742336,i.Cb,i.Cb,[]),u.Ob(1073742336,i.Gb,i.Gb,[]),u.Ob(1073742336,i.Kb,i.Kb,[]),u.Ob(1073742336,i.Sb,i.Sb,[]),u.Ob(1073742336,i.Vb,i.Vb,[]),u.Ob(1073742336,i.fc,i.fc,[]),u.Ob(1073742336,i.qc,i.qc,[]),u.Ob(1073742336,i.wc,i.wc,[]),u.Ob(1073742336,i.s,i.s,[]),u.Ob(1073742336,i.A,i.A,[]),u.Ob(1073742336,i.Q,i.Q,[]),u.Ob(1073742336,i.R,i.R,[]),u.Ob(1073742336,i.U,i.U,[]),u.Ob(1073742336,i.cb,i.cb,[]),u.Ob(1073742336,i.Eb,i.Eb,[]),u.Ob(1073742336,i.rb,i.rb,[]),u.Ob(1073742336,G.c,G.c,[]),u.Ob(1073742336,G.f,G.f,[]),u.Ob(1073742336,G.h,G.h,[]),u.Ob(1073742336,G.k,G.k,[]),u.Ob(1073742336,G.m,G.m,[]),u.Ob(1073742336,G.o,G.o,[]),u.Ob(1073742336,G.q,G.q,[]),u.Ob(1073742336,G.s,G.s,[]),u.Ob(1073742336,G.u,G.u,[]),u.Ob(1073742336,G.w,G.w,[]),u.Ob(1073742336,G.a,G.a,[]),u.Ob(1073742336,G.x,G.x,[]),u.Ob(1073742336,i.V,i.V,[]),u.Ob(1073742336,I.b,I.b,[]),u.Ob(1073742336,Y.a,Y.a,[]),u.Ob(1073742336,P,P,[]),u.Ob(1073742336,o,o,[]),u.Ob(256,v.q,"XSRF-TOKEN",[]),u.Ob(256,v.r,"X-XSRF-TOKEN",[]),u.Ob(256,i.de,{contexts:{general:{en:{loginErrorPattern:"Invalid ID",loginPlaceholder:"Insert your ID",passwordErrorPattern:"Invalid PIN",passwordPlaceholder:"Insert your PIN",submitLabel:"Access your account",forgotPassword:"Forgot your ID or PIN?",highlightInfo:"For us the future is now"},es:{loginErrorPattern:"ID invalido",loginPlaceholder:"Inserte su ID",passwordErrorPattern:"Contrase\xf1a incorrecta",passwordPlaceholder:"Inserte su contrase\xf1a",submitLabel:"Accede a su cuenta",forgotPassword:"\xbfOlvid\xf3 su ID o contrase\xf1a?",highlightInfo:"Para nosotros el futuro es ahora"},pt:{loginErrorPattern:"ID inv\xe1lido",loginPlaceholder:"Insira seu ID",passwordErrorPattern:"Senha incorreta",passwordPlaceholder:"Insira sua senha",submitLabel:"Acesse a sua conta",forgotPassword:"Esqueceu seu ID ou sua senha?",highlightInfo:"Para n\xf3s o futuro \xe9 agora"}}},default:{context:"general",cache:!0}},[]),u.Ob(1024,s.k,function(){return[[{path:"",component:m}]]},[])])})}}]);