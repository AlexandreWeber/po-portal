(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{kiTH:function(l,n,u){"use strict";u.r(n);var s=u("8Y7J");class e{}var o=u("pMnS"),a=u("c/cy"),r=u("nMSU"),t=u("8xxD"),c=u("iInd");class p{}var i=s.Eb({encapsulation:2,styles:[],data:{}});function b(l){return s.ac(0,[(l()(),s.Gb(0,0,[["thfDocs",1]],null,288,"div",[["class","docs-api"]],null,null,null,null,null)),(l()(),s.Gb(1,0,null,null,2,"p",[["class","docs-api-module-import"]],null,null,null,null,null)),(l()(),s.Gb(2,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),s.Yb(-1,null,["import { PoCodeEditorModule } from '@portinari/portinari-code-editor';"])),(l()(),s.Gb(4,0,null,null,2,"div",[["class","docs-api-class-description"]],null,null,null,null,null)),(l()(),s.Gb(5,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),s.Yb(-1,null,["M\xf3dulo do componente po-code-editor."])),(l()(),s.Gb(7,0,null,null,1,"h3",[["class","docs-api-h3"]],null,null,null,null,null)),(l()(),s.Yb(-1,null,["Services"])),(l()(),s.Gb(9,0,null,null,2,"h4",[["class","docs-api-class-name"]],null,null,null,null,null)),(l()(),s.Gb(10,0,null,null,1,"code",[["class","doc-code"]],null,null,null,null,null)),(l()(),s.Yb(-1,null,["PoCodeEditorRegister"])),(l()(),s.Gb(12,0,null,null,15,"div",[["class","docs-api-class-description"]],null,null,null,null,null)),(l()(),s.Gb(13,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),s.Yb(-1,null,["Wrapper para registro de sintaxes customizadas para o po-code-editor."])),(l()(),s.Gb(15,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),s.Yb(-1,null,["Para utiliza\xe7\xe3o do servi\xe7o de idiomas "])),(l()(),s.Gb(17,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),s.Yb(-1,null,["PoCodeEditorRegister"])),(l()(),s.Yb(-1,null,[",\ndeve-se importar o m\xf3dulo PoCodeEditorModule mesmo j\xe1 tendo importado\no m\xf3dulo PoModule.\nNa importa\xe7\xe3o opcionalmente pode ser invocado o m\xe9todo "])),(l()(),s.Gb(20,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),s.Yb(-1,null,["forRegister"])),(l()(),s.Yb(-1,null,[" informando um objeto para configura\xe7\xe3o."])),(l()(),s.Gb(23,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),s.Yb(-1,null,["Exemplo de configura\xe7\xe3o:"])),(l()(),s.Gb(25,0,null,null,2,"pre",[],null,null,null,null,null)),(l()(),s.Gb(26,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),s.Yb(-1,null,["import { PoCodeEditorModule, PoCodeEditorRegisterable } from '@portinari/portinari-code-editor';\n\nconst customEditor: PoCodeEditorRegisterable = {\n  language: 'terraform'\n  options: {\n    keywords: ['resource', 'provider', 'variable', 'output', 'module', 'true', 'false'],\n    operators: ['{', '}', '(', ')', '[', ']', '?', ':'],\n    symbols:  /[=><!~?:&|+\\-*\\/\\^%]+/,\n    escapes: /\\\\(?:[abfnrtv\\\\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,\n    tokenizer: {\n     ...\n    }\n  }\n};\nAs configura\xe7\xf5es para o registro de uma nova sintaxe no Monaco code editor podem ser encontradas em\n[**Monaco Editor**](https://microsoft.github.io/monaco-editor/playground.html#extending-language-services-custom-languages).\n\n@NgModule({\n  declarations: [],\n  imports: [\n    PoModule,\n    PoCodeEditorModule.forRegister(customEditor)\n  ],\n  bootstrap: [AppComponent]\n})\n"])),(l()(),s.Gb(28,0,null,null,1,"h4",[["class","docs-api-h5 docs-api-method-header"]],null,null,null,null,null)),(l()(),s.Yb(-1,null,["Propriedades"])),(l()(),s.Gb(30,0,null,null,37,"table",[["class","docs-api-properties-table"]],null,null,null,null,null)),(l()(),s.Gb(31,0,null,null,8,"tr",[["class","docs-api-properties-header-row"]],null,null,null,null,null)),(l()(),s.Gb(32,0,null,null,1,"th",[["class","docs-api-properties-th"]],null,null,null,null,null)),(l()(),s.Yb(-1,null,["Nome"])),(l()(),s.Gb(34,0,null,null,1,"th",[["class","docs-api-properties-th"]],null,null,null,null,null)),(l()(),s.Yb(-1,null,["Tipo"])),(l()(),s.Gb(36,0,null,null,1,"th",[["class","docs-api-properties-th"]],null,null,null,null,null)),(l()(),s.Yb(-1,null,["Padr\xe3o"])),(l()(),s.Gb(38,0,null,null,1,"th",[["class","docs-api-properties-th"]],null,null,null,null,null)),(l()(),s.Yb(-1,null,["Descri\xe7\xe3o"])),(l()(),s.Gb(40,0,null,null,13,"tr",[["class","docs-api-properties-row"]],null,null,null,null,null)),(l()(),s.Gb(41,0,null,null,4,"td",[["class","docs-api-properties-name-cell"]],null,null,null,null,null)),(l()(),s.Gb(42,0,null,null,3,"div",[["class","docs-api-input-marker"]],null,null,null,null,null)),(l()(),s.Gb(43,0,null,null,2,"span",[["class","docs-api-input-alias"]],null,null,null,null,null)),(l()(),s.Yb(-1,null,["p-language"])),(l()(),s.Gb(45,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),s.Gb(46,0,null,null,2,"td",[["class","docs-api-properties-type-cell"]],null,null,null,null,null)),(l()(),s.Gb(47,0,null,null,1,"code",[["class","docs-api-property-type string"],["pan",""]],null,null,null,null,null)),(l()(),s.Yb(-1,null,["string"])),(l()(),s.Gb(49,0,null,null,1,"td",[["class","docs-api-property-default"]],null,null,null,null,null)),(l()(),s.Yb(-1,null,["-"])),(l()(),s.Gb(51,0,null,null,2,"td",[["class","docs-api-property-description"]],null,null,null,null,null)),(l()(),s.Gb(52,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),s.Yb(-1,null,["Sintaxe a ser registrada."])),(l()(),s.Gb(54,0,null,null,13,"tr",[["class","docs-api-properties-row"]],null,null,null,null,null)),(l()(),s.Gb(55,0,null,null,4,"td",[["class","docs-api-properties-name-cell"]],null,null,null,null,null)),(l()(),s.Gb(56,0,null,null,3,"div",[["class","docs-api-input-marker"]],null,null,null,null,null)),(l()(),s.Gb(57,0,null,null,2,"span",[["class","docs-api-input-alias"]],null,null,null,null,null)),(l()(),s.Yb(-1,null,["p-options"])),(l()(),s.Gb(59,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),s.Gb(60,0,null,null,2,"td",[["class","docs-api-properties-type-cell"]],null,null,null,null,null)),(l()(),s.Gb(61,0,null,null,1,"code",[["class","docs-api-property-type PoCodeEditorRegisterableOptions"],["pan",""]],null,null,null,null,null)),(l()(),s.Yb(-1,null,["PoCodeEditorRegisterableOptions"])),(l()(),s.Gb(63,0,null,null,1,"td",[["class","docs-api-property-default"]],null,null,null,null,null)),(l()(),s.Yb(-1,null,["-"])),(l()(),s.Gb(65,0,null,null,2,"td",[["class","docs-api-property-description"]],null,null,null,null,null)),(l()(),s.Gb(66,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),s.Yb(-1,null,["Op\xe7\xf5es da sintaxe para registro no po-code-editor"])),(l()(),s.Gb(68,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),s.Yb(-1,null,["Interfaces"])),(l()(),s.Gb(70,0,null,null,2,"h4",[["class","docs-api-h4 docs-api-class-name"]],null,null,null,null,null)),(l()(),s.Gb(71,0,null,null,1,"code",[["class","doc-code"]],null,null,null,null,null)),(l()(),s.Yb(-1,null,["PoCodeEditorRegisterableTokens"])),(l()(),s.Gb(73,0,null,null,2,"div",[["class","docs-api-class-description"]],null,null,null,null,null)),(l()(),s.Gb(74,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),s.Yb(-1,null,["Interface para configura\xe7\xe3o de tokens de novas sintaxes ao code editor."])),(l()(),s.Gb(76,0,null,null,1,"h4",[["class","docs-api-h5 docs-api-method-header"]],null,null,null,null,null)),(l()(),s.Yb(-1,null,["Propriedades"])),(l()(),s.Gb(78,0,null,null,94,"table",[["class","docs-api-properties-table"]],null,null,null,null,null)),(l()(),s.Gb(79,0,null,null,6,"tr",[["class","docs-api-properties-header-row"]],null,null,null,null,null)),(l()(),s.Gb(80,0,null,null,1,"th",[["class","docs-api-properties-th"]],null,null,null,null,null)),(l()(),s.Yb(-1,null,["Nome"])),(l()(),s.Gb(82,0,null,null,1,"th",[["class","docs-api-properties-th"]],null,null,null,null,null)),(l()(),s.Yb(-1,null,["Tipo"])),(l()(),s.Gb(84,0,null,null,1,"th",[["class","docs-api-properties-th"]],null,null,null,null,null)),(l()(),s.Yb(-1,null,["Descri\xe7\xe3o"])),(l()(),s.Gb(86,0,null,null,14,"tr",[["class","docs-api-properties-row"]],null,null,null,null,null)),(l()(),s.Gb(87,0,null,null,4,"td",[["class","docs-api-properties-name-cell"]],null,null,null,null,null)),(l()(),s.Gb(88,0,null,null,3,"div",[["class","docs-api-input-marker"]],null,null,null,null,null)),(l()(),s.Gb(89,0,null,null,2,"span",[["class","docs-api-input-alias"]],null,null,null,null,null)),(l()(),s.Yb(-1,null,[" comment"])),(l()(),s.Gb(91,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),s.Gb(92,0,null,null,2,"td",[["class","docs-api-properties-type-cell"]],null,null,null,null,null)),(l()(),s.Gb(93,0,null,null,1,"code",[["class","docs-api-property-type Array<any>"],["pan",""]],null,null,null,null,null)),(l()(),s.Yb(-1,null,["Array<any>"])),(l()(),s.Gb(95,0,null,null,5,"td",[["class","docs-api-property-description"]],null,null,null,null,null)),(l()(),s.Gb(96,0,null,null,2,"em",[],null,null,null,null,null)),(l()(),s.Gb(97,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),s.Yb(-1,null,["(opcional)"])),(l()(),s.Gb(99,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),s.Yb(-1,null,["Tokenizer de coment\xe1rios."])),(l()(),s.Gb(101,0,null,null,14,"tr",[["class","docs-api-properties-row"]],null,null,null,null,null)),(l()(),s.Gb(102,0,null,null,4,"td",[["class","docs-api-properties-name-cell"]],null,null,null,null,null)),(l()(),s.Gb(103,0,null,null,3,"div",[["class","docs-api-input-marker"]],null,null,null,null,null)),(l()(),s.Gb(104,0,null,null,2,"span",[["class","docs-api-input-alias"]],null,null,null,null,null)),(l()(),s.Yb(-1,null,[" interpolated"])),(l()(),s.Gb(106,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),s.Gb(107,0,null,null,2,"td",[["class","docs-api-properties-type-cell"]],null,null,null,null,null)),(l()(),s.Gb(108,0,null,null,1,"code",[["class","docs-api-property-type Array<any>"],["pan",""]],null,null,null,null,null)),(l()(),s.Yb(-1,null,["Array<any>"])),(l()(),s.Gb(110,0,null,null,5,"td",[["class","docs-api-property-description"]],null,null,null,null,null)),(l()(),s.Gb(111,0,null,null,2,"em",[],null,null,null,null,null)),(l()(),s.Gb(112,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),s.Yb(-1,null,["(opcional)"])),(l()(),s.Gb(114,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),s.Yb(-1,null,["Sequ\xeancia de interpola\xe7\xe3o."])),(l()(),s.Gb(116,0,null,null,14,"tr",[["class","docs-api-properties-row"]],null,null,null,null,null)),(l()(),s.Gb(117,0,null,null,4,"td",[["class","docs-api-properties-name-cell"]],null,null,null,null,null)),(l()(),s.Gb(118,0,null,null,3,"div",[["class","docs-api-input-marker"]],null,null,null,null,null)),(l()(),s.Gb(119,0,null,null,2,"span",[["class","docs-api-input-alias"]],null,null,null,null,null)),(l()(),s.Yb(-1,null,[" interpolatedCompound"])),(l()(),s.Gb(121,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),s.Gb(122,0,null,null,2,"td",[["class","docs-api-properties-type-cell"]],null,null,null,null,null)),(l()(),s.Gb(123,0,null,null,1,"code",[["class","docs-api-property-type Array<any>"],["pan",""]],null,null,null,null,null)),(l()(),s.Yb(-1,null,["Array<any>"])),(l()(),s.Gb(125,0,null,null,5,"td",[["class","docs-api-property-description"]],null,null,null,null,null)),(l()(),s.Gb(126,0,null,null,2,"em",[],null,null,null,null,null)),(l()(),s.Gb(127,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),s.Yb(-1,null,["(opcional)"])),(l()(),s.Gb(129,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),s.Yb(-1,null,["Sequ\xeancia de interpola\xe7\xe3o composta."])),(l()(),s.Gb(131,0,null,null,11,"tr",[["class","docs-api-properties-row"]],null,null,null,null,null)),(l()(),s.Gb(132,0,null,null,4,"td",[["class","docs-api-properties-name-cell"]],null,null,null,null,null)),(l()(),s.Gb(133,0,null,null,3,"div",[["class","docs-api-input-marker"]],null,null,null,null,null)),(l()(),s.Gb(134,0,null,null,2,"span",[["class","docs-api-input-alias"]],null,null,null,null,null)),(l()(),s.Yb(-1,null,[" root"])),(l()(),s.Gb(136,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),s.Gb(137,0,null,null,2,"td",[["class","docs-api-properties-type-cell"]],null,null,null,null,null)),(l()(),s.Gb(138,0,null,null,1,"code",[["class","docs-api-property-type Array<any>"],["pan",""]],null,null,null,null,null)),(l()(),s.Yb(-1,null,["Array<any>"])),(l()(),s.Gb(140,0,null,null,2,"td",[["class","docs-api-property-description"]],null,null,null,null,null)),(l()(),s.Gb(141,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),s.Yb(-1,null,["Principal tokenizer da sintaxe customizada."])),(l()(),s.Gb(143,0,null,null,14,"tr",[["class","docs-api-properties-row"]],null,null,null,null,null)),(l()(),s.Gb(144,0,null,null,4,"td",[["class","docs-api-properties-name-cell"]],null,null,null,null,null)),(l()(),s.Gb(145,0,null,null,3,"div",[["class","docs-api-input-marker"]],null,null,null,null,null)),(l()(),s.Gb(146,0,null,null,2,"span",[["class","docs-api-input-alias"]],null,null,null,null,null)),(l()(),s.Yb(-1,null,[" string"])),(l()(),s.Gb(148,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),s.Gb(149,0,null,null,2,"td",[["class","docs-api-properties-type-cell"]],null,null,null,null,null)),(l()(),s.Gb(150,0,null,null,1,"code",[["class","docs-api-property-type Array<any>"],["pan",""]],null,null,null,null,null)),(l()(),s.Yb(-1,null,["Array<any>"])),(l()(),s.Gb(152,0,null,null,5,"td",[["class","docs-api-property-description"]],null,null,null,null,null)),(l()(),s.Gb(153,0,null,null,2,"em",[],null,null,null,null,null)),(l()(),s.Gb(154,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),s.Yb(-1,null,["(opcional)"])),(l()(),s.Gb(156,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),s.Yb(-1,null,["Tokenizer de strings."])),(l()(),s.Gb(158,0,null,null,14,"tr",[["class","docs-api-properties-row"]],null,null,null,null,null)),(l()(),s.Gb(159,0,null,null,4,"td",[["class","docs-api-properties-name-cell"]],null,null,null,null,null)),(l()(),s.Gb(160,0,null,null,3,"div",[["class","docs-api-input-marker"]],null,null,null,null,null)),(l()(),s.Gb(161,0,null,null,2,"span",[["class","docs-api-input-alias"]],null,null,null,null,null)),(l()(),s.Yb(-1,null,[" whitespace"])),(l()(),s.Gb(163,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),s.Gb(164,0,null,null,2,"td",[["class","docs-api-properties-type-cell"]],null,null,null,null,null)),(l()(),s.Gb(165,0,null,null,1,"code",[["class","docs-api-property-type Array<any>"],["pan",""]],null,null,null,null,null)),(l()(),s.Yb(-1,null,["Array<any>"])),(l()(),s.Gb(167,0,null,null,5,"td",[["class","docs-api-property-description"]],null,null,null,null,null)),(l()(),s.Gb(168,0,null,null,2,"em",[],null,null,null,null,null)),(l()(),s.Gb(169,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),s.Yb(-1,null,["(opcional)"])),(l()(),s.Gb(171,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),s.Yb(-1,null,["Tokenizer de whitespaces."])),(l()(),s.Gb(173,0,null,null,2,"h4",[["class","docs-api-h4 docs-api-class-name"]],null,null,null,null,null)),(l()(),s.Gb(174,0,null,null,1,"code",[["class","doc-code"]],null,null,null,null,null)),(l()(),s.Yb(-1,null,["PoCodeEditorRegisterable"])),(l()(),s.Gb(176,0,null,null,2,"div",[["class","docs-api-class-description"]],null,null,null,null,null)),(l()(),s.Gb(177,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),s.Yb(-1,null,["Interface para configura\xe7\xe3o de novas sintaxes ao code editor."])),(l()(),s.Gb(179,0,null,null,1,"h4",[["class","docs-api-h5 docs-api-method-header"]],null,null,null,null,null)),(l()(),s.Yb(-1,null,["Propriedades"])),(l()(),s.Gb(181,0,null,null,31,"table",[["class","docs-api-properties-table"]],null,null,null,null,null)),(l()(),s.Gb(182,0,null,null,6,"tr",[["class","docs-api-properties-header-row"]],null,null,null,null,null)),(l()(),s.Gb(183,0,null,null,1,"th",[["class","docs-api-properties-th"]],null,null,null,null,null)),(l()(),s.Yb(-1,null,["Nome"])),(l()(),s.Gb(185,0,null,null,1,"th",[["class","docs-api-properties-th"]],null,null,null,null,null)),(l()(),s.Yb(-1,null,["Tipo"])),(l()(),s.Gb(187,0,null,null,1,"th",[["class","docs-api-properties-th"]],null,null,null,null,null)),(l()(),s.Yb(-1,null,["Descri\xe7\xe3o"])),(l()(),s.Gb(189,0,null,null,11,"tr",[["class","docs-api-properties-row"]],null,null,null,null,null)),(l()(),s.Gb(190,0,null,null,4,"td",[["class","docs-api-properties-name-cell"]],null,null,null,null,null)),(l()(),s.Gb(191,0,null,null,3,"div",[["class","docs-api-input-marker"]],null,null,null,null,null)),(l()(),s.Gb(192,0,null,null,2,"span",[["class","docs-api-input-alias"]],null,null,null,null,null)),(l()(),s.Yb(-1,null,[" language"])),(l()(),s.Gb(194,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),s.Gb(195,0,null,null,2,"td",[["class","docs-api-properties-type-cell"]],null,null,null,null,null)),(l()(),s.Gb(196,0,null,null,1,"code",[["class","docs-api-property-type string"],["pan",""]],null,null,null,null,null)),(l()(),s.Yb(-1,null,["string"])),(l()(),s.Gb(198,0,null,null,2,"td",[["class","docs-api-property-description"]],null,null,null,null,null)),(l()(),s.Gb(199,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),s.Yb(-1,null,["Nome da sintaxe a ser registrada no code editor."])),(l()(),s.Gb(201,0,null,null,11,"tr",[["class","docs-api-properties-row"]],null,null,null,null,null)),(l()(),s.Gb(202,0,null,null,4,"td",[["class","docs-api-properties-name-cell"]],null,null,null,null,null)),(l()(),s.Gb(203,0,null,null,3,"div",[["class","docs-api-input-marker"]],null,null,null,null,null)),(l()(),s.Gb(204,0,null,null,2,"span",[["class","docs-api-input-alias"]],null,null,null,null,null)),(l()(),s.Yb(-1,null,[" options"])),(l()(),s.Gb(206,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),s.Gb(207,0,null,null,2,"td",[["class","docs-api-properties-type-cell"]],null,null,null,null,null)),(l()(),s.Gb(208,0,null,null,1,"code",[["class","docs-api-property-type PoCodeEditorRegisterableOptions"],["pan",""]],null,null,null,null,null)),(l()(),s.Yb(-1,null,["PoCodeEditorRegisterableOptions"])),(l()(),s.Gb(210,0,null,null,2,"td",[["class","docs-api-property-description"]],null,null,null,null,null)),(l()(),s.Gb(211,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),s.Yb(-1,null,["Op\xe7\xf5es de configura\xe7\xe3o da sintaxe customizada."])),(l()(),s.Gb(213,0,null,null,2,"h4",[["class","docs-api-h4 docs-api-class-name"]],null,null,null,null,null)),(l()(),s.Gb(214,0,null,null,1,"code",[["class","doc-code"]],null,null,null,null,null)),(l()(),s.Yb(-1,null,["PoCodeEditorRegisterableOptions"])),(l()(),s.Gb(216,0,null,null,2,"div",[["class","docs-api-class-description"]],null,null,null,null,null)),(l()(),s.Gb(217,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),s.Yb(-1,null,["Interface para configura\xe7\xe3o de Op\xe7\xf5es de novas sintaxes ao code editor."])),(l()(),s.Gb(219,0,null,null,1,"h4",[["class","docs-api-h5 docs-api-method-header"]],null,null,null,null,null)),(l()(),s.Yb(-1,null,["Propriedades"])),(l()(),s.Gb(221,0,null,null,67,"table",[["class","docs-api-properties-table"]],null,null,null,null,null)),(l()(),s.Gb(222,0,null,null,6,"tr",[["class","docs-api-properties-header-row"]],null,null,null,null,null)),(l()(),s.Gb(223,0,null,null,1,"th",[["class","docs-api-properties-th"]],null,null,null,null,null)),(l()(),s.Yb(-1,null,["Nome"])),(l()(),s.Gb(225,0,null,null,1,"th",[["class","docs-api-properties-th"]],null,null,null,null,null)),(l()(),s.Yb(-1,null,["Tipo"])),(l()(),s.Gb(227,0,null,null,1,"th",[["class","docs-api-properties-th"]],null,null,null,null,null)),(l()(),s.Yb(-1,null,["Descri\xe7\xe3o"])),(l()(),s.Gb(229,0,null,null,11,"tr",[["class","docs-api-properties-row"]],null,null,null,null,null)),(l()(),s.Gb(230,0,null,null,4,"td",[["class","docs-api-properties-name-cell"]],null,null,null,null,null)),(l()(),s.Gb(231,0,null,null,3,"div",[["class","docs-api-input-marker"]],null,null,null,null,null)),(l()(),s.Gb(232,0,null,null,2,"span",[["class","docs-api-input-alias"]],null,null,null,null,null)),(l()(),s.Yb(-1,null,[" escapes"])),(l()(),s.Gb(234,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),s.Gb(235,0,null,null,2,"td",[["class","docs-api-properties-type-cell"]],null,null,null,null,null)),(l()(),s.Gb(236,0,null,null,1,"code",[["class","docs-api-property-type RegExp"],["pan",""]],null,null,null,null,null)),(l()(),s.Yb(-1,null,["RegExp"])),(l()(),s.Gb(238,0,null,null,2,"td",[["class","docs-api-property-description"]],null,null,null,null,null)),(l()(),s.Gb(239,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),s.Yb(-1,null,["Escapes espec\xedficos da sintaxes."])),(l()(),s.Gb(241,0,null,null,11,"tr",[["class","docs-api-properties-row"]],null,null,null,null,null)),(l()(),s.Gb(242,0,null,null,4,"td",[["class","docs-api-properties-name-cell"]],null,null,null,null,null)),(l()(),s.Gb(243,0,null,null,3,"div",[["class","docs-api-input-marker"]],null,null,null,null,null)),(l()(),s.Gb(244,0,null,null,2,"span",[["class","docs-api-input-alias"]],null,null,null,null,null)),(l()(),s.Yb(-1,null,[" keywords"])),(l()(),s.Gb(246,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),s.Gb(247,0,null,null,2,"td",[["class","docs-api-properties-type-cell"]],null,null,null,null,null)),(l()(),s.Gb(248,0,null,null,1,"code",[["class","docs-api-property-type Array<string>"],["pan",""]],null,null,null,null,null)),(l()(),s.Yb(-1,null,["Array<string>"])),(l()(),s.Gb(250,0,null,null,2,"td",[["class","docs-api-property-description"]],null,null,null,null,null)),(l()(),s.Gb(251,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),s.Yb(-1,null,["Palavras chaves da sintaxe."])),(l()(),s.Gb(253,0,null,null,11,"tr",[["class","docs-api-properties-row"]],null,null,null,null,null)),(l()(),s.Gb(254,0,null,null,4,"td",[["class","docs-api-properties-name-cell"]],null,null,null,null,null)),(l()(),s.Gb(255,0,null,null,3,"div",[["class","docs-api-input-marker"]],null,null,null,null,null)),(l()(),s.Gb(256,0,null,null,2,"span",[["class","docs-api-input-alias"]],null,null,null,null,null)),(l()(),s.Yb(-1,null,[" operators"])),(l()(),s.Gb(258,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),s.Gb(259,0,null,null,2,"td",[["class","docs-api-properties-type-cell"]],null,null,null,null,null)),(l()(),s.Gb(260,0,null,null,1,"code",[["class","docs-api-property-type Array<string>"],["pan",""]],null,null,null,null,null)),(l()(),s.Yb(-1,null,["Array<string>"])),(l()(),s.Gb(262,0,null,null,2,"td",[["class","docs-api-property-description"]],null,null,null,null,null)),(l()(),s.Gb(263,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),s.Yb(-1,null,["Operadores espec\xedficos da sintaxe."])),(l()(),s.Gb(265,0,null,null,11,"tr",[["class","docs-api-properties-row"]],null,null,null,null,null)),(l()(),s.Gb(266,0,null,null,4,"td",[["class","docs-api-properties-name-cell"]],null,null,null,null,null)),(l()(),s.Gb(267,0,null,null,3,"div",[["class","docs-api-input-marker"]],null,null,null,null,null)),(l()(),s.Gb(268,0,null,null,2,"span",[["class","docs-api-input-alias"]],null,null,null,null,null)),(l()(),s.Yb(-1,null,[" symbols"])),(l()(),s.Gb(270,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),s.Gb(271,0,null,null,2,"td",[["class","docs-api-properties-type-cell"]],null,null,null,null,null)),(l()(),s.Gb(272,0,null,null,1,"code",[["class","docs-api-property-type RegExp"],["pan",""]],null,null,null,null,null)),(l()(),s.Yb(-1,null,["RegExp"])),(l()(),s.Gb(274,0,null,null,2,"td",[["class","docs-api-property-description"]],null,null,null,null,null)),(l()(),s.Gb(275,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),s.Yb(-1,null,["S\xedmbolos espec\xedficos da sintaxes."])),(l()(),s.Gb(277,0,null,null,11,"tr",[["class","docs-api-properties-row"]],null,null,null,null,null)),(l()(),s.Gb(278,0,null,null,4,"td",[["class","docs-api-properties-name-cell"]],null,null,null,null,null)),(l()(),s.Gb(279,0,null,null,3,"div",[["class","docs-api-input-marker"]],null,null,null,null,null)),(l()(),s.Gb(280,0,null,null,2,"span",[["class","docs-api-input-alias"]],null,null,null,null,null)),(l()(),s.Yb(-1,null,[" tokenizer"])),(l()(),s.Gb(282,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),s.Gb(283,0,null,null,2,"td",[["class","docs-api-properties-type-cell"]],null,null,null,null,null)),(l()(),s.Gb(284,0,null,null,1,"code",[["class","docs-api-property-type PoCodeEditorRegisterableTokens"],["pan",""]],null,null,null,null,null)),(l()(),s.Yb(-1,null,["PoCodeEditorRegisterableTokens"])),(l()(),s.Gb(286,0,null,null,2,"td",[["class","docs-api-property-description"]],null,null,null,null,null)),(l()(),s.Gb(287,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),s.Yb(-1,null,["Interface para recebimento de token espec\xedficos da sintaxe."]))],null,null)}s.Cb("sample-po-code-editor-register-doc",p,function(l){return s.ac(0,[(l()(),s.Gb(0,0,null,null,1,"sample-po-code-editor-register-doc",[],null,null,null,b,i)),s.Fb(1,49152,null,0,p,[],null,null)],null,null)},{},{},[]);class d{constructor(l,n){this.route=l,this.router=n,this.hideThfWebSample=!0,this.samplesLength=0,this.activeTab="\x1cdoc",this.actions=[{label:"Documenta\xe7\xe3o",action:this.goBack,icon:"po-icon-document-filled"},{label:"Colabore",action:this.improveDocs}]}goBack(){this.router.navigate(["documentation"])}improveDocs(){window.open("https://github.com/portinariui/portinari-angular/tree/master/projects/code-editor/src/lib/components/po-code-editor/po-code-editor-register.service.ts","_blank")}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{const n=l.view;this.activeTab=n||"doc",this.hideThfWebSample=0===this.samplesLength})}ngOnDestroy(){this.sub.unsubscribe()}}var G=s.Eb({encapsulation:2,styles:[],data:{}});function m(l){return s.ac(0,[(l()(),s.Gb(0,16777216,null,null,10,"po-page-default",[["p-title"," Code Editor Register"]],null,null,null,a.Qb,a.J)),s.Fb(1,1622016,null,0,t.Db,[s.eb,s.Q,c.m],{actions:[0,"actions"],title:[1,"title"]},null),(l()(),s.Gb(2,0,null,0,8,"po-tabs",[["p-size","1"]],null,null,null,a.hc,a.ab)),s.Fb(3,49152,null,1,t.jc,[s.j],null,null),s.Wb(603979776,1,{tabs:1}),(l()(),s.Gb(5,0,null,0,3,"po-tab",[["p-label","Documenta\xe7\xe3o"]],null,null,null,a.fc,a.Y)),s.Fb(6,1097728,[[1,4]],0,t.ec,[s.q],{active:[0,"active"],label:[1,"label"]},null),(l()(),s.Gb(7,0,null,0,1,"sample-po-code-editor-register-doc",[],null,null,null,b,i)),s.Fb(8,49152,null,0,p,[],null,null),(l()(),s.Gb(9,0,null,0,1,"po-tab",[["p-label","Exemplos"]],null,null,null,a.fc,a.Y)),s.Fb(10,1097728,[[1,4]],0,t.ec,[s.q],{active:[0,"active"],hide:[1,"hide"],label:[2,"label"]},null)],function(l,n){var u=n.component;l(n,1,0,u.actions," Code Editor Register");l(n,6,0,u.activeTab.includes("doc"),"Documenta\xe7\xe3o");l(n,10,0,u.activeTab.includes("web"),u.hideThfWebSample,"Exemplos")},null)}var O=s.Cb("ng-component",d,function(l){return s.ac(0,[(l()(),s.Gb(0,0,null,null,1,"ng-component",[],null,null,null,m,G)),s.Fb(1,245760,null,0,d,[c.a,c.m],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),h=u("SVse"),g=u("IheW"),y=u("s7LF"),Y=u("XiHK"),v=u("YoMC"),f=u("PCNd");class w{}u.d(n,"DocPoCodeEditorRegisterModuleNgFactory",function(){return P});var P=s.Db(e,[],function(l){return s.Nb([s.Ob(512,s.m,s.pb,[[8,[o.a,a.pc,a.qc,a.rc,a.sc,a.tc,a.uc,a.wc,a.vc,a.xc,a.yc,a.zc,a.a,a.Ac,r.a,O]],[3,s.m],s.I]),s.Ob(4608,h.q,h.p,[s.E,[2,h.H]]),s.Ob(4608,g.m,g.s,[h.e,s.N,g.q]),s.Ob(4608,g.t,g.t,[g.m,g.r]),s.Ob(4608,t.v,t.v,[s.m,s.g,s.A]),s.Ob(4608,t.Bb,t.Bb,[t.v]),s.Ob(4608,t.E,t.E,[t.v]),s.Ob(4608,t.xe,t.xe,[]),s.Ob(5120,g.a,function(l,n,u,s,e){return[l,new t.X(n,u),new t.Y(s,e)]},[g.t,t.Bb,t.E,t.xe,t.v]),s.Ob(4608,g.p,g.p,[]),s.Ob(6144,g.n,null,[g.p]),s.Ob(4608,g.l,g.l,[g.n]),s.Ob(6144,g.b,null,[g.l]),s.Ob(4608,g.g,g.o,[g.b,s.A]),s.Ob(4608,g.c,g.c,[g.g]),s.Ob(4608,y.s,y.s,[]),s.Ob(4608,y.d,y.d,[]),s.Ob(4608,t.De,t.De,[]),s.Ob(4608,t.He,t.He,[]),s.Ob(4608,t.Ie,t.Ie,[]),s.Ob(4608,t.Sc,t.Sc,[]),s.Ob(4608,t.Wc,t.Wc,[]),s.Ob(4608,t.Ge,t.Ge,[]),s.Ob(4608,t.Je,t.Je,[]),s.Ob(4608,h.g,h.g,[s.E]),s.Ob(4608,h.d,h.d,[s.E]),s.Ob(4608,h.f,h.f,[s.E]),s.Ob(4608,t.rc,t.rc,[]),s.Ob(4608,h.y,h.y,[]),s.Ob(4608,t.Rd,t.Rd,[]),s.Ob(4608,t.X,t.X,[t.Bb,t.E]),s.Ob(4608,t.Y,t.Y,[t.xe,t.v]),s.Ob(4608,t.bb,t.bb,[]),s.Ob(4608,Y.y,Y.y,[g.c]),s.Ob(4608,Y.C,Y.C,[g.c]),s.Ob(4608,Y.H,Y.H,[g.c]),s.Ob(4608,Y.I,Y.I,[Y.H]),s.Ob(4608,Y.M,Y.M,[g.c]),s.Ob(4352,v.c,{language:"terraform",options:{keywords:["resource","provider","variable","output","module","true","false"],operators:["{","}","(",")","[","]","?",":"],tokenizer:{root:[["[a-z_$][\\w$]*",{cases:{"@keywords":"keyword","@default":"identifier"}}],{include:"@whitespace"},["\\d*\\.\\d+([eE][\\-+]?\\d+)?","number.float"],["0[x][0-9a-fA-F]+","number.hex"],["\\d+","number"],["[;,.]","delimiter"],['"([^"\\\\]|\\\\.)*$',"string.invalid"],['"',{token:"string.quote",bracket:"@open",next:"@string"}],["'[^\\\\']'","string"],["'","string.invalid"]],comment:[["[^\\/*]+","comment"],["[\\/*]","comment"],["[\\#.*]","comment"]],string:[['[^\\\\"\\$]+',"string"],["\\$","string.interpolated","@interpolated"],["\\\\.","string.escape.invalid"],['"',{token:"string.quote",bracket:"@close",next:"@pop"}]],whitespace:[["[ \\t\\r\\n]+","white"],["\\/\\/.*$","comment"],["\\#.*$","comment"]],interpolated:[["[{]",{token:"string.escape.curly",switchTo:"@interpolated_compound"}],["","","@pop"]]}}},[]),s.Ob(5120,s.d,function(l,n){return[t.Ec(l,n)]},[t.ye,t.De]),s.Ob(5120,t.cb,t.Fc,[t.ye,g.c,t.De]),s.Ob(1073742336,h.c,h.c,[]),s.Ob(1073742336,g.e,g.e,[]),s.Ob(1073742336,g.d,g.d,[]),s.Ob(1073742336,y.r,y.r,[]),s.Ob(1073742336,y.g,y.g,[]),s.Ob(1073742336,y.p,y.p,[]),s.Ob(1073742336,t.c,t.c,[]),s.Ob(1073742336,t.e,t.e,[]),s.Ob(1073742336,c.p,c.p,[[2,c.u],[2,c.m]]),s.Ob(1073742336,t.g,t.g,[]),s.Ob(1073742336,t.Ce,t.Ce,[]),s.Ob(1073742336,t.mb,t.mb,[]),s.Ob(1073742336,t.l,t.l,[]),s.Ob(1073742336,t.xc,t.xc,[]),s.Ob(1073742336,t.j,t.j,[]),s.Ob(1073742336,t.n,t.n,[]),s.Ob(1073742336,t.p,t.p,[]),s.Ob(1073742336,t.y,t.y,[]),s.Ob(1073742336,t.I,t.I,[]),s.Ob(1073742336,t.H,t.H,[]),s.Ob(1073742336,t.K,t.K,[]),s.Ob(1073742336,t.Nb,t.Nb,[]),s.Ob(1073742336,t.M,t.M,[]),s.Ob(1073742336,t.eb,t.eb,[]),s.Ob(1073742336,t.Pc,t.Pc,[]),s.Ob(1073742336,t.Oc,t.Oc,[]),s.Ob(1073742336,t.vb,t.vb,[]),s.Ob(1073742336,t.Pb,t.Pb,[]),s.Ob(1073742336,t.Vc,t.Vc,[]),s.Ob(1073742336,t.u,t.u,[]),s.Ob(1073742336,t.Xc,t.Xc,[]),s.Ob(1073742336,t.Yc,t.Yc,[]),s.Ob(1073742336,t.D,t.D,[]),s.Ob(1073742336,t.Ab,t.Ab,[]),s.Ob(1073742336,t.Vb,t.Vb,[]),s.Ob(1073742336,t.Lb,t.Lb,[]),s.Ob(1073742336,t.qc,t.qc,[]),s.Ob(1073742336,t.hc,t.hc,[]),s.Ob(1073742336,t.S,t.S,[]),s.Ob(1073742336,t.mc,t.mc,[]),s.Ob(1073742336,t.P,t.P,[]),s.Ob(1073742336,t.U,t.U,[]),s.Ob(1073742336,t.lb,t.lb,[]),s.Ob(1073742336,t.Kd,t.Kd,[]),s.Ob(1073742336,t.rb,t.rb,[]),s.Ob(1073742336,t.tb,t.tb,[]),s.Ob(1073742336,t.Td,t.Td,[]),s.Ob(1073742336,t.Xd,t.Xd,[]),s.Ob(1073742336,t.ae,t.ae,[]),s.Ob(1073742336,t.zb,t.zb,[]),s.Ob(1073742336,t.Hb,t.Hb,[]),s.Ob(1073742336,t.Xb,t.Xb,[]),s.Ob(1073742336,t.ac,t.ac,[]),s.Ob(1073742336,t.kc,t.kc,[]),s.Ob(1073742336,t.vc,t.vc,[]),s.Ob(1073742336,t.zc,t.zc,[]),s.Ob(1073742336,t.Dc,t.Dc,[]),s.Ob(1073742336,t.w,t.w,[]),s.Ob(1073742336,t.F,t.F,[]),s.Ob(1073742336,t.V,t.V,[]),s.Ob(1073742336,t.W,t.W,[]),s.Ob(1073742336,t.Z,t.Z,[]),s.Ob(1073742336,t.hb,t.hb,[]),s.Ob(1073742336,t.Jb,t.Jb,[]),s.Ob(1073742336,t.wb,t.wb,[]),s.Ob(1073742336,Y.c,Y.c,[]),s.Ob(1073742336,Y.f,Y.f,[]),s.Ob(1073742336,Y.h,Y.h,[]),s.Ob(1073742336,Y.k,Y.k,[]),s.Ob(1073742336,Y.m,Y.m,[]),s.Ob(1073742336,Y.o,Y.o,[]),s.Ob(1073742336,Y.q,Y.q,[]),s.Ob(1073742336,Y.s,Y.s,[]),s.Ob(1073742336,Y.u,Y.u,[]),s.Ob(1073742336,Y.w,Y.w,[]),s.Ob(1073742336,Y.a,Y.a,[]),s.Ob(1073742336,Y.x,Y.x,[]),s.Ob(1073742336,t.ab,t.ab,[]),s.Ob(1073742336,v.b,v.b,[]),s.Ob(1073742336,f.a,f.a,[]),s.Ob(1073742336,w,w,[]),s.Ob(1073742336,e,e,[]),s.Ob(256,g.q,"XSRF-TOKEN",[]),s.Ob(256,g.r,"X-XSRF-TOKEN",[]),s.Ob(256,t.ye,{contexts:{general:{en:{loginErrorPattern:"Invalid ID",loginPlaceholder:"Insert your ID",passwordErrorPattern:"Invalid PIN",passwordPlaceholder:"Insert your PIN",submitLabel:"Access your account",forgotPassword:"Forgot your ID or PIN?",highlightInfo:"For us the future is now"},es:{loginErrorPattern:"ID invalido",loginPlaceholder:"Inserte su ID",passwordErrorPattern:"Contrase\xf1a incorrecta",passwordPlaceholder:"Inserte su contrase\xf1a",submitLabel:"Accede a su cuenta",forgotPassword:"\xbfOlvid\xf3 su ID o contrase\xf1a?",highlightInfo:"Para nosotros el futuro es ahora"},pt:{loginErrorPattern:"ID inv\xe1lido",loginPlaceholder:"Insira seu ID",passwordErrorPattern:"Senha incorreta",passwordPlaceholder:"Insira sua senha",submitLabel:"Acesse a sua conta",forgotPassword:"Esqueceu seu ID ou sua senha?",highlightInfo:"Para n\xf3s o futuro \xe9 agora"}}},default:{context:"general",cache:!0}},[]),s.Ob(1024,c.k,function(){return[[{path:"",component:d}]]},[])])})}}]);