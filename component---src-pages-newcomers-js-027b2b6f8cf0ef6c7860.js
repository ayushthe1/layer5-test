(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[5043],{86135:function(e,t,n){"use strict";var a=n(34948),l=n(3070),r=n(79114);e.exports=function(e,t,n){var c=a(t);c in e?l.f(e,c,r(0,n)):e[c]=n}},71246:function(e,t,n){var a=n(70648),l=n(58173),r=n(97497),c=n(5112)("iterator");e.exports=function(e){if(null!=e)return l(e,c)||l(e,"@@iterator")||r[a(e)]}},18554:function(e,t,n){var a=n(46916),l=n(19662),r=n(19670),c=n(66330),o=n(71246),i=TypeError;e.exports=function(e,t){var n=arguments.length<2?o(e):t;if(l(n))return r(a(n,e));throw i(c(e)+" is not iterable")}},97659:function(e,t,n){var a=n(5112),l=n(97497),r=a("iterator"),c=Array.prototype;e.exports=function(e){return void 0!==e&&(l.Array===e||c[r]===e)}},20408:function(e,t,n){var a=n(49974),l=n(46916),r=n(19670),c=n(66330),o=n(97659),i=n(26244),m=n(47976),s=n(18554),u=n(71246),p=n(99212),h=TypeError,d=function(e,t){this.stopped=e,this.result=t},E=d.prototype;e.exports=function(e,t,n){var b,g,f,A,y,x,N,w=n&&n.that,k=!(!n||!n.AS_ENTRIES),v=!(!n||!n.IS_RECORD),O=!(!n||!n.IS_ITERATOR),I=!(!n||!n.INTERRUPTED),C=a(t,w),M=function(e){return b&&p(b,"normal",e),new d(!0,e)},j=function(e){return k?(r(e),I?C(e[0],e[1],M):C(e[0],e[1])):I?C(e,M):C(e)};if(v)b=e.iterator;else if(O)b=e;else{if(!(g=u(e)))throw h(c(e)+" is not iterable");if(o(g)){for(f=0,A=i(e);A>f;f++)if((y=j(e[f]))&&m(E,y))return y;return new d(!1)}b=s(e,g)}for(x=v?e.next:b.next;!(N=l(x,b)).done;){try{y=j(N.value)}catch(B){p(b,"throw",B)}if("object"==typeof y&&y&&m(E,y))return y}return new d(!1)}},99212:function(e,t,n){var a=n(46916),l=n(19670),r=n(58173);e.exports=function(e,t,n){var c,o;l(e);try{if(!(c=r(e,"return"))){if("throw"===t)throw n;return n}c=a(c,e)}catch(i){o=!0,c=i}if("throw"===t)throw n;if(o)throw c;return l(c),n}},38559:function(e,t,n){var a=n(82109),l=n(20408),r=n(86135);a({target:"Object",stat:!0},{fromEntries:function(e){var t={};return l(e,(function(e,n){r(t,e,n)}),{AS_ENTRIES:!0}),t}})},59423:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var a=n(67294),l=n(29499),r=n(71082),c=function(e){var t=e.canonical,n=e.description,c=e.image,o=e.schemaMarkup,i=e.title,m=e.children,s=(0,l.useLocation)().pathname,u=(0,r.useStaticQuery)("4047814605").site.siteMetadata,p=u.title,h=u.description,d=u.image,E=u.siteUrl,b=u.twitterUsername,g={title:i||p,description:n||h,image:""+E+(c||d),url:(""+E+(s.replace(".html","")||"")).replace(/\/$/,""),twitterUsername:b};return t||(t=g.url),a.createElement(a.Fragment,null,a.createElement("title",null,g.title),a.createElement("meta",{name:"description",property:"og:description",content:g.description}),a.createElement("meta",{name:"og:description",content:g.description}),a.createElement("meta",{name:"image",property:"og:image",content:g.image}),a.createElement("meta",{name:"og:image",content:g.image}),a.createElement("meta",{name:"og:title",content:g.title}),a.createElement("meta",{name:"og:url",content:g.url}),a.createElement("meta",{name:"url",property:"og:url",content:g.url}),a.createElement("meta",{name:"og:type",content:"website"}),a.createElement("meta",{name:"author",content:"Layer5, Inc."}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:title",content:g.title}),a.createElement("meta",{name:"twitter:url",content:g.url}),a.createElement("meta",{name:"twitter:description",content:g.description}),a.createElement("meta",{name:"twitter:image",content:g.image}),a.createElement("meta",{name:"twitter:creator",content:g.twitterUsername}),a.createElement("meta",{charSet:"utf-8"}),a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),a.createElement("link",{rel:"shortcut icon",type:"image/x-icon",href:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAjgAAAI4CAMAAABQq2PEAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAdVBMVEU8SU88SU88SU88SU88SU88SU80WloejnwefnctbGYA06kAs58tZGMLn5APmYsWjIElcW0xXV4ErZoahXwTkoYieHIHppUpamg4UFQ0VlkPsZMlfXEpdGsxY2AEy6QWoIcihncLupgal4ITqI04UlUHwp7///9MNExiAAAABXRSTlMgQDCAwBwyzuMAAAABYktHRCZaCJi1AAAACXBIWXMAACxKAAAsSgF3enRNAAAAB3RJTUUH5QITFgYdn8afHQAAB1ZJREFUeNrt3dtSIzcUQFFykd2ead+N3TYQBkL+/xfzkMeEqkFBLemw9hcMpTWtI3VT3N39In24X+9+S9KH+x0cgSNwBI7AkcAROAJH4AgcCRyBI3AEjsCRwBE4AkfgCBwJHIEjcASOwJHAETgCR+AIHAkcgSNwBI7AkcAROAJH4EjgCByBI3AEjgSOwBE4AkfgSOAIHIEjcASOBI7AETgCR+BI4AgcgSNwBI4EjsAROAJH4EjgCByBI3AEDjgCR+AIHIEjgSNwBI7AETgSOAJH4AgcgSOBI3AEjsAROBI46gjOYhmo937IocF6h7P6Fqj3fsjvDQYOOOCAAw444IADDjjggAMOOOCAAw444IADDjjggAMOOOCAAw444IADDjjggAMOOOCAAw444IADDjjggAMOOOCAAw444IADDjjggAMOOOCAAw444IADDjjggAMOOOCAAw444IADDjjggAMOOOCAAw444IADDjjggAMOOOCAAw444IADDjjggAMOOOCAAw444IADDjjggAMOOOCAAw444IADDjjggAMOOOCAAw444IADDjjggAMOOOCAAw444IADDjjg1IKzSqoeOAJH4IADDjjggCNwBI7AAQcccMABR+AIHIEDDjjggAOOwBE4AgcccMABBxyBI3DAAQcccMABBxyBI3DAAQcccMABBxyBI3DAAQcccMABRwJH4AgcgSOBI3AEjsAROBI4AkfgCByBI4EjcASOwBE4EjgCR+AInH81fi/TaNnAAQcccMABR+AIHHDAAQcccMABR+AIHHDAAQcccMABR+AIHHDAAQcccMABR18FznrzpdoOwzDsxj04yuuwOe724ChPz+l+D46yOm8v4CjvwXPcg6O8M8IOHOVtWcMEjrJ2rGp0wOmdzj04ytuwRnCU1WkCR1n71QUcZbWdwFHWpLMHR1nb1Q4cZXUER80POuBEaj2Bo7blgEMOOJpPDjjh5ICjvLMVOMpqAEdZXcBR1tuHKzhqdEAGJ2RHcJTVCI5yOk/gqMUzOThRu4KjnDbgqMH5GByPHHA03yMHHI8ccDTfIwecwG3BUWt3OeBE7h4c5XQGR1ntwVFOR3DU1l4FjnMVOJrvXAVO7E7gKKcDOGpqyAEneBdwlNMAjnLagKOc1uAoK3AEjuZrBEfgCBxwvuQNIDhuAMEROAJH4IADzgxwplEfCBxlBY7AETjggAMOOOAIHIEjcMABBxxwwBE4AkfggAMOOOCAI3AEjsABBxxwwAFH4AgcSwYOOOCAAw44+omGMo3gqKHAETgCR+AIHAkcgSNwBI7AkcAROAJH4AgcCRyBI3AEjsCRwBE4cbuV6QGc4H0r0xIccMAROO9U4m+TjuCAAw444IADDjjggAMOOOCAAw444IADDjjggAMOOOCAAw444IADDjjggAMOOOCAAw444IADDjjggAMOOOCAAw444IADDjjggAMOOOCAAw444IADDjjggAMOOOCAAw444IADDjjgtAtnO3xy7/3jlzUCpxicT2/m//xVAgcccMABBxxwwAEHHHDAAQcccMABBxxwwAEHHHDAAQcccMABBxxwwAHnP3sEB5ycVp3BmcABJytw2ugJHHBySr3B2YDTQn90B+cETgvduoMzgNNCz93BuYDTQj+6g3MFJ/BpvCCcdAYn7qGqJJwTOPV76RDODpz6vXYI5wpO3BGnJJy0Bifq9V9ZOEdwot7ilIWzByfoxziF4bS/V0WHU26nKgvnHpygZ6rCcCZw6rboFE7aghPxzXh5OFdwQl7iFIfT+muH2HBeUr9wRnAinsXLw2l8ygkN55Z6hnMFJ+KEUx5O21+QRobzZ+obznQGp8ql8aJzOE1/exwYzo/UO5yWj+Rx4dxS/3CmAzjRNqpZ4DR8mRMWzkOKAKfdk1VUOM8pBpxmx5ygcF7eosCZ1uBEGnBmg5OuB3Bmc/OU4sBJ+wM4Ed5tzg6nTTkR4TykWHCalBMQzkxuZoTTopx4cOZyMyecBuVEgzPPXDw7nPZO5cHg/DWfm3nhpOkETt/3fpXgtPY7eqHgvM66kHPDSfszOEXGm8cUG06ajuAU+FD0LUWHk9J4Bqfvx00lOGkaDuB85nTzlr4GnJSuW3A+7SvRRY0VrASnEToB4NxWddavGpwm6HQP53lVa/Uqwklpuj+D8z8uipeLemtXFU5Kab89gJN1kHp+rLpwteGklMbjGpwPPmteH2uvWgNwUkrT5bgB5yen4deHRQNL1gacf4blcRg2mw0477zCvN2Wy9VTK6vVEBz1FDgCR+AIHIEjgSNwBI7AETgSOAJH4AgcgSOBI3AEjsAROBI4AkfgCByBI4EjcASOwBE4EjgCR+AIHIEjgSNwBI7AkcAROAJH4AgcCRyBI3AEjsCRwBE4AkfgCBwJHIEjcASOwJHAETgCR+AIHAkcgSNwBI7AkcAROAJH4AgccASOwBE4AkcCR+AIHIEjcCRwBI7AETgCRwJH4AgcgSNwJHAEjtqA8zceID7P7ieoSwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wMi0xOVQyMjowNTowNyswMDowMJdhRXIAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDItMTlUMjI6MDU6MDcrMDA6MDDmPP3OAAAAAElFTkSuQmCC"}),a.createElement("link",{rel:"canonical",href:t}),o&&a.createElement("script",{type:"application/ld+json"},JSON.stringify(o)),m)};c.defaultProps={title:null,lang:"en",meta:[],description:"",image:null};var o=c},71134:function(e,t,n){"use strict";n.r(t),n.d(t,{Head:function(){return b},default:function(){return E}});var a=n(67294),l=n(59423),r=(n(38559),n(64423)),c=r.default.div.withConfig({displayName:"webformstyle__Webform",componentId:"sc-12fj3qb-0"})(['\n  \n  .timeline {\n    list-style-type: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 50px 0;\n  }\n  \n  .li {\n    transition: all 200ms ease-in;\n  }\n  \n  .timestamp {\n    margin-bottom: 20px;\n    padding: 0px 40px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-weight: 100;\n  }\n  \n  .status {\n    padding: 0px 40px;\n    display: flex;\n    justify-content: center;\n    border-top: 5px solid #EFEFEF;\n    position: relative;\n    transition: all 200ms ease-in;\n  }\n  .status:before {\n    content: "";\n    width: 25px;\n    height: 25px;\n    background-color: white;\n    border-radius: 25px;\n    border: 5px solid #EFEFEF;\n    position: absolute;\n    top: -15px;\n    left: 42%;\n    transition: all 200ms ease-in;\n  }\n\n  .li.active .status::before {\n    border-color: #00B39F;\n  }\n\n  .li.complete .status,\n  .li.active .status {\n    border-top: 5px solid #00B39F;\n  }\n  .li.complete .status:before {\n    background-color: #00B39F;\n    border: none;\n    transition: all 200ms ease-in;\n  }\n  .li.complete .status h4 {\n    color: #66DC71;\n  }\n\n  .required-sign {\n    color: #8b0000;\n  }\n\n  .checkbox-label {\n    font-size: .8rem;\n  }\n\n  @media (min-width: 320px) and (max-width: 700px) {\n    .status {\n      border-top: 3px solid #EFEFEF;\n      padding: 0px 25px;\n    }\n    .status:before {\n      content: "";\n      width: 20px;\n      height: 20px;\n      border-radius: 20px;\n      border: 3px solid #EFEFEF;\n      top: -12px;\n      left: -10%\n    }\n  }\n  .member-header{\n    align-items:center;\n    padding-left:200px\n  }\n\n    .title {\n        font-weight: 700;\n        margin: 70px 0px 10px 0px;\n    }\n\n    .para {\n        color: #777777;\n    }\n    .label {\n      font-size: .9rem;\n    }\n\n    .container-1 {\n      margin: 40px 0;\n      \n      .text {\n        margin: 80px 0;\n      }\n    }\n\n    .btn-prev1 {\n      float: right;\n      margin: 20px 0;\n      background-color: white; \n      border: none;\n      color: #828C8C;\n      padding: 12px 15px;\n      font-size: 16px;\n      cursor: pointer;\n      margin: 0 5px;\n\n      .back {\n        font-size: 20px;\n      }\n    }\n\n    .btn-prev1:hover {\n      transition: all 200ms ease-in;\n      color: #00B39F;\n    }\n\n    .form {\n        margin: 40px 40px;\n\n        .form-name {\n            font-weight: 600;\n            margin: 20px 0px 5px 3px;\n            display: block;\n        }\n\n        .text-field {\n            width: 100%;\n            border: 1px solid black;\n            border-radius: 10px;\n            padding: 1rem .5rem;\n            font-size: .9rem;\n        }\n\n        .text-field:focus {\n          border: 2px solid #00B39F;\n\n        }\n\n        .form-select {\n            width: 150px;\n            border: 1px solid black;\n            border-radius: 10px;\n            padding: 1rem .5rem;\n        }\n\n        .upload-field {\n            width: 100%;\n            border: 1px dashed black;\n            border-radius: 15px;\n            height: 50px;\n            padding: 12px;\n        }\n\n        .form-check {\n          width: 20px;\n          height: 20px;\n          border-radius: 15px;\n          margin: 2px 10px !important;\n        }\n\n        .btn {\n          float: right;\n          margin: 20px 0;\n        }\n\n      }\n      .btn-wrapper {\n        float: right;\n        width: 350px;\n\n        .btn-next {\n          float: left;\n        }\n\n        button.btn-prev {\n          background-color: white; \n          border: none;\n          color: #828C8C;\n          float: left;\n          padding: 12px 15px;\n          font-size: 16px;\n          cursor: pointer;\n          margin: 0 5px;\n\n          .back {\n            font-size: 20px;\n          }\n        }\n\n        .btn-prev:hover {\n          transition: all 200ms ease-in;\n          color: #00B39F;\n        }\n      }\n\n    .center {\n        /* display: flex;\n        flex-wrap: wrap; */\n        align-items: center;\n        justify-content: center;\n        margin: 90px;\n        padding:0px 10px;\n    }\n\n    .option {\n        cursor: pointer;\n        flex: 1 1 160px;\n        /* border-radius: 15px; */\n        background-color: #C9FCF6;\n        margin: 25px 5px;\n        color: #00B39F;\n        text-align: center;\n        padding: 25px 10px; \n    }\n    .option:hover{\n        background-color: #00B39F;\n        color:white;\n    }\n    .option.active{\n      background-color: #00B39F;\n      color:white;\n    }\n\n    .black-box {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      padding: 20px;\n      min-height: 400px;\n      margin: 3rem 13%;\n      background-color: ',";\n      \n      h2, h4 {\n        color: white;\n      }\n      h4{\n        margin-top: 1rem;\n        margin-bottom: 2rem;\n      }\n      p {\n        margin-top: .85rem;\n        color: white;\n      }\n\n      .btn-box {\n\n        .btn-one, .btn-two {\n          margin: .65rem;\n        }\n\n        .btn-one:hover {\n          color: ",";\n        }\n        .btn-two:hover {\n          color: ",";\n        }\n      }\n\n      @media only screen and (max-width: 600px) {\n        .btn-box {\n          width: 100%;\n        }\n      }\n    }\n\n    h2.title {\n      color: ",";\n    }\n"],(function(e){return e.theme.darkJungleGreenColor}),(function(e){return e.theme.darkJungleGreenColor}),(function(e){return e.theme.darkJungleGreenColor}),(function(e){return e.theme.primaryColor})),o=n(63689),i=r.default.div.withConfig({displayName:"SlackLinkNotif__SlackNotif",componentId:"sc-11rv4r7-0"})(["\n    color: #000000;\n    .container {\n        background-color: #FFF7D8;\n        padding: 16px 0px 16px 0px;\n    }\n\n    .text {\n        text-align: center;\n    }\n\n    .notice {\n      background-color: #00B39F;\n      border-radius: 50%;\n      color: white;\n      padding: 1px 10px;\n      font-weight: 700;\n    }\n"]),m=function(){return a.createElement(i,null,a.createElement("div",{className:"container"},a.createElement("div",{className:"text"},a.createElement("span",{className:"notice"}," !")," If you have not already joined us in Slack, jump in! ",a.createElement(o.default,{secondary:!0,title:"Join Now",url:"https://slack.layer5.io/",external:!0}))))},s=n(37242),u=n(75708),p=n(8852),h=n(71082),d=function(){var e=(0,a.useState)(0),t=e[0],n=e[1],l=(0,a.useState)(""),r=l[0],i=l[1],d=(0,a.useState)({}),E=d[0],b=d[1],g=(0,a.useState)({}),f=g[0],A=g[1],y=(0,a.useState)({}),x=y[0],N=y[1],w=(0,a.useState)(!1),k=w[0],v=w[1],O=function(){3===t&&v(!0),window.scrollTo(0,0)},I=function(){window.scrollTo(0,0),n(t-1)};(0,a.useEffect)((function(){k&&p.Z.post("https://hook.us1.make.com/bmmi8btg3xb2fmx6kcavxmtf0a3uame2",{memberFormOne:E,MemberFormThirdValue:f,MemberFormFourValue:x,role:r})}),[k]);var C=function(){return a.createElement("ul",{className:"timeline",id:"timeline"},a.createElement("li",{className:0===t?"li active":t>0?"li complete":"li"},a.createElement("div",{className:"status"})),a.createElement("li",{className:1===t?"li active":t>1?"li complete":"li"},a.createElement("div",{className:"status"})),a.createElement("li",{className:2===t?"li active":t>2?"li complete":"li"},a.createElement("div",{className:"status"})),a.createElement("li",{className:3===t?"li active":t>3?"li complete":"li"},a.createElement("div",{className:"status"})),a.createElement("li",{className:t>=4?"li complete":"li"},a.createElement("div",{className:"status"})))},M=function(){return a.createElement(s.W2,null,a.createElement("h2",{className:"title"},"New Community Member"),a.createElement("p",{className:"para"},"Hi! Welcome to the Layer5 community. As you get oriented with the community and its projects, will you consider filling in this form? It helps us get familiarized with you and you with the ongoing projects and community. There is much to learn around the technologies at-hand. We'll look to get you acclimated and engaged around your areas of interest and passion. "),a.createElement(u.J9,{initialValues:{firstname:E.firstname?E.firstname:"",lastname:E.lastname?E.lastname:"",email:E.email?E.email:"",occupation:E.occupation?E.occupation:"",org:E.org?E.org:"",github:E.github?E.github:"",twitter:E.twitter?E.twitter:"",linkedin:E.linkedin?E.linkedin:"",tshirtSize:E.tshirtSize?E.tshirtSize:"",picture:E.picture?E.picture:""},onSubmit:function(e){var t=Object.fromEntries(Object.entries(e).map((function(e){return[e[0],e[1].trim()]})));b(t),n(1),O()}},a.createElement(u.l0,{className:"form",method:"post"},a.createElement("label",{htmlFor:"fname",className:"form-name"},"First Name ",a.createElement("span",{className:"required-sign"},"*")),a.createElement(u.gN,{type:"text",className:"text-field",id:"firstname",name:"firstname",maxLength:"32",pattern:"[A-Za-z\\s]{1,32}",required:!0,onInvalid:function(e){return e.target.setCustomValidity("Please fill-in this field")},onInput:function(e){return e.target.setCustomValidity("")}}),a.createElement("label",{htmlFor:"lname",className:"form-name"},"Last Name ",a.createElement("span",{className:"required-sign"},"*")),a.createElement(u.gN,{type:"text",className:"text-field",id:"lastname",name:"lastname",maxLength:"32",pattern:"[A-Za-z\\s]{1,32}",required:!0,onInvalid:function(e){return e.target.setCustomValidity("Please fill-in this field")},onInput:function(e){return e.target.setCustomValidity("")}}),a.createElement("label",{htmlFor:"email",className:"form-name"},"Email Address ",a.createElement("span",{className:"required-sign"},"*")),a.createElement(u.gN,{type:"text",className:"text-field",id:"email",name:"email",pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z\\s]{2,4}$",required:!0,onInvalid:function(e){return e.target.setCustomValidity("Please fill-in this field")},onInput:function(e){return e.target.setCustomValidity("")}}),a.createElement("label",{htmlFor:"occupation",className:"form-name"},"Occupation / Title"),a.createElement(u.gN,{type:"text",className:"text-field",id:"occupation",name:"occupation"}),a.createElement("label",{htmlFor:"org",className:"form-name"},"Organization / Company / School"),a.createElement(u.gN,{type:"text",className:"text-field",id:"org",name:"org"}),a.createElement("label",{htmlFor:"github",className:"form-name"},"GitHub"),a.createElement(u.gN,{type:"url",placeholder:"https://github.com/",className:"text-field",id:"github",name:"github",pattern:"http(s?)(:\\/\\/)((www.)?)github.com(\\/)([a-zA-z0-9\\-_]+)"}),a.createElement("label",{htmlFor:"twitter",className:"form-name"},"Twitter"),a.createElement(u.gN,{type:"url",placeholder:"https://twitter.com/",className:"text-field",id:"twitter",name:"twitter",pattern:"http(s?)(:\\/\\/)((www.)?)twitter.com(\\/)([a-zA-z0-9\\-_]+)"}),a.createElement("label",{htmlFor:"linkedin",className:"form-name"},"Linkedin"),a.createElement(u.gN,{type:"url",placeholder:"https://www.linkedin.com/",className:"text-field",id:"linkedin",name:"linkedin"}),a.createElement("label",{htmlFor:"tshirtSize",className:"form-name"},"T-shirt size"),a.createElement("div",{role:"group","aria-labelledby":"my-radio-group"},a.createElement("label",null,a.createElement(u.gN,{type:"radio",name:"tshirtSize",value:"XS"}),"XS"),a.createElement("br",null),a.createElement("label",null,a.createElement(u.gN,{type:"radio",name:"tshirtSize",value:"S"}),"S"),a.createElement("br",null),a.createElement("label",null,a.createElement(u.gN,{type:"radio",name:"tshirtSize",value:"M"}),"M"),a.createElement("br",null),a.createElement("label",null,a.createElement(u.gN,{type:"radio",name:"tshirtSize",value:"L"}),"L"),a.createElement("br",null),a.createElement("label",null,a.createElement(u.gN,{type:"radio",name:"tshirtSize",value:"XL"}),"XL"),a.createElement("br",null),a.createElement("label",null,a.createElement(u.gN,{type:"radio",name:"tshirtSize",value:"XXL"}),"XXL")),a.createElement("label",{htmlFor:"picture",className:"form-name"},"Picture"),a.createElement(u.gN,{type:"url",className:"text-field",id:"picture",name:"picture"}),a.createElement("p",{className:"para label"},"Please provide a link to your profile photo. Profile photos are used for ",a.createElement(h.Link,{to:"/community/members"},"community member profiles")," of longstanding community members."),a.createElement(o.default,{secondary:!0,type:"submit",className:"btn",title:"Next Step"})," ",a.createElement("br",null),a.createElement("br",null),a.createElement("br",null),a.createElement("br",null))))},j=function(){return a.createElement(s.W2,null,a.createElement("h2",{className:"title"},"About You and Why You're Here"),a.createElement("p",{className:"para"},"Which describes your main focus as a community member?"," "),a.createElement("div",{className:"center"},a.createElement("div",{className:"Contributor"===r?"option active":"option",onClick:function(){i("Contributor")}},"I'm here as a Contributor"),a.createElement("div",{className:"Developer"===r?"option active":"option",onClick:function(){i("Developer")}},"I'm here as a User"),a.createElement("div",{className:"User"===r?"option active":"option",onClick:function(){i("User")}},"I'm here as a User and Contibutor"),a.createElement("div",{className:"Bystander"===r?"option active":"option",onClick:function(){i("Bystander")}},"I'm here as a Bystander ",a.createElement("br",null),a.createElement("small",null,"(here to learn and absorb passively)")),a.createElement("br",null),a.createElement("br",null),a.createElement("div",{className:"btn-wrapper"},a.createElement("button",{onClick:I,className:"btn-prev"},a.createElement("span",{className:"back"},"←")," Previous Step"),a.createElement(o.default,{onClick:function(){return n(2)},secondary:!0,type:"submit",className:"btn-next",title:"Next Step"}))),a.createElement("br",null),a.createElement("br",null),a.createElement("br",null),a.createElement("br",null))},B=function(){return a.createElement(s.W2,null,a.createElement("h2",{className:"title"},"Layer5 and You"),a.createElement(u.J9,{initialValues:{projects:f.projects?f.projects:[],tutorials:f.tutorials?f.tutorials:[],meshMate:f.tutorials?f.meshMate:[],interests:f.interests?f.interests:"",profiency:f.profiency?f.profiency:"",interestToShareContribution:f.interestToShareContribution?f.interestToShareContribution:"",areaOfFocus:f.areaOfFocus?f.areaOfFocus:[]},onSubmit:function(e){A(e),n(3),O()}},a.createElement(u.l0,{className:"form"},a.createElement("p",{className:"form-name"},"Which project(s) are of interest to you?"),a.createElement("label",null,a.createElement(u.gN,{type:"checkbox",name:"projects",value:"Meshery",className:"form-check"}),a.createElement("span",{className:"checkbox-label"},"Meshery")),a.createElement("br",null),a.createElement("label",null,a.createElement(u.gN,{type:"checkbox",name:"projects",value:"Service Mesh Performance (SMP)",className:"form-check"}),a.createElement("span",{className:"checkbox-label"},"Service Mesh Performance (SMP)")),a.createElement("br",null),a.createElement("label",null,a.createElement(u.gN,{type:"checkbox",name:"projects",value:"NightHawk",className:"form-check"}),a.createElement("span",{className:"checkbox-label"},"NightHawk")),a.createElement("br",null),a.createElement("label",null,a.createElement(u.gN,{type:"checkbox",name:"projects",value:"Service Mesh Landscape",className:"form-check"}),a.createElement("span",{className:"checkbox-label"},"Service Mesh Landscape")),a.createElement("br",null),a.createElement("label",null,a.createElement(u.gN,{type:"checkbox",name:"projects",value:"WASM Filter Hub",className:"form-check"}),a.createElement("span",{className:"checkbox-label"},"WASM Filter Hub")),a.createElement("br",null),a.createElement("label",null,a.createElement(u.gN,{type:"checkbox",name:"projects",value:"I'm not sure,yet. I'm still exploring",className:"form-check"}),a.createElement("span",{className:"checkbox-label"},"I'm not sure,yet. I'm still exploring")),a.createElement("br",null),a.createElement("label",null,a.createElement(u.gN,{type:"checkbox",name:"projects",value:"All of them!",className:"form-check"}),a.createElement("span",{className:"checkbox-label"},"All of them!")),a.createElement("p",{className:"form-name"},"Mark any of the following 101 tutorials that you would like to receive."),a.createElement("label",null,a.createElement(u.gN,{type:"checkbox",name:"tutorials",value:"A Git and Github primer",className:"form-check"}),a.createElement("span",{className:"checkbox-label"},"A Git and Github primer")),a.createElement("br",null),a.createElement("label",null,a.createElement(u.gN,{type:"checkbox",name:"tutorials",value:"Contributing to Meshery UI with ReactJS, NextJS and Material UI",className:"form-check"}),a.createElement("span",{className:"checkbox-label"},"Contributing to Meshery UI with ReactJS, NextJS and Material UI")),a.createElement("br",null),a.createElement("label",null,a.createElement(u.gN,{type:"checkbox",name:"tutorials",value:"Introduction to Service Meshes",className:"form-check"}),a.createElement("span",{className:"checkbox-label"},"Introduction to Service Meshes")),a.createElement("br",null),a.createElement("label",null,a.createElement(u.gN,{type:"checkbox",name:"tutorials",value:"Introduction to using a cloud native management plane: Meshery",className:"form-check"}),a.createElement("span",{className:"checkbox-label"},"Introduction to using a cloud native management plane: Meshery")),a.createElement("br",null),a.createElement("label",null,a.createElement(u.gN,{type:"checkbox",name:"tutorials",value:"How to evaluate service mesh performance and analyze the data",className:"form-check"}),a.createElement("span",{className:"checkbox-label"},"How to evaluate service mesh performance and analyze the data")),a.createElement("br",null),a.createElement("label",null,a.createElement(u.gN,{type:"checkbox",name:"tutorials",value:"How gRPC is used in Meshery and Service Mesh Performance (SMP)",className:"form-check"}),a.createElement("span",{className:"checkbox-label"},"How gRPC is used in Meshery and Service Mesh Performance (SMP)")),a.createElement("br",null),a.createElement("label",null,a.createElement(u.gN,{type:"checkbox",name:"tutorials",value:"How Jekyll websites work and how to contribute to Layer5 projects",className:"form-check"}),a.createElement("span",{className:"checkbox-label"},"How Jekyll websites work and how to contribute to Layer5 projects")),a.createElement("br",null),a.createElement("label",null,a.createElement(u.gN,{type:"checkbox",name:"tutorials",value:"How mesheryctl uses Go Cobra",className:"form-check"}),a.createElement("span",{className:"checkbox-label"},"How mesheryctl uses Go Cobra")),a.createElement("br",null),a.createElement("label",null,a.createElement(u.gN,{type:"checkbox",name:"tutorials",value:"Introduction to Gatsby and Layer5",className:"form-check"}),a.createElement("span",{className:"checkbox-label"},"Introduction to Gatsby and Layer5")),a.createElement("br",null),a.createElement("label",null,a.createElement(u.gN,{type:"checkbox",name:"tutorials",value:"Introduction to Istio",className:"form-check"}),a.createElement("span",{className:"checkbox-label"},"Introduction to Istio")),a.createElement("br",null),a.createElement("label",null,a.createElement(u.gN,{type:"checkbox",name:"tutorials",value:"None of the above",className:"form-check"}),a.createElement("span",{className:"checkbox-label"},"None of the above")),a.createElement("p",{className:"form-name"},a.createElement(h.Link,{to:"https://layer5.io/community/meshmates"},"Layer5 MeshMates")," is a community member mentoring program aimed at individuals new to open source or simply new to Layer5 projects. Is this program of interest to you?"),a.createElement("label",null,a.createElement(u.gN,{type:"checkbox",name:"meshMate",value:"Yes, and I would like to explore engaging with a Layer5 MeshMate.",className:"form-check"}),a.createElement("span",{className:"checkbox-label"},"Yes, and I would like to explore engaging with a Layer5 MeshMate.")),a.createElement("br",null),a.createElement("label",null,a.createElement(u.gN,{type:"checkbox",name:"meshMate",value:"Maybe later.",className:"form-check"}),a.createElement("span",{className:"checkbox-label"},"Maybe later.")),a.createElement("br",null),a.createElement("label",null,a.createElement(u.gN,{type:"checkbox",name:"meshMate",value:"No, thank you.",className:"form-check"}),a.createElement("span",{className:"checkbox-label"},"No, thank you.")),a.createElement("br",null),a.createElement("p",{className:"para label"},"If you would like to pair with a MeshMate, please review each MeshMate profile to identify your ideal mentor. Once you have identified your ideal MeshMate or if you can’t decide on one, simple ask to be partnered in the ",a.createElement("a",{href:"https://layer5io.slack.com/archives/C019426UBNY"},"#newcomers channel")," in the Layer5 Slack."),a.createElement("label",{htmlFor:"interests",className:"form-name"},"What has your recent focus been? Why have you joined the community? What are you passionate about? Is there a specific project or aspect a project that interests you?",a.createElement("span",{className:"required-sign"},"*")),a.createElement(u.gN,{as:"textarea",className:"text-field",id:"interests",name:"interests",required:!0,onInvalid:function(e){return e.target.setCustomValidity("Please fill-in this field")},onInput:function(e){return e.target.setCustomValidity("")}}),a.createElement("label",{htmlFor:"profiency",className:"form-name"},"If a contributor, what tools, technologies, or languages are you most proficient with?"),a.createElement(u.gN,{as:"textarea",className:"text-field",id:"profiency",name:"profiency"}),a.createElement("p",{className:"para label"},"Examples: [Go/Gorilla, Javascript/React… ], [Photoshop, Illustrator, Figma…], [DevOps, Kubernetes, AWS, CI pipelining…], [Digital marketing, social media, community management…]"),a.createElement("p",{className:"form-name"},"Area(s) of Desired Focus"),a.createElement("label",null,a.createElement(u.gN,{type:"checkbox",name:"areaOfFocus",value:"Community Ambassador",className:"form-check"}),a.createElement("span",{className:"checkbox-label"},"Community Ambassador")),a.createElement("br",null),a.createElement("label",null,a.createElement(u.gN,{type:"checkbox",name:"areaOfFocus",value:"Community Management",className:"form-check"}),a.createElement("span",{className:"checkbox-label"},"Community Management")),a.createElement("br",null),a.createElement("label",null,a.createElement(u.gN,{type:"checkbox",name:"areaOfFocus",value:"Documentation",className:"form-check"}),a.createElement("span",{className:"checkbox-label"},"Documentation")),a.createElement("br",null),a.createElement("label",null,a.createElement(u.gN,{type:"checkbox",name:"areaOfFocus",value:"Digital Marketing",className:"form-check"}),a.createElement("span",{className:"checkbox-label"},"Digital Marketing")),a.createElement("br",null),a.createElement("label",null,a.createElement(u.gN,{type:"checkbox",name:"areaOfFocus",value:"Frontend Engineering",className:"form-check"}),a.createElement("span",{className:"checkbox-label"},"Frontend Engineering")),a.createElement("br",null),a.createElement("label",null,a.createElement(u.gN,{type:"checkbox",name:"areaOfFocus",value:"Backend Engineering",className:"form-check"}),a.createElement("span",{className:"checkbox-label"},"Backend Engineering")),a.createElement("br",null),a.createElement("label",null,a.createElement(u.gN,{type:"checkbox",name:"areaOfFocus",value:"DevOps",className:"form-check"}),a.createElement("span",{className:"checkbox-label"},"DevOps")),a.createElement("br",null),a.createElement("label",null,a.createElement(u.gN,{type:"checkbox",name:"areaOfFocus",value:"User",className:"form-check"}),a.createElement("span",{className:"checkbox-label"},"User")),a.createElement("br",null),a.createElement("label",null,a.createElement(u.gN,{type:"checkbox",name:"areaOfFocus",value:"Other",className:"form-check"}),a.createElement("span",{className:"checkbox-label"},"Other")),a.createElement("label",{htmlFor:"interestToShareContribution",className:"form-name"},"Now or eventually, would you like to speak or write about your works in the community and/or on the projects?",a.createElement("span",{className:"required-sign"},"*")),a.createElement("div",{role:"group","aria-labelledby":"my-radio-group"},a.createElement("label",null,a.createElement(u.gN,{type:"radio",name:"interestToShareContribution",value:"Yes",required:!0}),"Yes"),a.createElement("label",null,a.createElement(u.gN,{type:"radio",name:"interestToShareContribution",value:"Eventually",required:!0}),"Eventually"),a.createElement("label",null,a.createElement(u.gN,{type:"radio",name:"interestToShareContribution",value:"No",required:!0}),"No")),a.createElement("br",null),a.createElement("br",null),a.createElement("div",{className:"btn-wrapper"},a.createElement("button",{onClick:I,className:"btn-prev"},a.createElement("span",{className:"back"},"←")," Previous Step"),a.createElement(o.default,{secondary:!0,type:"submit",className:"btn-next",title:"Next Step"})),a.createElement("br",null),a.createElement("br",null))))},S=function(){return a.createElement(s.W2,null,a.createElement("h2",{className:"title"},"Expectations and Programs FAQ"),a.createElement("p",null,"Commonly asked questions about general engagement expectations and information focal to internship programs. See the ",a.createElement(h.Link,{to:"/community"},"Layer5 Community")," and ",a.createElement(h.Link,{to:"/programs"},"Open Source Internship Programs")," for additional information."),a.createElement(u.J9,{initialValues:{expect:!1,highlighted:!1,paid:!1,affiliated:!1,help:x.help?x.help:""},onSubmit:function(e){N(e),n(4),O()}},a.createElement(u.l0,{className:"form"},a.createElement("p",{className:"form-name"},"What can I expect from Layer5? What does Layer5 expect of me?"),a.createElement("p",{className:"para label"},"The Layer5 community expects you to get as much or more out of your time than you give to the projects. We expect earnest effort from its contributors. What “earnest effort” means is different for each community member as all have different circumstances. Suffice to say, the more you put into your efforts, the greater your reward will be. Most community contributors stay with the project for many months, if not indefinitely. Length of involvement is entirely up to the individual community member."),a.createElement("label",null,a.createElement(u.gN,{type:"checkbox",name:"expect",className:"form-check"}),a.createElement("span",null,"Ok")),a.createElement("p",{className:"form-name"},"I see works of other contributors being highlighted in the Layer5, Meshery, and SMP Twitter feeds, the Meshery and SMP showcases, and in the Layer5 YouTube channel."),a.createElement("p",{className:"para label"},"We try to elevate the works of our contributors. All of our community members are proud of their work and so are we! We want their work and names to be recognized across our collective technology industry. Be sure to follow and engage with these Twitter accounts, YouTube, and LinkedIn accounts."),a.createElement("label",null,a.createElement(u.gN,{type:"checkbox",name:"highlighted",className:"form-check"}),a.createElement("span",null,"Ok")),a.createElement("p",{className:"form-name"},"Are community contributors paid? Are internships paid? What do I get in return?"),a.createElement("p",{className:"para label"},"With few exceptions, generally community contributors and interns are not paid. Those that participate through Google Summer of Code, LFX, or Google Season of Docs do receive a stipend at the culmination of their internship. The largest return on time invested in the community for any contributor is the knowledge, relationships, recognition, and experience gained throughout their engagement. Their participation affords them an opportunity to work with world-class engineers, gives focus and purpose to their learning efforts on technologies they otherwise may not understand, and exposes their work broadly to the Cloud Native community. Letters of recommendation, mentorship and coaching, introduction to engineers at globally-recognized technology companies, potential contract or full-time work at Layer5, public writing and speaking opportunities are all examples of benefits those that participate can receive for their time spent."),a.createElement("label",null,a.createElement(u.gN,{type:"checkbox",name:"paid",className:"form-check"}),a.createElement("span",null,"Ok")),a.createElement("p",{className:"form-name"},"I see other contributors have affiliated themselves with Layer5 on LinkedIn. Am I encouraged to do the same?"),a.createElement("p",{className:"para label"},"Yes! We welcome you to affiliate with the community and projects. We consider this affiliation helpful in boosting your profile and resume in context of job searches and overall in general. Be sure to update your profile, and be social about your activities. We love to highlight our members!"),a.createElement("label",null,a.createElement(u.gN,{type:"checkbox",name:"affiliated",className:"form-check"}),a.createElement("span",null,"Ok")),a.createElement("p",{className:"form-name"},"Is there anything else we should know about you? How can we help you?"),a.createElement(u.gN,{type:"text",className:"text-field",name:"help"}),a.createElement("br",null),a.createElement("br",null),a.createElement("div",{className:"btn-wrapper"},a.createElement("button",{onClick:I,className:"btn-prev"},a.createElement("span",{className:"back"},"←")," Previous Step"),a.createElement(o.default,{secondary:!0,type:"submit",className:"btn-next",title:"Complete"})),a.createElement("br",null),a.createElement("br",null))))},D=function(){return a.createElement(s.W2,null,a.createElement("div",{className:"black-box"},a.createElement("h2",null,"Welcome to the Layer5 Community!"),a.createElement("h4",null,"Resources are on their way. See these in the meantime:"),a.createElement("div",{className:"btn-box"},a.createElement(o.default,{primary:!0,className:"btn-one",type:"button",title:"Community Handbook",url:"https://layer5.io/community/handbook"}),a.createElement(o.default,{secondary:!0,className:"btn-two",type:"button",title:"Newcomers Roadmap",url:"https://layer5.io/community/newcomers"})),a.createElement("p",null,"We are pleased to have you as a new member!")))};return a.createElement(c,null,a.createElement("div",null,a.createElement(m,null),a.createElement("div",null,a.createElement(C,null),0===t&&a.createElement(M,null),1===t&&a.createElement(j,null),2===t&&a.createElement(B,null),3===t&&a.createElement(S,null),4===t&&a.createElement(D,null))))},E=function(){return a.createElement(a.Fragment,null,a.createElement(d,null))},b=function(){return a.createElement(l.Z,{title:"Layer5 Community Member Form",description:"New member form for Layer5 community members: contributors, users and visitors",image:"/images/layer5-community-sign.png"})}}}]);
//# sourceMappingURL=component---src-pages-newcomers-js-027b2b6f8cf0ef6c7860.js.map