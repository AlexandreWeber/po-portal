(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{kiTH:function(l,n,u){"use strict";u.r(n);var s=u("CcnG"),a=function(){return function(){}}(),e=u("pMnS"),o=u("c/cy"),c=u("nMSU"),r=u("Lmtn"),t=u("ZYCi"),i=function(){return function(){}}(),p=s.Gb({encapsulation:2,styles:[],data:{}});function d(l){return s.cc(0,[(l()(),s.Ib(0,0,[["thfDocs",1]],null,288,"div",[["class","docs-api"]],null,null,null,null,null)),(l()(),s.Ib(1,0,null,null,2,"p",[["class","docs-api-module-import"]],null,null,null,null,null)),(l()(),s.Ib(2,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),s.ac(-1,null,["import { PoCodeEditorModule } from '@portinari/portinari-code-editor';"])),(l()(),s.Ib(4,0,null,null,2,"div",[["class","docs-api-class-description"]],null,null,null,null,null)),(l()(),s.Ib(5,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),s.ac(-1,null,["M\xf3dulo do componente po-code-editor."])),(l()(),s.Ib(7,0,null,null,1,"h3",[["class","docs-api-h3"]],null,null,null,null,null)),(l()(),s.ac(-1,null,["Services"])),(l()(),s.Ib(9,0,null,null,2,"h4",[["class","docs-api-class-name"]],null,null,null,null,null)),(l()(),s.Ib(10,0,null,null,1,"code",[["class","doc-code"]],null,null,null,null,null)),(l()(),s.ac(-1,null,["PoCodeEditorRegister"])),(l()(),s.Ib(12,0,null,null,15,"div",[["class","docs-api-class-description"]],null,null,null,null,null)),(l()(),s.Ib(13,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),s.ac(-1,null,["Wrapper para registro de sintaxes customizadas para o po-code-editor."])),(l()(),s.Ib(15,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),s.ac(-1,null,["Para utiliza\xe7\xe3o do servi\xe7o de idiomas "])),(l()(),s.Ib(17,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),s.ac(-1,null,["PoCodeEditorRegister"])),(l()(),s.ac(-1,null,[",\ndeve-se importar o m\xf3dulo PoCodeEditorModule mesmo j\xe1 tendo importado\no m\xf3dulo PoModule.\nNa importa\xe7\xe3o opcionalmente pode ser invocado o m\xe9todo "])),(l()(),s.Ib(20,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),s.ac(-1,null,["forRegister"])),(l()(),s.ac(-1,null,[" informando um objeto para configura\xe7\xe3o."])),(l()(),s.Ib(23,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),s.ac(-1,null,["Exemplo de configura\xe7\xe3o:"])),(l()(),s.Ib(25,0,null,null,2,"pre",[],null,null,null,null,null)),(l()(),s.Ib(26,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),s.ac(-1,null,["import { PoCodeEditorModule, PoCodeEditorRegisterable } from '@portinari/portinari-code-editor';\n\nconst customEditor: PoCodeEditorRegisterable = {\n  language: 'terraform'\n  options: {\n    keywords: ['resource', 'provider', 'variable', 'output', 'module', 'true', 'false'],\n    operators: ['{', '}', '(', ')', '[', ']', '?', ':'],\n    symbols:  /[=><!~?:&|+\\-*\\/\\^%]+/,\n    escapes: /\\\\(?:[abfnrtv\\\\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,\n    tokenizer: {\n     ...\n    }\n  }\n};\nAs configura\xe7\xf5es para o registro de uma nova sintaxe no Monaco code editor podem ser encontradas em\n[**Monaco Editor**](https://microsoft.github.io/monaco-editor/playground.html#extending-language-services-custom-languages).\n\n@NgModule({\n  declarations: [],\n  imports: [\n    PoModule,\n    PoCodeEditorModule.forRegister(customEditor)\n  ],\n  bootstrap: [AppComponent]\n})\n"])),(l()(),s.Ib(28,0,null,null,1,"h4",[["class","docs-api-h5 docs-api-method-header"]],null,null,null,null,null)),(l()(),s.ac(-1,null,["Propriedades"])),(l()(),s.Ib(30,0,null,null,37,"table",[["class","docs-api-properties-table"]],null,null,null,null,null)),(l()(),s.Ib(31,0,null,null,8,"tr",[["class","docs-api-properties-header-row"]],null,null,null,null,null)),(l()(),s.Ib(32,0,null,null,1,"th",[["class","docs-api-properties-th"]],null,null,null,null,null)),(l()(),s.ac(-1,null,["Nome"])),(l()(),s.Ib(34,0,null,null,1,"th",[["class","docs-api-properties-th"]],null,null,null,null,null)),(l()(),s.ac(-1,null,["Tipo"])),(l()(),s.Ib(36,0,null,null,1,"th",[["class","docs-api-properties-th"]],null,null,null,null,null)),(l()(),s.ac(-1,null,["Padr\xe3o"])),(l()(),s.Ib(38,0,null,null,1,"th",[["class","docs-api-properties-th"]],null,null,null,null,null)),(l()(),s.ac(-1,null,["Descri\xe7\xe3o"])),(l()(),s.Ib(40,0,null,null,13,"tr",[["class","docs-api-properties-row"]],null,null,null,null,null)),(l()(),s.Ib(41,0,null,null,4,"td",[["class","docs-api-properties-name-cell"]],null,null,null,null,null)),(l()(),s.Ib(42,0,null,null,3,"div",[["class","docs-api-input-marker"]],null,null,null,null,null)),(l()(),s.Ib(43,0,null,null,2,"span",[["class","docs-api-input-alias"]],null,null,null,null,null)),(l()(),s.ac(-1,null,["p-language"])),(l()(),s.Ib(45,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),s.Ib(46,0,null,null,2,"td",[["class","docs-api-properties-type-cell"]],null,null,null,null,null)),(l()(),s.Ib(47,0,null,null,1,"code",[["class","docs-api-property-type string"],["pan",""]],null,null,null,null,null)),(l()(),s.ac(-1,null,["string"])),(l()(),s.Ib(49,0,null,null,1,"td",[["class","docs-api-property-default"]],null,null,null,null,null)),(l()(),s.ac(-1,null,["-"])),(l()(),s.Ib(51,0,null,null,2,"td",[["class","docs-api-property-description"]],null,null,null,null,null)),(l()(),s.Ib(52,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),s.ac(-1,null,["Sintaxe a ser registrada."])),(l()(),s.Ib(54,0,null,null,13,"tr",[["class","docs-api-properties-row"]],null,null,null,null,null)),(l()(),s.Ib(55,0,null,null,4,"td",[["class","docs-api-properties-name-cell"]],null,null,null,null,null)),(l()(),s.Ib(56,0,null,null,3,"div",[["class","docs-api-input-marker"]],null,null,null,null,null)),(l()(),s.Ib(57,0,null,null,2,"span",[["class","docs-api-input-alias"]],null,null,null,null,null)),(l()(),s.ac(-1,null,["p-options"])),(l()(),s.Ib(59,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),s.Ib(60,0,null,null,2,"td",[["class","docs-api-properties-type-cell"]],null,null,null,null,null)),(l()(),s.Ib(61,0,null,null,1,"code",[["class","docs-api-property-type PoCodeEditorRegisterableOptions"],["pan",""]],null,null,null,null,null)),(l()(),s.ac(-1,null,["PoCodeEditorRegisterableOptions"])),(l()(),s.Ib(63,0,null,null,1,"td",[["class","docs-api-property-default"]],null,null,null,null,null)),(l()(),s.ac(-1,null,["-"])),(l()(),s.Ib(65,0,null,null,2,"td",[["class","docs-api-property-description"]],null,null,null,null,null)),(l()(),s.Ib(66,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),s.ac(-1,null,["Op\xe7\xf5es da sintaxe para registro no po-code-editor"])),(l()(),s.Ib(68,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),s.ac(-1,null,["Interfaces"])),(l()(),s.Ib(70,0,null,null,2,"h4",[["class","docs-api-h4 docs-api-class-name"]],null,null,null,null,null)),(l()(),s.Ib(71,0,null,null,1,"code",[["class","doc-code"]],null,null,null,null,null)),(l()(),s.ac(-1,null,["PoCodeEditorRegisterable"])),(l()(),s.Ib(73,0,null,null,2,"div",[["class","docs-api-class-description"]],null,null,null,null,null)),(l()(),s.Ib(74,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),s.ac(-1,null,["Interface para configura\xe7\xe3o de novas sintaxes ao code editor."])),(l()(),s.Ib(76,0,null,null,1,"h4",[["class","docs-api-h5 docs-api-method-header"]],null,null,null,null,null)),(l()(),s.ac(-1,null,["Propriedades"])),(l()(),s.Ib(78,0,null,null,31,"table",[["class","docs-api-properties-table"]],null,null,null,null,null)),(l()(),s.Ib(79,0,null,null,6,"tr",[["class","docs-api-properties-header-row"]],null,null,null,null,null)),(l()(),s.Ib(80,0,null,null,1,"th",[["class","docs-api-properties-th"]],null,null,null,null,null)),(l()(),s.ac(-1,null,["Nome"])),(l()(),s.Ib(82,0,null,null,1,"th",[["class","docs-api-properties-th"]],null,null,null,null,null)),(l()(),s.ac(-1,null,["Tipo"])),(l()(),s.Ib(84,0,null,null,1,"th",[["class","docs-api-properties-th"]],null,null,null,null,null)),(l()(),s.ac(-1,null,["Descri\xe7\xe3o"])),(l()(),s.Ib(86,0,null,null,11,"tr",[["class","docs-api-properties-row"]],null,null,null,null,null)),(l()(),s.Ib(87,0,null,null,4,"td",[["class","docs-api-properties-name-cell"]],null,null,null,null,null)),(l()(),s.Ib(88,0,null,null,3,"div",[["class","docs-api-input-marker"]],null,null,null,null,null)),(l()(),s.Ib(89,0,null,null,2,"span",[["class","docs-api-input-alias"]],null,null,null,null,null)),(l()(),s.ac(-1,null,[" language"])),(l()(),s.Ib(91,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),s.Ib(92,0,null,null,2,"td",[["class","docs-api-properties-type-cell"]],null,null,null,null,null)),(l()(),s.Ib(93,0,null,null,1,"code",[["class","docs-api-property-type string"],["pan",""]],null,null,null,null,null)),(l()(),s.ac(-1,null,["string"])),(l()(),s.Ib(95,0,null,null,2,"td",[["class","docs-api-property-description"]],null,null,null,null,null)),(l()(),s.Ib(96,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),s.ac(-1,null,["Nome da sintaxe a ser registrada no code editor."])),(l()(),s.Ib(98,0,null,null,11,"tr",[["class","docs-api-properties-row"]],null,null,null,null,null)),(l()(),s.Ib(99,0,null,null,4,"td",[["class","docs-api-properties-name-cell"]],null,null,null,null,null)),(l()(),s.Ib(100,0,null,null,3,"div",[["class","docs-api-input-marker"]],null,null,null,null,null)),(l()(),s.Ib(101,0,null,null,2,"span",[["class","docs-api-input-alias"]],null,null,null,null,null)),(l()(),s.ac(-1,null,[" options"])),(l()(),s.Ib(103,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),s.Ib(104,0,null,null,2,"td",[["class","docs-api-properties-type-cell"]],null,null,null,null,null)),(l()(),s.Ib(105,0,null,null,1,"code",[["class","docs-api-property-type PoCodeEditorRegisterableOptions"],["pan",""]],null,null,null,null,null)),(l()(),s.ac(-1,null,["PoCodeEditorRegisterableOptions"])),(l()(),s.Ib(107,0,null,null,2,"td",[["class","docs-api-property-description"]],null,null,null,null,null)),(l()(),s.Ib(108,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),s.ac(-1,null,["Op\xe7\xf5es de configura\xe7\xe3o da sintaxe customizada."])),(l()(),s.Ib(110,0,null,null,2,"h4",[["class","docs-api-h4 docs-api-class-name"]],null,null,null,null,null)),(l()(),s.Ib(111,0,null,null,1,"code",[["class","doc-code"]],null,null,null,null,null)),(l()(),s.ac(-1,null,["PoCodeEditorRegisterableTokens"])),(l()(),s.Ib(113,0,null,null,2,"div",[["class","docs-api-class-description"]],null,null,null,null,null)),(l()(),s.Ib(114,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),s.ac(-1,null,["Interface para configura\xe7\xe3o de tokens de novas sintaxes ao code editor."])),(l()(),s.Ib(116,0,null,null,1,"h4",[["class","docs-api-h5 docs-api-method-header"]],null,null,null,null,null)),(l()(),s.ac(-1,null,["Propriedades"])),(l()(),s.Ib(118,0,null,null,94,"table",[["class","docs-api-properties-table"]],null,null,null,null,null)),(l()(),s.Ib(119,0,null,null,6,"tr",[["class","docs-api-properties-header-row"]],null,null,null,null,null)),(l()(),s.Ib(120,0,null,null,1,"th",[["class","docs-api-properties-th"]],null,null,null,null,null)),(l()(),s.ac(-1,null,["Nome"])),(l()(),s.Ib(122,0,null,null,1,"th",[["class","docs-api-properties-th"]],null,null,null,null,null)),(l()(),s.ac(-1,null,["Tipo"])),(l()(),s.Ib(124,0,null,null,1,"th",[["class","docs-api-properties-th"]],null,null,null,null,null)),(l()(),s.ac(-1,null,["Descri\xe7\xe3o"])),(l()(),s.Ib(126,0,null,null,14,"tr",[["class","docs-api-properties-row"]],null,null,null,null,null)),(l()(),s.Ib(127,0,null,null,4,"td",[["class","docs-api-properties-name-cell"]],null,null,null,null,null)),(l()(),s.Ib(128,0,null,null,3,"div",[["class","docs-api-input-marker"]],null,null,null,null,null)),(l()(),s.Ib(129,0,null,null,2,"span",[["class","docs-api-input-alias"]],null,null,null,null,null)),(l()(),s.ac(-1,null,[" comment"])),(l()(),s.Ib(131,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),s.Ib(132,0,null,null,2,"td",[["class","docs-api-properties-type-cell"]],null,null,null,null,null)),(l()(),s.Ib(133,0,null,null,1,"code",[["class","docs-api-property-type Array<any>"],["pan",""]],null,null,null,null,null)),(l()(),s.ac(-1,null,["Array<any>"])),(l()(),s.Ib(135,0,null,null,5,"td",[["class","docs-api-property-description"]],null,null,null,null,null)),(l()(),s.Ib(136,0,null,null,2,"em",[],null,null,null,null,null)),(l()(),s.Ib(137,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),s.ac(-1,null,["(opcional)"])),(l()(),s.Ib(139,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),s.ac(-1,null,["Tokenizer de coment\xe1rios."])),(l()(),s.Ib(141,0,null,null,14,"tr",[["class","docs-api-properties-row"]],null,null,null,null,null)),(l()(),s.Ib(142,0,null,null,4,"td",[["class","docs-api-properties-name-cell"]],null,null,null,null,null)),(l()(),s.Ib(143,0,null,null,3,"div",[["class","docs-api-input-marker"]],null,null,null,null,null)),(l()(),s.Ib(144,0,null,null,2,"span",[["class","docs-api-input-alias"]],null,null,null,null,null)),(l()(),s.ac(-1,null,[" interpolated"])),(l()(),s.Ib(146,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),s.Ib(147,0,null,null,2,"td",[["class","docs-api-properties-type-cell"]],null,null,null,null,null)),(l()(),s.Ib(148,0,null,null,1,"code",[["class","docs-api-property-type Array<any>"],["pan",""]],null,null,null,null,null)),(l()(),s.ac(-1,null,["Array<any>"])),(l()(),s.Ib(150,0,null,null,5,"td",[["class","docs-api-property-description"]],null,null,null,null,null)),(l()(),s.Ib(151,0,null,null,2,"em",[],null,null,null,null,null)),(l()(),s.Ib(152,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),s.ac(-1,null,["(opcional)"])),(l()(),s.Ib(154,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),s.ac(-1,null,["Sequ\xeancia de interpola\xe7\xe3o."])),(l()(),s.Ib(156,0,null,null,14,"tr",[["class","docs-api-properties-row"]],null,null,null,null,null)),(l()(),s.Ib(157,0,null,null,4,"td",[["class","docs-api-properties-name-cell"]],null,null,null,null,null)),(l()(),s.Ib(158,0,null,null,3,"div",[["class","docs-api-input-marker"]],null,null,null,null,null)),(l()(),s.Ib(159,0,null,null,2,"span",[["class","docs-api-input-alias"]],null,null,null,null,null)),(l()(),s.ac(-1,null,[" interpolatedCompound"])),(l()(),s.Ib(161,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),s.Ib(162,0,null,null,2,"td",[["class","docs-api-properties-type-cell"]],null,null,null,null,null)),(l()(),s.Ib(163,0,null,null,1,"code",[["class","docs-api-property-type Array<any>"],["pan",""]],null,null,null,null,null)),(l()(),s.ac(-1,null,["Array<any>"])),(l()(),s.Ib(165,0,null,null,5,"td",[["class","docs-api-property-description"]],null,null,null,null,null)),(l()(),s.Ib(166,0,null,null,2,"em",[],null,null,null,null,null)),(l()(),s.Ib(167,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),s.ac(-1,null,["(opcional)"])),(l()(),s.Ib(169,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),s.ac(-1,null,["Sequ\xeancia de interpola\xe7\xe3o composta."])),(l()(),s.Ib(171,0,null,null,11,"tr",[["class","docs-api-properties-row"]],null,null,null,null,null)),(l()(),s.Ib(172,0,null,null,4,"td",[["class","docs-api-properties-name-cell"]],null,null,null,null,null)),(l()(),s.Ib(173,0,null,null,3,"div",[["class","docs-api-input-marker"]],null,null,null,null,null)),(l()(),s.Ib(174,0,null,null,2,"span",[["class","docs-api-input-alias"]],null,null,null,null,null)),(l()(),s.ac(-1,null,[" root"])),(l()(),s.Ib(176,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),s.Ib(177,0,null,null,2,"td",[["class","docs-api-properties-type-cell"]],null,null,null,null,null)),(l()(),s.Ib(178,0,null,null,1,"code",[["class","docs-api-property-type Array<any>"],["pan",""]],null,null,null,null,null)),(l()(),s.ac(-1,null,["Array<any>"])),(l()(),s.Ib(180,0,null,null,2,"td",[["class","docs-api-property-description"]],null,null,null,null,null)),(l()(),s.Ib(181,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),s.ac(-1,null,["Principal tokenizer da sintaxe customizada."])),(l()(),s.Ib(183,0,null,null,14,"tr",[["class","docs-api-properties-row"]],null,null,null,null,null)),(l()(),s.Ib(184,0,null,null,4,"td",[["class","docs-api-properties-name-cell"]],null,null,null,null,null)),(l()(),s.Ib(185,0,null,null,3,"div",[["class","docs-api-input-marker"]],null,null,null,null,null)),(l()(),s.Ib(186,0,null,null,2,"span",[["class","docs-api-input-alias"]],null,null,null,null,null)),(l()(),s.ac(-1,null,[" string"])),(l()(),s.Ib(188,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),s.Ib(189,0,null,null,2,"td",[["class","docs-api-properties-type-cell"]],null,null,null,null,null)),(l()(),s.Ib(190,0,null,null,1,"code",[["class","docs-api-property-type Array<any>"],["pan",""]],null,null,null,null,null)),(l()(),s.ac(-1,null,["Array<any>"])),(l()(),s.Ib(192,0,null,null,5,"td",[["class","docs-api-property-description"]],null,null,null,null,null)),(l()(),s.Ib(193,0,null,null,2,"em",[],null,null,null,null,null)),(l()(),s.Ib(194,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),s.ac(-1,null,["(opcional)"])),(l()(),s.Ib(196,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),s.ac(-1,null,["Tokenizer de strings."])),(l()(),s.Ib(198,0,null,null,14,"tr",[["class","docs-api-properties-row"]],null,null,null,null,null)),(l()(),s.Ib(199,0,null,null,4,"td",[["class","docs-api-properties-name-cell"]],null,null,null,null,null)),(l()(),s.Ib(200,0,null,null,3,"div",[["class","docs-api-input-marker"]],null,null,null,null,null)),(l()(),s.Ib(201,0,null,null,2,"span",[["class","docs-api-input-alias"]],null,null,null,null,null)),(l()(),s.ac(-1,null,[" whitespace"])),(l()(),s.Ib(203,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),s.Ib(204,0,null,null,2,"td",[["class","docs-api-properties-type-cell"]],null,null,null,null,null)),(l()(),s.Ib(205,0,null,null,1,"code",[["class","docs-api-property-type Array<any>"],["pan",""]],null,null,null,null,null)),(l()(),s.ac(-1,null,["Array<any>"])),(l()(),s.Ib(207,0,null,null,5,"td",[["class","docs-api-property-description"]],null,null,null,null,null)),(l()(),s.Ib(208,0,null,null,2,"em",[],null,null,null,null,null)),(l()(),s.Ib(209,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),s.ac(-1,null,["(opcional)"])),(l()(),s.Ib(211,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),s.ac(-1,null,["Tokenizer de whitespaces."])),(l()(),s.Ib(213,0,null,null,2,"h4",[["class","docs-api-h4 docs-api-class-name"]],null,null,null,null,null)),(l()(),s.Ib(214,0,null,null,1,"code",[["class","doc-code"]],null,null,null,null,null)),(l()(),s.ac(-1,null,["PoCodeEditorRegisterableOptions"])),(l()(),s.Ib(216,0,null,null,2,"div",[["class","docs-api-class-description"]],null,null,null,null,null)),(l()(),s.Ib(217,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),s.ac(-1,null,["Interface para configura\xe7\xe3o de Op\xe7\xf5es de novas sintaxes ao code editor."])),(l()(),s.Ib(219,0,null,null,1,"h4",[["class","docs-api-h5 docs-api-method-header"]],null,null,null,null,null)),(l()(),s.ac(-1,null,["Propriedades"])),(l()(),s.Ib(221,0,null,null,67,"table",[["class","docs-api-properties-table"]],null,null,null,null,null)),(l()(),s.Ib(222,0,null,null,6,"tr",[["class","docs-api-properties-header-row"]],null,null,null,null,null)),(l()(),s.Ib(223,0,null,null,1,"th",[["class","docs-api-properties-th"]],null,null,null,null,null)),(l()(),s.ac(-1,null,["Nome"])),(l()(),s.Ib(225,0,null,null,1,"th",[["class","docs-api-properties-th"]],null,null,null,null,null)),(l()(),s.ac(-1,null,["Tipo"])),(l()(),s.Ib(227,0,null,null,1,"th",[["class","docs-api-properties-th"]],null,null,null,null,null)),(l()(),s.ac(-1,null,["Descri\xe7\xe3o"])),(l()(),s.Ib(229,0,null,null,11,"tr",[["class","docs-api-properties-row"]],null,null,null,null,null)),(l()(),s.Ib(230,0,null,null,4,"td",[["class","docs-api-properties-name-cell"]],null,null,null,null,null)),(l()(),s.Ib(231,0,null,null,3,"div",[["class","docs-api-input-marker"]],null,null,null,null,null)),(l()(),s.Ib(232,0,null,null,2,"span",[["class","docs-api-input-alias"]],null,null,null,null,null)),(l()(),s.ac(-1,null,[" escapes"])),(l()(),s.Ib(234,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),s.Ib(235,0,null,null,2,"td",[["class","docs-api-properties-type-cell"]],null,null,null,null,null)),(l()(),s.Ib(236,0,null,null,1,"code",[["class","docs-api-property-type RegExp"],["pan",""]],null,null,null,null,null)),(l()(),s.ac(-1,null,["RegExp"])),(l()(),s.Ib(238,0,null,null,2,"td",[["class","docs-api-property-description"]],null,null,null,null,null)),(l()(),s.Ib(239,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),s.ac(-1,null,["Escapes espec\xedficos da sintaxes."])),(l()(),s.Ib(241,0,null,null,11,"tr",[["class","docs-api-properties-row"]],null,null,null,null,null)),(l()(),s.Ib(242,0,null,null,4,"td",[["class","docs-api-properties-name-cell"]],null,null,null,null,null)),(l()(),s.Ib(243,0,null,null,3,"div",[["class","docs-api-input-marker"]],null,null,null,null,null)),(l()(),s.Ib(244,0,null,null,2,"span",[["class","docs-api-input-alias"]],null,null,null,null,null)),(l()(),s.ac(-1,null,[" keywords"])),(l()(),s.Ib(246,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),s.Ib(247,0,null,null,2,"td",[["class","docs-api-properties-type-cell"]],null,null,null,null,null)),(l()(),s.Ib(248,0,null,null,1,"code",[["class","docs-api-property-type Array<string>"],["pan",""]],null,null,null,null,null)),(l()(),s.ac(-1,null,["Array<string>"])),(l()(),s.Ib(250,0,null,null,2,"td",[["class","docs-api-property-description"]],null,null,null,null,null)),(l()(),s.Ib(251,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),s.ac(-1,null,["Palavras chaves da sintaxe."])),(l()(),s.Ib(253,0,null,null,11,"tr",[["class","docs-api-properties-row"]],null,null,null,null,null)),(l()(),s.Ib(254,0,null,null,4,"td",[["class","docs-api-properties-name-cell"]],null,null,null,null,null)),(l()(),s.Ib(255,0,null,null,3,"div",[["class","docs-api-input-marker"]],null,null,null,null,null)),(l()(),s.Ib(256,0,null,null,2,"span",[["class","docs-api-input-alias"]],null,null,null,null,null)),(l()(),s.ac(-1,null,[" operators"])),(l()(),s.Ib(258,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),s.Ib(259,0,null,null,2,"td",[["class","docs-api-properties-type-cell"]],null,null,null,null,null)),(l()(),s.Ib(260,0,null,null,1,"code",[["class","docs-api-property-type Array<string>"],["pan",""]],null,null,null,null,null)),(l()(),s.ac(-1,null,["Array<string>"])),(l()(),s.Ib(262,0,null,null,2,"td",[["class","docs-api-property-description"]],null,null,null,null,null)),(l()(),s.Ib(263,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),s.ac(-1,null,["Operadores espec\xedficos da sintaxe."])),(l()(),s.Ib(265,0,null,null,11,"tr",[["class","docs-api-properties-row"]],null,null,null,null,null)),(l()(),s.Ib(266,0,null,null,4,"td",[["class","docs-api-properties-name-cell"]],null,null,null,null,null)),(l()(),s.Ib(267,0,null,null,3,"div",[["class","docs-api-input-marker"]],null,null,null,null,null)),(l()(),s.Ib(268,0,null,null,2,"span",[["class","docs-api-input-alias"]],null,null,null,null,null)),(l()(),s.ac(-1,null,[" symbols"])),(l()(),s.Ib(270,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),s.Ib(271,0,null,null,2,"td",[["class","docs-api-properties-type-cell"]],null,null,null,null,null)),(l()(),s.Ib(272,0,null,null,1,"code",[["class","docs-api-property-type RegExp"],["pan",""]],null,null,null,null,null)),(l()(),s.ac(-1,null,["RegExp"])),(l()(),s.Ib(274,0,null,null,2,"td",[["class","docs-api-property-description"]],null,null,null,null,null)),(l()(),s.Ib(275,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),s.ac(-1,null,["S\xedmbolos espec\xedficos da sintaxes."])),(l()(),s.Ib(277,0,null,null,11,"tr",[["class","docs-api-properties-row"]],null,null,null,null,null)),(l()(),s.Ib(278,0,null,null,4,"td",[["class","docs-api-properties-name-cell"]],null,null,null,null,null)),(l()(),s.Ib(279,0,null,null,3,"div",[["class","docs-api-input-marker"]],null,null,null,null,null)),(l()(),s.Ib(280,0,null,null,2,"span",[["class","docs-api-input-alias"]],null,null,null,null,null)),(l()(),s.ac(-1,null,[" tokenizer"])),(l()(),s.Ib(282,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),s.Ib(283,0,null,null,2,"td",[["class","docs-api-properties-type-cell"]],null,null,null,null,null)),(l()(),s.Ib(284,0,null,null,1,"code",[["class","docs-api-property-type PoCodeEditorRegisterableTokens"],["pan",""]],null,null,null,null,null)),(l()(),s.ac(-1,null,["PoCodeEditorRegisterableTokens"])),(l()(),s.Ib(286,0,null,null,2,"td",[["class","docs-api-property-description"]],null,null,null,null,null)),(l()(),s.Ib(287,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),s.ac(-1,null,["Interface para recebimento de token espec\xedficos da sintaxe."]))],null,null)}s.Eb("sample-po-code-editor-register-doc",i,function(l){return s.cc(0,[(l()(),s.Ib(0,0,null,null,1,"sample-po-code-editor-register-doc",[],null,null,null,d,p)),s.Hb(1,49152,null,0,i,[],null,null)],null,null)},{},{},[]);var b=function(){function l(l,n){this.route=l,this.router=n,this.hideThfWebSample=!0,this.samplesLength=0,this.activeTab="\x1cdoc",this.actions=[{label:"Documenta\xe7\xe3o",action:this.goBack,icon:"po-icon-document-filled"},{label:"Colabore",action:this.improveDocs}]}return l.prototype.goBack=function(){this.router.navigate(["documentation"])},l.prototype.improveDocs=function(){window.open("https://github.com/portinariui/portinari-angular/tree/master/projects/code-editor/src/lib/components/po-code-editor/po-code-editor-register.service.ts","_blank")},l.prototype.ngOnInit=function(){var l=this;this.sub=this.route.queryParams.subscribe(function(n){var u=n.view;l.activeTab=u||"doc",l.hideThfWebSample=0===l.samplesLength})},l.prototype.ngOnDestroy=function(){this.sub.unsubscribe()},l}(),I=s.Gb({encapsulation:2,styles:[],data:{}});function m(l){return s.cc(0,[(l()(),s.Ib(0,16777216,null,null,10,"po-page-default",[["p-title"," Code Editor Register"]],null,null,null,o.Ib,o.G)),s.Hb(1,1622016,null,0,r.yb,[s.gb,s.R,t.m],{actions:[0,"actions"],title:[1,"title"]},null),(l()(),s.Ib(2,0,null,0,8,"po-tabs",[["p-size","1"]],null,null,null,o.Yb,o.W)),s.Hb(3,49152,null,1,r.ac,[s.j],null,null),s.Yb(603979776,1,{tabs:1}),(l()(),s.Ib(5,0,null,0,3,"po-tab",[["p-label","Documenta\xe7\xe3o"]],null,null,null,o.Wb,o.U)),s.Hb(6,1097728,[[1,4]],0,r.Wb,[s.q],{active:[0,"active"],label:[1,"label"]},null),(l()(),s.Ib(7,0,null,0,1,"sample-po-code-editor-register-doc",[],null,null,null,d,p)),s.Hb(8,49152,null,0,i,[],null,null),(l()(),s.Ib(9,0,null,0,1,"po-tab",[["p-label","Exemplos"]],null,null,null,o.Wb,o.U)),s.Hb(10,1097728,[[1,4]],0,r.Wb,[s.q],{active:[0,"active"],hide:[1,"hide"],label:[2,"label"]},null)],function(l,n){var u=n.component;l(n,1,0,u.actions," Code Editor Register");l(n,6,0,u.activeTab.includes("doc"),"Documenta\xe7\xe3o");l(n,10,0,u.activeTab.includes("web"),u.hideThfWebSample,"Exemplos")},null)}var g=s.Eb("ng-component",b,function(l){return s.cc(0,[(l()(),s.Ib(0,0,null,null,1,"ng-component",[],null,null,null,m,I)),s.Hb(1,245760,null,0,b,[t.a,t.m],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),Q=u("Ip0R"),h=u("t/Na"),y=u("gIcY"),f=u("oVQh"),v=u("aVyw"),w=u("PCNd"),P=function(){return function(){}}();u.d(n,"DocPoCodeEditorRegisterModuleNgFactory",function(){return k});var k=s.Fb(a,[],function(l){return s.Pb([s.Qb(512,s.m,s.rb,[[8,[e.a,o.mc,o.hc,o.gc,o.ic,o.jc,o.a,o.fc,o.kc,o.lc,c.a,g]],[3,s.m],s.I]),s.Qb(4608,Q.q,Q.p,[s.E,[2,Q.E]]),s.Qb(4608,h.m,h.s,[Q.e,s.N,h.q]),s.Qb(4608,h.t,h.t,[h.m,h.r]),s.Qb(4608,r.r,r.r,[s.m,s.g,s.A]),s.Qb(4608,r.wb,r.wb,[r.r]),s.Qb(4608,r.z,r.z,[r.r]),s.Qb(4608,r.Od,r.Od,[]),s.Qb(5120,h.a,function(l,n,u,s,a){return[l,new r.S(n,u),new r.T(s,a)]},[h.t,r.wb,r.z,r.Od,r.r]),s.Qb(4608,h.p,h.p,[]),s.Qb(6144,h.n,null,[h.p]),s.Qb(4608,h.l,h.l,[h.n]),s.Qb(6144,h.b,null,[h.l]),s.Qb(4608,h.g,h.o,[h.b,s.A]),s.Qb(4608,h.c,h.c,[h.g]),s.Qb(4608,y.s,y.s,[]),s.Qb(4608,y.d,y.d,[]),s.Qb(4608,r.Wd,r.Wd,[]),s.Qb(4608,r.Xd,r.Xd,[]),s.Qb(4608,r.wc,r.wc,[]),s.Qb(4608,r.yc,r.yc,[]),s.Qb(4608,Q.g,Q.g,[s.E]),s.Qb(4608,Q.d,Q.d,[s.E]),s.Qb(4608,Q.f,Q.f,[s.E]),s.Qb(4608,r.ic,r.ic,[]),s.Qb(4608,Q.x,Q.x,[]),s.Qb(4608,r.kd,r.kd,[]),s.Qb(4608,r.S,r.S,[r.wb,r.z]),s.Qb(4608,r.T,r.T,[r.Od,r.r]),s.Qb(4608,r.Bc,r.Bc,[]),s.Qb(4608,r.Vd,r.Vd,[]),s.Qb(4608,r.Yd,r.Yd,[]),s.Qb(4608,r.W,r.W,[]),s.Qb(4608,f.y,f.y,[h.c]),s.Qb(4608,f.C,f.C,[h.c]),s.Qb(4608,f.H,f.H,[h.c]),s.Qb(4608,f.I,f.I,[f.H]),s.Qb(4608,f.M,f.M,[h.c]),s.Qb(4352,v.c,{language:"terraform",options:{keywords:["resource","provider","variable","output","module","true","false"],operators:["{","}","(",")","[","]","?",":"],tokenizer:{root:[["[a-z_$][\\w$]*",{cases:{"@keywords":"keyword","@default":"identifier"}}],{include:"@whitespace"},["\\d*\\.\\d+([eE][\\-+]?\\d+)?","number.float"],["0[x][0-9a-fA-F]+","number.hex"],["\\d+","number"],["[;,.]","delimiter"],['"([^"\\\\]|\\\\.)*$',"string.invalid"],['"',{token:"string.quote",bracket:"@open",next:"@string"}],["'[^\\\\']'","string"],["'","string.invalid"]],comment:[["[^\\/*]+","comment"],["[\\/*]","comment"],["[\\#.*]","comment"]],string:[['[^\\\\"\\$]+',"string"],["\\$","string.interpolated","@interpolated"],["\\\\.","string.escape.invalid"],['"',{token:"string.quote",bracket:"@close",next:"@pop"}]],whitespace:[["[ \\t\\r\\n]+","white"],["\\/\\/.*$","comment"],["\\#.*$","comment"]],interpolated:[["[{]",{token:"string.escape.curly",switchTo:"@interpolated_compound"}],["","","@pop"]]}}},[]),s.Qb(5120,s.d,function(l,n){return[r.tc(l,n)]},[r.Ud,r.wc]),s.Qb(5120,r.X,r.uc,[r.Ud,h.c,r.wc]),s.Qb(1073742336,Q.c,Q.c,[]),s.Qb(1073742336,h.e,h.e,[]),s.Qb(1073742336,h.d,h.d,[]),s.Qb(1073742336,y.r,y.r,[]),s.Qb(1073742336,y.g,y.g,[]),s.Qb(1073742336,y.p,y.p,[]),s.Qb(1073742336,r.b,r.b,[]),s.Qb(1073742336,t.p,t.p,[[2,t.u],[2,t.m]]),s.Qb(1073742336,r.d,r.d,[]),s.Qb(1073742336,r.i,r.i,[]),s.Qb(1073742336,r.oc,r.oc,[]),s.Qb(1073742336,r.g,r.g,[]),s.Qb(1073742336,r.k,r.k,[]),s.Qb(1073742336,r.m,r.m,[]),s.Qb(1073742336,r.u,r.u,[]),s.Qb(1073742336,r.D,r.D,[]),s.Qb(1073742336,r.C,r.C,[]),s.Qb(1073742336,r.F,r.F,[]),s.Qb(1073742336,r.Ib,r.Ib,[]),s.Qb(1073742336,r.H,r.H,[]),s.Qb(1073742336,r.Z,r.Z,[]),s.Qb(1073742336,r.vc,r.vc,[]),s.Qb(1073742336,r.hb,r.hb,[]),s.Qb(1073742336,r.qb,r.qb,[]),s.Qb(1073742336,r.hc,r.hc,[]),s.Qb(1073742336,r.Yb,r.Yb,[]),s.Qb(1073742336,r.N,r.N,[]),s.Qb(1073742336,r.dc,r.dc,[]),s.Qb(1073742336,r.K,r.K,[]),s.Qb(1073742336,r.P,r.P,[]),s.Qb(1073742336,r.gb,r.gb,[]),s.Qb(1073742336,r.dd,r.dd,[]),s.Qb(1073742336,r.mb,r.mb,[]),s.Qb(1073742336,r.ob,r.ob,[]),s.Qb(1073742336,r.md,r.md,[]),s.Qb(1073742336,r.qd,r.qd,[]),s.Qb(1073742336,r.ud,r.ud,[]),s.Qb(1073742336,r.ub,r.ub,[]),s.Qb(1073742336,r.Cb,r.Cb,[]),s.Qb(1073742336,r.Gb,r.Gb,[]),s.Qb(1073742336,r.Pb,r.Pb,[]),s.Qb(1073742336,r.Sb,r.Sb,[]),s.Qb(1073742336,r.bc,r.bc,[]),s.Qb(1073742336,r.mc,r.mc,[]),s.Qb(1073742336,r.sc,r.sc,[]),s.Qb(1073742336,r.s,r.s,[]),s.Qb(1073742336,r.A,r.A,[]),s.Qb(1073742336,r.Q,r.Q,[]),s.Qb(1073742336,r.R,r.R,[]),s.Qb(1073742336,r.U,r.U,[]),s.Qb(1073742336,r.cb,r.cb,[]),s.Qb(1073742336,r.Eb,r.Eb,[]),s.Qb(1073742336,r.Pd,r.Pd,[]),s.Qb(1073742336,r.q,r.q,[]),s.Qb(1073742336,r.Qd,r.Qd,[]),s.Qb(1073742336,r.Rd,r.Rd,[]),s.Qb(1073742336,r.y,r.y,[]),s.Qb(1073742336,r.vb,r.vb,[]),s.Qb(1073742336,r.Nb,r.Nb,[]),s.Qb(1073742336,r.rb,r.rb,[]),s.Qb(1073742336,f.c,f.c,[]),s.Qb(1073742336,f.f,f.f,[]),s.Qb(1073742336,f.h,f.h,[]),s.Qb(1073742336,f.k,f.k,[]),s.Qb(1073742336,f.m,f.m,[]),s.Qb(1073742336,f.o,f.o,[]),s.Qb(1073742336,f.q,f.q,[]),s.Qb(1073742336,f.s,f.s,[]),s.Qb(1073742336,f.u,f.u,[]),s.Qb(1073742336,f.w,f.w,[]),s.Qb(1073742336,f.a,f.a,[]),s.Qb(1073742336,f.x,f.x,[]),s.Qb(1073742336,r.V,r.V,[]),s.Qb(1073742336,v.b,v.b,[]),s.Qb(1073742336,w.a,w.a,[]),s.Qb(1073742336,P,P,[]),s.Qb(1073742336,a,a,[]),s.Qb(256,h.q,"XSRF-TOKEN",[]),s.Qb(256,h.r,"X-XSRF-TOKEN",[]),s.Qb(256,r.Ud,{contexts:{general:{en:{loginErrorPattern:"Invalid ID",loginPlaceholder:"Insert your ID",passwordErrorPattern:"Invalid PIN",passwordPlaceholder:"Insert your PIN",submitLabel:"Access your account",forgotPassword:"Forgot your ID or PIN?",highlightInfo:"For us the future is now"},es:{loginErrorPattern:"ID invalido",loginPlaceholder:"Inserte su ID",passwordErrorPattern:"Contrase\xf1a incorrecta",passwordPlaceholder:"Inserte su contrase\xf1a",submitLabel:"Accede a su cuenta",forgotPassword:"\xbfOlvid\xf3 su ID o contrase\xf1a?",highlightInfo:"Para nosotros el futuro es ahora"},pt:{loginErrorPattern:"ID inv\xe1lido",loginPlaceholder:"Insira seu ID",passwordErrorPattern:"Senha incorreta",passwordPlaceholder:"Insira sua senha",submitLabel:"Acesse a sua conta",forgotPassword:"Esqueceu seu ID ou sua senha?",highlightInfo:"Para n\xf3s o futuro \xe9 agora"}}},default:{context:"general",cache:!0}},[]),s.Qb(1024,t.k,function(){return[[{path:"",component:b}]]},[])])})}}]);