(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{jRYh:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class o{}var a=u("pMnS"),t=u("c/cy"),b=u("nMSU"),r=u("8xxD"),s=u("iInd"),i=u("bpOf");class c{}var d=e.Eb({encapsulation:2,styles:[],data:{}});function p(l){return e.ac(0,[(l()(),e.Gb(0,0,[["thfDocs",1]],null,115,"div",[["class","docs-api"]],null,null,null,null,null)),(l()(),e.Gb(1,0,null,null,2,"p",[["class","docs-api-module-import"]],null,null,null,null,null)),(l()(),e.Gb(2,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Yb(-1,null,["import { PoTableModule } from '@portinari/portinari-ui';"])),(l()(),e.Gb(4,0,null,null,2,"div",[["class","docs-api-class-description"]],null,null,null,null,null)),(l()(),e.Gb(5,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Yb(-1,null,["M\xf3dulo do componente po-table"])),(l()(),e.Gb(7,0,null,null,1,"h3",[["class","docs-api-h3"]],null,null,null,null,null)),(l()(),e.Yb(-1,null,["Componente"])),(l()(),e.Gb(9,0,null,null,2,"h4",[["class","docs-api-class-name"]],null,null,null,null,null)),(l()(),e.Gb(10,0,null,null,1,"code",[["class","doc-code"]],null,null,null,null,null)),(l()(),e.Yb(-1,null,["PoTableRowTemplateDirective"])),(l()(),e.Gb(12,0,null,null,64,"div",[["class","docs-api-class-description"]],null,null,null,null,null)),(l()(),e.Gb(13,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Yb(-1,null,["Esta diretiva permite que seja apresentada informa\xe7\xf5es adicionais a respeito de uma determinada linha de\ndados, de forma que possam ser exibidas e ocultadas atrav\xe9s do bot\xe3o de acionamento."])),(l()(),e.Gb(15,0,null,null,5,"blockquote",[],null,null,null,null,null)),(l()(),e.Gb(16,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),e.Yb(-1,null,["Quando utilizada, sobrep\xf5e as funcionalidade b\xe1sicas do "])),(l()(),e.Gb(18,0,null,null,1,"em",[],null,null,null,null,null)),(l()(),e.Yb(-1,null,["master-detail"])),(l()(),e.Yb(-1,null,["."])),(l()(),e.Gb(21,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),e.Yb(-1,null,["Em seu uso, deve-se utilizar como par\xe2metro a refer\xeancia da "])),(l()(),e.Gb(23,0,null,null,1,"em",[],null,null,null,null,null)),(l()(),e.Yb(-1,null,["linha"])),(l()(),e.Yb(-1,null,[" e/ou "])),(l()(),e.Gb(26,0,null,null,1,"em",[],null,null,null,null,null)),(l()(),e.Yb(-1,null,["\xedndice"])),(l()(),e.Yb(-1,null,[", sendo por padr\xe3o linha. Caso n\xe3o seja declarado,\no componente n\xe3o exibir\xe1 conte\xfado."])),(l()(),e.Gb(29,0,null,null,10,"ul",[],null,null,null,null,null)),(l()(),e.Gb(30,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),e.Yb(-1,null,["Linha: "])),(l()(),e.Gb(32,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Yb(-1,null,["row"])),(l()(),e.Yb(-1,null,[" determina o item da linha corrente."])),(l()(),e.Gb(35,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),e.Yb(-1,null,["\xcdndice: "])),(l()(),e.Gb(37,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Yb(-1,null,["rowIndex"])),(l()(),e.Yb(-1,null,[" determina o \xedndice da linha corrente."])),(l()(),e.Gb(40,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),e.Yb(-1,null,["Esta diretiva comp\xf5e-se de dois meios para uso, de forma expl\xedcita tal como em "])),(l()(),e.Gb(42,0,null,null,1,"em",[],null,null,null,null,null)),(l()(),e.Yb(-1,null,["syntax sugar"])),(l()(),e.Yb(-1,null,[". Veja a seguir ambos, respectivamente:"])),(l()(),e.Gb(45,0,null,null,2,"pre",[],null,null,null,null,null)),(l()(),e.Gb(46,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Yb(-1,null,['...\n<po-table\n  [p-columns]="columns"\n  [p-items]="items">\n    <ng-template p-table-row-template let-rowItem let-i="rowIndex" [p-table-row-template-show]="isShow">\n      <detail-row [row]="rowItem"></detail-row>\n    </ng-template>\n...\n'])),(l()(),e.Gb(48,0,null,null,2,"pre",[],null,null,null,null,null)),(l()(),e.Gb(49,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Yb(-1,null,['...\n<po-table\n  [p-columns]="columns"\n  [p-items]="items">\n    <div *p-table-row-template="let rowItem, let i=rowIndex">\n      <detail-row [row]="rowItem"></detail-row>\n    </div>\n...\n'])),(l()(),e.Gb(51,0,null,null,13,"p",[],null,null,null,null,null)),(l()(),e.Yb(-1,null,["A diretiva "])),(l()(),e.Gb(53,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.Yb(-1,null,["p-table-row-template"])),(l()(),e.Yb(-1,null,[", possibilita tamb\xe9m que determinada linha apresente ou n\xe3o seu "])),(l()(),e.Gb(56,0,null,null,1,"em",[],null,null,null,null,null)),(l()(),e.Yb(-1,null,["template"])),(l()(),e.Yb(-1,null,[". Para isto,\n\xe9 necess\xe1rio atribuir a refer\xeancia da fun\xe7\xe3o que faz esta verifica\xe7\xe3o, \xe0 propriedade "])),(l()(),e.Gb(59,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Yb(-1,null,["p-table-row-template-show"])),(l()(),e.Yb(-1,null,[",\na mesma deve retornar um valor do tipo "])),(l()(),e.Gb(62,0,null,null,1,"em",[],null,null,null,null,null)),(l()(),e.Yb(-1,null,["boolean"])),(l()(),e.Yb(-1,null,[". Veja o exemplo a seguir:"])),(l()(),e.Gb(65,0,null,null,2,"pre",[],null,null,null,null,null)),(l()(),e.Gb(66,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Yb(-1,null,["...\n@Component({\n   selector: 'app-root',\n   templateUrl: `\n     ...\n     <po-table\n       [p-columns]=\"columns\"\n       [p-items]=\"items\">\n         <ng-template p-table-row-template let-rowItem let-i=\"rowIndex\" [p-table-row-template-show]=\"isUndelivered\">\n           <detail-row [row]=\"rowItem\"> </detail-row>\n         </div>\n     ...\n   `\n})\nexport class AppComponent {\n   public dataTable = [{\n     code: 1200,\n     product: 'Rice',\n     costumer: 'Supermarket 1',\n     quantity: 3,\n     status: 'delivered',\n     license_plate: 'MDJD9191',\n     batch_product: 18041822,\n     driver: 'Jos\xe9 Oliveira'\n   }, {\n     code: 1355,\n     product: 'Bean',\n     costumer: 'Supermarket 2',\n     quantity: 1,\n     status: 'transport',\n     license_plate: 'XXA5454',\n     batch_product: 18041821,\n     driver: 'Francisco Pereira'\n   }];\n\n   isUndelivered(row, index: number) {\n     return row.status !== 'delivered';\n   }\n}\n"])),(l()(),e.Gb(68,0,null,null,8,"blockquote",[],null,null,null,null,null)),(l()(),e.Gb(69,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),e.Yb(-1,null,["No exemplo acima, somente ser\xe1 disponibilizado os detalhes de informa\xe7\xf5es nas linhas cujo o valor de "])),(l()(),e.Gb(71,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Yb(-1,null,["status"])),(l()(),e.Yb(-1,null,["\nn\xe3o correspondam \xe0 "])),(l()(),e.Gb(74,0,null,null,1,"em",[],null,null,null,null,null)),(l()(),e.Yb(-1,null,["delivered"])),(l()(),e.Yb(-1,null,["."])),(l()(),e.Gb(77,0,null,null,5,"div",[["class","docs-api-directive-selectors"]],null,null,null,null,null)),(l()(),e.Gb(78,0,null,null,1,"h4",[["class","docs-api-class-selector-label"]],null,null,null,null,null)),(l()(),e.Yb(-1,null,["Seletor"])),(l()(),e.Gb(80,0,null,null,2,"pre",[["appCodeHighlight",""]],null,null,null,null,null)),e.Fb(81,4210688,null,0,i.a,[e.q],null,null),(l()(),e.Yb(-1,null,['<[p-table-row-template]\n    p-table-row-template-show="(row: any, index: number) => boolean" >\n</[p-table-row-template]>\n'])),(l()(),e.Gb(83,0,null,null,1,"h4",[["class","docs-api-h5 docs-api-method-header"]],null,null,null,null,null)),(l()(),e.Yb(-1,null,["Propriedades"])),(l()(),e.Gb(85,0,null,null,30,"table",[["class","docs-api-properties-table"]],null,null,null,null,null)),(l()(),e.Gb(86,0,null,null,8,"tr",[["class","docs-api-properties-header-row"]],null,null,null,null,null)),(l()(),e.Gb(87,0,null,null,1,"th",[["class","docs-api-properties-th"]],null,null,null,null,null)),(l()(),e.Yb(-1,null,["Nome"])),(l()(),e.Gb(89,0,null,null,1,"th",[["class","docs-api-properties-th"]],null,null,null,null,null)),(l()(),e.Yb(-1,null,["Tipo"])),(l()(),e.Gb(91,0,null,null,1,"th",[["class","docs-api-properties-th"]],null,null,null,null,null)),(l()(),e.Yb(-1,null,["Padr\xe3o"])),(l()(),e.Gb(93,0,null,null,1,"th",[["class","docs-api-properties-th"]],null,null,null,null,null)),(l()(),e.Yb(-1,null,["Descri\xe7\xe3o"])),(l()(),e.Gb(95,0,null,null,20,"tr",[["class","docs-api-properties-row"]],null,null,null,null,null)),(l()(),e.Gb(96,0,null,null,4,"td",[["class","docs-api-properties-name-cell"]],null,null,null,null,null)),(l()(),e.Gb(97,0,null,null,3,"div",[["class","docs-api-input-marker"]],null,null,null,null,null)),(l()(),e.Gb(98,0,null,null,2,"span",[["class","docs-api-input-alias"]],null,null,null,null,null)),(l()(),e.Yb(-1,null,[" p-table-row-template-show"])),(l()(),e.Gb(100,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Gb(101,0,null,null,2,"td",[["class","docs-api-properties-type-cell"]],null,null,null,null,null)),(l()(),e.Gb(102,0,null,null,1,"code",[["class","docs-api-property-type (row: any, index: number) => boolean"],["pan",""]],null,null,null,null,null)),(l()(),e.Yb(-1,null,["(row: any, index: number) => boolean"])),(l()(),e.Gb(104,0,null,null,3,"td",[["class","docs-api-property-default"]],null,null,null,null,null)),(l()(),e.Gb(105,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),e.Gb(106,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Yb(-1,null,["true"])),(l()(),e.Gb(108,0,null,null,7,"td",[["class","docs-api-property-description"]],null,null,null,null,null)),(l()(),e.Gb(109,0,null,null,2,"em",[],null,null,null,null,null)),(l()(),e.Gb(110,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.Yb(-1,null,["(opcional)"])),(l()(),e.Gb(112,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Yb(-1,null,["Fun\xe7\xe3o que deve retornar um valor booleano, informando se apresentar\xe1 o template da linha.\nSer\xe3o passados o objeto da linha e o indice da mesma por par\xe2metro, para que seja poss\xedvel\ntomar uma decis\xe3o a partir do objeto da linha corrente."])),(l()(),e.Gb(114,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Yb(-1,null,["Caso n\xe3o ser utilizado esta propriedade, ser\xe3o apresentados todos os detalhes das linhas."]))],null,null)}e.Cb("sample-po-table-row-template-doc",c,function(l){return e.ac(0,[(l()(),e.Gb(0,0,null,null,1,"sample-po-table-row-template-doc",[],null,null,null,p,d)),e.Fb(1,49152,null,0,c,[],null,null)],null,null)},{},{},[]);class m{constructor(l,n){this.route=l,this.router=n,this.hideThfWebSample=!0,this.samplesLength=0,this.activeTab="\x1cdoc",this.actions=[{label:"Documenta\xe7\xe3o",action:this.goBack,icon:"po-icon-document-filled"},{label:"Colabore",action:this.improveDocs}]}goBack(){this.router.navigate(["documentation"])}improveDocs(){window.open("https://github.com/portinariui/portinari-angular/tree/master/projects/ui/src/lib/components/po-table/po-table-row-template/po-table-row-template.directive.ts","_blank")}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{const n=l.view;this.activeTab=n||"doc",this.hideThfWebSample=0===this.samplesLength})}ngOnDestroy(){this.sub.unsubscribe()}}var O=e.Eb({encapsulation:2,styles:[],data:{}});function h(l){return e.ac(0,[(l()(),e.Gb(0,16777216,null,null,10,"po-page-default",[["p-title"," Table Row Template"]],null,null,null,t.Ib,t.G)),e.Fb(1,1622016,null,0,r.yb,[e.eb,e.Q,s.m],{actions:[0,"actions"],title:[1,"title"]},null),(l()(),e.Gb(2,0,null,0,8,"po-tabs",[["p-size","1"]],null,null,null,t.Yb,t.W)),e.Fb(3,49152,null,1,r.ac,[e.j],null,null),e.Wb(603979776,1,{tabs:1}),(l()(),e.Gb(5,0,null,0,3,"po-tab",[["p-label","Documenta\xe7\xe3o"]],null,null,null,t.Wb,t.U)),e.Fb(6,1097728,[[1,4]],0,r.Wb,[e.q],{active:[0,"active"],label:[1,"label"]},null),(l()(),e.Gb(7,0,null,0,1,"sample-po-table-row-template-doc",[],null,null,null,p,d)),e.Fb(8,49152,null,0,c,[],null,null),(l()(),e.Gb(9,0,null,0,1,"po-tab",[["p-label","Exemplos"]],null,null,null,t.Wb,t.U)),e.Fb(10,1097728,[[1,4]],0,r.Wb,[e.q],{active:[0,"active"],hide:[1,"hide"],label:[2,"label"]},null)],function(l,n){var u=n.component;l(n,1,0,u.actions," Table Row Template");l(n,6,0,u.activeTab.includes("doc"),"Documenta\xe7\xe3o");l(n,10,0,u.activeTab.includes("web"),u.hideThfWebSample,"Exemplos")},null)}var w=e.Cb("ng-component",m,function(l){return e.ac(0,[(l()(),e.Gb(0,0,null,null,1,"ng-component",[],null,null,null,h,O)),e.Fb(1,245760,null,0,m,[s.a,s.m],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),G=u("SVse"),g=u("IheW"),v=u("s7LF"),Y=u("XiHK"),f=u("YoMC"),I=u("PCNd");class P{}u.d(n,"DocPoTableRowTemplateModuleNgFactory",function(){return y});var y=e.Db(o,[],function(l){return e.Nb([e.Ob(512,e.m,e.pb,[[8,[a.a,t.mc,t.hc,t.gc,t.ic,t.jc,t.a,t.fc,t.kc,t.lc,b.a,w]],[3,e.m],e.I]),e.Ob(4608,G.q,G.p,[e.E,[2,G.E]]),e.Ob(4608,g.m,g.s,[G.e,e.N,g.q]),e.Ob(4608,g.t,g.t,[g.m,g.r]),e.Ob(4608,r.r,r.r,[e.m,e.g,e.A]),e.Ob(4608,r.wb,r.wb,[r.r]),e.Ob(4608,r.z,r.z,[r.r]),e.Ob(4608,r.Od,r.Od,[]),e.Ob(5120,g.a,function(l,n,u,e,o){return[l,new r.S(n,u),new r.T(e,o)]},[g.t,r.wb,r.z,r.Od,r.r]),e.Ob(4608,g.p,g.p,[]),e.Ob(6144,g.n,null,[g.p]),e.Ob(4608,g.l,g.l,[g.n]),e.Ob(6144,g.b,null,[g.l]),e.Ob(4608,g.g,g.o,[g.b,e.A]),e.Ob(4608,g.c,g.c,[g.g]),e.Ob(4608,v.s,v.s,[]),e.Ob(4608,v.d,v.d,[]),e.Ob(4608,r.Wd,r.Wd,[]),e.Ob(4608,r.Xd,r.Xd,[]),e.Ob(4608,r.wc,r.wc,[]),e.Ob(4608,r.yc,r.yc,[]),e.Ob(4608,G.g,G.g,[e.E]),e.Ob(4608,G.d,G.d,[e.E]),e.Ob(4608,G.f,G.f,[e.E]),e.Ob(4608,r.ic,r.ic,[]),e.Ob(4608,G.x,G.x,[]),e.Ob(4608,r.kd,r.kd,[]),e.Ob(4608,r.S,r.S,[r.wb,r.z]),e.Ob(4608,r.T,r.T,[r.Od,r.r]),e.Ob(4608,r.Bc,r.Bc,[]),e.Ob(4608,r.Vd,r.Vd,[]),e.Ob(4608,r.Yd,r.Yd,[]),e.Ob(4608,r.W,r.W,[]),e.Ob(4608,Y.y,Y.y,[g.c]),e.Ob(4608,Y.C,Y.C,[g.c]),e.Ob(4608,Y.H,Y.H,[g.c]),e.Ob(4608,Y.I,Y.I,[Y.H]),e.Ob(4608,Y.M,Y.M,[g.c]),e.Ob(4352,f.c,{language:"terraform",options:{keywords:["resource","provider","variable","output","module","true","false"],operators:["{","}","(",")","[","]","?",":"],tokenizer:{root:[["[a-z_$][\\w$]*",{cases:{"@keywords":"keyword","@default":"identifier"}}],{include:"@whitespace"},["\\d*\\.\\d+([eE][\\-+]?\\d+)?","number.float"],["0[x][0-9a-fA-F]+","number.hex"],["\\d+","number"],["[;,.]","delimiter"],['"([^"\\\\]|\\\\.)*$',"string.invalid"],['"',{token:"string.quote",bracket:"@open",next:"@string"}],["'[^\\\\']'","string"],["'","string.invalid"]],comment:[["[^\\/*]+","comment"],["[\\/*]","comment"],["[\\#.*]","comment"]],string:[['[^\\\\"\\$]+',"string"],["\\$","string.interpolated","@interpolated"],["\\\\.","string.escape.invalid"],['"',{token:"string.quote",bracket:"@close",next:"@pop"}]],whitespace:[["[ \\t\\r\\n]+","white"],["\\/\\/.*$","comment"],["\\#.*$","comment"]],interpolated:[["[{]",{token:"string.escape.curly",switchTo:"@interpolated_compound"}],["","","@pop"]]}}},[]),e.Ob(5120,e.d,function(l,n){return[r.tc(l,n)]},[r.Ud,r.wc]),e.Ob(5120,r.X,r.uc,[r.Ud,g.c,r.wc]),e.Ob(1073742336,G.c,G.c,[]),e.Ob(1073742336,g.e,g.e,[]),e.Ob(1073742336,g.d,g.d,[]),e.Ob(1073742336,v.r,v.r,[]),e.Ob(1073742336,v.g,v.g,[]),e.Ob(1073742336,v.p,v.p,[]),e.Ob(1073742336,r.b,r.b,[]),e.Ob(1073742336,s.p,s.p,[[2,s.u],[2,s.m]]),e.Ob(1073742336,r.d,r.d,[]),e.Ob(1073742336,r.i,r.i,[]),e.Ob(1073742336,r.oc,r.oc,[]),e.Ob(1073742336,r.g,r.g,[]),e.Ob(1073742336,r.k,r.k,[]),e.Ob(1073742336,r.m,r.m,[]),e.Ob(1073742336,r.u,r.u,[]),e.Ob(1073742336,r.D,r.D,[]),e.Ob(1073742336,r.C,r.C,[]),e.Ob(1073742336,r.F,r.F,[]),e.Ob(1073742336,r.Ib,r.Ib,[]),e.Ob(1073742336,r.H,r.H,[]),e.Ob(1073742336,r.Z,r.Z,[]),e.Ob(1073742336,r.vc,r.vc,[]),e.Ob(1073742336,r.hb,r.hb,[]),e.Ob(1073742336,r.qb,r.qb,[]),e.Ob(1073742336,r.hc,r.hc,[]),e.Ob(1073742336,r.Yb,r.Yb,[]),e.Ob(1073742336,r.N,r.N,[]),e.Ob(1073742336,r.dc,r.dc,[]),e.Ob(1073742336,r.K,r.K,[]),e.Ob(1073742336,r.P,r.P,[]),e.Ob(1073742336,r.gb,r.gb,[]),e.Ob(1073742336,r.dd,r.dd,[]),e.Ob(1073742336,r.mb,r.mb,[]),e.Ob(1073742336,r.ob,r.ob,[]),e.Ob(1073742336,r.md,r.md,[]),e.Ob(1073742336,r.qd,r.qd,[]),e.Ob(1073742336,r.ud,r.ud,[]),e.Ob(1073742336,r.ub,r.ub,[]),e.Ob(1073742336,r.Cb,r.Cb,[]),e.Ob(1073742336,r.Gb,r.Gb,[]),e.Ob(1073742336,r.Pb,r.Pb,[]),e.Ob(1073742336,r.Sb,r.Sb,[]),e.Ob(1073742336,r.bc,r.bc,[]),e.Ob(1073742336,r.mc,r.mc,[]),e.Ob(1073742336,r.sc,r.sc,[]),e.Ob(1073742336,r.s,r.s,[]),e.Ob(1073742336,r.A,r.A,[]),e.Ob(1073742336,r.Q,r.Q,[]),e.Ob(1073742336,r.R,r.R,[]),e.Ob(1073742336,r.U,r.U,[]),e.Ob(1073742336,r.cb,r.cb,[]),e.Ob(1073742336,r.Eb,r.Eb,[]),e.Ob(1073742336,r.Pd,r.Pd,[]),e.Ob(1073742336,r.q,r.q,[]),e.Ob(1073742336,r.Qd,r.Qd,[]),e.Ob(1073742336,r.Rd,r.Rd,[]),e.Ob(1073742336,r.y,r.y,[]),e.Ob(1073742336,r.vb,r.vb,[]),e.Ob(1073742336,r.Nb,r.Nb,[]),e.Ob(1073742336,r.rb,r.rb,[]),e.Ob(1073742336,Y.c,Y.c,[]),e.Ob(1073742336,Y.f,Y.f,[]),e.Ob(1073742336,Y.h,Y.h,[]),e.Ob(1073742336,Y.k,Y.k,[]),e.Ob(1073742336,Y.m,Y.m,[]),e.Ob(1073742336,Y.o,Y.o,[]),e.Ob(1073742336,Y.q,Y.q,[]),e.Ob(1073742336,Y.s,Y.s,[]),e.Ob(1073742336,Y.u,Y.u,[]),e.Ob(1073742336,Y.w,Y.w,[]),e.Ob(1073742336,Y.a,Y.a,[]),e.Ob(1073742336,Y.x,Y.x,[]),e.Ob(1073742336,r.V,r.V,[]),e.Ob(1073742336,f.b,f.b,[]),e.Ob(1073742336,I.a,I.a,[]),e.Ob(1073742336,P,P,[]),e.Ob(1073742336,o,o,[]),e.Ob(256,g.q,"XSRF-TOKEN",[]),e.Ob(256,g.r,"X-XSRF-TOKEN",[]),e.Ob(256,r.Ud,{contexts:{general:{en:{loginErrorPattern:"Invalid ID",loginPlaceholder:"Insert your ID",passwordErrorPattern:"Invalid PIN",passwordPlaceholder:"Insert your PIN",submitLabel:"Access your account",forgotPassword:"Forgot your ID or PIN?",highlightInfo:"For us the future is now"},es:{loginErrorPattern:"ID invalido",loginPlaceholder:"Inserte su ID",passwordErrorPattern:"Contrase\xf1a incorrecta",passwordPlaceholder:"Inserte su contrase\xf1a",submitLabel:"Accede a su cuenta",forgotPassword:"\xbfOlvid\xf3 su ID o contrase\xf1a?",highlightInfo:"Para nosotros el futuro es ahora"},pt:{loginErrorPattern:"ID inv\xe1lido",loginPlaceholder:"Insira seu ID",passwordErrorPattern:"Senha incorreta",passwordPlaceholder:"Insira sua senha",submitLabel:"Acesse a sua conta",forgotPassword:"Esqueceu seu ID ou sua senha?",highlightInfo:"Para n\xf3s o futuro \xe9 agora"}}},default:{context:"general",cache:!0}},[]),e.Ob(1024,s.k,function(){return[[{path:"",component:m}]]},[])])})}}]);