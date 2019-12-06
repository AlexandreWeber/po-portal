(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{H9W4:function(l,n,e){"use strict";e.r(n);var u=e("8Y7J");class o{}var t=e("pMnS"),b=e("c/cy"),a=e("nMSU"),c=e("8xxD"),s=e("iInd"),i=e("bpOf");class r{}var p=u.Fb({encapsulation:2,styles:[],data:{}});function P(l){return u.bc(0,[(l()(),u.Hb(0,0,[["thfDocs",1]],null,53,"div",[["class","docs-api"]],null,null,null,null,null)),(l()(),u.Hb(1,0,null,null,2,"p",[["class","docs-api-module-import"]],null,null,null,null,null)),(l()(),u.Hb(2,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.Zb(-1,null,["import { PoFieldModule } from '@portinari/portinari-ui';"])),(l()(),u.Hb(4,0,null,null,2,"div",[["class","docs-api-class-description"]],null,null,null,null,null)),(l()(),u.Hb(5,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.Zb(-1,null,["M\xf3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,\npo-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload\ne po-url."])),(l()(),u.Hb(7,0,null,null,1,"h3",[["class","docs-api-h3"]],null,null,null,null,null)),(l()(),u.Zb(-1,null,["Componente"])),(l()(),u.Hb(9,0,null,null,2,"h4",[["class","docs-api-class-name"]],null,null,null,null,null)),(l()(),u.Hb(10,0,null,null,1,"code",[["class","doc-code"]],null,null,null,null,null)),(l()(),u.Zb(-1,null,["PoSelectOptionTemplateDirective"])),(l()(),u.Hb(12,0,null,null,35,"div",[["class","docs-api-class-description"]],null,null,null,null,null)),(l()(),u.Hb(13,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.Zb(-1,null,["Esta diretiva permite personalizar o conte\xfado dos itens exibidos na lista suspensa do componente."])),(l()(),u.Hb(15,0,null,null,5,"blockquote",[],null,null,null,null,null)),(l()(),u.Hb(16,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),u.Zb(-1,null,["Quando utilizada em "])),(l()(),u.Hb(18,0,null,null,1,"em",[],null,null,null,null,null)),(l()(),u.Zb(-1,null,["mobile"])),(l()(),u.Zb(-1,null,[" ser\xe1 exibido o componente nativo."])),(l()(),u.Hb(21,0,null,null,10,"p",[],null,null,null,null,null)),(l()(),u.Zb(-1,null,["Para personalizar o conte\xfado de cada item da lista deve-se utilizar a diretiva "])),(l()(),u.Hb(23,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.Zb(-1,null,["p-select-option-template"])),(l()(),u.Zb(-1,null,[" com "])),(l()(),u.Hb(26,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.Zb(-1,null,["ng-template"])),(l()(),u.Zb(-1,null,["\ndentro da tag "])),(l()(),u.Hb(29,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.Zb(-1,null,["po-select"])),(l()(),u.Zb(-1,null,["."])),(l()(),u.Hb(32,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),u.Zb(-1,null,["Para obter a refer\xeancia do item atual, use "])),(l()(),u.Hb(34,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.Zb(-1,null,["let-option"])),(l()(),u.Zb(-1,null,[", com isso voc\xea ter\xe1 acesso aos valores e poder\xe1 personalizar sua exibi\xe7\xe3o."])),(l()(),u.Hb(37,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),u.Zb(-1,null,["Esta diretiva comp\xf5e-se de dois meios para uso, de forma expl\xedcita tal como em "])),(l()(),u.Hb(39,0,null,null,1,"em",[],null,null,null,null,null)),(l()(),u.Zb(-1,null,["syntax sugar"])),(l()(),u.Zb(-1,null,[". Veja a seguir ambos, respectivamente:"])),(l()(),u.Hb(42,0,null,null,2,"pre",[],null,null,null,null,null)),(l()(),u.Hb(43,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.Zb(-1,null,['...\n<po-select\n  name="select"\n  [(ngModel)]="select"\n  [p-options]="options">\n    <ng-template p-select-option-template let-option>\n      <option-template [option]="option"></option-template>\n    </ng-template>\n</po-select>\n...\n'])),(l()(),u.Hb(45,0,null,null,2,"pre",[],null,null,null,null,null)),(l()(),u.Hb(46,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.Zb(-1,null,['...\n<po-select\n  name="select"\n  [(ngModel)]="select"\n  [p-options]="options">\n    <div *p-select-option-template="let option">\n      <option-template [option]="option"></option-template>\n    </div>\n</po-select>\n...\n'])),(l()(),u.Hb(48,0,null,null,5,"div",[["class","docs-api-directive-selectors"]],null,null,null,null,null)),(l()(),u.Hb(49,0,null,null,1,"h4",[["class","docs-api-class-selector-label"]],null,null,null,null,null)),(l()(),u.Zb(-1,null,["Seletor"])),(l()(),u.Hb(51,0,null,null,2,"pre",[["appCodeHighlight",""]],null,null,null,null,null)),u.Gb(52,4210688,null,0,i.a,[u.q],null,null),(l()(),u.Zb(-1,null,["<[p-select-option-template] >\n</[p-select-option-template]>\n"]))],null,null)}u.Db("sample-po-select-option-template-doc",r,function(l){return u.bc(0,[(l()(),u.Hb(0,0,null,null,1,"sample-po-select-option-template-doc",[],null,null,null,P,p)),u.Gb(1,49152,null,0,r,[],null,null)],null,null)},{},{},[]);class d{constructor(l,n){this.route=l,this.router=n,this.hideThfWebSample=!0,this.samplesLength=0,this.activeTab="\x1cdoc",this.actions=[{label:"Documenta\xe7\xe3o",action:this.goBack,icon:"po-icon-document-filled"},{label:"Colabore",action:this.improveDocs}]}goBack(){this.router.navigate(["documentation"])}improveDocs(){window.open("https://github.com/portinariui/portinari-angular/tree/master/projects/ui/src/lib/components/po-field/po-select/po-select-option-template/po-select-option-template.directive.ts","_blank")}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{const n=l.view;this.activeTab=n||"doc",this.hideThfWebSample=0===this.samplesLength})}ngOnDestroy(){this.sub.unsubscribe()}}var m=u.Fb({encapsulation:2,styles:[],data:{}});function h(l){return u.bc(0,[(l()(),u.Hb(0,16777216,null,null,10,"po-page-default",[["p-title"," Select Option Template"]],null,null,null,b.Qb,b.J)),u.Gb(1,1622016,null,0,c.Db,[u.fb,u.R,s.m],{actions:[0,"actions"],title:[1,"title"]},null),(l()(),u.Hb(2,0,null,0,8,"po-tabs",[["p-size","1"]],null,null,null,b.hc,b.ab)),u.Gb(3,49152,null,1,c.jc,[u.j],null,null),u.Xb(603979776,1,{tabs:1}),(l()(),u.Hb(5,0,null,0,3,"po-tab",[["p-label","Documenta\xe7\xe3o"]],null,null,null,b.fc,b.Y)),u.Gb(6,1097728,[[1,4]],0,c.ec,[u.q],{active:[0,"active"],label:[1,"label"]},null),(l()(),u.Hb(7,0,null,0,1,"sample-po-select-option-template-doc",[],null,null,null,P,p)),u.Gb(8,49152,null,0,r,[],null,null),(l()(),u.Hb(9,0,null,0,1,"po-tab",[["p-label","Exemplos"]],null,null,null,b.fc,b.Y)),u.Gb(10,1097728,[[1,4]],0,c.ec,[u.q],{active:[0,"active"],hide:[1,"hide"],label:[2,"label"]},null)],function(l,n){var e=n.component;l(n,1,0,e.actions," Select Option Template");l(n,6,0,e.activeTab.includes("doc"),"Documenta\xe7\xe3o");l(n,10,0,e.activeTab.includes("web"),e.hideThfWebSample,"Exemplos")},null)}var g=u.Db("ng-component",d,function(l){return u.bc(0,[(l()(),u.Hb(0,0,null,null,1,"ng-component",[],null,null,null,h,m)),u.Gb(1,245760,null,0,d,[s.a,s.m],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),v=e("SVse"),H=e("IheW"),f=e("s7LF"),w=e("XiHK"),I=e("YoMC"),D=e("PCNd");class x{}e.d(n,"DocPoSelectOptionTemplateModuleNgFactory",function(){return Z});var Z=u.Eb(o,[],function(l){return u.Ob([u.Pb(512,u.m,u.qb,[[8,[t.a,b.pc,b.qc,b.rc,b.sc,b.tc,b.uc,b.wc,b.vc,b.xc,b.yc,b.zc,b.a,b.Ac,a.a,g]],[3,u.m],u.I]),u.Pb(4608,v.q,v.p,[u.E,[2,v.H]]),u.Pb(4608,H.m,H.s,[v.e,u.N,H.q]),u.Pb(4608,H.t,H.t,[H.m,H.r]),u.Pb(4608,c.v,c.v,[u.m,u.g,u.A]),u.Pb(4608,c.Bb,c.Bb,[c.v]),u.Pb(4608,c.E,c.E,[c.v]),u.Pb(4608,c.xe,c.xe,[]),u.Pb(5120,H.a,function(l,n,e,u,o){return[l,new c.X(n,e),new c.Y(u,o)]},[H.t,c.Bb,c.E,c.xe,c.v]),u.Pb(4608,H.p,H.p,[]),u.Pb(6144,H.n,null,[H.p]),u.Pb(4608,H.l,H.l,[H.n]),u.Pb(6144,H.b,null,[H.l]),u.Pb(4608,H.g,H.o,[H.b,u.A]),u.Pb(4608,H.c,H.c,[H.g]),u.Pb(4608,f.s,f.s,[]),u.Pb(4608,f.d,f.d,[]),u.Pb(4608,c.De,c.De,[]),u.Pb(4608,c.He,c.He,[]),u.Pb(4608,c.Ie,c.Ie,[]),u.Pb(4608,c.Sc,c.Sc,[]),u.Pb(4608,c.Wc,c.Wc,[]),u.Pb(4608,c.Ge,c.Ge,[]),u.Pb(4608,c.Je,c.Je,[]),u.Pb(4608,v.g,v.g,[u.E]),u.Pb(4608,v.d,v.d,[u.E]),u.Pb(4608,v.f,v.f,[u.E]),u.Pb(4608,c.rc,c.rc,[]),u.Pb(4608,v.y,v.y,[]),u.Pb(4608,c.Rd,c.Rd,[]),u.Pb(4608,c.X,c.X,[c.Bb,c.E]),u.Pb(4608,c.Y,c.Y,[c.xe,c.v]),u.Pb(4608,c.bb,c.bb,[]),u.Pb(4608,w.y,w.y,[H.c]),u.Pb(4608,w.C,w.C,[H.c]),u.Pb(4608,w.H,w.H,[H.c]),u.Pb(4608,w.I,w.I,[w.H]),u.Pb(4608,w.M,w.M,[H.c]),u.Pb(4352,I.c,{language:"terraform",options:{keywords:["resource","provider","variable","output","module","true","false"],operators:["{","}","(",")","[","]","?",":"],tokenizer:{root:[["[a-z_$][\\w$]*",{cases:{"@keywords":"keyword","@default":"identifier"}}],{include:"@whitespace"},["\\d*\\.\\d+([eE][\\-+]?\\d+)?","number.float"],["0[x][0-9a-fA-F]+","number.hex"],["\\d+","number"],["[;,.]","delimiter"],['"([^"\\\\]|\\\\.)*$',"string.invalid"],['"',{token:"string.quote",bracket:"@open",next:"@string"}],["'[^\\\\']'","string"],["'","string.invalid"]],comment:[["[^\\/*]+","comment"],["[\\/*]","comment"],["[\\#.*]","comment"]],string:[['[^\\\\"\\$]+',"string"],["\\$","string.interpolated","@interpolated"],["\\\\.","string.escape.invalid"],['"',{token:"string.quote",bracket:"@close",next:"@pop"}]],whitespace:[["[ \\t\\r\\n]+","white"],["\\/\\/.*$","comment"],["\\#.*$","comment"]],interpolated:[["[{]",{token:"string.escape.curly",switchTo:"@interpolated_compound"}],["","","@pop"]]}}},[]),u.Pb(5120,u.d,function(l,n){return[c.Ec(l,n)]},[c.ye,c.De]),u.Pb(5120,c.cb,c.Fc,[c.ye,H.c,c.De]),u.Pb(1073742336,v.c,v.c,[]),u.Pb(1073742336,H.e,H.e,[]),u.Pb(1073742336,H.d,H.d,[]),u.Pb(1073742336,f.r,f.r,[]),u.Pb(1073742336,f.g,f.g,[]),u.Pb(1073742336,f.p,f.p,[]),u.Pb(1073742336,c.c,c.c,[]),u.Pb(1073742336,c.e,c.e,[]),u.Pb(1073742336,s.p,s.p,[[2,s.u],[2,s.m]]),u.Pb(1073742336,c.g,c.g,[]),u.Pb(1073742336,c.Ce,c.Ce,[]),u.Pb(1073742336,c.mb,c.mb,[]),u.Pb(1073742336,c.l,c.l,[]),u.Pb(1073742336,c.xc,c.xc,[]),u.Pb(1073742336,c.j,c.j,[]),u.Pb(1073742336,c.n,c.n,[]),u.Pb(1073742336,c.p,c.p,[]),u.Pb(1073742336,c.y,c.y,[]),u.Pb(1073742336,c.I,c.I,[]),u.Pb(1073742336,c.H,c.H,[]),u.Pb(1073742336,c.K,c.K,[]),u.Pb(1073742336,c.Nb,c.Nb,[]),u.Pb(1073742336,c.M,c.M,[]),u.Pb(1073742336,c.eb,c.eb,[]),u.Pb(1073742336,c.Pc,c.Pc,[]),u.Pb(1073742336,c.Oc,c.Oc,[]),u.Pb(1073742336,c.vb,c.vb,[]),u.Pb(1073742336,c.Pb,c.Pb,[]),u.Pb(1073742336,c.Vc,c.Vc,[]),u.Pb(1073742336,c.u,c.u,[]),u.Pb(1073742336,c.Xc,c.Xc,[]),u.Pb(1073742336,c.Yc,c.Yc,[]),u.Pb(1073742336,c.D,c.D,[]),u.Pb(1073742336,c.Ab,c.Ab,[]),u.Pb(1073742336,c.Vb,c.Vb,[]),u.Pb(1073742336,c.Lb,c.Lb,[]),u.Pb(1073742336,c.qc,c.qc,[]),u.Pb(1073742336,c.hc,c.hc,[]),u.Pb(1073742336,c.S,c.S,[]),u.Pb(1073742336,c.mc,c.mc,[]),u.Pb(1073742336,c.P,c.P,[]),u.Pb(1073742336,c.U,c.U,[]),u.Pb(1073742336,c.lb,c.lb,[]),u.Pb(1073742336,c.Kd,c.Kd,[]),u.Pb(1073742336,c.rb,c.rb,[]),u.Pb(1073742336,c.tb,c.tb,[]),u.Pb(1073742336,c.Td,c.Td,[]),u.Pb(1073742336,c.Xd,c.Xd,[]),u.Pb(1073742336,c.ae,c.ae,[]),u.Pb(1073742336,c.zb,c.zb,[]),u.Pb(1073742336,c.Hb,c.Hb,[]),u.Pb(1073742336,c.Xb,c.Xb,[]),u.Pb(1073742336,c.ac,c.ac,[]),u.Pb(1073742336,c.kc,c.kc,[]),u.Pb(1073742336,c.vc,c.vc,[]),u.Pb(1073742336,c.zc,c.zc,[]),u.Pb(1073742336,c.Dc,c.Dc,[]),u.Pb(1073742336,c.w,c.w,[]),u.Pb(1073742336,c.F,c.F,[]),u.Pb(1073742336,c.V,c.V,[]),u.Pb(1073742336,c.W,c.W,[]),u.Pb(1073742336,c.Z,c.Z,[]),u.Pb(1073742336,c.hb,c.hb,[]),u.Pb(1073742336,c.Jb,c.Jb,[]),u.Pb(1073742336,c.wb,c.wb,[]),u.Pb(1073742336,w.c,w.c,[]),u.Pb(1073742336,w.f,w.f,[]),u.Pb(1073742336,w.h,w.h,[]),u.Pb(1073742336,w.k,w.k,[]),u.Pb(1073742336,w.m,w.m,[]),u.Pb(1073742336,w.o,w.o,[]),u.Pb(1073742336,w.q,w.q,[]),u.Pb(1073742336,w.s,w.s,[]),u.Pb(1073742336,w.u,w.u,[]),u.Pb(1073742336,w.w,w.w,[]),u.Pb(1073742336,w.a,w.a,[]),u.Pb(1073742336,w.x,w.x,[]),u.Pb(1073742336,c.ab,c.ab,[]),u.Pb(1073742336,I.b,I.b,[]),u.Pb(1073742336,D.a,D.a,[]),u.Pb(1073742336,x,x,[]),u.Pb(1073742336,o,o,[]),u.Pb(256,H.q,"XSRF-TOKEN",[]),u.Pb(256,H.r,"X-XSRF-TOKEN",[]),u.Pb(256,c.ye,{contexts:{general:{en:{loginErrorPattern:"Invalid ID",loginPlaceholder:"Insert your ID",passwordErrorPattern:"Invalid PIN",passwordPlaceholder:"Insert your PIN",submitLabel:"Access your account",forgotPassword:"Forgot your ID or PIN?",highlightInfo:"For us the future is now"},es:{loginErrorPattern:"ID invalido",loginPlaceholder:"Inserte su ID",passwordErrorPattern:"Contrase\xf1a incorrecta",passwordPlaceholder:"Inserte su contrase\xf1a",submitLabel:"Accede a su cuenta",forgotPassword:"\xbfOlvid\xf3 su ID o contrase\xf1a?",highlightInfo:"Para nosotros el futuro es ahora"},pt:{loginErrorPattern:"ID inv\xe1lido",loginPlaceholder:"Insira seu ID",passwordErrorPattern:"Senha incorreta",passwordPlaceholder:"Insira sua senha",submitLabel:"Acesse a sua conta",forgotPassword:"Esqueceu seu ID ou sua senha?",highlightInfo:"Para n\xf3s o futuro \xe9 agora"}}},default:{context:"general",cache:!0}},[]),u.Pb(1024,s.k,function(){return[[{path:"",component:d}]]},[])])})}}]);