(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{30:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);for(var r=n(1),c=n.n(r),a=n(23),o=n.n(a),s=(n(30),n(3)),l=n(0),u=function(e){for(var t=[],n=0;n<8;n++)t.push("");return t},i=[],f=0;f<8;f++)i.push(u());for(var b=[],j=[],d=0;d<8;d++)b.push([""]),j.push(0);var v={boardCells:i,forecastCells:b,forecastCooldowns:j,selectedItem:"",selectedItemIndex:0,damage:0,step:0,interval:null,score:0,level:0,levelData:{red:"red",green:"green",blue:"blue"},started:!1,paused:!1},h=c.a.createContext();function m(e){var t=e.children,n=Object(r.useState)(v),c=Object(s.a)(n,2),a=c[0],o=c[1];return Object(l.jsx)(h.Provider,{value:[a,o],children:t})}var p=n(6),O=(n.p,n.p,n.p,n.p,n(24)),x=n(10),g=function(e,t){if(!t)return"?";if("number"===typeof e||""===e)return e;var n=Object(s.a)({upArrow:[x.a,t.green,0],rightArrow:[x.a,t.green,90],downArrow:[x.a,t.green,180],leftArrow:[x.a,t.green,270],crossBlue:[x.c,t.blue,0],crossRed:[x.c,t.red,0],bomb:[x.b,t.red,0]}[e],3),r=n[0],c=n[1],a=n[2];return Object(l.jsx)(O.a,{icon:r,color:c,rotation:a})};function C(e){var t=Object(r.useContext)(h)[0],n=e.value,c="forecast"===e.className&&t.forecastCooldowns[e.rowIndex]>t.step,a=function(r){return!r&&!t.paused&&("forecast"===e.className?e.rowIndex!==t.selectedItemIndex:""===n||t.selectedItem.includes("Blue"))}(c),o=e.rowIndex+1,s=o+1,u=e.startingColumn+e.columnIndex,i=u+1,f={gridArea:"".concat(o," / ").concat(u," / ").concat(s," / ").concat(i)};"number"===typeof n&&(f.color="purple");var b=t.paused?"":g(n,t.levelData),j="forecast"===e.className&&e.rowIndex===t.selectedItemIndex;return Object(l.jsx)("div",{className:"cell cell-".concat(e.className).concat(a?" clickable":"").concat(j?" selected":"").concat(c?" greyed-out":""),onClick:function(){a&&e.cellClick(e.rowIndex,e.columnIndex)},style:f,children:Object(l.jsx)("div",{className:"cell-value",children:b})})}function y(e){var t=e.cells,n=function(t,n){if("object"===typeof t)return t.map((function(t,r){return Object(l.jsx)(C,{rowIndex:n,columnIndex:r,value:t,setCell:e.setCell,className:e.className,startingColumn:e.startingColumn,cellClick:e.cellClick},"cell-".concat(r,",").concat(n))}));console.log("non-object")};return void 0===t?(console.log("cells undefined"),void console.log(e.className)):"object"===typeof t[0]?t.map((function(e,t){return n(e,t)})):n(t,0)}var w=n(12),I=function(e,t,n,r,c,a){var o=[[c,a]],l=[];l.push(c),l.push(a);for(var u={up:"down",down:"up",right:"left",left:"right"}[r],i=0;i<12&&(l=N(l,r));i++)if(o.push([l[0],l[1]]),e[l[0]][l[1]]==="".concat(u,"Arrow")){var f=k(o,e,t),b=Object(s.a)(f,2);e=b[0],t=b[1],n=!1;break}return[e,t,n]},N=function(e,t){switch(t){case"up":e[0]--;break;case"right":e[1]++;break;case"down":e[0]++;break;case"left":e[1]--}return e[0]<0||e[1]<0||e[0]>=8||e[1]>=8?null:e};function k(e,t,n){var r,c=Object(w.a)(e);try{for(c.s();!(r=c.n()).done;){var a=r.value,o=A(t,a[0],a[1],n),l=Object(s.a)(o,2);t=l[0],n=l[1]}}catch(u){c.e(u)}finally{c.f()}return[t,n]}var A=function(e,t,n,r){var c=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if("number"!==typeof r)throw"No number!";var a=e[t][n];return"crossRed"!==a||c?"bomb"!==a||c?("number"===typeof a&&(r+=a),e[t][n]="",[e,r]):S(e,t,n,r):D(e,t,n,r)},D=function(e,t,n,r){if("number"!==typeof r)throw"No number!";var c=A(e,t,n,r,!0),a=Object(s.a)(c,2);e=a[0],r=a[1];var o,l=[[t+1,n],[t-1,n],[t,n+1],[t,n-1]].filter((function(e){return e[0]>=0&&e[1]>=0&&e[0]<8&&e[1]<8})),u=Object(w.a)(l);try{for(u.s();!(o=u.n()).done;){var i=o.value,f=A(e,i[0],i[1],r),b=Object(s.a)(f,2);e=b[0],r=b[1]}}catch(j){u.e(j)}finally{u.f()}return[e,r]},S=function(e,t,n,r){if("number"!==typeof r)throw"No number!";var c=A(e,t,n,r,!0);e=c[0],r=c[1];var a,o=Object(w.a)([t-1,t,t+1].filter((function(e){return e>=0&&e<8})));try{for(o.s();!(a=o.n()).done;){var s=a.value,l=B(e,r,t,n,s);e=l[0],r=l[1]}}catch(u){o.e(u)}finally{o.f()}return[e,r]},B=function(e,t,n,r,c){if("number"!==typeof t)throw"No number!";var a,o=Object(w.a)([r-1,r,r+1].filter((function(e){return e>=0&&e<8&&(n!==c||r!==e)})));try{for(o.s();!(a=o.n()).done;){var s=a.value,l=A(e,c,s,t);e=l[0],t=l[1]}}catch(u){o.e(u)}finally{o.f()}return[e,t]},F=function(e,t,n,r,c){var a=!0;if("crossBlue"===e)return D(t,n,r,c);if(e.includes("Arrow")){var o=e.slice(0,e.length-5),s=I(t,c,a,o,n,r);t=s[0],c=s[1],a=s[2]}return a&&(t[n][r]=e),[t,c]},P=n(22),T={upArrow:1,rightArrow:1,downArrow:1,leftArrow:1,crossBlue:1,bomb:1},_=function(){return M(T)};function M(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(0===Object.keys(e).length)return null;var n=E(e),r=Math.floor(Math.random()*n.length),c=n[r];return t||"object"!==typeof c?c:M(c)}function E(e){if(Array.isArray(e))return e;var t=[];for(var n in e)J(t,n,e[n]);return t}function J(e,t,n){for(var r=0;r<n;r++)e.push(t);return e}var L=function(e,t){return[].concat(Object(P.a)(e.slice(0,t)),Object(P.a)(e.slice(t+1)),[[_()]])},R=function(e){if(e.step%10!==0)return null;for(var t=[],n=0;n<8;n++)t=z(t,n,e.boardCells);return M(t,!0)},z=function(e,t,n){for(var r=n[t],c=0;c<8;c++){""===r[c]&&e.push([t,c])}return e},G=function(e,t,n,r){for(var c=0;c<8;c++){var a=e[t][c];n=Y(a,e,t,c,n,r)}return n},Y=function(e,t,n,r,c,a){return"number"===typeof e&&e>9?(t[n][r]=9,c+H(n,r,t,c)):(a&&a[0]===n&&a[1]===r&&(t[n][r]=1),c)},H=function(e,t,n,r){var c,a=[[e,t+1],[e,t-1],[e+1,t],[e-1,t]].filter((function(e){return e[0]>=0&&e[1]>=0&&e[0]<8&&e[1]<8})),o=Object(w.a)(a);try{for(o.s();!(c=o.n()).done;){var s=c.value;r=q(n,s,r)}}catch(l){o.e(l)}finally{o.f()}return r},q=function(e,t,n){var r=e[t[0]][t[1]];return""===r?(e[t[0]][t[1]]=1,0):("number"===typeof r&&(r>=9?n++:e[t[0]][t[1]]+=1),n)},K=function(e){e((function(e){if(e.paused)return e;for(var t=R(e),n=0,r=e.boardCells.map((function(e){return e.map((function(e){return"number"===typeof e?e+1:e}))})),c=0;c<8;c++)n=G(r,c,n,t);var a=e.damage+n,o=a>999;return o&&clearInterval(e.interval),Object(p.a)(Object(p.a)({},e),{},{damage:a,boardCells:r,step:e.step+1,gameOver:o})}))};function Q(e){var t=Object(r.useContext)(h),n=Object(s.a)(t,2),c=n[0],a=n[1];return Object(l.jsx)(y,{cells:c.boardCells,className:"board",startingColumn:1,cellClick:function(e,t){var n=c.boardCells,r=c.forecastCells,o=c.selectedItemIndex,l=c.score,u=F(c.selectedItem,n,e,t,l,c.levelData),i=Object(s.a)(u,2),f=i[0],b=i[1],j=L(r,o),d=c.forecastCooldowns,v=c.levelData;o>0&&(d[o]=c.step+5*o);var h=c.level,m=c.interval,O=c.levelsData,x=h,g=v,C=m;b>=c.levelData.goal&&O.length>h+1&&(g=O[x+=1],clearInterval(m),C=setInterval((function(){K(a)}),g.stepSize)),a(Object(p.a)(Object(p.a)({},c),{},{boardCells:f,forecastCells:j,score:b,selectedItemIndex:0,selectedItem:j[0][0],forecastCooldowns:d,levelData:g,level:x,interval:C}))}})}function U(e){var t=Object(r.useContext)(h),n=Object(s.a)(t,2),c=n[0],a=n[1];return Object(l.jsx)(y,{cells:c.forecastCells,className:"forecast",startingColumn:10,cellClick:function(e){a(Object(p.a)(Object(p.a)({},c),{},{selectedItemIndex:e,selectedItem:c.forecastCells[e][0]}))}})}function V(e){var t=Object(r.useContext)(h),n=Object(s.a)(t,2),c=n[0],a=(n[1],c.levelData),o={gridArea:"1 / ".concat(12," / 3 / ").concat(17),backgroundColor:a.green};return Object(l.jsx)("div",{className:"level panel",style:o,children:c.started&&"Level ".concat(c.level," - ").concat(a.name)})}function W(e){var t=Object(r.useContext)(h),n=Object(s.a)(t,2),c=n[0],a=(n[1],c.levelData),o={gridArea:"3 / ".concat(12," / 5 / ").concat(17),backgroundColor:a.green};return Object(l.jsx)("div",{className:"score panel",style:o,children:c.started&&"Score: ".concat(c.score," / ").concat(a.goal)})}function X(e){var t=Object(r.useContext)(h),n=Object(s.a)(t,2),c=n[0],a=(n[1],c.levelData),o={gridArea:"5 / ".concat(12," / 7 / ").concat(17),backgroundColor:a.purple};return Object(l.jsx)("div",{className:"damage panel",style:o,children:c.started&&"Damage: ".concat(c.damage)})}var Z=function(){for(var e=[],t=0;t<8;t++)e.push([_()]);return e},$=function(e,t){var n=Z();fetch("https://jbmbroomfield.github.io/Data/high_scores.json").then((function(e){return e.json()})).then((function(r){var c=r[0];console.log({state:e}),t(Object(p.a)(Object(p.a)({},e),{},{levelsData:r,levelData:c,forecastCells:n,selectedItem:n[0][0],interval:setInterval((function(){K(t)}),c.stepSize),started:!0}))}))},ee=function(e){var t=Object(r.useContext)(h),n=Object(s.a)(t,2),c=n[0],a=n[1],o=c.levelData,u={gridArea:"7 / ".concat(12," / 9 / ").concat(17),backgroundColor:o.blue},i=c.started?c.paused?"Resume":"Pause":"Start";return Object(l.jsx)("div",{className:"pause panel clickable",style:u,onClick:function(){c.started?a(Object(p.a)(Object(p.a)({},c),{},{paused:!c.paused})):$(c,a)},children:i})};function te(e){var t={gridTemplateColumns:"repeat(".concat(16,", 1fr)")};return Object(l.jsxs)("div",{className:"game-grid",style:t,children:[Object(l.jsx)(Q,{}),Object(l.jsx)(U,{}),Object(l.jsx)(V,{}),Object(l.jsx)(W,{}),Object(l.jsx)(X,{}),Object(l.jsx)(ee,{})]})}var ne=n(44),re=n(4);function ce(e){var t=Object(r.useContext)(h),n=Object(s.a)(t,2),c=n[0],a=(n[1],Object(re.e)());return Object(l.jsxs)("div",{children:[Object(l.jsxs)("h1",{children:["Game Over! You scored ",c.score," points."]}),Object(l.jsxs)("form",{onSubmit:function(e){console.log("submitting high score"),e.preventDefault();var t={name:document.getElementById("name-text").value,score:c.score,id:Object(ne.a)()},n={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)};console.log({data:t}),fetch("http://localhost:3000/high_scores_db",n),a.push("/high-scores")},children:[Object(l.jsx)("input",{type:"text",id:"name-text",placeholder:"Your name"}),Object(l.jsx)("input",{id:"submit-button",type:"submit",value:"Submit Score"})]})]})}function ae(){return Object(l.jsx)("div",{className:"footer",children:"Footer"})}function oe(e){var t=Object(r.useContext)(h),n=Object(s.a)(t,2),c=n[0];n[1];return Object(l.jsxs)("div",{className:"game",children:[c.gameOver?Object(l.jsx)(ce,{}):Object(l.jsx)(te,{}),Object(l.jsx)(ae,{})]})}var se=n(11);function le(e){return Object(l.jsx)("div",{className:"new-game",children:Object(l.jsx)(se.b,{to:"/phase-2-project/game",exact:!0,children:"New Game"})})}function ue(e){return Object(l.jsx)("div",{className:"new-game",children:Object(l.jsx)(se.b,{to:"/phase-2-project/high-scores",exact:!0,children:"High Scores"})})}function ie(e){return Object(l.jsxs)("div",{className:"home",children:[Object(l.jsx)(le,{}),Object(l.jsx)(ue,{})]})}function fe(e){var t=Object(r.useState)([]),n=Object(s.a)(t,2),c=n[0],a=n[1];Object(r.useEffect)((function(){fetch("http://localhost:3000/high_scores_db").then((function(e){return e.json()})).then((function(e){a(e)}))}),[]);return Object(l.jsxs)("div",{children:[c.map((function(e){return Object(l.jsxs)("div",{children:[e.name,": ",e.score]})})),Object(l.jsx)("button",{onClick:function(){},children:"Click Me"})]})}function be(e){return Object(l.jsx)(m,{children:Object(l.jsx)(oe,{})})}var je=function(e){return Object(l.jsx)(se.a,{children:Object(l.jsxs)("div",{children:[Object(l.jsx)(re.a,{exact:!0,path:"/phase-2-project",component:ie}),Object(l.jsx)(re.a,{exact:!0,path:"/phase-2-project/game",component:be}),Object(l.jsx)(re.a,{exact:!0,path:"/phase-2-project/high-scores",component:fe})]})})},de=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))};o.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(je,{})}),document.getElementById("root")),de()}},[[42,1,2]]]);
//# sourceMappingURL=main.969149c9.chunk.js.map