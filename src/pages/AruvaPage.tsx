import React, { useState, useRef, useEffect, type CSSProperties } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faShield, faArrowsRotate, faWandSparkles, faCircleCheck, faMicrophone, faPen, faImage, faChartLine } from '@fortawesome/free-solid-svg-icons'
import ProductDemoModal from '@/components/ProductDemoModal'

// -- Hero Screen Showcase (cycles Student Hub screens) ------------------------
const HERO_NAV = [
  { label: 'Dashboard',    icon: 'M3 3h7v7H3zm8 0h7v7h-7zM3 11h7v7H3zm8 0h7v7h-7z' },
  { label: 'My Courses',   icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
  { label: 'Schedule',     icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
  { label: 'Learning Map', icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7' },
  { label: 'Skill Mastery',icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
  { label: 'AI Insights',  icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  { label: 'Milestones',   icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' },
]

function AruvaHeroDashboard() {
  const [active,  setActive]  = React.useState(0)
  const [entered, setEntered] = React.useState(false)

  React.useEffect(() => {
    const raf = requestAnimationFrame(() => setTimeout(() => setEntered(true), 80))
    return () => cancelAnimationFrame(raf)
  }, [])

  React.useEffect(() => {
    const id = setInterval(() => setActive(p => (p + 1) % HERO_NAV.length), 2800)
    return () => clearInterval(id)
  }, [])

  const screens = [
    /* 0 Dashboard */
    <div key="dashboard" style={{ padding:'14px', background:'#f5f6fa', height:'100%', overflow:'hidden' }}>
      <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', marginBottom:10 }}>
        <div>
          <p style={{ fontSize:15, fontWeight:900, color:'#0a1628', letterSpacing:'-0.02em', lineHeight:1 }}>WELCOME BACK, ALEX</p>
          <div style={{ display:'flex', alignItems:'center', gap:4, marginTop:4 }}>
            <div style={{ width:5, height:5, borderRadius:'50%', background:'#22c55e' }}/>
            <p style={{ fontSize:7, fontWeight:700, color:'#22c55e', letterSpacing:'0.12em', textTransform:'uppercase' }}>Active Learning Session</p>
          </div>
        </div>
        <div style={{ background:'#7c3aed', borderRadius:6, padding:'4px 10px', display:'flex', alignItems:'center', gap:4 }}>
          <div style={{ width:5, height:5, borderRadius:'50%', background:'rgba(255,255,255,0.5)' }}/>
          <p style={{ fontSize:7, fontWeight:800, color:'white', letterSpacing:'0.10em', textTransform:'uppercase' }}>Investor Demo: Adaptive AI</p>
        </div>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 120px', gap:8, height:'calc(100% - 50px)' }}>
        <div style={{ background:'#111827', borderRadius:12, padding:'12px', display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
          <div>
            <div style={{ display:'flex', gap:5, marginBottom:8 }}>
              <span style={{ background:'#3b82f6', borderRadius:4, padding:'2px 6px', fontSize:6.5, fontWeight:800, color:'white', letterSpacing:'0.1em' }}>UP NEXT</span>
              <span style={{ fontSize:6.5, color:'rgba(255,255,255,0.45)', letterSpacing:'0.08em' }}>INTRODUCTION TO JAVASCRIPT</span>
            </div>
            <p style={{ fontSize:14, fontWeight:900, color:'white', lineHeight:1.15, marginBottom:5 }}>Function<br/>Declarations</p>
            <p style={{ fontSize:7.5, color:'rgba(255,255,255,0.55)', lineHeight:1.45 }}>Comprehensive study of Function Declarations. Explore core concepts and practical applications.</p>
            <div style={{ display:'flex', gap:10, marginTop:6 }}>
              <span style={{ fontSize:7, color:'rgba(255,255,255,0.50)' }}>⏱ 60 MIN</span>
              <span style={{ fontSize:7, color:'#fbbf24' }}>★ HIGH MASTERY IMPACT</span>
            </div>
          </div>
          <div style={{ background:'white', borderRadius:7, padding:'5px 10px', display:'flex', alignItems:'center', gap:5, alignSelf:'flex-start' }}>
            <p style={{ fontSize:7.5, fontWeight:800, color:'#111827', letterSpacing:'0.08em' }}>CONTINUE LEARNING →</p>
          </div>
        </div>
        <div style={{ display:'flex', flexDirection:'column', gap:7 }}>
          <div style={{ background:'white', borderRadius:8, padding:'8px 10px', border:'1px solid #e5e7eb' }}>
            <p style={{ fontSize:6.5, color:'rgba(10,22,40,0.38)', letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:2 }}>Overall Progress</p>
            <div style={{ display:'flex', alignItems:'center', gap:4 }}>
              <p style={{ fontSize:18, fontWeight:900, color:'#0a1628', lineHeight:1 }}>22%</p>
              <div style={{ width:14, height:14, borderRadius:'50%', background:'#228DC1', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <p style={{ fontSize:7, color:'white', fontWeight:900 }}>✓</p>
              </div>
            </div>
          </div>
          <div style={{ background:'white', borderRadius:8, padding:'8px 10px', border:'1px solid #e5e7eb', flex:1 }}>
            <p style={{ fontSize:6.5, color:'#059669', letterSpacing:'0.12em', fontWeight:800, textTransform:'uppercase', marginBottom:3 }}>Academy Status</p>
            <p style={{ fontSize:10, fontWeight:900, color:'#059669', lineHeight:1, marginBottom:3 }}>You are ahead</p>
            <p style={{ fontSize:6.5, color:'rgba(10,22,40,0.45)', lineHeight:1.4 }}>"Excellent velocity! 3 units above weekly target."</p>
          </div>
          <div style={{ background:'white', borderRadius:8, padding:'8px 10px', border:'1px solid #e5e7eb' }}>
            <p style={{ fontSize:6, color:'rgba(10,22,40,0.38)', letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:4 }}>Learning Activity 🔥</p>
            {[['Weekly Streak','4 Days','#f59e0b'],['Completed','452','#228DC1'],['Time Spent','10.0h','#7c3aed']].map(([l,v,c])=>(
              <div key={l} style={{ display:'flex', justifyContent:'space-between', marginBottom:2 }}>
                <p style={{ fontSize:6.5, color:'rgba(10,22,40,0.40)' }}>{l}</p>
                <p style={{ fontSize:7, fontWeight:800, color:c }}>{v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>,

    /* 1 My Courses */
    <div key="courses" style={{ padding:'14px', background:'#f5f6fa', height:'100%', overflow:'hidden' }}>
      <p style={{ fontSize:14, fontWeight:900, color:'#0a1628', letterSpacing:'-0.01em', marginBottom:2 }}>MY ACADEMIC TRACKS</p>
      <p style={{ fontSize:7, color:'rgba(10,22,40,0.38)', letterSpacing:'0.14em', textTransform:'uppercase', marginBottom:10 }}>Spring Semester 2026</p>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:8, marginBottom:8 }}>
        {[
          { color:'#fbbf24', pct:14, name:'Introduction to JavaScript', prof:'Dr Abeer', skills:[['Variables & Scoping','32%'],['Syntax & Fundamentals','55%']] },
          { color:'#22c55e', pct:30, name:'Foundations of Biology', prof:'Dr. James Wilson', skills:[['Cellular Theory','85%'],['Genetics & Inheritance','42%']] },
        ].map(c => (
          <div key={c.name} style={{ background:'white', borderRadius:10, padding:'10px', border:'1px solid #e5e7eb' }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:6 }}>
              <div style={{ width:22, height:22, borderRadius:6, background:c.color, display:'flex', alignItems:'center', justifyContent:'center' }}>
                <p style={{ fontSize:10, color:'white' }}>📖</p>
              </div>
              <div style={{ textAlign:'right' }}>
                <p style={{ fontSize:6.5, color:'rgba(10,22,40,0.35)', letterSpacing:'0.1em', textTransform:'uppercase' }}>Progress</p>
                <p style={{ fontSize:13, fontWeight:900, color:'#0a1628', lineHeight:1 }}>{c.pct}%</p>
              </div>
            </div>
            <p style={{ fontSize:8.5, fontWeight:900, color:'#1e2d7d', letterSpacing:'0.04em', lineHeight:1.25, marginBottom:2, textDecoration:'underline' }}>{c.name.toUpperCase()}</p>
            <p style={{ fontSize:6.5, color:'rgba(10,22,40,0.40)', marginBottom:6, letterSpacing:'0.06em' }}>{c.prof.toUpperCase()}</p>
            <p style={{ fontSize:6, color:'rgba(10,22,40,0.35)', letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:4 }}>Key Outcomes Mastery</p>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:4 }}>
              {c.skills.map(([s,v]) => (
                <div key={s}>
                  <p style={{ fontSize:6, color:'rgba(10,22,40,0.38)', letterSpacing:'0.08em', textTransform:'uppercase' }}>{s}</p>
                  <p style={{ fontSize:11, fontWeight:900, color:'#0a1628' }}>{v}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div style={{ background:'#059669', borderRadius:8, padding:'8px 12px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
        <p style={{ fontSize:8, fontWeight:700, color:'white' }}>You've completed 42% of your total curriculum this term.</p>
        <div style={{ background:'white', borderRadius:5, padding:'3px 8px' }}>
          <p style={{ fontSize:6.5, fontWeight:800, color:'#059669', letterSpacing:'0.08em', textTransform:'uppercase' }}>Download Transcript</p>
        </div>
      </div>
    </div>,

    /* 2 Schedule */
    <div key="schedule" style={{ padding:'14px', background:'#f5f6fa', height:'100%', overflow:'hidden' }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:10 }}>
        <div>
          <p style={{ fontSize:14, fontWeight:900, color:'#0a1628', letterSpacing:'-0.01em', marginBottom:1 }}>WEEKLY PLANNER</p>
          <p style={{ fontSize:7, color:'rgba(10,22,40,0.38)', letterSpacing:'0.12em', textTransform:'uppercase' }}>Multi-course workload optimisation</p>
        </div>
        <div style={{ display:'flex', gap:5, alignItems:'center' }}>
          <div style={{ background:'white', borderRadius:6, padding:'5px 8px', border:'1px solid #e5e7eb', display:'flex', gap:4, alignItems:'center' }}>
            <p style={{ fontSize:6.5, fontWeight:700, color:'rgba(10,22,40,0.50)', letterSpacing:'0.08em' }}>AI SUGGESTION</p>
          </div>
        </div>
      </div>
      <div style={{ background:'white', borderRadius:8, padding:'8px', border:'1px solid #e5e7eb', marginBottom:8 }}>
        <p style={{ fontSize:7, color:'rgba(10,22,40,0.38)', letterSpacing:'0.14em', textTransform:'uppercase', marginBottom:5 }}>June 2026</p>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(7,1fr)', gap:3 }}>
          {[['MON','01','6 TASKS',false],['TUE','02','7 TASKS',true],['WED','03','5 TASKS',false],['THU','04','2 TASKS',false],['FRI','05','4 TASKS',false],['SAT','06','0 TASKS',false],['SUN','07','0 TASKS',false]].map(([d,n,t,sel]) => (
            <div key={n as string} style={{ textAlign:'center', background: sel ? '#1e2d7d' : 'transparent', borderRadius:6, padding:'4px 2px' }}>
              <p style={{ fontSize:5.5, fontWeight:600, color: sel ? 'rgba(255,255,255,0.6)' : 'rgba(10,22,40,0.35)', letterSpacing:'0.1em' }}>{d}</p>
              <p style={{ fontSize:12, fontWeight:900, color: sel ? 'white' : '#0a1628', lineHeight:1.1 }}>{n}</p>
              <p style={{ fontSize:5.5, color: sel ? 'rgba(255,255,255,0.55)' : 'rgba(10,22,40,0.35)' }}>{t}</p>
            </div>
          ))}
        </div>
      </div>
      <div style={{ background:'#fca5a5', borderRadius:7, padding:'6px 10px', display:'flex', alignItems:'center', gap:6, marginBottom:7 }}>
        <div style={{ width:12, height:12, borderRadius:'50%', background:'#ef4444', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
          <p style={{ fontSize:7, color:'white', fontWeight:900 }}>!</p>
        </div>
        <div>
          <p style={{ fontSize:6.5, fontWeight:800, color:'#7f1d1d', letterSpacing:'0.1em', textTransform:'uppercase' }}>Overload Warning</p>
          <p style={{ fontSize:6.5, color:'#991b1b' }}>This day has 4+ intense units. We recommend shifting non-essential tasks.</p>
        </div>
      </div>
      <div style={{ background:'white', borderRadius:8, padding:'8px 10px', border:'1px solid #e5e7eb' }}>
        <div style={{ display:'flex', gap:5, marginBottom:4 }}>
          <span style={{ background:'#1e2d7d', borderRadius:4, padding:'2px 6px', fontSize:6, fontWeight:800, color:'white', letterSpacing:'0.1em' }}>INTRO TO JAVASCRIPT</span>
          <span style={{ background:'#e0e7ff', borderRadius:4, padding:'2px 6px', fontSize:6, fontWeight:800, color:'#3730a3', letterSpacing:'0.1em' }}>LEARNING SESSION</span>
        </div>
        <p style={{ fontSize:10, fontWeight:900, color:'#0a1628', marginBottom:2 }}>Function Declarations</p>
        <p style={{ fontSize:7, color:'rgba(10,22,40,0.45)' }}>Comprehensive study of Function Declarations. Explore core concepts.</p>
      </div>
    </div>,

    /* 3 Learning Map */
    <div key="map" style={{ padding:'14px', background:'#f5f6fa', height:'100%', overflow:'hidden' }}>
      <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', marginBottom:10 }}>
        <div style={{ display:'flex', gap:8, alignItems:'center' }}>
          <div style={{ width:22, height:22, borderRadius:6, background:'#1e2d7d', display:'flex', alignItems:'center', justifyContent:'center' }}>
            <p style={{ fontSize:10, color:'white' }}>🗺</p>
          </div>
          <div>
            <p style={{ fontSize:12, fontWeight:900, color:'#0a1628', lineHeight:1 }}>Learning Map</p>
            <p style={{ fontSize:6.5, color:'rgba(10,22,40,0.38)', letterSpacing:'0.1em', textTransform:'uppercase' }}>Decision-driven progression system</p>
          </div>
        </div>
        <div style={{ background:'white', borderRadius:7, padding:'5px 10px', border:'1px solid #e5e7eb', textAlign:'right' }}>
          <p style={{ fontSize:6.5, color:'rgba(10,22,40,0.35)', letterSpacing:'0.1em', textTransform:'uppercase' }}>Journey Progress</p>
          <p style={{ fontSize:13, fontWeight:900, color:'#0a1628', lineHeight:1 }}>5 <span style={{ fontSize:8, fontWeight:500 }}>/ 24</span></p>
        </div>
      </div>
      <div style={{ display:'flex', gap:4, marginBottom:10 }}>
        {['All Courses','Intro to JavaScript','Foundations of Biology'].map((t,i) => (
          <div key={t} style={{ background: i===0 ? '#1e2d7d' : 'white', borderRadius:5, padding:'3px 8px', border:'1px solid #e5e7eb' }}>
            <p style={{ fontSize:6.5, fontWeight:i===0?800:500, color: i===0?'white':'rgba(10,22,40,0.50)', letterSpacing:'0.08em', textTransform:'uppercase' }}>{t}</p>
          </div>
        ))}
      </div>
      <div style={{ display:'flex', gap:12, alignItems:'flex-start' }}>
        <div style={{ background:'white', borderRadius:10, padding:'10px', border:'1px solid #e5e7eb', flex:1 }}>
          <div style={{ display:'flex', justifyContent:'space-between', marginBottom:5 }}>
            <span style={{ fontSize:6.5, color:'#228DC1', fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase' }}>Learning Session</span>
            <span style={{ fontSize:6.5, color:'#059669', fontWeight:800, letterSpacing:'0.1em', textTransform:'uppercase' }}>Completed</span>
          </div>
          <p style={{ fontSize:11, fontWeight:900, color:'#0a1628', marginBottom:4 }}>Introduction to ES6</p>
          <p style={{ fontSize:7, color:'rgba(10,22,40,0.45)', marginBottom:5, lineHeight:1.4 }}>Comprehensive study of Introduction to ES6. Explore core concepts.</p>
          <div style={{ display:'flex', gap:8, marginBottom:6 }}>
            <span style={{ fontSize:6.5, color:'rgba(10,22,40,0.40)', letterSpacing:'0.08em', textTransform:'uppercase' }}>Syntax & Fundamentals</span>
            <span style={{ fontSize:6.5, color:'rgba(10,22,40,0.40)' }}>⏱ 60 MIN</span>
          </div>
          <div style={{ background:'#111827', borderRadius:5, padding:'4px 10px', display:'inline-flex', alignItems:'center', gap:4 }}>
            <p style={{ fontSize:7, fontWeight:800, color:'white', letterSpacing:'0.08em', textTransform:'uppercase' }}>↺ Review Concept</p>
          </div>
        </div>
        <div style={{ display:'flex', flexDirection:'column', alignItems:'center', paddingTop:8 }}>
          <div style={{ width:16, height:16, borderRadius:'50%', background:'#059669', display:'flex', alignItems:'center', justifyContent:'center', border:'2px solid white', boxShadow:'0 0 0 2px #059669' }}>
            <p style={{ fontSize:8, color:'white', fontWeight:900 }}>✓</p>
          </div>
          <div style={{ width:2, height:50, background:'#059669', margin:'3px 0' }}/>
          <div style={{ width:16, height:16, borderRadius:'50%', background:'#059669', display:'flex', alignItems:'center', justifyContent:'center', border:'2px solid white', boxShadow:'0 0 0 2px #059669' }}>
            <p style={{ fontSize:8, color:'white', fontWeight:900 }}>✓</p>
          </div>
          <div style={{ width:2, height:30, background:'#d1d5db', margin:'3px 0' }}/>
          <div style={{ width:16, height:16, borderRadius:'50%', background:'#1e2d7d', border:'2px solid white', boxShadow:'0 0 0 2px #1e2d7d' }}/>
        </div>
      </div>
    </div>,

    /* 4 Skill Mastery */
    <div key="mastery" style={{ padding:'14px', background:'#f5f6fa', height:'100%', overflow:'hidden' }}>
      <div style={{ display:'flex', justifyContent:'space-between', marginBottom:8 }}>
        <div>
          <p style={{ fontSize:14, fontWeight:900, color:'#0a1628', letterSpacing:'-0.01em' }}>SKILL MASTERY</p>
          <p style={{ fontSize:7, color:'rgba(10,22,40,0.45)', marginTop:2 }}>Real-time quantification of your academic competency.</p>
        </div>
        <div style={{ background:'white', borderRadius:8, padding:'5px 10px', border:'1px solid #e5e7eb', textAlign:'center' }}>
          <p style={{ fontSize:6.5, color:'rgba(10,22,40,0.35)', letterSpacing:'0.1em', textTransform:'uppercase' }}>Global Mastery</p>
          <p style={{ fontSize:16, fontWeight:900, color:'#0a1628', lineHeight:1 }}>22% 🎓</p>
        </div>
      </div>
      <div style={{ background:'white', borderRadius:8, padding:'8px 10px', border:'1px solid #e5e7eb', marginBottom:8, display:'flex', justifyContent:'space-between', alignItems:'center' }}>
        <div style={{ display:'flex', gap:8, alignItems:'center' }}>
          <div style={{ width:24, height:24, borderRadius:6, background:'#fbbf24', display:'flex', alignItems:'center', justifyContent:'center' }}>
            <p style={{ fontSize:11 }}>📖</p>
          </div>
          <div>
            <p style={{ fontSize:8, fontWeight:800, color:'#0a1628', letterSpacing:'0.04em' }}>INTRODUCTION TO JAVASCRIPT</p>
            <p style={{ fontSize:6.5, color:'rgba(10,22,40,0.40)' }}>DR ABEER · SPRING 2026</p>
          </div>
        </div>
        <div style={{ textAlign:'right' }}>
          <p style={{ fontSize:6.5, color:'rgba(10,22,40,0.35)', letterSpacing:'0.1em', textTransform:'uppercase' }}>Target Mastery</p>
          <p style={{ fontSize:16, fontWeight:900, color:'#0a1628', lineHeight:1 }}>29%</p>
        </div>
      </div>
      <div style={{ display:'flex', justifyContent:'space-between', marginBottom:5 }}>
        <p style={{ fontSize:6.5, color:'rgba(10,22,40,0.35)', letterSpacing:'0.16em', textTransform:'uppercase', fontWeight:700 }}>Cognitive Outcomes</p>
        <p style={{ fontSize:6.5, color:'rgba(10,22,40,0.28)', letterSpacing:'0.1em', textTransform:'uppercase' }}>4 Skills Tracked</p>
      </div>
      {[['Variables & Scoping',32,'#ef4444','NEEDS ATTENTION'],['Syntax & Fundamentals',55,'#f59e0b','PRACTICING'],['Functional Programming',0,'#9ca3af','NO DATA YET']].map(([n,p,c,b]) => (
        <div key={n as string} style={{ marginBottom:6 }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:2 }}>
            <p style={{ fontSize:8, fontWeight:700, color:'#0a1628' }}>{n}</p>
            <div style={{ display:'flex', gap:4, alignItems:'center' }}>
              <span style={{ fontSize:6.5, fontWeight:700, color:c as string, background:`${c}15`, borderRadius:10, padding:'1px 6px', border:`1px solid ${c}30` }}>{b}</span>
              <p style={{ fontSize:8, fontWeight:800, color:c as string }}>{p}%</p>
            </div>
          </div>
          <div style={{ height:4, borderRadius:2, background:'#e5e7eb', overflow:'hidden' }}>
            <div style={{ height:'100%', width:`${p}%`, background:`linear-gradient(90deg,${c}bb,${c})`, borderRadius:2 }}/>
          </div>
        </div>
      ))}
    </div>,

    /* 5 AI Insights */
    <div key="insights" style={{ padding:'14px', background:'#f5f6fa', height:'100%', overflow:'hidden' }}>
      <div style={{ display:'flex', gap:8, alignItems:'center', marginBottom:10 }}>
        <div style={{ width:26, height:26, borderRadius:7, background:'#7c3aed', display:'flex', alignItems:'center', justifyContent:'center' }}>
          <p style={{ fontSize:13 }}>🤖</p>
        </div>
        <div>
          <p style={{ fontSize:13, fontWeight:900, color:'#0a1628' }}>AI Tutor</p>
          <p style={{ fontSize:6.5, color:'rgba(10,22,40,0.38)', letterSpacing:'0.1em', textTransform:'uppercase' }}>Adaptive Learning Support</p>
        </div>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:5, marginBottom:8 }}>
        {[
          ['💡','CONCEPTUAL BRIDGE','You understand theory of ES6 but struggled with Environment Setup. Practice the application.','REVIEW CONCEPT','#228DC1'],
          ['⚠','MISCONCEPTION DETECTED','Your quiz results show a pattern of errors in Variables & Scoping. Review lexical scope.','FIX GAP','#ef4444'],
          ['💡','PRACTICAL GAP','You have good theoretical knowledge of DNA Sequencing but need more hands-on practice.','START PRACTICE','#7c3aed'],
        ].map(([icon,label,text,cta,color]) => (
          <div key={label as string} style={{ background:'white', borderRadius:8, padding:'8px', border:'1px solid #e5e7eb' }}>
            <p style={{ fontSize:8, marginBottom:2 }}>{icon}</p>
            <p style={{ fontSize:6, fontWeight:800, color:'rgba(10,22,40,0.38)', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:4 }}>{label}</p>
            <p style={{ fontSize:7, color:'rgba(10,22,40,0.65)', lineHeight:1.45, marginBottom:5 }}>{text}</p>
            <p style={{ fontSize:7, fontWeight:700, color:color as string, letterSpacing:'0.06em', textTransform:'uppercase' }}>{cta} →</p>
          </div>
        ))}
      </div>
      <p style={{ fontSize:7, fontWeight:800, color:'#0a1628', letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:5 }}>🔍 Identified Skill Gaps</p>
      {[['32%','Variables & Scoping','WEAK PROFICIENCY','#ef4444'],['55%','Syntax & Fundamentals','MEDIUM PROFICIENCY','#f59e0b'],['42%','Genetics & Inheritance','MEDIUM PROFICIENCY','#f59e0b']].map(([pct,skill,level,color]) => (
        <div key={skill as string} style={{ background:'white', borderRadius:7, padding:'5px 8px', border:'1px solid #e5e7eb', display:'flex', alignItems:'center', gap:7, marginBottom:4 }}>
          <div style={{ width:24, height:24, borderRadius:6, background:`${color}20`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
            <p style={{ fontSize:8, fontWeight:900, color:color as string }}>{pct}</p>
          </div>
          <div style={{ flex:1 }}>
            <p style={{ fontSize:7.5, fontWeight:700, color:'#0a1628' }}>{skill}</p>
            <p style={{ fontSize:6, color:color as string, fontWeight:700, letterSpacing:'0.08em' }}>{level}</p>
          </div>
          <div style={{ background:'#7c3aed', borderRadius:5, padding:'3px 8px' }}>
            <p style={{ fontSize:6.5, fontWeight:800, color:'white', letterSpacing:'0.08em' }}>FIX THIS →</p>
          </div>
        </div>
      ))}
    </div>,

    /* 6 Milestones */
    <div key="milestones" style={{ padding:'14px', background:'#f5f6fa', height:'100%', overflow:'hidden' }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:10 }}>
        <div>
          <p style={{ fontSize:13, fontWeight:900, color:'#0a1628', letterSpacing:'-0.01em' }}>Achievements & Milestones</p>
          <p style={{ fontSize:6.5, color:'rgba(10,22,40,0.38)', letterSpacing:'0.12em', textTransform:'uppercase', marginTop:2 }}>Your Academic Legacy</p>
        </div>
        <div style={{ background:'white', borderRadius:8, padding:'5px 10px', border:'1px solid #e5e7eb', display:'flex', gap:12, alignItems:'center' }}>
          <div style={{ textAlign:'center' }}>
            <p style={{ fontSize:6.5, color:'rgba(10,22,40,0.35)', letterSpacing:'0.1em', textTransform:'uppercase' }}>Total Badges</p>
            <p style={{ fontSize:14, fontWeight:900, color:'#0a1628', lineHeight:1 }}>2</p>
          </div>
          <div style={{ textAlign:'center' }}>
            <p style={{ fontSize:6.5, color:'rgba(10,22,40,0.35)', letterSpacing:'0.1em', textTransform:'uppercase' }}>Points</p>
            <p style={{ fontSize:14, fontWeight:900, color:'#059669', lineHeight:1 }}>1,240</p>
          </div>
        </div>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:7, marginBottom:8 }}>
        {[
          { name:'JAVASCRIPT NINJA', date:'2026-04-10', desc:'Earned for exceptional performance in Introduction to JavaScript.' },
          { name:'BIO EXPLORER', date:'2026-04-01', desc:'Earned for exceptional performance in Foundations of Biology.' },
          { name:'UPCOMING MILESTONE', date:'', desc:'Finish Unit 4 to unlock...' },
        ].map((m,i) => (
          <div key={m.name} style={{ background:'white', borderRadius:9, padding:'10px', border:'1px solid #e5e7eb', textAlign:'center', opacity: i===2 ? 0.5 : 1 }}>
            <div style={{ width:28, height:28, borderRadius:'50%', background: i===2 ? '#e5e7eb' : '#fef3c7', margin:'0 auto 4px', display:'flex', alignItems:'center', justifyContent:'center' }}>
              <p style={{ fontSize:14 }}>{i===2 ? '🔒' : '🏆'}</p>
            </div>
            <p style={{ fontSize:6.5, fontWeight:900, color: i===2 ? 'rgba(10,22,40,0.35)' : '#0a1628', letterSpacing:'0.08em', marginBottom:2 }}>{m.name}</p>
            {m.date && <p style={{ fontSize:6, color:'rgba(10,22,40,0.35)', marginBottom:3 }}>{m.date}</p>}
            <p style={{ fontSize:6.5, color:'rgba(10,22,40,0.45)', lineHeight:1.4 }}>{m.desc}</p>
          </div>
        ))}
      </div>
      <div style={{ background:'#111827', borderRadius:10, padding:'10px 12px' }}>
        <p style={{ fontSize:7.5, fontWeight:700, color:'white', marginBottom:7 }}>🚀 Your Learning Velocity</p>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:5 }}>
          {[['📚','COURSES STARTED','3'],['🏁','MILESTONES','2'],['⭐','SKILLS MASTERED','4'],['🏆','WEEKLY RANK','#12']].map(([icon,label,val]) => (
            <div key={label as string} style={{ background:'rgba(255,255,255,0.08)', borderRadius:7, padding:'6px', textAlign:'center' }}>
              <p style={{ fontSize:10, marginBottom:2 }}>{icon}</p>
              <p style={{ fontSize:5.5, color:'rgba(255,255,255,0.40)', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:2 }}>{label}</p>
              <p style={{ fontSize:11, fontWeight:900, color:'white', lineHeight:1 }}>{val}</p>
            </div>
          ))}
        </div>
      </div>
    </div>,

    /* 7 Demo Lecture */
    <div key="lecture" style={{ height:'100%', overflow:'hidden', position:'relative' }}>
      <div style={{ height:140, background:'linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.75)), url(/images/aruva-photosynthesis-realistic.png) center/cover', display:'flex', flexDirection:'column', justifyContent:'flex-end', padding:'12px 14px', position:'relative' }}>
        <div style={{ display:'flex', gap:6, marginBottom:6 }}>
          <span style={{ background:'#f59e0b', borderRadius:5, padding:'2px 7px', fontSize:6.5, fontWeight:800, color:'white', letterSpacing:'0.1em' }}>LECTURE 04</span>
          <span style={{ fontSize:6.5, color:'rgba(255,255,255,0.55)' }}>⏱ 25 MIN READ</span>
        </div>
        <p style={{ fontSize:14, fontWeight:900, color:'white', lineHeight:1.1, letterSpacing:'-0.01em' }}>THE ENGINE OF LIFE:</p>
        <p style={{ fontSize:14, fontWeight:900, color:'#f59e0b', lineHeight:1.1, letterSpacing:'-0.01em' }}>CELLULAR RESPIRATION</p>
        <p style={{ fontSize:7, color:'rgba(255,255,255,0.65)', marginTop:4, lineHeight:1.45 }}>Explore the biochemical pathways that convert nutrients into universal energy currency: ATP.</p>
      </div>
      <div style={{ padding:'12px 14px', background:'white', height:'calc(100% - 140px)', overflow:'hidden' }}>
        <p style={{ fontSize:9, fontWeight:900, color:'#0a1628', letterSpacing:'0.04em', marginBottom:5 }}>1. MITOCHONDRIAL FUNCTIONALITY</p>
        <p style={{ fontSize:7.5, color:'rgba(10,22,40,0.65)', lineHeight:1.65, marginBottom:8 }}>Often referred to as the powerhouse of the cell, mitochondria are double-membrane-bound organelles found in most eukaryotic organisms. They generate most of the cell's supply of adenosine triphosphate (ATP), used as a source of chemical energy.</p>
        <p style={{ fontSize:7.5, color:'rgba(10,22,40,0.65)', lineHeight:1.65 }}>Mitochondria are responsible for ATP production through cellular respiration. They contain their own genome and ribosomes, which are evidence of their evolutionary origin as free-living bacteria.</p>
      </div>
    </div>,
  ]

  const S = { fontFamily:'Inter,system-ui,-apple-system,sans-serif' }

  return (
    <div className="relative w-full max-w-[640px]" style={{ opacity: entered ? 1 : 0, transform: entered ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)', ...S }}>
      <style>{`@keyframes screenIn{from{opacity:0;transform:translateX(12px)}to{opacity:1;transform:translateX(0)}}`}</style>
      <div className="absolute -inset-6 hidden lg:block" style={{ background:'radial-gradient(ellipse at 60% 40%,rgba(34,141,193,0.13) 0,transparent 70%)' }}/>
      <div style={{ borderRadius:14, overflow:'hidden', boxShadow:'0 32px 80px rgba(10,22,40,0.22),0 8px 24px rgba(10,22,40,0.10)', border:'1px solid rgba(10,22,40,0.08)' }}>

        {/* App top bar */}
        <div style={{ background:'white', borderBottom:'1px solid #e5e7eb', padding:'7px 14px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <div style={{ display:'flex', alignItems:'center', gap:8 }}>
            <p style={{ fontSize:7, fontWeight:600, letterSpacing:'0.16em', color:'rgba(10,22,40,0.35)', textTransform:'uppercase' }}>Student Hub</p>
            <div style={{ display:'flex', alignItems:'center', gap:5, background:'#f5f6fa', borderRadius:6, padding:'3px 8px', border:'1px solid #e5e7eb' }}>
              <div style={{ width:14, height:14, borderRadius:4, background:'#2c9b6e', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <p style={{ fontSize:8, color:'white' }}>🎓</p>
              </div>
              <p style={{ fontSize:8, fontWeight:800, color:'#0a1628', letterSpacing:'0.04em' }}>STUDENT HUB</p>
              <svg width="8" height="8" viewBox="0 0 10 10" fill="none"><path d="M2 4l3 3 3-3" stroke="#9ca3af" strokeWidth="1.4" strokeLinecap="round"/></svg>
            </div>
          </div>
          <div style={{ display:'flex', alignItems:'center', gap:8 }}>
            <div style={{ display:'flex', gap:5, opacity:0.5 }}>
              {['⚙','🌙','💬'].map(ic => <p key={ic} style={{ fontSize:10 }}>{ic}</p>)}
            </div>
            <div style={{ display:'flex', alignItems:'center', gap:5 }}>
              <div style={{ width:20, height:20, borderRadius:'50%', background:'linear-gradient(135deg,#c8a882,#b08060)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <p style={{ fontSize:7, fontWeight:800, color:'white' }}>MG</p>
              </div>
              <div>
                <p style={{ fontSize:8, fontWeight:700, color:'#0a1628', lineHeight:1 }}>Maria Garcia</p>
                <p style={{ fontSize:5.5, color:'rgba(10,22,40,0.38)', letterSpacing:'0.06em', textTransform:'uppercase' }}>Student Hub</p>
              </div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div style={{ display:'flex', height:370 }}>

          {/* Sidebar */}
          <div style={{ width:108, background:'white', borderRight:'1px solid #e5e7eb', padding:'8px 6px', flexShrink:0 }}>
            {HERO_NAV.map((item, i) => {
              const isAct = active === i
              return (
                <div key={item.label} onClick={() => setActive(i)}
                  style={{ display:'flex', alignItems:'center', gap:6, padding:'6px 8px', marginBottom:2, borderRadius:6, background: isAct ? '#1e2d7d' : 'transparent', cursor:'pointer', transition:'background 0.2s ease' }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={isAct ? 'white' : 'rgba(10,22,40,0.35)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={item.icon}/>
                  </svg>
                  <p style={{ fontSize:8, fontWeight: isAct ? 700 : 400, color: isAct ? 'white' : 'rgba(10,22,40,0.45)', lineHeight:1.3, letterSpacing:'0.01em' }}>{item.label}</p>
                </div>
              )
            })}
          </div>

          {/* Screen content */}
          <div key={active} style={{ flex:1, overflow:'hidden', animation:'screenIn 0.28s cubic-bezier(0.4,0,0.2,1) both' }}>
            {screens[active]}
          </div>
        </div>
      </div>
    </div>
  )
}

// -- Scroll utilities ----------------------------------------------------------
function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView] as const
}

const reveal = (inView: boolean, delay = 0): CSSProperties => ({
  opacity: inView ? 1 : 0,
  transform: inView ? 'translateY(0)' : 'translateY(24px)',
  transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
})

const curriculumSubjects = [
  { name: 'Geography',  signal: 'Climate systems',         color: '#228DC1', soft: '#e5f4fa' },
  { name: 'Physics',    signal: 'Forces and motion',       color: '#7c3aed', soft: '#f3f0ff' },
  { name: 'Biology',    signal: 'Cellular respiration',    color: '#059669', soft: '#ecfdf5' },
  { name: 'Psychology', signal: 'Cognitive bias',          color: '#dc2626', soft: '#fff1f2' },
  { name: 'Maths',      signal: 'Algebraic reasoning',     color: '#2563eb', soft: '#eff6ff' },
  { name: 'Economics',  signal: 'Market behaviour',        color: '#d97706', soft: '#fff7ed' },
  { name: 'Chemistry',  signal: 'Reaction pathways',       color: '#0891b2', soft: '#ecfeff' },
  { name: 'History',    signal: 'Source interpretation',   color: '#9333ea', soft: '#faf5ff' },
]

function CurriculumAgnosticSection() {
  const [ref, inView] = useInView(0.1)
  const ORBIT_DUR = 20 // seconds per revolution
  const N = curriculumSubjects.length // 8
  const R = 178 // orbit radius in px
  const SIZE = 520 // container size in px

  return (
    <section ref={ref} className="py-24 bg-[#f8fafc] border-t border-gray-100 overflow-hidden">
      <style>{`
        @keyframes orbitSpin  { from{transform:rotate(0deg)}    to{transform:rotate(-360deg)} }
        @keyframes cardFloat  {
          0%   { transform: rotate(0deg)   scale(1.55); filter: drop-shadow(0 16px 36px rgba(34,141,193,0.55)); animation-timing-function: cubic-bezier(0.55,0,1,1); }
          7%   { transform: rotate(25deg)  scale(1.18); filter: drop-shadow(0 8px 18px rgba(34,141,193,0.22)); animation-timing-function: linear; }
          25%  { transform: rotate(90deg)  scale(0.94); filter: none; animation-timing-function: linear; }
          50%  { transform: rotate(180deg) scale(0.84); filter: none; animation-timing-function: linear; }
          75%  { transform: rotate(270deg) scale(0.94); filter: none; animation-timing-function: linear; }
          93%  { transform: rotate(335deg) scale(1.18); filter: drop-shadow(0 8px 18px rgba(34,141,193,0.22)); animation-timing-function: cubic-bezier(0,0,0.45,1); }
          100% { transform: rotate(360deg) scale(1.55); filter: drop-shadow(0 16px 36px rgba(34,141,193,0.55)); }
        }
        @keyframes connectionPulse {
          0%,100% { opacity:0; transform: scale(0.92); }
          50%     { opacity:1; transform: scale(1); }
        }
        @keyframes logoGlow {
          0%,100% { box-shadow: 0 0 0 0 rgba(34,141,193,0); }
          50%     { box-shadow: 0 0 0 16px rgba(34,141,193,0.06); }
        }
        @keyframes beamDash {
          from { stroke-dashoffset: 60; }
          to   { stroke-dashoffset: 0; }
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="grid lg:grid-cols-[0.82fr_1fr] gap-16 items-center">

          {/* LEFT — text */}
          <div style={reveal(inView, 0)}>
            <p className="type-label text-[#228DC1] mb-5">Curriculum Agnostic</p>
            <h2 className="font-heading text-[#0a1628] mb-5">
              One central Aruva layer.<br />
              <span className="text-[#228DC1]">Every subject can use it.</span>
            </h2>
            <p className="text-[#0a1628]/65 text-[16px] font-normal leading-[1.75] max-w-xl">
              Aruva stays centralised while the curriculum changes around it. Geography, Physics, Biology, Psychology, Maths, Economics, Chemistry and History all connect to the same governed learning intelligence layer.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-3 max-w-xl">
              {['Subject-aware tutoring', 'Same governance model', 'Outcome mapping by course', 'Shared learning signals'].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-[10px] border border-[#d7e9f2] bg-white px-4 py-3 shadow-[0_8px_20px_rgba(34,141,193,0.05)]">
                  <span className="h-2 w-2 rounded-full bg-[#228DC1]" />
                  <span className="text-[13px] font-semibold text-[#0a1628]/70">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — orbital visual */}
          <div className="flex items-center justify-center" style={reveal(inView, 120)}>
            <div style={{ position:'relative', width:SIZE, height:SIZE, flexShrink:0 }}>

              {/* Orbit ring */}
              <div style={{
                position:'absolute',
                top: SIZE/2 - R, left: SIZE/2 - R,
                width: R*2, height: R*2,
                borderRadius:'50%',
                border:'1.5px dashed rgba(34,141,193,0.18)',
                pointerEvents:'none',
              }}/>

              {/* Second subtle ring */}
              <div style={{
                position:'absolute',
                top: SIZE/2 - R*0.62, left: SIZE/2 - R*0.62,
                width: R*2*0.62, height: R*2*0.62,
                borderRadius:'50%',
                border:'1px solid rgba(34,141,193,0.07)',
                pointerEvents:'none',
              }}/>

              {/* Radial glow behind center */}
              <div style={{
                position:'absolute',
                top: SIZE/2 - 90, left: SIZE/2 - 90,
                width:180, height:180,
                borderRadius:'50%',
                background:'radial-gradient(circle, rgba(34,141,193,0.18) 0%, transparent 70%)',
                pointerEvents:'none',
              }}/>

              {/* Connection beam SVG — always points upward from center, beam appears for top card */}
              <svg style={{ position:'absolute', inset:0, width:SIZE, height:SIZE, pointerEvents:'none' }} viewBox={`0 0 ${SIZE} ${SIZE}`}>
                <line
                  x1={SIZE/2} y1={SIZE/2}
                  x2={SIZE/2} y2={SIZE/2 - R + 10}
                  stroke="#228DC1"
                  strokeWidth="1.5"
                  strokeDasharray="5 5"
                  style={{ animation:'beamDash 0.8s linear infinite', opacity:0.55 }}
                />
                {/* Connection dot at top */}
                <circle cx={SIZE/2} cy={SIZE/2 - R + 10} r="4" fill="#228DC1" opacity="0.7"
                  style={{ animation:'connectionPulse 2s ease-in-out infinite' }}/>
              </svg>

              {/* CENTER — Aruva logo */}
              <div style={{
                position:'absolute',
                top:'50%', left:'50%',
                transform:'translate(-50%,-50%)',
                zIndex:20,
                display:'flex', flexDirection:'column', alignItems:'center', gap:8,
                animation:'logoGlow 3s ease-in-out infinite',
                borderRadius:'50%',
                padding:16,
              }}>
                <img
                  src="/aruva-logo-vector.svg"
                  alt="Aruva"
                  style={{ width:130, height:'auto', objectFit:'contain', display:'block' }}
                  onError={(e) => { (e.target as HTMLImageElement).style.display='none' }}
                />
                <span style={{
                  fontSize:9, fontWeight:800, letterSpacing:'0.18em', textTransform:'uppercase',
                  color:'#228DC1', background:'#e5f4fa', borderRadius:20,
                  padding:'3px 12px', border:'1px solid rgba(34,141,193,0.20)',
                  whiteSpace:'nowrap',
                }}>Centralised AI</span>
              </div>

              {/* ORBITING CARDS — single container rotates, cards counter-rotate + scale */}
              <div style={{
                position:'absolute', inset:0,
                animation: inView ? `orbitSpin ${ORBIT_DUR}s linear infinite` : 'none',
              }}>
                {curriculumSubjects.map((subj, i) => {
                  const angleDeg = i * (360 / N) // 0=top, clockwise
                  const angleRad = (angleDeg - 90) * Math.PI / 180
                  const cx = SIZE/2 + Math.cos(angleRad) * R
                  const cy = SIZE/2 + Math.sin(angleRad) * R
                  // delay so card is at 0% (peak/top) when it actually reaches the top
                  const delay = -(ORBIT_DUR * (1 - angleDeg / 360))

                  return (
                    <div key={subj.name} style={{
                      position:'absolute',
                      left: cx, top: cy,
                      transform:'translate(-50%,-50%)',
                    }}>
                      <div style={{
                        animation: inView ? `cardFloat ${ORBIT_DUR}s linear infinite` : 'none',
                        animationDelay: `${delay}s`,
                        transformOrigin:'center',
                      }}>
                        <div style={{
                          background:'white',
                          border:`1.5px solid ${subj.color}35`,
                          borderRadius:12,
                          padding:'8px 12px',
                          minWidth:112,
                          boxShadow:`0 4px 16px ${subj.color}18`,
                          display:'flex', flexDirection:'column', gap:3,
                        }}>
                          <div style={{ display:'flex', alignItems:'center', gap:6 }}>
                            <div style={{
                              width:24, height:24, borderRadius:'50%',
                              background:subj.color,
                              display:'flex', alignItems:'center', justifyContent:'center',
                              fontSize:9, fontWeight:900, color:'white', flexShrink:0,
                            }}>
                              {subj.name.slice(0,2)}
                            </div>
                            <span style={{ fontSize:12, fontWeight:700, color:'#0a1628', whiteSpace:'nowrap' }}>{subj.name}</span>
                          </div>
                          <span style={{ fontSize:9.5, color:'rgba(10,22,40,0.48)', lineHeight:1.3, paddingLeft:30 }}>{subj.signal}</span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


function ScrollProgress() {
  const [pct, setPct] = useState(0)
  useEffect(() => {
    const fn = () => {
      const d = document.documentElement
      setPct(d.scrollTop / (d.scrollHeight - d.clientHeight))
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] pointer-events-none">
      <div style={{ width: `${pct * 100}%`, background: 'linear-gradient(90deg, #228DC1, #0e6a9a)', transition: 'width 80ms linear' }} className="h-full" />
    </div>
  )
}

// -- Four founding principles --------------------------------------------------
const principles = [
  {
    icon: faBookOpen,
    label: 'Syllabus first',
    title: 'Your course is the AI.',
    desc: 'Aruva starts from your outcomes, resources and assessment rules. Not a blank prompt.',
    color: '#228DC1',
  },
  {
    icon: faShield,
    label: 'Professor in control',
    title: 'Professors set the rules.',
    desc: 'Tone, depth, approved content and learning flow. The AI stays within the boundaries educators define.',
    color: '#059669',
  },
  {
    icon: faArrowsRotate,
    label: 'Live signals',
    title: 'Every exchange is a signal.',
    desc: 'Questions, planner activity and assessment responses update each student\'s learning profile in real time.',
    color: '#7c3aed',
  },
  {
    icon: faWandSparkles,
    label: 'Early action',
    title: 'Act during the term, not after.',
    desc: 'Gap detection happens while learning is live. Not after grades are submitted or surveys returned.',
    color: '#d97706',
  },
]


// -- Who it's for --------------------------------------------------------------
const audiences = [
  {
    label: 'Students',
    headline: 'Guided. Not an answer engine.',
    desc: 'A Socratic tutor that works from your actual course, not the open web.',
    points: [
      'Tutoring aligned to your syllabus and week',
      'Progress tracked across topics, mastery and confidence',
      'Smart planner for coursework, revision and workload',
    ],
    color: '#228DC1',
    soft: '#e8f4fc',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 3L2 8l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    stat: '3× faster gap closure',
  },
  {
    label: 'Educators',
    headline: 'More insight. Less admin.',
    desc: 'See where your class is struggling while there is still time to act.',
    points: [
      'AI-assisted quiz, rubric and assessment creation',
      'At-risk signals while the term is live, not after',
      'Material effectiveness data in your dashboard',
    ],
    color: '#7c3aed',
    soft: '#f3f0ff',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8"/><rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8"/><rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8"/><rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8"/></svg>,
    stat: '40% less marking time',
  },
  {
    label: 'Institutions',
    headline: 'Adopt AI. Stay in control.',
    desc: 'Governance and data residency built in from the start, not added later.',
    points: [
      'Governance built in, not bolted on afterwards',
      'Cloud, hybrid or on-premises with full data residency',
      'Analytics mapped to outcomes, retention and QE',
    ],
    color: '#059669',
    soft: '#ecfdf5',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    stat: 'ISO-ready deployment',
  },
]

// -- Platform pillars ----------------------------------------------------------

// -- How It Works — accordion LEFT, visual RIGHT (Intercom-style) --------------
function HowItWorksSection() {
  const [active, setActive] = React.useState(0)
  const [isPaused, setIsPaused] = React.useState(false)
  const [ref, inView] = useInView(0.1)

  React.useEffect(() => {
    if (!inView || isPaused) return
    const id = window.setInterval(() => {
      setActive(prev => (prev + 1) % howItWorksSteps.length)
    }, 4000)
    return () => window.clearInterval(id)
  }, [inView, isPaused])

  const step = howItWorksSteps[active]
  const Visual = step.visual === 'syllabus' ? SyllabusVisual
    : step.visual === 'align' ? AlignVisual
    : step.visual === 'tutor' ? TutorVisual
    : step.visual === 'mastery' ? MasteryStoryVisual
    : AnalyticsVisual

  return (
    <section ref={ref} className="bg-white py-28 border-t border-gray-100">
      <style>{`
        @keyframes hiwVisual { from{opacity:0;transform:translateX(10px)} to{opacity:1;transform:translateX(0)} }
        @keyframes hiwProgress { from{transform:scaleX(0)} to{transform:scaleX(1)} }
        .hiw-step-btn { border-radius: 0 !important; background: transparent !important; }
      `}</style>
      <div className="max-w-7xl mx-auto px-8 lg:px-12">

        {/* Section header */}
        <div className="mb-14" style={reveal(inView, 0)}>
          <p className="type-label text-[#228DC1] mb-4">How It Works</p>
          <h2 className="font-heading text-[#0a1628] mb-4">
            A learning story, guided by <span className="bg-[#fde68a] px-1.5 py-0.5 rounded-sm">Aruva</span>
          </h2>
          <p className="text-[#0a1628]/65 text-[16px] font-normal leading-relaxed max-w-2xl">
            Start with a student question. Aruva guides the answer, captures the learning signal, adapts the next step and gives educators the evidence while learning is still happening.
          </p>
        </div>

        {/* accordion LEFT + visual RIGHT — both pinned to top */}
        <div
          className="grid lg:grid-cols-[440px_1fr] gap-16 items-start"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >

          {/* LEFT — active step always at top, inactive steps below */}
          <div style={reveal(inView, 100)}>
            {howItWorksSteps.map((s, index) => {
              const isActive = index === active
              return (
                <button key={s.num} type="button" onClick={() => setActive(index)}
                  className="hiw-step-btn w-full text-left"
                  style={{ borderTop:`2px solid ${isActive ? '#228DC1' : '#e5e7eb'}`, padding: isActive ? '20px 0 22px' : '13px 0', display:'block', transition:'border-color 0.4s ease', outline:'none', cursor:'pointer' }}>
                  <div className="flex items-start gap-3">
                    <div className="flex-1">
                      <p style={{ fontSize: isActive ? 17 : 14, fontWeight: isActive ? 700 : 500, color: isActive ? '#0a1628' : 'rgba(10,22,40,0.38)', lineHeight:1.25, marginBottom: isActive ? 10 : 0, transition:'all 0.4s ease' }}>
                        {index + 1}. {s.label}
                      </p>
                      {isActive && (
                        <>
                          <p style={{ fontSize:14, color:'rgba(10,22,40,0.65)', lineHeight:1.75, marginBottom: s.detail ? 10 : 0 }}>{s.desc}</p>
                          {s.detail && <p style={{ fontSize:13, color:'#228DC1', fontStyle:'italic', lineHeight:1.55 }}>{s.detail}</p>}
                          <div style={{ height:2, marginTop:16, background:'rgba(34,141,193,0.12)', overflow:'hidden', transformOrigin:'left' }}>
                            <div
                              key={`${active}-${isPaused ? 'paused' : 'running'}`}
                              style={{
                                height:'100%',
                                background:'#228DC1',
                                transformOrigin:'left',
                                animation: isPaused ? 'none' : 'hiwProgress 4s linear forwards',
                              }}
                            />
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* RIGHT — visual aligned to top, smooth ease-in on swap */}
          <div key={active} className="self-start" style={{ animation:'hiwVisual 0.45s cubic-bezier(0.4,0,0.2,1) both', ...reveal(inView, 160) }}>
            <Visual />
          </div>

        </div>
      </div>
    </section>
  )
}

// -- How It Works steps --------------------------------------------------------
const howItWorksSteps = [
  {
    num: '01',
    label: 'Students learn. AI guides.',
    desc: 'A Socratic tutor that asks questions and cites sources. Not one that gives away answers.',
    detail: 'Live with real students. Used in production at British Council English Online.',
    visual: 'tutor',
  },
  {
    num: '02',
    label: 'Aruva spots the skill gap.',
    desc: 'Every interaction updates mastery signals, showing where the student is confident and where understanding is still fragile.',
    detail: 'Bloom levels, confidence and topic gaps are tracked continuously.',
    visual: 'mastery',
  },
  {
    num: '03',
    label: 'The course rules shape the support.',
    desc: 'Your syllabus, outcomes and rubrics decide what Aruva can teach, what it can cite and how much help it should give.',
    detail: 'The tutor stays inside your approved academic boundaries.',
    visual: 'align',
  },
  {
    num: '04',
    label: 'Educators see progress.',
    desc: 'Teachers see who is improving, which concepts are blocking progress and where intervention is needed before the exam.',
    detail: 'Insight rolls up from student to course, department and programme level.',
    visual: 'analytics',
  },
]

function SyllabusVisual() {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-7 shadow-[0_4px_24px_rgba(10,22,40,0.07)]">
      {/* Source chips row */}
      <div className="flex items-center gap-2 flex-wrap mb-5">
        {[
          { name: 'Canvas',     color: '#E66000', logo: '/logos/canvas.svg'     },
          { name: 'Moodle',     color: '#F98012', logo: '/logos/moodle.svg'     },
          { name: 'Blackboard', color: '#2E3191', logo: '/logos/blackboard.svg' },
        ].map(lms => (
          <div key={lms.name} className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg" style={{ background: lms.color + '12', border: '1px solid ' + lms.color + '30' }}>
            <img src={lms.logo} alt={lms.name} className="w-3.5 h-3.5 object-contain shrink-0" />
            <span className="text-[14px] font-semibold" style={{ color: lms.color }}>{lms.name}</span>
          </div>
        ))}
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-gray-50 border border-gray-200">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span className="text-[14px] font-medium text-gray-400">Upload .xlsx</span>
        </div>
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none"><path d="M1 6h14M11 2l4 4-4 4" stroke="#228DC1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[14px] font-bold" style={{ background: '#228DC115', border: '1px solid #228DC130', color: '#228DC1' }}>
          Smart Syllabus
        </div>
      </div>
      {/* Parsed weeks */}
      <p className="text-[14px] font-semibold uppercase tracking-[0.18em] text-[#0a1628]/35 mb-3">Business Strategy 101: Parsed</p>
      <div className="space-y-2 mb-5">
        {[
          { week: 'Week 3', topic: "Porter's Five Forces", mode: 'Socratic only', color: '#228DC1' },
          { week: 'Week 4', topic: 'Competitive Advantage',  mode: 'Guided hints',  color: '#7c3aed' },
          { week: 'Week 5', topic: 'Market Segmentation',    mode: 'Open tutor',    color: '#059669' },
        ].map(row => (
          <div key={row.week} className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#f8fafc] border border-gray-100" style={{ borderLeft: `2px solid ${row.color}` }}>
            <span className="text-[#0a1628]/35 text-[14px] font-semibold w-12 shrink-0">{row.week}</span>
            <span className="text-[#0a1628]/70 text-[14px] font-medium flex-1">{row.topic}</span>
            <span className="text-[14px] px-2 py-0.5 rounded-full font-semibold" style={{ background: row.color + '12', color: row.color, border: '1px solid ' + row.color + '25' }}>{row.mode}</span>
          </div>
        ))}
      </div>
      {/* Status */}
      <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-[#e5f4fa] border border-[#228DC1]/20">
        <span className="text-[14px] text-[#228DC1] font-semibold">Policy layer compiled. AI is ready to teach</span>
      </div>
    </div>
  )
}

function AlignVisual() {
  const inputs = [
    { label: 'Outcomes & objectives', color: '#228DC1' },
    { label: 'Rubric rules',          color: '#7c3aed' },
    { label: 'Approved content',      color: '#059669' },
    { label: 'AI mode: Socratic',     color: '#d97706' },
  ]
  const outputs = [
    { label: 'Policy Graph',  color: '#228DC1' },
    { label: 'RAG Scope',     color: '#7c3aed' },
    { label: 'Hint Stages',   color: '#059669' },
    { label: 'Rubric Rules',  color: '#d97706' },
  ]
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-7 shadow-[0_4px_24px_rgba(10,22,40,0.07)]">
      {/* Header */}
      <div className="mb-5">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0a1628]/35 mb-1">Policy Compilation</p>
        <p className="text-[#0a1628] font-semibold text-[15px]">Course inputs → compiled AI policy</p>
      </div>

      {/* Three-column layout: inputs | arrow | outputs */}
      <div className="flex items-center gap-4 mb-5">
        {/* Inputs */}
        <div className="flex-1 space-y-2">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#0a1628]/35 mb-2">Course Inputs</p>
          {inputs.map(row => (
            <div key={row.label} className="px-3 py-2 rounded-lg bg-[#f8fafc] border border-gray-100 text-[13px] font-semibold text-[#0a1628]/70" style={{ borderLeft: `2px solid ${row.color}` }}>
              {row.label}
            </div>
          ))}
        </div>

        {/* Arrow */}
        <div className="shrink-0 flex flex-col items-center gap-1">
          <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
            <path d="M1 8h28M22 2l8 6-8 6" stroke="#228DC1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-[9px] font-black uppercase tracking-[0.12em] text-[#228DC1]/70">compile</span>
        </div>

        {/* Outputs */}
        <div className="flex-1 space-y-2">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#0a1628]/35 mb-2">Policy Outputs</p>
          {outputs.map(row => (
            <div key={row.label} className="px-3 py-2 rounded-lg bg-[#f8fafc] border border-gray-100 text-[13px] font-semibold text-[#0a1628]/70" style={{ borderLeft: `2px solid ${row.color}` }}>
              {row.label}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-[#f0fdf4] border border-[#059669]/20">
        <span className="text-[14px] text-[#059669] font-semibold">Policy layer compiled. AI ready to teach.</span>
      </div>
    </div>
  )
}

function MasteryStoryVisual() {
  const skills = [
    { label: 'Variables & Scoping', pct: 32, color: '#e11d48', status: 'Needs attention' },
    { label: 'Syntax & Fundamentals', pct: 55, color: '#d97706', status: 'Practicing' },
    { label: 'Functional Programming', pct: 0, color: '#9ca3af', status: 'No data yet' },
  ]

  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(10,22,40,0.07)]">
      <div className="px-6 py-5 bg-[#f8fafc] border-b border-gray-100 flex items-start justify-between">
        <div>
          <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#0a1628]/35 mb-2">Skill Mastery</p>
          <h3 className="text-[#0a1628] text-[22px] font-black leading-tight">Aruva turns learning into signals</h3>
          <p className="text-[13px] text-[#0a1628]/55 mt-2">Real-time quantification of academic competency and cognitive growth.</p>
        </div>
        <div className="rounded-2xl bg-white px-5 py-3 text-center border border-gray-200 shadow-[0_6px_18px_rgba(10,22,40,0.06)]">
          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#0a1628]/35">Global mastery</p>
          <p className="text-[24px] font-black text-[#0a1628] leading-none mt-1">22%</p>
        </div>
      </div>

      <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-5 p-6 bg-white">
        <div className="space-y-4">
          {skills.map((skill) => (
            <div key={skill.label} className="rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-[0_2px_12px_rgba(10,22,40,0.04)]">
              <div className="flex items-center justify-between gap-4 mb-3">
                <div>
                  <p className="text-[14px] font-bold text-[#0a1628]">{skill.label}</p>
                  <p className="text-[10px] font-black uppercase tracking-[0.14em]" style={{ color: skill.color }}>{skill.status}</p>
                </div>
                <p className="text-[18px] font-black" style={{ color: skill.color }}>{skill.pct}%</p>
              </div>
              <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${skill.pct}%`, background: skill.color }} />
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-gray-100 bg-[#fbfcfe] p-5 flex flex-col justify-between">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#0a1628]/35 mb-4">Bloom mastery</p>
            <div className="mx-auto mb-5 h-40 w-40 rounded-full border border-[#228DC1]/15 bg-white flex items-center justify-center">
              <div className="h-24 w-24 rounded-[28px] bg-[#1e2d7d]/70 rotate-45 shadow-[0_10px_30px_rgba(30,45,125,0.22)]" />
            </div>
            <p className="text-[13px] font-semibold text-[#0a1628]/70">Weakest areas: <span className="text-[#0a1628]">Create, Evaluate</span></p>
          </div>
          <div className="mt-5 rounded-xl bg-[#e8f4fc] border border-[#b8ddf0] px-4 py-3">
            <p className="text-[13px] font-bold text-[#228DC1]">Insight captured</p>
            <p className="text-[12px] text-[#0a1628]/50 mt-1">Next tutor prompt adapts to the detected gap.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function TutorVisual() {
  const messages = [
    { role: 'student', text: "Can you just solve Porter's Five Forces for me?" },
    { role: 'aruva',   text: "Let's build that understanding together. Which of the five forces do you think has the strongest impact here — start with your instinct." },
    { role: 'student', text: "Maybe buyer power? Because there are lots of alternatives?" },
    { role: 'aruva',   text: "Good instinct. Now think about what actually gives buyers that power — is it the number of alternatives, switching costs, or something else?" },
    { role: 'student', text: "I think it's switching costs. If it's easy to switch, buyers have more leverage." },
  ]
  const signal = { label: 'Mastery signal captured', sub: 'Apply level · Bloom taxonomy updated', color: '#228DC1', bg: '#e8f4fc', border: '#b8ddf0' }

  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(10,22,40,0.07)]">
      {/* Header */}
      <div className="px-5 py-3.5 flex items-center justify-between bg-[#f8fafc] border-b border-gray-100">
        <div className="flex items-center gap-2.5">
          <div className="bg-white rounded-lg flex items-center px-2 border border-gray-200 shadow-sm" style={{ height: 28 }}>
            <img src="/aruva-logo.png" alt="Aruva" style={{ height: 14, width: 'auto', objectFit: 'contain' }}
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
          </div>
          <span className="text-[14px] font-semibold text-[#0a1628]/65">Adaptive Tutor</span>
          <span className="text-[#0a1628]/20">·</span>
          <span className="text-[13px] text-[#0a1628]/40">Business Strategy 101 · Week 3</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-bold uppercase tracking-[0.12em] px-2.5 py-1 rounded-full text-[#059669] bg-[#f0fdf4] border border-[#059669]/20">Socratic mode</span>
        </div>
      </div>

      {/* Student info strip */}
      <div className="flex items-center gap-3 px-5 py-3 border-b border-gray-100 bg-white">
        <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[11px] font-black shrink-0" style={{ background: '#f59e0b' }}>MG</div>
        <div>
          <p className="text-[13px] font-semibold text-[#0a1628] leading-none">Maria Garcia</p>
          <p className="text-[11px] text-[#0a1628]/45 mt-0.5">Business Strategy 101 · Analogy-oriented learner</p>
        </div>
        <div className="ml-auto flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#fef3c7] border border-[#d97706]/20">
          <div className="w-1.5 h-1.5 rounded-full bg-[#d97706]" />
          <span className="text-[11px] font-semibold text-[#d97706]">Week 3 — Porter's Five Forces</span>
        </div>
      </div>

      {/* Chat messages */}
      <div className="p-5 space-y-4 bg-[#fafafa]">
        {messages.map((m, i) => (
          m.role === 'student' ? (
            <div key={i} className="flex justify-end">
              <div className="px-4 py-3 rounded-2xl rounded-br-sm max-w-[78%] bg-[#f59e0b] shadow-[0_4px_14px_rgba(245,158,11,0.22)]">
                <p className="text-white text-[13px] leading-relaxed">{m.text}</p>
              </div>
            </div>
          ) : (
            <div key={i} className="flex gap-2.5 items-start">
              <div className="rounded-xl flex items-center justify-center shrink-0 bg-white border border-gray-200 shadow-sm px-2" style={{ height: 32, minWidth: 32 }}>
                <img src="/aruva-logo.png" alt="Aruva" style={{ height: 13, width: 'auto', objectFit: 'contain' }}
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
              </div>
              <div className="flex-1 px-4 py-3 rounded-2xl rounded-tl-sm bg-white border border-gray-100 shadow-[0_2px_12px_rgba(10,22,40,0.06)]">
                <p className="text-[#0a1628]/80 text-[13px] leading-relaxed">{m.text}</p>
                {i === 1 && (
                  <div className="flex items-center gap-1.5 mt-2.5 pt-2.5 border-t border-gray-100">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#228DC1" strokeWidth="2.5"><path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.1-1.1m-.757-4.9a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" strokeLinecap="round"/></svg>
                    <span className="text-[11px] font-semibold text-[#228DC1]">Porter (2008), Ch. 2 — cited source</span>
                  </div>
                )}
              </div>
            </div>
          )
        ))}

        {/* Mastery signal */}
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl" style={{ background: signal.bg, border: `1px solid ${signal.border}` }}>
          <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: signal.color }}>
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <div>
            <p className="text-[12px] font-bold" style={{ color: signal.color }}>{signal.label}</p>
            <p className="text-[11px] text-[#0a1628]/50">{signal.sub}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function AnalyticsVisual() {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-[0_4px_24px_rgba(10,22,40,0.07)]">
      <div className="flex items-start justify-between mb-5 pb-4 border-b border-gray-100">
        <div>
          <p className="text-[14px] font-semibold uppercase tracking-[0.16em] text-[#0a1628]/40 mb-1">Professor Dashboard</p>
          <p className="text-[#0a1628] font-semibold text-[14px]">Business Strategy 101, Week 3</p>
        </div>
        <div className="text-right">
          <p className="font-black text-2xl leading-none text-[#059669]">87%</p>
          <p className="text-[14px] text-[#0a1628]/40 mt-0.5">Engagement</p>
        </div>
      </div>
      <div className="space-y-3 mb-5">
        {[
          { label: 'Competitive Rivalry', pct: 88, color: '#228DC1', gap: false },
          { label: 'Buyer Power',         pct: 55, color: '#d97706', gap: true  },
          { label: 'Supplier Power',      pct: 72, color: '#228DC1', gap: false },
        ].map(item => (
          <div key={item.label}>
            <div className="flex justify-between items-center mb-1.5">
              <p className="text-[#0a1628]/55 text-[14px] font-medium">{item.label}</p>
              <div className="flex items-center gap-2">
                {item.gap && <span className="text-[14px] font-semibold px-1.5 py-0.5 rounded text-[#d97706] bg-[#fef3c7] border border-[#d97706]/20">Gap</span>}
                <span className="text-[#0a1628] text-[14px] font-semibold">{item.pct}%</span>
              </div>
            </div>
            <div className="h-1.5 rounded-full bg-gray-100">
              <div className="h-full rounded-full" style={{ width: item.pct + '%', backgroundColor: item.color }} />
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-start gap-3 px-4 py-3 rounded-xl bg-[#fef3c7] border border-[#d97706]/20">
        <span className="text-[13px] shrink-0 mt-0.5 font-bold" style={{ color: '#d97706' }}>▲</span>
        <div>
          <p className="text-[14px] font-semibold text-[#d97706]">3 students at risk on Buyer Power</p>
          <p className="text-[14px] text-[#d97706]/70 mt-0.5">Gap detected in Week 3. Intervene now</p>
        </div>
      </div>
    </div>
  )
}

/*
function TutorVisualOld() {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(10,22,40,0.07)]">
      <div className="px-5 py-3 flex items-center justify-between bg-[#f8fafc] border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="bg-white rounded-lg flex items-center px-2 border border-gray-200 shadow-sm" style={{ height: 26 }}>
            <img
              src="/aruva-logo.png"
              alt="Aruva"
              style={{ height: 14, width: 'auto', objectFit: 'contain' }}
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
            />
          </div>
          <span className="text-[#0a1628]/60 text-[14px] font-semibold">Tutor</span>
          <span className="text-[#0a1628]/20 text-[14px]">·</span>
          <span className="text-[#0a1628]/40 text-[14px]">Week 3 · Socratic mode</span>
        </div>
        <span className="text-[14px] font-semibold px-2 py-0.5 rounded-full text-[#059669] bg-[#f0fdf4] border border-[#059669]/20">No direct answers</span>
      </div>
      Messages
      <div className="p-5 space-y-4 bg-[#fafafa]">
        <div className="flex justify-end">
          <div className="px-4 py-2.5 rounded-2xl rounded-br-sm max-w-[80%] bg-[#228DC1]">
            <p className="text-white text-[14px] leading-relaxed">Can you solve this Porter's Five Forces analysis for me?</p>
          </div>
        </div>
        <div className="flex gap-2.5 items-start">
          <div className="rounded-md flex items-center justify-center shrink-0 bg-white border border-gray-200 shadow-sm px-2" style={{ height: 28, minWidth: 28 }}>
            <img
              src="/aruva-logo.png"
              alt="Aruva"
              style={{ height: 12, width: 'auto', objectFit: 'contain' }}
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
            />
          </div>
          <div className="flex-1 px-4 py-3 rounded-2xl rounded-tl-sm bg-white border border-gray-100 shadow-sm">
            <p className="text-[#0a1628]/80 text-[14px] leading-relaxed mb-2.5">Which of the five forces has the strongest impact here? Start with your instinct.</p>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[14px] font-semibold text-[#228DC1] bg-[#e5f4fa] border border-[#228DC1]/20">
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.1-1.1m-.757-4.9a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Porter, 2008, Ch.2
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#f0fdf4] border border-[#059669]/20">
          <div className="w-1.5 h-1.5 rounded-full shrink-0 bg-[#059669]" />
          <p className="text-[14px] font-semibold text-[#059669]">Mastery signal captured. Learning Curve updated</p>
        </div>
      </div>
    </div>
  )
}
*/


// -- Platform architecture diagram ---------------------------------------------
function PlatformDiagram() {
  const sectionRef = React.useRef<HTMLDivElement>(null)
  const [prog, setProg] = React.useState(0)

  React.useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const onScroll = () => {
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const p = (vh - rect.top) / (rect.height + vh)
      setProg(Math.max(0, Math.min(1, p)))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const integOn = prog > 0.06
  const conn1On = prog > 0.18
  const s0On    = prog > 0.24
  const s1On    = prog > 0.32
  const s2On    = prog > 0.40
  const s3On    = prog > 0.48
  const conn2On = prog > 0.58
  const ui0On   = prog > 0.65
  const ui1On   = prog > 0.70
  const ui2On   = prog > 0.75
  const ui3On   = prog > 0.80
  const ui4On   = prog > 0.85

  const layerOn = [s0On, s1On, s2On, s3On]
  const uiOn    = [ui0On, ui1On, ui2On, ui3On, ui4On]


  const layers = [
    { label:'Smart Syllabus',           sub:'How the AI knows your course',        color:'#228DC1', chips:['Outcome mapping','Teaching rules','Rubric logic','AI boundaries'] },
    { label:'Learning Curve AI',         sub:'Each student, individually tracked', color:'#7c3aed', chips:['Mastery tracking','Confidence signals','Workload modelling','Early risk signals'] },
    { label:'Governance Layer',          sub:'Your institution, your rules',        color:'#059669', chips:['Role based access','Full audit trail','Data residency','Policy enforcement'] },
    { label:'Traceable Knowledge Layer', sub:'Every answer, fully sourced',         color:'#d97706', chips:['Source provenance','Citation resolver','Attribution','AI auditability'] },
  ]
  const lms = [
    { name:'Canvas',      color:'#E66000', logo:'/logos/canvas.svg' },
    { name:'Moodle',      color:'#F98012', logo:'/logos/moodle.svg' },
    { name:'Blackboard',  color:'#2E3191', logo:'/logos/blackboard.svg' },
    { name:'Brightspace', color:'#D31532', logo:'/logos/brightspace.svg' },
  ]
  const dataSrc = ['SIS / Student Records','Library Systems','Assessment Tools','SSO / SAML','Email & Notifications','Attendance Data']
  const surfaces = [
    { label:'Adaptive Tutor',          desc:'Teaches from your course, not the open web',   color:'#228DC1' },
    { label:'Professor Dashboard',     desc:'See where your class is, right now',            color:'#7c3aed' },
    { label:'Formative Assessment',    desc:'Spot the gaps while you can still close them',  color:'#059669' },
    { label:'Student Planner',         desc:'Organised around what matters this week',       color:'#ea580c' },
    { label:'Institutional Analytics', desc:'One view across every course you run',          color:'#dc2626' },
  ]

  const T = 'opacity 0.45s cubic-bezier(0.4,0,0.2,1), transform 0.45s cubic-bezier(0.4,0,0.2,1)'
  const on  = (active: boolean, delay = 0): React.CSSProperties => ({
    opacity:   active ? 1 : 0,
    transform: active ? 'translateY(0)' : 'translateY(14px)',
    transition: T,
    transitionDelay: `${delay}ms`,
  })
  // Workflow node connector
  const NodeConnector = ({ active, label }: { active: boolean; label?: string }) => (
    <div className="flex flex-col items-center gap-0" style={{ padding:'4px 0' }}>
      <div style={{ width:2, height:20, background: active ? '#94a3b8' : '#e2e8f0', transition:'background 0.4s ease', borderRadius:1 }} />
      {label && (
        <>
          <div style={{ padding:'4px 10px', borderRadius:6, background: active ? '#f8fafc' : '#f1f5f9', border:`1px solid ${active ? '#cbd5e1' : '#e2e8f0'}`, transition:'all 0.3s ease' }}>
            <span style={{ fontSize:10, fontWeight:700, color: active ? '#64748b' : '#94a3b8', letterSpacing:'0.1em', textTransform:'uppercase' }}>{label}</span>
          </div>
          <div style={{ width:2, height:20, background: active ? '#94a3b8' : '#e2e8f0', transition:'background 0.4s ease', borderRadius:1 }} />
        </>
      )}
      <svg width="10" height="6" viewBox="0 0 10 6" style={{ opacity: active ? 1 : 0.2, transition:'opacity 0.4s ease' }}>
        <path d="M1 1l4 4 4-4" stroke="#64748b" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  )

  return (
    <section ref={sectionRef} className="border-t border-gray-100 bg-[#f8fafc]" style={{ minHeight:'220vh' }}>
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 w-full">
          <div className="grid lg:grid-cols-[400px_1fr] gap-24 items-center">

            {/* ── LEFT: static text ── */}
            <div className="flex flex-col gap-8">
              <div>
                <p className="type-label text-[#228DC1] mb-5">Architecture</p>
                <h2 className="font-heading text-[#0a1628] mb-5">
                  Four layers.<br/>
                  <span className="bg-[#fde68a] px-1.5 py-0.5 rounded-sm">One platform.</span>
                </h2>
                <p className="text-[#0a1628]/60 text-[16px] leading-[1.75]">
                  Not a bundle of tools. One connected system where every layer talks to the next — from your LMS through to every student interface.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                {layers.map(l => (
                  <div key={l.label} className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ background: l.color }} />
                    <span className="text-[14px] font-semibold text-[#0a1628]/70">{l.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT: workflow nodes ── */}
            <div className="flex flex-col items-stretch"
              style={{ backgroundImage:'radial-gradient(circle, #cbd5e1 1px, transparent 1px)', backgroundSize:'24px 24px', padding:'28px 28px', borderRadius:20, border:'1px solid #e2e8f0' }}>

              {/* Node 1: Integrations */}
              <div style={{ ...on(integOn), background:'#fff', border:'1px solid #e2e8f0', borderRadius:12, padding:'16px 20px', boxShadow:'0 2px 12px rgba(10,22,40,0.06)' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div style={{ width:28, height:28, borderRadius:8, background:'#eff6ff', border:'1px solid #bfdbfe', display:'flex', alignItems:'center', justifyContent:'center' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <div>
                    <p style={{ fontSize:13, fontWeight:700, color:'#0a1628', lineHeight:1.2 }}>Integrations</p>
                    <p style={{ fontSize:11, color:'#64748b', marginTop:1 }}>Your existing tools connect here</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p style={{ fontSize:10, fontWeight:800, color:'#94a3b8', textTransform:'uppercase', letterSpacing:'0.14em', marginBottom:8 }}>VLE / LMS</p>
                    <div className="flex flex-wrap gap-1.5">
                      {lms.map(l => (
                        <div key={l.name} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white"
                          style={{ border:`1.5px solid ${l.color}35` }}>
                          <img src={l.logo} alt={l.name} className="w-3.5 h-3.5 object-contain" />
                          <span style={{ fontSize:12, fontWeight:600, color: l.color }}>{l.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p style={{ fontSize:10, fontWeight:800, color:'#94a3b8', textTransform:'uppercase', letterSpacing:'0.14em', marginBottom:8 }}>Data Sources</p>
                    <div className="flex flex-wrap gap-1.5">
                      {dataSrc.map(d => (
                        <span key={d} style={{ padding:'3px 10px', borderRadius:6, background:'#f8fafc', border:'1px solid #e2e8f0', fontSize:11, fontWeight:500, color:'#475569' }}>{d}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <NodeConnector active={conn1On} label="Sync & Deploy" />

              {/* Node 2: Platform layers */}
              <div style={{ background:'#fff', border:'1px solid #e2e8f0', borderRadius:12, overflow:'hidden', boxShadow:'0 2px 12px rgba(10,22,40,0.06)' }}>
                <div style={{ ...on(s0On), background:'#0f172a', padding:'10px 20px', display:'flex', alignItems:'center', gap:8 }}>
                  <div style={{ width:6, height:6, borderRadius:'50%', background:'#22d3ee' }} />
                  <p style={{ fontSize:11, fontWeight:700, color:'rgba(255,255,255,0.65)', letterSpacing:'0.2em', textTransform:'uppercase' }}>Aruva Intelligent Education Platform</p>
                </div>
                {layers.map((layer, i) => (
                  <div key={layer.label}
                    style={{
                      ...on(layerOn[i], i * 70),
                      display:'flex', alignItems:'center', gap:16,
                      padding:'14px 20px',
                      borderBottom: i < layers.length - 1 ? '1px solid #f1f5f9' : 'none',
                      borderLeft: `3px solid ${layerOn[i] ? layer.color : '#e2e8f0'}`,
                      background: layerOn[i] ? `${layer.color}05` : '#fff',
                      transition: `${T}, border-left-color 0.35s ease ${i*70}ms, background 0.35s ease ${i*70}ms`,
                    }}>
                    <div style={{ width:160, flexShrink:0 }}>
                      <p style={{ fontSize:13, fontWeight:700, color:'#0a1628', lineHeight:1.25 }}>{layer.label}</p>
                      <p style={{ fontSize:11, color:'#94a3b8', marginTop:2 }}>{layer.sub}</p>
                    </div>
                    <div style={{ display:'flex', flexWrap:'wrap', gap:6, flex:1 }}>
                      {layer.chips.map(chip => (
                        <span key={chip} style={{ padding:'3px 10px', borderRadius:6, fontSize:11, fontWeight:600, background: layer.color+'10', border:`1px solid ${layer.color}28`, color:'#334155' }}>
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <NodeConnector active={conn2On} label="Aruva API" />

              {/* Node 3: User Interface */}
              <div style={{ ...on(ui0On), background:'#fff', border:'1px solid #e2e8f0', borderRadius:12, padding:'16px 20px', boxShadow:'0 2px 12px rgba(10,22,40,0.06)' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div style={{ width:28, height:28, borderRadius:8, background:'#f0fdf4', border:'1px solid #bbf7d0', display:'flex', alignItems:'center', justifyContent:'center' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="2" y="3" width="20" height="14" rx="2" stroke="#22c55e" strokeWidth="2"/><path d="M8 21h8M12 17v4" stroke="#22c55e" strokeWidth="2" strokeLinecap="round"/></svg>
                  </div>
                  <div>
                    <p style={{ fontSize:13, fontWeight:700, color:'#0a1628', lineHeight:1.2 }}>User Interface</p>
                    <p style={{ fontSize:11, color:'#64748b', marginTop:1 }}>Five surfaces, one platform</p>
                  </div>
                </div>
                <div style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:8 }}>
                  {surfaces.map((s, i) => (
                    <div key={s.label}
                      style={{
                        padding:'10px 10px', borderRadius:10, borderTop:`2.5px solid ${uiOn[i] ? s.color : '#e2e8f0'}`,
                        background: uiOn[i] ? s.color+'08' : '#f8fafc',
                        opacity: uiOn[i] ? 1 : 0.4,
                        transform: uiOn[i] ? 'translateY(0)' : 'translateY(6px)',
                        transition:`opacity 0.4s ease ${i*60}ms, transform 0.4s ease ${i*60}ms, background 0.3s ease, border-top-color 0.3s ease`,
                      }}>
                      <p style={{ fontSize:12, fontWeight:700, color:'#0f172a', lineHeight:1.3 }}>{s.label}</p>
                      <p style={{ fontSize:10.5, color:'#94a3b8', marginTop:3, lineHeight:1.4 }}>{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



// -- Bloom Insight Section -------------------------------------------------------
const BLOOM_SEMS = [
  { id:'S1', label:'Semester 1', grade:62, gradeLabel:'D+',
    bloom:[65,55,50,42,28,52],
    cohortAvg:[62,54,58,47,44,56],
    headline:'Higher-order thinking gaps flagged early',
    detail:'The student recalls facts well but Evaluate and Analyse are underdeveloped. Aruva surfaces this in week 2, not at the end of term.',
    delta: null, accent:'#e11d48' },
  { id:'S2', label:'Semester 2', grade:71, gradeLabel:'C+',
    bloom:[78,72,70,66,52,74],
    cohortAvg:[70,61,65,55,50,63],
    headline:'Targeted intervention closes the evaluation gap',
    detail:'Focused practice on Evaluate (weeks 4 to 6) drove a 24-point jump in that dimension. Overall grade improved 9%. Their biggest single semester gain.',
    delta:'+9%', accent:'#d97706' },
  { id:'S3', label:'Semester 3', grade:81, gradeLabel:'B',
    bloom:[88,85,84,80,76,91],
    cohortAvg:[78,68,73,64,70,62],
    headline:'Balanced mastery across all six levels',
    detail:'All six dimensions above 76%. Now in the top quartile of the cohort, a 19-point improvement from Semester 1.',
    delta:'+19%', accent:'#059669' },
]
const BLOOM_LABELS  = ['Remember','Understand','Apply','Analyse','Evaluate','Create']
const BLOOM_SIMPLE  = ['Recall facts','Explain ideas','Use knowledge','Break it down','Make judgements','Build new ideas']

// -- DOK data -------------------------------------------------------------------
const DOK_SEMS = [
  { id:'S1', label:'Semester 1', grade:62, gradeLabel:'D+',
    dok:[72, 54, 31, 38], cohortAvg:[68, 62, 55, 52],
    headline:'Strategic thinking is the ceiling',
    detail:'Strong recall and surface-level skills, but DOK 3 and DOK 4 tasks reveal a clear ceiling. Aruva flags this gap before the mid-term.',
    delta: null, accent:'#e11d48' },
  { id:'S2', label:'Semester 2', grade:71, gradeLabel:'C+',
    dok:[82, 71, 58, 62], cohortAvg:[70, 65, 58, 55],
    headline:'Reasoning depth starts to unlock',
    detail:'Targeted tasks at DOK 3 drove a 27-point jump. DOK 4 extended thinking is now emerging, opening the door to higher-order performance.',
    delta:'+9%', accent:'#d97706' },
  { id:'S3', label:'Semester 3', grade:81, gradeLabel:'B',
    dok:[91, 86, 79, 83], cohortAvg:[74, 70, 66, 63],
    headline:'All four depths operating at mastery',
    detail:'Performing above 79% across all DOK levels. Extended thinking tasks that were previously a gap are now a strength. Top quartile cohort result.',
    delta:'+19%', accent:'#059669' },
]
const DOK_LABELS  = ['DOK 1','DOK 2','DOK 3','DOK 4']
const DOK_NAMES   = ['Recall & Reproduce','Skills & Concepts','Strategic Thinking','Extended Thinking']
const DOK_SIMPLE  = ['Recall, define, identify','Classify, infer, estimate','Analyse, hypothesise, cite evidence','Design, connect, synthesise']
const DOK_COLORS  = ['#60a5fa','#34d399','#f59e0b','#a78bfa']
// WCAG AA-compliant text colours (≥4.5:1 on white) — darker shade of each DOK colour
const DOK_TEXT_COLORS = ['#1565a8','#0a7550','#a05a00','#5b21b6']
const DOK_KEYWORDS = [
  ['Recall','Define','State','Identify','List','Name','Quote','Measure'],
  ['Classify','Infer','Categorise','Compare','Estimate','Construct','Modify','Graph'],
  ['Analyse','Hypothesise','Cite Evidence','Draw Conclusions','Formulate','Differentiate','Investigate'],
  ['Design','Connect','Synthesise','Apply Concepts','Create','Critique','Prove'],
]

// -- Multimodal capabilities section ------------------------------------------

const MM_MODALITIES = [
  { faIcon: faMicrophone, label: 'Voice', color: '#228DC1', desc: 'Spoken narration for any concept' },
  { faIcon: faPen,        label: 'Text',  color: '#7c3aed', desc: 'Step-by-step written solutions'   },
  { faIcon: faImage,      label: 'Image', color: '#059669', desc: 'AI-generated illustrations'        },
  { faIcon: faChartLine,  label: 'Graph', color: '#d97706', desc: 'Function graphs and data plots'    },
]
const MM_VOICE_BARS   = [0.15,0.55,1.0,0.35,0.8,0.2,0.95,0.5,0.75,0.12,1.0,0.4,0.65,0.9,0.28,0.7,0.45,0.85,0.18,0.6,1.0,0.3,0.78,0.42,0.9,0.22,0.68,0.5]
const MM_VOICE_DELAYS = [0,0.16,0.06,0.28,0.04,0.34,0.10,0.44,0.20,0.13,0.38,0.03,0.26,0.08,0.42,0.18,0.32,0.07,0.24,0.46,0.02,0.30,0.14,0.40,0.09,0.36,0.22,0.50]
const MM_STEPS = [
  { label:'Given',   val:'x² − 5x + 6 = 0' },
  { label:'Factor',  val:'(x − 2)(x − 3) = 0' },
  { label:'Solve',   val:'x = 2  or  x = 3' },
  { label:'Check ✓', val:'4 − 10 + 6 = 0 ✓' },
]

const MM_TEXT_CONVERSATIONS = [
  {
    name: 'Maria Garcia',
    initials: 'MG',
    style: 'Analogy-oriented',
    accent: '#f59e0b',
    soft: '#fff7ed',
    border: '#fed7aa',
    prompt: 'What does mitochondria actually do?',
    response: 'Think of mitochondria as the power station of the cell. Just like a city needs electricity, the cell needs ATP to keep everything running.',
    followUp: 'So mitochondria basically create energy for the cell?',
    result: 'Analogy understood',
    confidence: 92,
  },
  {
    name: 'Elena Rossi',
    initials: 'ER',
    style: 'Analytical',
    accent: '#7c3aed',
    soft: '#f5f3ff',
    border: '#ddd6fe',
    prompt: 'If oxygen decreases, what happens to ATP?',
    response: 'ATP production becomes less efficient because aerobic respiration depends on oxygen. The cell has less usable energy available.',
    followUp: 'So oxygen level changes the energy output?',
    result: 'Reasoning depth improved',
    confidence: 94,
  },
]

function MMTextDemo() {
  const [active, setActive] = React.useState(0)
  const [score, setScore] = React.useState(MM_TEXT_CONVERSATIONS[0].confidence)
  const activeStudent = MM_TEXT_CONVERSATIONS[active]
  const activeExample = { equation: '', topic: '', result: '', steps: [] as Array<{ label: string; val: string }> }
  const stepCount = 0

  React.useEffect(() => {
    const id = setInterval(() => {
      setActive(prev => (prev + 1) % MM_TEXT_CONVERSATIONS.length)
    }, 2600)
    return () => clearInterval(id)
  }, [])

  React.useEffect(() => {
    let raf: number | undefined
    const from = score
    const to = activeStudent.confidence
    const start = performance.now()
    const step = (now: number) => {
      const pct = Math.min((now - start) / 520, 1)
      const eased = 1 - Math.pow(1 - pct, 3)
      setScore(Math.round(from + (to - from) * eased))
      if (pct < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => { if (raf) cancelAnimationFrame(raf) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active])

  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', gap:14, padding:'24px 28px' }}>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(2, minmax(0, 1fr))', gap:10 }}>
        {MM_TEXT_CONVERSATIONS.map((student, index) => (
          <button key={student.name} type="button" onClick={() => setActive(index)}
            style={{ display:'flex', alignItems:'center', gap:10, textAlign:'left', padding:'10px 12px', borderRadius:14, background: active === index ? student.soft : '#f8fafc', border:`1px solid ${active === index ? student.border : '#e5e7eb'}`, boxShadow: active === index ? `0 10px 24px ${student.accent}22` : 'none', transition:'all 0.25s ease' }}>
            <span style={{ width:34, height:34, borderRadius:10, background: active === index ? student.accent : '#e5e7eb', color: active === index ? '#fff' : '#94a3b8', display:'flex', alignItems:'center', justifyContent:'center', fontSize:11, fontWeight:900, flexShrink:0 }}>{student.initials}</span>
            <span style={{ minWidth:0 }}>
              <span style={{ display:'block', fontSize:11, fontWeight:900, color: active === index ? student.accent : 'rgba(10,22,40,0.42)', letterSpacing:'0.12em', textTransform:'uppercase', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}>{student.name}</span>
              <span style={{ display:'block', fontSize:12, fontWeight:700, color:'rgba(10,22,40,0.62)', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}>{student.style}</span>
            </span>
          </button>
        ))}
      </div>
      <div key={active} style={{ flex:1, display:'grid', gridTemplateColumns:'minmax(0, 1fr) 104px', gap:14, alignItems:'stretch' }}>
        <div style={{ display:'flex', flexDirection:'column', gap:10, justifyContent:'center' }}>
          <div style={{ alignSelf:'flex-end', maxWidth:'78%', padding:'10px 14px', borderRadius:'18px 18px 4px 18px', background:activeStudent.accent, boxShadow:`0 12px 22px ${activeStudent.accent}28`, opacity:0, transform:'translateY(6px)', animation:'mmCardIn 0.32s ease 0.05s forwards' }}>
            <p style={{ color:'#fff', fontSize:13, lineHeight:1.5, fontWeight:600 }}>{activeStudent.prompt}</p>
          </div>
          <div style={{ display:'flex', alignItems:'flex-start', gap:10, opacity:0, transform:'translateY(6px)', animation:'mmCardIn 0.32s ease 0.25s forwards' }}>
            <div style={{ width:30, height:30, borderRadius:10, background:'#fff', border:'1px solid #e5e7eb', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 4px 12px rgba(10,22,40,0.08)', flexShrink:0 }}>
              <img src="/aruva-logo.png" alt="Aruva" style={{ height:12, width:'auto', objectFit:'contain' }} onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
            </div>
            <div style={{ flex:1, padding:'13px 15px', borderRadius:'4px 18px 18px 18px', background:'#fff', border:'1px solid #eef2f7', boxShadow:'0 10px 24px rgba(10,22,40,0.06)' }}>
              <p style={{ color:'rgba(10,22,40,0.78)', fontSize:13, lineHeight:1.55 }}>{activeStudent.response}</p>
            </div>
          </div>
          <div style={{ alignSelf:'flex-end', maxWidth:'74%', padding:'10px 14px', borderRadius:'18px 18px 4px 18px', background:'#f8fafc', border:'1px solid #eef2f7', opacity:0, transform:'translateY(6px)', animation:'mmCardIn 0.32s ease 0.45s forwards' }}>
            <p style={{ color:'rgba(10,22,40,0.74)', fontSize:13, lineHeight:1.45 }}>{activeStudent.followUp}</p>
          </div>
        </div>
        <div style={{ display:'flex', flexDirection:'column', justifyContent:'center', gap:12, padding:'12px', borderRadius:14, background:activeStudent.soft, border:`1px solid ${activeStudent.border}` }}>
          <div>
            <p style={{ fontSize:9, color:'rgba(10,22,40,0.42)', fontWeight:900, textTransform:'uppercase', letterSpacing:'0.12em', marginBottom:4 }}>Result</p>
            <p style={{ fontSize:13, color:activeStudent.accent, fontWeight:900, lineHeight:1.25 }}>{activeStudent.result}</p>
          </div>
          <div>
            <p style={{ fontSize:22, color:activeStudent.accent, fontWeight:900, lineHeight:1 }}>{score}%</p>
            <p style={{ fontSize:9, color:'rgba(10,22,40,0.40)', fontWeight:800, textTransform:'uppercase', letterSpacing:'0.08em', marginTop:2 }}>confidence</p>
          </div>
          <div style={{ width:'100%', height:7, borderRadius:999, background:'rgba(10,22,40,0.08)', overflow:'hidden' }}>
            <div style={{ height:'100%', width:`${score}%`, borderRadius:999, background:activeStudent.accent, transition:'width 0.18s ease' }}/>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', justifyContent:'center', gap:13, padding:'30px 36px' }}>
      <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:2 }}>
        <div style={{ flex:1 }}>
          <p style={{ fontSize:12, color:'rgba(10,22,40,0.42)', fontWeight:700, lineHeight:1.2 }}>Solving: {activeExample.equation}</p>
          <p style={{ fontSize:10.5, color:'rgba(10,22,40,0.32)', marginTop:3 }}>{activeExample.topic} · {stepCount} steps · equation updates automatically</p>
        </div>
        <div style={{ minWidth:78, textAlign:'right' }}>
          <p style={{ fontSize:20, fontWeight:800, color:'#7c3aed', lineHeight:1 }}>{score}%</p>
          <p style={{ fontSize:9, color:'rgba(10,22,40,0.36)', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.08em' }}>confidence</p>
        </div>
      </div>

      <div key={active} style={{ display:'flex', flexDirection:'column', gap:13 }}>
        {activeExample.steps.map((s, i) => (
          <div key={`${s.label}-${s.val}`} style={{
            display:'flex', alignItems:'center', gap:10,
            opacity:0, transform:'translateY(6px)',
            animation:`mmCardIn 0.36s ease ${0.1+i*0.18}s forwards`,
          }}>
            <span style={{ fontSize:9, fontWeight:800, color:'#7c3aed', letterSpacing:'0.10em', textTransform:'uppercase', minWidth:50, flexShrink:0 }}>{s.label}</span>
            <span style={{ fontSize:13, fontFamily:"'Roboto Mono','Courier New',monospace", color:'#1e1b4b', background:'rgba(124,58,237,0.07)', padding:'6px 12px', borderRadius:6, border:'1px solid rgba(124,58,237,0.16)', flex:1 }}>{s.val}</span>
          </div>
        ))}
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'1fr auto', alignItems:'center', gap:14, marginTop:6, padding:'10px 12px', background:'linear-gradient(90deg,rgba(124,58,237,0.10),rgba(124,58,237,0.03))', border:'1px solid rgba(124,58,237,0.16)', borderRadius:10 }}>
        <div>
          <p style={{ fontSize:10, color:'rgba(10,22,40,0.40)', textTransform:'uppercase', letterSpacing:'0.12em', fontWeight:800, lineHeight:1 }}>Result</p>
          <p style={{ fontSize:14, color:'#1e1b4b', fontWeight:800, lineHeight:1.2, marginTop:4 }}>{activeExample.result}</p>
        </div>
        <div style={{ width:74, height:8, borderRadius:999, background:'rgba(124,58,237,0.14)', overflow:'hidden' }}>
          <div style={{ height:'100%', width:`${score}%`, borderRadius:999, background:'linear-gradient(90deg,#a78bfa,#7c3aed)', transition:'width 0.18s ease' }}/>
        </div>
      </div>
    </div>
  )
}

function MMImageDemo() {
  const [stage, setStage] = React.useState(0)

  React.useEffect(() => {
    const timers = [
      window.setTimeout(() => setStage(1), 650),
      window.setTimeout(() => setStage(2), 1350),
      window.setTimeout(() => setStage(3), 2400),
    ]
    return () => timers.forEach(window.clearTimeout)
  }, [])

  return (
    <div style={{ display:'flex', flexDirection:'column', flex:1, background:'#ffffff' }}>
      <div style={{ borderBottom:'1px solid #e5e7eb', padding:'14px 18px', display:'flex', flexDirection:'column', gap:10, background:'#fafbfc' }}>
        <div style={{ alignSelf:'flex-end', maxWidth:'82%', opacity:0, animation:'mmCardIn 0.34s ease forwards' }}>
          <div style={{
            background:'#f59e0b', color:'#ffffff', padding:'10px 13px',
            borderRadius:'14px 14px 4px 14px', fontSize:12.5, fontWeight:700, lineHeight:1.45,
            boxShadow:'0 8px 18px rgba(245,158,11,0.18)',
          }}>
            Generate a clear photosynthesis diagram for my biology lesson.
          </div>
        </div>

        <div style={{
          display:'flex', alignItems:'center', justifyContent:'space-between', gap:12,
          opacity: stage >= 1 ? 1 : 0, transform: stage >= 1 ? 'translateY(0)' : 'translateY(6px)',
          transition:'opacity 0.32s ease, transform 0.32s ease',
        }}>
          <div style={{ display:'flex', alignItems:'center', gap:9, minWidth:0 }}>
            <div style={{ width:26, height:26, borderRadius:8, background:'#ecfdf5', border:'1px solid #bbf7d0', display:'flex', alignItems:'center', justifyContent:'center', color:'#059669', fontSize:10, fontWeight:900, flexShrink:0 }}>
              A
            </div>
            <span style={{ fontSize:11, color:'rgba(10,22,40,0.52)', fontFamily:"'Roboto Mono','Courier New',monospace", fontWeight:600, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}>
              {stage >= 2 ? 'generating output: photosynthesis lesson diagram' : 'prompt accepted: photosynthesis lesson diagram'}
            </span>
          </div>
          <span style={{
            fontSize:9, fontWeight:800,
            color: stage >= 3 ? '#059669' : '#d97706',
            background: stage >= 3 ? 'rgba(5,150,105,0.10)' : 'rgba(245,158,11,0.10)',
            padding:'4px 9px', borderRadius:999,
            border: stage >= 3 ? '1px solid rgba(5,150,105,0.22)' : '1px solid rgba(245,158,11,0.24)',
            letterSpacing:'0.07em', textTransform:'uppercase', flexShrink:0,
          }}>
            {stage >= 3 ? 'Generated' : 'Generating'}
          </span>
        </div>
      </div>

      <div style={{ flex:1, display:'flex', alignItems:'center', justifyContent:'center', padding:'14px 16px', background:'#f8fafc' }}>
        <div style={{ position:'relative', width:'100%', borderRadius:14, overflow:'hidden', border:'1px solid #dbe7dd', boxShadow:'0 16px 34px rgba(10,22,40,0.10)', background:'#ffffff' }}>
          <img
            src="/images/aruva-photosynthesis-realistic.png"
            alt="Generated photosynthesis lesson diagram"
            style={{
              display:'block', width:'100%', height:'auto', aspectRatio:'280 / 178', objectFit:'cover',
              opacity: stage >= 3 ? 1 : 0.22,
              filter: stage >= 3 ? 'none' : 'saturate(0.7) blur(1.2px)',
              transform: stage >= 3 ? 'scale(1)' : 'scale(1.01)',
              transition:'opacity 0.55s ease, filter 0.55s ease, transform 0.55s ease',
            }}
          />
          {stage < 3 && (
            <div style={{
              position:'absolute', inset:0, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
              background:'linear-gradient(180deg,rgba(248,250,252,0.76),rgba(255,255,255,0.62))',
            }}>
              <div style={{ display:'flex', gap:6, marginBottom:12 }}>
                {[0,1,2].map(i => (
                  <span key={i} style={{
                    width:8, height:8, borderRadius:'50%', background:'#059669',
                    animation:`waveBar ${0.7 + i * 0.12}s ease-in-out ${i * 0.12}s infinite`,
                  }} />
                ))}
              </div>
              <p style={{ fontSize:12, fontWeight:800, color:'#0a1628', marginBottom:4 }}>Generating image...</p>
              <p style={{ fontSize:11, color:'rgba(10,22,40,0.48)' }}>Aruva is turning the chat input into a visual lesson diagram.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
// Animated SVG path — remounts on key change so draw animation restarts
function AnimatedGraphPath({ d, color, animKey }: { d: string; color: string; animKey: number }) {
  const [revealed, setRevealed] = React.useState(false)
  React.useEffect(() => {
    setRevealed(false)
    const id = setTimeout(() => setRevealed(true), 60)
    return () => clearTimeout(id)
  }, [animKey, d])
  if (!d) return null
  return (
    <path d={d} fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
      pathLength="1" strokeDasharray="1" strokeDashoffset={revealed ? 0 : 1}
      style={{ transition: revealed ? 'stroke-dashoffset 1.3s cubic-bezier(0.4,0,0.2,1)' : 'none' }}
    />
  )
}

function MMGraphDemo() {
  const GW = 320, GH = 210, CX = 160, CY = 105, XS = 20, YS = 22
  const DEMO_DISPLAY = 'e^(-0.18x^2) * sin(4x) + 0.35cos(7x)'
  const DEMO_EVAL    = 'e^(-0.18*x^2) * sin(4*x) + 0.35*cos(7*x)'
  const EXAMPLES     = [
    { display:'e^(-0.18x^2) * sin(4x)', eval:'e^(-0.18*x^2) * sin(4*x)' },
    { display:'ln(x^2+1) - cos(3x)', eval:'ln(x^2+1) - cos(3*x)' },
    { display:'sin(x^2)/(1+x^2/8)', eval:'sin(x^2)/(1+x^2/8)' },
    { display:'sqrt(abs(x)) * cos(2x)', eval:'sqrt(abs(x)) * cos(2*x)' },
  ]
  const AUTO_GRAPHS  = [
    { display:'e^(-0.18x^2) * sin(4x) + 0.35cos(7x)', eval:'e^(-0.18*x^2) * sin(4*x) + 0.35*cos(7*x)' },
    { display:'ln(x^2+1) - cos(3x)', eval:'ln(x^2+1) - cos(3*x)' },
    { display:'sin(x^2)/(1+x^2/8)', eval:'sin(x^2)/(1+x^2/8)' },
    { display:'sqrt(abs(x)) * cos(2x)', eval:'sqrt(abs(x)) * cos(2*x)' },
  ]
  const [userFormula, setUserFormula] = React.useState('')
  const [activeFormula, setActiveFormula] = React.useState('')
  const [autoIndex, setAutoIndex] = React.useState(0)
  const [animKey, setAnimKey]   = React.useState(0)
  const [typed, setTyped]       = React.useState(0)
  const [demoPhase, setDemoPhase] = React.useState<'typing'|'done'>('typing')
  const [focused, setFocused]   = React.useState(false)
  const [inputVal, setInputVal] = React.useState('')

  // Auto-type demo formula on mount
  React.useEffect(() => {
    let i = 0
    const id = setInterval(() => {
      i++; setTyped(i)
      if (i >= DEMO_DISPLAY.length) {
        clearInterval(id)
        setTimeout(() => { setActiveFormula(DEMO_EVAL); setAnimKey(k => k+1); setDemoPhase('done') }, 350)
      }
    }, 70)
    return () => clearInterval(id)
  }, [])

  React.useEffect(() => {
    if (demoPhase !== 'done' || focused) return
    const id = setInterval(() => {
      setAutoIndex(prev => {
        const next = (prev + 1) % AUTO_GRAPHS.length
        setUserFormula(AUTO_GRAPHS[next].display)
        setInputVal(AUTO_GRAPHS[next].display)
        setActiveFormula(AUTO_GRAPHS[next].eval)
        setAnimKey(k => k + 1)
        return next
      })
    }, 1900)
    return () => clearInterval(id)
  }, [demoPhase, focused])

  function safeEval(expr: string, x: number): number | null {
    try {
      const s = expr
        .replace(/·/g,'*').replace(/×/g,'*').replace(/÷/g,'/')
        .replace(/\bsin\b/g,'Math.sin').replace(/\bcos\b/g,'Math.cos')
        .replace(/\btan\b/g,'Math.tan').replace(/\bsqrt\b/g,'Math.sqrt')
        .replace(/\babs\b/g,'Math.abs').replace(/\bln\b/g,'Math.log')
        .replace(/\blog\b/g,'Math.log10').replace(/\bpi\b/gi,'Math.PI')
        .replace(/\be\b/g,'Math.E').replace(/\^/g,'**')
      // eslint-disable-next-line no-new-func
      const v = new Function('x', `"use strict";try{const _v=(${s});return typeof _v==='number'&&isFinite(_v)?_v:null}catch{return null}`)(x)
      return v
    } catch { return null }
  }

  function buildPath(expr: string): string {
    let d = '', pen = false
    for (let px = 0; px <= GW; px += 1.5) {
      const x = (px - CX) / XS
      const y = safeEval(expr, x)
      if (y === null || Math.abs(y) > 7) { pen = false; continue }
      const py = CY - y * YS
      if (!pen) { d += `M${px.toFixed(1)},${py.toFixed(1)}`; pen = true }
      else d += ` L${px.toFixed(1)},${py.toFixed(1)}`
    }
    return d
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const f = inputVal.trim()
    if (!f) return
    setUserFormula(f)
    setActiveFormula(f)
    setAnimKey(k => k+1)
  }

  const handleExample = (ex: { display: string; eval: string }) => {
    setInputVal(ex.display); setUserFormula(ex.display); setActiveFormula(ex.eval); setAnimKey(k => k+1)
  }

  const displayLabel = demoPhase === 'typing'
    ? DEMO_DISPLAY.slice(0, typed)
    : (userFormula || AUTO_GRAPHS[autoIndex].display)

  const path = activeFormula ? buildPath(activeFormula) : ''

  return (
    <div style={{ display:'flex', flexDirection:'column', flex:1 }}>
      {/* Formula bar */}
      <form onSubmit={handleSubmit}>
        <div style={{ borderBottom:'1px solid #e5e7eb', padding:'10px 14px', background:'#fafbfc', display:'flex', alignItems:'center', gap:8 }}>
          <div style={{
            display:'flex', alignItems:'center', gap:8, flex:1,
            background: focused ? '#fff' : '#f8fafc',
            border:`1.5px solid ${focused ? '#d97706' : '#e2e8f0'}`,
            borderRadius:8, padding:'6px 12px',
            boxShadow: focused ? '0 0 0 3px rgba(217,119,6,0.12)' : 'none',
            transition:'border-color 0.2s, box-shadow 0.2s',
          }}>
            <span style={{ fontSize:12, fontFamily:"'Roboto Mono',monospace", color:'#d97706', fontWeight:700, flexShrink:0 }}>f(x) =</span>
            <input
              value={inputVal}
              onChange={e => setInputVal(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder={demoPhase==='typing' ? DEMO_DISPLAY.slice(0,typed) : 'try e^(-0.18*x^2)*sin(4*x)'}
              style={{ flex:1, border:'none', outline:'none', fontSize:13, fontFamily:"'Roboto Mono',monospace", color:'#1e1b4b', background:'transparent', minWidth:0 }}
            />
            {demoPhase==='typing' && !inputVal && (
              <span style={{ display:'inline-block', width:2, height:13, background:'#d97706', borderRadius:1, animation:'mmCursor 0.8s step-end infinite' }}/>
            )}
          </div>
          <button type="submit" style={{
            padding:'7px 16px', borderRadius:8,
            background:'linear-gradient(135deg,#f59e0b,#d97706)',
            border:'none', color:'white', fontSize:12, fontWeight:700, cursor:'pointer', flexShrink:0,
            boxShadow:'0 2px 8px rgba(217,119,6,0.30)',
          }}>Plot →</button>
        </div>
      </form>

      {/* Graph */}
      <div style={{ flex:1, position:'relative', background:'#fff' }}>
        <svg width="100%" viewBox={`0 0 ${GW} ${GH}`} style={{ display:'block' }}>
          {Array.from({length:17},(_,i)=><line key={`v${i}`} x1={(i/16)*GW} y1={0} x2={(i/16)*GW} y2={GH} stroke="#f0f4f8" strokeWidth="0.7"/>)}
          {Array.from({length:11},(_,i)=><line key={`h${i}`} x1={0} y1={(i/10)*GH} x2={GW} y2={(i/10)*GH} stroke="#f0f4f8" strokeWidth="0.7"/>)}
          <line x1={CX} y1={0} x2={CX} y2={GH} stroke="#d1d5db" strokeWidth="1.2"/>
          <line x1={0}  y1={CY} x2={GW} y2={CY} stroke="#d1d5db" strokeWidth="1.2"/>
          {[-7,-5,-3,-1,1,3,5,7].map(n=><text key={`xl${n}`} x={CX+n*XS} y={CY+10} textAnchor="middle" fontSize="7" fill="#9ca3af" fontFamily="Roboto,sans-serif">{n}</text>)}
          {[-3,-2,-1,1,2,3].map(n=><text key={`yl${n}`} x={CX-6} y={CY-n*YS+2.5} textAnchor="end" fontSize="7" fill="#9ca3af" fontFamily="Roboto,sans-serif">{n}</text>)}
          <AnimatedGraphPath key={animKey} d={path} color="#d97706" animKey={animKey} />
          {activeFormula && path && (
            <text x={GW-8} y={16} textAnchor="end" fontSize="9" fill="#d97706" fontWeight="700" fontFamily="'Roboto Mono',monospace">
              f(x) = {displayLabel}
            </text>
          )}
        </svg>

        {/* Example pills */}
        {demoPhase === 'done' && (
          <div style={{ position:'absolute', bottom:8, left:10, right:10, display:'flex', gap:5, flexWrap:'wrap' }}>
            {EXAMPLES.map(ex => (
              <button key={ex.display} onClick={() => handleExample(ex)} style={{
                fontSize:10, padding:'3px 9px', borderRadius:12,
                border:'1px solid rgba(217,119,6,0.25)', background:'rgba(217,119,6,0.07)',
                color:'#92400e', cursor:'pointer', fontFamily:"'Roboto Mono',monospace",
                transition:'background 0.2s',
              }}>{ex.display}</button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function MultimodalSection() {
  const [sectionRef, inView] = useInView(0.10)
  const [active, setActive]       = React.useState(2)
  const [cycleCount, setCycleCount] = React.useState(0)
  const activeRef = React.useRef(2)
  const startRef  = React.useRef(0)
  const rafRef    = React.useRef<number | undefined>(undefined)
  const CYCLE = 7600

  // RAF-driven auto-cycle — starts when section scrolls into view
  React.useEffect(() => {
    if (!inView) return
    startRef.current = performance.now()
    const tick = (now: number) => {
      const elapsed = now - startRef.current
      if (elapsed >= CYCLE) {
        const next = (activeRef.current + 1) % 4
        activeRef.current = next
        setActive(next)
        setCycleCount(c => c + 1)
        startRef.current = now
      }
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [inView])

  // Manual tab click — jumps to that modality and resets the cycle timer
  const handleTab = (i: number) => {
    activeRef.current = i
    setActive(i)
    setCycleCount(c => c + 1)
    startRef.current = performance.now()
  }

  const activeM = MM_MODALITIES[active]

  return (
    <section ref={sectionRef} style={{ background:'#f8fafc', padding:'96px 0', borderTop:'1px solid #e8ecf2', borderBottom:'1px solid #e8ecf2' }}>
      <style>{`
        @keyframes mmCardIn    { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
        @keyframes mmCursor    { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes waveBar     { 0%,100%{transform:scaleY(0.35)} 50%{transform:scaleY(1)} }
        @keyframes voiceOrbMorph { 0%,100%{border-radius:54% 46% 38% 62%/61% 35% 65% 39%} 33%{border-radius:42% 58% 55% 45%/53% 62% 38% 47%} 66%{border-radius:61% 39% 44% 56%/39% 57% 43% 61%} }
        @keyframes orbFloat    { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
        @keyframes mmGraphDash { 0%{stroke-dashoffset:70;opacity:0.28} 48%{opacity:1} 100%{stroke-dashoffset:0;opacity:0.28} }
        @keyframes transcriptReveal { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
        @keyframes aruvaVoiceBlob { 0%,100%{border-radius:48% 52% 45% 55%/58% 43% 57% 42%;transform:scale(1)} 35%{border-radius:58% 42% 52% 48%/45% 60% 40% 55%;transform:scale(1.04)} 70%{border-radius:43% 57% 59% 41%/52% 44% 56% 48%;transform:scale(0.97)} }
      `}</style>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 40px' }}>

        {/* Two-column: left = title + tabs, right = demo */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1.6fr', gap:56, alignItems:'start' }}>

          {/* LEFT — title, brief, then tabs */}
          <div style={{ display:'flex', flexDirection:'column', gap:6 }}>

            {/* Section header inside left column */}
            <div style={{
              opacity: inView?1:0, transform: inView?'translateY(0)':'translateY(20px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
              marginBottom: 32,
            }}>
              <p className="type-label" style={{ color:'#228DC1', marginBottom:12 }}>Multimodal AI</p>
              <h2 style={{ fontFamily:'Roboto,system-ui,sans-serif', fontWeight:700, fontSize:36, letterSpacing:'-0.02em', lineHeight:1.12, color:'#0a1628' }}>
                One AI. Every way <span style={{ color:'#228DC1' }}>students learn.</span>
              </h2>
              <p style={{ fontSize:16, color:'rgba(10,22,40,0.58)', lineHeight:1.75, marginTop:14 }}>
                Aruva speaks, writes, draws and graphs, meeting every student exactly where their understanding breaks down, in whichever format makes it click.
              </p>
            </div>
            {MM_MODALITIES.map((m, i) => {
              const isActive = active === i
              return (
                <button key={m.label} onClick={() => handleTab(i)} style={{
                  display:'flex', alignItems:'center', gap:14, padding:'15px 16px 15px 20px',
                  borderRadius:12,
                  border:`1.5px solid ${isActive ? m.color+'40' : '#e2e8f0'}`,
                  background: isActive ? m.color+'0d' : '#ffffff',
                  cursor:'pointer', textAlign:'left', position:'relative', overflow:'hidden',
                  boxShadow: isActive ? `0 2px 16px ${m.color}18` : '0 1px 4px rgba(10,22,40,0.04)',
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateX(0)' : 'translateX(-20px)',
                  transition: `opacity 0.5s ease ${0.08*i}s, transform 0.5s ease ${0.08*i}s, background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease`,
                }}>
                  {/* Left accent bar */}
                  <div style={{
                    position:'absolute', left:0, top:0, bottom:0, width:3,
                    background: isActive ? m.color : 'transparent',
                    transition:'background 0.3s ease', borderRadius:'4px 0 0 4px',
                  }}/>
                  {/* Icon tile */}
                  <div style={{
                    width:38, height:38, borderRadius:9, flexShrink:0,
                    background: isActive ? m.color+'18' : '#f1f5f9',
                    border:`1px solid ${isActive ? m.color+'35' : '#e2e8f0'}`,
                    display:'flex', alignItems:'center', justifyContent:'center',
                    transition:'all 0.3s ease',
                  }}>
                    <FontAwesomeIcon icon={m.faIcon} style={{ width:15, height:15, color: isActive ? m.color : 'rgba(10,22,40,0.40)', transition:'color 0.3s ease' }}/>
                  </div>
                  {/* Label + description */}
                  <div style={{ flex:1, minWidth:0 }}>
                    <p style={{ fontSize:14, fontWeight:700, color: isActive?'#0a1628':'rgba(10,22,40,0.60)', lineHeight:1.1, marginBottom:2, transition:'color 0.3s ease' }}>{m.label}</p>
                    <p style={{ fontSize:12, color: isActive?'rgba(10,22,40,0.52)':'rgba(10,22,40,0.38)', lineHeight:1.3, transition:'color 0.3s ease' }}>{m.desc}</p>
                  </div>
                </button>
              )
            })}
          </div>

          {/* RIGHT — single large demo card, remounts on each modality change */}
          <div style={{
            borderRadius:20, overflow:'hidden',
            border:'1px solid #e2e8f0',
            background:'#ffffff',
            boxShadow:'0 8px 40px rgba(10,22,40,0.08), 0 0 0 1px rgba(10,22,40,0.03)',
            minHeight:420,
            display:'flex', flexDirection:'column',
            opacity: inView?1:0, transform: inView?'translateY(0)':'translateY(24px)',
            transition:'opacity 0.65s ease 0.15s, transform 0.65s ease 0.15s',
          }}>
            {/* Card header — updates smoothly on tab switch */}
            <div style={{
              padding:'14px 20px', borderBottom:'1px solid #f0f4f8',
              background:'#fafbfc', display:'flex', alignItems:'center', gap:12,
            }}>
              <div style={{
                width:36, height:36, borderRadius:9, flexShrink:0,
                background: activeM.color+'16', border:`1px solid ${activeM.color}35`,
                display:'flex', alignItems:'center', justifyContent:'center',
                transition:'all 0.35s ease',
              }}>
                <FontAwesomeIcon icon={activeM.faIcon} style={{ width:15, height:15, color: activeM.color, transition:'color 0.35s ease' }}/>
              </div>
              <div>
                <p style={{ fontSize:13, fontWeight:700, color:'#0a1628', lineHeight:1 }}>{activeM.label} Generation</p>
                <p style={{ fontSize:11, color:'rgba(10,22,40,0.45)', marginTop:3 }}>
                  {active===0?'Pythagorean Theorem narrated':active===1?'Algebra solution written':active===2?'Educational illustration generated':'Graphing calculator'}
                </p>
              </div>
              <div style={{ flex:1 }}/>
            </div>

            {/* Demo content — key forces remount so animations restart on each cycle */}
            <div key={`${active}-${cycleCount}`} style={{
              flex:1, display:'flex', flexDirection:'column',
              opacity:0, animation:'mmCardIn 0.4s ease forwards',
            }}>

              {/* ── Voice ── */}
              {active === 0 && (
                <div style={{ flex:1, display:'flex', flexDirection:'column', padding:24, background:'linear-gradient(180deg,#ffffff 0%,#f8fbfd 100%)' }}>
                  <div style={{
                    display:'flex', alignItems:'center', justifyContent:'space-between', gap:16,
                    padding:'14px 16px', border:'1px solid #e5edf4', borderRadius:16,
                    background:'#ffffff', boxShadow:'0 8px 24px rgba(10,22,40,0.05)', marginBottom:18,
                  }}>
                    <div style={{ display:'flex', alignItems:'center', gap:10 }}>
                      <div style={{
                        width:36, height:36, borderRadius:10, background:'rgba(34,141,193,0.10)',
                        border:'1px solid rgba(34,141,193,0.18)', display:'flex', alignItems:'center', justifyContent:'center',
                      }}>
                        <FontAwesomeIcon icon={activeM.faIcon} style={{ width:14, height:14, color:'#228DC1' }} />
                      </div>
                      <div>
                        <p style={{ fontSize:13, fontWeight:800, color:'#0a1628', lineHeight:1 }}>Aruva Voice Tutor</p>
                        <p style={{ fontSize:11, color:'rgba(10,22,40,0.46)', marginTop:4 }}>Listening, transcribing and responding</p>
                      </div>
                    </div>
                    <div style={{
                      padding:'6px 10px', borderRadius:999, background:'rgba(34,141,193,0.08)',
                      border:'1px solid rgba(34,141,193,0.18)', color:'#228DC1',
                      fontSize:10, fontWeight:900, letterSpacing:'0.13em', textTransform:'uppercase',
                    }}>
                      AI listening
                    </div>
                  </div>

                  <div style={{ flex:1, display:'grid', gridTemplateColumns:'1fr 220px', gap:22, minHeight:0, alignItems:'stretch' }}>
                    <div style={{ display:'flex', flexDirection:'column', gap:13, minWidth:0 }}>
                      <div style={{ opacity:0, animation:'transcriptReveal 0.34s ease 0.05s forwards' }}>
                        <p style={{ fontSize:10, fontWeight:900, color:'#228DC1', letterSpacing:'0.14em', textTransform:'uppercase', marginBottom:6 }}>Student transcript</p>
                        <div style={{
                          background:'#fff7ed', border:'1px solid rgba(245,158,11,0.22)', color:'#0a1628',
                          padding:'12px 14px', borderRadius:'14px 14px 4px 14px', fontSize:13,
                          fontWeight:700, lineHeight:1.45, boxShadow:'0 9px 20px rgba(245,158,11,0.12)',
                        }}>
                          "Can you explain Porter's Five Forces without giving me the answer?"
                        </div>
                      </div>

                      <div style={{ opacity:0, animation:'transcriptReveal 0.34s ease 0.45s forwards' }}>
                        <p style={{ fontSize:10, fontWeight:900, color:'#059669', letterSpacing:'0.14em', textTransform:'uppercase', marginBottom:6 }}>AI responding</p>
                        <div style={{
                          background:'#ffffff', border:'1px solid #e6edf3', borderRadius:'14px 14px 14px 4px',
                          padding:'13px 15px', boxShadow:'0 8px 22px rgba(10,22,40,0.06)',
                          fontSize:13, color:'rgba(10,22,40,0.76)', lineHeight:1.55,
                        }}>
                          Start with buyer power. What would give customers leverage here: many alternatives, low switching cost, or something else?
                          <div style={{ marginTop:10, paddingTop:10, borderTop:'1px solid #eef2f6', color:'#228DC1', fontSize:11, fontWeight:800 }}>
                            Cited source: Porter (2008), Ch. 2
                          </div>
                        </div>
                      </div>

                      <div style={{ opacity:0, animation:'transcriptReveal 0.34s ease 0.82s forwards' }}>
                        <p style={{ fontSize:10, fontWeight:900, color:'#d97706', letterSpacing:'0.14em', textTransform:'uppercase', marginBottom:6 }}>Student reply transcript</p>
                        <div style={{
                          background:'#f59e0b', color:'#ffffff', padding:'12px 14px', borderRadius:'14px 14px 4px 14px',
                          boxShadow:'0 10px 22px rgba(245,158,11,0.18)', fontSize:13, fontWeight:700, lineHeight:1.45,
                        }}>
                          "Switching costs. If it's easy to switch, buyers have more leverage."
                        </div>
                      </div>
                    </div>

                    <div style={{
                      borderRadius:18, border:'1px solid rgba(34,141,193,0.16)', background:'linear-gradient(180deg,#eef8fd,#ffffff)',
                      display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:18,
                      boxShadow:'inset 0 0 0 1px rgba(255,255,255,0.75)', overflow:'hidden',
                    }}>
                      <div style={{
                        width:98, height:98, background:'radial-gradient(circle at 34% 32%,#c9f3ff 0%,#65c4ef 34%,#228DC1 72%)',
                        boxShadow:'0 0 0 20px rgba(34,141,193,0.06), 0 0 46px rgba(34,141,193,0.28)',
                        animation:'aruvaVoiceBlob 2.6s ease-in-out infinite', marginBottom:24,
                      }} />
                      <div style={{ display:'flex', alignItems:'center', gap:3, height:44, marginBottom:14 }}>
                        {MM_VOICE_BARS.slice(0, 20).map((h, i) => (
                          <div key={i} style={{
                            width:3.2, borderRadius:4,
                            height:`${Math.max(11, h*50)}px`,
                            background:i % 3 === 0 ? '#228DC1' : i % 3 === 1 ? '#65c4ef' : '#059669',
                            transformOrigin:'center',
                            animation:`waveBar ${0.44+h*0.66}s ease-in-out ${MM_VOICE_DELAYS[i]}s infinite`,
                          }}/>
                        ))}
                      </div>
                      <div style={{ textAlign:'center' }}>
                        <p style={{ fontSize:12, fontWeight:900, color:'#0a1628', marginBottom:4 }}>Listening...</p>
                        <p style={{ fontSize:11, color:'rgba(10,22,40,0.48)', lineHeight:1.45 }}>Transcript updates as the student speaks.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* ── Text ── */}
              {active === 1 && <MMTextDemo />}
              {false && (
                <div style={{ flex:1, display:'flex', flexDirection:'column', justifyContent:'center', gap:13, padding:'32px 36px' }}>
                  <p style={{ fontSize:12, color:'rgba(10,22,40,0.42)', fontWeight:600, marginBottom:4 }}>Solving: x² − 5x + 6 = 0</p>
                  {MM_STEPS.map((s, i) => (
                    <div key={s.label} style={{
                      display:'flex', alignItems:'center', gap:10,
                      opacity:0, transform:'translateY(6px)',
                      animation:`mmCardIn 0.36s ease ${0.12+i*0.22}s forwards`,
                    }}>
                      <span style={{ fontSize:9, fontWeight:700, color:'#7c3aed', letterSpacing:'0.10em', textTransform:'uppercase', minWidth:44, flexShrink:0 }}>{s.label}</span>
                      <span style={{ fontSize:13, fontFamily:"'Roboto Mono','Courier New',monospace", color:'#1e1b4b', background:'rgba(124,58,237,0.07)', padding:'6px 12px', borderRadius:6, border:'1px solid rgba(124,58,237,0.16)', flex:1 }}>{s.val}</span>
                    </div>
                  ))}
                  <div style={{ display:'flex', alignItems:'center', gap:6, marginTop:6 }}>
                    <div style={{ width:2, height:16, background:'#7c3aed', borderRadius:1, animation:'mmCursor 1s step-end infinite' }}/>
                    <span style={{ fontSize:11, color:'rgba(10,22,40,0.38)' }}>AI solving step by step…</span>
                  </div>
                </div>
              )}

              {/* ── Image ── */}
              {active === 2 && <MMImageDemo />}

              {/* ── Graph ── */}
              {active === 3 && <MMGraphDemo />}

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function BloomInsightSection() {
  const [sectionRef, inView] = useInView(0.12)
  const [activeTab, setActiveTab] = React.useState(0)          // 0 = Bloom, 1 = DOK
  const [active, setActive]   = React.useState(0)
  const [timerPct, setTimerPct] = React.useState(0)
  const [disp, setDisp]       = React.useState<number[]>([...BLOOM_SEMS[0].bloom])
  const rafRef   = React.useRef<number|undefined>(undefined)
  const morphRef = React.useRef<number|undefined>(undefined)
  const startRef = React.useRef(0)
  const activeRef = React.useRef(0)
  const liveBloom = React.useRef<number[]>([...BLOOM_SEMS[0].bloom])
  const CYCLE = 5000

  // Smooth radar morph via RAF lerp
  const morphTo = React.useCallback((from: number[], to: number[]) => {
    if (morphRef.current) cancelAnimationFrame(morphRef.current)
    const t0 = performance.now()
    const D  = 800
    const step = (now: number) => {
      const t = Math.min((now - t0) / D, 1)
      const e = 1 - Math.pow(1 - t, 3)           // ease-out cubic
      const cur = from.map((f, i) => f + (to[i] - f) * e)
      liveBloom.current = cur
      setDisp([...cur])
      if (t < 1) morphRef.current = requestAnimationFrame(step)
    }
    morphRef.current = requestAnimationFrame(step)
  }, [])

  // Auto-cycle timer
  const runLoop = React.useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    startRef.current = performance.now()
    const tick = (now: number) => {
      const elapsed = now - startRef.current
      setTimerPct(Math.min((elapsed / CYCLE) * 100, 100))
      if (elapsed >= CYCLE) {
        const next = (activeRef.current + 1) % 3
        morphTo([...liveBloom.current], BLOOM_SEMS[next].bloom)
        activeRef.current = next
        setActive(next)
        startRef.current = now
      }
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
  }, [morphTo])

  React.useEffect(() => {
    if (!inView) return
    runLoop()
    return () => {
      if (rafRef.current)  cancelAnimationFrame(rafRef.current)
      if (morphRef.current) cancelAnimationFrame(morphRef.current)
    }
  }, [inView, runLoop])

  const pick = (i: number) => {
    if (i === activeRef.current) return
    morphTo([...liveBloom.current], BLOOM_SEMS[i].bloom)
    activeRef.current = i; setActive(i); setTimerPct(0); runLoop()
  }

  const sem = BLOOM_SEMS[active]

  // DOK state (independent from Bloom)
  const [dokActive, setDokActive] = React.useState(0)
  const [dokDisp, setDokDisp]     = React.useState<number[]>([...DOK_SEMS[0].dok])
  const [dokTimerPct, setDokTimerPct] = React.useState(0)
  const dokLive    = React.useRef<number[]>([...DOK_SEMS[0].dok])
  const dokRaf     = React.useRef<number|undefined>(undefined)
  const dokMorphRef= React.useRef<number|undefined>(undefined)
  const dokStart   = React.useRef(0)
  const dokActiveRef = React.useRef(0)

  const dokMorphTo = React.useCallback((from: number[], to: number[]) => {
    if (dokMorphRef.current) cancelAnimationFrame(dokMorphRef.current)
    const t0 = performance.now()
    const step = (now: number) => {
      const t = Math.min((now - t0) / 800, 1)
      const e = 1 - Math.pow(1 - t, 3)
      const cur = from.map((f, i) => f + (to[i] - f) * e)
      dokLive.current = cur; setDokDisp([...cur])
      if (t < 1) dokMorphRef.current = requestAnimationFrame(step)
    }
    dokMorphRef.current = requestAnimationFrame(step)
  }, [])

  const dokRunLoop = React.useCallback(() => {
    if (dokRaf.current) cancelAnimationFrame(dokRaf.current)
    dokStart.current = performance.now()
    const tick = (now: number) => {
      const elapsed = now - dokStart.current
      setDokTimerPct(Math.min((elapsed / 5000) * 100, 100))
      if (elapsed >= 5000) {
        const next = (dokActiveRef.current + 1) % 3
        dokMorphTo([...dokLive.current], DOK_SEMS[next].dok)
        dokActiveRef.current = next; setDokActive(next); dokStart.current = now
      }
      dokRaf.current = requestAnimationFrame(tick)
    }
    dokRaf.current = requestAnimationFrame(tick)
  }, [dokMorphTo])

  React.useEffect(() => {
    if (!inView || activeTab !== 1) return
    dokRunLoop()
    return () => {
      if (dokRaf.current) cancelAnimationFrame(dokRaf.current)
      if (dokMorphRef.current) cancelAnimationFrame(dokMorphRef.current)
    }
  }, [inView, activeTab, dokRunLoop])

  const pickDok = (i: number) => {
    if (i === dokActiveRef.current) return
    dokMorphTo([...dokLive.current], DOK_SEMS[i].dok)
    dokActiveRef.current = i; setDokActive(i); setDokTimerPct(0); dokRunLoop()
  }
  const dokSem = DOK_SEMS[dokActive]

  // Radar geometry — 300×300 viewBox with generous label clearance
  const CX = 150, CY = 150, R = 98
  const ang  = (i: number) => (i * 60 - 90) * Math.PI / 180
  const pt   = (i: number, v: number) => ({ x: CX + (v/100)*R*Math.cos(ang(i)), y: CY + (v/100)*R*Math.sin(ang(i)) })
  const lab  = (i: number) => ({ x: CX + 128*Math.cos(ang(i)), y: CY + 128*Math.sin(ang(i)) })
  const poly = (vals: number[]) => vals.map((v,i) => `${pt(i,v).x},${pt(i,v).y}`).join(' ')
  const masteryColor = (value: number, fallback: string) => value >= 75 ? '#059669' : fallback

  return (
    <section ref={sectionRef} className="py-28 bg-[#f8fafc] border-t border-gray-100">
      <style>{`
        @keyframes fadeUp     { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }
        @keyframes barGrow    { from{transform:scaleX(0);transform-origin:left} to{transform:scaleX(1)} }
        @keyframes pulseRing  { 0%,100%{opacity:0.3;transform:scale(1)} 50%{opacity:0;transform:scale(1.9)} }
        @keyframes semSlide   { from{opacity:0;transform:translateX(-8px)} to{opacity:1;transform:translateX(0)} }
        @keyframes chipPop    { from{opacity:0;transform:scale(0.82) translateY(4px)} to{opacity:1;transform:scale(1) translateY(0)} }
        @keyframes panelEnter { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
        @keyframes cardEnter  { from{opacity:0;transform:translateX(-12px)} to{opacity:1;transform:translateX(0)} }
        @keyframes countUp    { from{opacity:0;transform:scale(0.88)} to{opacity:1;transform:scale(1)} }
        .tab-panel-enter { animation: panelEnter 0.45s cubic-bezier(0.22,1,0.36,1) both; }
        .chip-enter      { animation: chipPop   0.35s cubic-bezier(0.34,1.56,0.64,1) both; }
        .count-enter     { animation: countUp   0.5s  cubic-bezier(0.22,1,0.36,1)  both; }
      `}</style>

      <div className="max-w-7xl mx-auto px-8 lg:px-12">

        <div className="grid lg:grid-cols-[0.72fr_1.48fr] gap-14 xl:gap-18 items-start mb-16">
          {/* Left narrative */}
          <div className="lg:sticky lg:top-28" style={{ animation: 'fadeUp 0.6s ease both' }}>
            <p className="type-label text-[#228DC1] mb-4">Learning Intelligence</p>
            <h2 className="font-heading text-[#0a1628] mb-5">
              One student journey. Three semesters.<br />One clear progression picture.
            </h2>
            <p className="text-[#0a1628]/60 text-[16px] font-normal leading-[1.75]">
              Grade climbed from 62% to 81% over three semesters. Aruva shows exactly why, and which skill gap was holding them back.
            </p>
          </div>

          {/* Right dashboard */}
          <div className="min-w-0">

        {/* Tab switcher */}
        <div className="flex gap-1 mb-8 bg-white border border-gray-200 rounded-xl p-1 w-fit shadow-sm">
          {[
            { label: "Bloom's Taxonomy" },
            { label: 'Depth of Knowledge' },
          ].map((tab, i) => (
            <button key={i} onClick={() => setActiveTab(i)}
              className={`px-5 py-2 rounded-lg text-[13px] font-semibold transition-all duration-200 ${
                activeTab === i
                  ? 'bg-[#228DC1] text-white shadow-[0_2px_8px_rgba(34,141,193,0.25)]'
                  : 'text-[#0a1628]/50 hover:text-[#0a1628]/80'
              }`}
              style={{ transition: 'all 0.2s cubic-bezier(0.34,1.2,0.64,1)' }}>
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── Bloom panel ── */}
        {activeTab === 0 && (
        <div className="space-y-6 tab-panel-enter">

          {/* Semester journey cards — 3 equal columns */}
          <div className="grid grid-cols-3 gap-4">
            {BLOOM_SEMS.map((s, i) => {
              const isActive = active === i
              return (
                <button key={s.id} onClick={() => pick(i)}
                  className="text-left rounded-2xl border transition-all duration-300 relative overflow-hidden"
                  style={{
                    padding: '20px',
                    background: isActive ? '#fff' : 'rgba(255,255,255,0.78)',
                    borderColor: isActive ? s.accent + '40' : 'rgba(10,22,40,0.08)',
                    boxShadow: isActive ? `0 12px 30px ${s.accent}14` : 'none',
                  }}>
                  {/* Top accent bar */}
                  <div className="absolute left-0 right-0 top-0 h-[3px] transition-all duration-300"
                    style={{ background: isActive ? s.accent : 'transparent' }} />

                  {/* Semester label + grade on same row */}
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-[10px] font-black uppercase tracking-[0.18em]"
                      style={{ color: isActive ? s.accent : 'rgba(10,22,40,0.32)' }}>
                      {s.label}
                    </p>
                    <div className="text-right">
                      <span className="text-[26px] font-black leading-none tabular-nums"
                        style={{ color: isActive ? s.accent : 'rgba(10,22,40,0.30)' }}>
                        {s.grade}%
                      </span>
                      <span className="text-[11px] font-bold ml-1.5"
                        style={{ color: isActive ? s.accent : 'rgba(10,22,40,0.22)' }}>
                        {s.gradeLabel}
                      </span>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="h-[5px] bg-gray-100 rounded-full overflow-hidden mb-3">
                    <div className="h-full rounded-full transition-all duration-700"
                      style={{ width: `${s.grade}%`, background: isActive ? s.accent : 'rgba(10,22,40,0.12)' }} />
                  </div>

                  {/* Headline */}
                  <p className="text-[13px] font-semibold leading-snug mb-3"
                    style={{ color: isActive ? '#0a1628' : 'rgba(10,22,40,0.42)' }}>
                    {s.headline}
                  </p>

                  {/* Delta */}
                  {s.delta
                    ? <p className="text-[12px] font-bold" style={{ color: s.accent }}>{s.delta} from S1</p>
                    : <p className="text-[12px] font-medium text-[#0a1628]/30">Baseline</p>}

                  {/* Timer bar at bottom */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2px]">
                      <div className="h-full" style={{ width: `${timerPct}%`, background: s.accent + '50', transition:'none' }} />
                    </div>
                  )}
                </button>
              )
            })}
          </div>

          {/* RIGHT — Bloom profile card */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-[0_2px_20px_rgba(10,22,40,0.05)] p-8 flex flex-col">

            {/* Card header */}
            <div className="flex items-start justify-between mb-7">
              <div>
                <p className="text-[12px] font-black uppercase tracking-[0.18em] mb-1.5" style={{ color: sem.accent }}>{sem.label}</p>
                <p className="text-[20px] font-semibold text-[#0a1628] leading-snug">{sem.headline}</p>
                <div className="mt-4 inline-flex items-center gap-3 rounded-full border border-gray-200 bg-[#f8fafc] px-3 py-2 shadow-[0_1px_8px_rgba(10,22,40,0.04)]">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-black text-white shadow-sm"
                    style={{ background: `linear-gradient(135deg,${sem.accent},#fb7185)` }}>
                    MG
                  </div>
                  <div>
                    <p className="text-[12px] font-bold text-[#0a1628] leading-none">Maria Garcia</p>
                    <p className="text-[10px] font-semibold text-[#0a1628]/42 leading-none mt-1">Student profile · compared with class average</p>
                  </div>
                </div>
              </div>
              <div className="shrink-0 ml-4 text-right">
                <p className="text-[40px] font-black leading-none tabular-nums" style={{ color: sem.accent }}>{sem.grade}%</p>
                <p className="text-[15px] font-bold" style={{ color: sem.accent + 'cc' }}>{sem.gradeLabel}</p>
              </div>
            </div>

            {/* Radar + bars */}
            <div className="flex gap-8 items-start flex-1 mb-7">

              {/* Radar */}
              <div className="w-[230px] shrink-0">
                <svg viewBox="0 0 300 300" className="w-full overflow-visible">
                  <defs>
                    <filter id="rglow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="4.5" result="b"/>
                      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
                    </filter>
                    <radialGradient id={`rfill-${active}`} cx="50%" cy="50%" r="50%">
                      <stop offset="0%"   stopColor={sem.accent} stopOpacity="0.22"/>
                      <stop offset="100%" stopColor={sem.accent} stopOpacity="0.04"/>
                    </radialGradient>
                    <linearGradient id={`rstroke-${active}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={sem.accent}/>
                      <stop offset="58%" stopColor="#fb7185"/>
                      <stop offset="100%" stopColor="#fda4af"/>
                    </linearGradient>
                    <linearGradient id={`ravg-${active}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0066B1"/>
                      <stop offset="55%" stopColor="#1C69D4"/>
                      <stop offset="100%" stopColor="#81C4FF"/>
                    </linearGradient>
                    <radialGradient id={`ravgFill-${active}`} cx="50%" cy="50%" r="62%">
                      <stop offset="0%" stopColor="#1C69D4" stopOpacity="0.10"/>
                      <stop offset="72%" stopColor="#0066B1" stopOpacity="0.05"/>
                      <stop offset="100%" stopColor="#E8F3FF" stopOpacity="0.01"/>
                    </radialGradient>
                    <filter id={`ravgGlow-${active}`} x="-40%" y="-40%" width="180%" height="180%">
                      <feGaussianBlur stdDeviation="3.5" result="b"/>
                      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
                    </filter>
                  </defs>

                  {/* Grid rings */}
                  {[33, 66, 100].map(pct => (
                    <polygon key={pct}
                      points={BLOOM_LABELS.map((_,i) => `${pt(i,pct).x},${pt(i,pct).y}`).join(' ')}
                      fill={pct===33 ? sem.accent+'03' : 'none'}
                      stroke={pct===100 ? 'rgba(10,22,40,0.12)' : 'rgba(10,22,40,0.06)'}
                      strokeWidth={pct===100 ? 1.5 : 1}
                    />
                  ))}
                  {/* Spokes */}
                  {BLOOM_LABELS.map((_,i) => (
                    <line key={i} x1={CX} y1={CY} x2={pt(i,100).x} y2={pt(i,100).y}
                      stroke="rgba(10,22,40,0.06)" strokeWidth="1" />
                  ))}

                  {/* Cohort average — amber dashed polygon */}
                  <polygon points={poly(sem.cohortAvg)} fill={`url(#ravgFill-${active})`}
                    stroke={`url(#ravg-${active})`} strokeWidth="2.5"
                    strokeDasharray="7 4" strokeLinejoin="round" strokeLinecap="round"
                    opacity="0.95" filter={`url(#ravgGlow-${active})`} />
                  <polygon points={poly(sem.cohortAvg)} fill="none"
                    stroke="rgba(255,255,255,0.55)" strokeWidth="0.8"
                    strokeDasharray="7 4" strokeLinejoin="round" strokeLinecap="round"
                    opacity="0.6" />

                  {/* Student filled area */}
                  <polygon points={poly(disp)} fill={`url(#rfill-${active})`} stroke="none" />
                  <polygon points={poly(disp)} fill="none"
                    stroke={sem.accent} strokeWidth="8" strokeLinejoin="round"
                    strokeLinecap="round" opacity="0.12" />
                  <polygon points={poly(disp)} fill="none"
                    stroke={`url(#rstroke-${active})`} strokeWidth="4" strokeLinejoin="round"
                    strokeLinecap="round"
                    filter="url(#rglow)" />
                  <polygon points={poly(disp)} fill="none"
                    stroke="rgba(255,255,255,0.78)" strokeWidth="1.25" strokeLinejoin="round"
                    strokeLinecap="round" opacity="0.72" />

                  {/* Pulse rings + dots */}
                  {disp.map((v,i) => (
                    <g key={i}>
                      <circle cx={pt(i,v).x} cy={pt(i,v).y} r="13" fill={masteryColor(Math.round(v), sem.accent)} opacity="0"
                        style={{ animation: `pulseRing 2.4s ease ${i*0.22}s infinite` }} />
                      <circle cx={pt(i,v).x} cy={pt(i,v).y} r="7.5"
                        fill="white" stroke={masteryColor(Math.round(v), sem.accent)} strokeWidth="2.5" />
                      <circle cx={pt(i,v).x} cy={pt(i,v).y} r="3.2"
                        fill={masteryColor(Math.round(v), sem.accent)} />
                    </g>
                  ))}

                  {/* Axis labels */}
                  {BLOOM_LABELS.map((label, i) => {
                    const p   = lab(i)
                    const val = Math.round(disp[i])
                    const isMax = val === Math.round(Math.max(...disp))
                    const isMin = val === Math.round(Math.min(...disp))
                    const color = masteryColor(val, isMax ? sem.accent : isMin ? '#d97706' : 'rgba(10,22,40,0.5)')
                    return (
                      <g key={label}>
                        <text x={p.x} y={p.y - 8} textAnchor="middle" dominantBaseline="middle"
                          fontSize="12.5" fontFamily="system-ui,sans-serif"
                          fontWeight={isMax ? '700' : '500'}
                          fill={color}>
                          {label}
                        </text>
                        <text x={p.x} y={p.y + 8} textAnchor="middle" dominantBaseline="middle"
                          fontSize="11.5" fontFamily="system-ui,sans-serif" fontWeight="700"
                          fill={val >= 75 ? '#059669cc' : isMax ? sem.accent : isMin ? '#d97706cc' : 'rgba(10,22,40,0.3)'}>
                          {val}%
                        </text>
                      </g>
                    )
                  })}
                </svg>

                {/* Legend */}
                <div className="flex items-center justify-center gap-4 mt-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full shrink-0" style={{ background: sem.accent }} />
                    <span className="text-[11px] font-semibold text-[#0a1628]/60">Maria</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg width="22" height="6" viewBox="0 0 22 6"><line x1="1" y1="3" x2="21" y2="3" stroke="#0066B1" strokeWidth="2.5" strokeDasharray="5 3" strokeLinecap="round"/></svg>
                    <span className="text-[11px] font-semibold text-[#0066B1]">Class avg</span>
                  </div>
                </div>
              </div>

              {/* Bloom bars */}
              <div className="flex-1 space-y-4">
                {BLOOM_LABELS.map((label, i) => {
                  const val   = Math.round(disp[i])
                  const barColor = val >= 75 ? '#059669' : '#d97706'
                  return (
                    <div key={label}>
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-[15px] font-semibold"
                            style={{ color: val >= 75 ? '#059669' : 'rgba(10,22,40,0.72)' }}>
                            {label}
                          </span>
                          <span className="text-[13px] text-[#0a1628]/35 hidden sm:inline">{BLOOM_SIMPLE[i]}</span>
                        </div>
                        <span className="text-[16px] font-black tabular-nums shrink-0 ml-3"
                          style={{ color: barColor }}>
                          {val}%
                        </span>
                      </div>
                      <div className="relative h-[8px] bg-gray-100 rounded-full">
                        <div className="h-full rounded-full"
                          style={{
                            width: `${val}%`,
                            background: val >= 75
                              ? 'linear-gradient(90deg,#059669,#34d399)'
                              : 'linear-gradient(90deg,#f59e0b,#fbbf24)',
                            boxShadow: val >= 75 ? '0 0 10px rgba(5,150,105,0.28)' : 'none',
                            transition: 'width 0.75s cubic-bezier(0.34,1.1,0.64,1)',
                          }} />
                        {/* Fixed 75% threshold marker */}
                        <div className="absolute -top-[5px] -bottom-[5px] w-[2px] rounded-full"
                          style={{ left: '75%', background: 'linear-gradient(180deg,#6b7280,#374151)', boxShadow: '0 0 0 3px rgba(107,114,128,0.15)' }} />
                        <div className="absolute top-1/2 w-[7px] h-[7px] rounded-full border-2 border-white bg-[#6b7280] shadow-sm"
                          style={{ left: 'calc(75% - 3.5px)', transform: 'translateY(-50%)' }} />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Insight strip */}
            <div className="rounded-xl p-5 border transition-colors duration-300"
              style={{ background: sem.accent + '07', borderColor: sem.accent + '20' }}>
              <p className="text-[16px] font-semibold text-[#0a1628] mb-1.5 leading-snug">{sem.headline}</p>
              <p className="text-[15px] text-[#0a1628]/55 leading-relaxed">{sem.detail}</p>
            </div>
          </div>
        </div>
        )} {/* end Bloom panel */}

        {/* ── DOK panel ── */}
        {activeTab === 1 && (
        <div className="space-y-6 tab-panel-enter">

          {/* DOK semester cards — 3 equal columns */}
          <div className="grid grid-cols-3 gap-4">
            {DOK_SEMS.map((s, i) => {
              const isActive = dokActive === i
              return (
                <button key={s.id} onClick={() => pickDok(i)}
                  className="text-left rounded-2xl border transition-all duration-300 relative overflow-hidden"
                  style={{
                    padding: '20px',
                    background: isActive ? '#fff' : 'rgba(255,255,255,0.78)',
                    borderColor: isActive ? s.accent + '40' : 'rgba(10,22,40,0.08)',
                    boxShadow: isActive ? `0 12px 30px ${s.accent}14` : 'none',
                  }}>
                  <div className="absolute left-0 right-0 top-0 h-[3px] transition-all duration-300"
                    style={{ background: isActive ? s.accent : 'transparent' }} />

                  <div className="flex items-center justify-between mb-3">
                    <p className="text-[10px] font-black uppercase tracking-[0.18em]"
                      style={{ color: isActive ? s.accent : 'rgba(10,22,40,0.32)' }}>
                      {s.label}
                    </p>
                    <div className="text-right">
                      <span className="text-[26px] font-black leading-none tabular-nums"
                        style={{ color: isActive ? s.accent : 'rgba(10,22,40,0.30)' }}>
                        {s.grade}%
                      </span>
                      <span className="text-[11px] font-bold ml-1.5"
                        style={{ color: isActive ? s.accent : 'rgba(10,22,40,0.22)' }}>
                        {s.gradeLabel}
                      </span>
                    </div>
                  </div>

                  <div className="h-[5px] bg-gray-100 rounded-full overflow-hidden mb-3">
                    <div className="h-full rounded-full transition-all duration-700"
                      style={{ width: `${s.grade}%`, background: isActive ? s.accent : 'rgba(10,22,40,0.12)' }} />
                  </div>

                  <p className="text-[13px] font-semibold leading-snug mb-3"
                    style={{ color: isActive ? '#0a1628' : 'rgba(10,22,40,0.42)' }}>
                    {s.headline}
                  </p>

                  {s.delta
                    ? <p className="text-[12px] font-bold" style={{ color: s.accent }}>{s.delta} from S1</p>
                    : <p className="text-[12px] font-medium text-[#0a1628]/30">Baseline</p>}

                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2px]">
                      <div className="h-full" style={{ width: `${dokTimerPct}%`, background: s.accent + '50', transition:'none' }} />
                    </div>
                  )}
                </button>
              )
            })}
          </div>

          {/* RIGHT — DOK profile card */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-[0_2px_20px_rgba(10,22,40,0.05)] p-8 flex flex-col">
            <div className="flex items-start justify-between mb-6">
              <div>
                <p className="text-[12px] font-black uppercase tracking-[0.18em] mb-1.5" style={{ color: dokSem.accent }}>{dokSem.label}</p>
                <p className="text-[20px] font-semibold text-[#0a1628] leading-snug">{dokSem.headline}</p>
                <div className="mt-4 inline-flex items-center gap-3 rounded-full border border-gray-200 bg-[#f8fafc] px-3 py-2 shadow-[0_1px_8px_rgba(10,22,40,0.04)]">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-black text-white shadow-sm"
                    style={{ background: `linear-gradient(135deg,${dokSem.accent},#60a5fa)` }}>
                    MG
                  </div>
                  <div>
                    <p className="text-[12px] font-bold text-[#0a1628] leading-none">Maria Garcia</p>
                    <p className="text-[10px] font-semibold text-[#0a1628]/42 leading-none mt-1">Student profile · compared with class average</p>
                  </div>
                </div>
              </div>
              <div className="shrink-0 ml-4 text-right">
                <p className="text-[40px] font-black leading-none tabular-nums" style={{ color: dokSem.accent }}>{dokSem.grade}%</p>
                <p className="text-[15px] font-bold" style={{ color: dokSem.accent + 'cc' }}>{dokSem.gradeLabel}</p>
              </div>
            </div>

            <div className="flex-1 space-y-5 mb-7">
              {DOK_LABELS.map((label, i) => {
                const val   = Math.round(dokDisp[i])
                const isTop = val === Math.round(Math.max(...dokDisp))
                const isLow = val === Math.round(Math.min(...dokDisp))
                const cavg  = Math.round(dokSem.cohortAvg[i])
                return (
                  <div key={label}>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex flex-col gap-0.5">
                        <div className="flex items-center gap-2">
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-md text-[11px] font-black text-white"
                            style={{ background: DOK_COLORS[i] }}>{i+1}</span>
                          <span className="text-[15px] font-semibold" style={{ color: isLow ? '#d97706' : 'rgba(10,22,40,0.8)' }}>
                            {DOK_NAMES[i]}
                          </span>
                        </div>
                        <p className="text-[12px] font-medium pl-8" style={{ color: DOK_TEXT_COLORS[i] }}>{DOK_SIMPLE[i]}</p>
                      </div>
                      <span className="text-[16px] font-black tabular-nums shrink-0 ml-3"
                        style={{ color: isLow ? '#d97706' : DOK_COLORS[i] }}>
                        {val}%
                      </span>
                    </div>
                    <div className="relative h-[9px] bg-gray-100 rounded-full">
                      <div className="h-full rounded-full"
                        style={{
                          width: `${val}%`,
                          background: isLow
                            ? 'linear-gradient(90deg,#f59e0b,#fbbf24)'
                            : `linear-gradient(90deg,${DOK_COLORS[i]},${DOK_COLORS[i]}bb)`,
                          boxShadow: isTop ? `0 0 10px ${DOK_COLORS[i]}66` : 'none',
                          transition: 'width 0.75s cubic-bezier(0.34,1.1,0.64,1)',
                        }} />
                      {/* Class avg marker */}
                      <div className="absolute -top-[4px] -bottom-[4px] w-[2px] rounded-full"
                        style={{ left: `${cavg}%`, background: 'linear-gradient(180deg,#cbd5e1,#64748b)', boxShadow: '0 0 0 3px rgba(148,163,184,0.12)' }} />
                      <div className="absolute top-1/2 w-[7px] h-[7px] rounded-full border border-white bg-[#94a3b8] shadow-sm"
                        style={{ left: `calc(${cavg}% - 3px)`, transform: 'translateY(-50%)' }} />
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2 items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {DOK_KEYWORDS[i].slice(0,5).map(kw => (
                          <span key={kw} className="text-[11px] px-2 py-0.5 rounded-md font-semibold"
                            style={{ background: DOK_COLORS[i] + '18', color: DOK_TEXT_COLORS[i] }}>
                            {kw}
                          </span>
                        ))}
                      </div>
                      <p className="text-[11px] font-medium shrink-0 ml-2" style={{ color: 'rgba(10,22,40,0.35)' }}>
                        Class avg {cavg}%
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="rounded-xl p-5 border transition-colors duration-300"
              style={{ background: dokSem.accent + '07', borderColor: dokSem.accent + '20' }}>
              <p className="text-[16px] font-semibold text-[#0a1628] mb-1.5 leading-snug">{dokSem.headline}</p>
              <p className="text-[15px] text-[#0a1628]/55 leading-relaxed">{dokSem.detail}</p>
            </div>
          </div>
        </div>
        )} {/* end DOK panel */}

          </div>
        </div>

        {/* Stats strip */}
        <div className="grid sm:grid-cols-3 gap-px bg-gray-200 border border-gray-200 rounded-2xl overflow-hidden">
          {[
            { stat: '71%',   label: 'of students who feel unsure want clearer guidance on where to improve' },
            { stat: '68%',   label: 'of academics want earlier visibility into where learning is breaking down' },
            { stat: '62.5%', label: 'of students wanted clearer support before receiving their final grade' },
          ].map((item) => (
            <div key={item.stat} className="bg-white px-8 py-10 hover:bg-[#faf7f2] transition-colors">
              <p className="font-heading text-[#228DC1] mb-2"
                style={{ fontSize: 'clamp(32px,3vw,48px)', letterSpacing: '-0.03em' }}>
                {item.stat}
              </p>
              <p className="text-[#0a1628]/55 text-[14px] font-normal leading-relaxed">{item.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

// -- Principles ----------------------------------------------------------------
function PrinciplesSection() {
  const [ref, inView] = useInView(0.08)
  return (
    <section className="py-24 bg-[#f0f4f8] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="mb-14">
          <p className="type-label text-[#228DC1] mb-4">Product Principles</p>
          <h2 className="font-heading text-[#0a1628] mb-3">
            Four foundations <span style={{ background:'#fde68a', padding:'0 6px 2px', borderRadius:4 }}>every decision</span> is built on
          </h2>
          <p className="text-[#0a1628]/60 text-base font-normal leading-relaxed max-w-xl">
            The principles that define how universities actually need AI to work.
          </p>
        </div>
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {principles.map((p, i) => (
            <div key={p.label}
              className="bg-white rounded-2xl p-8 hover:shadow-md transition-shadow"
              style={{
                borderTop: `3px solid ${p.color}`,
                boxShadow: '0 2px 12px rgba(10,22,40,0.06)',
                ...reveal(inView, i * 80),
              }}>
              {/* Icon */}
              <div className="w-11 h-11 flex items-center justify-center rounded-xl mb-6"
                style={{ background: p.color + '15', border: `1px solid ${p.color}25` }}>
                <FontAwesomeIcon icon={p.icon} style={{ width:18, height:18, color: p.color }} />
              </div>
              {/* Label */}
              <p className="type-label mb-3" style={{ color: p.color }}>{p.label}</p>
              {/* Desc */}
              <p className="text-[#0a1628]/60 text-sm font-normal leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// -- Audience card (shared between desktop and mobile) -------------------------
function AudienceCard({ a, i, inView, onDemoClick }: {
  a: typeof audiences[0]; i: number; inView: boolean; onDemoClick: () => void
}) {
  return (
    <div className="flex-1 relative bg-white rounded-2xl flex flex-col overflow-hidden"
      style={{ boxShadow:'0 4px 32px rgba(10,22,40,0.09)', border:`1px solid ${a.color}22`, ...reveal(inView, i*100) }}>
      <div style={{ height:4, background:`linear-gradient(90deg,${a.color},${a.color}99)` }}/>
      <div className="p-7 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background:a.soft, color:a.color }}>{a.icon}</div>
          <span style={{ fontSize:10, fontWeight:800, letterSpacing:'0.16em', textTransform:'uppercase', color:a.color }}>{a.label}</span>
        </div>
        <h3 className="text-[#0a1628] font-bold leading-snug mb-2" style={{ fontSize:20 }}>{a.headline}</h3>
        <p className="text-[#0a1628]/55 text-[13px] leading-relaxed mb-6">{a.desc}</p>
        <div className="space-y-2.5 flex-1">
          {a.points.map(pt => (
            <div key={pt} className="flex items-start gap-2.5">
              <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background:a.color }}>
                <svg width="8" height="8" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <p className="text-[#0a1628]/65 text-[13px] font-normal leading-relaxed">{pt}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 pt-5 border-t" style={{ borderColor:`${a.color}18` }}>
          <div className="flex items-center justify-between">
            <span className="text-[12px] font-bold" style={{ color:a.color }}>{a.stat}</span>
            <button type="button" onClick={onDemoClick} className="text-[12px] font-semibold px-4 py-2 rounded-lg transition-opacity hover:opacity-80" style={{ background:a.color, color:'white' }}>Learn more</button>
          </div>
        </div>
      </div>
    </div>
  )
}

// -- Audience ------------------------------------------------------------------
function AudienceSection({ onDemoClick }: { onDemoClick: () => void }) {
  const [ref, inView] = useInView(0.08)
  return (
    <section className="py-24 bg-[#f5f0e8]">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="mb-14">
          <p className="type-label text-[#228DC1] mb-4">Who It's For</p>
          <h2 className="font-heading text-[#0a1628]">
            Built for <span style={{ background:'#fde68a', padding:'0 6px 2px', borderRadius:4 }}>every layer</span> of the institution
          </h2>
        </div>
        <div ref={ref} className="flex flex-col lg:flex-row items-stretch gap-4 lg:gap-0">

          {/* Card 1 */}
          <AudienceCard a={audiences[0]} i={0} inView={inView} onDemoClick={onDemoClick} />

          {/* Connector: card2 ↔ card1 */}
          <div className="flex lg:flex-col items-center justify-center shrink-0" style={{ width:72, gap:6 }}>
            {/* ← */}
            <div style={{
              display:'flex', alignItems:'center', gap:6,
              background:'linear-gradient(135deg,#ede9fe,#ddd6fe)',
              border:'1px solid #c4b5fd',
              borderRadius:99, padding:'7px 12px',
              boxShadow:'0 4px 16px rgba(124,58,237,0.18)',
            }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 8H6M6 8L8.5 5.5M6 8L8.5 10.5" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span style={{ fontSize:10, fontWeight:800, color:'#7c3aed', letterSpacing:'0.08em' }}>TO</span>
            </div>
            {/* divider dot */}
            <div style={{ width:4, height:4, borderRadius:'50%', background:'#c4b5fd' }}/>
            {/* → */}
            <div style={{
              display:'flex', alignItems:'center', gap:6,
              background:'linear-gradient(135deg,#7c3aed,#6d28d9)',
              borderRadius:99, padding:'7px 12px',
              boxShadow:'0 4px 16px rgba(124,58,237,0.35)',
            }}>
              <span style={{ fontSize:10, fontWeight:800, color:'white', letterSpacing:'0.08em' }}>FROM</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 8H10M10 8L7.5 5.5M10 8L7.5 10.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Card 2 — Educators (hub) */}
          <AudienceCard a={audiences[1]} i={1} inView={inView} onDemoClick={onDemoClick} />

          {/* Connector: card2 ↔ card3 */}
          <div className="flex lg:flex-col items-center justify-center shrink-0" style={{ width:72, gap:6 }}>
            {/* → */}
            <div style={{
              display:'flex', alignItems:'center', gap:6,
              background:'linear-gradient(135deg,#7c3aed,#6d28d9)',
              borderRadius:99, padding:'7px 12px',
              boxShadow:'0 4px 16px rgba(124,58,237,0.35)',
            }}>
              <span style={{ fontSize:10, fontWeight:800, color:'white', letterSpacing:'0.08em' }}>TO</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 8H10M10 8L7.5 5.5M10 8L7.5 10.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            {/* divider dot */}
            <div style={{ width:4, height:4, borderRadius:'50%', background:'#c4b5fd' }}/>
            {/* ← */}
            <div style={{
              display:'flex', alignItems:'center', gap:6,
              background:'linear-gradient(135deg,#ede9fe,#ddd6fe)',
              border:'1px solid #c4b5fd',
              borderRadius:99, padding:'7px 12px',
              boxShadow:'0 4px 16px rgba(124,58,237,0.18)',
            }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 8H6M6 8L8.5 5.5M6 8L8.5 10.5" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span style={{ fontSize:10, fontWeight:800, color:'#7c3aed', letterSpacing:'0.08em' }}>FROM</span>
            </div>
          </div>

          {/* Card 3 */}
          <AudienceCard a={audiences[2]} i={2} inView={inView} onDemoClick={onDemoClick} />

        </div>

      </div>
    </section>
  )
}

// -- Main page -----------------------------------------------------------------
export default function AruvaPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)
  const openDemo = () => setIsDemoOpen(true)
  const closeDemo = () => setIsDemoOpen(false)

  return (
    <>
      <ScrollProgress />
      <ProductDemoModal
        isOpen={isDemoOpen}
        onClose={closeDemo}
        productName="Aruva"
        productLabel="AI for Education"
        title="See Aruva in action"
        description="Share a few details and we will show how Aruva maps student understanding, supports educators and turns course content into governed learning intelligence."
        logoSrc="/aruva-logo-vector.svg"
        accentColor="#228DC1"
        trustItems={['Higher education', 'Learning analytics', 'Governed AI', 'LMS integration', 'Bloom mapping', 'Academic support']}
        outcomes={[
          'A demo tailored to your courses, LMS and assessment model',
          'A walkthrough of Bloom-level insight and student learning profiles',
          'Guidance on governance, data residency and academic integrity',
          'A pilot plan for 2 to 3 courses with measurable learning impact',
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20" style={{ background: 'linear-gradient(135deg, #e8f4fa 0%, #dceef7 40%, #cde8f5 100%)' }}>

        {/* Diagonal dot-grid background pattern */}
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.45 }}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="heroGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <circle cx="1" cy="1" r="1" fill="rgba(34,141,193,0.35)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#heroGrid)" />
          </svg>
        </div>

        {/* Diagonal connecting lines */}
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.12 }}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="heroLines" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="40" x2="80" y2="40" stroke="rgba(34,141,193,1)" strokeWidth="0.5" />
                <line x1="40" y1="0" x2="40" y2="80" stroke="rgba(34,141,193,1)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#heroLines)" />
          </svg>
        </div>

        {/* Decorative + crosses */}
        {[
          { top: '18%', left: '6%' }, { top: '52%', left: '3%' },
          { top: '72%', left: '9%' }, { top: '30%', left: '42%' },
          { top: '62%', left: '38%' },
        ].map((pos, i) => (
          <div key={i} className="absolute pointer-events-none select-none text-[#228DC1]"
            style={{ top: pos.top, left: pos.left, fontSize: 18, opacity: 0.35, fontWeight: 300, lineHeight: 1 }}>+</div>
        ))}

        {/* Decorative diamond */}
        <div className="absolute pointer-events-none" style={{ top: '42%', left: '4.5%', opacity: 0.25 }}>
          <svg width="14" height="14" viewBox="0 0 14 14"><rect x="2" y="2" width="10" height="10" transform="rotate(45 7 7)" fill="none" stroke="#228DC1" strokeWidth="1.5"/></svg>
        </div>

        {/* Decorative dots */}
        <div className="absolute rounded-full pointer-events-none" style={{ top: '12%', left: '7%', width: 5, height: 5, background: 'rgba(34,141,193,0.3)' }} />
        <div className="absolute rounded-full pointer-events-none" style={{ top: '68%', left: '5%', width: 6, height: 6, background: 'rgba(5,150,105,0.35)' }} />

        {/* Radial glow */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 70% 30%, rgba(34,141,193,0.12) 0, transparent 55%)' }} />

        <div className="relative max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              {/* Aruva logo — full wordmark vector */}
              <div className="mb-8">
                <img
                  src="/aruva-logo-vector.svg"
                  alt="Aruva"
                  style={{
                    width: 'clamp(280px, 22vw, 360px)',
                    height: 'auto',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                />
              </div>
              <h1 className="font-serif-display text-[#0a1628] leading-[1.02] mb-6">
                AI that understands<br />
                <span style={{ color: '#228DC1' }}>how your students learn.</span>
              </h1>
              <p className="text-[#0a1628]/65 text-[16px] font-normal leading-[1.7] max-w-xl mb-10">
                Aruva maps every student interaction to Bloom's six levels of understanding in real time. Professors see exactly where learning breaks down, not just who failed the exam.
              </p>
              <div className="flex flex-wrap gap-4">
                <button type="button" onClick={openDemo}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#228DC1] text-white text-[14px] font-semibold rounded-lg hover:bg-[#1a6e99] transition-colors">
                  Request a Demo
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center lg:justify-end">
              <AruvaHeroDashboard />
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="bg-[#faf7f2] border-y border-amber-100 py-3.5 overflow-hidden">
        <div className="flex gap-10 animate-[marquee_35s_linear_infinite] whitespace-nowrap w-max">
          {[
            'Russell Group Universities','Teaching and Learning Teams','Academic Quality Officers',
            'Professors and Lecturers','UK Higher Education','Digital Transformation Teams',
            'IT and Data Governance','Student Experience Teams','Russell Group Universities',
            'Teaching and Learning Teams','Academic Quality Officers','Professors and Lecturers',
          ].map((item, i) => (
            <span key={i} className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#0a1628]/65 flex items-center gap-10">
              {item}<span className="w-1.5 h-1.5 rounded-full bg-[#fbbf24]" />
            </span>
          ))}
        </div>
      </div>

      {/* Why Aruva */}
      <section className="py-28 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="mb-12">
            <p className="type-label text-[#228DC1] mb-5">Why Aruva</p>
            <h2 className="font-heading text-[#0a1628] mb-5">
              Most AI answers questions directly.<br />
              <span className="bg-[#fde68a] px-1.5 py-0.5 rounded-sm">Aruva develops</span> students' critical thinking.
            </h2>
            <p className="text-[#0a1628]/60 text-[16px] font-normal leading-[1.75] max-w-2xl">
              Generic AI adds a chat interface to your institution. Aruva connects the entire academic lifecycle: syllabus, tutoring, assessment and analytics, into one <strong className="font-semibold text-[#0a1628]/80">continuous learning intelligence loop.</strong>
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-5">
            {/* Generic AI column */}
            <div className="border border-gray-200 rounded-2xl p-8 bg-gray-50/80">
              <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-[#0a1628]/30 mb-6">Generic AI platforms</p>
              <div className="space-y-4">
                {[
                  'Answers student questions from the open web',
                  'No awareness of your syllabus, rubric or course week',
                  'End of term grade is the only signal of progress',
                  'Learning gaps surface after the exam, too late to act',
                  'No control over how the AI behaves in your courses',
                  'No critical thinking scaffolding, one-size-fits-all responses for every student',
                ].map(item => (
                  <div key={item} className="flex items-start gap-3.5">
                    <div className="w-[18px] h-[18px] rounded-full border-2 border-gray-300 mt-0.5 shrink-0 flex items-center justify-center">
                      <div className="w-2 h-0.5 bg-gray-300" />
                    </div>
                    <p className="text-[14px] text-[#0a1628]/45 leading-snug">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Aruva column */}
            <div className="border border-[#228DC1]/30 rounded-2xl p-8 bg-[#faf7f2] shadow-[0_8px_40px_rgba(34,141,193,0.10)]">
              <div className="flex mb-6">
                <span className="inline-flex items-center px-3 py-1 bg-[#228DC1] text-white rounded-full text-[11px] font-bold uppercase tracking-[0.18em]">Aruva</span>
              </div>
              <div className="space-y-4">
                {[
                  'Every response guided by your syllabus, rubric and course week',
                  "Bloom's taxonomy mapped to each student interaction, automatically",
                  'Individual learning profiles rebuilt in real time, every session',
                  'Gap detection during the term so educators can intervene',
                  'Professor sets AI tone, depth, approved content and behaviour',
                  'Critical thinking scaffolded at every level with 100% personalisation, every student gets a uniquely adapted learning path',
                ].map(item => (
                  <div key={item} className="flex items-start gap-3.5">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center bg-[#228DC1] shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 12 12" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2 6l3 3 5-5" />
                      </svg>
                    </span>
                    <p className="text-[14px] text-[#0a1628]/75 leading-snug font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum agnostic */}
      <CurriculumAgnosticSection />

      {/* Bloom + DOK — Learning Intelligence */}
      <BloomInsightSection />

      {/* Multimodal */}
      <MultimodalSection />

      {/* Platform Architecture */}
      <PlatformDiagram />

      {/* How It Works */}
      <HowItWorksSection />

      {/* Four principles */}
      <PrinciplesSection />

      {/* Who it's for */}
      <AudienceSection onDemoClick={openDemo} />

      {/* Governance */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left */}
            <div>
              <p className="type-label text-[#228DC1] mb-4">Governance and Trust</p>
              <h2 className="font-heading text-[#0a1628] mb-5">
                AI that institutions<br />
                <span style={{ background:'#fde68a', padding:'0 6px 2px', borderRadius:4 }}>can govern.</span>
              </h2>
              <p className="text-[#0a1628]/65 text-base font-normal leading-relaxed mb-8">
                Built for the real requirements of higher education: data residency, audit trails, role based access and full control over how AI behaves.
              </p>
              {/* Dark card */}
              <div className="rounded-2xl p-8" style={{ background:'#0a1628' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5" style={{ background:'rgba(255,255,255,0.1)' }}>
                  <FontAwesomeIcon icon={faShield} style={{ width:18, height:18, color:'#fbbf24' }} />
                </div>
                <p className="type-label mb-3" style={{ color:'rgba(255,255,255,0.45)' }}>Governance Built In</p>
                <h3 className="font-bold text-white mb-3" style={{ fontSize:22, lineHeight:1.25 }}>
                  Designed for institutions with real compliance requirements
                </h3>
                <p style={{ fontSize:13, color:'rgba(255,255,255,0.55)', lineHeight:1.7 }}>
                  Audit trails, role based access and data residency are core to how Aruva is architected.
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-4">
              {/* 2x3 feature grid */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { tag:'DATA',      title:'Data residency',    desc:'Cloud, hybrid or on prem. Your institution keeps full ownership.' },
                  { tag:'ACCESS',    title:'Role based access',  desc:'Students, educators and admins each see exactly what they need.' },
                  { tag:'AUDIT',     title:'Full audit trail',   desc:'Every AI interaction is logged, attributed and traceable.' },
                  { tag:'INTEGRITY', title:'Academic integrity', desc:'Socratic only mode enforced. The AI never gives answers away.' },
                  { tag:'GDPR',      title:'GDPR aligned',       desc:'UK and EU data residency options. No third party model training.' },
                  { tag:'AI GOV',    title:'Auditable AI',       desc:'Rules for access, consent, escalation and AI behaviour enforcement.' },
                ].map(item => (
                  <div key={item.tag} className="bg-white rounded-xl p-5 border border-gray-100"
                    style={{ boxShadow:'0 1px 8px rgba(10,22,40,0.05)' }}>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background:'#228DC1' }}>
                        <FontAwesomeIcon icon={faCircleCheck} style={{ width:12, height:12, color:'white' }} />
                      </div>
                      <span className="type-label text-[#228DC1]">{item.tag}</span>
                    </div>
                    <p className="font-semibold text-[#0a1628] text-[14px] mb-1.5">{item.title}</p>
                    <p className="text-[#0a1628]/55 text-[12px] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Platform quality tags */}
              <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden divide-x divide-gray-200 bg-white shadow-[0_1px_6px_rgba(10,22,40,0.05)]">
                {[
                  { label: 'Traceable',   color: '#228DC1' },
                  { label: 'Auditable',   color: '#7c3aed' },
                  { label: 'Explainable', color: '#059669' },
                  { label: 'Measurable',  color: '#d97706' },
                  { label: 'With Logs',   color: '#e11d48' },
                ].map(q => (
                  <div key={q.label} className="flex-1 flex items-center justify-center px-4 py-3 hover:bg-gray-50 transition-colors cursor-default" style={{ borderTop: `2px solid ${q.color}` }}>
                    <span className="text-[12px] font-semibold whitespace-nowrap" style={{ color: q.color }}>{q.label}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pilot CTA */}
      <section className="py-24 bg-[#f8fafc] border-t border-gray-100 text-center">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="type-label text-[#228DC1] mb-4">Start Your Pilot</p>
          <h2 className="font-heading text-[#0a1628] mb-6">
            Ready to see Aruva<br />
            <span className="text-[#228DC1]">in your courses?</span>
          </h2>
          <p className="text-[#0a1628]/65 text-[18px] mb-10 max-w-2xl mx-auto font-normal leading-[1.7]">
            Select 2 to 3 courses, connect your LMS and measure real learning impact before scaling across your institution.
          </p>
          <button
            type="button"
            onClick={openDemo}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#228DC1] text-white font-semibold hover:bg-[#1a6e99] transition-colors"
          >
            Request a Demo
          </button>
        </div>
      </section>

    </>
  )
}


