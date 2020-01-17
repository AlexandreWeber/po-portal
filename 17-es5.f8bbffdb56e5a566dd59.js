(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"6e/0":function(l,n,o){"use strict";o.r(n);var u=o("CcnG"),e=function(){return function(){}}(),t=o("pMnS"),a=o("c/cy"),c=o("nMSU"),b=o("Lmtn"),i=o("ZYCi"),s=o("bpOf"),r=function(){return function(){}}(),p=u.Gb({encapsulation:2,styles:[],data:{}});function d(l){return u.cc(0,[(l()(),u.Ib(0,0,[["thfDocs",1]],null,69,"div",[["class","docs-api"]],null,null,null,null,null)),(l()(),u.Ib(1,0,null,null,2,"p",[["class","docs-api-module-import"]],null,null,null,null,null)),(l()(),u.Ib(2,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["import { PoFieldModule } from '@portinari/portinari-ui';"])),(l()(),u.Ib(4,0,null,null,11,"div",[["class","docs-api-class-description"]],null,null,null,null,null)),(l()(),u.Ib(5,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["M\xf3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,\npo-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload\ne po-url."])),(l()(),u.Ib(7,0,null,null,8,"blockquote",[],null,null,null,null,null)),(l()(),u.Ib(8,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["N\xe3o esque\xe7a de importar o m\xf3dulo "])),(l()(),u.Ib(10,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["FormsModule"])),(l()(),u.ac(-1,null,[" para usar os componentes de formul\xe1rios e caso esteja trabalhando com\nformul\xe1rios reativos, importe o m\xf3dulo "])),(l()(),u.Ib(13,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["ReactiveFormsModule"])),(l()(),u.ac(-1,null,[", ambos nativos do Angular."])),(l()(),u.Ib(16,0,null,null,1,"h3",[["class","docs-api-h3"]],null,null,null,null,null)),(l()(),u.ac(-1,null,["Componente"])),(l()(),u.Ib(18,0,null,null,2,"h4",[["class","docs-api-class-name"]],null,null,null,null,null)),(l()(),u.Ib(19,0,null,null,1,"code",[["class","doc-code"]],null,null,null,null,null)),(l()(),u.ac(-1,null,["PoComboOptionTemplateDirective"])),(l()(),u.Ib(21,0,null,null,42,"div",[["class","docs-api-class-description"]],null,null,null,null,null)),(l()(),u.Ib(22,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["Esta diretiva permite personalizar o conte\xfado dos itens exibidos na lista de op\xe7\xf5es do componente."])),(l()(),u.Ib(24,0,null,null,5,"blockquote",[],null,null,null,null,null)),(l()(),u.Ib(25,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["Quando utilizada em dispositivos "])),(l()(),u.Ib(27,0,null,null,1,"em",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["mobile"])),(l()(),u.ac(-1,null,[" ser\xe1 exibido o componente nativo."])),(l()(),u.Ib(30,0,null,null,12,"p",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["Para personalizar o conte\xfado de cada item da lista deve-se utilizar a diretiva "])),(l()(),u.Ib(32,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["p-combo-option-template"])),(l()(),u.ac(-1,null,[" com "])),(l()(),u.Ib(35,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["ng-template"])),(l()(),u.ac(-1,null,["\ndentro da "])),(l()(),u.Ib(38,0,null,null,1,"em",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["tag"])),(l()(),u.Ib(40,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["po-combo"])),(l()(),u.ac(-1,null,["."])),(l()(),u.Ib(43,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["Para obter a refer\xeancia do item atual utilize "])),(l()(),u.Ib(45,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["let-option"])),(l()(),u.ac(-1,null,[", com isso voc\xea ter\xe1 acesso aos valores e poder\xe1 personalizar sua exibi\xe7\xe3o."])),(l()(),u.Ib(48,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["Esta diretiva comp\xf5e-se de dois meios para uso, de forma expl\xedcita tal como em "])),(l()(),u.Ib(50,0,null,null,1,"em",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["syntax sugar"])),(l()(),u.ac(-1,null,[". Veja a seguir ambos, respectivamente:"])),(l()(),u.Ib(53,0,null,null,2,"pre",[],null,null,null,null,null)),(l()(),u.Ib(54,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.ac(-1,null,['...\n<po-combo\n  name="combo"\n  [(ngModel)]="combo"\n  [p-options]="options">\n    <ng-template p-combo-option-template let-option>\n      <option-template [option]="option"></option-template>\n    </ng-template>\n</po-combo>\n...\n'])),(l()(),u.Ib(56,0,null,null,2,"pre",[],null,null,null,null,null)),(l()(),u.Ib(57,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.ac(-1,null,['...\n<po-combo\n  name="combo"\n  [(ngModel)]="combo"\n  [p-options]="options">\n    <div *p-combo-option-template="let option">\n      <option-template [option]="option"></option-template>\n    </div>\n</po-combo>\n...\n'])),(l()(),u.Ib(59,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.ac(-1,null,["Para o caso de personaliza\xe7\xe3o de op\xe7\xf5es com agrupamentos, deve-se seguir a mesma orienta\xe7\xe3o acima. Por\xe9m, cabe ao desenvolvedor\na responsabilidade de estiliza\xe7\xe3o dos elementos da lista, tais como t\xedtulo e links dos grupos. Abaixo h\xe1 um exemplo de aplica\xe7\xe3o:"])),(l()(),u.Ib(61,0,null,null,2,"pre",[],null,null,null,null,null)),(l()(),u.Ib(62,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.ac(-1,null,['...\n<ng-template p-combo-option-template let-option>\n  <ng-container *ngIf="option.options; then optionsGroupTitle; else optionsGroupList"></ng-container>\n  <ng-template #optionsGroupTitle>\n    <p class="po-combo-item-title" [innerHtml]="option.label"></p>\n  </ng-template>\n  <ng-template #optionsGroupList>\n    <div class="po-combo-item">\n      <div class="po-row">\n        <po-avatar class="po-md-1" p-size="sm"></po-avatar>\n        <div class="po-md-11" [innerHtml]="option.label"></div>\n      </div>\n    </div>\n  </ng-template>\n</ng-template>\n...\n'])),(l()(),u.Ib(64,0,null,null,5,"div",[["class","docs-api-directive-selectors"]],null,null,null,null,null)),(l()(),u.Ib(65,0,null,null,1,"h4",[["class","docs-api-class-selector-label"]],null,null,null,null,null)),(l()(),u.ac(-1,null,["Seletor"])),(l()(),u.Ib(67,0,null,null,2,"pre",[["appCodeHighlight",""]],null,null,null,null,null)),u.Hb(68,4210688,null,0,s.a,[u.q],null,null),(l()(),u.ac(-1,null,["<[p-combo-option-template] >\n</[p-combo-option-template]>\n"]))],null,null)}u.Eb("sample-po-combo-option-template-doc",r,function(l){return u.cc(0,[(l()(),u.Ib(0,0,null,null,1,"sample-po-combo-option-template-doc",[],null,null,null,d,p)),u.Hb(1,49152,null,0,r,[],null,null)],null,null)},{},{},[]);var m=function(){function l(l,n){this.route=l,this.router=n,this.hideThfWebSample=!0,this.samplesLength=0,this.activeTab="\x1cdoc",this.actions=[{label:"Documenta\xe7\xe3o",action:this.goBack,icon:"po-icon-document-filled"},{label:"Colabore",action:this.improveDocs}]}return l.prototype.goBack=function(){this.router.navigate(["documentation"])},l.prototype.improveDocs=function(){window.open("https://github.com/portinariui/portinari-angular/tree/master/projects/ui/src/lib/components/po-field/po-combo/po-combo-option-template/po-combo-option-template.directive.ts","_blank")},l.prototype.ngOnInit=function(){var l=this;this.sub=this.route.queryParams.subscribe(function(n){var o=n.view;l.activeTab=o||"doc",l.hideThfWebSample=0===l.samplesLength})},l.prototype.ngOnDestroy=function(){this.sub.unsubscribe()},l}(),Q=u.Gb({encapsulation:2,styles:[],data:{}});function g(l){return u.cc(0,[(l()(),u.Ib(0,16777216,null,null,10,"po-page-default",[["p-title"," Combo Option Template"]],null,null,null,a.Qb,a.J)),u.Hb(1,1622016,null,0,b.Db,[u.gb,u.R,i.m],{actions:[0,"actions"],title:[1,"title"]},null),(l()(),u.Ib(2,0,null,0,8,"po-tabs",[["p-size","1"]],null,null,null,a.hc,a.ab)),u.Hb(3,49152,null,1,b.jc,[u.j],null,null),u.Yb(603979776,1,{tabs:1}),(l()(),u.Ib(5,0,null,0,3,"po-tab",[["p-label","Documenta\xe7\xe3o"]],null,null,null,a.fc,a.Y)),u.Hb(6,1097728,[[1,4]],0,b.ec,[u.q],{active:[0,"active"],label:[1,"label"]},null),(l()(),u.Ib(7,0,null,0,1,"sample-po-combo-option-template-doc",[],null,null,null,d,p)),u.Hb(8,49152,null,0,r,[],null,null),(l()(),u.Ib(9,0,null,0,1,"po-tab",[["p-label","Exemplos"]],null,null,null,a.fc,a.Y)),u.Hb(10,1097728,[[1,4]],0,b.ec,[u.q],{active:[0,"active"],hide:[1,"hide"],label:[2,"label"]},null)],function(l,n){var o=n.component;l(n,1,0,o.actions," Combo Option Template");l(n,6,0,o.activeTab.includes("doc"),"Documenta\xe7\xe3o");l(n,10,0,o.activeTab.includes("web"),o.hideThfWebSample,"Exemplos")},null)}var I=u.Eb("ng-component",m,function(l){return u.cc(0,[(l()(),u.Ib(0,0,null,null,1,"ng-component",[],null,null,null,g,Q)),u.Hb(1,245760,null,0,m,[i.a,i.m],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),h=o("Ip0R"),v=o("t/Na"),f=o("gIcY"),w=o("oVQh"),P=o("aVyw"),k=o("PCNd"),y=function(){return function(){}}();o.d(n,"DocPoComboOptionTemplateModuleNgFactory",function(){return D});var D=u.Fb(e,[],function(l){return u.Pb([u.Qb(512,u.m,u.rb,[[8,[t.a,a.pc,a.qc,a.rc,a.sc,a.tc,a.uc,a.wc,a.vc,a.xc,a.yc,a.zc,a.Ac,a.a,a.Bc,c.a,I]],[3,u.m],u.I]),u.Qb(4608,h.q,h.p,[u.E,[2,h.H]]),u.Qb(4608,v.l,v.r,[h.e,u.N,v.p]),u.Qb(4608,v.s,v.s,[v.l,v.q]),u.Qb(4608,b.v,b.v,[u.m,u.g,u.A]),u.Qb(4608,b.Bb,b.Bb,[b.v]),u.Qb(4608,b.Ce,b.Ce,[]),u.Qb(5120,v.a,function(l,n,o,u,e){return[l,new b.X(n,o),new b.Y(u,e)]},[v.s,b.Bb,b.v,b.Ce,b.v]),u.Qb(4608,v.o,v.o,[]),u.Qb(6144,v.m,null,[v.o]),u.Qb(4608,v.k,v.k,[v.m]),u.Qb(6144,v.b,null,[v.k]),u.Qb(4608,v.g,v.n,[v.b,u.A]),u.Qb(4608,v.c,v.c,[v.g]),u.Qb(4608,f.s,f.s,[]),u.Qb(4608,f.d,f.d,[]),u.Qb(4608,b.He,b.He,[]),u.Qb(4608,b.Le,b.Le,[]),u.Qb(4608,b.Me,b.Me,[]),u.Qb(4608,b.Sc,b.Sc,[]),u.Qb(4608,b.Wc,b.Wc,[]),u.Qb(4608,b.Ke,b.Ke,[]),u.Qb(4608,b.Ne,b.Ne,[]),u.Qb(4608,b.E,b.E,[b.v]),u.Qb(4608,h.g,h.g,[u.E]),u.Qb(4608,h.d,h.d,[u.E]),u.Qb(4608,h.f,h.f,[u.E]),u.Qb(4608,b.rc,b.rc,[]),u.Qb(4608,h.y,h.y,[]),u.Qb(4608,b.Gd,b.Gd,[v.c]),u.Qb(4608,b.Hd,b.Hd,[v.c]),u.Qb(4608,b.Jd,b.Jd,[v.c]),u.Qb(4608,b.Ud,b.Ud,[]),u.Qb(4608,b.X,b.X,[b.Bb,b.v]),u.Qb(4608,b.Y,b.Y,[b.Ce,b.v]),u.Qb(4608,b.bb,b.bb,[]),u.Qb(4608,w.y,w.y,[v.c]),u.Qb(4608,w.C,w.C,[v.c]),u.Qb(4608,w.H,w.H,[v.c]),u.Qb(4608,w.I,w.I,[w.H]),u.Qb(4608,w.M,w.M,[v.c]),u.Qb(4352,P.c,{language:"terraform",options:{keywords:["resource","provider","variable","output","module","true","false"],operators:["{","}","(",")","[","]","?",":"],tokenizer:{root:[["[a-z_$][\\w$]*",{cases:{"@keywords":"keyword","@default":"identifier"}}],{include:"@whitespace"},["\\d*\\.\\d+([eE][\\-+]?\\d+)?","number.float"],["0[x][0-9a-fA-F]+","number.hex"],["\\d+","number"],["[;,.]","delimiter"],['"([^"\\\\]|\\\\.)*$',"string.invalid"],['"',{token:"string.quote",bracket:"@open",next:"@string"}],["'[^\\\\']'","string"],["'","string.invalid"]],comment:[["[^\\/*]+","comment"],["[\\/*]","comment"],["[\\#.*]","comment"]],string:[['[^\\\\"\\$]+',"string"],["\\$","string.interpolated","@interpolated"],["\\\\.","string.escape.invalid"],['"',{token:"string.quote",bracket:"@close",next:"@pop"}]],whitespace:[["[ \\t\\r\\n]+","white"],["\\/\\/.*$","comment"],["\\#.*$","comment"]],interpolated:[["[{]",{token:"string.escape.curly",switchTo:"@interpolated_compound"}],["","","@pop"]]}}},[]),u.Qb(5120,u.d,function(l,n){return[b.Ec(l,n)]},[b.De,b.He]),u.Qb(5120,b.cb,b.Fc,[b.De,v.c,b.He]),u.Qb(1073742336,h.c,h.c,[]),u.Qb(1073742336,v.e,v.e,[]),u.Qb(1073742336,v.d,v.d,[]),u.Qb(1073742336,f.r,f.r,[]),u.Qb(1073742336,f.g,f.g,[]),u.Qb(1073742336,f.p,f.p,[]),u.Qb(1073742336,b.c,b.c,[]),u.Qb(1073742336,b.e,b.e,[]),u.Qb(1073742336,i.p,i.p,[[2,i.u],[2,i.m]]),u.Qb(1073742336,b.g,b.g,[]),u.Qb(1073742336,b.Ge,b.Ge,[]),u.Qb(1073742336,b.mb,b.mb,[]),u.Qb(1073742336,b.l,b.l,[]),u.Qb(1073742336,b.xc,b.xc,[]),u.Qb(1073742336,b.j,b.j,[]),u.Qb(1073742336,b.n,b.n,[]),u.Qb(1073742336,b.p,b.p,[]),u.Qb(1073742336,b.y,b.y,[]),u.Qb(1073742336,b.I,b.I,[]),u.Qb(1073742336,b.H,b.H,[]),u.Qb(1073742336,b.K,b.K,[]),u.Qb(1073742336,b.Nb,b.Nb,[]),u.Qb(1073742336,b.M,b.M,[]),u.Qb(1073742336,b.eb,b.eb,[]),u.Qb(1073742336,b.Pc,b.Pc,[]),u.Qb(1073742336,b.Oc,b.Oc,[]),u.Qb(1073742336,b.vb,b.vb,[]),u.Qb(1073742336,b.Pb,b.Pb,[]),u.Qb(1073742336,b.Vc,b.Vc,[]),u.Qb(1073742336,b.u,b.u,[]),u.Qb(1073742336,b.Xc,b.Xc,[]),u.Qb(1073742336,b.Yc,b.Yc,[]),u.Qb(1073742336,b.D,b.D,[]),u.Qb(1073742336,b.Ab,b.Ab,[]),u.Qb(1073742336,b.Vb,b.Vb,[]),u.Qb(1073742336,b.Lb,b.Lb,[]),u.Qb(1073742336,b.qc,b.qc,[]),u.Qb(1073742336,b.hc,b.hc,[]),u.Qb(1073742336,b.S,b.S,[]),u.Qb(1073742336,b.mc,b.mc,[]),u.Qb(1073742336,b.P,b.P,[]),u.Qb(1073742336,b.U,b.U,[]),u.Qb(1073742336,b.lb,b.lb,[]),u.Qb(1073742336,b.Nd,b.Nd,[]),u.Qb(1073742336,b.rb,b.rb,[]),u.Qb(1073742336,b.tb,b.tb,[]),u.Qb(1073742336,b.Wd,b.Wd,[]),u.Qb(1073742336,b.ae,b.ae,[]),u.Qb(1073742336,b.de,b.de,[]),u.Qb(1073742336,b.zb,b.zb,[]),u.Qb(1073742336,b.Hb,b.Hb,[]),u.Qb(1073742336,b.Xb,b.Xb,[]),u.Qb(1073742336,b.ac,b.ac,[]),u.Qb(1073742336,b.kc,b.kc,[]),u.Qb(1073742336,b.vc,b.vc,[]),u.Qb(1073742336,b.zc,b.zc,[]),u.Qb(1073742336,b.Dc,b.Dc,[]),u.Qb(1073742336,b.w,b.w,[]),u.Qb(1073742336,b.F,b.F,[]),u.Qb(1073742336,b.V,b.V,[]),u.Qb(1073742336,b.W,b.W,[]),u.Qb(1073742336,b.Z,b.Z,[]),u.Qb(1073742336,b.hb,b.hb,[]),u.Qb(1073742336,b.Jb,b.Jb,[]),u.Qb(1073742336,b.wb,b.wb,[]),u.Qb(1073742336,w.c,w.c,[]),u.Qb(1073742336,w.f,w.f,[]),u.Qb(1073742336,w.h,w.h,[]),u.Qb(1073742336,w.k,w.k,[]),u.Qb(1073742336,w.m,w.m,[]),u.Qb(1073742336,w.o,w.o,[]),u.Qb(1073742336,w.q,w.q,[]),u.Qb(1073742336,w.s,w.s,[]),u.Qb(1073742336,w.u,w.u,[]),u.Qb(1073742336,w.w,w.w,[]),u.Qb(1073742336,w.a,w.a,[]),u.Qb(1073742336,w.x,w.x,[]),u.Qb(1073742336,b.ab,b.ab,[]),u.Qb(1073742336,P.b,P.b,[]),u.Qb(1073742336,k.a,k.a,[]),u.Qb(1073742336,y,y,[]),u.Qb(1073742336,e,e,[]),u.Qb(256,v.p,"XSRF-TOKEN",[]),u.Qb(256,v.q,"X-XSRF-TOKEN",[]),u.Qb(256,b.De,{contexts:{general:{en:{loginErrorPattern:"Invalid ID",loginPlaceholder:"Insert your ID",passwordErrorPattern:"Invalid PIN",passwordPlaceholder:"Insert your PIN",submitLabel:"Access your account",forgotPassword:"Forgot your ID or PIN?",highlightInfo:"For us the future is now"},es:{loginErrorPattern:"ID invalido",loginPlaceholder:"Inserte su ID",passwordErrorPattern:"Contrase\xf1a incorrecta",passwordPlaceholder:"Inserte su contrase\xf1a",submitLabel:"Accede a su cuenta",forgotPassword:"\xbfOlvid\xf3 su ID o contrase\xf1a?",highlightInfo:"Para nosotros el futuro es ahora"},pt:{loginErrorPattern:"ID inv\xe1lido",loginPlaceholder:"Insira seu ID",passwordErrorPattern:"Senha incorreta",passwordPlaceholder:"Insira sua senha",submitLabel:"Acesse a sua conta",forgotPassword:"Esqueceu seu ID ou sua senha?",highlightInfo:"Para n\xf3s o futuro \xe9 agora"}}},default:{context:"general",cache:!0}},[]),u.Qb(1024,i.k,function(){return[[{path:"",component:m}]]},[])])})}}]);