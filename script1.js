const $=i=>document.getElementById(i);
let cart=[],user=null;
try{cart=JSON.parse(localStorage.getItem("cart")||"[]");user=localStorage.getItem("user")}catch(e){}
$("cc").textContent=cart.reduce((a,x)=>a+x[1],0);
if(user)$("lg").textContent=user.split(" ")[0];
const goShop=p=>location.href="index1.html"+(p||"");
$("home").onclick=()=>scrollTo({top:0,behavior:"smooth"});
$("cart").onclick=()=>goShop("?cart=1");
$("login").onclick=()=>goShop("?login=1");
$("shop").onclick=()=>goShop();
const search=()=>{const v=$("q").value.trim();if(v)goShop("?q="+encodeURIComponent(v))};
$("go").onclick=search;
$("q").addEventListener("keydown",e=>{if(e.key=="Enter")search()});
