try{var localSearch=$id("local-search"),html=$query("html"),mask=$id("mask"),searchBtn=$query(".search-btn"),searchClose=$query(".search-close-button"),isLoad=!1,searchId="local-search-input",contentId="local-search-result";async function search(e){isLoad=!0;var a=e.split(".")[1];let t=[];const s=await fetch(e);if("json"==a&&(t=await s.json()),"xml"==a){var l=await s.text();const c=new window.DOMParser,n=c.parseFromString(l,"text/xml");t=[...n.querySelectorAll("entry")].map(e=>({title:e.querySelector("title").textContent,content:e.querySelector("content").textContent,url:e.querySelector("url").textContent}))}var l=$id(searchId),r=$id(contentId);l.addEventListener("input",function(){var d='<ul class="search-result-list">',m=this.value.trim().toLowerCase().split(/[\s\-]+/);r.innerHTML="",this.value.trim().length<=0||(t.forEach(e=>{var t=!0;e.title&&""!==e.title.trim()||(e.title="Untitled");var s,a,l,r,c=e.title.trim().toLowerCase(),n=e.content.trim().replace(/<[^>]+>/g,"").toLowerCase(),o=e.url.startsWith("/")?e.url:"/"+e.url,i=-1,h=-1;""!==n?m.forEach(function(e,a){s=c.indexOf(e),i=n.indexOf(e),s<0&&i<0?t=!1:(i<0&&(i=0),0==a&&(h=i))}):t=!1,t&&(a=e.content.trim().replace(/<[^>]+>/g,""),0<=h&&(l=h+80,(l=0==(e=(e=h-20)<0?0:e)?100:l)>a.length&&(l=a.length),r=a.substring(e,l),m.forEach(e=>{var a=new RegExp(e,"gi");r=r.replace(a,'<span class="search-keyword">'+e+"</span>"),c=c.replace(a,'<span class="search-keyword">'+e+"</span>")}),d+="<li><a href='"+o+"' class='search-result-title'>"+c+"</a>",d+='<p class="search-result">'+r+"...</p>"),d+="</li>")}),d+="</ul>",r.innerHTML=d,window.pjax&&window.pjax.refresh(r))})}searchBtn.onclick=function(){isLoad||search($config.searchFile),mask.className="mask",localSearch.style.display||(localSearch.style.display="block",html.style.overflow="hidden",localSearch.classList.remove("search-animation-min"),localSearch.classList.add("search-animation-max"),$id(searchId).focus())},searchClose.onclick=function(){localSearch.classList.remove("search-animation-max"),localSearch.classList.add("search-animation-min"),mask.classList.remove("mask"),html.style.overflow="auto",setTimeout(()=>localSearch.style.display="",500)},window.addEventListener("pjax:complete",()=>{"none"===localSearch.style.display&&(mask.className="")})}catch(e){console.log("search error: ",e)}