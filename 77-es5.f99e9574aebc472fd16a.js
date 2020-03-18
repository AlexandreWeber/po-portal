(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{OO4K:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),o=function(){return function(){}}(),t=u("pMnS"),a=u("c/cy"),c=u("nMSU"),b=u("Lmtn"),i=u("ZYCi"),r=u("bpOf"),s=function(){return function(){}}(),d=e.Gb({encapsulation:2,styles:[],data:{}});function p(l){return e.cc(0,[(l()(),e.Ib(0,0,[["thfDocs",1]],null,61,"div",[["class","docs-api"]],null,null,null,null,null)),(l()(),e.Ib(1,0,null,null,2,"p",[["class","docs-api-module-import"]],null,null,null,null,null)),(l()(),e.Ib(2,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["import { PoSlideModule } from '@po/po-ui';"])),(l()(),e.Ib(4,0,null,null,19,"div",[["class","docs-api-class-description"]],null,null,null,null,null)),(l()(),e.Ib(5,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["M\xf3dulo do componente "])),(l()(),e.Ib(7,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["po-slide"])),(l()(),e.ac(-1,null,["."])),(l()(),e.Ib(10,0,null,null,8,"blockquote",[],null,null,null,null,null)),(l()(),e.Ib(11,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["Para o correto funcionamento do componente "])),(l()(),e.Ib(13,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["po-slide"])),(l()(),e.ac(-1,null,[", deve ser importado o m\xf3dulo "])),(l()(),e.Ib(16,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["BrowserAnimationsModule"])),(l()(),e.ac(-1,null,[" no\nm\xf3dulo principal da sua aplica\xe7\xe3o."])),(l()(),e.Ib(19,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["M\xf3dulo da aplica\xe7\xe3o:"])),(l()(),e.Ib(21,0,null,null,2,"pre",[],null,null,null,null,null)),(l()(),e.Ib(22,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["import { BrowserAnimationsModule } from '@angular/platform-browser/animations';\nimport { PoModule } from '@po/po-ui';\n...\n\n@NgModule({\n  imports: [\n    BrowserModule,\n    BrowserAnimationsModule,\n    ...\n    PoModule\n  ],\n  declarations: [\n    AppComponent,\n    ...\n  ],\n  providers: [],\n  bootstrap: [AppComponent]\n})\nexport class AppModule { }\n"])),(l()(),e.Ib(24,0,null,null,1,"h3",[["class","docs-api-h3"]],null,null,null,null,null)),(l()(),e.ac(-1,null,["Componente"])),(l()(),e.Ib(26,0,null,null,2,"h4",[["class","docs-api-class-name"]],null,null,null,null,null)),(l()(),e.Ib(27,0,null,null,1,"code",[["class","doc-code"]],null,null,null,null,null)),(l()(),e.ac(-1,null,["PoSlideContentTemplateDirective"])),(l()(),e.Ib(29,0,null,null,26,"div",[["class","docs-api-class-description"]],null,null,null,null,null)),(l()(),e.Ib(30,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["Esta diretiva permite a customiza\xe7\xe3o de um slide."])),(l()(),e.Ib(32,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["Deve-se utilizar como par\xe2metro a refer\xeancia do item e/ou \xedndice, sendo por padr\xe3o o item."])),(l()(),e.Ib(34,0,null,null,10,"ul",[],null,null,null,null,null)),(l()(),e.Ib(35,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["Item: "])),(l()(),e.Ib(37,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["item"])),(l()(),e.ac(-1,null,[" determina o item do slide corrente."])),(l()(),e.Ib(40,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["\xcdndice: "])),(l()(),e.Ib(42,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["index"])),(l()(),e.ac(-1,null,[" determina o \xedndice do slide corrente."])),(l()(),e.Ib(45,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["Esta diretiva pode ser usada de duas formas: expl\xedcita ou "])),(l()(),e.Ib(47,0,null,null,1,"em",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["syntax sugar"])),(l()(),e.ac(-1,null,[". Veja a seguir ambos, respectivamente:"])),(l()(),e.Ib(50,0,null,null,2,"pre",[],null,null,null,null,null)),(l()(),e.Ib(51,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.ac(-1,null,['...\n<po-slide\n  [p-slides]="[{ id: 1, name: \'Register\', email: \'register@po.com\' }]">\n\n  <ng-template p-slide-content-template let-item let-code="index">\n    <div class="po-row">\n      <po-info class="po-md-6" p-label="Code" [p-value]="item.id"></po-info>\n      <po-info class="po-md-6" p-label="Email" [p-value]="item.email"></po-info>\n    </div>\n  </ng-template>\n\n</po-slide>\n\n...\n'])),(l()(),e.Ib(53,0,null,null,2,"pre",[],null,null,null,null,null)),(l()(),e.Ib(54,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.ac(-1,null,['...\n<po-slide\n   [p-slides]="[{ id: 1, name: \'Register\', email: \'register@po.com\' }]">\n\n   <div *p-slide-content-template="let item, let i=index" class="po-row">\n     <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>\n   </div>\n</po-slide>\n...\n'])),(l()(),e.Ib(56,0,null,null,5,"div",[["class","docs-api-directive-selectors"]],null,null,null,null,null)),(l()(),e.Ib(57,0,null,null,1,"h4",[["class","docs-api-class-selector-label"]],null,null,null,null,null)),(l()(),e.ac(-1,null,["Seletor"])),(l()(),e.Ib(59,0,null,null,2,"pre",[["appCodeHighlight",""]],null,null,null,null,null)),e.Hb(60,4210688,null,0,r.a,[e.q],null,null),(l()(),e.ac(-1,null,["<[p-slide-content-template] >\n</[p-slide-content-template]>\n"]))],null,null)}e.Eb("sample-po-slide-content-template-doc",s,function(l){return e.cc(0,[(l()(),e.Ib(0,0,null,null,1,"sample-po-slide-content-template-doc",[],null,null,null,p,d)),e.Hb(1,49152,null,0,s,[],null,null)],null,null)},{},{},[]);var Q=function(){function l(l,n){this.route=l,this.router=n,this.hideThfWebSample=!0,this.samplesLength=0,this.activeTab="\x1cdoc",this.actions=[{label:"Documenta\xe7\xe3o",action:this.goBack,icon:"po-icon-document-filled"},{label:"Colabore",action:this.improveDocs}]}return l.prototype.goBack=function(){this.router.navigate(["documentation"])},l.prototype.improveDocs=function(){window.open("https://github.com/po-ui/po-angular/tree/master/projects/ui/src/lib/components/po-slide/directives/po-slide-content-template.directive.ts","_blank")},l.prototype.ngOnInit=function(){var l=this;this.sub=this.route.queryParams.subscribe(function(n){var u=n.view;l.activeTab=u||"doc",l.hideThfWebSample=0===l.samplesLength})},l.prototype.ngOnDestroy=function(){this.sub.unsubscribe()},l}(),m=e.Gb({encapsulation:2,styles:[],data:{}});function I(l){return e.cc(0,[(l()(),e.Ib(0,16777216,null,null,10,"po-page-default",[["p-title"," Slide Content Template"]],null,null,null,a.Qb,a.J)),e.Hb(1,1622016,null,0,b.Fb,[e.gb,e.R,i.m],{actions:[0,"actions"],title:[1,"title"]},null),(l()(),e.Ib(2,0,null,0,8,"po-tabs",[["p-size","1"]],null,null,null,a.hc,a.ab)),e.Hb(3,49152,null,1,b.lc,[e.j],null,null),e.Yb(603979776,1,{tabs:1}),(l()(),e.Ib(5,0,null,0,3,"po-tab",[["p-label","Documenta\xe7\xe3o"]],null,null,null,a.fc,a.Y)),e.Hb(6,1097728,[[1,4]],0,b.gc,[e.q],{active:[0,"active"],label:[1,"label"]},null),(l()(),e.Ib(7,0,null,0,1,"sample-po-slide-content-template-doc",[],null,null,null,p,d)),e.Hb(8,49152,null,0,s,[],null,null),(l()(),e.Ib(9,0,null,0,1,"po-tab",[["p-label","Exemplos"]],null,null,null,a.fc,a.Y)),e.Hb(10,1097728,[[1,4]],0,b.gc,[e.q],{active:[0,"active"],hide:[1,"hide"],label:[2,"label"]},null)],function(l,n){var u=n.component;l(n,1,0,u.actions," Slide Content Template");l(n,6,0,u.activeTab.includes("doc"),"Documenta\xe7\xe3o");l(n,10,0,u.activeTab.includes("web"),u.hideThfWebSample,"Exemplos")},null)}var g=e.Eb("ng-component",Q,function(l){return e.cc(0,[(l()(),e.Ib(0,0,null,null,1,"ng-component",[],null,null,null,I,m)),e.Hb(1,245760,null,0,Q,[i.a,i.m],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),f=u("Ip0R"),h=u("t/Na"),v=u("gIcY"),w=u("oVQh"),P=u("aVyw"),D=u("PCNd"),y=function(){return function(){}}();u.d(n,"DocPoSlideContentTemplateModuleNgFactory",function(){return E});var E=e.Fb(o,[],function(l){return e.Pb([e.Qb(512,e.m,e.rb,[[8,[t.a,a.Bc,a.pc,a.qc,a.rc,a.sc,a.tc,a.vc,a.uc,a.wc,a.xc,a.yc,a.zc,a.a,a.Ac,c.a,g]],[3,e.m],e.I]),e.Qb(4608,f.q,f.p,[e.E,[2,f.H]]),e.Qb(4608,h.l,h.r,[f.e,e.N,h.p]),e.Qb(4608,h.s,h.s,[h.l,h.q]),e.Qb(4608,b.v,b.v,[e.m,e.g,e.A]),e.Qb(4608,b.Db,b.Db,[b.v]),e.Qb(4608,b.De,b.De,[]),e.Qb(5120,h.a,function(l,n,u,e,o){return[l,new b.X(n,u),new b.Y(e,o)]},[h.s,b.Db,b.v,b.De,b.v]),e.Qb(4608,h.o,h.o,[]),e.Qb(6144,h.m,null,[h.o]),e.Qb(4608,h.k,h.k,[h.m]),e.Qb(6144,h.b,null,[h.k]),e.Qb(4608,h.g,h.n,[h.b,e.A]),e.Qb(4608,h.c,h.c,[h.g]),e.Qb(4608,v.s,v.s,[]),e.Qb(4608,v.d,v.d,[]),e.Qb(4608,b.jb,b.jb,[]),e.Qb(4608,b.Le,b.Le,[]),e.Qb(4608,b.Me,b.Me,[]),e.Qb(4608,b.Tc,b.Tc,[]),e.Qb(4608,b.Xc,b.Xc,[]),e.Qb(4608,b.Ke,b.Ke,[]),e.Qb(4608,b.Ne,b.Ne,[]),e.Qb(4608,b.E,b.E,[b.v]),e.Qb(4608,f.g,f.g,[e.E]),e.Qb(4608,f.d,f.d,[e.E]),e.Qb(4608,f.f,f.f,[e.E]),e.Qb(4608,b.tc,b.tc,[]),e.Qb(4608,f.y,f.y,[]),e.Qb(4608,b.Hd,b.Hd,[h.c]),e.Qb(4608,b.Id,b.Id,[h.c]),e.Qb(4608,b.Kd,b.Kd,[h.c]),e.Qb(4608,b.Vd,b.Vd,[]),e.Qb(4608,b.X,b.X,[b.Db,b.v]),e.Qb(4608,b.Y,b.Y,[b.De,b.v]),e.Qb(4608,b.bb,b.bb,[]),e.Qb(4608,w.D,w.D,[h.c]),e.Qb(4608,w.H,w.H,[h.c]),e.Qb(4608,w.u,w.u,[h.c]),e.Qb(4608,w.m,w.m,[h.c]),e.Qb(4608,w.J,w.J,[h.c]),e.Qb(4608,w.K,w.K,[w.J]),e.Qb(4608,w.O,w.O,[h.c]),e.Qb(4352,P.c,{language:"terraform",options:{keywords:["resource","provider","variable","output","module","true","false"],operators:["{","}","(",")","[","]","?",":"],tokenizer:{root:[["[a-z_$][\\w$]*",{cases:{"@keywords":"keyword","@default":"identifier"}}],{include:"@whitespace"},["\\d*\\.\\d+([eE][\\-+]?\\d+)?","number.float"],["0[x][0-9a-fA-F]+","number.hex"],["\\d+","number"],["[;,.]","delimiter"],['"([^"\\\\]|\\\\.)*$',"string.invalid"],['"',{token:"string.quote",bracket:"@open",next:"@string"}],["'[^\\\\']'","string"],["'","string.invalid"]],comment:[["[^\\/*]+","comment"],["[\\/*]","comment"],["[\\#.*]","comment"]],string:[['[^\\\\"\\$]+',"string"],["\\$","string.interpolated","@interpolated"],["\\\\.","string.escape.invalid"],['"',{token:"string.quote",bracket:"@close",next:"@pop"}]],whitespace:[["[ \\t\\r\\n]+","white"],["\\/\\/.*$","comment"],["\\#.*$","comment"]],interpolated:[["[{]",{token:"string.escape.curly",switchTo:"@interpolated_compound"}],["","","@pop"]]}}},[]),e.Qb(5120,e.d,function(l,n){return[b.Gc(l,n)]},[b.Ee,b.jb]),e.Qb(5120,b.cb,b.Hc,[b.Ee,h.c,b.jb]),e.Qb(1073742336,f.c,f.c,[]),e.Qb(1073742336,h.e,h.e,[]),e.Qb(1073742336,h.d,h.d,[]),e.Qb(1073742336,v.r,v.r,[]),e.Qb(1073742336,v.g,v.g,[]),e.Qb(1073742336,v.p,v.p,[]),e.Qb(1073742336,b.c,b.c,[]),e.Qb(1073742336,b.e,b.e,[]),e.Qb(1073742336,i.p,i.p,[[2,i.u],[2,i.m]]),e.Qb(1073742336,b.g,b.g,[]),e.Qb(1073742336,b.ib,b.ib,[]),e.Qb(1073742336,b.ob,b.ob,[]),e.Qb(1073742336,b.l,b.l,[]),e.Qb(1073742336,b.zc,b.zc,[]),e.Qb(1073742336,b.j,b.j,[]),e.Qb(1073742336,b.n,b.n,[]),e.Qb(1073742336,b.p,b.p,[]),e.Qb(1073742336,b.y,b.y,[]),e.Qb(1073742336,b.I,b.I,[]),e.Qb(1073742336,b.H,b.H,[]),e.Qb(1073742336,b.K,b.K,[]),e.Qb(1073742336,b.Pb,b.Pb,[]),e.Qb(1073742336,b.M,b.M,[]),e.Qb(1073742336,b.eb,b.eb,[]),e.Qb(1073742336,b.Qc,b.Qc,[]),e.Qb(1073742336,b.Pc,b.Pc,[]),e.Qb(1073742336,b.xb,b.xb,[]),e.Qb(1073742336,b.Rb,b.Rb,[]),e.Qb(1073742336,b.Wc,b.Wc,[]),e.Qb(1073742336,b.u,b.u,[]),e.Qb(1073742336,b.Yc,b.Yc,[]),e.Qb(1073742336,b.Zc,b.Zc,[]),e.Qb(1073742336,b.D,b.D,[]),e.Qb(1073742336,b.Cb,b.Cb,[]),e.Qb(1073742336,b.Xb,b.Xb,[]),e.Qb(1073742336,b.Nb,b.Nb,[]),e.Qb(1073742336,b.sc,b.sc,[]),e.Qb(1073742336,b.jc,b.jc,[]),e.Qb(1073742336,b.S,b.S,[]),e.Qb(1073742336,b.oc,b.oc,[]),e.Qb(1073742336,b.P,b.P,[]),e.Qb(1073742336,b.U,b.U,[]),e.Qb(1073742336,b.nb,b.nb,[]),e.Qb(1073742336,b.Od,b.Od,[]),e.Qb(1073742336,b.tb,b.tb,[]),e.Qb(1073742336,b.vb,b.vb,[]),e.Qb(1073742336,b.Xd,b.Xd,[]),e.Qb(1073742336,b.be,b.be,[]),e.Qb(1073742336,b.ee,b.ee,[]),e.Qb(1073742336,b.Bb,b.Bb,[]),e.Qb(1073742336,b.Jb,b.Jb,[]),e.Qb(1073742336,b.Zb,b.Zb,[]),e.Qb(1073742336,b.cc,b.cc,[]),e.Qb(1073742336,b.mc,b.mc,[]),e.Qb(1073742336,b.xc,b.xc,[]),e.Qb(1073742336,b.Bc,b.Bc,[]),e.Qb(1073742336,b.Fc,b.Fc,[]),e.Qb(1073742336,b.w,b.w,[]),e.Qb(1073742336,b.F,b.F,[]),e.Qb(1073742336,b.V,b.V,[]),e.Qb(1073742336,b.W,b.W,[]),e.Qb(1073742336,b.Z,b.Z,[]),e.Qb(1073742336,b.hb,b.hb,[]),e.Qb(1073742336,b.Lb,b.Lb,[]),e.Qb(1073742336,b.yb,b.yb,[]),e.Qb(1073742336,w.c,w.c,[]),e.Qb(1073742336,w.f,w.f,[]),e.Qb(1073742336,w.h,w.h,[]),e.Qb(1073742336,w.k,w.k,[]),e.Qb(1073742336,w.r,w.r,[]),e.Qb(1073742336,w.o,w.o,[]),e.Qb(1073742336,w.q,w.q,[]),e.Qb(1073742336,w.l,w.l,[]),e.Qb(1073742336,w.t,w.t,[]),e.Qb(1073742336,w.w,w.w,[]),e.Qb(1073742336,w.y,w.y,[]),e.Qb(1073742336,w.A,w.A,[]),e.Qb(1073742336,w.a,w.a,[]),e.Qb(1073742336,w.B,w.B,[]),e.Qb(1073742336,w.C,w.C,[]),e.Qb(1073742336,b.ab,b.ab,[]),e.Qb(1073742336,P.b,P.b,[]),e.Qb(1073742336,D.a,D.a,[]),e.Qb(1073742336,y,y,[]),e.Qb(1073742336,o,o,[]),e.Qb(256,h.p,"XSRF-TOKEN",[]),e.Qb(256,h.q,"X-XSRF-TOKEN",[]),e.Qb(256,b.Ee,{contexts:{general:{en:{loginErrorPattern:"Invalid ID",loginPlaceholder:"Insert your ID",passwordErrorPattern:"Invalid PIN",passwordPlaceholder:"Insert your PIN",submitLabel:"Access your account",forgotPassword:"Forgot your ID or PIN?",highlightInfo:"For us the future is now"},es:{loginErrorPattern:"ID invalido",loginPlaceholder:"Inserte su ID",passwordErrorPattern:"Contrase\xf1a incorrecta",passwordPlaceholder:"Inserte su contrase\xf1a",submitLabel:"Accede a su cuenta",forgotPassword:"\xbfOlvid\xf3 su ID o contrase\xf1a?",highlightInfo:"Para nosotros el futuro es ahora"},pt:{loginErrorPattern:"ID inv\xe1lido",loginPlaceholder:"Insira seu ID",passwordErrorPattern:"Senha incorreta",passwordPlaceholder:"Insira sua senha",submitLabel:"Acesse a sua conta",forgotPassword:"Esqueceu seu ID ou sua senha?",highlightInfo:"Para n\xf3s o futuro \xe9 agora"}}},default:{context:"general",cache:!0}},[]),e.Qb(1024,i.k,function(){return[[{path:"",component:Q}]]},[])])})}}]);