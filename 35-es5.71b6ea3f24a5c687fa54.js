(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{jvV4:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=function(){return function(){}}(),o=u("pMnS"),a=u("c/cy"),i=u("nMSU"),c=u("Lmtn"),r=u("ZYCi"),s=u("bpOf"),b=function(){return function(){}}(),p=e.Gb({encapsulation:2,styles:[],data:{}});function d(l){return e.cc(0,[(l()(),e.Ib(0,0,[["thfDocs",1]],null,110,"div",[["class","docs-api"]],null,null,null,null,null)),(l()(),e.Ib(1,0,null,null,2,"p",[["class","docs-api-module-import"]],null,null,null,null,null)),(l()(),e.Ib(2,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["import { PoListViewModule } from '@portinari/portinari-ui';"])),(l()(),e.Ib(4,0,null,null,19,"div",[["class","docs-api-class-description"]],null,null,null,null,null)),(l()(),e.Ib(5,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["M\xf3dulo do componente "])),(l()(),e.Ib(7,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["po-list-view"])),(l()(),e.ac(-1,null,["."])),(l()(),e.Ib(10,0,null,null,8,"blockquote",[],null,null,null,null,null)),(l()(),e.Ib(11,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["Para o correto funcionamento do componente "])),(l()(),e.Ib(13,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["po-list-view"])),(l()(),e.ac(-1,null,[", deve ser importado o m\xf3dulo "])),(l()(),e.Ib(16,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["BrowserAnimationsModule"])),(l()(),e.ac(-1,null,[" no\nm\xf3dulo principal da sua aplica\xe7\xe3o."])),(l()(),e.Ib(19,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["M\xf3dulo da aplica\xe7\xe3o:"])),(l()(),e.Ib(21,0,null,null,2,"pre",[],null,null,null,null,null)),(l()(),e.Ib(22,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["import { BrowserAnimationsModule } from '@angular/platform-browser/animations';\nimport { PoModule } from '@portinari/portinari-ui';\n...\n\n@NgModule({\n  imports: [\n    BrowserModule,\n    BrowserAnimationsModule,\n    ...\n    PoModule\n  ],\n  declarations: [\n    AppComponent,\n    ...\n  ],\n  providers: [],\n  bootstrap: [AppComponent]\n})\nexport class AppModule { }\n"])),(l()(),e.Ib(24,0,null,null,1,"h3",[["class","docs-api-h3"]],null,null,null,null,null)),(l()(),e.ac(-1,null,["Componente"])),(l()(),e.Ib(26,0,null,null,2,"h4",[["class","docs-api-class-name"]],null,null,null,null,null)),(l()(),e.Ib(27,0,null,null,1,"code",[["class","doc-code"]],null,null,null,null,null)),(l()(),e.ac(-1,null,["PoListViewContentTemplateDirective"])),(l()(),e.Ib(29,0,null,null,40,"div",[["class","docs-api-class-description"]],null,null,null,null,null)),(l()(),e.Ib(30,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["Esta diretiva permite que sejam apresentadas informa\xe7\xf5es essenciais de cada item."])),(l()(),e.Ib(32,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["Deve-se utilizar como par\xe2metro a refer\xeancia do item e/ou \xedndice, sendo por padr\xe3o o item."])),(l()(),e.Ib(34,0,null,null,10,"ul",[],null,null,null,null,null)),(l()(),e.Ib(35,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["Item: "])),(l()(),e.Ib(37,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["item"])),(l()(),e.ac(-1,null,[" determina o item da linha corrente."])),(l()(),e.Ib(40,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["\xcdndice: "])),(l()(),e.Ib(42,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["index"])),(l()(),e.ac(-1,null,[" determina o \xedndice da linha corrente."])),(l()(),e.Ib(45,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["Esta diretiva pode ser usada de duas formas: expl\xedcita ou "])),(l()(),e.Ib(47,0,null,null,1,"em",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["syntax sugar"])),(l()(),e.ac(-1,null,[". Veja a seguir ambos, respectivamente:"])),(l()(),e.Ib(50,0,null,null,2,"pre",[],null,null,null,null,null)),(l()(),e.Ib(51,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.ac(-1,null,['...\n<po-list-view\n  p-property-title="name"\n  [p-items]="[{id: 1, name: "Register", email: register@portinari.com}]">\n\n  <ng-template p-list-view-content-template let-item let-code="index">\n    <div class="po-row">\n      <po-info class="po-md-6" p-label="Code" [p-value]="code"></po-info>\n      <po-info class="po-md-6" p-label="Email" [p-value]="item.email"></po-info>\n    </div>\n  </ng-template>\n\n</po-list-view>\n\n...\n'])),(l()(),e.Ib(53,0,null,null,2,"pre",[],null,null,null,null,null)),(l()(),e.Ib(54,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.ac(-1,null,['...\n<po-list-view\n   p-property-title="name"\n   [p-items]="[{id: 1, name: "Register", email: register@portinari.com}]">\n\n   <div *p-list-view-content-template="let item, let i=index" class="po-row">\n     <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>\n   </div>\n</po-list-view>\n...\n'])),(l()(),e.Ib(56,0,null,null,10,"p",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["A diretiva "])),(l()(),e.Ib(58,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["p-list-view-content-template"])),(l()(),e.ac(-1,null,[", possibilita tamb\xe9m alterar o t\xedtulo dos itens. Para isto,\n\xe9 necess\xe1rio atribuir a refer\xeancia da fun\xe7\xe3o que faz a altera\xe7\xe3o, \xe0 propriedade "])),(l()(),e.Ib(61,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["p-title"])),(l()(),e.ac(-1,null,[",\na mesma deve retornar um valor do tipo "])),(l()(),e.Ib(64,0,null,null,1,"em",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["string"])),(l()(),e.ac(-1,null,[". Veja o exemplo a seguir:"])),(l()(),e.Ib(67,0,null,null,2,"pre",[],null,null,null,null,null)),(l()(),e.Ib(68,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.ac(-1,null,['...\n@Component({\n   selector: \'app-root\',\n   template: `\n     ...\n     <po-list-view\n       [p-items]="items">\n       <ng-template p-list-view-content-template let-item [p-title]="customTitle">\n         <div class="po-row">\n           <po-info class="po-md-12" p-label="Customer" [p-value]="item.customer"></po-info>\n         </div>\n       </ng-template>\n     ...\n   `\n})\nexport class AppComponent {\n   public items = [{\n     code: 1200,\n     product: \'Rice\',\n     customer: \'Supermarket 1\',\n   }, {\n     code: 1355,\n     product: \'Bean\',\n     customer: \'Supermarket 2\'\n   }];\n\n   customTitle(item) {\n     return `${item.code} - ${item.product}`;\n   }\n}\n'])),(l()(),e.Ib(70,0,null,null,5,"div",[["class","docs-api-directive-selectors"]],null,null,null,null,null)),(l()(),e.Ib(71,0,null,null,1,"h4",[["class","docs-api-class-selector-label"]],null,null,null,null,null)),(l()(),e.ac(-1,null,["Seletor"])),(l()(),e.Ib(73,0,null,null,2,"pre",[["appCodeHighlight",""]],null,null,null,null,null)),e.Hb(74,4210688,null,0,s.a,[e.q],null,null),(l()(),e.ac(-1,null,['<[p-list-view-content-template]\n    p-title="(item) => string" >\n</[p-list-view-content-template]>\n'])),(l()(),e.Ib(76,0,null,null,1,"h4",[["class","docs-api-h5 docs-api-method-header"]],null,null,null,null,null)),(l()(),e.ac(-1,null,["Propriedades"])),(l()(),e.Ib(78,0,null,null,32,"table",[["class","docs-api-properties-table"]],null,null,null,null,null)),(l()(),e.Ib(79,0,null,null,8,"tr",[["class","docs-api-properties-header-row"]],null,null,null,null,null)),(l()(),e.Ib(80,0,null,null,1,"th",[["class","docs-api-properties-th"]],null,null,null,null,null)),(l()(),e.ac(-1,null,["Nome"])),(l()(),e.Ib(82,0,null,null,1,"th",[["class","docs-api-properties-th"]],null,null,null,null,null)),(l()(),e.ac(-1,null,["Tipo"])),(l()(),e.Ib(84,0,null,null,1,"th",[["class","docs-api-properties-th"]],null,null,null,null,null)),(l()(),e.ac(-1,null,["Padr\xe3o"])),(l()(),e.Ib(86,0,null,null,1,"th",[["class","docs-api-properties-th"]],null,null,null,null,null)),(l()(),e.ac(-1,null,["Descri\xe7\xe3o"])),(l()(),e.Ib(88,0,null,null,22,"tr",[["class","docs-api-properties-row"]],null,null,null,null,null)),(l()(),e.Ib(89,0,null,null,4,"td",[["class","docs-api-properties-name-cell"]],null,null,null,null,null)),(l()(),e.Ib(90,0,null,null,3,"div",[["class","docs-api-input-marker"]],null,null,null,null,null)),(l()(),e.Ib(91,0,null,null,2,"span",[["class","docs-api-input-alias"]],null,null,null,null,null)),(l()(),e.ac(-1,null,[" p-title"])),(l()(),e.Ib(93,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Ib(94,0,null,null,2,"td",[["class","docs-api-properties-type-cell"]],null,null,null,null,null)),(l()(),e.Ib(95,0,null,null,1,"code",[["class","docs-api-property-type (item) => string"],["pan",""]],null,null,null,null,null)),(l()(),e.ac(-1,null,["(item) => string"])),(l()(),e.Ib(97,0,null,null,1,"td",[["class","docs-api-property-default"]],null,null,null,null,null)),(l()(),e.ac(-1,null,["-"])),(l()(),e.Ib(99,0,null,null,11,"td",[["class","docs-api-property-description"]],null,null,null,null,null)),(l()(),e.Ib(100,0,null,null,2,"em",[],null,null,null,null,null)),(l()(),e.Ib(101,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["(opcional)"])),(l()(),e.Ib(103,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["Fun\xe7\xe3o que deve retornar um valor do tipo "])),(l()(),e.Ib(105,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["string"])),(l()(),e.ac(-1,null,[", que ser\xe1 utilizado como o t\xedtulo de cada item da lista."])),(l()(),e.Ib(108,0,null,null,2,"blockquote",[],null,null,null,null,null)),(l()(),e.Ib(109,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["Por par\xe2metro ser\xe1 enviado o item corrente, onde poder\xe1 utiliz\xe1-lo para recuperar dados sobre o mesmo."]))],null,null)}e.Eb("sample-po-list-view-content-template-doc",b,function(l){return e.cc(0,[(l()(),e.Ib(0,0,null,null,1,"sample-po-list-view-content-template-doc",[],null,null,null,d,p)),e.Hb(1,49152,null,0,b,[],null,null)],null,null)},{},{},[]);var m=function(){function l(l,n){this.route=l,this.router=n,this.hideThfWebSample=!0,this.samplesLength=0,this.activeTab="\x1cdoc",this.actions=[{label:"Documenta\xe7\xe3o",action:this.goBack,icon:"po-icon-document-filled"},{label:"Colabore",action:this.improveDocs}]}return l.prototype.goBack=function(){this.router.navigate(["documentation"])},l.prototype.improveDocs=function(){window.open("https://github.com/portinariui/portinari-angular/tree/master/projects/ui/src/lib/components/po-list-view/po-list-view-content-template/po-list-view-content-template.directive.ts","_blank")},l.prototype.ngOnInit=function(){var l=this;this.sub=this.route.queryParams.subscribe(function(n){var u=n.view;l.activeTab=u||"doc",l.hideThfWebSample=0===l.samplesLength})},l.prototype.ngOnDestroy=function(){this.sub.unsubscribe()},l}(),Q=e.Gb({encapsulation:2,styles:[],data:{}});function I(l){return e.cc(0,[(l()(),e.Ib(0,16777216,null,null,10,"po-page-default",[["p-title"," List View Content Template"]],null,null,null,a.Ib,a.G)),e.Hb(1,1622016,null,0,c.yb,[e.gb,e.R,r.m],{actions:[0,"actions"],title:[1,"title"]},null),(l()(),e.Ib(2,0,null,0,8,"po-tabs",[["p-size","1"]],null,null,null,a.Yb,a.W)),e.Hb(3,49152,null,1,c.ac,[e.j],null,null),e.Yb(603979776,1,{tabs:1}),(l()(),e.Ib(5,0,null,0,3,"po-tab",[["p-label","Documenta\xe7\xe3o"]],null,null,null,a.Wb,a.U)),e.Hb(6,1097728,[[1,4]],0,c.Wb,[e.q],{active:[0,"active"],label:[1,"label"]},null),(l()(),e.Ib(7,0,null,0,1,"sample-po-list-view-content-template-doc",[],null,null,null,d,p)),e.Hb(8,49152,null,0,b,[],null,null),(l()(),e.Ib(9,0,null,0,1,"po-tab",[["p-label","Exemplos"]],null,null,null,a.Wb,a.U)),e.Hb(10,1097728,[[1,4]],0,c.Wb,[e.q],{active:[0,"active"],hide:[1,"hide"],label:[2,"label"]},null)],function(l,n){var u=n.component;l(n,1,0,u.actions," List View Content Template");l(n,6,0,u.activeTab.includes("doc"),"Documenta\xe7\xe3o");l(n,10,0,u.activeTab.includes("web"),u.hideThfWebSample,"Exemplos")},null)}var h=e.Eb("ng-component",m,function(l){return e.cc(0,[(l()(),e.Ib(0,0,null,null,1,"ng-component",[],null,null,null,I,Q)),e.Hb(1,245760,null,0,m,[r.a,r.m],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),v=u("Ip0R"),g=u("t/Na"),w=u("gIcY"),f=u("oVQh"),P=u("aVyw"),y=u("PCNd"),k=function(){return function(){}}();u.d(n,"DocPoListViewContentTemplateModuleNgFactory",function(){return E});var E=e.Fb(t,[],function(l){return e.Pb([e.Qb(512,e.m,e.rb,[[8,[o.a,a.mc,a.hc,a.gc,a.ic,a.jc,a.a,a.fc,a.kc,a.lc,i.a,h]],[3,e.m],e.I]),e.Qb(4608,v.q,v.p,[e.E,[2,v.E]]),e.Qb(4608,g.m,g.s,[v.e,e.N,g.q]),e.Qb(4608,g.t,g.t,[g.m,g.r]),e.Qb(4608,c.r,c.r,[e.m,e.g,e.A]),e.Qb(4608,c.wb,c.wb,[c.r]),e.Qb(4608,c.z,c.z,[c.r]),e.Qb(4608,c.Od,c.Od,[]),e.Qb(5120,g.a,function(l,n,u,e,t){return[l,new c.S(n,u),new c.T(e,t)]},[g.t,c.wb,c.z,c.Od,c.r]),e.Qb(4608,g.p,g.p,[]),e.Qb(6144,g.n,null,[g.p]),e.Qb(4608,g.l,g.l,[g.n]),e.Qb(6144,g.b,null,[g.l]),e.Qb(4608,g.g,g.o,[g.b,e.A]),e.Qb(4608,g.c,g.c,[g.g]),e.Qb(4608,w.s,w.s,[]),e.Qb(4608,w.d,w.d,[]),e.Qb(4608,c.Wd,c.Wd,[]),e.Qb(4608,c.Xd,c.Xd,[]),e.Qb(4608,c.wc,c.wc,[]),e.Qb(4608,c.yc,c.yc,[]),e.Qb(4608,v.g,v.g,[e.E]),e.Qb(4608,v.d,v.d,[e.E]),e.Qb(4608,v.f,v.f,[e.E]),e.Qb(4608,c.ic,c.ic,[]),e.Qb(4608,v.x,v.x,[]),e.Qb(4608,c.kd,c.kd,[]),e.Qb(4608,c.S,c.S,[c.wb,c.z]),e.Qb(4608,c.T,c.T,[c.Od,c.r]),e.Qb(4608,c.Bc,c.Bc,[]),e.Qb(4608,c.Vd,c.Vd,[]),e.Qb(4608,c.Yd,c.Yd,[]),e.Qb(4608,c.W,c.W,[]),e.Qb(4608,f.y,f.y,[g.c]),e.Qb(4608,f.C,f.C,[g.c]),e.Qb(4608,f.H,f.H,[g.c]),e.Qb(4608,f.I,f.I,[f.H]),e.Qb(4608,f.M,f.M,[g.c]),e.Qb(4352,P.c,{language:"terraform",options:{keywords:["resource","provider","variable","output","module","true","false"],operators:["{","}","(",")","[","]","?",":"],tokenizer:{root:[["[a-z_$][\\w$]*",{cases:{"@keywords":"keyword","@default":"identifier"}}],{include:"@whitespace"},["\\d*\\.\\d+([eE][\\-+]?\\d+)?","number.float"],["0[x][0-9a-fA-F]+","number.hex"],["\\d+","number"],["[;,.]","delimiter"],['"([^"\\\\]|\\\\.)*$',"string.invalid"],['"',{token:"string.quote",bracket:"@open",next:"@string"}],["'[^\\\\']'","string"],["'","string.invalid"]],comment:[["[^\\/*]+","comment"],["[\\/*]","comment"],["[\\#.*]","comment"]],string:[['[^\\\\"\\$]+',"string"],["\\$","string.interpolated","@interpolated"],["\\\\.","string.escape.invalid"],['"',{token:"string.quote",bracket:"@close",next:"@pop"}]],whitespace:[["[ \\t\\r\\n]+","white"],["\\/\\/.*$","comment"],["\\#.*$","comment"]],interpolated:[["[{]",{token:"string.escape.curly",switchTo:"@interpolated_compound"}],["","","@pop"]]}}},[]),e.Qb(5120,e.d,function(l,n){return[c.tc(l,n)]},[c.Ud,c.wc]),e.Qb(5120,c.X,c.uc,[c.Ud,g.c,c.wc]),e.Qb(1073742336,v.c,v.c,[]),e.Qb(1073742336,g.e,g.e,[]),e.Qb(1073742336,g.d,g.d,[]),e.Qb(1073742336,w.r,w.r,[]),e.Qb(1073742336,w.g,w.g,[]),e.Qb(1073742336,w.p,w.p,[]),e.Qb(1073742336,c.b,c.b,[]),e.Qb(1073742336,r.p,r.p,[[2,r.u],[2,r.m]]),e.Qb(1073742336,c.d,c.d,[]),e.Qb(1073742336,c.i,c.i,[]),e.Qb(1073742336,c.oc,c.oc,[]),e.Qb(1073742336,c.g,c.g,[]),e.Qb(1073742336,c.k,c.k,[]),e.Qb(1073742336,c.m,c.m,[]),e.Qb(1073742336,c.u,c.u,[]),e.Qb(1073742336,c.D,c.D,[]),e.Qb(1073742336,c.C,c.C,[]),e.Qb(1073742336,c.F,c.F,[]),e.Qb(1073742336,c.Ib,c.Ib,[]),e.Qb(1073742336,c.H,c.H,[]),e.Qb(1073742336,c.Z,c.Z,[]),e.Qb(1073742336,c.vc,c.vc,[]),e.Qb(1073742336,c.hb,c.hb,[]),e.Qb(1073742336,c.qb,c.qb,[]),e.Qb(1073742336,c.hc,c.hc,[]),e.Qb(1073742336,c.Yb,c.Yb,[]),e.Qb(1073742336,c.N,c.N,[]),e.Qb(1073742336,c.dc,c.dc,[]),e.Qb(1073742336,c.K,c.K,[]),e.Qb(1073742336,c.P,c.P,[]),e.Qb(1073742336,c.gb,c.gb,[]),e.Qb(1073742336,c.dd,c.dd,[]),e.Qb(1073742336,c.mb,c.mb,[]),e.Qb(1073742336,c.ob,c.ob,[]),e.Qb(1073742336,c.md,c.md,[]),e.Qb(1073742336,c.qd,c.qd,[]),e.Qb(1073742336,c.ud,c.ud,[]),e.Qb(1073742336,c.ub,c.ub,[]),e.Qb(1073742336,c.Cb,c.Cb,[]),e.Qb(1073742336,c.Gb,c.Gb,[]),e.Qb(1073742336,c.Pb,c.Pb,[]),e.Qb(1073742336,c.Sb,c.Sb,[]),e.Qb(1073742336,c.bc,c.bc,[]),e.Qb(1073742336,c.mc,c.mc,[]),e.Qb(1073742336,c.sc,c.sc,[]),e.Qb(1073742336,c.s,c.s,[]),e.Qb(1073742336,c.A,c.A,[]),e.Qb(1073742336,c.Q,c.Q,[]),e.Qb(1073742336,c.R,c.R,[]),e.Qb(1073742336,c.U,c.U,[]),e.Qb(1073742336,c.cb,c.cb,[]),e.Qb(1073742336,c.Eb,c.Eb,[]),e.Qb(1073742336,c.Pd,c.Pd,[]),e.Qb(1073742336,c.q,c.q,[]),e.Qb(1073742336,c.Qd,c.Qd,[]),e.Qb(1073742336,c.Rd,c.Rd,[]),e.Qb(1073742336,c.y,c.y,[]),e.Qb(1073742336,c.vb,c.vb,[]),e.Qb(1073742336,c.Nb,c.Nb,[]),e.Qb(1073742336,c.rb,c.rb,[]),e.Qb(1073742336,f.c,f.c,[]),e.Qb(1073742336,f.f,f.f,[]),e.Qb(1073742336,f.h,f.h,[]),e.Qb(1073742336,f.k,f.k,[]),e.Qb(1073742336,f.m,f.m,[]),e.Qb(1073742336,f.o,f.o,[]),e.Qb(1073742336,f.q,f.q,[]),e.Qb(1073742336,f.s,f.s,[]),e.Qb(1073742336,f.u,f.u,[]),e.Qb(1073742336,f.w,f.w,[]),e.Qb(1073742336,f.a,f.a,[]),e.Qb(1073742336,f.x,f.x,[]),e.Qb(1073742336,c.V,c.V,[]),e.Qb(1073742336,P.b,P.b,[]),e.Qb(1073742336,y.a,y.a,[]),e.Qb(1073742336,k,k,[]),e.Qb(1073742336,t,t,[]),e.Qb(256,g.q,"XSRF-TOKEN",[]),e.Qb(256,g.r,"X-XSRF-TOKEN",[]),e.Qb(256,c.Ud,{contexts:{general:{en:{loginErrorPattern:"Invalid ID",loginPlaceholder:"Insert your ID",passwordErrorPattern:"Invalid PIN",passwordPlaceholder:"Insert your PIN",submitLabel:"Access your account",forgotPassword:"Forgot your ID or PIN?",highlightInfo:"For us the future is now"},es:{loginErrorPattern:"ID invalido",loginPlaceholder:"Inserte su ID",passwordErrorPattern:"Contrase\xf1a incorrecta",passwordPlaceholder:"Inserte su contrase\xf1a",submitLabel:"Accede a su cuenta",forgotPassword:"\xbfOlvid\xf3 su ID o contrase\xf1a?",highlightInfo:"Para nosotros el futuro es ahora"},pt:{loginErrorPattern:"ID inv\xe1lido",loginPlaceholder:"Insira seu ID",passwordErrorPattern:"Senha incorreta",passwordPlaceholder:"Insira sua senha",submitLabel:"Acesse a sua conta",forgotPassword:"Esqueceu seu ID ou sua senha?",highlightInfo:"Para n\xf3s o futuro \xe9 agora"}}},default:{context:"general",cache:!0}},[]),e.Qb(1024,r.k,function(){return[[{path:"",component:m}]]},[])])})}}]);