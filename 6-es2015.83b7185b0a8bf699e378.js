(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{JTXz:function(l,n,u){"use strict";u.r(n);var o=u("8Y7J");class e{}var c=u("pMnS"),a=u("c/cy"),b=u("nMSU"),t=u("8xxD"),s=u("iInd"),r=u("bpOf");class i{}var p=o.Eb({encapsulation:2,styles:[],data:{}});function d(l){return o.ac(0,[(l()(),o.Gb(0,0,[["thfDocs",1]],null,117,"div",[["class","docs-api"]],null,null,null,null,null)),(l()(),o.Gb(1,0,null,null,2,"p",[["class","docs-api-module-import"]],null,null,null,null,null)),(l()(),o.Gb(2,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),o.Yb(-1,null,["import { PoAccordionModule } from '@portinari/portinari-ui';"])),(l()(),o.Gb(4,0,null,null,19,"div",[["class","docs-api-class-description"]],null,null,null,null,null)),(l()(),o.Gb(5,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),o.Yb(-1,null,["M\xf3dulo do componente "])),(l()(),o.Gb(7,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),o.Yb(-1,null,["po-accordion"])),(l()(),o.Yb(-1,null,["."])),(l()(),o.Gb(10,0,null,null,8,"blockquote",[],null,null,null,null,null)),(l()(),o.Gb(11,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),o.Yb(-1,null,["Para o correto funcionamento do componente "])),(l()(),o.Gb(13,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),o.Yb(-1,null,["po-accordion"])),(l()(),o.Yb(-1,null,[", deve ser importado o m\xf3dulo "])),(l()(),o.Gb(16,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),o.Yb(-1,null,["BrowserAnimationsModule"])),(l()(),o.Yb(-1,null,[" no\nm\xf3dulo principal da sua aplica\xe7\xe3o."])),(l()(),o.Gb(19,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),o.Yb(-1,null,["M\xf3dulo da aplica\xe7\xe3o:"])),(l()(),o.Gb(21,0,null,null,2,"pre",[],null,null,null,null,null)),(l()(),o.Gb(22,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),o.Yb(-1,null,["import { BrowserAnimationsModule } from '@angular/platform-browser/animations';\nimport { PoModule } from '@portinari/portinari-ui';\n...\n\n@NgModule({\n  imports: [\n    BrowserModule,\n    BrowserAnimationsModule,\n    ...\n    PoModule\n  ],\n  declarations: [\n    AppComponent,\n    ...\n  ],\n  providers: [],\n  bootstrap: [AppComponent]\n})\nexport class AppModule { }\n"])),(l()(),o.Gb(24,0,null,null,1,"h3",[["class","docs-api-h3"]],null,null,null,null,null)),(l()(),o.Yb(-1,null,["Componente"])),(l()(),o.Gb(26,0,null,null,2,"h4",[["class","docs-api-class-name"]],null,null,null,null,null)),(l()(),o.Gb(27,0,null,null,1,"code",[["class","doc-code"]],null,null,null,null,null)),(l()(),o.Yb(-1,null,["PoAccordionItemComponent"])),(l()(),o.Gb(29,0,null,null,24,"div",[["class","docs-api-class-description"]],null,null,null,null,null)),(l()(),o.Gb(30,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),o.Yb(-1,null,["Componente utilizado para renderizar os itens do "])),(l()(),o.Gb(32,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),o.Yb(-1,null,["po-accordion"])),(l()(),o.Yb(-1,null,["."])),(l()(),o.Gb(35,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),o.Yb(-1,null,["O componente "])),(l()(),o.Gb(37,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),o.Yb(-1,null,["po-accordion"])),(l()(),o.Yb(-1,null,[" j\xe1 faz o controle de abertura e fechamento dos itens automaticamente,\nmas caso houver a necessidade de abrir algum dos "])),(l()(),o.Gb(40,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),o.Yb(-1,null,["po-accordion-item"])),(l()(),o.Yb(-1,null,[" via Typescript, pode ser feita da seguinte forma:"])),(l()(),o.Gb(43,0,null,null,2,"pre",[],null,null,null,null,null)),(l()(),o.Gb(44,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),o.Yb(-1,null,['<po-accordion>\n  <po-accordion-item p-label="Portinari Accordion 1" #item1>\n     Accordion 1\n  </po-accordion-item>\n\n  <po-accordion-item p-label="Portinari Accordion 2">\n     Accordion 2\n  </po-accordion-item>\n</po-accordion>\n'])),(l()(),o.Gb(46,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),o.Yb(-1,null,["e no typescript pode-se utilizar o "])),(l()(),o.Gb(48,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),o.Yb(-1,null,["@ViewChild"])),(l()(),o.Yb(-1,null,[":"])),(l()(),o.Gb(51,0,null,null,2,"pre",[],null,null,null,null,null)),(l()(),o.Gb(52,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),o.Yb(-1,null,["@ViewChild(PoAccordionItemComponent, { static: true }) item1: PoAccordionItemComponent;\n\nngAfterContentInit() {\n  // ou utilizar o m\xe9todo collapse()\n  this.item1.expand();\n}\n"])),(l()(),o.Gb(54,0,null,null,5,"div",[["class","docs-api-directive-selectors"]],null,null,null,null,null)),(l()(),o.Gb(55,0,null,null,1,"h4",[["class","docs-api-class-selector-label"]],null,null,null,null,null)),(l()(),o.Yb(-1,null,["Seletor"])),(l()(),o.Gb(57,0,null,null,2,"pre",[["appCodeHighlight",""]],null,null,null,null,null)),o.Fb(58,4210688,null,0,r.a,[o.q],null,null),(l()(),o.Yb(-1,null,['<po-accordion-item\n    p-label="string" >\n</po-accordion-item>\n'])),(l()(),o.Gb(60,0,null,null,1,"h4",[["class","docs-api-h5 docs-api-method-header"]],null,null,null,null,null)),(l()(),o.Yb(-1,null,["Propriedades"])),(l()(),o.Gb(62,0,null,null,23,"table",[["class","docs-api-properties-table"]],null,null,null,null,null)),(l()(),o.Gb(63,0,null,null,8,"tr",[["class","docs-api-properties-header-row"]],null,null,null,null,null)),(l()(),o.Gb(64,0,null,null,1,"th",[["class","docs-api-properties-th"]],null,null,null,null,null)),(l()(),o.Yb(-1,null,["Nome"])),(l()(),o.Gb(66,0,null,null,1,"th",[["class","docs-api-properties-th"]],null,null,null,null,null)),(l()(),o.Yb(-1,null,["Tipo"])),(l()(),o.Gb(68,0,null,null,1,"th",[["class","docs-api-properties-th"]],null,null,null,null,null)),(l()(),o.Yb(-1,null,["Padr\xe3o"])),(l()(),o.Gb(70,0,null,null,1,"th",[["class","docs-api-properties-th"]],null,null,null,null,null)),(l()(),o.Yb(-1,null,["Descri\xe7\xe3o"])),(l()(),o.Gb(72,0,null,null,13,"tr",[["class","docs-api-properties-row"]],null,null,null,null,null)),(l()(),o.Gb(73,0,null,null,4,"td",[["class","docs-api-properties-name-cell"]],null,null,null,null,null)),(l()(),o.Gb(74,0,null,null,3,"div",[["class","docs-api-input-marker"]],null,null,null,null,null)),(l()(),o.Gb(75,0,null,null,2,"span",[["class","docs-api-input-alias"]],null,null,null,null,null)),(l()(),o.Yb(-1,null,[" p-label"])),(l()(),o.Gb(77,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),o.Gb(78,0,null,null,2,"td",[["class","docs-api-properties-type-cell"]],null,null,null,null,null)),(l()(),o.Gb(79,0,null,null,1,"code",[["class","docs-api-property-type string"],["pan",""]],null,null,null,null,null)),(l()(),o.Yb(-1,null,["string"])),(l()(),o.Gb(81,0,null,null,1,"td",[["class","docs-api-property-default"]],null,null,null,null,null)),(l()(),o.Yb(-1,null,["-"])),(l()(),o.Gb(83,0,null,null,2,"td",[["class","docs-api-property-description"]],null,null,null,null,null)),(l()(),o.Gb(84,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),o.Yb(-1,null,["T\xedtulo do item."])),(l()(),o.Gb(86,0,null,null,1,"h3",[["class","docs-api-h5 docs-api-method-header"]],null,null,null,null,null)),(l()(),o.Yb(-1,null,["M\xe9todos"])),(l()(),o.Gb(88,0,null,null,13,"table",[["class","docs-api-method-table"]],null,null,null,null,null)),(l()(),o.Gb(89,0,null,null,5,"tr",[["class","docs-api-properties-row"]],null,null,null,null,null)),(l()(),o.Gb(90,0,null,null,4,"th",[["class","docs-api-properties-name-cell"],["colspan","2"]],null,null,null,null,null)),(l()(),o.Gb(91,0,null,null,3,"div",[["class","docs-api-input-marker"]],null,null,null,null,null)),(l()(),o.Gb(92,0,null,null,2,"h4",[],null,null,null,null,null)),(l()(),o.Gb(93,0,null,null,1,"span",[["class","docs-api-input-alias"]],null,null,null,null,null)),(l()(),o.Yb(-1,null,[" collapse "])),(l()(),o.Gb(95,0,null,null,6,"tr",[["class","docs-api-property-description"]],null,null,null,null,null)),(l()(),o.Gb(96,0,null,null,5,"td",[["class","docs-api-property-description"]],null,null,null,null,null)),(l()(),o.Gb(97,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),o.Yb(-1,null,["M\xe9todo para colapsar o "])),(l()(),o.Gb(99,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),o.Yb(-1,null,["po-accordion-item"])),(l()(),o.Yb(-1,null,["."])),(l()(),o.Gb(102,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),o.Gb(103,0,null,null,13,"table",[["class","docs-api-method-table"]],null,null,null,null,null)),(l()(),o.Gb(104,0,null,null,5,"tr",[["class","docs-api-properties-row"]],null,null,null,null,null)),(l()(),o.Gb(105,0,null,null,4,"th",[["class","docs-api-properties-name-cell"],["colspan","2"]],null,null,null,null,null)),(l()(),o.Gb(106,0,null,null,3,"div",[["class","docs-api-input-marker"]],null,null,null,null,null)),(l()(),o.Gb(107,0,null,null,2,"h4",[],null,null,null,null,null)),(l()(),o.Gb(108,0,null,null,1,"span",[["class","docs-api-input-alias"]],null,null,null,null,null)),(l()(),o.Yb(-1,null,[" expand "])),(l()(),o.Gb(110,0,null,null,6,"tr",[["class","docs-api-property-description"]],null,null,null,null,null)),(l()(),o.Gb(111,0,null,null,5,"td",[["class","docs-api-property-description"]],null,null,null,null,null)),(l()(),o.Gb(112,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),o.Yb(-1,null,["M\xe9todo para expandir o "])),(l()(),o.Gb(114,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),o.Yb(-1,null,["po-accordion-item"])),(l()(),o.Yb(-1,null,["."])),(l()(),o.Gb(117,0,null,null,0,"br",[],null,null,null,null,null))],null,null)}o.Cb("sample-po-accordion-item-doc",i,function(l){return o.ac(0,[(l()(),o.Gb(0,0,null,null,1,"sample-po-accordion-item-doc",[],null,null,null,d,p)),o.Fb(1,49152,null,0,i,[],null,null)],null,null)},{},{},[]);class O{constructor(l,n){this.route=l,this.router=n,this.hideThfWebSample=!0,this.samplesLength=0,this.activeTab="\x1cdoc",this.actions=[{label:"Documenta\xe7\xe3o",action:this.goBack,icon:"po-icon-document-filled"},{label:"Colabore",action:this.improveDocs}]}goBack(){this.router.navigate(["documentation"])}improveDocs(){window.open("https://github.com/portinariui/portinari-angular/tree/master/projects/ui/src/lib/components/po-accordion/po-accordion-item/po-accordion-item.component.ts","_blank")}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{const n=l.view;this.activeTab=n||"doc",this.hideThfWebSample=0===this.samplesLength})}ngOnDestroy(){this.sub.unsubscribe()}}var m=o.Eb({encapsulation:2,styles:[],data:{}});function h(l){return o.ac(0,[(l()(),o.Gb(0,16777216,null,null,10,"po-page-default",[["p-title"," Accordion Item"]],null,null,null,a.Nb,a.I)),o.Fb(1,1622016,null,0,t.Bb,[o.eb,o.Q,s.m],{actions:[0,"actions"],title:[1,"title"]},null),(l()(),o.Gb(2,0,null,0,8,"po-tabs",[["p-size","1"]],null,null,null,a.ec,a.Z)),o.Fb(3,49152,null,1,t.hc,[o.j],null,null),o.Wb(603979776,1,{tabs:1}),(l()(),o.Gb(5,0,null,0,3,"po-tab",[["p-label","Documenta\xe7\xe3o"]],null,null,null,a.cc,a.X)),o.Fb(6,1097728,[[1,4]],0,t.cc,[o.q],{active:[0,"active"],label:[1,"label"]},null),(l()(),o.Gb(7,0,null,0,1,"sample-po-accordion-item-doc",[],null,null,null,d,p)),o.Fb(8,49152,null,0,i,[],null,null),(l()(),o.Gb(9,0,null,0,1,"po-tab",[["p-label","Exemplos"]],null,null,null,a.cc,a.X)),o.Fb(10,1097728,[[1,4]],0,t.cc,[o.q],{active:[0,"active"],hide:[1,"hide"],label:[2,"label"]},null)],function(l,n){var u=n.component;l(n,1,0,u.actions," Accordion Item");l(n,6,0,u.activeTab.includes("doc"),"Documenta\xe7\xe3o");l(n,10,0,u.activeTab.includes("web"),u.hideThfWebSample,"Exemplos")},null)}var G=o.Cb("ng-component",O,function(l){return o.ac(0,[(l()(),o.Gb(0,0,null,null,1,"ng-component",[],null,null,null,h,m)),o.Fb(1,245760,null,0,O,[s.a,s.m],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),g=u("SVse"),f=u("IheW"),Y=u("s7LF"),v=u("XiHK"),w=u("YoMC"),I=u("PCNd");class P{}u.d(n,"DocPoAccordionItemModuleNgFactory",function(){return y});var y=o.Db(e,[],function(l){return o.Nb([o.Ob(512,o.m,o.pb,[[8,[c.a,a.lc,a.mc,a.nc,a.oc,a.qc,a.pc,a.rc,a.sc,a.tc,a.a,a.uc,b.a,G]],[3,o.m],o.I]),o.Ob(4608,g.q,g.p,[o.E,[2,g.E]]),o.Ob(4608,f.m,f.s,[g.e,o.N,f.q]),o.Ob(4608,f.t,f.t,[f.m,f.r]),o.Ob(4608,t.u,t.u,[o.m,o.g,o.A]),o.Ob(4608,t.zb,t.zb,[t.u]),o.Ob(4608,t.C,t.C,[t.u]),o.Ob(4608,t.ie,t.ie,[]),o.Ob(5120,f.a,function(l,n,u,o,e){return[l,new t.V(n,u),new t.W(o,e)]},[f.t,t.zb,t.C,t.ie,t.u]),o.Ob(4608,f.p,f.p,[]),o.Ob(6144,f.n,null,[f.p]),o.Ob(4608,f.l,f.l,[f.n]),o.Ob(6144,f.b,null,[f.l]),o.Ob(4608,f.g,f.o,[f.b,o.A]),o.Ob(4608,f.c,f.c,[f.g]),o.Ob(4608,Y.s,Y.s,[]),o.Ob(4608,Y.d,Y.d,[]),o.Ob(4608,t.oe,t.oe,[]),o.Ob(4608,t.se,t.se,[]),o.Ob(4608,t.te,t.te,[]),o.Ob(4608,t.Hc,t.Hc,[]),o.Ob(4608,t.Kc,t.Kc,[]),o.Ob(4608,t.re,t.re,[]),o.Ob(4608,t.ue,t.ue,[]),o.Ob(4608,g.g,g.g,[o.E]),o.Ob(4608,g.d,g.d,[o.E]),o.Ob(4608,g.f,g.f,[o.E]),o.Ob(4608,t.pc,t.pc,[]),o.Ob(4608,g.x,g.x,[]),o.Ob(4608,t.Fd,t.Fd,[]),o.Ob(4608,t.V,t.V,[t.zb,t.C]),o.Ob(4608,t.W,t.W,[t.ie,t.u]),o.Ob(4608,t.Z,t.Z,[]),o.Ob(4608,v.y,v.y,[f.c]),o.Ob(4608,v.C,v.C,[f.c]),o.Ob(4608,v.H,v.H,[f.c]),o.Ob(4608,v.I,v.I,[v.H]),o.Ob(4608,v.M,v.M,[f.c]),o.Ob(4352,w.c,{language:"terraform",options:{keywords:["resource","provider","variable","output","module","true","false"],operators:["{","}","(",")","[","]","?",":"],tokenizer:{root:[["[a-z_$][\\w$]*",{cases:{"@keywords":"keyword","@default":"identifier"}}],{include:"@whitespace"},["\\d*\\.\\d+([eE][\\-+]?\\d+)?","number.float"],["0[x][0-9a-fA-F]+","number.hex"],["\\d+","number"],["[;,.]","delimiter"],['"([^"\\\\]|\\\\.)*$',"string.invalid"],['"',{token:"string.quote",bracket:"@open",next:"@string"}],["'[^\\\\']'","string"],["'","string.invalid"]],comment:[["[^\\/*]+","comment"],["[\\/*]","comment"],["[\\#.*]","comment"]],string:[['[^\\\\"\\$]+',"string"],["\\$","string.interpolated","@interpolated"],["\\\\.","string.escape.invalid"],['"',{token:"string.quote",bracket:"@close",next:"@pop"}]],whitespace:[["[ \\t\\r\\n]+","white"],["\\/\\/.*$","comment"],["\\#.*$","comment"]],interpolated:[["[{]",{token:"string.escape.curly",switchTo:"@interpolated_compound"}],["","","@pop"]]}}},[]),o.Ob(5120,o.d,function(l,n){return[t.Ac(l,n)]},[t.je,t.oe]),o.Ob(5120,t.ab,t.Bc,[t.je,f.c,t.oe]),o.Ob(1073742336,g.c,g.c,[]),o.Ob(1073742336,f.e,f.e,[]),o.Ob(1073742336,f.d,f.d,[]),o.Ob(1073742336,Y.r,Y.r,[]),o.Ob(1073742336,Y.g,Y.g,[]),o.Ob(1073742336,Y.p,Y.p,[]),o.Ob(1073742336,t.c,t.c,[]),o.Ob(1073742336,t.e,t.e,[]),o.Ob(1073742336,s.p,s.p,[[2,s.u],[2,s.m]]),o.Ob(1073742336,t.g,t.g,[]),o.Ob(1073742336,t.ne,t.ne,[]),o.Ob(1073742336,t.kb,t.kb,[]),o.Ob(1073742336,t.l,t.l,[]),o.Ob(1073742336,t.vc,t.vc,[]),o.Ob(1073742336,t.j,t.j,[]),o.Ob(1073742336,t.n,t.n,[]),o.Ob(1073742336,t.p,t.p,[]),o.Ob(1073742336,t.x,t.x,[]),o.Ob(1073742336,t.G,t.G,[]),o.Ob(1073742336,t.F,t.F,[]),o.Ob(1073742336,t.I,t.I,[]),o.Ob(1073742336,t.Lb,t.Lb,[]),o.Ob(1073742336,t.K,t.K,[]),o.Ob(1073742336,t.cb,t.cb,[]),o.Ob(1073742336,t.tb,t.tb,[]),o.Ob(1073742336,t.Nb,t.Nb,[]),o.Ob(1073742336,t.Jc,t.Jc,[]),o.Ob(1073742336,t.t,t.t,[]),o.Ob(1073742336,t.Lc,t.Lc,[]),o.Ob(1073742336,t.Mc,t.Mc,[]),o.Ob(1073742336,t.B,t.B,[]),o.Ob(1073742336,t.yb,t.yb,[]),o.Ob(1073742336,t.Tb,t.Tb,[]),o.Ob(1073742336,t.oc,t.oc,[]),o.Ob(1073742336,t.fc,t.fc,[]),o.Ob(1073742336,t.Q,t.Q,[]),o.Ob(1073742336,t.kc,t.kc,[]),o.Ob(1073742336,t.N,t.N,[]),o.Ob(1073742336,t.S,t.S,[]),o.Ob(1073742336,t.jb,t.jb,[]),o.Ob(1073742336,t.yd,t.yd,[]),o.Ob(1073742336,t.pb,t.pb,[]),o.Ob(1073742336,t.rb,t.rb,[]),o.Ob(1073742336,t.Hd,t.Hd,[]),o.Ob(1073742336,t.Ld,t.Ld,[]),o.Ob(1073742336,t.Od,t.Od,[]),o.Ob(1073742336,t.xb,t.xb,[]),o.Ob(1073742336,t.Fb,t.Fb,[]),o.Ob(1073742336,t.Jb,t.Jb,[]),o.Ob(1073742336,t.Vb,t.Vb,[]),o.Ob(1073742336,t.Yb,t.Yb,[]),o.Ob(1073742336,t.ic,t.ic,[]),o.Ob(1073742336,t.tc,t.tc,[]),o.Ob(1073742336,t.zc,t.zc,[]),o.Ob(1073742336,t.v,t.v,[]),o.Ob(1073742336,t.D,t.D,[]),o.Ob(1073742336,t.T,t.T,[]),o.Ob(1073742336,t.U,t.U,[]),o.Ob(1073742336,t.X,t.X,[]),o.Ob(1073742336,t.fb,t.fb,[]),o.Ob(1073742336,t.Hb,t.Hb,[]),o.Ob(1073742336,t.ub,t.ub,[]),o.Ob(1073742336,v.c,v.c,[]),o.Ob(1073742336,v.f,v.f,[]),o.Ob(1073742336,v.h,v.h,[]),o.Ob(1073742336,v.k,v.k,[]),o.Ob(1073742336,v.m,v.m,[]),o.Ob(1073742336,v.o,v.o,[]),o.Ob(1073742336,v.q,v.q,[]),o.Ob(1073742336,v.s,v.s,[]),o.Ob(1073742336,v.u,v.u,[]),o.Ob(1073742336,v.w,v.w,[]),o.Ob(1073742336,v.a,v.a,[]),o.Ob(1073742336,v.x,v.x,[]),o.Ob(1073742336,t.Y,t.Y,[]),o.Ob(1073742336,w.b,w.b,[]),o.Ob(1073742336,I.a,I.a,[]),o.Ob(1073742336,P,P,[]),o.Ob(1073742336,e,e,[]),o.Ob(256,f.q,"XSRF-TOKEN",[]),o.Ob(256,f.r,"X-XSRF-TOKEN",[]),o.Ob(256,t.je,{contexts:{general:{en:{loginErrorPattern:"Invalid ID",loginPlaceholder:"Insert your ID",passwordErrorPattern:"Invalid PIN",passwordPlaceholder:"Insert your PIN",submitLabel:"Access your account",forgotPassword:"Forgot your ID or PIN?",highlightInfo:"For us the future is now"},es:{loginErrorPattern:"ID invalido",loginPlaceholder:"Inserte su ID",passwordErrorPattern:"Contrase\xf1a incorrecta",passwordPlaceholder:"Inserte su contrase\xf1a",submitLabel:"Accede a su cuenta",forgotPassword:"\xbfOlvid\xf3 su ID o contrase\xf1a?",highlightInfo:"Para nosotros el futuro es ahora"},pt:{loginErrorPattern:"ID inv\xe1lido",loginPlaceholder:"Insira seu ID",passwordErrorPattern:"Senha incorreta",passwordPlaceholder:"Insira sua senha",submitLabel:"Acesse a sua conta",forgotPassword:"Esqueceu seu ID ou sua senha?",highlightInfo:"Para n\xf3s o futuro \xe9 agora"}}},default:{context:"general",cache:!0}},[]),o.Ob(1024,s.k,function(){return[[{path:"",component:O}]]},[])])})}}]);