(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{134:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a.n(r),l=a(40),s=a.n(l),c=(a(50),a(18)),i=a.n(c),o=a(41),u=a(19),m=a(20),h=a(22),d=a(21),p=a(23),k=a(136),b=a(137),f=a(138),v=a(139),E=a(140),g=a(141),w=a(142),j=a(143),y=a(42),O=a.n(y),S=a(43),x=a.n(S),C=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).changeUrl=function(e){e.preventDefault(),a.setState({url:e.target.value})},a.getTracklist=Object(o.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a.setState({error:""}),x.a.isURL(a.state.url)){e.next=4;break}return a.setState({error:"Url is not valid",tracklist:[]}),e.abrupt("return");case 4:return a.setState({loading:!0,tracklist:[]}),e.next=7,O()({method:"post",url:"".concat("https://tracklister.herokuapp.com","/tracklist"),data:{url:a.state.url}});case 7:(t=e.sent).data.err?a.setState({error:t.data.err}):(t=t.data,console.log(t),Array.isArray(t)&&a.setState({tracklist:t,error:""})),a.setState({loading:!1});case 10:case"end":return e.stop()}},e)})),a.state={loading:!1,tracklist:"",url:"",error:""},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.loading;return n.a.createElement("div",null,n.a.createElement(k.a,null,n.a.createElement("h1",{className:"display-3"},"Tracklister"),n.a.createElement("p",{className:"lead"},"Find tracks from your favorite music set"),n.a.createElement("hr",{className:"my-2"}),n.a.createElement(b.a,{inline:!0},n.a.createElement(f.a,{className:"mb-2 mr-sm-2 mb-sm-0"},n.a.createElement(v.a,{type:"url",name:"url",id:"url",placeholder:"Insert YouTube url",onChange:this.changeUrl})),n.a.createElement(E.a,{onClick:this.getTracklist},"Submit")),n.a.createElement("div",null,this.state.error,e?n.a.createElement(g.a,null):n.a.createElement(N,{list:this.state.tracklist}))))}}]),t}(r.Component),N=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement(w.a,null,this.props.list&&this.props.list.map(function(e){return n.a.createElement(j.a,null,n.a.createElement("a",{href:e.link?e.link:"#"},e.artist," - ",e.name))}))}}]),t}(r.Component),T=C;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},45:function(e,t,a){e.exports=a(134)}},[[45,1,2]]]);
//# sourceMappingURL=main.dca4e095.chunk.js.map