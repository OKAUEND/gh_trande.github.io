(function(e){function t(t){for(var n,o,c=t[0],u=t[1],i=t[2],f=0,p=[];f<c.length;f++)o=c[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(p.length)p.shift()();return s.push.apply(s,i||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,c=1;c<r.length;c++){var u=r[c];0!==a[u]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={index:0},s=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var l=u;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0a46":function(e,t,r){"use strict";var n=r("b5ab"),a=r.n(n);a.a},"0e56":function(e,t,r){"use strict";var n=r("ca18"),a=r.n(n);a.a},1654:function(e){e.exports=JSON.parse('{"Status403And404":"お探しのページは見つかりませんでした。","Status403And404byChartpage":"データを取得できませんでした。サイト運営者に連絡をしてください。","Status429":"アクセス制限回数に達しました。時間おき再度アクセスしてください。","Status5xx":"サーバーへアクセス出来ませんでした。時間を空け、再度アクセスしてください。"}')},3387:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("transition",{attrs:{mode:"out-in"}},[r("router-view")],1)],1)},s=[],o=(r("0e56"),r("2877")),c={},u=Object(o["a"])(c,a,s,!1,null,"8cc28416",null),i=u.exports,l=r("9483");Object(l["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var f=r("8c4f"),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"Topview"},[r("h1",{staticClass:"Topview__Title"},[e._v("都道府県別人口推移")]),r("prefecturelist",{model:{value:e.setPrefectures,callback:function(t){e.setPrefectures=t},expression:"setPrefectures"}}),r("populationschart",{attrs:{prefectures:e.prefectures}})],1)},d=[],h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("article",{staticClass:"Prefectures"},[r("h2",{staticClass:"Prefectures_Title"},[e._v("都道府県")]),r("div",{staticClass:"Prefectures__Container"},[r("ul",{staticClass:"Prefectures__PrefectureList"},e._l(e.prefectures,(function(t,n){return r("li",{key:n,staticClass:"Prefectures__Prefecture"},[r("base-checkbox",{attrs:{object:t,id:n},model:{value:e.prefecturesevent,callback:function(t){e.prefecturesevent=t},expression:"prefecturesevent"}},[e._v(e._s(t.prefName))])],1)})),0)])])},m=[],v=(r("96cf"),r("1da1")),g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"BaseCheckbox"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.checkeditem,expression:"checkeditem"}],attrs:{type:"checkbox",id:e.id,clsss:"BaseCheckbox__Checkbox"},domProps:{value:e.object,checked:Array.isArray(e.checkeditem)?e._i(e.checkeditem,e.object)>-1:e.checkeditem},on:{change:function(t){var r=e.checkeditem,n=t.target,a=!!n.checked;if(Array.isArray(r)){var s=e.object,o=e._i(r,s);n.checked?o<0&&(e.checkeditem=r.concat([s])):o>-1&&(e.checkeditem=r.slice(0,o).concat(r.slice(o+1)))}else e.checkeditem=a}}}),r("label",{staticClass:"BaseCheckbox__Label",attrs:{for:e.id}},[r("span",{staticClass:"BaseCheckbox__Text"},[e._t("default")],2)])])},b=[],x=(r("a9e3"),{name:"BaseCheckbox",props:{object:{type:Object,required:!0},id:{type:Number,required:!0},value:{type:Array,required:!0}},computed:{checkeditem:{get:function(){return this.value},set:function(e){return this.$emit("input",e)}}}}),y=x,_=(r("fbaa"),Object(o["a"])(y,g,b,!1,null,"0ef4bca8",null)),w=_.exports,S=r("bc3a"),C=r.n(S),E={name:"PrefectureList",components:{BaseCheckbox:w},props:{value:{type:Array,required:!0}},data:function(){return{prefectures:[]}},mounted:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,C.a.get("https://opendata.resas-portal.go.jp/api/v1/prefectures",{headers:{"X-API-KEY":"iSB7pDazmdhn1WBYCsdq6Z6IAd8RNfagqpGp5JIq"}}).then((function(t){if(t.status>500)e.setStoreState(t.status);else{if("403"!==t.data.statusCode&&"404"!==t.data.statusCode&&"429"!==t.data.statusCode)return t.data.result;e.setStoreState(t.data.statusCode)}})).catch((function(e){window.console.error({error:e})}));case 2:e.prefectures=t.sent;case 3:case"end":return t.stop()}}),t)})))()},computed:{prefecturesevent:{get:function(){return this.value},set:function(e){return this.$emit("input",e)}}},methods:{setStoreState:function(e){this.$store.commit("setErrorState",e),this.$router.push("/Error")}}},k=E,P=(r("f7d1"),Object(o["a"])(k,h,m,!1,null,"6ab6503b",null)),j=P.exports,O=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("article",{staticClass:"PopulationsChart"},[r("p",{staticClass:"PopulationsChart__Message"},[e._v(e._s(e.errormessage))]),r("base-chart",{attrs:{xAxiscategory:e.years,seriesdata:e.populations}})],1)},A=[],$=(r("d81d"),r("d3b7"),r("3ca3"),r("ddb0"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("highcharts",{attrs:{options:e.setchartOptions}})}),q=[],B={name:"BaseChart",props:{xAxiscategory:{type:Array,required:!0},seriesdata:{type:Array,required:!0}},computed:{setchartOptions:function(){return{lang:{noData:"都道府県を選択してください。"},chart:{type:"line"},title:{text:"人口推移"},yAxis:{title:{text:"人口数"}},xAxis:{title:{text:"年度"},categories:this.xAxiscategory,min:.5},legend:{layout:"vertical",align:"right",verticalAlign:"top"},series:this.seriesdata,responsive:{rules:[{condition:{maxWidth:500},chartOptions:{legend:{align:"center",verticalAlign:"bottom",layout:"horizontal"}}}]}}}}},N=B,M=Object(o["a"])(N,$,q,!1,null,null,null),R=M.exports,T=r("1654"),I={name:"PopulationsChart",props:{prefectures:{type:Array,required:!0}},components:{BaseChart:R},data:function(){return{years:[],populations:[],errormessage:""}},mounted:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=new Error,t.next=3,e.fetchPopulation("1",r).catch((function(e){window.console.error(e)}));case 3:if(n=t.sent,n){t.next=6;break}return t.abrupt("return");case 6:e.years=n.data.map((function(e){return e.year}));case 7:case"end":return t.stop()}}),t)})))()},watch:{prefectures:function(e){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=new Error,r.next=3,Promise.all(e.map((function(e){return t.fetchPopulation(e.prefCode,n).then((function(t){var r=t.data.map((function(e){return e.value}));return Promise.resolve({data:r,name:e.prefName,PrefCode:e.prefCode})}))}))).then((function(e){return Promise.resolve(e)})).catch((function(e){window.console.error({error:e})}));case 3:t.populations=r.sent;case 4:case"end":return r.stop()}}),r)})))()}},methods:{fetchPopulation:function(e,t){var r=this;return Object(v["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,C.a.get("https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=".concat(e),{headers:{"X-API-KEY":"iSB7pDazmdhn1WBYCsdq6Z6IAd8RNfagqpGp5JIq"}}).then((function(e){if(e.status>500)throw r.errormessage=T.Status5xx,t.message=T.Status5xx,t;if("403"===e.data.statusCode||"404"===e.data.statusCode)throw r.errormessage=T.Status403And404byChartpage,t.message=T.Status403And404byChartpage,t;if("429"===e.data.statusCode)throw r.errormessage=T.Status429,t.message=T.Status429,t;return e.data.result.data[0]}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))()},setStoreState:function(e){this.$store.commit("setErrorState",e),this.$router.push("/Error")}}},J=I,Y=(r("df18"),Object(o["a"])(J,O,A,!1,null,"0e9ecb1b",null)),F=Y.exports,z={name:"Topview",components:{prefecturelist:j,populationschart:F},data:function(){return{prefectures:[]}},computed:{setPrefectures:{get:function(){return this.prefectures},set:function(e){this.prefectures=e}}}},D=z,L=(r("5a9b"),Object(o["a"])(D,p,d,!1,null,"4e750a06",null)),W=L.exports,G=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"ErrorPage"},[r("h1",[e._v(e._s(e.ErrorStatus))]),r("p",{staticClass:"ErrorPage__Message"},[e._v(e._s(e.ErrorMessage))])])},K=[],X={name:"ErrorPage",computed:{ErrorStatus:function(){return this.$store.getters.getErrorStatus},ErrorMessage:function(){return this.$store.getters.getErrorMessage}}},Z=X,H=(r("0a46"),Object(o["a"])(Z,G,K,!1,null,"07f64f9d",null)),Q=H.exports;n["a"].use(f["a"]);var U=[{path:"/",name:"Topview",component:W},{path:"/Error",name:"ErrorPage",component:Q}],V=new f["a"]({mode:"history",base:"",routes:U}),ee=V,te=r("2f62");n["a"].use(te["a"]);var re=new te["a"].Store({state:{ErrorStatus:403},mutations:{setErrorState:function(e,t){e.ErrorStatus=Number(t)}},actions:{setErrorState:function(e,t){var r=e.commit;r("setErrorState",t)}},getters:{getErrorStatus:function(e){switch(e.ErrorStatus){case 403:return"".concat(e.ErrorStatus," Forbidden");case 404:return"".concat(e.ErrorStatus," Not Found");case 429:return"".concat(e.ErrorStatus," Too Many Requests");default:return"5xx Server Error"}},getErrorMessage:function(e){switch(e.ErrorStatus){case 403:return T.Status403And404;case 429:return T.Status429;default:return T.Status5xx}}}}),ne=r("a7fe"),ae=r.n(ne),se=r("ea7f"),oe=r.n(se),ce=r("4452"),ue=r.n(ce),ie=r("c60a"),le=r.n(ie);r("c1c3"),n["a"].config.productionTip=!1,n["a"].use(ae.a,C.a),n["a"].use(ue.a),oe.a.setOptions({lang:{numericSymbols:null}}),le()(oe.a),new n["a"]({router:ee,store:re,render:function(e){return e(i)}}).$mount("#app")},"5a9b":function(e,t,r){"use strict";var n=r("e7bf"),a=r.n(n);a.a},"5de5":function(e,t,r){},b5ab:function(e,t,r){},c1c3:function(e,t,r){},ca18:function(e,t,r){},df18:function(e,t,r){"use strict";var n=r("5de5"),a=r.n(n);a.a},e35f:function(e,t,r){},e7bf:function(e,t,r){},f7d1:function(e,t,r){"use strict";var n=r("3387"),a=r.n(n);a.a},fbaa:function(e,t,r){"use strict";var n=r("e35f"),a=r.n(n);a.a}});
//# sourceMappingURL=index.363b7d9e.js.map