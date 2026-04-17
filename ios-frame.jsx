<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Install Spending App on iPhone</title>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<script src="https://unpkg.com/react@18.3.1/umd/react.development.js" integrity="sha384-hD6/rw4ppMLGNu3tX5cjIb+uRZ7UkRJ6BPkLpg4hAu/6onKUg4lLsHAs9EBPT82L" crossorigin="anonymous"></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" integrity="sha384-u6aeetuaXnQ38mYT8rp6sbXaQe3NL9t+IBXmnYxwkUI2Hw4bsp2Wvmx4yRQF1uAm" crossorigin="anonymous"></script>
<script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" integrity="sha384-m08KidiNqLdpJqLq95G/LEi8Qvjl/xUYll3QILypMoQ65QorJ9Lvtp2RXYGBFj1y" crossorigin="anonymous"></script>
<script type="text/babel">

// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports: IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({ dark = false, time = '9:41' }) {
  const c = dark ? '#fff' : '#000';
  return (
    <div style={{
      display: 'flex', gap: 154, alignItems: 'center', justifyContent: 'center',
      padding: '21px 24px 19px', boxSizing: 'border-box',
      position: 'relative', zIndex: 20, width: '100%',
    }}>
      <div style={{ flex: 1, height: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 1.5 }}>
        <span style={{
          fontFamily: '-apple-system, "SF Pro", system-ui', fontWeight: 590,
          fontSize: 17, lineHeight: '22px', color: c,
        }}>{time}</span>
      </div>
      <div style={{ flex: 1, height: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7, paddingTop: 1, paddingRight: 1 }}>
        <svg width="19" height="12" viewBox="0 0 19 12">
          <rect x="0" y="7.5" width="3.2" height="4.5" rx="0.7" fill={c}/>
          <rect x="4.8" y="5" width="3.2" height="7" rx="0.7" fill={c}/>
          <rect x="9.6" y="2.5" width="3.2" height="9.5" rx="0.7" fill={c}/>
          <rect x="14.4" y="0" width="3.2" height="12" rx="0.7" fill={c}/>
        </svg>
        <svg width="17" height="12" viewBox="0 0 17 12">
          <path d="M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z" fill={c}/>
          <path d="M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z" fill={c}/>
          <circle cx="8.5" cy="10.5" r="1.5" fill={c}/>
        </svg>
        <svg width="27" height="13" viewBox="0 0 27 13">
          <rect x="0.5" y="0.5" width="23" height="12" rx="3.5" stroke={c} strokeOpacity="0.35" fill="none"/>
          <rect x="2" y="2" width="20" height="9" rx="2" fill={c}/>
          <path d="M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z" fill={c} fillOpacity="0.4"/>
        </svg>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({ children, dark = false, style = {} }) {
  return (
    <div style={{
      height: 44, minWidth: 44, borderRadius: 9999,
      position: 'relative', overflow: 'hidden',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: dark
        ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)'
        : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style,
    }}>
      {/* blur + tint */}
      <div style={{
        position: 'absolute', inset: 0, borderRadius: 9999,
        backdropFilter: 'blur(12px) saturate(180%)',
        WebkitBackdropFilter: 'blur(12px) saturate(180%)',
        background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)',
      }} />
      {/* shine */}
      <div style={{
        position: 'absolute', inset: 0, borderRadius: 9999,
        boxShadow: dark
          ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)'
          : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
        border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      }} />
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', padding: '0 4px' }}>
        {children}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({ title = 'Title', dark = false, trailingIcon = true }) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = (content) => (
    <IOSGlassPill dark={dark}>
      <div style={{ width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {content}
      </div>
    </IOSGlassPill>
  );
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: 10,
      paddingTop: 62, paddingBottom: 10, position: 'relative', zIndex: 5,
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 16px',
      }}>
        {/* back chevron */}
        {pillIcon(
          <svg width="12" height="20" viewBox="0 0 12 20" fill="none" style={{ marginLeft: -1 }}>
            <path d="M10 2L2 10l8 8" stroke={muted} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
        {/* trailing ellipsis */}
        {trailingIcon && pillIcon(
          <svg width="22" height="6" viewBox="0 0 22 6">
            <circle cx="3" cy="3" r="2.5" fill={muted}/>
            <circle cx="11" cy="3" r="2.5" fill={muted}/>
            <circle cx="19" cy="3" r="2.5" fill={muted}/>
          </svg>
        )}
      </div>
      {/* large title */}
      <div style={{
        padding: '0 16px',
        fontFamily: '-apple-system, system-ui',
        fontSize: 34, fontWeight: 700, lineHeight: '41px',
        color: text, letterSpacing: 0.4,
      }}>{title}</div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({ title, detail, icon, chevron = true, isLast = false, dark = false }) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return (
    <div style={{
      display: 'flex', alignItems: 'center', minHeight: 52,
      padding: '0 16px', position: 'relative',
      fontFamily: '-apple-system, system-ui', fontSize: 17,
      letterSpacing: -0.43,
    }}>
      {icon && (
        <div style={{
          width: 30, height: 30, borderRadius: 7, background: icon,
          marginRight: 12, flexShrink: 0,
        }} />
      )}
      <div style={{ flex: 1, color: text }}>{title}</div>
      {detail && <span style={{ color: sec, marginRight: 6 }}>{detail}</span>}
      {chevron && (
        <svg width="8" height="14" viewBox="0 0 8 14" style={{ flexShrink: 0 }}>
          <path d="M1 1l6 6-6 6" stroke={ter} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
      {!isLast && (
        <div style={{
          position: 'absolute', bottom: 0, right: 0,
          left: icon ? 58 : 16, height: 0.5, background: sep,
        }} />
      )}
    </div>
  );
}

function IOSList({ header, children, dark = false }) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return (
    <div>
      {header && (
        <div style={{
          fontFamily: '-apple-system, system-ui', fontSize: 13,
          color: hc, textTransform: 'uppercase',
          padding: '8px 36px 6px', letterSpacing: -0.08,
        }}>{header}</div>
      )}
      <div style={{
        background: bg, borderRadius: 26,
        margin: '0 16px', overflow: 'hidden',
      }}>{children}</div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children, width = 402, height = 874, dark = false,
  title, keyboard = false,
}) {
  return (
    <div style={{
      width, height, borderRadius: 48, overflow: 'hidden',
      position: 'relative', background: dark ? '#000' : '#F2F2F7',
      boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
      fontFamily: '-apple-system, system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased',
    }}>
      {/* dynamic island */}
      <div style={{
        position: 'absolute', top: 11, left: '50%', transform: 'translateX(-50%)',
        width: 126, height: 37, borderRadius: 24, background: '#000', zIndex: 50,
      }} />
      {/* status bar (absolute) */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10 }}>
        <IOSStatusBar dark={dark} />
      </div>
      {/* nav + content */}
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        {title !== undefined && <IOSNavBar title={title} dark={dark} />}
        <div style={{ flex: 1, overflow: 'auto' }}>{children}</div>
        {keyboard && <IOSKeyboard dark={dark} />}
      </div>
      {/* home indicator — always on top */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 60,
        height: 34, display: 'flex', justifyContent: 'center', alignItems: 'flex-end',
        paddingBottom: 8, pointerEvents: 'none',
      }}>
        <div style={{
          width: 139, height: 5, borderRadius: 100,
          background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)',
        }} />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({ dark = false }) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: <svg width="19" height="17" viewBox="0 0 19 17"><path d="M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z" fill={glyph}/></svg>,
    del: <svg width="23" height="17" viewBox="0 0 23 17"><path d="M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z" fill="none" stroke={glyph} strokeWidth="1.6" strokeLinejoin="round"/><path d="M10 5l7 7M17 5l-7 7" stroke={glyph} strokeWidth="1.6" strokeLinecap="round"/></svg>,
    ret: <svg width="20" height="14" viewBox="0 0 20 14"><path d="M18 1v6H4m0 0l4-4M4 7l4 4" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  };

  const key = (content, { w, flex, ret, fs = 25, k } = {}) => (
    <div key={k} style={{
      height: 42, borderRadius: 8.5,
      flex: flex ? 1 : undefined, width: w, minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs, fontWeight: 458, color: ret ? '#fff' : glyph,
    }}>{content}</div>
  );

  const row = (keys, pad = 0) => (
    <div style={{ display: 'flex', gap: 6.5, justifyContent: 'center', padding: `0 ${pad}px` }}>
      {keys.map(l => key(l, { flex: true, k: l }))}
    </div>
  );

  return (
    <div style={{
      position: 'relative', zIndex: 15, borderRadius: 27, overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      boxShadow: dark
        ? '0 -2px 20px rgba(0,0,0,0.09)'
        : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)',
    }}>
      {/* liquid glass bg — same recipe as nav pills */}
      <div style={{
        position: 'absolute', inset: 0, borderRadius: 27,
        backdropFilter: 'blur(12px) saturate(180%)',
        WebkitBackdropFilter: 'blur(12px) saturate(180%)',
        background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)',
      }} />
      <div style={{
        position: 'absolute', inset: 0, borderRadius: 27,
        boxShadow: dark
          ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)'
          : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
        border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
        pointerEvents: 'none',
      }} />

      {/* autocorrect bar */}
      <div style={{
        display: 'flex', gap: 20, alignItems: 'center',
        padding: '8px 22px 13px', width: '100%', boxSizing: 'border-box',
        position: 'relative',
      }}>
        {['"The"', 'the', 'to'].map((w, i) => (
          <React.Fragment key={i}>
            {i > 0 && <div style={{ width: 1, height: 25, background: '#ccc', opacity: 0.3 }} />}
            <div style={{
              flex: 1, textAlign: 'center',
              fontFamily: '-apple-system, system-ui', fontSize: 17,
              color: sugg, letterSpacing: -0.43, lineHeight: '22px',
            }}>{w}</div>
          </React.Fragment>
        ))}
      </div>

      {/* key layout */}
      <div style={{
        display: 'flex', flexDirection: 'column', gap: 13,
        padding: '0 6.5px', width: '100%', boxSizing: 'border-box',
        position: 'relative',
      }}>
        {row(['q','w','e','r','t','y','u','i','o','p'])}
        {row(['a','s','d','f','g','h','j','k','l'], 20)}
        <div style={{ display: 'flex', gap: 14.25, alignItems: 'center' }}>
          {key(icons.shift, { w: 45, k: 'shift' })}
          <div style={{ display: 'flex', gap: 6.5, flex: 1 }}>
            {['z','x','c','v','b','n','m'].map(l => key(l, { flex: true, k: l }))}
          </div>
          {key(icons.del, { w: 45, k: 'del' })}
        </div>
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          {key('ABC', { w: 92.25, fs: 18, k: 'abc' })}
          {key('', { flex: true, k: 'space' })}
          {key(icons.ret, { w: 92.25, ret: true, k: 'ret' })}
        </div>
      </div>

      {/* bottom spacer (emoji+mic area, icons omitted) */}
      <div style={{ height: 56, width: '100%', position: 'relative' }} />
    </div>
  );
}

Object.assign(window, {
  IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard,
});

</script>
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: 'DM Sans', sans-serif;
    background: oklch(0.97 0.005 240);
    color: oklch(0.16 0.012 240);
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
  }
</style>
</head>
<body>
<div id="root"></div>
<script type="text/babel">
const { useState } = React;

const STEPS = [
  {
    n: 1,
    title: 'Host the files',
    desc: 'Upload all project files to a web host. Free options: GitHub Pages, Netlify, or Vercel — just drag & drop the folder.',
    icon: '☁️',
    tip: 'The URL must be HTTPS for the PWA to install properly.',
  },
  {
    n: 2,
    title: 'Open in Safari',
    desc: 'On your iPhone, open the app URL in Safari. PWA install does not work in Chrome or Firefox on iOS.',
    icon: '🧭',
    tip: 'Make sure you\'re using Safari — it\'s the only browser that supports "Add to Home Screen" on iOS.',
  },
  {
    n: 3,
    title: 'Tap the Share button',
    desc: 'Tap the Share icon at the bottom of Safari (the square with an arrow pointing up).',
    icon: '↑',
    tip: null,
    highlight: true,
  },
  {
    n: 4,
    title: 'Tap "Add to Home Screen"',
    desc: 'Scroll down in the share sheet and tap "Add to Home Screen". The app name will show as "Spending".',
    icon: '+',
    tip: null,
    highlight: true,
  },
  {
    n: 5,
    title: 'Tap "Add"',
    desc: 'Confirm by tapping "Add" in the top right. The Spending app icon will appear on your home screen.',
    icon: '✓',
    tip: 'The app opens full-screen — no browser bar. All your data is saved on your device.',
  },
];

// Mini mockup screen content rendered inside device
function MockScreen({ step }) {
  const screens = {
    1: (
      <div style={{padding:'20px 16px', display:'flex', flexDirection:'column', gap:12}}>
        <div style={{background:'#fff',borderRadius:14,padding:16,boxShadow:'0 2px 8px rgba(0,0,0,.07)'}}>
          <div style={{fontSize:11,fontWeight:700,color:'#888',letterSpacing:'.06em',marginBottom:8}}>BUDGET</div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:8}}>
            {['€2,221','€1,843','€378'].map((v,i)=>(<div key={i} style={{background:'#f5f5f7',borderRadius:10,padding:'10px 8px',textAlign:'center'}}><div style={{fontSize:12,fontWeight:700}}>{v}</div></div>))}
          </div>
        </div>
        <div style={{background:'#fff',borderRadius:14,padding:14,boxShadow:'0 2px 8px rgba(0,0,0,.07)'}}>
          <div style={{fontSize:11,fontWeight:700,color:'#888',letterSpacing:'.06em',marginBottom:10}}>CATEGORIES</div>
          {['Rent','Food','Netflix','Claude'].map((c,i)=>(
            <div key={c} style={{display:'flex',alignItems:'center',gap:8,marginBottom:8}}>
              <div style={{width:3,height:22,borderRadius:2,background:['#4f72e8','#10b981','#ef4444','#8b5cf6'][i]}}/>
              <span style={{flex:1,fontSize:13,fontWeight:500}}>{c}</span>
              <div style={{height:4,width:60,background:'#eee',borderRadius:99,overflow:'hidden'}}><div style={{height:'100%',width:['100%','72%','100%','50%'][i],background:['#4f72e8','#10b981','#ef4444','#8b5cf6'][i],borderRadius:99}}/></div>
            </div>
          ))}
        </div>
      </div>
    ),
    2: (
      <div style={{background:'#f2f2f7',height:'100%',display:'flex',flexDirection:'column'}}>
        <div style={{background:'#fff',borderTop:'1px solid #ddd',padding:'10px 16px',marginTop:'auto',display:'flex',justifyContent:'space-around',alignItems:'center'}}>
          {['←','↻','↑','□','⋯'].map((ic,i)=>(<span key={i} style={{fontSize:18,color: i===2 ? '#4f72e8':'#999',fontWeight:i===2?700:400}}>{ic}</span>))}
        </div>
      </div>
    ),
    3: (
      <div style={{background:'#f2f2f7',height:'100%',position:'relative'}}>
        <div style={{position:'absolute',bottom:0,left:0,right:0,background:'#fff',borderRadius:'20px 20px 0 0',boxShadow:'0 -4px 24px rgba(0,0,0,.12)',padding:'20px 0 40px'}}>
          <div style={{textAlign:'center',marginBottom:16}}><div style={{width:40,height:4,borderRadius:2,background:'#ddd',margin:'0 auto'}}/></div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:4,padding:'0 16px',marginBottom:16}}>
            {['AirDrop','Message','Mail','Notes'].map(s=>(<div key={s} style={{display:'flex',flexDirection:'column',alignItems:'center',gap:4}}><div style={{width:52,height:52,borderRadius:12,background:'#f0f0f0'}}/><span style={{fontSize:9,color:'#333',textAlign:'center'}}>{s}</span></div>))}
          </div>
          <div style={{padding:'0 16px',display:'flex',flexDirection:'column',gap:0}}>
            {['Add to Home Screen','Add Bookmark','Add to Reading List'].map((item,i)=>(
              <div key={item} style={{padding:'13px 0',borderBottom:i<2?'1px solid #eee':'none',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                <span style={{fontSize:14,color: i===0?'#4f72e8':'#333',fontWeight: i===0?600:400}}>{item}</span>
                {i===0&&<span style={{fontSize:20,color:'#4f72e8',fontWeight:300}}>+</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    4: (
      <div style={{background:'#f2f2f7',height:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <div style={{background:'#fff',borderRadius:16,padding:20,margin:20,boxShadow:'0 4px 20px rgba(0,0,0,.12)',textAlign:'center'}}>
          <img src="icon-180.png" style={{width:64,height:64,borderRadius:14,marginBottom:12}} onError={e=>e.target.style.display='none'}/>
          <div style={{fontSize:16,fontWeight:700,marginBottom:4}}>Spending</div>
          <div style={{fontSize:12,color:'#888',marginBottom:16}}>yoursite.com</div>
          <div style={{display:'flex',justifyContent:'space-between'}}>
            <button style={{background:'none',border:'none',color:'#4f72e8',fontSize:16,fontWeight:400,cursor:'pointer'}}>Cancel</button>
            <button style={{background:'none',border:'none',color:'#4f72e8',fontSize:16,fontWeight:700,cursor:'pointer'}}>Add</button>
          </div>
        </div>
      </div>
    ),
    5: (
      <div style={{background:'#f2f2f7',height:'100%',padding:20}}>
        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:12,marginTop:16}}>
          {['Photos','Camera','Maps','Weather','Safari','Mail','Music','Settings','Spending'].map((app,i)=>(
            <div key={app} style={{display:'flex',flexDirection:'column',alignItems:'center',gap:4}}>
              <div style={{width:54,height:54,borderRadius:12,background: app==='Spending' ? 'linear-gradient(135deg,#3a5fd8,#6a3fd8)':'#ddd',display:'flex',alignItems:'center',justifyContent:'center',boxShadow: app==='Spending'?'0 4px 12px rgba(79,114,232,.4)':'none',transform: app==='Spending'?'scale(1.08)':'none',transition:'transform .2s'}}>
                {app==='Spending'&&<span style={{color:'#fff',fontSize:22,fontWeight:700}}>€</span>}
              </div>
              <span style={{fontSize:9,color:'#333',textAlign:'center'}}>{app}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  };
  return screens[step] || screens[1];
}

function Guide() {
  const [active, setActive] = useState(1);

  return (
    <div style={{minHeight:'100vh',padding:'48px 24px 64px',display:'flex',flexDirection:'column',alignItems:'center'}}>
      {/* Title */}
      <div style={{textAlign:'center',marginBottom:48}}>
        <img src="icon-180.png" style={{width:72,height:72,borderRadius:16,marginBottom:16,boxShadow:'0 8px 24px rgba(79,114,232,.3)'}} onError={e=>e.target.style.display='none'}/>
        <h1 style={{fontSize:32,fontWeight:800,letterSpacing:'-.02em',marginBottom:8}}>Install on iPhone</h1>
        <p style={{fontSize:16,color:'oklch(0.48 0.010 240)',maxWidth:400}}>Add the Spending app to your home screen for a native-like experience — offline, full-screen, no browser.</p>
      </div>

      {/* Two-column layout: steps + phone */}
      <div style={{display:'flex',gap:48,alignItems:'flex-start',width:'100%',maxWidth:900,flexWrap:'wrap',justifyContent:'center'}}>

        {/* Steps */}
        <div style={{flex:'1 1 360px',maxWidth:420}}>
          {STEPS.map(s=>{
            const isActive = active === s.n;
            return (
              <div key={s.n} onClick={()=>setActive(s.n)}
                style={{display:'flex',gap:16,padding:'18px 20px',borderRadius:16,marginBottom:10,cursor:'pointer',
                  background: isActive ? '#fff' : 'transparent',
                  boxShadow: isActive ? '0 4px 20px rgba(0,0,0,.08)' : 'none',
                  border: isActive ? '1.5px solid oklch(0.905 0.006 240)' : '1.5px solid transparent',
                  transition:'all .2s'}}>
                <div style={{width:40,height:40,borderRadius:12,
                  background: isActive ? '#4f72e8' : 'oklch(0.93 0.006 240)',
                  display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,
                  color: isActive ? '#fff' : 'oklch(0.48 0.010 240)',
                  fontSize: s.n<=2 ? 18 : 20, fontWeight:700, transition:'all .2s'}}>
                  {s.n}
                </div>
                <div style={{flex:1}}>
                  <div style={{fontWeight:700,fontSize:15,marginBottom:4,color: isActive?'oklch(0.16 0.012 240)':'oklch(0.4 0.010 240)'}}>{s.title}</div>
                  <div style={{fontSize:13,color:'oklch(0.48 0.010 240)',lineHeight:1.5,textWrap:'pretty'}}>{s.desc}</div>
                  {isActive && s.tip && (
                    <div style={{marginTop:10,padding:'8px 12px',background:'oklch(0.97 0.015 240)',borderRadius:8,fontSize:12,color:'#4f72e8',fontWeight:500,borderLeft:'3px solid #4f72e8'}}>
                      💡 {s.tip}
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {/* Note */}
          <div style={{marginTop:16,padding:'16px 20px',background:'#fff',borderRadius:16,border:'1.5px solid oklch(0.905 0.006 240)',fontSize:13,color:'oklch(0.48 0.010 240)',lineHeight:1.6}}>
            <strong style={{color:'oklch(0.16 0.012 240)'}}>Works offline.</strong> Once installed, the app works without internet. All your spending data is stored privately on your device — nothing is sent to any server.
          </div>
        </div>

        {/* Phone mockup */}
        <div style={{flexShrink:0,position:'sticky',top:32}}>
          <IOSDevice width={320} height={620} dark={false}>
            <div style={{paddingTop:60,height:'100%',overflow:'hidden'}}>
              <MockScreen step={active}/>
            </div>
          </IOSDevice>
          {/* Step indicator */}
          <div style={{display:'flex',justifyContent:'center',gap:6,marginTop:16}}>
            {STEPS.map(s=>(
              <button key={s.n} onClick={()=>setActive(s.n)}
                style={{width: active===s.n?20:8,height:8,borderRadius:99,border:'none',cursor:'pointer',
                  background: active===s.n?'#4f72e8':'oklch(0.87 0.006 240)',transition:'all .2s'}}/>
            ))}
          </div>
          <p style={{textAlign:'center',marginTop:12,fontSize:12,color:'oklch(0.60 0.008 240)'}}>Step {active} of {STEPS.length}</p>
        </div>
      </div>

      {/* CTA */}
      <div style={{marginTop:48,textAlign:'center'}}>
        <a href="Spending App.html"
          style={{display:'inline-flex',alignItems:'center',gap:10,background:'#4f72e8',color:'#fff',textDecoration:'none',
            padding:'14px 28px',borderRadius:14,fontWeight:700,fontSize:15,boxShadow:'0 4px 16px rgba(79,114,232,.35)'}}>
          Open Spending App →
        </a>
        <p style={{marginTop:12,fontSize:13,color:'oklch(0.55 0.008 240)'}}>Then follow the steps above to install it on your iPhone</p>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Guide/>);
</script>
</body>
</html>
