(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3265],{3265:function(e,t,o){"use strict";o.d(t,{l:function(){return G}});var s=o(52322),n=o(30195);let r=n.z.object({action:n.z.string(),domain:n.z.string(),data:n.z.any()}),a=(e,t,o)=>(r.parse({action:e,domain:t,data:o}),{action:e,domain:t,data:o});var i=o(10836),l=o(8939),c=o(2784),d=o(74634),p=o(56359),u=o(64129),h=o(60545),x=o(43260),_=o(96666),f=o(6289),m=o(57643),g=o(48115),b=o(26887);let w=(e,t)=>{let[o,s]=(0,c.useState)((0,f.E)("pending"));return(0,m.rf)(()=>{s((0,f.E)("pending"))},[e]),(0,b.a)(t=>g.bl.get("/adminapi/v1/files/"+e.replace(/\/+/g,"/"),t,!0),s,o,!t),[o,s]};var j=o(95753),v=o(60892),y=o(50042),k=o(32878),C=o(16399),S=o(27911),N=o(45054),I=o(95486),P=o(94484),F=o(91838);let Z=e=>{let{path:t="",sourceCode:o,onChange:n=()=>{},onSave:r=()=>{},onEscape:a=()=>{},...i}=e,{resolvedTheme:l}=(0,C.P)(),c=(0,S.Ik)(),d="myCustomTheme",p=(0,I.Fg)(),{tint:u}=(0,P.d5)(),h=p[u+"10"].val;return h=h.startsWith("hsl")?function(e){let t=e.match(/^hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)$/i);if(!t)return null;let[o,s,n]=[t[1]/360,t[2]/100,t[3]/100],[r,a,i]=function(e,t,o){let s,n,r;if(0===t)s=n=r=o;else{let a=(e,t,o)=>(o<0&&(o+=1),o>1&&(o-=1),o<1/6)?e+(t-e)*6*o:o<.5?t:o<2/3?e+(t-e)*(2/3-o)*6:e,i=o<.5?o*(1+t):o+t-o*t,l=2*o-i;s=a(l,i,e+1/3),n=a(l,i,e),r=a(l,i,e-1/3)}return[Math.round(255*s),Math.round(255*n),Math.round(255*r)]}(o,s,n);return"#".concat((16777216+(r<<16)+(a<<8)+i).toString(16).slice(1).toUpperCase())}(h):h,c&&c.editor.defineTheme(d,{base:"dark"===l?"vs-dark":"vs",inherit:!0,rules:[{token:"keyword",foreground:h},{token:"punctuation",foreground:h}],colors:{"editor.background":p.background.val}}),r&&(0,N.Z)(["s","S"],e=>{("s"===e.key||"S"===e.key)&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),r())}),a&&(0,N.Z)(["Escape"],e=>{"Escape"===e.key&&(e.preventDefault(),a())}),(0,s.jsx)(F.I,{children:(0,s.jsx)(S.ZP,{onMount:(e,t)=>{t.languages.typescript.javascriptDefaults.setDiagnosticsOptions({noSemanticValidation:!0,noSyntaxValidation:!0}),t.languages.typescript.typescriptDefaults.setDiagnosticsOptions({noSemanticValidation:!0,noSyntaxValidation:!0})},path:t,theme:c?d:void 0,value:o,onChange:n,...i})})};var E=o(25237),M=o.n(E),q=o(1201),z=o(28554),D=o(70396);let L=M()(()=>Promise.all([o.e(4546),o.e(9610),o.e(7175)]).then(o.bind(o,57175)),{loadableGenerated:{webpack:()=>[57175]},loading:()=>(0,s.jsxs)(i.Z,{children:[(0,s.jsx)(h.$,{size:"large",scale:3,top:-50}),"Loading"]}),ssr:!1}),$=e=>{let{extraIcons:t,name:o,path:n}=e,[r,a]=w(n);console.log("file content: ",r);let i=r.isLoaded?JSON.parse(r.data):"";return(0,s.jsx)(_.Z,{waitForLoading:1e3,atom:r,children:(0,s.jsx)("div",{className:"  _ai-stretch _dsp-flex _fd-row _fb-auto _bxs-border-box _pos-relative _mih-0px _miw-0px _fs-1 _fg-1 _w-10037 ",children:(0,s.jsx)(x.I,{extraIcons:t,hideDeleteIcon:!0,itemCardProps:{topBarProps:{top:-10,backgroundColor:"transparent"}},minimal:!0,f:1,backgroundColor:"transprent",onDelete:()=>{},onSave:e=>{},json:i,name:o})})},n)},T=e=>{let{path:t,getContent:o,positionStyle:n}=e,r=async()=>{let e=o();await g.bl.post("/adminapi/v1/files/"+t.replace(/\/+/g,"/"),{content:e})};return(0,s.jsx)(l.sL,{position:"absolute",...n,children:(0,s.jsx)(j.q,{onPress:r,children:(0,s.jsx)(v.v,{color:"var(--color)",size:"$1"})})})},R=e=>{let{extraIcons:t,isFull:o,path:n,isModified:r,setIsModified:a}=e,[i,l]=w(n),[d,p]=(0,c.useState)(""),[u,h]=(0,c.useState)(!1),x=(0,c.useRef)(""),[f,g]=(0,q.G)((e,t,o)=>{let s=e.startsWith("/code"),r="The user is viewing a sourceCode file named: ".concat(n,". The content of the sourceFile is: ").concat(x.current);return(s?"\nThe user has generated a request to change the sourceCode content. You need to fulfill the request. Reply only with source code with prefix: [code] and nothing else. Your response will be used directly to replace the content of the sourceFile, but adaptaed to what the user requested.\nFor example, if the final code you decide to generate is \"console.log('test');\" then your anser should be [code]console.log('test');\nKeep the original sourcecode comments when generating new code;\nIf you are unable to generate the source code (too ambiguous/unespecific/whaterver reason), explain why in natural language, but do not include [code] at the beginning.\nRemember to generate a response for the request that is only sourceCode and prefixed with [code]. Your response will be used to feed another program, that expects just [code] and sourceCode.\nIf you include anything else in your message (like reasonings or natural language) it will be considered that you are rejecting the request, and the reasons will be shown to the user.\n            ":"")+r},()=>(0,q.MT)({cmd:"/code",format:"sourceCode",action:"generates a source code solution in source code format of the current file."}));(0,m.rf)(()=>{if(console.log("Response prompt: ",f),f.startsWith("[code]")){console.log("Replacing code with updated code");let e=f.substring(6);p(e),x.current=e}},[f]),(0,c.useEffect)(()=>{i.isLoaded&&(x.current=i.data,h(!0))},[i]);let{resolvedTheme:b}=(0,C.P)(),[v,S]=(0,c.useState)("code");return(0,s.jsx)(_.Z,{atom:i,children:(0,s.jsxs)("div",{className:(0,D.concatClassName)(" _ai-stretch _dsp-flex _fd-row _bxs-border-box _pos-relative _mih-0px _miw-0px  _fg-1 _fs-1 _fb-auto _w-10037  "+(o?" _mt-50px":" _mt-30px")),children:[(0,s.jsxs)("div",{className:(0,D.concatClassName)(" _ai-stretch _dsp-flex _fd-row _fb-auto _bxs-border-box _mih-0px _miw-0px _fs-0 _pos-absolute  "+(o?" _r-0px _t--35px":" _r-20px _t--32px")),children:["code"==v?(0,s.jsx)(j.q,{onPress:()=>S("flow"),children:(0,s.jsx)(y.h,{color:"var(--color)",size:o?"$2":"$1"})}):(0,s.jsx)(j.q,{onPress:()=>S("code"),children:(0,s.jsx)(k.E,{color:"var(--color)",size:o?"$2":"$1"})}),(0,s.jsx)(T,{path:n,getContent:()=>x.current,positionStyle:{position:"relative"}}),t]}),"code"==v?(0,s.jsx)(Z,{path:n,darkMode:"dark"==b,sourceCode:d||x.current,onChange:e=>{x.current=e}}):(0,s.jsx)(z.Z,{isModified:r,onEdit:e=>{x.current=e},setIsModified:a,setSourceCode:e=>{e.current=e},sourceCode:d||x.current,path:n,themeMode:b}),(0,s.jsx)("div",{className:"  _ai-stretch _dsp-flex _fd-row _fb-auto _bxs-border-box _mih-0px _miw-0px _fs-0 _o-0 _t--200000px _pos-absolute ",children:(0,s.jsx)(z.Z,{preload:!0})})]})})},V=e=>{let{path:t}=e,[o]=w(t),n=(0,c.useRef)(""),{resolvedTheme:r}=(0,C.P)();return(0,c.useEffect)(()=>{o.isLoaded&&(n.current=o.data)},[o]),(0,s.jsx)(_.Z,{waitForLoading:1e3,atom:o,children:(0,s.jsxs)("div",{className:"  _ai-stretch _dsp-flex _fd-row _fb-auto _bxs-border-box _pos-relative _mih-0px _miw-0px _fs-1 _mt-30px _fg-1 _w-10037 ",children:[(0,s.jsx)(T,{path:t,getContent:()=>n.current,positionStyle:{right:55,top:-33}}),(0,s.jsx)(Z,{path:t,darkMode:"dark"==r,sourceCode:o.data,onChange:e=>{n.current=e}})]})},t)},K=e=>{let{action:t,domain:o,data:n}=e,{mime:r}=n,a=r?r.split("/")[0]:"text",i=("/adminapi/v1/files/"+n.path).replace(/\/+/g,"/");return"application/json"==r?{component:(0,s.jsx)($,{...n}),supportIcons:!0}:"application/javascript"==r||"video/mp2t"==r||n.path.endsWith(".tsx")?{component:(0,s.jsx)(R,{...n}),supportIcons:!0}:"model/gltf-binary"==r?{component:(0,s.jsx)(L,{path:i}),widget:"text"}:"text"==a||"application"==a?{component:(0,s.jsx)(V,{path:n.path}),widget:"text"}:"image"==a?{component:(0,s.jsx)("img",{src:i}),widget:"image"}:void 0};o(99322);let W=e=>{let t;if(t=K(e))return t};(0,p._5)({iconComponent:u.K}),p.p$.ToggleHiddenFiles.option.defaultValue=!1;let G=e=>{let{isFull:t,hideCloseIcon:o,isModified:n=!1,setIsModified:r=()=>{},icons:c=[],currentFile:p,currentFileName:u,...h}=e,x=(0,d.P)(p),_=W(a("open","files",{isModified:n,isFull:t,extraIcons:c,name:u,path:p,mime:x}));return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"  _ai-stretch _dsp-flex _fd-row _fb-auto _bxs-border-box _pos-relative _mih-0px _miw-0px _fs-0 _h-20px "}),(0,s.jsx)(l.FA,{flex:1,alignItems:"center",justifyContent:"center",...h,children:_?_.component:(0,s.jsx)(i.Z,{children:"No viewer exists for this file type"})}),(0,s.jsx)("h4",{className:"  is_H4 _col-675002279 _dsp-inline _bxs-border-box _ww-break-word _mt-0px _mr-0px _mb-0px _ml-0px _tt-230632953 _ff-299667014 _fow-233016233 _ls-167744152 _fos-229441313 _lh-222976666 _ussel-auto _pos-absolute _l-15px _t-10px font_heading ",children:u}),_&&_.supportIcons||o?null:(0,s.jsx)("div",{className:"  _ai-stretch _dsp-flex _fd-column _fb-auto _bxs-border-box _mih-0px _miw-0px _fs-0 _pos-absolute _r-15px _t-17px ",children:c})]})};o(62321)},28554:function(e,t,o){"use strict";var s=o(52322),n=o(25237),r=o.n(n);o(2784);let a=r()(()=>Promise.all([o.e(8641),o.e(8081),o.e(4733),o.e(8873),o.e(6313),o.e(9842),o.e(4263),o.e(1588),o.e(4509)]).then(o.bind(o,52398)).then(e=>e.FlowFactory),{loadableGenerated:{webpack:()=>[52398]},loading:()=>(0,s.jsx)("div",{children:"Loading..."}),ssr:!1});t.Z=e=>(0,s.jsx)(a,{...e})},62321:function(){},99322:function(){}}]);