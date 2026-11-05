const app=document.getElementById('app'),LT='abcdef';
const eq=(a,b)=>!!a&&!!b&&a.length===b.length&&a.every(x=>b.includes(x));
const fmt=a=>a&&a.length?a.map(x=>LT[x].toUpperCase()).join('+'):'—';
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const KEY=Q.map(q=>q.k);
try{const t=localStorage.getItem('theme');if(t)document.documentElement.dataset.theme=t}catch(e){}
let S=null;
function qhtml(i){
 const q=Q[i],im=q.f?`<div class="fig"><img src="${q.f}" alt="Hình minh họa"></div>`:'';
 const parts=esc(q.t).split('[[fig]]').map(p=>p.trim()?`<div class="qt">${p.trim()}</div>`:'');
 return parts.join(im);
}
function topo(){
 const C=['#f08a24','#43c27e','#6b9bff','#c28a55','#f08a24','#43c27e'];
 const P=['M138 100C138 74 84 76 70 58','M170 100V46','M202 100C202 74 256 76 270 58','M138 130C138 156 84 154 70 176','M170 130V192','M202 130C202 156 256 154 270 176'];
 const dev=[['laptop',56,44],['cloud',170,28],['phone',284,44],['monitor',56,196],['server',170,210],['printer',284,196]];
 const B='fill="#13213f"';
 const ic={
  laptop:c=>`<rect x="-17" y="-13" width="34" height="22" rx="3" ${B} stroke="${c}" stroke-width="2.5"/><rect x="-22" y="11" width="44" height="4" rx="2" fill="${c}"/>`,
  cloud:c=>`<path d="M-14 9h26a9 9 0 0 0 1-18 12 12 0 0 0-23-3 9 9 0 0 0-4 21z" ${B} stroke="${c}" stroke-width="2.5" stroke-linejoin="round"/>`,
  phone:c=>`<rect x="-10" y="-17" width="20" height="34" rx="5" ${B} stroke="${c}" stroke-width="2.5"/><circle cy="12" r="1.8" fill="${c}"/>`,
  monitor:c=>`<rect x="-18" y="-15" width="36" height="24" rx="3" ${B} stroke="${c}" stroke-width="2.5"/><rect x="-3" y="9" width="6" height="6" fill="${c}"/><rect x="-11" y="15" width="22" height="3" rx="1.5" fill="${c}"/>`,
  server:c=>[-17,-6,5].map(y=>`<rect x="-17" y="${y}" width="34" height="10" rx="3" ${B} stroke="${c}" stroke-width="2.2"/><circle cx="-10" cy="${y+5}" r="1.8" fill="${c}"/>`).join(''),
  printer:c=>`<rect x="-10" y="-17" width="20" height="11" rx="2" ${B} stroke="${c}" stroke-width="2.2"/><rect x="-18" y="-7" width="36" height="16" rx="3" ${B} stroke="${c}" stroke-width="2.5"/><rect x="-10" y="5" width="20" height="11" rx="2" fill="${c}"/>`
 };
 const cab=P.map((d,i)=>`<path id="p${i}" class="cab" style="--i:${i}" pathLength="1" d="${d}" stroke="${C[i]}"/>`).join('');
 const dv=dev.map(([t,x,y],i)=>`<g class="dv" style="--i:${i}"><g transform="translate(${x} ${y})">${ic[t](C[i])}</g></g>`).join('');
 const k=[...Array(8).keys()];
 const sw=`<rect x="120" y="100" width="100" height="30" rx="8" fill="#1a2b50" stroke="#7fa4ff" stroke-width="2"/>`+k.map(i=>`<rect x="${(130+i*10.3).toFixed(1)}" y="106" width="8" height="9" rx="1.5" fill="#0b1426" stroke="#3b568f"/><circle class="led" style="--i:${i}" cx="${(134+i*10.3).toFixed(1)}" cy="123" r="1.9" fill="${i%3===0?'#43c27e':'#ffd166'}"/>`).join('');
 const pk=P.map((_,i)=>{const b=(1.2+i*.5).toFixed(1);return `<circle class="pk" r="3.6" fill="#fff" opacity="0" style="filter:drop-shadow(0 0 4px ${C[i]})"><set attributeName="opacity" to="1" begin="${b}s" fill="freeze"/><animateMotion dur="${(2.6+i*.45).toFixed(2)}s" begin="${b}s" repeatCount="indefinite" calcMode="linear" keyPoints="0;1;0" keyTimes="0;.5;1"><mpath href="#p${i}"/></animateMotion></circle>`}).join('');
 return `<svg class="topo" viewBox="0 0 340 240" aria-hidden="true">${cab}${sw}${dv}${pk}</svg>`;
}
function badge(p){
 const cols=['#f08a24','#43c27e','#6b9bff','#c28a55'],n=8,lit=Math.round(p*n),f=x=>x.toFixed(1),pc=Math.round(p*100);
 const pts=[...Array(n).keys()].map(i=>{const a=-Math.PI/2+i*2*Math.PI/n;return[110+86*Math.cos(a),110+86*Math.sin(a)]});
 const L=pts.map((q,i)=>`<line class="bl" style="stroke:${i<lit?cols[i%4]:'var(--ln)'}${i<lit?'':';stroke-dasharray:3 6'}" x1="110" y1="110" x2="${f(q[0])}" y2="${f(q[1])}"/>`).join('');
 const N=pts.map((q,i)=>`<circle class="bn" style="--i:${i};fill:${i<lit?cols[i%4]:'var(--sf)'};stroke:${i<lit?cols[i%4]:'var(--ln)'}${i<lit?`;filter:drop-shadow(0 0 6px ${cols[i%4]})`:''}" cx="${f(q[0])}" cy="${f(q[1])}" r="10"/>`).join('');
 return `<svg class="badge" viewBox="0 0 220 220" role="img" aria-label="${pc}% câu đúng">${L}${N}<circle class="bc" cx="110" cy="110" r="38"/><text class="bt" x="110" y="110" text-anchor="middle" dominant-baseline="central">${pc}%</text></svg>`;
}
function home(){
 const seg=(nm,items,wide)=>`<div class="seg ${wide?'wide':''}">${items.map(([v,t,s],x)=>`<label><input type="radio" name="${nm}" value="${v}" ${x===0?'checked':''}><span>${t}${s?`<br><small>${s}</small>`:''}</span></label>`).join('')}</div>`;
 app.innerHTML=`<section class="hero"><button class="theme" id="theme" aria-label="Đổi giao diện sáng hoặc tối"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="8"/><path d="M12 4a8 8 0 0 0 0 16z" fill="currentColor"/></svg></button><div><h1>Ôn thi mạng máy tính</h1><p class="sub">${Q.length} câu trắc nghiệm. Làm theo từng chặng, xem đáp án ngay và ôn lại những câu sai.</p><div class="facts"><span>${Q.length} câu</span><span>7 chương</span><span>Chấm điểm ngay</span></div></div>${topo()}</section>
 <div class="panel"><h2>Số câu</h2>${seg('cnt',[[20,'20'],[30,'30'],[50,'50'],[100,'100'],[Q.length,'Tất cả']])}
 <h2>Chế độ</h2>${seg('mode',[['p','Luyện tập','Báo đúng hoặc sai ngay sau mỗi câu'],['e','Thi','Chỉ chấm điểm khi nộp bài']],true)}
 <h2>Chương</h2><div class="seg">${[1,2,3,4,5,6,7].map(c=>`<label><input type="checkbox" name="ch" value="${c}" checked><span>Chương ${c} <small>${Q.filter(q=>q.c===c).length} câu</small></span></label>`).join('')}</div>
 <label class="chk"><input type="checkbox" id="shuf" checked> Trộn thứ tự câu hỏi</label>
 <button class="p" id="go">Bắt đầu làm bài</button></div>`;
 document.getElementById('go').onclick=start;
 document.getElementById('theme').onclick=()=>{const r=document.documentElement,dark=r.dataset.theme?r.dataset.theme==='dark':matchMedia('(prefers-color-scheme:dark)').matches,t=dark?'light':'dark';r.dataset.theme=t;try{localStorage.setItem('theme',t)}catch(e){}};
}
function start(){
 const chs=[...document.querySelectorAll('input[name=ch]:checked')].map(x=>+x.value);
 let l=Q.map((_,i)=>i).filter(i=>!chs.length||chs.includes(Q[i].c));
 if(document.getElementById('shuf').checked)for(let i=l.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[l[i],l[j]]=[l[j],l[i]]}
 const v=n=>document.querySelector(`input[name=${n}]:checked`).value;
 S={list:l.slice(0,+v('cnt')),ans:{},lock:{},cur:0,mode:v('mode'),go:1};
 quiz();
}
function quiz(){
 const an=S.go;S.go=0;
 const i=S.list[S.cur],q=Q[i],a=S.ans[i]||[],k=KEY[i],multi=!!k&&k.length>1,N=S.list.length;
 const locked=!!S.lock[i]&&S.mode==='p',show=locked&&!!k;
 const rows=q.o.map((o,j)=>{let c=a.includes(j)?'sel':'';if(show){if(k.includes(j))c='ok';else if(a.includes(j))c='bad'}
  return `<button class="opt ${c}" data-j="${j}" ${locked?'disabled':''}><span class="l">${LT[j].toUpperCase()}</span><span>${esc(o)}</span></button>`}).join('');
 const nav=S.list.map((x,p)=>`<button class="${(S.ans[x]||[]).length?'done':''} ${p===S.cur?'cur':''}" data-p="${p}">${p+1}</button>`).join('');
 const fb=show?`<p class="${eq(a,k)?'g':'r'}">${eq(a,k)?'Đúng':'Sai. Đáp án đúng: '+fmt(k)}</p>`:'';
 app.innerHTML=`<div class="top"><div class="cnt"><b>${S.cur+1}</b><span>/ ${N}</span></div><span class="tag">Chương ${q.c}, câu #${i+1}</span><button class="ghost" id="sub">Nộp bài</button></div>
 <div class="track"><i style="width:${N>1?S.cur/(N-1)*100:100}%"></i><u style="left:${N>1?S.cur/(N-1)*100:100}%"></u></div>
 <p class="hint">Phím tắt: A, B, C, D để chọn đáp án; mũi tên trái, phải để chuyển câu.</p>
 <div class="qw ${an?'in':''}">${qhtml(i)}
 ${multi?'<p class="note">Câu này có thể có nhiều đáp án đúng: chọn tất cả đáp án đúng.</p>':''}
 <div>${rows}</div></div>${fb}
 ${multi&&S.mode==='p'&&!locked?`<button class="p" id="lk" ${a.length?'':'disabled'}>Chốt đáp án</button>`:''}
 <div class="nav"><button id="pv" ${S.cur?'':'disabled'}>← Trước</button><button class="p" id="nx">${S.cur<N-1?'Sau →':'Nộp bài'}</button></div>
 <details style="margin-top:14px"><summary>Danh sách câu</summary><div class="grid">${nav}</div></details>`;
 app.querySelectorAll('[data-j]').forEach(b=>b.onclick=()=>{const j=+b.dataset.j;
  if(multi){const s=new Set(a);s.has(j)?s.delete(j):s.add(j);S.ans[i]=[...s].sort()}
  else{S.ans[i]=[j];if(S.mode==='p'&&k)S.lock[i]=true}
  quiz()});
 const lk=document.getElementById('lk');if(lk)lk.onclick=()=>{S.lock[i]=true;quiz()};
 app.querySelectorAll('[data-p]').forEach(b=>b.onclick=()=>{S.cur=+b.dataset.p;S.go=1;quiz()});
 document.getElementById('pv').onclick=()=>{S.cur--;S.go=1;quiz()};
 document.getElementById('nx').onclick=()=>S.cur<N-1?(S.cur++,S.go=1,quiz()):finish();
 document.getElementById('sub').onclick=finish;
 window.scrollTo(0,0);
}
function review(i){const k=KEY[i]||[];
 return qhtml(i)+Q[i].o.map((o,j)=>`<div class="ro ${k.includes(j)?'ok':''}">${LT[j].toUpperCase()}. ${esc(o)}${k.includes(j)?' ✓':''}</div>`).join('')}
function countUp(){
 const t=document.querySelector('.bt');if(!t||matchMedia('(prefers-reduced-motion:reduce)').matches)return;
 const to=parseInt(t.textContent),s=performance.now();
 (function f(n){const p=Math.min(1,(n-s)/900);t.textContent=Math.round(to*p)+'%';if(p<1)requestAnimationFrame(f)})(s);
}
function confetti(){
 if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;
 const c=document.createElement('div');c.className='conf',cols=['#f08a24','#43c27e','#6b9bff','#c28a55','#ffd166'];
 for(let i=0;i<36;i++){const e=document.createElement('i');e.style.cssText=`left:${Math.random()*100}%;background:${cols[i%5]};animation-delay:${Math.random()*.6}s;animation-duration:${1.8+Math.random()*1.4}s`;c.appendChild(e)}
 document.body.appendChild(c);setTimeout(()=>c.remove(),3800);
}
function chap(){
 const per={};S.list.forEach(i=>{if(KEY[i]==null)return;const c=Q[i].c;(per[c]=per[c]||{t:0,o:0}).t++;if(eq(S.ans[i],KEY[i]))per[c].o++});
 const ks=Object.keys(per).sort();if(ks.length<2)return'';
 return `<div class="panel"><h2>Kết quả theo chương</h2>${ks.map(c=>`<div class="cb"><span>Chương ${c}</span><div class="meter"><i style="width:${per[c].o/per[c].t*100}%"></i></div><b>${per[c].o}/${per[c].t}</b></div>`).join('')}</div>`;
}
function finish(){
 const gr=S.list.filter(i=>KEY[i]!=null),ok=gr.filter(i=>eq(S.ans[i],KEY[i])),un=S.list.filter(i=>!(S.ans[i]||[]).length).length;
 const bad=gr.length-ok.length-S.list.filter(i=>KEY[i]!=null&&!(S.ans[i]||[]).length).length;
 const rows=S.list.map(i=>{const a=S.ans[i],k=KEY[i];
  const st=k==null?'<span class="note">Chưa có đáp án</span>':!(a||[]).length?'<span class="r">Bỏ trống</span>':eq(a,k)?'<span class="g">Đúng</span>':'<span class="r">Sai</span>';
  return `<tr><td>#${i+1}</td><td>${fmt(a)}</td><td>${fmt(k)}</td><td>${st}</td></tr><tr><td colspan="4" style="padding:0"><details><summary class="note">Xem câu hỏi</summary>${review(i)}</details></td></tr>`}).join('');
 const wrong=S.list.filter(i=>KEY[i]!=null&&!eq(S.ans[i],KEY[i])),pct=gr.length?ok.length/gr.length:0,C=2*Math.PI*54;
 app.innerHTML=`<h1>Kết quả</h1><div class="panel center">
 ${badge(pct)}
 <h2 class="verdict">${pct>=.8?'Bạn nắm khá vững kiến thức':pct>=.5?'Khá ổn, hãy ôn lại các câu sai':'Cần ôn lại thêm'}</h2><p class="sub" style="margin:0 auto 14px">${ok.length}/${gr.length} câu đúng${S.list.length>gr.length?`. ${S.list.length-gr.length} câu chưa có đáp án nên không tính điểm`:''}</p>
 <div class="stats"><span class="g">${ok.length} đúng</span><span class="r">${bad} sai</span><span>${un} bỏ trống</span></div>
 <div class="row" style="justify-content:center"><button class="p" id="again">Làm bài mới</button><button id="rw" ${wrong.length?'':'disabled'}>Làm lại câu sai và bỏ trống (${wrong.length})</button></div></div>
${chap()}
 <div class="panel"><table><tr><th>Câu</th><th>Bạn chọn</th><th>Đáp án</th><th>Kết quả</th></tr>${rows}</table></div>`;
 document.getElementById('again').onclick=()=>home();
 document.getElementById('rw').onclick=()=>{S={list:wrong,ans:{},lock:{},cur:0,mode:S.mode};quiz()};
 window.scrollTo(0,0);
 countUp();if(pct>=.8)confetti();
}
document.addEventListener('keydown',e=>{
 if(!S||!document.querySelector('.opt')||e.ctrlKey||e.metaKey||e.altKey)return;
 const k=e.key.toLowerCase(),j=k.length===1?'abcdef123456'.indexOf(k):-1;
 if(j>=0){const b=document.querySelector(`.opt[data-j="${j%6}"]`);if(b&&!b.disabled)b.click();return}
 if(k==='arrowright'||(k==='enter'&&e.target===document.body)){document.getElementById('nx').click()}
 if(k==='arrowleft'){const p=document.getElementById('pv');if(p&&!p.disabled)p.click()}
});
home();
