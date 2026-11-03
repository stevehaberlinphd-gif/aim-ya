/* AIM-YA app (shared by every version).
   Per-version settings live in ../versions.js; this file reads the one for the current page.
   window.AIMYA_VERSION and window.AIMYA_ROOT are set by the version's index.html. */
const VERSION_ID=window.AIMYA_VERSION||"main";
const VCFG=(()=>{const all=window.AIMYA_VERSIONS||{},base=all.main||{},own=all[VERSION_ID]||{};
  const merge=(a,b)=>{const o=Object.assign({},a);for(const k in b){o[k]=(b[k]&&typeof b[k]==="object"&&!Array.isArray(b[k])&&a&&typeof a[k]==="object")?merge(a[k],b[k]):b[k];}return o;};
  return VERSION_ID==="main"?base:merge(base,own);})();
const ROOT=window.AIMYA_ROOT||"";
const asset=p=>!p?"":/^(https?:)?\/\//.test(p)||p.startsWith("/")?p:ROOT+p;
if(VCFG.name) document.title=VCFG.name;
/* ---------------- Curriculum content (AIM-YA 4-week) ---------------- */
const GUIDING = [
  ["who","Who am I?"],["want","What do I really want?"],["purpose","What's my purpose?"],
  ["grateful","What am I grateful for?"],["strengths","What are my unique strengths?"]
];
const BEATS = [["practice","Practice","5–10 min"],["reflection","Reflection","10 min"],["lab","Lab","15 min"],["checkin","Check-in","3 min"]];

/* Four-week curriculum. Each week: practice (guided, with a video placeholder and on-screen cues),
   reflection, AI lab, and an end-of-session check-in. `targets` notes which AI-anxiety dimensions each week addresses. */
const WEEKS = {
 1:{title:"Arriving",tag:"Notice what AI stirs in you",
    targets:"AI configuration anxiety; learning anxiety",
    practice:{name:"Breath Anchor and Noting Emotions",desc:"A 5-minute breath anchor, then naming the emotions that arise when you think about AI (“noting”).",phases:[
      {name:"Breath anchor",min:2,cues:["Settle into a posture that feels upright and at ease.","Find the breath where it's easiest to feel: nostrils, chest, or belly.","Rest your attention there. Let the breath breathe itself.","When the mind wanders, gently come back to the breath."]},
      {name:"Noting emotions",min:3,cues:["Now bring to mind the word “AI.” Notice what arises.","If a feeling shows up, name it softly: “curious,” “anxious,” “angry,” “hopeful,” or “nothing.”","Name it, notice where it sits in the body, then return to the breath.","There are no wrong feelings here. Notice, name, return."]}]},
    reflection:{name:"My AI map",desc:"Map where AI shows up in your studying, work, and daily life, and which feelings each place brings up."},
    lab:{name:"Inside the prediction machine",desc:"Watch a chatbot predict the next word, then ask it something it will get wrong.",
      steps:["Copy the first prompt into your AI tool and read how it predicts the next word.","Ask it something it is likely to get wrong (ideas below).","When it slips, point out the mistake and notice how it responds."]},
    checkin:{name:"Anxiety, curiosity, and the story",desc:"Rate anxiety and curiosity 0–10, then answer: “What story is my mind telling about AI?”"}},
 2:{title:"Seeing clearly",tag:"The humans behind the machine",
    targets:"Sociotechnical blindness; calibrating trust (Lee et al., 2025)",
    practice:{name:"Body Scan and the Urge to Reach",desc:"A body scan, plus noticing the urge to reach for AI or your phone.",phases:[
      {name:"Body scan",min:8,cues:["Bring attention to your feet. Notice sensation without fixing it.","Move up through your ankles, calves, and knees.","Thighs and hips. Weight, warmth, pressure.","Belly and lower back. Notice the breath moving here.","Chest and upper back.","Hands and arms, up to the shoulders.","Neck, jaw, and face. Let the jaw soften.","The whole body, breathing."]},
      {name:"Noticing the urge",min:2,cues:["Notice any pull to check your phone or open an AI tool.","Name it silently: “urge.” Where do you feel it in the body?","You don't have to act on it. Watch it rise, peak, and fade.","Return to the whole body, breathing."]}]},
    reflection:{name:"Who's behind the tool?",desc:"Who builds, trains, profits from, and governs the AI tools you use, and where are human choices hidden?"},
    lab:{name:"Two tools, one topic",desc:"Test two AI tools for bias and made-up facts (hallucination) on a topic you know well.",
      steps:["Pick a topic you know well: a hobby, your hometown, your major, a game, a sport.","Give both tools the same prompt (below) and check every fact and source they give.","Then ask each tool the bias prompt and compare who they picture as the expert."]},
    checkin:{name:"Trust, before and after",desc:"“How much did I trust the output before checking? After?”"}},
 3:{title:"Learning with, not through",tag:"Protecting your thinking",
    targets:"Learning anxiety; dependency; metacognitive laziness",
    practice:{name:"Walking Meditation and the STOP Pause",desc:"Walking meditation, plus a “STOP” pause to use before you open AI.",phases:[
      {name:"Walking meditation",min:7,cues:["Stand still and feel your feet on the ground.","Walk slowly. Feel each foot lift, move, and land.","When the mind wanders, pause, feel your feet, and continue.","At the end of your path, turn slowly and begin again."]},
      {name:"The STOP pause",min:3,cues:["S: Stop. Pause whatever you're doing.","T: Take a breath. One slow breath in and out.","O: Observe. What am I feeling? What do I actually need right now?","P: Proceed. Decide on purpose whether to open AI, and how. Use this pause before you reach for AI this week."]}]},
    reflection:{name:"My AI-use charter",desc:"Decide when AI helps your learning and when it replaces it, using the AI-use ladder, from Level 0 (no AI) to Level 4 (AI exploration). Then reflect on academic integrity and the fear of being falsely accused."},
    lab:{name:"Think first, then ask for hints",desc:"Solve a problem yourself first, then compare with an AI acting as a hint-giver rather than an answer-giver.",
      steps:["Choose a problem from one of your courses: a math problem, a lab question, an essay thesis, a coding bug.","Work on it yourself first and write down your attempt, even if it's incomplete.","Then use the hint-giver prompt (below). Reply to each hint before asking for the next one."]},
    checkin:{name:"Did I think first?",desc:"Plan, monitor, evaluate: “Did I think first?”"}},
 4:{title:"Future self",tag:"Values, work and agency",
    targets:"Job replacement anxiety; fear of missing out; meaning",
    practice:{name:"Loving-Kindness and Values",desc:"Loving-kindness or values-based meditation, with self-compassion for uncertainty.",phases:[
      {name:"Kindness toward yourself",min:4,cues:["Place a hand on your heart if that feels right.","May I be kind to myself in uncertain times.","May I meet the future with curiosity rather than fear.","May I trust what I value."]},
      {name:"Extending kindness",min:3,cues:["Bring to mind someone else facing an uncertain future.","May you be kind to yourself in uncertain times.","May all of us facing change find our footing."]},
      {name:"Resting in your values",min:3,cues:["Bring to mind something you deeply value.","Notice how it feels in the body to know what matters to you.","Rest here. This is yours, whatever the future holds."]}]},
    reflection:{name:"Values, strengths, and one next step",desc:"Inventory your values and human strengths, look at balanced evidence on AI and jobs, and pick one next step that's yours to control."},
    lab:{name:"Ask AI about your future",desc:"Use AI to explore a career path, then critique what it missed about you.",
      steps:["Copy the prompt below. It includes the values and strengths from your reflection.","Read what the AI suggests about career paths and how AI may change them.","Write down what it got right and what it missed about you."]},
    checkin:{name:"Looking back at Week 1",desc:"Compare with your Week 1 map: what changed, and what you'll keep practicing."}}
};
const FEELINGS=["Curious","Anxious","Angry","Hopeful","Nothing"];
const MAP_PLACES=[["study","Studying and coursework"],["work","Work or job search"],["daily","Daily life and social media"]];
/* The AI-use ladder, matching the Week 3 student worksheet (levels 0–4). */
const AI_LEVELS=[[0,"No AI","All my own thinking and work."],[1,"AI for ideas","Brainstorming or questions; the work itself is mine."],[2,"AI as tutor","Hints, explanations, feedback on my draft; I do the work."],[3,"AI as collaborator","AI drafts parts; I revise, check, and disclose."],[4,"AI exploration","Open use to learn the tool itself, when allowed."]];
const levelName=v=>(AI_LEVELS.find(l=>l[0]===v)||[])[1]||"";
const CHARTER_TASKS=[["newmat","Learning new material"],["exams","Studying for exams"],["writing","Writing assignments"],["problems","Problem sets or coding"],["ideas","Brainstorming ideas"]];
const VALUES=["Honesty","Curiosity","Creativity","Connection","Compassion","Fairness","Family","Health","Growth","Independence","Service","Courage","Security","Adventure","Spirituality","Justice"];

/* ---------------- Why AIM-YA: AI anxiety dimensions (Wang & Wang, 2019) mapped to the program ---------------- */
const DIMS=[
 {k:"learning",label:"Learning AI",term:"Learning anxiety",statement:"Learning to use AI, or keeping up with how fast it changes, makes me anxious.",
  response:"Week 1 looks inside a chatbot to see how it predicts words, which makes it less mysterious. Week 3 practices thinking first and using AI as a hint-giver, not an answer-giver.",weeks:[1,3]},
 {k:"job",label:"Replacement & dependence",term:"Job replacement anxiety",statement:"I worry AI will replace people, or make us dependent and less able to think for ourselves.",
  response:"Week 3 protects your thinking with a personal AI-use charter. Week 4 looks at balanced evidence on AI and jobs, your values and strengths, and one next step you control.",weeks:[3,4]},
 {k:"config",label:"Humanlike AI",term:"AI configuration anxiety",statement:"Humanlike AI, such as humanoid robots, feels scary or intimidating to me.",
  response:"Week 1 shows what's under the hood: a system predicting the next word, which can make humanlike AI feel less like a mind and more like a tool. The practice names the feelings AI stirs up without being swept along by them.",weeks:[1]},
 {k:"socio",label:"Misuse & loss of control",term:"Sociotechnical blindness",statement:"I worry AI could be misused, malfunction, or get out of human control.",
  response:"Week 2 looks at the people who build, train, profit from, and govern AI tools, and tests two tools for bias and made-up facts.",weeks:[2]}];
const WEEK_DIMS={1:["config","learning"],2:["socio"],3:["learning","job"],4:["job"]};
const STATS=[
 {n:"42%",text:"feel anxious about AI. Only 22% feel excited, down from 36% a year earlier."},
 {n:"49%",text:"feel curious, the most common feeling. Concern and curiosity can coexist."},
 {n:"42% vs 25%",text:"think AI will hurt rather than help their ability to think carefully about information."},
 {n:"31%",text:"feel angry about AI, up from 22% the year before."}];
const REFS=[
 {t:"American College Health Association. (2024). Student health data from the Spring 2024 NCHA now available.",u:"https://www.acha.org/news/student-health-data-from-the-spring-2024-ncha-now-available/"},
 {t:"Brenan, M. (2026, April 8). Gen Z's AI adoption steady, but skepticism climbs. Gallup.",u:"https://news.gallup.com/poll/708224/gen-adoption-steady-skepticism-climbs.aspx"},
 {t:"Wang, Y.-Y., & Wang, Y.-S. (2022). Development and validation of an artificial intelligence anxiety scale: An initial application in predicting motivated learning behavior. Interactive Learning Environments, 30(4), 619–634.",doi:"10.1080/10494820.2019.1674887"}];

/* ---------------- Guided audio slots ----------------
   When a recording is ready, set `src` to its path or URL (e.g. "audio/week1-breath-body-scan.mp3")
   and optionally paste the script into `transcript`. Empty `src` shows a "coming soon" placeholder. */
const AUDIO={
  1:{file:"week1-breath-body-scan.mp3",min:13,src:"audio/week1-breath-body-scan-v2.mp3",transcript:""},
  2:{file:"week2-breath-anchor-stress.mp3",min:15,src:"audio/week2-breath-anchor-stress.mp3",transcript:""},
  3:{file:"week3-noting-loving-kindness.mp3",min:13,src:"audio/week3-noting-loving-kindness.mp3",transcript:""},
  "4:Walking":{file:"week4-mindful-walking.mp3",min:10,src:"audio/week4-mindful-walking.mp3",transcript:""},
  "4:Silent sit":{file:"week4-silent-sit.mp3",min:10,src:"audio/week4-silent-sit.mp3",transcript:""}};

/* Fetch the recording once and play it from a blob URL (works inside the artifact viewer's sandbox). */
const audioCache={};
function loadAudio(src){
  /* On a normal website, stream the file directly (starts faster). The blob route is only needed inside Claude's preview. */
  if(!window.claude) return Promise.resolve(asset(src));
  if(!audioCache[src]) audioCache[src]=fetch(asset(src),{cache:"no-store"}).then(r=>{if(!r.ok)throw new Error(r.status);return r.blob();})
    .then(b=>{const t=/\.pdf$/i.test(src)?"application/pdf":/\.mp4$/i.test(src)?"video/mp4":/\.mp3$/i.test(src)?"audio/mpeg":(b.type||"application/octet-stream");return URL.createObjectURL(b.type===t?b:new Blob([b],{type:t}));})
    .catch(e=>{delete audioCache[src];throw e;});   /* forget failures so the next visit retries */
  return audioCache[src];
}

/* ---------------- Qualtrics links ----------------
   Paste each survey's full anonymous link, e.g. "https://yourschool.qualtrics.com/jfe/form/SV_xxxxxxxxxxxx".
   The app adds ?pid=<study ID>&phase=pre|post. In Qualtrics, add Embedded Data fields `pid` and `phase`
   (blank values) at the top of the Survey Flow so they are captured with each response. */
const QUALTRICS={ pre:VCFG.qualtricsPre||"", post:VCFG.qualtricsPost||"" };
const USE_QUALTRICS=true;   /* false = use the built-in consent page and questionnaires below instead */
const qLink=(phase,pid)=>{const u=QUALTRICS[phase];if(!u)return"";return u+(u.includes("?")?"&":"?")+"pid="+encodeURIComponent(pid)+"&phase="+phase+"&version="+encodeURIComponent(VERSION_ID);};

/* ---------------- Research instruments (built-in fallback, used when USE_QUALTRICS is false) ----------------
   AIAS item text: paste the exact wording from Wang & Wang (2019) into each `text` below.
   Dimension sizes follow the published 21-item structure: learning 8, job replacement 6,
   sociotechnical blindness 4, AI configuration 3. Confirm the 7-point anchors against the article. */
const AIAS_PENDING=false;
/* Wang & Wang (2019), Table 3. Listed in original questionnaire order (Q1…Q47). */
const AIAS_ITEMS=[
 ["L6","learning","Taking a class about the development of AI techniques/products makes me anxious."],
 ["L2","learning","Learning to use AI techniques/products makes me anxious."],
 ["L1","learning","Learning to understand all of the special functions associated with an AI technique/product makes me anxious."],
 ["L4","learning","Learning how an AI technique/product works makes me anxious."],
 ["L3","learning","Learning to use specific functions of an AI technique/product makes me anxious."],
 ["L5","learning","Learning to interact with an AI technique/product makes me anxious."],
 ["L8","learning","Being unable to keep up with the advances associated with AI techniques/products makes me anxious."],
 ["L7","learning","Reading an AI technique/product manual makes me anxious."],
 ["J6","job","I am afraid that AI techniques/products will replace someone's job."],
 ["J5","job","I am afraid that if I begin to use AI techniques/products I will become dependent upon them and lose some of my reasoning skills."],
 ["J4","job","I am afraid that widespread use of humanoid robots will take jobs away from people."],
 ["J1","job","I am afraid that an AI technique/product may make us dependent."],
 ["J2","job","I am afraid that an AI technique/product may make us even lazier."],
 ["J3","job","I am afraid that an AI technique/product may replace humans."],
 ["C1","config","I find humanoid AI techniques/products (e.g. humanoid robots) scary."],
 ["C2","config","I find humanoid AI techniques/products (e.g. humanoid robots) intimidating."],
 ["C3","config","I don't know why, but humanoid AI techniques/products (e.g. humanoid robots) scare me."],
 ["S3","socio","I am afraid that an AI technique/product may get out of control and malfunction."],
 ["S1","socio","I am afraid that an AI technique/product may be misused."],
 ["S2","socio","I am afraid of various problems potentially associated with an AI technique/product."],
 ["S4","socio","I am afraid that an AI technique/product may lead to robot autonomy."]].map(([id,dim,text])=>({id,dim,text}));
const SCALES=[
 {key:"aias",name:"AI Anxiety Scale",short:"AI anxiety",
  instructions:"Please indicate how much you agree or disagree with each statement.",
  options:[[1,"Strongly disagree"],[2,""],[3,""],[4,"Neutral"],[5,""],[6,""],[7,"Strongly agree"]],compact:true,
  items:AIAS_ITEMS},
 {key:"pss",name:"Perceived Stress Scale",short:"Perceived stress",
  instructions:"The questions in this scale ask about your feelings and thoughts during the last month. In each case, indicate how often you felt or thought a certain way. Some questions are similar, but treat each one separately. Answer fairly quickly: don't count the number of times, just pick the answer that seems like a reasonable estimate.",
  options:[[0,"Never"],[1,"Almost never"],[2,"Sometimes"],[3,"Fairly often"],[4,"Very often"]],reverse:[4,5,7,8],
  items:["In the last month, how often have you been upset because of something that happened unexpectedly?",
   "In the last month, how often have you felt that you were unable to control the important things in your life?",
   "In the last month, how often have you felt nervous and stressed?",
   "In the last month, how often have you felt confident about your ability to handle your personal problems?",
   "In the last month, how often have you felt that things were going your way?",
   "In the last month, how often have you found that you could not cope with all the things that you had to do?",
   "In the last month, how often have you been able to control irritations in your life?",
   "In the last month, how often have you felt that you were on top of things?",
   "In the last month, how often have you been angered because of things that happened that were outside of your control?",
   "In the last month, how often have you felt difficulties were piling up so high that you could not overcome them?"].map((t,i)=>({id:"P"+(i+1),text:t}))},
 {key:"cams",name:"Cognitive and Affective Mindfulness Scale–Revised",short:"Mindfulness (CAMS-R)",
  instructions:"People have a variety of ways of relating to their thoughts and feelings. For each item, rate how much it applies to you.",
  options:[[1,"Rarely / not at all"],[2,"Sometimes"],[3,"Often"],[4,"Almost always"]],reverse:[2,6,7],
  items:["It is easy for me to concentrate on what I am doing.","I am preoccupied by the future.","I can tolerate emotional pain.",
   "I can accept things I cannot change.","I can usually describe how I feel at the moment in considerable detail.","I am easily distracted.",
   "I am preoccupied by the past.","It's easy for me to keep track of my thoughts and feelings.","I try to notice my thoughts without judging them.",
   "I am able to accept the thoughts and feelings I have.","I am able to focus on the present moment.",
   "I am able to pay close attention to one thing for a long period of time."].map((t,i)=>({id:"C"+(i+1),text:t}))}];

function scoreAll(ans){
  if(!ans) return null;
  const out={};
  const pss=SCALES[1],cams=SCALES[2],aias=SCALES[0];
  if(pss.items.every(it=>ans.pss?.[it.id]!=null)) out.pss=pss.items.reduce((s,it,i)=>s+(pss.reverse.includes(i+1)?4-ans.pss[it.id]:ans.pss[it.id]),0);
  if(cams.items.every(it=>ans.cams?.[it.id]!=null)) out.cams=cams.items.reduce((s,it,i)=>s+(cams.reverse.includes(i+1)?5-ans.cams[it.id]:ans.cams[it.id]),0);
  if(aias.items.every(it=>ans.aias?.[it.id]!=null)){
    const mean=a=>a.reduce((s,x)=>s+x,0)/a.length;
    out.aias=mean(aias.items.map(it=>ans.aias[it.id]));
    out.aiasDims={};["learning","job","socio","config"].forEach(d=>out.aiasDims[d]=mean(aias.items.filter(it=>it.dim===d).map(it=>ans.aias[it.id])));
  }
  return out;
}
const pssBand=x=>x<=13?"low":x<=26?"moderate":"high";

/* ---------------- State (saved on this device only) ---------------- */
const KEY="aimya-"+VERSION_ID+"-v2"; /* one saved-progress slot per version, so versions never mix */
try{["aimya-companion-v1","aimya-companion-v2","aimya-companion-v3","aimya-companion-v4","aimya-companion-v5","aimya-companion-v6","aimya-companion-v7"].forEach(k=>localStorage.removeItem(k));}catch(e){}
const blank=()=>({onboarded:false,guiding:{},check:{},check4:{},weeks:{1:{},2:{},3:{},4:{}},revisit:{},manifesto:{},
  research:{consent:null,pid:"",pre:{aias:{},pss:{},cams:{}},post:{aias:{},pss:{},cams:{}},preDone:null,postDone:null}});
let S=blank();
try{const raw=localStorage.getItem(KEY); if(raw) S=Object.assign(blank(),JSON.parse(raw));}catch(e){}
function save(){try{localStorage.setItem(KEY,JSON.stringify(S));}catch(e){}}
const W=n=>S.weeks[n]||(S.weeks[n]={});

let view={tab:"home",week:null,beat:"practice"};
const app=document.getElementById("app");

/* ---------------- Helpers ---------------- */
const h=(tag,attrs={},...kids)=>{const el=document.createElement(tag);
  for(const[k,v]of Object.entries(attrs||{})){ if(v==null||v===false) continue;
    if(k==="class") el.className=v; else if(k.startsWith("on")) el.addEventListener(k.slice(2),v);
    else if(k==="html") el.innerHTML=v; else el.setAttribute(k,v===true?"":v);}
  for(const c of kids.flat()){ if(c==null||c===false) continue; el.append(c.nodeType?c:document.createTextNode(c)); }
  return el;};
const words=t=>(t||"").trim().split(/\s+/).filter(Boolean).length;
function toast(msg){const t=document.getElementById("toast");t.textContent=msg;t.hidden=false;clearTimeout(toast._t);toast._t=setTimeout(()=>t.hidden=true,1800);}
function copy(text,btn){
  const done=()=>toast("Copied. Paste it into your AI tool.");
  try{navigator.clipboard.writeText(text).then(done,()=>fallback());}catch(e){fallback();}
  function fallback(){const ta=h("textarea",{style:"position:fixed;opacity:0"});ta.value=text;document.body.append(ta);ta.select();
    try{document.execCommand("copy");done();}catch(e){toast("Select the text and copy it manually.");}ta.remove();}
}
function field(id,labelText,value,onInput,opts={}){
  const el=h(opts.input?"input":"textarea",{id,type:opts.input?"text":null,placeholder:opts.placeholder||"",rows:opts.rows||null});
  el.value=value||""; el.addEventListener("input",()=>{onInput(el.value);save();opts.after&&opts.after(el.value);});
  if(opts.minH) el.style.minHeight=opts.minH;
  return h("div",{class:"stack-s"},labelText?h("label",{for:id},labelText):null,el);
}
function wordMeter(getText,min,max){
  const bar=h("i"),m=h("div",{class:"meter"},bar),c=h("span",{class:"counter"});
  const upd=()=>{const n=words(getText());bar.style.width=Math.min(100,n/max*100)+"%";m.classList.toggle("ok",n>=min);
    c.textContent=`${n} words · aim for ${min}–${max}`;};
  upd(); return {el:h("div",{class:"stack-s"},m,c),upd};
}
function beatDone(n,b){const w=W(n); return !!(w.done&&w.done[b]) || (b==="practice"&&!!w.practiced);}
const weekDone=n=>BEATS.every(([b])=>beatDone(n,b));
const weekStarted=n=>BEATS.some(([b])=>beatDone(n,b));

/* ---------------- Views ---------------- */
function render(){
  stopTimer();
  document.querySelectorAll(".tabs button").forEach(b=>b.setAttribute("aria-current",b.dataset.tab===view.tab?"page":"false"));
  app.replaceChildren();
  if(view.tab==="home"){
    /* The research consent / pre-survey page opens first on every visit until the pre-survey is done.
       "Continue without the survey" skips it for this visit only. */
    if(view.complete) renderComplete();
    else if(USE_QUALTRICS&&!S.research.preDone&&!view.skipResearch) renderStudyStart();
    else if(!S.onboarded) renderWelcome();
    else if(view.survey==="results") renderResults();
    else if(view.survey) renderSurvey(view.survey);
    else if(view.week) renderWeek(view.week); else renderHome(); }
  else if(view.tab==="journal") renderJournal();
  else renderAbout();
  window.scrollTo(0,0);
}
/* Shown once, right after the participant finishes the post-program survey. */
function renderComplete(){
  app.append(header(),h("div",{class:"stack",style:"text-align:center;align-items:center;padding-top:40px"},
    h("div",{"aria-hidden":"true",style:"width:72px;height:72px;border-radius:50%;background:var(--accent);color:var(--accent-ink);display:grid;place-items:center;font-size:2.2rem"},"✓"),
    h("h1",{class:"beat-h"},"Congratulations!"),
    h("p",{style:"font-family:var(--f-display);font-size:1.35rem;line-height:1.4;max-width:28ch"},"You have completed the AIM-YA program. Thank you."),
    h("button",{class:"btn-ghost",style:"margin-top:24px",onclick:()=>{view.complete=false;render();}},"Back to the program")));
}
function header(){return h("div",{class:"top",style:"justify-content:flex-end"},
  h("img",{class:"logo",src:asset(VCFG.logo||"media/logo.png"),alt:"AIM-YA: AI Mindfulness for Young Adults",width:"84",height:"84"}));}

/* ---- Opening sequence: personal first, then data, then research, then how the program responds ---- */
function checkScale(store,k,after){
  return h("div",{class:"scale",role:"group","aria-label":"Agreement"},[1,2,3,4,5].map(v=>h("button",{"aria-pressed":String(store[k]===v),onclick:e=>{store[k]=v;save();
    e.currentTarget.parentNode.querySelectorAll("button").forEach((b,i)=>b.setAttribute("aria-pressed",String(i+1===v)));after&&after();}},String(v))));
}
const keepScroll=()=>{const y=window.scrollY;render();window.scrollTo(0,y);};
function selfCheck(store,after){
  return h("div",{class:"stack"},DIMS.map(d=>h("div",{class:"stack-s"},
    h("label",{},d.statement),checkScale(store,d.k,after),
    h("div",{class:"scale-ends"},h("span",{},"1 · Not at all like me"),h("span",{},"Very much like me · 5")))));
}
/* High concern: AIAS subscale mean >= 5 of 7 when the survey was taken; otherwise the informal self-check (>= 4 of 5). */
function isHigh(k){const sc=S.research.preDone?scoreAll(S.research.pre):null;
  if(sc&&sc.aiasDims) return sc.aiasDims[k]>=5; return (S.check[k]||0)>=4;}
const topConcerns=()=>DIMS.filter(d=>isHigh(d.k));

/* ---- Consent ---- */
function renderConsent(){
  const R=S.research;
  app.append(header());
  const age=h("input",{type:"checkbox",id:"c-age"}),agree=h("input",{type:"checkbox",id:"c-agree"});
  const pid=h("input",{type:"text",id:"c-pid",placeholder:"e.g., AIM-0427",autocomplete:"off"}); pid.value=R.pid||"";
  const go=h("button",{class:"btn-primary",disabled:true},"Agree and continue");
  const sync=()=>{go.disabled=!(age.checked&&agree.checked&&pid.value.trim());};
  [age,agree].forEach(c=>c.addEventListener("change",sync)); pid.addEventListener("input",sync);
  go.onclick=()=>{R.consent=true;R.consentAt=new Date().toISOString();R.pid=pid.value.trim();save();render();};
  const sec=(t,b)=>h("div",{class:"stack-s"},h("h3",{},t),h("p",{},b));
  app.append(h("div",{class:"stack"},
    h("p",{class:"eyebrow"},"Welcome to AIM-YA · AI Mindfulness for Young Adults"),
    h("h2",{},"Before you start: research participation"),
    h("p",{class:"muted"},"This program is part of a research study. Please read the information below and choose whether to take part. You can use the full program either way."),
    h("div",{class:"draft"},"Placeholder text. Replace with your IRB-approved consent language before use with students."),
    h("div",{class:"panel stack"},
      sec("What this study is about","Researchers at [institution] are studying whether a 4-week mindfulness and AI program relates to changes in AI anxiety, stress, and mindfulness among undergraduates."),
      sec("What you'll do","Complete three short questionnaires now (about 10 minutes) and again after Week 4. You'll use the app as part of your course either way."),
      sec("Your choice","Taking part in the research is voluntary. Saying no will not affect your grade or your access to the program. You can skip the study, or stop at any time."),
      sec("Privacy","Your answers are linked to a study ID, not your name. [Describe storage, access, retention, and de-identification as approved by the IRB.]"),
      sec("Questions","[Principal investigator name and contact] · [IRB contact and study number]")),
    h("div",{class:"stack-s"},h("label",{for:"c-pid"},"Study ID (from your instructor)"),pid),
    h("label",{class:"consent-row",for:"c-age"},age,h("span",{},"I am 18 years of age or older.")),
    h("label",{class:"consent-row",for:"c-agree"},agree,h("span",{},"I have read the information above and agree to take part in this research.")),
    h("div",{class:"row"},go,h("button",{class:"btn-ghost",onclick:()=>{R.consent=false;R.consentAt=new Date().toISOString();save();render();}},"Use the app without taking part"))));
}

/* ---- Qualtrics hand-off (consent + questionnaires live in Qualtrics) ---- */
function qualtricsPanel(phase,onDone){
  const R=S.research;
  const url=()=>qLink(phase,R.pid||"");
  const open=h("a",{class:"btn btn-primary qbtn",target:"_blank",rel:"noopener"},phase==="pre"?"Open consent form and questionnaires":"Open post-program questionnaires");
  const done=h("button",{class:"btn-sm",hidden:!R[phase+"Opened"]},"I've finished the questionnaires");
  const missing=h("div",{class:"draft",hidden:!!QUALTRICS[phase]},`Qualtrics ${phase==="pre"?"pre-program":"post-program"} survey link not added yet.`);
  const sync=()=>{const u=url();const ok=!!(u&&R.pid);open.setAttribute("aria-disabled",String(!ok));
    if(ok)open.href=u;else open.removeAttribute("href");};
  open.addEventListener("click",e=>{if(open.getAttribute("aria-disabled")==="true"){e.preventDefault();return;}
    R[phase+"Opened"]=new Date().toISOString();save();done.hidden=false;});
  done.onclick=()=>{R[phase+"Done"]=new Date().toISOString();save();onDone();};
  sync();
  return {el:h("div",{class:"stack-s"},missing,h("div",{class:"row"},open,done),
    h("p",{class:"toolnote"},"Opens in a new tab. When you reach the end of the survey, come back here and tap “I've finished.”")),sync};
}
/* ---- Landing page: Qualtrics pre-survey, then straight to the home page ---- */
function renderStudyStart(){
  const R=S.research;
  app.append(header());
  const enter=()=>{S.onboarded=true;view.skipResearch=true;view.tab="home";view.week=null;save();render();};
  const pid=h("input",{type:"text",id:"c-pid",placeholder:"e.g., AIM-0427",autocomplete:"off"}); pid.value=R.pid||"";
  const q=qualtricsPanel("pre",()=>{R.consent="qualtrics";enter();toast("Thank you. Welcome to AIM-YA.");});
  pid.addEventListener("input",()=>{R.pid=pid.value.trim();save();q.sync();});
  app.append(h("div",{class:"stack"},
    h("p",{class:"eyebrow"},"Welcome to AIM-YA · AI Mindfulness for Young Adults"),
    h("h1",{},"Research consent and pre-program survey"),
    h("div",{class:"panel stack"},
      h("div",{class:"stack-s"},h("label",{for:"c-pid"},"Study ID (from your instructor)"),pid),
      q.el),
    h("div",{class:"row"},h("button",{class:"btn-ghost",onclick:()=>{if(R.consent==null){R.consent=false;R.consentAt=new Date().toISOString();}enter();}},"Continue to the program without the survey")),
    TEST_POST?h("div",{class:"notice stack-s"},h("strong",{},"Testing only"),
      h("button",{class:"btn-sm",onclick:()=>{R.pid=R.pid||"TEST-01";R.consent="qualtrics";R.postDone=null;enter();
        setTimeout(()=>{const f=document.querySelector(".wk.final");if(f)f.scrollIntoView({behavior:"smooth",block:"center"});},50);}},"Skip to the final step (post-survey)")):null));
}

/* ---- Survey (one scale per page) ---- */
function renderSurvey(phase){
  const R=S.research,ans=R[phase],page=view.svPage||0,sc=SCALES[page];
  const store=ans[sc.key]||(ans[sc.key]={});
  app.append(header(),h("div",{class:"onb-dots","aria-label":`Questionnaire ${page+1} of 3`},SCALES.map((_,i)=>h("span",{class:i<=page?"on":""}))));
  const missing=()=>sc.items.filter(it=>store[it.id]==null).length;
  const status=h("span",{class:"counter"});
  const next=h("button",{class:"btn-primary"},page<2?"Next questionnaire":"Submit");
  const sync=()=>{const m=missing();status.textContent=m?`${m} of ${sc.items.length} left`:"All answered";next.disabled=m>0;};
  next.onclick=()=>{
    if(page<2){view.svPage=page+1;save();render();return;}
    R[phase+"Done"]=new Date().toISOString();view.svPage=0;save();
    if(phase==="pre"){S._onb=0;view.survey=null;render();toast("Thank you. Your responses are saved.");}
    else {view.survey="results";render();}
  };
  app.append(h("div",{class:"stack"},
    h("p",{class:"eyebrow"},(phase==="pre"?"Before the program":"After the program")+` · ${page+1} of 3`),
    h("h2",{},sc.name),
    sc.key==="aias"&&AIAS_PENDING?h("div",{class:"draft"},"Prototype: AIAS item wording still to be added from Wang & Wang (2019)."):null,
    h("p",{class:"muted"},sc.instructions),
    h("div",{class:"items"},sc.items.map((it,i)=>h("fieldset",{class:"item"},
      h("legend",{},h("span",{class:"item-n"},String(i+1)),it.text),
      h("div",{class:"opts"+(sc.compact?" compact":""),role:"radiogroup"},sc.options.map(([v,l])=>h("button",{type:"button",role:"radio","aria-checked":String(store[it.id]===v),
        "aria-label":l?`${v}, ${l}`:String(v),onclick:e=>{store[it.id]=v;save();
        e.currentTarget.parentNode.querySelectorAll("button").forEach(b=>b.setAttribute("aria-checked","false"));e.currentTarget.setAttribute("aria-checked","true");sync();}},
        h("strong",{},String(v)),!sc.compact&&l?h("small",{},l):null))),
      sc.compact?h("div",{class:"scale-ends"},h("span",{},sc.options[0][1]),h("span",{},sc.options[sc.options.length-1][1])):null))),
    h("div",{class:"row sticky-submit"},next,status,page>0?h("button",{class:"btn-ghost",onclick:()=>{view.svPage=page-1;render();}},"Back"):null)));
  sync();
}

/* ---- Results (shown after the post-survey only) ---- */
function renderResults(){
  const pre=scoreAll(S.research.pre)||{},post=scoreAll(S.research.post)||{};
  const fmt=(x,d=0)=>x==null?"–":x.toFixed(d);
  const delta=(a,b,lowerBetter,d=0)=>{if(a==null||b==null)return"–";const x=b-a;const s=(x>0?"+":"")+x.toFixed(d);
    const good=lowerBetter?x<0:x>0;return h("span",{class:x===0?"":good?"up-good":"up-neutral"},s);};
  const rows=[
    ["AI anxiety (mean, 1–7)",pre.aias,post.aias,true,2],
    ...DIMS.map(d=>["  "+d.term,pre.aiasDims?.[d.k],post.aiasDims?.[d.k],true,2]),
    ["Perceived stress (0–40)",pre.pss,post.pss,true,0],
    ["Mindfulness, CAMS-R (12–48)",pre.cams,post.cams,false,0]];
  app.append(header(),h("div",{class:"stack"},
    h("p",{class:"eyebrow"},"Your results"),
    h("h1",{},"Before and after"),
    h("p",{class:"muted"},"These are your own scores. Lower AI anxiety and stress, and higher mindfulness, are the directions the program aims for. A single score is a snapshot, not a diagnosis."),
    h("div",{class:"tablewrap"},h("table",{},h("thead",{},h("tr",{},h("th",{},"Measure"),h("th",{},"Before"),h("th",{},"After"),h("th",{},"Change"))),
      h("tbody",{},rows.map(([l,a,b,lb,d])=>h("tr",{class:l.startsWith("  ")?"sub":""},h("td",{},l.trim()),h("td",{},fmt(a,d)),h("td",{},fmt(b,d)),h("td",{},delta(a,b,lb,d))))))),
    post.pss!=null?h("p",{},`Your stress score after the program falls in the ${pssBand(post.pss)} range (0–13 low, 14–26 moderate, 27–40 high).`):null,
    h("div",{class:"quiet"},h("p",{},"Change can go either direction, and both are useful. Becoming more aware of how AI systems work can raise concern for a while. If stress feels high, your campus counseling center is available to you.")),
    h("div",{class:"row"},h("button",{class:"btn-primary",onclick:()=>{view.survey=null;render();}},"Back to my path"))));
}

function renderWelcome(){
  const step=S._onb||0, total=7;
  const R=S.research;
  if(R.consent==null) return USE_QUALTRICS?renderStudyStart():renderConsent();
  if(USE_QUALTRICS){S.onboarded=true;save();return renderHome();}   /* old multi-step intro is retired */
  if(R.consent&&!R.preDone) return renderSurvey("pre");
  if(step===1&&R.preDone){S._onb=2;return render();}
  const go=n=>{S._onb=n;save();render();};
  const navRow=(canNext,label="Continue")=>h("div",{class:"row",style:"margin-top:6px"},
    h("button",{class:"btn-primary",disabled:!canNext,onclick:()=>go(step+1)},label),
    step>0?h("button",{class:"btn-ghost",onclick:()=>go(step-1)},"Back"):null);
  const dots=h("div",{class:"onb-dots","aria-label":`Step ${step+1} of ${total}`},Array.from({length:total},(_,i)=>h("span",{class:i<=step?"on":""})));
  app.append(header(),dots);
  const box=h("div",{class:"stack"}); app.append(box);

  if(step===0) box.append(
    h("p",{class:"eyebrow"},"AI Mindfulness for Young Adults"),
    h("h1",{},"What does it mean to be a thoughtful, present human in an AI-saturated world?"),
    h("p",{class:"muted"},S.research.preDone?"Four weeks. One session a week, about 30–35 minutes. Next, a few minutes on why this program exists.":"Four weeks. One session a week, about 30–35 minutes. First, a few minutes on why this program exists, starting with you."),
    h("div",{class:"row"},h("button",{class:"btn-primary",onclick:()=>go(1)},"Begin"),
      h("button",{class:"btn-ghost",onclick:loadSample},"Preview with sample data")));

  if(step===1) box.append(
    h("p",{class:"eyebrow"},"Start with you"),
    h("h2",{},"Which of these sound like you?"),
    h("p",{class:"muted"},"Researchers describe AI anxiety as a cluster of related worries, not a single fear (Wang & Wang, 2019). Rate each one. There are no right answers, and this is a reflection, not a diagnosis."),
    selfCheck(S.check,keepScroll),
    navRow(DIMS.every(d=>S.check[d.k])));

  if(step===2){
    const tc=topConcerns();
    box.append(
      h("p",{class:"eyebrow"},"You're not alone"),
      h("h2",{},tc.length?`${tc.length===1?"One of these worries is":tc.length+" of these worries are"} strong for you right now. Many people your age share them.`:"Whatever you're feeling about AI, you're in good company."),
      h("p",{class:"muted"},"A 2026 Gallup survey of 1,572 Americans aged 14–29 found:"),
      h("div",{class:"stats"},STATS.map(s=>h("div",{class:"stat"},h("span",{class:"stat-n"},s.n),h("p",{},s.text)))),
      h("p",{class:"src"},"Source: Brenan (2026), Gallup / Walton Family Foundation, Voices of Gen Z."),
      h("div",{class:"quiet"},h("p",{},"Anxiety ran highest among people who never use AI (60%) and lowest among daily users (28%). That doesn't mean more AI is the fix. It suggests unfamiliarity and worry travel together, which is why each week includes a short, guided AI lab.")),
      navRow(true));
  }

  if(step===3) box.append(
    h("p",{class:"eyebrow"},"What the research suggests"),
    h("h2",{},"Stress may be the link between mindfulness and AI anxiety"),
    h("div",{class:"flow","aria-label":"Mindfulness is associated with lower perceived stress, which is associated with lower AI anxiety"},
      h("div",{class:"node"},h("strong",{},"Mindfulness"),h("span",{},"Noticing what's happening, as it happens")),
      h("div",{class:"arrow","aria-hidden":"true"},"→"),
      h("div",{class:"node"},h("strong",{},"Perceived stress"),h("span",{},"How overloaded life feels")),
      h("div",{class:"arrow","aria-hidden":"true"},"→"),
      h("div",{class:"node"},h("strong",{},"AI anxiety"),h("span",{},"The four worries you just rated"))),
    h("p",{},"In a study of undergraduates in yoga and meditation courses, students who were more mindful tended to report less AI anxiety, and lower stress helped explain why."),
    h("p",{class:"muted"},"This study shows an association, not proof that mindfulness causes lower anxiety. This program is part of the research testing whether practicing mindfulness can make a difference."),
    h("p",{class:"src"},"Study under review at the Journal of American College Health."),
    navRow(true));

  if(step===4){
    const hi=new Set(topConcerns().map(d=>d.k));
    box.append(
      h("p",{class:"eyebrow"},"How the four weeks respond"),
      h("h2",{},"Where each concern gets attention"),
      hi.size?h("p",{class:"muted"},S.research.preDone?"Concerns that scored high on your questionnaire are marked.":"Your highest-rated concerns are marked."):h("p",{class:"muted"},"Each worry has a place in the program."),
      h("div",{class:"stack-s"},DIMS.map(d=>h("div",{class:"mapcard"+(hi.has(d.k)?" hi":"")},
        h("div",{class:"row",style:"justify-content:space-between"},h("h3",{},d.label),h("span",{class:"chip"},d.term)),
        h("p",{},d.response),
        h("div",{class:"row"},d.weeks.map(w=>h("span",{class:"wk-tag"},"Week "+w)))))),
      h("div",{class:"mapcard stress"},h("div",{class:"row",style:"justify-content:space-between"},h("h3",{},"Stress, the common thread"),h("span",{class:"chip"},"Every week")),
        h("p",{},"Each session opens with a check-in and a 10–12 minute guided practice aimed at noticing stress in the body before it drives your reactions.")),
      navRow(true));
  }

  if(step===5) box.append(
    h("p",{class:"eyebrow"},"One more thing"),
    h("h2",{},"Skepticism welcome"),
    h("p",{},"You don't have to like AI to be here. This program is about understanding what you're skeptical of, not pressure to adopt. Skepticism is often the beginning of engagement."),
    h("div",{class:"quiet stack-s"},h("h3",{},"How each week works"),
      h("p",{},"Practice (5–10 min) · Reflection (10 min) · Lab with your own AI tool (15 min) · Check-in (3 min)"),
      h("p",{class:"muted"},"For the AI labs, you'll use your own preferred AI tool, such as ChatGPT, Claude, or Gemini. Pick one and stick with it all four weeks.")),
    h("p",{class:"toolnote"},"If stress ever feels like more than a program like this can help with, your campus counseling center is there for you. Over a third of college students used mental health services in the past year (ACHA, 2024)."),
    navRow(true));

  if(step===6) box.append(
    h("p",{class:"eyebrow"},"Before we begin"),
    h("h2",{},"Guiding questions"),
    h("p",{class:"muted"},"Take 5 minutes and write freely. You'll come back to these in Week 4."),
    ...GUIDING.map(([k,q])=>field("g-"+k,q,S.guiding[k],v=>S.guiding[k]=v,{minH:"80px"})),
    h("div",{class:"row"},h("button",{class:"btn-primary",onclick:()=>{S.onboarded=true;save();render();}},"Save and see my path"),
      h("button",{class:"btn-ghost",onclick:()=>go(5)},"Back")));
}

/* Intro video on the home page, right after the central question.
   When the file is uploaded, set src to its path, e.g. "AIM-YA-intro.mp4" (no leading slash). */
const INTRO_VIDEO={file:"intro.mp4",src:VCFG.introVideo||""};
function introVideo(){
  if(!INTRO_VIDEO.src) return h("div",{class:"video-slot"},
    h("span",{"aria-hidden":"true",style:"flex:none;line-height:0",html:'<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="15" height="14" rx="2"/><path d="M17 10l5-3v10l-5-3z"/></svg>'}),
    h("div",{class:"stack-s",style:"min-width:0"},h("strong",{},"Intro video coming soon"),
      h("code",{class:"slot-file"},INTRO_VIDEO.file)));
  const v=h("video",{controls:true,playsinline:true,preload:"metadata",class:"intro-video"});
  const status=h("p",{class:"toolnote"},"Loading video…");
  v.addEventListener("loadedmetadata",()=>{status.hidden=true;});
  const fail=()=>{status.hidden=false;status.textContent="The video didn't load. Reload the page to try again.";};
  v.addEventListener("error",()=>{if(v.src)fail();});
  loadAudio(INTRO_VIDEO.src).then(u=>{v.src=u;}).catch(fail);
  return h("div",{class:"stack-s"},v,status);
}
function renderHome(){
  const next=[1,2,3,4].find(n=>!weekDone(n));
  app.append(header(),
    h("div",{class:"stack"},
      h("p",{class:"question"},"What does it mean to be a thoughtful, present human in an AI-saturated world?"),
      introVideo(),
      h("h2",{class:"glance-h"},"Program at a Glance"),
      h("div",{class:"path"},firstStep(),[1,2,3,4].map(n=>{
        const w=WEEKS[n], current=n===next;
        const card=h("div",{class:"wk"+(weekDone(n)?" done":weekStarted(n)||current?" started":"")+(current?" current":""),role:"button",tabindex:"0",
            "aria-label":`Week ${n}: ${w.title}`,onclick:()=>openWeek(n),onkeydown:e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();openWeek(n);}}},
          h("span",{class:"dot"},weekDone(n)?"✓":String(n)),
          h("span",{class:"body"},h("span",{class:"eyebrow"},"Week "+n),h("h3",{style:"margin:2px 0 4px"},w.title),
            h("span",{class:"muted",style:"font-size:.92rem"},w.tag),
            h("span",{class:"toolnote",style:"display:block;margin-top:6px"},"Download the PDF worksheet to have during the module activities."),
            h("span",{class:"beats","aria-hidden":"true"},BEATS.map(([b])=>h("span",{class:beatDone(n,b)?"on":""}))),
            h("span",{class:"row",style:"margin-top:12px"},
              current?h("button",{class:"btn-primary",onclick:e=>{e.stopPropagation();openWeek(n);}},"Begin session"):null,
              worksheetBtn(n))));
        return card;
      }), finalStep())
    ));
}
/* Final step on the path: post-program questionnaires (Qualtrics) */
/* TESTING ONLY: true shows the post-survey button before Week 4 is finished. Set to false before students use the app. */
const TEST_POST=false;
/* First card on the home page: the research pre-survey, shown until it's done (also for anyone who skipped it at first). */
function firstStep(){
  if(!USE_QUALTRICS) return null;
  const R=S.research, done=!!R.preDone;
  let body;
  if(done) body=h("p",{class:"muted",style:"font-size:.92rem"},"Completed. Thank you for taking part in the study.");
  else{
    const pid=h("input",{type:"text",id:"h-pid",placeholder:"e.g., AIM-0427",autocomplete:"off"}); pid.value=R.pid||"";
    const q=qualtricsPanel("pre",()=>{R.consent="qualtrics";save();render();toast("Thank you for taking part.");});
    pid.addEventListener("input",()=>{R.pid=pid.value.trim();save();q.sync();});
    body=h("div",{class:"stack-s"},
      h("p",{class:"muted",style:"font-size:.92rem"},"Research participants: start here. The consent form and questionnaires are in Qualtrics, about 10 minutes."),
      h("label",{for:"h-pid",style:"font-size:.92rem"},"Study ID (from your instructor)"),pid,q.el);
  }
  return h("div",{class:"wk final"+(done?" done":" started"),role:"group","aria-label":"Before Week 1: pre-program survey"},
    h("span",{class:"dot"},done?"✓":"★"),
    h("span",{class:"body"},h("span",{class:"eyebrow"},"Before Week 1"),h("h3",{style:"margin:2px 0 6px"},"Research consent and pre-program survey"),body));
}
function finalStep(){
  const R=S.research, part=!!R.consent, ready=TEST_POST||weekDone(4), done=!!R.postDone;
  let body;
  if(!USE_QUALTRICS) body=h("p",{class:"muted",style:"font-size:.92rem"},"Questionnaires appear here after Week 4.");
  else if(!part) body=h("p",{class:"muted",style:"font-size:.92rem"},"For research participants only. To take part, complete the pre-program survey at the top first.");
  else if(done) body=h("p",{class:"muted",style:"font-size:.92rem"},"Completed. Thank you for taking part in the study.");
  else if(!ready) body=h("p",{class:"muted",style:"font-size:.92rem"},"Opens after you finish Week 4. The same three questionnaires as the start, about 10 minutes, in Qualtrics.");
  else body=h("div",{class:"stack-s"},h("p",{class:"muted",style:"font-size:.92rem"},"The same three questionnaires as the start, about 10 minutes, in Qualtrics."),
    qualtricsPanel("post",()=>{view.complete=true;render();}).el);
  return h("div",{class:"wk final"+(done?" done":ready&&part?" started":""),role:"group","aria-label":"Final step: post-program questionnaires"},
    h("span",{class:"dot"},done?"✓":"★"),
    h("span",{class:"body"},h("span",{class:"eyebrow"},"Final step"),h("h3",{style:"margin:2px 0 6px"},"Post-program questionnaires"),body));
}
/* Open a week at its first unfinished step (Practice if none are done yet). */
function openWeek(n){view.week=n;view.beat=BEATS.find(([b])=>!beatDone(n,b))?.[0]||"practice";render();}

function moodChart(){
  const pts=[1,4].map(n=>({n,a:W(n).ci?.anxiety,c:W(n).ci?.curiosity}));
  if(!pts.some(p=>p.a!=null||p.c!=null)) return null;
  const row=(label,key,col)=>h("div",{class:"bars"},h("span",{class:"bars-l"},label),
    ...pts.map(p=>h("div",{class:"bar-row"},h("span",{class:"muted"},"Week "+p.n),
      h("div",{class:"bar-track"},h("i",{style:`width:${(p[key]??0)*10}%;background:${col}`})),h("span",{class:"bar-v"},p[key]??"–"))));
  return h("div",{class:"panel stack-s"},h("h3",{},"Week 1 and Week 4 check-ins"),
    row("Anxiety about AI (0–10)","a","var(--saffron)"),row("Curiosity about AI (0–10)","c","var(--accent)"));
}

function renderWeek(n){
  const w=WEEKS[n];
  app.append(
    h("h1",{class:"beat-h",style:"margin-top:12px"},`Week ${n} – ${BEATS.find(([b])=>b===view.beat)[1]}`),
    h("p",{class:"step-of"},`Step ${BEATS.findIndex(([b])=>b===view.beat)+1} of 4`));
  const body=h("div",{class:"stack",style:"margin-top:18px"}); app.append(body);
  /* Video-only steps: students do the written work on the weekly PDF worksheet.
     The earlier in-app activities (practiceBeat, reflectionBeat, labBeat, checkinBeat) are kept below, unused. */
  const cfg=({practice:PRACTICE_VIDEO,reflection:REFLECTION_VIDEO,lab:LAB_VIDEO,checkin:CHECKIN_VIDEO})[view.beat][n];
  const st=W(n);
  body.append(stepVideo(cfg,view.beat==="practice"?()=>{st.practiced=true;save();}:null), nextBtn(n));
}
function nextBtn(n,label="Continue"){
  const i=BEATS.findIndex(([b])=>b===view.beat);
  const nb=BEATS[i+1];
  const pb=BEATS[i-1];
  return h("div",{class:"step-nav"},
    h("button",{class:"btn-back",onclick:()=>{if(pb){view.beat=pb[0];}else{view.week=null;}render();}},"← Back"),
    h("button",{class:"btn-primary btn-next",onclick:()=>{
    const w=W(n); w.done=w.done||{}; w.done[view.beat]=true;
    save(); if(nb){view.beat=nb[0];render();} else {view.week=null;render();toast(`Week ${n} complete`);}
  }},nb?"Next →":"Finish week "+n));
}

/* ---------------- Step videos ----------------
   Each slot shows a "Video coming soon" placeholder until `src` is set to an uploaded file,
   e.g. "video/week1-practice.mp4". */
/* ---------------- Weekly PDF worksheets ----------------
   Set `src` to the PDF's path (e.g. "worksheets/week1-worksheet.pdf"). Empty `src` shows "coming soon". */
const WORKSHEET=Object.fromEntries([1,2,3,4].map(n=>[n,{file:`week${n}-worksheet.pdf`,src:(VCFG.worksheets||{})[n]||""}]));
function worksheetBtn(n){
  const cfg=WORKSHEET[n];
  if(!cfg.src) return h("button",{class:"btn-ghost",style:"white-space:nowrap",disabled:true,title:cfg.file,onclick:e=>e.stopPropagation()},"Worksheet coming soon");
  const b=h("button",{class:"btn-ghost",style:"white-space:nowrap"},"Worksheet (PDF)");
  /* Inside claude.ai the page can't download directly; it asks the viewer through the `downloads` capability.
     Elsewhere (e.g. a normal web host) it falls back to a plain download link. */
  b.onclick=async e=>{e.stopPropagation();if(b.disabled)return;b.disabled=true;b.textContent="Preparing…";
    const reset=()=>{b.disabled=false;b.textContent="Worksheet (PDF)";};
    const name=`${VCFG.name||"AIM-YA"} Week ${n} worksheet.pdf`;
    try{
      const r=await fetch(asset(cfg.src),{cache:"no-store"}); if(!r.ok) throw new Error(r.status);
      const blob=await r.blob();
      const dl=(window.claude&&claude.use)?await claude.use("downloads").catch(()=>null):null;
      if(dl){
        try{await dl.save({filename:name,data:blob});toast("Worksheet saved.");}
        catch(err){ if(err&&err.code==="rate_limited") toast("A save is already open. Finish that one first.");
          else if(err&&err.code!=="declined") toast("Downloads aren't available here."); }
      }else{
        const u=URL.createObjectURL(new Blob([blob],{type:"application/pdf"}));
        const a=h("a",{href:u,download:name});document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),60000);
      }
    }catch(err){toast("The worksheet didn't load. Try again.");}
    reset();};
  return b;
}
const PRACTICE_VIDEO_ONLY=[1];   /* weeks whose Practice page shows just the video, then Back/Next */
const PRACTICE_VIDEO=Object.fromEntries([1,2,3,4].map(n=>[n,{file:`week${n}-practice.mp4`,src:((VCFG.videos||{})[n]||{}).practice||""}]));
const LAB_VIDEO=Object.fromEntries([1,2,3,4].map(n=>[n,{file:`week${n}-lab.mp4`,src:((VCFG.videos||{})[n]||{}).lab||""}]));
const REFLECTION_VIDEO=Object.fromEntries([1,2,3,4].map(n=>[n,{file:`week${n}-reflection.mp4`,src:((VCFG.videos||{})[n]||{}).reflection||""}]));
const CHECKIN_VIDEO=Object.fromEntries([1,2,3,4].map(n=>[n,{file:`week${n}-checkin.mp4`,src:((VCFG.videos||{})[n]||{}).checkin||""}]));
function stepVideo(cfg,onEnd){
  /* Google Drive-hosted video: Drive's own player, plus a link that opens it in a new tab
     (the file must be shared "Anyone with the link"). */
  /* Google Drive-hosted video: Claude blocks Drive's embedded player, so show a play card that opens
     the video in a new tab (the file must be shared "Anyone with the link"). */
  if(cfg.drive) return h("a",{class:"video-slot",href:`https://drive.google.com/file/d/${cfg.drive}/view`,target:"_blank",rel:"noopener",
      style:"text-decoration:none;flex-direction:column;gap:10px;border-style:solid;background:var(--surface)","aria-label":"Play video (opens in a new tab)"},
    h("span",{"aria-hidden":"true",style:"line-height:0",html:'<svg viewBox="0 0 64 64" width="64" height="64"><circle cx="32" cy="32" r="30" fill="var(--accent)"/><path d="M26 20l18 12-18 12z" fill="var(--accent-ink)"/></svg>'}),
    h("strong",{},"Play video"),h("span",{class:"toolnote"},"Opens in a new tab"));
  if(!cfg.src) return h("div",{class:"video-slot"},
    h("span",{"aria-hidden":"true",style:"flex:none;line-height:0",html:'<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="15" height="14" rx="2"/><path d="M17 10l5-3v10l-5-3z"/></svg>'}),
    h("div",{class:"stack-s",style:"min-width:0"},h("strong",{},"Video coming soon"),h("code",{class:"slot-file"},cfg.file)));
  const v=h("video",{controls:true,playsinline:true,preload:"metadata",class:"intro-video"});
  const status=h("p",{class:"toolnote"},"Loading video…");
  const retry=h("button",{class:"btn-sm",hidden:true,onclick:()=>{retry.hidden=true;status.textContent="Loading video…";start();}},"Try again");
  const fail=()=>{status.hidden=false;status.textContent="The video didn't load.";retry.hidden=false;};
  v.addEventListener("loadedmetadata",()=>{status.hidden=true;});
  v.addEventListener("error",()=>{if(v.src)fail();});
  if(onEnd) v.addEventListener("ended",onEnd);
  const start=()=>loadAudio(cfg.src).then(u=>{v.src=u;}).catch(fail);
  start();
  return h("div",{class:"stack-s"},v,h("div",{class:"row"},status,retry));
}

/* ---------------- Small input helpers ---------------- */
function chipSelect(options,selected,onChange,max){
  const wrap=h("div",{class:"chips",role:"group"});
  const draw=()=>wrap.replaceChildren(...options.map(o=>h("button",{type:"button",class:"chip-btn","aria-pressed":String(selected.includes(o)),onclick:()=>{
    const i=selected.indexOf(o);
    if(i>=0) selected.splice(i,1); else { if(max&&selected.length>=max){toast(`Choose up to ${max}.`);return;} selected.push(o); }
    save(); draw(); onChange&&onChange();}},o)));
  draw(); return wrap;
}
function scale010(label,store,key,lo,hi,after){
  const sc=h("div",{class:"scale11",role:"group","aria-label":label},Array.from({length:11},(_,v)=>h("button",{"aria-pressed":String(store[key]===v),onclick:e=>{
    store[key]=v;save();e.currentTarget.parentNode.querySelectorAll("button").forEach((b,i)=>b.setAttribute("aria-pressed",String(i===v)));after&&after();}},String(v))));
  return h("div",{class:"stack-s"},h("label",{},label),sc,h("div",{class:"scale-ends"},h("span",{},"0 · "+lo),h("span",{},hi+" · 10")));
}
function promptBox(label,build){
  const pre=h("div",{class:"prompt"});const upd=()=>pre.textContent=build();upd();
  return {el:h("div",{class:"stack-s"},h("div",{class:"row",style:"justify-content:space-between"},h("label",{},label),h("button",{class:"btn-sm",onclick:()=>copy(build())},"Copy prompt")),pre),upd};
}
function stepIntro(title,desc){return h("div",{class:"stack-s"},h("h2",{},title),h("p",{class:"muted"},desc));}

/* ---------------- Step 1: Practice ---------------- */
let T=null;
function stopTimer(){if(T){clearInterval(T.iv);T=null;}}
function practiceBeat(n,body){
  const p=WEEKS[n].practice; const st=W(n);
  const phases=p.phases;
  const total=phases.reduce((s,x)=>s+x.min*60,0);
  let elapsed=0, running=false;
  body.append(stepVideo(PRACTICE_VIDEO[n],()=>{st.practiced=true;save();toast("Practice complete");}));
  if(PRACTICE_VIDEO_ONLY.includes(n)){ body.append(nextBtn(n)); return; }   /* video page only: nothing between the video and Back/Next */
  body.append(stepIntro(p.name,p.desc),
    h("p",{class:"toolnote"},"Prefer to practice with on-screen cues? Use the guide below."));
  const R=110,C=2*Math.PI*R;
  const ns="http://www.w3.org/2000/svg",svg=document.createElementNS(ns,"svg");svg.setAttribute("viewBox","0 0 240 240");
  const c1=document.createElementNS(ns,"circle"),c2=document.createElementNS(ns,"circle");
  [c1,c2].forEach(c=>{c.setAttribute("cx",120);c.setAttribute("cy",120);c.setAttribute("r",R);c.setAttribute("fill","none");c.setAttribute("stroke-width",6);svg.append(c);});
  c1.setAttribute("stroke","var(--surface-2)");c2.setAttribute("stroke","var(--accent)");c2.setAttribute("stroke-linecap","round");
  c2.setAttribute("stroke-dasharray",C);c2.setAttribute("stroke-dashoffset",C);
  const pacer=h("div",{class:"pacer"}),clock=h("div",{class:"clock"}),plabel=h("div",{class:"phase-label"});
  const ring=h("div",{class:"ring"},svg,h("div",{class:"center"},pacer),plabel,clock);
  const cue=h("p",{class:"cue"},"Find a comfortable position. Press start when you're ready.");
  const startBtn=h("button",{class:"btn-primary"},"Start");
  const resetBtn=h("button",{class:"btn-ghost"},"Restart");
  const bell=h("input",{type:"checkbox",id:"bell"}); bell.checked=true;
  const demo=h("input",{type:"checkbox",id:"demo"});
  const list=h("div",{class:"phaselist"},phases.map(ph=>h("div",{},h("span",{},ph.name),h("span",{class:"muted"},ph.min+" min"))));
  body.append(h("details",{class:"cues-panel"},h("summary",{},"On-screen guide"),
    h("div",{class:"stack",style:"margin-top:12px"},
      h("div",{class:"panel timer"},ring,cue,h("div",{class:"row",style:"justify-content:center"},startBtn,resetBtn),
        h("div",{class:"row",style:"justify-content:center"},h("label",{class:"switch",for:"bell"},bell,"Soft bell between phases"),h("label",{class:"switch",for:"demo"},demo,"Preview at 20× speed"))),
      list)));
  let audio; function ding(){ if(!bell.checked) return; try{audio=audio||new (window.AudioContext||window.webkitAudioContext)();
    const o=audio.createOscillator(),g=audio.createGain();o.frequency.value=528;o.type="sine";g.gain.setValueAtTime(.0001,audio.currentTime);
    g.gain.exponentialRampToValueAtTime(.25,audio.currentTime+.02);g.gain.exponentialRampToValueAtTime(.0001,audio.currentTime+2.8);
    o.connect(g).connect(audio.destination);o.start();o.stop(audio.currentTime+3);}catch(e){} }
  let lastPhase=-1,lastCue="";
  const fmt=s=>`${Math.floor(s/60)}:${String(Math.floor(s%60)).padStart(2,"0")}`;
  function paint(){
    let acc=0,idx=0; for(;idx<phases.length;idx++){ if(elapsed<acc+phases[idx].min*60) break; acc+=phases[idx].min*60; }
    if(idx>=phases.length){finish();return;}
    const ph=phases[idx],into=elapsed-acc,len=ph.min*60;
    if(idx!==lastPhase){ if(lastPhase>=0) ding(); lastPhase=idx; [...list.children].forEach((d,i)=>d.classList.toggle("now",i===idx)); }
    plabel.textContent=ph.name; clock.textContent=fmt(total-elapsed);
    c2.setAttribute("stroke-dashoffset",C*(1-elapsed/total));
    const ci=Math.min(ph.cues.length-1,Math.floor(into/(len/ph.cues.length)));
    const txt=ph.cues[ci]; if(txt!==lastCue){cue.textContent=txt;lastCue=txt;}
    pacer.style.transform="scale(.7)";
  }
  function finish(){stopTimer();running=false;st.practiced=true;save();ding();
    c2.setAttribute("stroke-dashoffset",0);clock.textContent="0:00";plabel.textContent="Complete";cue.textContent="Take a moment before moving on.";
    startBtn.textContent="Completed";startBtn.disabled=true;}
  startBtn.onclick=()=>{
    if(running){stopTimer();running=false;startBtn.textContent="Resume";return;}
    running=true;startBtn.textContent="Pause";ding();
    let last=performance.now();
    T={iv:setInterval(()=>{const now=performance.now();elapsed+=((now-last)/1000)*(demo.checked?20:1);last=now;paint();},250)};
    paint();
  };
  resetBtn.onclick=()=>{stopTimer();render();};
  clock.textContent=fmt(total); plabel.textContent=phases[0].name;
  if(st.practiced) body.append(h("p",{class:"counter"},"✓ You completed this practice."));
  body.append(nextBtn(n));
}

/* ---------------- Step 2: Reflection ---------------- */
function reflectionBeat(n,body){
  const R=WEEKS[n].reflection, st=W(n).refl||(W(n).refl={});
  body.append(stepVideo(REFLECTION_VIDEO[n]),stepIntro(R.name,R.desc));
  if(n===1){
    st.map=st.map||{};
    MAP_PLACES.forEach(([k,label])=>{const m=st.map[k]||(st.map[k]={how:"",feel:[]});
      body.append(h("div",{class:"panel stack-s"},h("h3",{},label),
        field("map-"+k,"Where does AI show up here?",m.how,v=>m.how=v,{input:true,placeholder:"e.g., summarizing readings, autocomplete, recommendations"}),
        h("p",{class:"g-sub"},"What feelings does it bring up?"),chipSelect(FEELINGS,m.feel)));});
    const o=st.map.other||(st.map.other={place:"",how:"",feel:[]});
    body.append(h("div",{class:"panel stack-s"},h("h3",{},"Somewhere else (optional)"),
      field("map-op","Where?",o.place,v=>o.place=v,{input:true,placeholder:"e.g., relationships, health, creative work"}),
      field("map-oh","How does AI show up there?",o.how,v=>o.how=v,{input:true}),
      h("p",{class:"g-sub"},"What feelings does it bring up?"),chipSelect(FEELINGS,o.feel)));
  }
  if(n===2){
    body.append(field("tool2","Pick one AI tool you use",st.tool,v=>st.tool=v,{input:true,placeholder:"e.g., ChatGPT, Gemini, a homework app, your phone's assistant"}),
      h("p",{class:"toolnote"},"It's fine to guess first and look things up after. Write “not sure” where you don't know."),
      h("div",{class:"panel stack"},
        field("who-build","Who builds it?",st.build,v=>st.build=v,{input:true}),
        field("who-train","Who trained it, and on whose data or work?",st.train,v=>st.train=v,{input:true}),
        field("who-profit","Who profits from it, and how?",st.profit,v=>st.profit=v,{input:true}),
        field("who-govern","Who governs it: laws, company policies, your school's rules?",st.govern,v=>st.govern=v,{input:true})),
      field("hidden","Where are human choices hidden in this tool?",st.hidden,v=>st.hidden=v,{minH:"110px",placeholder:"e.g., what data was included or left out, what it's allowed to say, how answers are ranked"}));
  }
  if(n===3){
    st.levels=st.levels||{};
    body.append(h("div",{class:"panel stack-s"},h("h3",{},"The AI-use ladder"),
      h("ul",{class:"levels",style:"list-style:none;padding-left:0"},AI_LEVELS.map(([v,name,d])=>h("li",{},h("strong",{},v+" · "+name+". "),d))),
      h("p",{class:"src"},"Informed by the AI Assessment Scale (Perkins, Furze, Roe, & MacVaugh, 2024).")));
    body.append(h("div",{class:"panel stack"},h("h3",{},"My charter"),h("p",{class:"muted"},"For each task, choose the highest level you'd want to use and still be learning. Follow your instructor's AI policy: your charter can be stricter, not looser."),
      ...CHARTER_TASKS.map(([k,label])=>h("div",{class:"stack-s"},h("label",{},label),
        h("div",{class:"seg seg-wrap",role:"group","aria-label":label},AI_LEVELS.map(([v,name])=>h("button",{"aria-pressed":String(st.levels[k]===v),title:name,onclick:e=>{
          st.levels[k]=v;save();e.currentTarget.parentNode.querySelectorAll("button").forEach((b,i)=>b.setAttribute("aria-pressed",String(AI_LEVELS[i][0]===v)));}},v+" · "+name)))))));
    body.append(field("helps","AI helps my learning when…",st.helps,v=>st.helps=v,{minH:"80px"}),
      field("replaces","AI replaces my learning when…",st.replaces,v=>st.replaces=v,{minH:"80px"}),
      h("div",{class:"quiet stack-s"},h("h3",{},"Integrity and the fear of false accusation"),
        h("p",{class:"muted"},"Many students worry about being accused of using AI when they didn't, or aren't sure where the line is. Your instructor may discuss this in class.")),
      field("integrity","What worries you about academic integrity and AI, and what would help?",st.integrity,v=>st.integrity=v,{minH:"90px"}));
  }
  if(n===4){
    st.values=st.values||[];
    body.append(h("div",{class:"panel stack-s"},h("h3",{},"My values"),h("p",{class:"muted"},"Choose up to five that matter most to you."),chipSelect(VALUES,st.values,null,5),
      field("val-other","Another value not listed (optional)",st.valOther,v=>st.valOther=v,{input:true})),
      field("strengths","My human strengths: what do you do well that you'd want to keep doing yourself?",st.strengths,v=>st.strengths=v,{minH:"90px"}),
      h("div",{class:"evidence stack-s"},h("p",{class:"eyebrow"},"What the evidence says about AI and jobs"),
        h("p",{},h("strong",{},"Early-career shifts are real. "),"Since generative AI spread, employment for 22- to 25-year-olds in the most AI-exposed jobs fell about 13% relative to other workers, while older workers in the same jobs held steady (Brynjolfsson, Chandar, & Chen, 2025)."),
        h("p",{},h("strong",{},"The overall picture is mixed. "),"Across the whole U.S. job market, researchers at the Yale Budget Lab found no clear disruption since ChatGPT's release; many shifts in the kinds of jobs people hold began before it (Yale Budget Lab, 2025)."),
        h("p",{class:"src"},"Both findings are early and will keep changing as researchers collect more data.")),
      field("nextstep","One next step that's yours to control",st.next,v=>st.next=v,{input:true,placeholder:"e.g., talk to someone in a field I'm curious about; take one course that builds a human skill"}));
  }
  body.append(nextBtn(n));
}

/* ---------------- Step 3: Lab ---------------- */
function toolReminder(){
  return h("div",{class:"tool-req stack-s"},
    h("p",{class:"eyebrow"},"Before you start"),
    h("p",{},h("strong",{},"Use your own preferred AI tool for this lab."),
      " This app doesn't include an AI. Open the tool you normally use in another tab or app, and use the same one for all four weeks."),
    h("p",{class:"muted",style:"font-size:.9rem"},"Free versions of most AI tools work fine. Whatever tool you choose, leave out names and other identifying details when you paste in your writing."));
}
function labBeat(n,body){
  const L=WEEKS[n].lab, st=W(n).lab||(W(n).lab={});
  body.append(stepVideo(LAB_VIDEO[n]),stepIntro(L.name,L.desc),toolReminder(),h("ol",{class:"labsteps"},L.steps.map(s=>h("li",{},s))));
  if(n===1){
    const p1=promptBox("Prompt 1 · watch it predict",()=>`I'll give you the start of a sentence. List the 5 words most likely to come next, with a rough probability for each, and explain in two sentences how you choose.\n\nSentence: "When I think about AI, I feel..."`);
    body.append(p1.el,field("pred","What did it predict? Did anything surprise you?",st.pred,v=>st.pred=v,{minH:"80px"}),
      h("div",{class:"quiet stack-s"},h("h3",{},"Ideas for a question it will get wrong"),
        h("ul",{class:"g-list"},["Something only you know, like what you ate for breakfast today.","An exact quote with its page number from a book you're reading.","A very recent local event, or the score of last night's game.","A precise count, like how many words are in a long paragraph you paste in."].map(t=>h("li",{},t)))),
      field("wrong","What did you ask, and what did it get wrong?",st.wrong,v=>st.wrong=v,{minH:"80px"}),
      field("response","When you pointed out the mistake, how did it respond?",st.response,v=>st.response=v,{minH:"70px"}));
  }
  if(n===2){
    const pf=promptBox("Prompt 1 · facts and sources",()=>`Explain ${st.topic||"[your topic]"} to a college student. Include three specific facts, and give a source for each one.`);
    const pb=promptBox("Prompt 2 · bias check",()=>`Describe a typical expert in ${st.topic||"[your topic]"}: who they are, what they look like, and their background.`);
    body.append(field("topic","A topic you know well",st.topic,v=>st.topic=v,{input:true,after:()=>{pf.upd();pb.upd();},placeholder:"e.g., competitive swimming, Orlando, organic chemistry, Minecraft"}),
      h("div",{class:"grid2"},field("toolA","Tool A",st.toolA,v=>st.toolA=v,{input:true}),field("toolB","Tool B",st.toolB,v=>st.toolB=v,{input:true})),
      pf.el,h("p",{class:"toolnote"},"Check every fact and open every source. Some sources may not exist."),
      h("div",{class:"grid2"},field("errA","Tool A: errors or made-up facts",st.errA,v=>st.errA=v,{minH:"80px"}),field("errB","Tool B: errors or made-up facts",st.errB,v=>st.errB=v,{minH:"80px"})),
      pb.el,field("bias","What assumptions or bias did you notice? Did the two tools differ?",st.bias,v=>st.bias=v,{minH:"80px"}));
  }
  if(n===3){
    const ph=promptBox("Prompt · AI as hint-giver",()=>`I'm working on this problem:\n${st.problem||"[your problem]"}\n\nHere is my attempt so far:\n${st.attempt||"[your attempt]"}\n\nDon't give me the answer. Give me one hint or ask me one guiding question at a time, and wait for my reply before giving the next one.`);
    body.append(field("problem","The problem",st.problem,v=>st.problem=v,{minH:"70px",after:ph.upd}),
      field("attempt","My attempt, before using AI",st.attempt,v=>st.attempt=v,{minH:"110px",after:ph.upd}),
      ph.el,
      field("hints","What did the hints help you see?",st.hints,v=>st.hints=v,{minH:"80px"}),
      field("compare","How did your own attempt compare with where the hints led?",st.compare,v=>st.compare=v,{minH:"80px"}));
  }
  if(n===4){
    const r=W(4).refl||{}; const vals=[...(r.values||[]),r.valOther].filter(Boolean).join(", ");
    const pc=promptBox("Prompt · career paths (built from your reflection)",()=>`I'm a college student. My top values are: ${vals||"[your values]"}. My strengths are: ${r.strengths||"[your strengths]"}.\n\nSuggest two career paths that fit me. For each one, explain how AI might change the work over the next ten years, and what parts are likely to stay human.`);
    body.append(pc.el,
      field("suggested","What did it suggest?",st.suggested,v=>st.suggested=v,{minH:"80px"}),
      field("missed","What did it miss about you?",st.missed,v=>st.missed=v,{minH:"90px"}));
  }
  body.append(nextBtn(n));
}

/* ---------------- Step 4: Check-in ---------------- */
function mapSummary(){
  const m=(W(1).refl||{}).map||{};
  const rows=[...MAP_PLACES.map(([k,l])=>[l,m[k]]),[m.other?.place||"Somewhere else",m.other]].filter(([,v])=>v&&(v.how||(v.feel||[]).length));
  if(!rows.length) return h("p",{class:"muted"},"You didn't fill in a Week 1 map.");
  return h("div",{class:"stack-s"},rows.map(([l,v])=>h("div",{class:"quiet",style:"padding:10px 12px"},h("strong",{},l),
    v.how?h("p",{},v.how):null,(v.feel||[]).length?h("p",{class:"muted"},"Felt: "+v.feel.join(", ")):null)));
}
function checkinBeat(n,body){
  const C=WEEKS[n].checkin, st=W(n).ci||(W(n).ci={});
  body.append(stepVideo(CHECKIN_VIDEO[n]),stepIntro(C.name,C.desc));
  if(n===1){
    body.append(scale010("How anxious do you feel about AI right now?",st,"anxiety","Not at all","Extremely"),
      scale010("How curious do you feel about AI right now?",st,"curiosity","Not at all","Extremely"),
      field("story","What story is my mind telling about AI?",st.story,v=>st.story=v,{minH:"100px"}));
  }
  if(n===2){
    body.append(scale010("How much did you trust the AI's output before checking it?",st,"before","Not at all","Completely"),
      scale010("How much do you trust it now, after checking?",st,"after","Not at all","Completely"),
      field("trustwhy","What changed your trust, or didn't?",st.trustwhy,v=>st.trustwhy=v,{minH:"90px"}));
  }
  if(n===3){
    body.append(h("div",{class:"stack-s"},h("label",{},"Did I think first?"),
      h("div",{class:"seg",role:"group","aria-label":"Did I think first?"},["Yes","Partly","Not this time"].map(o=>h("button",{"aria-pressed":String(st.first===o),onclick:e=>{
        st.first=o;save();e.currentTarget.parentNode.querySelectorAll("button").forEach(b=>b.setAttribute("aria-pressed",String(b.textContent===o)));}},o)))),
      field("plan","Plan: what did I set out to do on my own?",st.plan,v=>st.plan=v,{minH:"70px"}),
      field("monitor","Monitor: when did I feel the pull to hand it to AI?",st.monitor,v=>st.monitor=v,{minH:"70px"}),
      field("evaluate","Evaluate: what will I do differently next time?",st.evaluate,v=>st.evaluate=v,{minH:"70px"}));
  }
  if(n===4){
    const w1=W(1).ci||{};
    body.append(h("div",{class:"panel stack-s"},h("h3",{},"Your Week 1 map"),mapSummary()),
      scale010("How anxious do you feel about AI right now?",st,"anxiety","Not at all","Extremely"),
      scale010("How curious do you feel about AI right now?",st,"curiosity","Not at all","Extremely"),
      h("p",{class:"toolnote"},w1.anxiety!=null||w1.curiosity!=null?`In Week 1 you rated anxiety ${w1.anxiety??"–"} and curiosity ${w1.curiosity??"–"}.`:"You didn't rate these in Week 1."),
      field("changed","What changed since Week 1?",st.changed,v=>st.changed=v,{minH:"90px"}),
      field("keep","What will you keep practicing?",st.keep,v=>st.keep=v,{input:true}));
  }
  body.append(nextBtn(n));
}

/* Journal */
function journalEntries(){
  const out=[], j=(...xs)=>xs.filter(([,v])=>v&&String(v).trim()).map(([l,v])=>l+": "+v).join("\n");
  const add=(n,step,title,text)=>{if(text&&text.trim()) out.push([`Week ${n} · ${step}`,title,text]);};
  const r1=W(1).refl||{}, m=r1.map||{};
  add(1,"Reflection","My AI map",[...MAP_PLACES.map(([k,l])=>[l,m[k]]),[m.other?.place||"Somewhere else",m.other]]
    .filter(([,v])=>v&&(v.how||(v.feel||[]).length)).map(([l,v])=>`${l}: ${v.how||""}${(v.feel||[]).length?" (felt "+v.feel.join(", ")+")":""}`).join("\n"));
  const l1=W(1).lab||{}; add(1,"Lab","Inside the prediction machine",j(["Predictions",l1.pred],["What it got wrong",l1.wrong],["How it responded",l1.response]));
  const c1=W(1).ci||{}; add(1,"Check-in","What story is my mind telling about AI?",j(["Anxiety",c1.anxiety],["Curiosity",c1.curiosity],["Story",c1.story]));
  const r2=W(2).refl||{}; add(2,"Reflection","Who's behind the tool?"+(r2.tool?` (${r2.tool})`:""),j(["Builds",r2.build],["Trained",r2.train],["Profits",r2.profit],["Governs",r2.govern],["Hidden choices",r2.hidden]));
  const l2=W(2).lab||{}; add(2,"Lab","Two tools, one topic"+(l2.topic?` (${l2.topic})`:""),j([l2.toolA||"Tool A",l2.errA],[l2.toolB||"Tool B",l2.errB],["Bias",l2.bias]));
  const c2=W(2).ci||{}; add(2,"Check-in","Trust, before and after",j(["Before",c2.before],["After",c2.after],["Why",c2.trustwhy]));
  const r3=W(3).refl||{}; const lv=r3.levels||{};
  add(3,"Reflection","My AI-use charter",j(...CHARTER_TASKS.map(([k,l])=>[l,lv[k]!=null?"Level "+lv[k]+" · "+levelName(lv[k]):""]),["AI helps my learning when",r3.helps],["AI replaces my learning when",r3.replaces],["Integrity",r3.integrity]));
  const l3=W(3).lab||{}; add(3,"Lab","Think first, then ask for hints",j(["Problem",l3.problem],["My attempt",l3.attempt],["What the hints showed",l3.hints],["Comparison",l3.compare]));
  const c3=W(3).ci||{}; add(3,"Check-in","Did I think first?",j(["Thought first",c3.first],["Plan",c3.plan],["Monitor",c3.monitor],["Evaluate",c3.evaluate]));
  const r4=W(4).refl||{}; add(4,"Reflection","Values, strengths, and one next step",j(["Values",[...(r4.values||[]),r4.valOther].filter(Boolean).join(", ")],["Strengths",r4.strengths],["Next step",r4.next]));
  const l4=W(4).lab||{}; add(4,"Lab","Ask AI about your future",j(["Suggested",l4.suggested],["What it missed",l4.missed]));
  const c4=W(4).ci||{}; add(4,"Check-in","Looking back at Week 1",j(["Anxiety",c4.anxiety],["Curiosity",c4.curiosity],["What changed",c4.changed],["I'll keep practicing",c4.keep]));
  return out;
}
function renderJournal(){
  const entries=[];
  if(Object.values(S.guiding).some(Boolean)) entries.push(["Before we begin","Guiding questions",GUIDING.filter(([k])=>S.guiding[k]).map(([k,q])=>q+"\n"+S.guiding[k]).join("\n\n")]);
  entries.push(...journalEntries());
  const all=entries.map(([a,b,c])=>`${a} — ${b}\n${c}`).join("\n\n");
  app.append(header(),h("div",{class:"stack"},
    h("div",{class:"row",style:"justify-content:space-between"},h("h1",{},"Journal"),entries.length?h("button",{class:"btn-sm",onclick:()=>copy(all)},"Copy all"):null),
    h("p",{class:"muted"},"Everything you've written, in one place. Saved on this device only."),
    moodChart(),
    entries.length?h("div",{class:"stack"},entries.map(([a,b,c])=>h("div",{class:"entry"},h("p",{class:"eyebrow"},a),h("h3",{},b),h("p",{},c))))
      :h("div",{class:"quiet"},h("p",{},"Nothing here yet. Your reflections will appear after your first session."))));
}

/* About */
function renderAbout(){
  let confirming=false;
  const resetRow=h("div",{class:"row"});
  const drawReset=()=>resetRow.replaceChildren(...(confirming?[h("span",{},"Erase all your entries on this device?"),
      h("button",{class:"btn-sm btn-primary",onclick:()=>{S=blank();save();view={tab:"home",week:null,beat:"practice"};render();toast("Cleared");}},"Erase"),
      h("button",{class:"btn-sm",onclick:()=>{confirming=false;drawReset();}},"Cancel")]
    :[h("button",{class:"btn-sm",onclick:()=>{confirming=true;drawReset();}},"Clear my data"),h("button",{class:"btn-sm btn-ghost",onclick:loadSample},"Load sample data"),USE_QUALTRICS?null:h("button",{class:"btn-sm btn-ghost",onclick:loadSampleResearch},"Preview survey results")].filter(Boolean)));
  drawReset();
  app.append(header(),h("div",{class:"stack"},
    h("h1",{},"About AIM-YA"),
    h("p",{},"AIM-YA (AI Mindfulness for Young Adults) uses mindfulness as a framework for AI awareness, ethics, and resilience. It's designed for undergraduates navigating AI anxiety: the worry about keeping pace, being replaced, configuring tools well, and the hidden assumptions built into AI systems."),
    h("div",{class:"quiet stack-s"},h("h3",{},"How each week works"),
      ...BEATS.map(([b,l,t])=>h("p",{},h("strong",{},l+" "),h("span",{class:"muted"},"("+t+") "),
        ({practice:"A guided mindfulness practice.",reflection:"A structured written reflection.",lab:"A hands-on activity with your own AI tool.",checkin:"Quick ratings and a short question to close."})[b]))),
    h("div",{class:"stack-s"},h("h3",{},"Why this program"),
      h("p",{},"AI anxiety is a cluster of four related worries: learning to use AI, being replaced or made dependent, humanlike AI, and AI being misused or getting out of control (Wang & Wang, 2019). Recent surveys show Gen Z growing more anxious and skeptical about AI, and more worried about its effect on their thinking (Brenan, 2026). Research with undergraduates suggests that more mindful students report less AI anxiety, with lower stress helping explain the link. That study is correlational and under review; this program helps test whether practice makes a difference."),
      h("div",{class:"row"},h("button",{class:"btn-sm",onclick:()=>{S.onboarded=false;S._onb=1;save();view.tab="home";render();}},"Replay the introduction"))),
    h("div",{class:"stack-s"},h("h3",{},"References"),
      h("ul",{class:"refs"},REFS.map(r=>h("li",{},r.t+" ",r.doi?h("a",{href:"https://doi.org/"+r.doi,target:"_blank",rel:"noopener"},"https://doi.org/"+r.doi):h("a",{href:r.u,target:"_blank",rel:"noopener"},r.u))))),
    h("div",{class:"stack-s"},h("h3",{},"Research participation"),
      h("p",{class:"muted"},S.research.consent?`You're taking part (Study ID ${S.research.pid}). Pre-program questionnaires: ${S.research.preDone?"done":"not yet"}. Post-program: ${S.research.postDone?"done":"after Week 4"}.`
        :S.research.consent===false?"You chose to use the app without taking part in the research.":"You haven't made a choice yet."),
      USE_QUALTRICS&&S.research.consent?h("p",{class:"muted"},"Your questionnaire answers are stored in Qualtrics under your study ID. To withdraw, contact the research team listed on the consent form."):null,
      h("div",{class:"row"},
        S.research.consent&&USE_QUALTRICS?null
        :S.research.consent?h("button",{class:"btn-sm",onclick:()=>{S.research={...blank().research,consent:false,consentAt:new Date().toISOString()};save();render();toast("Withdrawn. Your questionnaire answers were deleted.");}},"Withdraw from the research")
          :h("button",{class:"btn-sm",onclick:()=>{S.research.consent=null;S.onboarded=false;S._onb=1;save();view.tab="home";render();}},"Review the consent form"))),
    h("div",{class:"stack-s"},h("h3",{},"Measures"),
      h("ul",{class:"refs"},[
        ["Cohen, S., Kamarck, T., & Mermelstein, R. (1983). A global measure of perceived stress. Journal of Health and Social Behavior, 24(4), 385–396.","10.2307/2136404"],
        ["Feldman, G., Hayes, A., Kumar, S., Greeson, J., & Laurenceau, J.-P. (2007). Mindfulness and emotion regulation: The development and initial validation of the Cognitive and Affective Mindfulness Scale-Revised (CAMS-R). Journal of Psychopathology and Behavioral Assessment, 29(3), 177–190.","10.1007/s10862-006-9035-8"],
        ["Wang, Y.-Y., & Wang, Y.-S. (2022). Development and validation of an artificial intelligence anxiety scale. Interactive Learning Environments, 30(4), 619–634.","10.1080/10494820.2019.1674887"]
      ].map(([t,d])=>h("li",{},t+" ",h("a",{href:"https://doi.org/"+d,target:"_blank",rel:"noopener"},"https://doi.org/"+d))))),
    h("div",{class:"stack-s"},h("h3",{},"Your privacy"),h("p",{class:"muted"},"In this prototype, your writing stays in this browser on this device. Nothing is sent to your instructor or to any AI tool unless you copy and paste it yourself.")),
    h("div",{class:"notice"},"Prototype. Not yet connected to course accounts."),
    resetRow));
}

/* Sample questionnaire scores, so reviewers can see the results screen */
function loadSampleResearch(){
  const R=S.research; R.consent=true; R.pid="SAMPLE"; R.consentAt=R.consentAt||new Date().toISOString();
  const fill=(shift)=>{const o={aias:{},pss:{},cams:{}};
    SCALES[0].items.forEach((it,i)=>o.aias[it.id]=Math.max(1,Math.min(7,(it.dim==="job"?6:it.dim==="learning"?5:4)-shift+(i%2))));
    SCALES[1].items.forEach((it,i)=>o.pss[it.id]=[4,5,7,8].includes(i+1)?Math.min(4,1+shift):Math.max(0,3-shift));
    SCALES[2].items.forEach((it,i)=>o.cams[it.id]=[2,6,7].includes(i+1)?Math.max(1,3-shift):Math.min(4,2+shift));return o;};
  R.pre=fill(0);R.post=fill(1);R.preDone=R.postDone=new Date().toISOString();
  S.onboarded=true;save();view={tab:"home",week:null,beat:"practice",survey:"results"};render();toast("Sample scores loaded");
}

/* Sample data for demos */
function loadSample(){
  S=blank(); S.onboarded=true; S.check={learning:4,job:5,config:3,socio:2};
  S.research.consent=false;
  S.guiding={who:"A second-year bio student who overthinks.",want:"To feel less behind all the time.",purpose:"Still figuring it out. Something with helping people.",grateful:"My roommate, my mom's calls.",strengths:"Patient, notice details."};
  S.weeks[1]={practiced:true,done:{practice:true,reflection:true,lab:true,checkin:true},
    refl:{map:{study:{how:"(sample) Summarizing readings, checking chemistry answers",feel:["Curious","Anxious"]},work:{how:"(sample) Résumé help",feel:["Anxious"]},daily:{how:"(sample) Feeds, autocomplete",feel:["Nothing"]},other:{place:"",how:"",feel:[]}}},
    lab:{pred:"(sample) “anxious,” “excited,” “curious”… it was just guessing likely words.",wrong:"(sample) Asked what I had for breakfast. It made something up.",response:"(sample) It apologized and guessed again."},
    ci:{anxiety:7,curiosity:5,story:"(sample) That I'm already behind and everyone else knows how to use it."}};
  S.weeks[2]={practiced:true,done:{practice:true},refl:{tool:"ChatGPT"}};
  S._onb=1; save(); view={tab:"home",week:null,beat:"practice"}; render(); toast("Sample data loaded");
}

render();
