if(typeof(RapidTwitter)=="undefined"){RapidTwitter={}}RapidTwitter.script=function(d,g,k){var e=d.apis,b;function n(v,w){if(typeof w.error!="undefined"){return}var u=v.widgets,t=u.length,x="";x=j(v.screen_name,w);for(var s=0;s<t;s++){var r=u[s],q=k.createElement("ul");r=k.getElementById(r).parentNode;q.className="tweets";q.innerHTML=x;r.appendChild(q);m(r,"widget_twitter--hidden")}}d.callback=n;function j(A,v){var y="";if(typeof d.generate_html=="function"){return d.generate_html(A,v)}for(var t=0;t<v.length;t++){var u=v[t],w="",q=["tweet"];if(typeof u.user.screen_name=="undefined"){u.user.screen_name=A}if(typeof u.retweeted_status!="undefined"){u=u.retweeted_status;q.push("tweet--retweet");if(typeof u.user.screen_name=="undefined"){var r=v[t].entities.user_mentions,z=r.length,x=256;for(var s=0;s<z;s++){if(r[s].indices[0]<x){x=r[s].indices[0];u.user.screen_name=r[s].screen_name}}}w+="RT ";w+='<a href="';w+="https://twitter.com/";w+=u.user.screen_name;w+='" class="tweet__mention tweet__mention--retweet">';w+="<span>@</span>";w+=u.user.screen_name;w+="</a>";w+=": "}if(u.in_reply_to_screen_name!=null){q.push("tweet--reply")}y+='<li class="';y+=q.join(" ");y+='">';y+=w;y+=a(u);y+=" ";y+='<a class="tweet__datestamp timesince" href="';y+="https://twitter.com/";y+=u.user.screen_name;y+="/status/";y+=u.id_str;y+='">';y+=h(u.created_at);y+="</a>";y+="</li>"}return y}function h(r){var s=r.split(" "),t=new Date(s[1]+" "+s[2]+", "+s[5]+" "+s[3]+" UTC"),q=new Date(),u=(q.getTime()-t.getTime())/1000,i=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];if(u<60){return"less than a minute ago"}else{if(u<120){return"about a minute ago"}else{if(u<(45*60)){return(parseInt(u/60)).toString()+" minutes ago"}else{if(u<(90*60)){return"about an hour ago"}else{if(u<(24*60*60)){return"about "+(parseInt(u/3600)).toString()+" hours ago"}else{if(u<(48*60*60)){return"1 day ago"}else{return t.getDate()+" "+i[t.getMonth()]}}}}}}}d.relative_time=h;function a(w){var r=[],v=[],x=0,t,s,q,u;for(t in w.entities){for(s=0,q=w.entities[t].length;s<q;s++){u=w.entities[t][s];v[u.indices[0]]={end:u.indices[1],text:function(){switch(t){case"media":return'<a href="'+u.url+'" class="tweet__media" title="'+u.expanded_url+'">'+u.display_url+"</a>";break;case"urls":return(u.display_url)?'<a href="'+u.url+'" class="tweet__link" title="'+u.expanded_url+'">'+u.display_url+"</a>":u.url;break;case"user_mentions":var i=(u.indices[0]==0)?" tweet__mention--reply":"";return'<a href="https://twitter.com/'+u.screen_name+'" class="tweet__mention'+i+'"><span>@</span>'+u.screen_name+"</a>";break;case"hashtags":return'<a href="https://twitter.com/search?q=%23'+u.text+'" class="tweet__hashtag"><span>#</span>'+u.text+"</a>";break;default:return""}}()}}}for(s=0,q=v.length;s<q;s++){if(v[s]){u=v[s];r[r.length]=w.text.substring(x,s);r[r.length]=u.text;x=u.end;s=u.end-1}}r[r.length]=w.text.substring(x);return r.join("")}d.process_entities=a;function m(i,r){var q=new RegExp("(\\s|^)"+r+"(\\s|$)");i.className=i.className.replace(q," ")}for(var l in e){var f=e[l],c=k.createElement("script"),p,o;o=("https:"==k.location.protocol?"https:":"http:");o+="//api.twitter.com/1/statuses/user_timeline.json?";o+="count=";o+=f.count;o+="&";o+="screen_name=";o+=f.screen_name;o+="&";o+="exclude_replies=";o+=f.exclude_replies;o+="&";o+="include_rts=";o+=f.include_rts;o+="&";o+="include_entities=";o+="t";o+="&";o+="trim_user=";o+="t";o+="&";o+="suppress_response_codes=";o+="t";o+="&";o+="callback=RapidTwitter.callback."+l+"";d.callback[l]=function(i){n(f,i)};c.type="text/javascript";c.async=true;c.src=o;p=k.getElementsByTagName("script")[0];p.parentNode.insertBefore(c,p)}}(RapidTwitter,window,document);