(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{30:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);for(var r=c(1),n=c.n(r),a=c(24),o=c.n(a),s=(c(30),c(6)),l=c(5),i=c(0),u=function(e){for(var t=[],c=0;c<8;c++)t.push("");return t},j=[],d=0;d<8;d++)j.push(u());for(var b=[],f=[],h=0;h<8;h++)b.push([""]),f.push(0);var v={boardCells:j,forecastCells:b,forecastCooldowns:f,selectedItem:"",selectedItemIndex:0,damage:0,step:0,interval:null,score:0,level:0,levelData:{red:"red",green:"green",blue:"blue",purple:"purple"},started:!1,paused:!1},O=n.a.createContext();function m(e){var t=e.children,c=Object(r.useState)(v),n=Object(l.a)(c,2),a=n[0],o=n[1];return Object(i.jsx)(O.Provider,{value:[a,o],children:t})}var x=c(12),p=c(7),g=function(e,t){if(!t)return"?";if("number"===typeof e||""===e)return e;var c=Object(l.a)({upArrow:[p.a,t.green,0],rightArrow:[p.a,t.green,90],downArrow:[p.a,t.green,180],leftArrow:[p.a,t.green,270],crossBlue:[p.c,t.blue,0],crossRed:[p.c,t.red,0],bomb:[p.b,t.red,0]}[e],3),r=c[0],n=c[1],a=c[2];return Object(i.jsx)(x.a,{icon:r,color:n,rotation:a})};function C(e){var t=Object(r.useContext)(O)[0],c=e.value,n=t.levelData,a=!("forecast"!==e.className||!t.started||t.paused)&&t.forecastCooldowns[e.rowIndex]>t.step,o=function(r){return!r&&!t.paused&&("forecast"===e.className?e.rowIndex!==t.selectedItemIndex:""===c||t.selectedItem.includes("Blue"))}(a),s=e.rowIndex+1,l=s+1,u=e.startingColumn+e.columnIndex,j=u+1,d={gridArea:"".concat(s," / ").concat(u," / ").concat(l," / ").concat(j)};"number"===typeof c&&(d.color=n.purple);var b=t.paused||!t.started?"":g(c,t.levelData),f="forecast"===e.className&&e.rowIndex===t.selectedItemIndex;return Object(i.jsx)("div",{className:"cell cell-".concat(e.className).concat(o?" clickable":"").concat(f?" selected":"").concat(a?" greyed-out":""),onClick:function(){o&&e.cellClick(e.rowIndex,e.columnIndex)},style:d,children:Object(i.jsx)("div",{className:"cell-value",children:b})})}function y(e){var t=e.cells,c=function(t,c){if("object"===typeof t)return t.map((function(t,r){return Object(i.jsx)(C,{rowIndex:c,columnIndex:r,value:t,setCell:e.setCell,className:e.className,startingColumn:e.startingColumn,cellClick:e.cellClick},"cell-".concat(r,",").concat(c))}));console.log("non-object")};return void 0===t?(console.log("cells undefined"),void console.log(e.className)):"object"===typeof t[0]?t.map((function(e,t){return c(e,t)})):c(t,0)}var w=c(13),N=function(e,t,c,r,n,a){var o=[[n,a]],s=[];s.push(n),s.push(a);for(var i={up:"down",down:"up",right:"left",left:"right"}[r],u=0;u<12&&(s=I(s,r));u++)if(o.push([s[0],s[1]]),e[s[0]][s[1]]==="".concat(i,"Arrow")){var j=k(o,e,t),d=Object(l.a)(j,2);e=d[0],t=d[1],c=!1;break}return[e,t,c]},I=function(e,t){switch(t){case"up":e[0]--;break;case"right":e[1]++;break;case"down":e[0]++;break;case"left":e[1]--}return e[0]<0||e[1]<0||e[0]>=8||e[1]>=8?null:e};function k(e,t,c){var r,n=Object(w.a)(e);try{for(n.s();!(r=n.n()).done;){var a=r.value,o=D(t,a[0],a[1],c),s=Object(l.a)(o,2);t=s[0],c=s[1]}}catch(i){n.e(i)}finally{n.f()}return[t,c]}var D=function(e,t,c,r){var n=arguments.length>4&&void 0!==arguments[4]&&arguments[4],a=e[t][c];return"bomb"!==a||n?("number"===typeof a&&(r+=a),e[t][c]="",[e,r]):S(e,t,c,r)},A=function(e,t,c,r){if("bomb"===e[t][c])return S(e,t,c,r);var n=D(e,t,c,r,!0),a=Object(l.a)(n,2);e=a[0],r=a[1];var o,s=[[t+1,c],[t-1,c],[t,c+1],[t,c-1]].filter((function(e){return e[0]>=0&&e[1]>=0&&e[0]<8&&e[1]<8})),i=Object(w.a)(s);try{for(i.s();!(o=i.n()).done;){var u=o.value,j=D(e,u[0],u[1],r),d=Object(l.a)(j,2);e=d[0],r=d[1]}}catch(b){i.e(b)}finally{i.f()}return[e,r]},S=function(e,t,c,r){var n=D(e,t,c,r,!0);e=n[0],r=n[1];var a,o=Object(w.a)([t-1,t,t+1].filter((function(e){return e>=0&&e<8})));try{for(o.s();!(a=o.n()).done;){var s=a.value,l=P(e,r,t,c,s);e=l[0],r=l[1]}}catch(i){o.e(i)}finally{o.f()}return[e,r]},P=function(e,t,c,r,n){var a,o=Object(w.a)([r-1,r,r+1].filter((function(e){return e>=0&&e<8&&(c!==n||r!==e)})));try{for(o.s();!(a=o.n()).done;){var s=a.value,l=D(e,n,s,t);e=l[0],t=l[1]}}catch(i){o.e(i)}finally{o.f()}return[e,t]},F=function(e,t,c,r,n){var a=!0;if("crossBlue"===e)return A(t,c,r,n);if(e.includes("Arrow")){var o=e.slice(0,e.length-5),s=N(t,n,a,o,c,r);t=s[0],n=s[1],a=s[2]}return a&&(t[c][r]=e),[t,n]},T=c(23),B={upArrow:1,rightArrow:1,downArrow:1,leftArrow:1,crossBlue:1,bomb:1},_=function(){return H(B)};function H(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(0===Object.keys(e).length)return null;var c=L(e),r=Math.floor(Math.random()*c.length),n=c[r];return t||"object"!==typeof n?n:H(n)}function L(e){if(Array.isArray(e))return e;var t=[];for(var c in e)R(t,c,e[c]);return t}function R(e,t,c){for(var r=0;r<c;r++)e.push(t);return e}var E=function(e,t){return[].concat(Object(T.a)(e.slice(0,t)),Object(T.a)(e.slice(t+1)),[[_()]])},G=function(e){if(e.step%10!==0)return null;for(var t=[],c=0;c<8;c++)t=J(t,c,e.boardCells);return H(t,!0)},J=function(e,t,c){for(var r=c[t],n=0;n<8;n++){""===r[n]&&e.push([t,n])}return e},M=function(e,t,c,r){for(var n=0;n<8;n++){var a=e[t][n];c=z(a,e,t,n,c,r)}return c},z=function(e,t,c,r,n,a){return"number"===typeof e&&e>9?(t[c][r]=9,n+W(c,r,t,n)):(a&&a[0]===c&&a[1]===r&&(t[c][r]=1),n)},W=function(e,t,c,r){var n,a=[[e,t+1],[e,t-1],[e+1,t],[e-1,t]].filter((function(e){return e[0]>=0&&e[1]>=0&&e[0]<8&&e[1]<8})),o=Object(w.a)(a);try{for(o.s();!(n=o.n()).done;){var s=n.value;r=Y(c,s,r)}}catch(l){o.e(l)}finally{o.f()}return r},Y=function(e,t,c){var r=e[t[0]][t[1]];return""===r?(e[t[0]][t[1]]=1,0):("number"===typeof r&&(r>=9?c++:e[t[0]][t[1]]+=1),c)},q=function(e){e((function(e){if(e.paused)return e;for(var t=G(e),c=0,r=e.boardCells.map((function(e){return e.map((function(e){return"number"===typeof e?e+1:e}))})),n=0;n<8;n++)c=M(r,n,c,t);var a=e.damage+c,o=a>999;return o&&clearInterval(e.interval),Object(s.a)(Object(s.a)({},e),{},{damage:a,boardCells:r,step:e.step+1,gameOver:o})}))};function K(e){var t=Object(r.useContext)(O),c=Object(l.a)(t,2),n=c[0],a=c[1];return Object(i.jsx)(y,{cells:n.boardCells,className:"board",startingColumn:1,cellClick:function(e,t){var c=n.boardCells,r=n.forecastCells,o=n.selectedItemIndex,i=n.score,u=F(n.selectedItem,c,e,t,i,n.levelData),j=Object(l.a)(u,2),d=j[0],b=j[1],f=E(r,o),h=n.forecastCooldowns,v=n.levelData;o>0&&(h[o]=n.step+5*o);var O=n.level,m=n.interval,x=n.levelsData,p=O,g=v,C=m;b>=n.levelData.goal&&x.length>O+1&&(g=x[p+=1],clearInterval(m),C=setInterval((function(){q(a)}),g.stepSize)),a(Object(s.a)(Object(s.a)({},n),{},{boardCells:d,forecastCells:f,score:b,selectedItemIndex:0,selectedItem:f[0][0],forecastCooldowns:h,levelData:g,level:p,interval:C}))}})}function Q(e){var t=Object(r.useContext)(O),c=Object(l.a)(t,2),n=c[0],a=c[1];return Object(i.jsx)(y,{cells:n.forecastCells,className:"forecast",startingColumn:10,cellClick:function(e){a(Object(s.a)(Object(s.a)({},n),{},{selectedItemIndex:e,selectedItem:n.forecastCells[e][0]}))}})}function U(e){var t=Object(r.useContext)(O)[0],c=t.levelData,n={gridArea:"1 / ".concat(12," / 3 / ").concat(17),backgroundColor:c.green};return Object(i.jsx)("div",{className:"level panel",style:n,children:t.started&&"Level ".concat(t.level," - ").concat(c.name)})}function V(e){var t=Object(r.useContext)(O)[0],c=t.levelData,n={gridArea:"3 / ".concat(12," / 5 / ").concat(17),backgroundColor:c.red};return Object(i.jsx)("div",{className:"score panel",style:n,children:t.started&&"Score: ".concat(t.score," / ").concat(c.goal)})}function X(e){var t=Object(r.useContext)(O)[0],c=t.levelData,n={gridArea:"5 / ".concat(12," / 7 / ").concat(17),backgroundColor:c.purple};return Object(i.jsx)("div",{className:"damage panel",style:n,children:t.started&&"Damage: ".concat(t.damage)})}var Z=function(){for(var e=[],t=0;t<8;t++)e.push([_()]);return e},$=function(e,t){for(var c=Z(),r=[],n=0;n<8;n++)r.push(0);fetch("https://jbmbroomfield.github.io/Data/levels_data.json").then((function(e){return e.json()})).then((function(n){var a=n[0];console.log({state:e}),t(Object(s.a)(Object(s.a)({},e),{},{levelsData:n,levelData:a,forecastCells:c,forecastCooldowns:r,selectedItem:c[0][0],interval:setInterval((function(){q(t)}),a.stepSize),started:!0}))}))};function ee(e){var t=Object(r.useContext)(O),c=Object(l.a)(t,2),n=c[0],a=c[1],o=n.levelData,u={gridArea:"7 / ".concat(12," / 9 / ").concat(17),backgroundColor:o.blue},j=n.started?n.paused?"Resume":"Pause":"Start";return Object(i.jsx)("div",{className:"pause panel clickable",style:u,onClick:function(){n.started?a(Object(s.a)(Object(s.a)({},n),{},{paused:!n.paused})):$(n,a)},children:j})}function te(e){var t={gridTemplateColumns:"repeat(".concat(16,", 1fr)")};return Object(i.jsxs)("div",{className:"game-grid",style:t,children:[Object(i.jsx)(K,{}),Object(i.jsx)(Q,{}),Object(i.jsx)(U,{}),Object(i.jsx)(V,{}),Object(i.jsx)(X,{}),Object(i.jsx)(ee,{})]})}var ce=c(44),re=c(3);function ne(e){var t=Object(r.useContext)(O)[0],c=Object(re.e)();return Object(i.jsxs)("div",{children:[Object(i.jsxs)("h1",{children:["Game Over! You scored ",t.score," points."]}),Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault();var r=document.getElementById("name-text").value,n=t.levelData,a=(new Date).toDateString(),o={name:r,score:t.score,level:"".concat(n.id," - ").concat(n.name),date:a,id:Object(ce.a)()},s={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(o)};fetch("http://localhost:3000/high_scores_db",s),c.push("/phase-2-project/high-scores")},children:[Object(i.jsx)("input",{type:"text",id:"name-text",placeholder:"Your name"}),Object(i.jsx)("input",{id:"submit-button",type:"submit",value:"Submit Score"})]})]})}function ae(e){var t=Object(r.useContext)(O)[0];return Object(i.jsx)("div",{className:"game",children:t.gameOver?Object(i.jsx)(ne,{}):Object(i.jsx)(te,{})})}var oe=c(11);function se(e){return Object(i.jsx)("div",{className:"new-game",children:Object(i.jsx)(oe.b,{to:"/phase-2-project/game",exact:!0,children:"New Game"})})}function le(e){return Object(i.jsx)("div",{className:"high-scores",children:Object(i.jsx)(oe.b,{to:"/phase-2-project/high-scores",exact:!0,children:"High Scores"})})}function ie(e){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"text",children:"Numbers will grow on the board from 1 to 9. Once they reach 9 they will spread to adjacent cells. If they cannot spread, you will take damage. Take 1000 damage and it's game over. Clear numbers from the board to score points."}),Object(i.jsx)("div",{style:{color:"purple"},children:"9"})]})}function ue(e){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"text",children:"Place arrows in empty cells. When two arrows point at each other, the cells they occupy and all cells in between are cleared."}),Object(i.jsxs)("div",{children:[Object(i.jsx)(x.a,{icon:p.a,color:"green",rotation:90}),"\xa0",Object(i.jsx)(x.a,{icon:p.a,color:"green",rotation:270})]})]})}function je(e){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"text",children:"Place crosses in any cells. The cell the cross is placed in and the four neighbouring cells are cleared."}),Object(i.jsx)("div",{children:Object(i.jsx)(x.a,{icon:p.c,color:"blue"})})]})}function de(e){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"text",children:"Place bombs in empty cells. When a bomb is cleared, it also clears the 8 surrounding cells."}),Object(i.jsx)("div",{children:Object(i.jsx)(x.a,{icon:p.b,color:"red"})})]})}function be(e){return Object(i.jsxs)("div",{className:"how-to-play-grid",children:[Object(i.jsx)(ie,{}),Object(i.jsx)(ue,{}),Object(i.jsx)(je,{}),Object(i.jsx)(de,{})]})}function fe(e){return Object(i.jsxs)("div",{className:"how-to-play",children:[Object(i.jsx)("h3",{children:"How To Play"}),Object(i.jsx)(be,{})]})}function he(e){return Object(i.jsxs)("div",{className:"home",children:[Object(i.jsx)("div",{className:"heading",children:Object(i.jsx)("h1",{children:"React Game"})}),Object(i.jsx)(se,{}),Object(i.jsx)(le,{}),Object(i.jsx)(fe,{})]})}function ve(e){var t=e.data,c=e.rank%2===0?"even":"odd";return Object(i.jsxs)("tr",{className:"row row-".concat(c),children:[Object(i.jsx)("td",{className:"right-align",children:e.rank}),Object(i.jsx)("td",{className:"left-align",children:t.name}),Object(i.jsx)("td",{children:t.date}),Object(i.jsx)("td",{className:"left-align",children:t.level}),Object(i.jsx)("td",{className:"right-align",children:t.score})]})}function Oe(e){var t=e.data.sort((function(e,t){return t.score-e.score}));return Object(i.jsxs)("table",{children:[Object(i.jsxs)("tr",{className:"row row-even",children:[Object(i.jsx)("th",{children:"Rank"}),Object(i.jsx)("th",{children:"Player"}),Object(i.jsx)("th",{children:"Date"}),Object(i.jsx)("th",{children:"Level"}),Object(i.jsx)("th",{children:"Score"})]}),t.map((function(e,t){return Object(i.jsx)(ve,{data:e,rank:t+1})}))]})}function me(e){var t=Object(r.useState)([]),c=Object(l.a)(t,2),n=c[0],a=c[1];return Object(r.useEffect)((function(){fetch("http://localhost:3000/high_scores_db").then((function(e){return e.json()})).then((function(e){a(e)}))})),Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"High Scores"}),Object(i.jsx)(oe.b,{to:"/phase-2-project",exact:!0,children:"Home"}),Object(i.jsx)(Oe,{data:n})]})}function xe(e){return Object(i.jsx)(m,{children:Object(i.jsx)(ae,{})})}var pe=function(e){return Object(i.jsx)(oe.a,{children:Object(i.jsxs)("div",{children:[Object(i.jsx)(re.a,{exact:!0,path:"/phase-2-project",component:he}),Object(i.jsx)(re.a,{exact:!0,path:"/phase-2-project/game",component:xe}),Object(i.jsx)(re.a,{exact:!0,path:"/phase-2-project/high-scores",component:me})]})})},ge=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,45)).then((function(t){var c=t.getCLS,r=t.getFID,n=t.getFCP,a=t.getLCP,o=t.getTTFB;c(e),r(e),n(e),a(e),o(e)}))};o.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(pe,{})}),document.getElementById("root")),ge()}},[[42,1,2]]]);
//# sourceMappingURL=main.81292f6a.chunk.js.map