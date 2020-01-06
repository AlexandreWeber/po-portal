(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{kiTH:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),s=function(){return function(){}}(),a=u("pMnS"),o=u("c/cy"),c=u("nMSU"),r=u("Lmtn"),t=u("ZYCi"),p=function(){return function(){}}(),i=e.Gb({encapsulation:2,styles:[],data:{}});function d(l){return e.cc(0,[(l()(),e.Ib(0,0,[["thfDocs",1]],null,288,"div",[["class","docs-api"]],null,null,null,null,null)),(l()(),e.Ib(1,0,null,null,2,"p",[["class","docs-api-module-import"]],null,null,null,null,null)),(l()(),e.Ib(2,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["import { PoCodeEditorModule } from '@portinari/portinari-code-editor';"])),(l()(),e.Ib(4,0,null,null,2,"div",[["class","docs-api-class-description"]],null,null,null,null,null)),(l()(),e.Ib(5,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["M\xf3dulo do componente po-code-editor."])),(l()(),e.Ib(7,0,null,null,1,"h3",[["class","docs-api-h3"]],null,null,null,null,null)),(l()(),e.ac(-1,null,["Services"])),(l()(),e.Ib(9,0,null,null,2,"h4",[["class","docs-api-class-name"]],null,null,null,null,null)),(l()(),e.Ib(10,0,null,null,1,"code",[["class","doc-code"]],null,null,null,null,null)),(l()(),e.ac(-1,null,["PoCodeEditorRegister"])),(l()(),e.Ib(12,0,null,null,15,"div",[["class","docs-api-class-description"]],null,null,null,null,null)),(l()(),e.Ib(13,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["Wrapper para registro de sintaxes customizadas para o po-code-editor."])),(l()(),e.Ib(15,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["Para utiliza\xe7\xe3o do servi\xe7o de idiomas "])),(l()(),e.Ib(17,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["PoCodeEditorRegister"])),(l()(),e.ac(-1,null,[",\ndeve-se importar o m\xf3dulo PoCodeEditorModule mesmo j\xe1 tendo importado\no m\xf3dulo PoModule.\nNa importa\xe7\xe3o opcionalmente pode ser invocado o m\xe9todo "])),(l()(),e.Ib(20,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["forRegister"])),(l()(),e.ac(-1,null,[" informando um objeto para configura\xe7\xe3o."])),(l()(),e.Ib(23,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["Exemplo de configura\xe7\xe3o:"])),(l()(),e.Ib(25,0,null,null,2,"pre",[],null,null,null,null,null)),(l()(),e.Ib(26,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["import { PoCodeEditorModule, PoCodeEditorRegisterable } from '@portinari/portinari-code-editor';\n\nconst customEditor: PoCodeEditorRegisterable = {\n  language: 'terraform'\n  options: {\n    keywords: ['resource', 'provider', 'variable', 'output', 'module', 'true', 'false'],\n    operators: ['{', '}', '(', ')', '[', ']', '?', ':'],\n    symbols:  /[=><!~?:&|+\\-*\\/\\^%]+/,\n    escapes: /\\\\(?:[abfnrtv\\\\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,\n    tokenizer: {\n     ...\n    }\n  }\n};\nAs configura\xe7\xf5es para o registro de uma nova sintaxe no Monaco code editor podem ser encontradas em\n[**Monaco Editor**](https://microsoft.github.io/monaco-editor/playground.html#extending-language-services-custom-languages).\n\n@NgModule({\n  declarations: [],\n  imports: [\n    PoModule,\n    PoCodeEditorModule.forRegister(customEditor)\n  ],\n  bootstrap: [AppComponent]\n})\n"])),(l()(),e.Ib(28,0,null,null,1,"h4",[["class","docs-api-h5 docs-api-method-header"]],null,null,null,null,null)),(l()(),e.ac(-1,null,["Propriedades"])),(l()(),e.Ib(30,0,null,null,37,"table",[["class","docs-api-properties-table"]],null,null,null,null,null)),(l()(),e.Ib(31,0,null,null,8,"tr",[["class","docs-api-properties-header-row"]],null,null,null,null,null)),(l()(),e.Ib(32,0,null,null,1,"th",[["class","docs-api-properties-th"]],null,null,null,null,null)),(l()(),e.ac(-1,null,["Nome"])),(l()(),e.Ib(34,0,null,null,1,"th",[["class","docs-api-properties-th"]],null,null,null,null,null)),(l()(),e.ac(-1,null,["Tipo"])),(l()(),e.Ib(36,0,null,null,1,"th",[["class","docs-api-properties-th"]],null,null,null,null,null)),(l()(),e.ac(-1,null,["Padr\xe3o"])),(l()(),e.Ib(38,0,null,null,1,"th",[["class","docs-api-properties-th"]],null,null,null,null,null)),(l()(),e.ac(-1,null,["Descri\xe7\xe3o"])),(l()(),e.Ib(40,0,null,null,13,"tr",[["class","docs-api-properties-row"]],null,null,null,null,null)),(l()(),e.Ib(41,0,null,null,4,"td",[["class","docs-api-properties-name-cell"]],null,null,null,null,null)),(l()(),e.Ib(42,0,null,null,3,"div",[["class","docs-api-input-marker"]],null,null,null,null,null)),(l()(),e.Ib(43,0,null,null,2,"span",[["class","docs-api-input-alias"]],null,null,null,null,null)),(l()(),e.ac(-1,null,["p-language"])),(l()(),e.Ib(45,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Ib(46,0,null,null,2,"td",[["class","docs-api-properties-type-cell"]],null,null,null,null,null)),(l()(),e.Ib(47,0,null,null,1,"code",[["class","docs-api-property-type string"],["pan",""]],null,null,null,null,null)),(l()(),e.ac(-1,null,["string"])),(l()(),e.Ib(49,0,null,null,1,"td",[["class","docs-api-property-default"]],null,null,null,null,null)),(l()(),e.ac(-1,null,["-"])),(l()(),e.Ib(51,0,null,null,2,"td",[["class","docs-api-property-description"]],null,null,null,null,null)),(l()(),e.Ib(52,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["Sintaxe a ser registrada."])),(l()(),e.Ib(54,0,null,null,13,"tr",[["class","docs-api-properties-row"]],null,null,null,null,null)),(l()(),e.Ib(55,0,null,null,4,"td",[["class","docs-api-properties-name-cell"]],null,null,null,null,null)),(l()(),e.Ib(56,0,null,null,3,"div",[["class","docs-api-input-marker"]],null,null,null,null,null)),(l()(),e.Ib(57,0,null,null,2,"span",[["class","docs-api-input-alias"]],null,null,null,null,null)),(l()(),e.ac(-1,null,["p-options"])),(l()(),e.Ib(59,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Ib(60,0,null,null,2,"td",[["class","docs-api-properties-type-cell"]],null,null,null,null,null)),(l()(),e.Ib(61,0,null,null,1,"code",[["class","docs-api-property-type PoCodeEditorRegisterableOptions"],["pan",""]],null,null,null,null,null)),(l()(),e.ac(-1,null,["PoCodeEditorRegisterableOptions"])),(l()(),e.Ib(63,0,null,null,1,"td",[["class","docs-api-property-default"]],null,null,null,null,null)),(l()(),e.ac(-1,null,["-"])),(l()(),e.Ib(65,0,null,null,2,"td",[["class","docs-api-property-description"]],null,null,null,null,null)),(l()(),e.Ib(66,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["Op\xe7\xf5es da sintaxe para registro no po-code-editor"])),(l()(),e.Ib(68,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["Interfaces"])),(l()(),e.Ib(70,0,null,null,2,"h4",[["class","docs-api-h4 docs-api-class-name"]],null,null,null,null,null)),(l()(),e.Ib(71,0,null,null,1,"code",[["class","doc-code"]],null,null,null,null,null)),(l()(),e.ac(-1,null,["PoCodeEditorRegisterableOptions"])),(l()(),e.Ib(73,0,null,null,2,"div",[["class","docs-api-class-description"]],null,null,null,null,null)),(l()(),e.Ib(74,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["Interface para configura\xe7\xe3o de Op\xe7\xf5es de novas sintaxes ao code editor."])),(l()(),e.Ib(76,0,null,null,1,"h4",[["class","docs-api-h5 docs-api-method-header"]],null,null,null,null,null)),(l()(),e.ac(-1,null,["Propriedades"])),(l()(),e.Ib(78,0,null,null,67,"table",[["class","docs-api-properties-table"]],null,null,null,null,null)),(l()(),e.Ib(79,0,null,null,6,"tr",[["class","docs-api-properties-header-row"]],null,null,null,null,null)),(l()(),e.Ib(80,0,null,null,1,"th",[["class","docs-api-properties-th"]],null,null,null,null,null)),(l()(),e.ac(-1,null,["Nome"])),(l()(),e.Ib(82,0,null,null,1,"th",[["class","docs-api-properties-th"]],null,null,null,null,null)),(l()(),e.ac(-1,null,["Tipo"])),(l()(),e.Ib(84,0,null,null,1,"th",[["class","docs-api-properties-th"]],null,null,null,null,null)),(l()(),e.ac(-1,null,["Descri\xe7\xe3o"])),(l()(),e.Ib(86,0,null,null,11,"tr",[["class","docs-api-properties-row"]],null,null,null,null,null)),(l()(),e.Ib(87,0,null,null,4,"td",[["class","docs-api-properties-name-cell"]],null,null,null,null,null)),(l()(),e.Ib(88,0,null,null,3,"div",[["class","docs-api-input-marker"]],null,null,null,null,null)),(l()(),e.Ib(89,0,null,null,2,"span",[["class","docs-api-input-alias"]],null,null,null,null,null)),(l()(),e.ac(-1,null,[" escapes"])),(l()(),e.Ib(91,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Ib(92,0,null,null,2,"td",[["class","docs-api-properties-type-cell"]],null,null,null,null,null)),(l()(),e.Ib(93,0,null,null,1,"code",[["class","docs-api-property-type RegExp"],["pan",""]],null,null,null,null,null)),(l()(),e.ac(-1,null,["RegExp"])),(l()(),e.Ib(95,0,null,null,2,"td",[["class","docs-api-property-description"]],null,null,null,null,null)),(l()(),e.Ib(96,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["Escapes espec\xedficos da sintaxes."])),(l()(),e.Ib(98,0,null,null,11,"tr",[["class","docs-api-properties-row"]],null,null,null,null,null)),(l()(),e.Ib(99,0,null,null,4,"td",[["class","docs-api-properties-name-cell"]],null,null,null,null,null)),(l()(),e.Ib(100,0,null,null,3,"div",[["class","docs-api-input-marker"]],null,null,null,null,null)),(l()(),e.Ib(101,0,null,null,2,"span",[["class","docs-api-input-alias"]],null,null,null,null,null)),(l()(),e.ac(-1,null,[" keywords"])),(l()(),e.Ib(103,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Ib(104,0,null,null,2,"td",[["class","docs-api-properties-type-cell"]],null,null,null,null,null)),(l()(),e.Ib(105,0,null,null,1,"code",[["class","docs-api-property-type Array<string>"],["pan",""]],null,null,null,null,null)),(l()(),e.ac(-1,null,["Array<string>"])),(l()(),e.Ib(107,0,null,null,2,"td",[["class","docs-api-property-description"]],null,null,null,null,null)),(l()(),e.Ib(108,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["Palavras chaves da sintaxe."])),(l()(),e.Ib(110,0,null,null,11,"tr",[["class","docs-api-properties-row"]],null,null,null,null,null)),(l()(),e.Ib(111,0,null,null,4,"td",[["class","docs-api-properties-name-cell"]],null,null,null,null,null)),(l()(),e.Ib(112,0,null,null,3,"div",[["class","docs-api-input-marker"]],null,null,null,null,null)),(l()(),e.Ib(113,0,null,null,2,"span",[["class","docs-api-input-alias"]],null,null,null,null,null)),(l()(),e.ac(-1,null,[" operators"])),(l()(),e.Ib(115,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Ib(116,0,null,null,2,"td",[["class","docs-api-properties-type-cell"]],null,null,null,null,null)),(l()(),e.Ib(117,0,null,null,1,"code",[["class","docs-api-property-type Array<string>"],["pan",""]],null,null,null,null,null)),(l()(),e.ac(-1,null,["Array<string>"])),(l()(),e.Ib(119,0,null,null,2,"td",[["class","docs-api-property-description"]],null,null,null,null,null)),(l()(),e.Ib(120,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["Operadores espec\xedficos da sintaxe."])),(l()(),e.Ib(122,0,null,null,11,"tr",[["class","docs-api-properties-row"]],null,null,null,null,null)),(l()(),e.Ib(123,0,null,null,4,"td",[["class","docs-api-properties-name-cell"]],null,null,null,null,null)),(l()(),e.Ib(124,0,null,null,3,"div",[["class","docs-api-input-marker"]],null,null,null,null,null)),(l()(),e.Ib(125,0,null,null,2,"span",[["class","docs-api-input-alias"]],null,null,null,null,null)),(l()(),e.ac(-1,null,[" symbols"])),(l()(),e.Ib(127,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Ib(128,0,null,null,2,"td",[["class","docs-api-properties-type-cell"]],null,null,null,null,null)),(l()(),e.Ib(129,0,null,null,1,"code",[["class","docs-api-property-type RegExp"],["pan",""]],null,null,null,null,null)),(l()(),e.ac(-1,null,["RegExp"])),(l()(),e.Ib(131,0,null,null,2,"td",[["class","docs-api-property-description"]],null,null,null,null,null)),(l()(),e.Ib(132,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["S\xedmbolos espec\xedficos da sintaxes."])),(l()(),e.Ib(134,0,null,null,11,"tr",[["class","docs-api-properties-row"]],null,null,null,null,null)),(l()(),e.Ib(135,0,null,null,4,"td",[["class","docs-api-properties-name-cell"]],null,null,null,null,null)),(l()(),e.Ib(136,0,null,null,3,"div",[["class","docs-api-input-marker"]],null,null,null,null,null)),(l()(),e.Ib(137,0,null,null,2,"span",[["class","docs-api-input-alias"]],null,null,null,null,null)),(l()(),e.ac(-1,null,[" tokenizer"])),(l()(),e.Ib(139,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Ib(140,0,null,null,2,"td",[["class","docs-api-properties-type-cell"]],null,null,null,null,null)),(l()(),e.Ib(141,0,null,null,1,"code",[["class","docs-api-property-type PoCodeEditorRegisterableTokens"],["pan",""]],null,null,null,null,null)),(l()(),e.ac(-1,null,["PoCodeEditorRegisterableTokens"])),(l()(),e.Ib(143,0,null,null,2,"td",[["class","docs-api-property-description"]],null,null,null,null,null)),(l()(),e.Ib(144,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["Interface para recebimento de token espec\xedficos da sintaxe."])),(l()(),e.Ib(146,0,null,null,2,"h4",[["class","docs-api-h4 docs-api-class-name"]],null,null,null,null,null)),(l()(),e.Ib(147,0,null,null,1,"code",[["class","doc-code"]],null,null,null,null,null)),(l()(),e.ac(-1,null,["PoCodeEditorRegisterableTokens"])),(l()(),e.Ib(149,0,null,null,2,"div",[["class","docs-api-class-description"]],null,null,null,null,null)),(l()(),e.Ib(150,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["Interface para configura\xe7\xe3o de tokens de novas sintaxes ao code editor."])),(l()(),e.Ib(152,0,null,null,1,"h4",[["class","docs-api-h5 docs-api-method-header"]],null,null,null,null,null)),(l()(),e.ac(-1,null,["Propriedades"])),(l()(),e.Ib(154,0,null,null,94,"table",[["class","docs-api-properties-table"]],null,null,null,null,null)),(l()(),e.Ib(155,0,null,null,6,"tr",[["class","docs-api-properties-header-row"]],null,null,null,null,null)),(l()(),e.Ib(156,0,null,null,1,"th",[["class","docs-api-properties-th"]],null,null,null,null,null)),(l()(),e.ac(-1,null,["Nome"])),(l()(),e.Ib(158,0,null,null,1,"th",[["class","docs-api-properties-th"]],null,null,null,null,null)),(l()(),e.ac(-1,null,["Tipo"])),(l()(),e.Ib(160,0,null,null,1,"th",[["class","docs-api-properties-th"]],null,null,null,null,null)),(l()(),e.ac(-1,null,["Descri\xe7\xe3o"])),(l()(),e.Ib(162,0,null,null,14,"tr",[["class","docs-api-properties-row"]],null,null,null,null,null)),(l()(),e.Ib(163,0,null,null,4,"td",[["class","docs-api-properties-name-cell"]],null,null,null,null,null)),(l()(),e.Ib(164,0,null,null,3,"div",[["class","docs-api-input-marker"]],null,null,null,null,null)),(l()(),e.Ib(165,0,null,null,2,"span",[["class","docs-api-input-alias"]],null,null,null,null,null)),(l()(),e.ac(-1,null,[" comment"])),(l()(),e.Ib(167,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Ib(168,0,null,null,2,"td",[["class","docs-api-properties-type-cell"]],null,null,null,null,null)),(l()(),e.Ib(169,0,null,null,1,"code",[["class","docs-api-property-type Array<any>"],["pan",""]],null,null,null,null,null)),(l()(),e.ac(-1,null,["Array<any>"])),(l()(),e.Ib(171,0,null,null,5,"td",[["class","docs-api-property-description"]],null,null,null,null,null)),(l()(),e.Ib(172,0,null,null,2,"em",[],null,null,null,null,null)),(l()(),e.Ib(173,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["(opcional)"])),(l()(),e.Ib(175,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["Tokenizer de coment\xe1rios."])),(l()(),e.Ib(177,0,null,null,14,"tr",[["class","docs-api-properties-row"]],null,null,null,null,null)),(l()(),e.Ib(178,0,null,null,4,"td",[["class","docs-api-properties-name-cell"]],null,null,null,null,null)),(l()(),e.Ib(179,0,null,null,3,"div",[["class","docs-api-input-marker"]],null,null,null,null,null)),(l()(),e.Ib(180,0,null,null,2,"span",[["class","docs-api-input-alias"]],null,null,null,null,null)),(l()(),e.ac(-1,null,[" interpolated"])),(l()(),e.Ib(182,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Ib(183,0,null,null,2,"td",[["class","docs-api-properties-type-cell"]],null,null,null,null,null)),(l()(),e.Ib(184,0,null,null,1,"code",[["class","docs-api-property-type Array<any>"],["pan",""]],null,null,null,null,null)),(l()(),e.ac(-1,null,["Array<any>"])),(l()(),e.Ib(186,0,null,null,5,"td",[["class","docs-api-property-description"]],null,null,null,null,null)),(l()(),e.Ib(187,0,null,null,2,"em",[],null,null,null,null,null)),(l()(),e.Ib(188,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["(opcional)"])),(l()(),e.Ib(190,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["Sequ\xeancia de interpola\xe7\xe3o."])),(l()(),e.Ib(192,0,null,null,14,"tr",[["class","docs-api-properties-row"]],null,null,null,null,null)),(l()(),e.Ib(193,0,null,null,4,"td",[["class","docs-api-properties-name-cell"]],null,null,null,null,null)),(l()(),e.Ib(194,0,null,null,3,"div",[["class","docs-api-input-marker"]],null,null,null,null,null)),(l()(),e.Ib(195,0,null,null,2,"span",[["class","docs-api-input-alias"]],null,null,null,null,null)),(l()(),e.ac(-1,null,[" interpolatedCompound"])),(l()(),e.Ib(197,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Ib(198,0,null,null,2,"td",[["class","docs-api-properties-type-cell"]],null,null,null,null,null)),(l()(),e.Ib(199,0,null,null,1,"code",[["class","docs-api-property-type Array<any>"],["pan",""]],null,null,null,null,null)),(l()(),e.ac(-1,null,["Array<any>"])),(l()(),e.Ib(201,0,null,null,5,"td",[["class","docs-api-property-description"]],null,null,null,null,null)),(l()(),e.Ib(202,0,null,null,2,"em",[],null,null,null,null,null)),(l()(),e.Ib(203,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["(opcional)"])),(l()(),e.Ib(205,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["Sequ\xeancia de interpola\xe7\xe3o composta."])),(l()(),e.Ib(207,0,null,null,11,"tr",[["class","docs-api-properties-row"]],null,null,null,null,null)),(l()(),e.Ib(208,0,null,null,4,"td",[["class","docs-api-properties-name-cell"]],null,null,null,null,null)),(l()(),e.Ib(209,0,null,null,3,"div",[["class","docs-api-input-marker"]],null,null,null,null,null)),(l()(),e.Ib(210,0,null,null,2,"span",[["class","docs-api-input-alias"]],null,null,null,null,null)),(l()(),e.ac(-1,null,[" root"])),(l()(),e.Ib(212,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Ib(213,0,null,null,2,"td",[["class","docs-api-properties-type-cell"]],null,null,null,null,null)),(l()(),e.Ib(214,0,null,null,1,"code",[["class","docs-api-property-type Array<any>"],["pan",""]],null,null,null,null,null)),(l()(),e.ac(-1,null,["Array<any>"])),(l()(),e.Ib(216,0,null,null,2,"td",[["class","docs-api-property-description"]],null,null,null,null,null)),(l()(),e.Ib(217,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["Principal tokenizer da sintaxe customizada."])),(l()(),e.Ib(219,0,null,null,14,"tr",[["class","docs-api-properties-row"]],null,null,null,null,null)),(l()(),e.Ib(220,0,null,null,4,"td",[["class","docs-api-properties-name-cell"]],null,null,null,null,null)),(l()(),e.Ib(221,0,null,null,3,"div",[["class","docs-api-input-marker"]],null,null,null,null,null)),(l()(),e.Ib(222,0,null,null,2,"span",[["class","docs-api-input-alias"]],null,null,null,null,null)),(l()(),e.ac(-1,null,[" string"])),(l()(),e.Ib(224,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Ib(225,0,null,null,2,"td",[["class","docs-api-properties-type-cell"]],null,null,null,null,null)),(l()(),e.Ib(226,0,null,null,1,"code",[["class","docs-api-property-type Array<any>"],["pan",""]],null,null,null,null,null)),(l()(),e.ac(-1,null,["Array<any>"])),(l()(),e.Ib(228,0,null,null,5,"td",[["class","docs-api-property-description"]],null,null,null,null,null)),(l()(),e.Ib(229,0,null,null,2,"em",[],null,null,null,null,null)),(l()(),e.Ib(230,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["(opcional)"])),(l()(),e.Ib(232,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["Tokenizer de strings."])),(l()(),e.Ib(234,0,null,null,14,"tr",[["class","docs-api-properties-row"]],null,null,null,null,null)),(l()(),e.Ib(235,0,null,null,4,"td",[["class","docs-api-properties-name-cell"]],null,null,null,null,null)),(l()(),e.Ib(236,0,null,null,3,"div",[["class","docs-api-input-marker"]],null,null,null,null,null)),(l()(),e.Ib(237,0,null,null,2,"span",[["class","docs-api-input-alias"]],null,null,null,null,null)),(l()(),e.ac(-1,null,[" whitespace"])),(l()(),e.Ib(239,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Ib(240,0,null,null,2,"td",[["class","docs-api-properties-type-cell"]],null,null,null,null,null)),(l()(),e.Ib(241,0,null,null,1,"code",[["class","docs-api-property-type Array<any>"],["pan",""]],null,null,null,null,null)),(l()(),e.ac(-1,null,["Array<any>"])),(l()(),e.Ib(243,0,null,null,5,"td",[["class","docs-api-property-description"]],null,null,null,null,null)),(l()(),e.Ib(244,0,null,null,2,"em",[],null,null,null,null,null)),(l()(),e.Ib(245,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["(opcional)"])),(l()(),e.Ib(247,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["Tokenizer de whitespaces."])),(l()(),e.Ib(249,0,null,null,2,"h4",[["class","docs-api-h4 docs-api-class-name"]],null,null,null,null,null)),(l()(),e.Ib(250,0,null,null,1,"code",[["class","doc-code"]],null,null,null,null,null)),(l()(),e.ac(-1,null,["PoCodeEditorRegisterable"])),(l()(),e.Ib(252,0,null,null,2,"div",[["class","docs-api-class-description"]],null,null,null,null,null)),(l()(),e.Ib(253,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["Interface para configura\xe7\xe3o de novas sintaxes ao code editor."])),(l()(),e.Ib(255,0,null,null,1,"h4",[["class","docs-api-h5 docs-api-method-header"]],null,null,null,null,null)),(l()(),e.ac(-1,null,["Propriedades"])),(l()(),e.Ib(257,0,null,null,31,"table",[["class","docs-api-properties-table"]],null,null,null,null,null)),(l()(),e.Ib(258,0,null,null,6,"tr",[["class","docs-api-properties-header-row"]],null,null,null,null,null)),(l()(),e.Ib(259,0,null,null,1,"th",[["class","docs-api-properties-th"]],null,null,null,null,null)),(l()(),e.ac(-1,null,["Nome"])),(l()(),e.Ib(261,0,null,null,1,"th",[["class","docs-api-properties-th"]],null,null,null,null,null)),(l()(),e.ac(-1,null,["Tipo"])),(l()(),e.Ib(263,0,null,null,1,"th",[["class","docs-api-properties-th"]],null,null,null,null,null)),(l()(),e.ac(-1,null,["Descri\xe7\xe3o"])),(l()(),e.Ib(265,0,null,null,11,"tr",[["class","docs-api-properties-row"]],null,null,null,null,null)),(l()(),e.Ib(266,0,null,null,4,"td",[["class","docs-api-properties-name-cell"]],null,null,null,null,null)),(l()(),e.Ib(267,0,null,null,3,"div",[["class","docs-api-input-marker"]],null,null,null,null,null)),(l()(),e.Ib(268,0,null,null,2,"span",[["class","docs-api-input-alias"]],null,null,null,null,null)),(l()(),e.ac(-1,null,[" language"])),(l()(),e.Ib(270,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Ib(271,0,null,null,2,"td",[["class","docs-api-properties-type-cell"]],null,null,null,null,null)),(l()(),e.Ib(272,0,null,null,1,"code",[["class","docs-api-property-type string"],["pan",""]],null,null,null,null,null)),(l()(),e.ac(-1,null,["string"])),(l()(),e.Ib(274,0,null,null,2,"td",[["class","docs-api-property-description"]],null,null,null,null,null)),(l()(),e.Ib(275,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["Nome da sintaxe a ser registrada no code editor."])),(l()(),e.Ib(277,0,null,null,11,"tr",[["class","docs-api-properties-row"]],null,null,null,null,null)),(l()(),e.Ib(278,0,null,null,4,"td",[["class","docs-api-properties-name-cell"]],null,null,null,null,null)),(l()(),e.Ib(279,0,null,null,3,"div",[["class","docs-api-input-marker"]],null,null,null,null,null)),(l()(),e.Ib(280,0,null,null,2,"span",[["class","docs-api-input-alias"]],null,null,null,null,null)),(l()(),e.ac(-1,null,[" options"])),(l()(),e.Ib(282,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Ib(283,0,null,null,2,"td",[["class","docs-api-properties-type-cell"]],null,null,null,null,null)),(l()(),e.Ib(284,0,null,null,1,"code",[["class","docs-api-property-type PoCodeEditorRegisterableOptions"],["pan",""]],null,null,null,null,null)),(l()(),e.ac(-1,null,["PoCodeEditorRegisterableOptions"])),(l()(),e.Ib(286,0,null,null,2,"td",[["class","docs-api-property-description"]],null,null,null,null,null)),(l()(),e.Ib(287,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.ac(-1,null,["Op\xe7\xf5es de configura\xe7\xe3o da sintaxe customizada."]))],null,null)}e.Eb("sample-po-code-editor-register-doc",p,function(l){return e.cc(0,[(l()(),e.Ib(0,0,null,null,1,"sample-po-code-editor-register-doc",[],null,null,null,d,i)),e.Hb(1,49152,null,0,p,[],null,null)],null,null)},{},{},[]);var b=function(){function l(l,n){this.route=l,this.router=n,this.hideThfWebSample=!0,this.samplesLength=0,this.activeTab="\x1cdoc",this.actions=[{label:"Documenta\xe7\xe3o",action:this.goBack,icon:"po-icon-document-filled"},{label:"Colabore",action:this.improveDocs}]}return l.prototype.goBack=function(){this.router.navigate(["documentation"])},l.prototype.improveDocs=function(){window.open("https://github.com/portinariui/portinari-angular/tree/master/projects/code-editor/src/lib/components/po-code-editor/po-code-editor-register.service.ts","_blank")},l.prototype.ngOnInit=function(){var l=this;this.sub=this.route.queryParams.subscribe(function(n){var u=n.view;l.activeTab=u||"doc",l.hideThfWebSample=0===l.samplesLength})},l.prototype.ngOnDestroy=function(){this.sub.unsubscribe()},l}(),I=e.Gb({encapsulation:2,styles:[],data:{}});function m(l){return e.cc(0,[(l()(),e.Ib(0,16777216,null,null,10,"po-page-default",[["p-title"," Code Editor Register"]],null,null,null,o.Qb,o.J)),e.Hb(1,1622016,null,0,r.Db,[e.gb,e.R,t.m],{actions:[0,"actions"],title:[1,"title"]},null),(l()(),e.Ib(2,0,null,0,8,"po-tabs",[["p-size","1"]],null,null,null,o.hc,o.ab)),e.Hb(3,49152,null,1,r.jc,[e.j],null,null),e.Yb(603979776,1,{tabs:1}),(l()(),e.Ib(5,0,null,0,3,"po-tab",[["p-label","Documenta\xe7\xe3o"]],null,null,null,o.fc,o.Y)),e.Hb(6,1097728,[[1,4]],0,r.ec,[e.q],{active:[0,"active"],label:[1,"label"]},null),(l()(),e.Ib(7,0,null,0,1,"sample-po-code-editor-register-doc",[],null,null,null,d,i)),e.Hb(8,49152,null,0,p,[],null,null),(l()(),e.Ib(9,0,null,0,1,"po-tab",[["p-label","Exemplos"]],null,null,null,o.fc,o.Y)),e.Hb(10,1097728,[[1,4]],0,r.ec,[e.q],{active:[0,"active"],hide:[1,"hide"],label:[2,"label"]},null)],function(l,n){var u=n.component;l(n,1,0,u.actions," Code Editor Register");l(n,6,0,u.activeTab.includes("doc"),"Documenta\xe7\xe3o");l(n,10,0,u.activeTab.includes("web"),u.hideThfWebSample,"Exemplos")},null)}var Q=e.Eb("ng-component",b,function(l){return e.cc(0,[(l()(),e.Ib(0,0,null,null,1,"ng-component",[],null,null,null,m,I)),e.Hb(1,245760,null,0,b,[t.a,t.m],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),g=u("Ip0R"),h=u("t/Na"),y=u("gIcY"),f=u("oVQh"),v=u("aVyw"),w=u("PCNd"),P=function(){return function(){}}();u.d(n,"DocPoCodeEditorRegisterModuleNgFactory",function(){return E});var E=e.Fb(s,[],function(l){return e.Pb([e.Qb(512,e.m,e.rb,[[8,[a.a,o.pc,o.qc,o.rc,o.sc,o.tc,o.uc,o.wc,o.vc,o.xc,o.yc,o.zc,o.Ac,o.a,o.Bc,c.a,Q]],[3,e.m],e.I]),e.Qb(4608,g.q,g.p,[e.E,[2,g.H]]),e.Qb(4608,h.m,h.s,[g.e,e.N,h.q]),e.Qb(4608,h.t,h.t,[h.m,h.r]),e.Qb(4608,r.v,r.v,[e.m,e.g,e.A]),e.Qb(4608,r.Bb,r.Bb,[r.v]),e.Qb(4608,r.Ce,r.Ce,[]),e.Qb(5120,h.a,function(l,n,u,e,s){return[l,new r.X(n,u),new r.Y(e,s)]},[h.t,r.Bb,r.v,r.Ce,r.v]),e.Qb(4608,h.p,h.p,[]),e.Qb(6144,h.n,null,[h.p]),e.Qb(4608,h.l,h.l,[h.n]),e.Qb(6144,h.b,null,[h.l]),e.Qb(4608,h.g,h.o,[h.b,e.A]),e.Qb(4608,h.c,h.c,[h.g]),e.Qb(4608,y.s,y.s,[]),e.Qb(4608,y.d,y.d,[]),e.Qb(4608,r.He,r.He,[]),e.Qb(4608,r.Le,r.Le,[]),e.Qb(4608,r.Me,r.Me,[]),e.Qb(4608,r.Sc,r.Sc,[]),e.Qb(4608,r.Wc,r.Wc,[]),e.Qb(4608,r.Ke,r.Ke,[]),e.Qb(4608,r.Ne,r.Ne,[]),e.Qb(4608,r.E,r.E,[r.v]),e.Qb(4608,g.g,g.g,[e.E]),e.Qb(4608,g.d,g.d,[e.E]),e.Qb(4608,g.f,g.f,[e.E]),e.Qb(4608,r.rc,r.rc,[]),e.Qb(4608,g.y,g.y,[]),e.Qb(4608,r.Gd,r.Gd,[h.c]),e.Qb(4608,r.Hd,r.Hd,[h.c]),e.Qb(4608,r.Jd,r.Jd,[h.c]),e.Qb(4608,r.Ud,r.Ud,[]),e.Qb(4608,r.X,r.X,[r.Bb,r.v]),e.Qb(4608,r.Y,r.Y,[r.Ce,r.v]),e.Qb(4608,r.bb,r.bb,[]),e.Qb(4608,f.y,f.y,[h.c]),e.Qb(4608,f.C,f.C,[h.c]),e.Qb(4608,f.H,f.H,[h.c]),e.Qb(4608,f.I,f.I,[f.H]),e.Qb(4608,f.M,f.M,[h.c]),e.Qb(4352,v.c,{language:"terraform",options:{keywords:["resource","provider","variable","output","module","true","false"],operators:["{","}","(",")","[","]","?",":"],tokenizer:{root:[["[a-z_$][\\w$]*",{cases:{"@keywords":"keyword","@default":"identifier"}}],{include:"@whitespace"},["\\d*\\.\\d+([eE][\\-+]?\\d+)?","number.float"],["0[x][0-9a-fA-F]+","number.hex"],["\\d+","number"],["[;,.]","delimiter"],['"([^"\\\\]|\\\\.)*$',"string.invalid"],['"',{token:"string.quote",bracket:"@open",next:"@string"}],["'[^\\\\']'","string"],["'","string.invalid"]],comment:[["[^\\/*]+","comment"],["[\\/*]","comment"],["[\\#.*]","comment"]],string:[['[^\\\\"\\$]+',"string"],["\\$","string.interpolated","@interpolated"],["\\\\.","string.escape.invalid"],['"',{token:"string.quote",bracket:"@close",next:"@pop"}]],whitespace:[["[ \\t\\r\\n]+","white"],["\\/\\/.*$","comment"],["\\#.*$","comment"]],interpolated:[["[{]",{token:"string.escape.curly",switchTo:"@interpolated_compound"}],["","","@pop"]]}}},[]),e.Qb(5120,e.d,function(l,n){return[r.Ec(l,n)]},[r.De,r.He]),e.Qb(5120,r.cb,r.Fc,[r.De,h.c,r.He]),e.Qb(1073742336,g.c,g.c,[]),e.Qb(1073742336,h.e,h.e,[]),e.Qb(1073742336,h.d,h.d,[]),e.Qb(1073742336,y.r,y.r,[]),e.Qb(1073742336,y.g,y.g,[]),e.Qb(1073742336,y.p,y.p,[]),e.Qb(1073742336,r.c,r.c,[]),e.Qb(1073742336,r.e,r.e,[]),e.Qb(1073742336,t.p,t.p,[[2,t.u],[2,t.m]]),e.Qb(1073742336,r.g,r.g,[]),e.Qb(1073742336,r.Ge,r.Ge,[]),e.Qb(1073742336,r.mb,r.mb,[]),e.Qb(1073742336,r.l,r.l,[]),e.Qb(1073742336,r.xc,r.xc,[]),e.Qb(1073742336,r.j,r.j,[]),e.Qb(1073742336,r.n,r.n,[]),e.Qb(1073742336,r.p,r.p,[]),e.Qb(1073742336,r.y,r.y,[]),e.Qb(1073742336,r.I,r.I,[]),e.Qb(1073742336,r.H,r.H,[]),e.Qb(1073742336,r.K,r.K,[]),e.Qb(1073742336,r.Nb,r.Nb,[]),e.Qb(1073742336,r.M,r.M,[]),e.Qb(1073742336,r.eb,r.eb,[]),e.Qb(1073742336,r.Pc,r.Pc,[]),e.Qb(1073742336,r.Oc,r.Oc,[]),e.Qb(1073742336,r.vb,r.vb,[]),e.Qb(1073742336,r.Pb,r.Pb,[]),e.Qb(1073742336,r.Vc,r.Vc,[]),e.Qb(1073742336,r.u,r.u,[]),e.Qb(1073742336,r.Xc,r.Xc,[]),e.Qb(1073742336,r.Yc,r.Yc,[]),e.Qb(1073742336,r.D,r.D,[]),e.Qb(1073742336,r.Ab,r.Ab,[]),e.Qb(1073742336,r.Vb,r.Vb,[]),e.Qb(1073742336,r.Lb,r.Lb,[]),e.Qb(1073742336,r.qc,r.qc,[]),e.Qb(1073742336,r.hc,r.hc,[]),e.Qb(1073742336,r.S,r.S,[]),e.Qb(1073742336,r.mc,r.mc,[]),e.Qb(1073742336,r.P,r.P,[]),e.Qb(1073742336,r.U,r.U,[]),e.Qb(1073742336,r.lb,r.lb,[]),e.Qb(1073742336,r.Nd,r.Nd,[]),e.Qb(1073742336,r.rb,r.rb,[]),e.Qb(1073742336,r.tb,r.tb,[]),e.Qb(1073742336,r.Wd,r.Wd,[]),e.Qb(1073742336,r.ae,r.ae,[]),e.Qb(1073742336,r.de,r.de,[]),e.Qb(1073742336,r.zb,r.zb,[]),e.Qb(1073742336,r.Hb,r.Hb,[]),e.Qb(1073742336,r.Xb,r.Xb,[]),e.Qb(1073742336,r.ac,r.ac,[]),e.Qb(1073742336,r.kc,r.kc,[]),e.Qb(1073742336,r.vc,r.vc,[]),e.Qb(1073742336,r.zc,r.zc,[]),e.Qb(1073742336,r.Dc,r.Dc,[]),e.Qb(1073742336,r.w,r.w,[]),e.Qb(1073742336,r.F,r.F,[]),e.Qb(1073742336,r.V,r.V,[]),e.Qb(1073742336,r.W,r.W,[]),e.Qb(1073742336,r.Z,r.Z,[]),e.Qb(1073742336,r.hb,r.hb,[]),e.Qb(1073742336,r.Jb,r.Jb,[]),e.Qb(1073742336,r.wb,r.wb,[]),e.Qb(1073742336,f.c,f.c,[]),e.Qb(1073742336,f.f,f.f,[]),e.Qb(1073742336,f.h,f.h,[]),e.Qb(1073742336,f.k,f.k,[]),e.Qb(1073742336,f.m,f.m,[]),e.Qb(1073742336,f.o,f.o,[]),e.Qb(1073742336,f.q,f.q,[]),e.Qb(1073742336,f.s,f.s,[]),e.Qb(1073742336,f.u,f.u,[]),e.Qb(1073742336,f.w,f.w,[]),e.Qb(1073742336,f.a,f.a,[]),e.Qb(1073742336,f.x,f.x,[]),e.Qb(1073742336,r.ab,r.ab,[]),e.Qb(1073742336,v.b,v.b,[]),e.Qb(1073742336,w.a,w.a,[]),e.Qb(1073742336,P,P,[]),e.Qb(1073742336,s,s,[]),e.Qb(256,h.q,"XSRF-TOKEN",[]),e.Qb(256,h.r,"X-XSRF-TOKEN",[]),e.Qb(256,r.De,{contexts:{general:{en:{loginErrorPattern:"Invalid ID",loginPlaceholder:"Insert your ID",passwordErrorPattern:"Invalid PIN",passwordPlaceholder:"Insert your PIN",submitLabel:"Access your account",forgotPassword:"Forgot your ID or PIN?",highlightInfo:"For us the future is now"},es:{loginErrorPattern:"ID invalido",loginPlaceholder:"Inserte su ID",passwordErrorPattern:"Contrase\xf1a incorrecta",passwordPlaceholder:"Inserte su contrase\xf1a",submitLabel:"Accede a su cuenta",forgotPassword:"\xbfOlvid\xf3 su ID o contrase\xf1a?",highlightInfo:"Para nosotros el futuro es ahora"},pt:{loginErrorPattern:"ID inv\xe1lido",loginPlaceholder:"Insira seu ID",passwordErrorPattern:"Senha incorreta",passwordPlaceholder:"Insira sua senha",submitLabel:"Acesse a sua conta",forgotPassword:"Esqueceu seu ID ou sua senha?",highlightInfo:"Para n\xf3s o futuro \xe9 agora"}}},default:{context:"general",cache:!0}},[]),e.Qb(1024,t.k,function(){return[[{path:"",component:b}]]},[])])})}}]);