const $ = (s, el = document) => el.querySelector(s);
const app = document.getElementById("app");

const PEOPLE = [
  { id: "lily", name: "Lily", src: "photos/lily.jpg" },
  { id: "mammy", name: "Mammy", src: "photos/mammy.jpg" },
  { id: "daddy", name: "Daddy", src: "photos/daddy.jpg" },
  { id: "daithi", name: "Daithí", src: "photos/daithi.jpg" },
  { id: "rocco", name: "Rocco", src: "photos/rocco.jpg" },
  { id: "teddy", name: "Teddy", src: "photos/teddy.jpg" },
  { id: "ziggy", name: "Ziggy", src: "photos/ziggy.jpg" },
];

const STUFF = [
  { id: "sofa", name: "Sofa" },
  { id: "bed", name: "Bed" },
  { id: "table", name: "Table" },
  { id: "chair", name: "Chair" },
  { id: "rug", name: "Rug" },
  { id: "lamp", name: "Lamp" },
  { id: "plant", name: "Plant" },
  { id: "slide", name: "Slide" },
  { id: "swing", name: "Swing" },
  { id: "climb", name: "Climb" },
  { id: "treehouse", name: "Tree house" },
];

const HIGHER = [
  { id: "kitchen", name: "Kitchen", d: "6.60 × 4.00", note: "Higher. Triple aspect. Door to balcony.", x: 40, y: 40, w: 220, h: 150 },
  { id: "utility", name: "Utility", d: "3.93 × 1.58", note: "Higher. Side door.", x: 40, y: 200, w: 220, h: 70 },
  { id: "balcony", name: "Balcony", d: "looks down", note: "Higher. Looks down over the garden.", x: 8, y: 40, w: 28, h: 150 },
  { id: "living", name: "Living", d: "11.40 × 4.25", note: "Higher. Stairs down. Door to balcony.", x: 270, y: 40, w: 380, h: 150 },
  { id: "dining", name: "Dining", d: "3.93 × 2.20", note: "Higher. Dual aspect.", x: 660, y: 40, w: 150, h: 90 },
  { id: "hall", name: "Hall", d: "2.40 × 1.81", note: "Higher. Green front door.", x: 660, y: 140, w: 150, h: 80 },
  { id: "office", name: "Office", d: "3.93 × 2.37", note: "Higher. Window to front.", x: 820, y: 40, w: 150, h: 180 },
];

const LOWER = [
  { id: "bed4", name: "Bed 4", d: "5.30 × 3.87", note: "Lower. Window to the side. Ensuite + WIR.", x: 30, y: 30, w: 250, h: 120 },
  { id: "bed1", name: "Bed 1", d: "5.50 × 3.90", note: "Lower. Window to the side. Ensuite + WIR.", x: 700, y: 30, w: 260, h: 120 },
  { id: "sauna", name: "Sauna", d: "2.00 × 1.90", note: "Lower. Timber room.", x: 30, y: 160, w: 140, h: 70 },
  { id: "hotpress", name: "Hotpress", d: "2.00 × 0.90", note: "Lower. Under the stairs.", x: 180, y: 160, w: 120, h: 70 },
  { id: "lhall", name: "Hall", d: "door to rear", note: "Lower. Door out to the garden.", x: 310, y: 160, w: 260, h: 70 },
  { id: "bath", name: "Jacuzzi", d: "2.70 × 2.06", note: "Lower. Corner jacuzzi bath.", x: 580, y: 160, w: 180, h: 70 },
  { id: "bed3", name: "Lily's room", d: "6.37 × 4.87", note: "Lower. Rear window in the trees.", x: 30, y: 240, w: 360, h: 140 },
  { id: "bed2", name: "Bed 2", d: "6.37 × 4.25", note: "Lower. Window to the rear.", x: 410, y: 240, w: 360, h: 140 },
];

const GARDEN = [
  { id: "trees", name: "Tree house", d: "in the canopy", note: "Outside. Trees above the lower bedrooms.", x: 30, y: 30, w: 280, h: 160 },
  { id: "lawn", name: "Lawn", d: "lowest", note: "Outside. Garden is lower than the house.", x: 330, y: 80, w: 360, h: 200 },
  { id: "play", name: "Playground", d: "on the lawn", note: "Outside. Climb and slide.", x: 710, y: 40, w: 250, h: 180 },
];

const COLORS = {
  kitchen: "#f2d7b5", utility: "#e4ddd2", balcony: "#cfd8c8", living: "#f0e2c8",
  dining: "#ead7b8", hall: "#ddd4c6", office: "#e7dcc8",
  bed4: "#ead9e2", bed1: "#e2d6ea", sauna: "#d7b48a", hotpress: "#d9d1c6",
  lhall: "#ddd4c6", bath: "#c9d7e2", bed3: "#f0c9d4", bed2: "#e3d3c4",
  trees: "#8eae7a", lawn: "#b7c98a", play: "#c3b07a",
};

const VISITORS = [
  { id: "mammy", name: "Mammy", ok: true, src: "photos/mammy.jpg", line: "It's Mammy. Let her in?" },
  { id: "daddy", name: "Daddy", ok: true, src: "photos/daddy.jpg", line: "It's Daddy in his cap. Let him in?" },
  { id: "lily", name: "Lily", ok: true, src: "photos/lily.jpg", line: "Lily the Legend is home." },
  { id: "rocco", name: "Rocco", ok: true, src: "photos/rocco.jpg", line: "Rocco the rottie. In or out?" },
  { id: "teddy", name: "Teddy", ok: true, src: "photos/teddy.jpg", line: "Teddy the mutt. In or out?" },
  { id: "trick1", name: "Moon mask", ok: false, src: "", line: "Someone in a moon mask. Family?" },
  { id: "trick2", name: "Lantern head", ok: false, src: "", line: "A lantern where a face should be." },
  { id: "trick3", name: "Soot dress", ok: false, src: "", line: "A sooty stranger at the green door." },
];

const KEY = "lilys-world-v1";
const store = JSON.parse(localStorage.getItem(KEY) || "{}");
function save() { localStorage.setItem(KEY, JSON.stringify(store)); }
function roomState(id) {
  if (!store[id]) store[id] = { pieces: [] };
  return store[id];
}

let view = "home";
let floor = "higher";
let roomId = null;
let tray = "people";
let selected = null;
let drawings = store.drawings || [];

function go(v, extra) {
  view = v;
  if (extra?.floor) floor = extra.floor;
  if (extra?.room) roomId = extra.room;
  if (v !== "play") selected = null;
  render();
}

function roomsOf() {
  return floor === "lower" ? LOWER : floor === "garden" ? GARDEN : HIGHER;
}

function findRoom(id) {
  return [...HIGHER, ...LOWER, ...GARDEN].find((r) => r.id === id);
}

function render() {
  if (view === "home") return home();
  if (view === "draw") return draw();
  if (view === "night") return night();
  if (view === "play") return play();
  house();
}

function home() {
  app.innerHTML = `
    <section class="screen home">
      <h1>Lily's World</h1>
      <p class="sub">Hillside · Draw · Play · Night</p>
      <button class="big draw" data-go="draw"><i class="mark">✎</i><div><strong>Draw</strong><span>Pictures, then put them in the house</span></div></button>
      <button class="big house" data-go="house"><i class="mark">⌂</i><div><strong>House</strong><span>The real layout. Living up. Bedrooms down.</span></div></button>
      <button class="big night" data-go="night"><i class="mark">☽</i><div><strong>Night</strong><span>Who is at the green door?</span></div></button>
    </section>`;
  app.querySelectorAll("[data-go]").forEach((b) => b.onclick = () => go(b.dataset.go));
}

function house() {
  const rooms = roomsOf();
  const title = floor === "lower" ? "Lower — bedrooms" : floor === "garden" ? "Garden — outside" : "Higher — living";
  const hint = floor === "lower"
    ? "Garden is below. Windows in the trees."
    : floor === "garden"
      ? "Lowest. Look up at the house."
      : "Front / driveway is the right. Views left.";
  app.innerHTML = `
    <section class="screen">
      <div class="bar">
        <button class="back" id="back">←</button>
        <div><h1>${title}</h1><p>${hint} North on the plans points right.</p></div>
      </div>
      <div class="floors">
        <button data-f="higher" class="${floor === "higher" ? "on" : ""}">Higher</button>
        <button data-f="lower" class="${floor === "lower" ? "on" : ""}">Lower</button>
        <button data-f="garden" class="${floor === "garden" ? "on" : ""}">Garden</button>
      </div>
      <div class="stage">${planSvg(rooms)}</div>
    </section>`;
  $("#back").onclick = () => go("home");
  app.querySelectorAll("[data-f]").forEach((b) => b.onclick = () => go("house", { floor: b.dataset.f }));
  app.querySelectorAll(".room").forEach((g) => g.onclick = () => go("play", { room: g.dataset.id }));
}

function planSvg(rooms) {
  const marks = rooms.map((r) => `
    <g class="room" data-id="${r.id}">
      <rect class="fill" x="${r.x}" y="${r.y}" width="${r.w}" height="${r.h}" rx="14" fill="${COLORS[r.id]}" stroke="#1a1614" stroke-width="2"/>
      <text class="lab" x="${r.x + 12}" y="${r.y + 28}">${r.name}</text>
      <text class="lab" x="${r.x + 12}" y="${r.y + 46}" fill="#6b635c">${r.d}</text>
    </g>`).join("");
  const extra = floor === "higher"
    ? `<text class="lab" x="280" y="210">stairs down ▾</text>
       <text class="lab" x="700" y="250">green front door →</text>
       <text class="lab" x="20" y="320">views / garden this way</text>`
    : floor === "lower"
      ? `<text class="lab" x="330" y="150">stairs from living ▴</text>
         <text class="lab" x="330" y="228">rear door to garden</text>`
      : `<text class="lab" x="340" y="60">house uphill ▴ living higher, bedrooms in the trees</text>`;
  return `<svg viewBox="0 0 1000 400" preserveAspectRatio="xMidYMid meet">${marks}${extra}</svg>`;
}

function play() {
  const room = findRoom(roomId) || HIGHER[3];
  const st = roomState(room.id);
  const bg = room.id === "bed3" ? "photos/bedroom.jpg" : room.id === "balcony" ? "photos/balcony.jpg" : "";
  app.innerHTML = `
    <section class="screen">
      <div class="bar">
        <button class="back" id="back">←</button>
        <div><h1>${room.name}</h1><p>${room.note}</p></div>
      </div>
      <div class="stage" id="stage">
        <div class="play-bg ${bg ? "" : "tinted"}" style="${bg ? `background-image:url('${bg}')` : `background:${COLORS[room.id]}`}"></div>
      </div>
      <div class="tools" id="tools"></div>
      <div class="trays">
        <button data-t="people" class="${tray === "people" ? "on" : ""}">People</button>
        <button data-t="stuff" class="${tray === "stuff" ? "on" : ""}">Stuff</button>
        <button data-t="mine" class="${tray === "mine" ? "on" : ""}">Lily's</button>
      </div>
      <div class="dock" id="dock"></div>
    </section>`;
  $("#back").onclick = () => go("house");
  app.querySelectorAll("[data-t]").forEach((b) => b.onclick = () => { tray = b.dataset.t; play(); });
  paintPieces(st);
  paintDock();
  paintTools();
}

function paintPieces(st) {
  const stage = $("#stage");
  st.pieces.forEach((p) => {
    const el = document.createElement("button");
    el.className = "piece" + (selected === p.id ? " sel" : "");
    el.style.left = p.x + "%";
    el.style.top = p.y + "%";
    el.style.width = (p.kind === "person" ? 18 : 16) * (p.scale || 1) + "vmin";
    el.style.height = (p.kind === "person" ? 18 : 14) * (p.scale || 1) + "vmin";
    el.style.zIndex = Math.round(p.y);
    if (p.kind === "person" || p.kind === "draw") {
      el.innerHTML = `<img class="${p.kind === "person" ? "avatar" : ""}" src="${p.src}" alt="${p.name}" />`;
    } else {
      el.innerHTML = furnSvg(p.catalog);
    }
    bindDrag(el, p);
    stage.appendChild(el);
  });
}

function paintDock() {
  const dock = $("#dock");
  if (tray === "people") {
    PEOPLE.forEach((c) => {
      const b = document.createElement("button");
      b.className = "chip";
      b.innerHTML = `<img src="${c.src}" alt=""><b>${c.name}</b>`;
      b.onclick = () => addPiece({ kind: "person", catalog: c.id, name: c.name, src: c.src });
      dock.appendChild(b);
    });
  } else if (tray === "stuff") {
    STUFF.forEach((f) => {
      const b = document.createElement("button");
      b.className = "chip";
      b.innerHTML = `${furnSvg(f.id)}<b>${f.name}</b>`;
      b.onclick = () => addPiece({ kind: "furn", catalog: f.id, name: f.name });
      dock.appendChild(b);
    });
  } else {
    const drawBtn = document.createElement("button");
    drawBtn.className = "chip";
    drawBtn.innerHTML = `<b>+ Draw</b>`;
    drawBtn.onclick = () => go("draw");
    dock.appendChild(drawBtn);
    drawings.forEach((d, i) => {
      const b = document.createElement("button");
      b.className = "chip";
      b.innerHTML = `<img src="${d}" alt=""><b>Mine ${i + 1}</b>`;
      b.onclick = () => addPiece({ kind: "draw", catalog: "draw", name: "Lily made this", src: d });
      dock.appendChild(b);
    });
  }
}

function paintTools() {
  const tools = $("#tools");
  const st = roomState(roomId);
  const p = st.pieces.find((x) => x.id === selected);
  if (!p) {
    tools.innerHTML = `<span style="color:var(--muted);font-size:13px">Tap People or Stuff. Drop it in. Drag it.</span>`;
    return;
  }
  tools.innerHTML = `<b>${p.name}</b>
    <button id="big">Bigger</button>
    <button id="small">Smaller</button>
    <button class="go" id="away">Put away</button>`;
  $("#big").onclick = () => { p.scale = Math.min(2.2, (p.scale || 1) + 0.15); save(); play(); };
  $("#small").onclick = () => { p.scale = Math.max(0.6, (p.scale || 1) - 0.15); save(); play(); };
  $("#away").onclick = () => { st.pieces = st.pieces.filter((x) => x.id !== p.id); selected = null; save(); play(); };
}

function addPiece(partial) {
  const st = roomState(roomId);
  const p = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 5),
    x: 42 + Math.random() * 20,
    y: 70 + Math.random() * 12,
    scale: 1,
    ...partial,
  };
  st.pieces.push(p);
  selected = p.id;
  save();
  play();
}

function bindDrag(el, p) {
  const stage = $("#stage");
  let ox = 0, oy = 0, moving = false;
  el.onpointerdown = (e) => {
    selected = p.id;
    paintTools();
    const r = stage.getBoundingClientRect();
    ox = ((e.clientX - r.left) / r.width) * 100 - p.x;
    oy = ((e.clientY - r.top) / r.height) * 100 - p.y;
    moving = true;
    el.setPointerCapture(e.pointerId);
  };
  el.onpointermove = (e) => {
    if (!moving) return;
    const r = stage.getBoundingClientRect();
    p.x = Math.min(92, Math.max(8, ((e.clientX - r.left) / r.width) * 100 - ox));
    p.y = Math.min(90, Math.max(18, ((e.clientY - r.top) / r.height) * 100 - oy));
    el.style.left = p.x + "%";
    el.style.top = p.y + "%";
    el.style.zIndex = Math.round(p.y);
  };
  el.onpointerup = () => { moving = false; save(); };
}

function furnSvg(id) {
  const c = "#c45b6a";
  const d = "#1a1614";
  const paths = {
    sofa: `<rect x="6" y="28" width="88" height="36" rx="10" fill="${c}"/><rect x="12" y="18" width="32" height="24" rx="8" fill="${d}"/>`,
    bed: `<rect x="10" y="28" width="80" height="36" rx="8" fill="${c}"/><rect x="14" y="16" width="28" height="18" rx="6" fill="${d}"/>`,
    table: `<ellipse cx="50" cy="36" rx="40" ry="14" fill="${c}"/><rect x="22" y="36" width="8" height="24" fill="${d}"/>`,
    chair: `<rect x="28" y="18" width="44" height="40" rx="8" fill="${c}"/>`,
    rug: `<ellipse cx="50" cy="40" rx="44" ry="22" fill="${c}"/>`,
    lamp: `<rect x="46" y="36" width="8" height="32" fill="${d}"/><path d="M30 36 L70 36 L62 12 L38 12 Z" fill="${c}"/>`,
    plant: `<rect x="40" y="50" width="20" height="20" fill="${d}"/><circle cx="50" cy="30" r="18" fill="#6b8f71"/>`,
    slide: `<path d="M18 16 L42 16 L78 64 L18 64 Z" fill="${c}"/>`,
    swing: `<line x1="24" y1="8" x2="24" y2="52" stroke="${d}" stroke-width="4"/><rect x="22" y="52" width="56" height="10" rx="4" fill="${c}"/>`,
    climb: `<rect x="12" y="8" width="8" height="64" fill="${d}"/><rect x="12" y="20" width="76" height="6" fill="${c}"/>`,
    treehouse: `<rect x="22" y="22" width="56" height="38" rx="4" fill="${c}"/><polygon points="18,24 50,6 82,24" fill="${d}"/>`,
  };
  return `<svg class="furn" viewBox="0 0 100 80">${paths[id] || paths.chair}</svg>`;
}

let ink = "#1a1614";
let drawing = false;
function draw() {
  app.innerHTML = `
    <section class="screen">
      <div class="bar">
        <button class="back" id="back">←</button>
        <div><h1>Draw</h1><p>Make a sofa, a face, a pattern. Then send it to the house.</p></div>
      </div>
      <canvas class="draw" id="cv"></canvas>
      <div class="paints" id="paints"></div>
      <div class="tools">
        <button id="wipe">Wipe</button>
        <button class="go" id="save">Into the house</button>
      </div>
    </section>`;
  $("#back").onclick = () => go("home");
  const paints = ["#1a1614", "#c45b6a", "#6b8f71", "#e8b448", "#4a7c8c", "#fffbf4"];
  paints.forEach((c) => {
    const b = document.createElement("button");
    b.className = "swatch";
    b.style.background = c;
    b.onclick = () => (ink = c);
    $("#paints").appendChild(b);
  });
  const cv = $("#cv");
  const ctx = cv.getContext("2d");
  function size() {
    const r = cv.getBoundingClientRect();
    cv.width = r.width * 2;
    cv.height = r.height * 2;
    ctx.fillStyle = "#fffbf4";
    ctx.fillRect(0, 0, cv.width, cv.height);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
  }
  size();
  const pt = (e) => {
    const r = cv.getBoundingClientRect();
    return { x: (e.clientX - r.left) * 2, y: (e.clientY - r.top) * 2 };
  };
  cv.onpointerdown = (e) => {
    drawing = true;
    const p = pt(e);
    ctx.beginPath();
    ctx.moveTo(p.x, p.y);
    cv.setPointerCapture(e.pointerId);
  };
  cv.onpointermove = (e) => {
    if (!drawing) return;
    const p = pt(e);
    ctx.strokeStyle = ink;
    ctx.lineWidth = ink === "#fffbf4" ? 28 : 10;
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
  };
  cv.onpointerup = () => (drawing = false);
  $("#wipe").onclick = size;
  $("#save").onclick = () => {
    drawings.unshift(cv.toDataURL("image/png"));
    drawings = drawings.slice(0, 16);
    store.drawings = drawings;
    save();
    tray = "mine";
    if (!roomId) roomId = "living";
    go("play", { room: roomId });
  };
}

let nightState = "title";
let visitor = null;
let soots = [];
let found = 0;
function night() {
  app.className = "";
  if (nightState === "title") {
    app.innerHTML = `
      <section class="screen night-wrap">
        <div class="bar"><button class="back" id="back">←</button><div><h1>Night House</h1><p>Family in. Tricksters out.</p></div></div>
        <div class="night-card">
          <h2>Knock knock</h2>
          <p>Someone is at the green door.</p>
          <div class="row"><button class="yes" id="go">Open the door</button></div>
        </div>
      </section>`;
    $("#back").onclick = () => go("home");
    $("#go").onclick = () => { visitor = VISITORS[Math.floor(Math.random() * VISITORS.length)]; nightState = "door"; night(); };
    return;
  }
  if (nightState === "door") {
    app.innerHTML = `
      <section class="screen night-wrap">
        <div class="bar"><button class="back" id="back">←</button><div><h1>Who is it?</h1></div></div>
        <div class="night-card">
          ${visitor.src ? `<img src="${visitor.src}" alt="">` : `<div style="height:160px;border-radius:20px;background:#1b2430;display:grid;place-items:center;font-size:64px">☽</div>`}
          <h2>${visitor.name}</h2>
          <p>${visitor.line}</p>
          <div class="row">
            <button class="yes" id="in">Let in</button>
            <button class="no" id="out">Keep out</button>
          </div>
        </div>
      </section>`;
    $("#back").onclick = () => { nightState = "title"; night(); };
    const judge = (letIn) => {
      const right = letIn === visitor.ok;
      nightState = right ? "hunt" : "oops";
      if (right) seedHunt();
      night();
    };
    $("#in").onclick = () => judge(true);
    $("#out").onclick = () => judge(false);
    return;
  }
  if (nightState === "oops") {
    app.innerHTML = `
      <section class="screen night-wrap">
        <div class="night-card">
          <h2>Not that one</h2>
          <p>Try again. Family in. Strangers out.</p>
          <div class="row"><button class="yes" id="again">Again</button></div>
        </div>
      </section>`;
    $("#again").onclick = () => { nightState = "title"; night(); };
    return;
  }
  app.innerHTML = `
    <section class="screen night-wrap">
      <div class="bar"><button class="back" id="back">←</button><div><h1>Torch hunt</h1><p>Find the shy soot sprites.</p></div></div>
      <p class="note">${found} / ${soots.length} found</p>
      <div class="hunt" id="hunt">
        ${soots.map((s) => `<button class="soot" data-i="${s.i}" style="left:${s.x}%;top:${s.y}%;opacity:${s.got ? 0 : 1}"></button>`).join("")}
        <div class="beam" id="beam"></div>
      </div>
    </section>`;
  $("#back").onclick = () => { nightState = "title"; found = 0; night(); };
  const hunt = $("#hunt");
  const beam = $("#beam");
  hunt.onpointermove = (e) => {
    const r = hunt.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    beam.style.background = `radial-gradient(circle 18vmin at ${x}% ${y}%, transparent 0 40%, #0e141cee 72%)`;
  };
  hunt.querySelectorAll(".soot").forEach((b) => {
    b.onclick = () => {
      const s = soots[+b.dataset.i];
      if (s.got) return;
      s.got = true;
      found += 1;
      if (found >= soots.length) {
        nightState = "title";
        found = 0;
      }
      night();
    };
  });
}

function seedHunt() {
  soots = [0, 1, 2, 3].map((i) => ({ i, x: 15 + Math.random() * 70, y: 20 + Math.random() * 60, got: false }));
  found = 0;
}

render();
if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(() => {});
