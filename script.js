/* ===== quiz.js ===== */
const QS = {
  chemistry:[
    {q:'What is the atomic number of Carbon?',o:['4','6','8','12'],a:1,e:'Carbon has 6 protons.'},
    {q:'Which bond involves electron transfer?',o:['Covalent','Metallic','Ionic','Hydrogen'],a:2,e:'Ionic bonding is the transfer of electrons.'},
    {q:'pH of a neutral solution at 25°C?',o:['0','7','10','14'],a:1,e:'Neutral is 7.'},
    {q:'Which electrode do cations move to?',o:['Anode','Cathode','Both','Neither'],a:1,e:'Cations go to the negative cathode.'},
    {q:'Conditions for Haber process?',o:['300°C, 100atm','450°C, 200atm','600°C, 50atm','200°C, 500atm'],a:1,e:'450°C and 200atm.'},
    {q:'Which reaction releases heat?',o:['Endothermic','Exothermic','Reversible','Decomposition'],a:1,e:'Exothermic releases heat.'},
    {q:'General formula for alkanes?',o:['CnH2n','CnH2n+2','CnH2n-2','CnH2n+1OH'],a:1,e:'CnH2n+2.'},
    {q:'Molar mass of water (H2O)?',o:['16g/mol','18g/mol','20g/mol','34g/mol'],a:1,e:'2(1)+16=18.'},
    {q:'Gas produced at anode in dilute H2SO4?',o:['Hydrogen','Chlorine','Oxygen','CO2'],a:2,e:'Oxygen is produced.'},
    {q:'What does Le Chatelier\'s principle state?',o:['Progress to completion','Shift to oppose change','Temperature increases yield','Catalysts shift eq'],a:1,e:'Equilibrium shifts to oppose change.'},
    {q:'Which is a transition metal?',o:['Sodium','Potassium','Iron','Calcium'],a:2,e:'Iron is a transition metal.'},
    {q:'What are isotopes?',o:['Same P, Diff N','Same N, Diff P','Same P+N','Diff elements'],a:0,e:'Isotopes have same protons but different neutrons.'},
    {q:'What is the formula for sulfuric acid?',o:['HCl','HNO3','H2SO4','H2CO3'],a:2,e:'H2SO4.'},
    {q:'Which gas is diatomic?',o:['Helium','Neon','Oxygen','Argon'],a:2,e:'Oxygen (O2) is diatomic.'},
    {q:'What is rusting?',o:['Oxidation','Reduction','Neutralization','Distillation'],a:0,e:'Rusting is iron oxidation.'},
    {q:'What does a catalyst do?',o:['Slows reaction','Changes equilibrium','Lowers activation energy','Increases product'],a:2,e:'Catalysts lower activation energy.'},
    {q:'Most reactive halogen?',o:['Fluorine','Chlorine','Bromine','Iodine'],a:0,e:'Fluorine is the most reactive.'},
    {q:'What is a hydrocarbon?',o:['C and H only','C, H, O','C and O','H and O'],a:0,e:'Hydrocarbons contain only Carbon and Hydrogen.'}
  ],
  biology:[
    {q:'Site of photosynthesis?',o:['Mitochondria','Ribosome','Chloroplast','Nucleus'],a:2,e:'Chloroplasts contain chlorophyll.'},
    {q:'Equation for aerobic respiration?',o:['Glucose+Water','Glucose+Oxygen','CO2+Water','Glucose only'],a:1,e:'Glucose+Oxygen.'},
    {q:'Vessel carrying blood from heart to body?',o:['Pulm. artery','Vena cava','Aorta','Pulm. vein'],a:2,e:'Aorta.'},
    {q:'Process for water moving across membrane?',o:['Active transport','Diffusion','Osmosis','Filtration'],a:2,e:'Osmosis.'},
    {q:'DNA base pairing?',o:['A-G; T-C','A-T; G-C','A-C; G-T','Any'],a:1,e:'A-T and G-C.'},
    {q:'Role of enzymes?',o:['Provide energy','Biological catalysts','Transport','Storage'],a:1,e:'Biological catalysts.'},
    {q:'Phenotype ratio Aa x Aa?',o:['1:1','3:1','1:2:1','All dominant'],a:1,e:'3:1.'},
    {q:'Tissue transporting water?',o:['Phloem','Xylem','Mesophyll','Epidermis'],a:1,e:'Xylem.'},
    {q:'Anaerobic product in muscles?',o:['Ethanol','Glucose','Lactic acid','Water'],a:2,e:'Lactic acid.'},
    {q:'Hormone decreasing blood glucose?',o:['Glucagon','Adrenaline','Insulin','ADH'],a:2,e:'Insulin.'},
    {q:'Unit of energy in food?',o:['Joule','Watt','Volt','Amp'],a:0,e:'Joules.'},
    {q:'Which is an autotroph?',o:['Human','Fungi','Plant','Bacteria'],a:2,e:'Plants make their own food.'},
    {q:'What carries oxygen in blood?',o:['Plasma','WBC','Platelets','RBC'],a:3,e:'Haemoglobin in RBCs.'},
    {q:'Component of cell wall?',o:['Protein','Cellulose','Fat','Water'],a:1,e:'Cellulose.'},
    {q:'Process of cell division?',o:['Mitosis','Osmosis','Diffusion','Active transport'],a:0,e:'Mitosis.'},
    {q:'Where is bile produced?',o:['Liver','Stomach','Pancreas','Small intestine'],a:0,e:'The liver produces bile.'},
    {q:'What detects light in the eye?',o:['Lens','Retina','Iris','Cornea'],a:1,e:'Retina.'},
    {q:'Which is a fungal disease?',o:['Flu','Athlete\'s foot','Cholera','Malaria'],a:1,e:'Athlete\'s foot.'}
  ],
  physics:[
    {q:'Newton\'s Second Law?',o:['F=mv','F=ma','F=m/a','F=v/t'],a:1,e:'F=ma.'},
    {q:'SI unit of resistance?',o:['Volt','Ampere','Ohm','Watt'],a:2,e:'Ohms.'},
    {q:'Wave type needing medium?',o:['Light','Gamma','Sound','X-rays'],a:2,e:'Sound.'},
    {q:'If frequency doubles, wavelength...?',o:['Doubles','Halves','Stays same','Quadruples'],a:1,e:'Halves.'},
    {q:'Conservation of energy?',o:['Energy created','Energy destroyed','Only transferred','Always increases'],a:2,e:'Transferred only.'},
    {q:'What is half-life?',o:['All decay','Half decay','Zero activity','Non-radioactive'],a:1,e:'Time for half to decay.'},
    {q:'What is constant during refraction?',o:['Speed','Wavelength','Frequency','Direction'],a:2,e:'Frequency.'},
    {q:'Highest frequency EM radiation?',o:['Radio','Visible','X-rays','Gamma'],a:3,e:'Gamma.'},
    {q:'Parallel circuit voltage?',o:['Current','Resistance','Voltage','Power'],a:2,e:'Voltage is same.'},
    {q:'Boyle\'s Law?',o:['P ∝ V','P × V = constant','V ∝ T','P ∝ T'],a:1,e:'P*V is constant.'},
    {q:'Which force opposes motion?',o:['Gravity','Friction','Weight','Tension'],a:1,e:'Friction.'},
    {q:'What is power?',o:['Energy/Time','Force*Dist','Work*Time','Mass*Acc'],a:0,e:'Energy/Time.'},
    {q:'Which is a vector?',o:['Speed','Distance','Velocity','Mass'],a:2,e:'Velocity.'},
    {q:'What is absolute zero?',o:['0°C','0K','100K','273°C'],a:1,e:'0K.'},
    {q:'Speed of light?',o:['3e8 m/s','3e5 m/s','1e8 m/s','3e6 m/s'],a:0,e:'300,000 km/s.'},
    {q:'Which circuit uses ammeter?',o:['Series','Parallel','Both','None'],a:2,e:'Both.'},
    {q:'Charge of an electron?',o:['Positive','Negative','Neutral','Variable'],a:1,e:'Negative.'},
    {q:'What reflects light?',o:['Mirror','Lens','Glass','Prism'],a:0,e:'Mirrors reflect.'}
  ]
};

const COLORS = {chemistry:'var(--chem)',biology:'var(--bio)',physics:'var(--phys)'};
const LABELS = {chemistry:'Chemistry',biology:'Biology',physics:'Physics'};
let subj=null, qs=[], qi=0, score=0, answered=false;

function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}

function startQuiz(s){
  subj=s; qs=shuffle([...QS[s]]).slice(0,10); qi=0; score=0; answered=false;
  document.getElementById('hub-section').style.display='none';
  document.getElementById('results-section').style.display='none';
  document.getElementById('arena-section').style.display='block';
  const badge=document.getElementById('arena-badge');
  badge.textContent=LABELS[s]; badge.style.background=COLORS[s];
  document.getElementById('prog-fill').style.background=COLORS[s];
  document.getElementById('btn-next').style.background=COLORS[s];
  renderQ();
  document.getElementById('arena-section').scrollIntoView({behavior:'smooth'});
}

function renderQ(){
  answered=false;
  const q=qs[qi];
  document.getElementById('q-num').textContent=`Question ${qi+1} of ${qs.length}`;
  document.getElementById('arena-meta').textContent=`Score: ${score}/${qi}`;
  document.getElementById('prog-fill').style.width=((qi/qs.length)*100)+'%';
  document.getElementById('q-text').textContent=q.q;
  const el=document.getElementById('q-options'); el.innerHTML='';
  q.o.forEach((opt,i)=>{
    const btn=document.createElement('button');
    btn.className='opt-btn'; btn.innerHTML=`<span class="opt-ind">${String.fromCharCode(65+i)}</span><span>${opt}</span>`;
    btn.onclick=()=>pick(i,btn);
    el.appendChild(btn);
  });
  document.getElementById('exp-box').style.display='none';
  document.getElementById('btn-next').style.display='none';
}

function pick(idx,btn){
  if(answered)return; answered=true;
  const q=qs[qi];
  const opts=document.querySelectorAll('.opt-btn');
  opts.forEach(b=>b.disabled=true);
  const ind=btn.querySelector('.opt-ind');
  if(idx===q.a){
    btn.classList.add('correct');
    ind.innerHTML='<i class="fa fa-check"></i>'; score++;
  } else {
    btn.classList.add('wrong');
    ind.innerHTML='<i class="fa fa-xmark"></i>';
    const correct=opts[q.a];
    correct.classList.add('correct');
    correct.querySelector('.opt-ind').innerHTML='<i class="fa fa-check"></i>';
  }
  const exp=document.getElementById('exp-box');
  exp.innerHTML=`<strong>Explanation:</strong> ${q.e}`;
  exp.style.display='block';
  const nextBtn=document.getElementById('btn-next');
  nextBtn.textContent=(qi<qs.length-1)?'Next Question':'See Results';
  nextBtn.style.display='inline-block';
  document.getElementById('arena-meta').textContent=`Score: ${score}/${qi+1}`;
}

function nextQ(){qi++;if(qi>=qs.length){showResults();}else{renderQ();}}

function showResults(){
  document.getElementById('arena-section').style.display='none';
  document.getElementById('results-section').style.display='block';
  const pct=Math.round((score/qs.length)*100);
  const ring=document.getElementById('score-ring');
  ring.innerHTML=`<span class="ring-pct">${pct}%</span>`;
  ring.style.background=pct>=70?'var(--ok)':pct>=50?'var(--gold)':'var(--bad)';
  document.getElementById('res-correct').textContent=score;
  document.getElementById('res-wrong').textContent=qs.length-score;
  document.getElementById('res-pct').textContent=pct+'%';
  document.getElementById('res-title').textContent=pct>=80?'Excellent Work!':pct>=60?'Good Effort!':'Keep Practising!';
  document.getElementById('res-msg').textContent=pct>=80?'Strong command of this topic.':pct>=60?'Solid attempt. Review and try again.':'Don\'t be discouraged. Review the notes and try again.';
  document.getElementById('results-section').scrollIntoView({behavior:'smooth'});
}

function retryQuiz(){startQuiz(subj)}
function exitQuiz(){
  document.getElementById('arena-section').style.display='none';
  document.getElementById('results-section').style.display='none';
  document.getElementById('hub-section').style.display='block';
}

function showTab(t){const il=(t==='login');document.getElementById('panel-login').classList.toggle('d-none',!il);document.getElementById('panel-register').classList.toggle('d-none',il);}
function updateNav(){const s=JSON.parse(localStorage.getItem('sb_session'));if(s){const btn=document.getElementById('auth-btn');btn.innerHTML='<i class="fa fa-user-check me-1"></i>'+s.name.split(' ')[0];btn.removeAttribute('data-bs-toggle');btn.onclick=()=>location.reload()}}
updateNav();


/* ===== resources.js ===== */
    const RES_DATA = {
      chem: [
        { t: 'States of Matter', d: 'Kinetic particle theory, changes of state, diffusion and gas laws.', p: '8', url: 'https://pmt.physicsandmathstutor.com/download/Chemistry/GCSE/Notes/CIE-IGCSE/1-States-of-Matter/Detailed/1.1%20Solids%2C%20liquids%20and%20gases.pdf' },
        { t: 'Atomic Structure', d: 'Protons, neutrons, electrons, isotopes and the Periodic Table.', p: '12', url: 'https://pmt.physicsandmathstutor.com/download/Chemistry/GCSE/Notes/CIE-IGCSE/2-Atoms-Elements-and-Compounds/Detailed/2.2%20Atomic%20structure%20and%20the%20Periodic%20Table%20.pdf' },
        { t: 'Stoichiometry', d: 'Chemical equations, mole concept, empirical formulae and yield.', p: '10', url: 'https://pmt.physicsandmathstutor.com/download/Chemistry/GCSE/Notes/CIE-IGCSE/3-Stoichiometry/Detailed/3.1%20Formulae.pdf' },
        { t: 'Organic Chemistry', d: 'Alkanes, Alkenes, Alcohols, carboxylic acids and polymerisation.', p: '16', url: 'https://henniscience.weebly.com/uploads/1/2/0/8/12088969/c14_organic_chemistry.pdf' },
        { t: 'Chemical Energetics', d: 'Exothermic and endothermic reactions, bond energies and activation energy.', p: '9', url: 'https://pmt.physicsandmathstutor.com/download/Chemistry/GCSE/Notes/CIE-IGCSE/5-Chemical-Energetics/Detailed/5.1%20Exothermic%20and%20endothermic%20reactions.pdf' },
        { t: 'Acids, Bases & Salts', d: 'pH scale, reactions of acids, neutralisation and preparation of salts.', p: '11', url: 'https://pmt.physicsandmathstutor.com/download/Chemistry/GCSE/Notes/CIE-IGCSE/7-Acids-Bases-and-Salts/Detailed/7.1%20The%20characteristic%20properties%20of%20acids%20and%20bases.pdf' }
      ],
      bio: [
        { t: 'Characteristics of Life', d: 'MRS GREN life processes, classification and binomial nomenclature.', p: '7', url: 'https://pmt.physicsandmathstutor.com/download/Biology/GCSE/Notes/CIE-IGCSE/1-Characteristics-and-Classification-of-Living-Organisms/Definitions%20-%20Topic%201%20Characteristics%20and%20classification%20of%20living%20organisms%20-%20CAIE%20Biology%20IGCSE.pdf' },
        { t: 'Cells & Organisation', d: 'Plant vs animal cells, prokaryotes, specialised cells and organisation.', p: '10', url: 'https://pmt.physicsandmathstutor.com/download/Biology/GCSE/Notes/CIE-IGCSE/2-Organisation-of-the-Organism/Summary%20Notes%20-%20Topic%202%20Organisation%20of%20the%20Organism%20-%20CAIE%20Biology%20IGCSE.pdf' },
        { t: 'Biological Molecules', d: 'Carbohydrates, proteins, lipids, food tests and DNA base pairing.', p: '14', url: 'https://pmt.physicsandmathstutor.com/download/Biology/GCSE/Notes/CIE-IGCSE/4-Biological-Molecules/Summary%20Notes%20-%20Topic%204%20Biological%20Molecules%20-%20CAIE%20Biology%20IGCSE.pdf' },
        { t: 'Nutrition & Digestion', d: 'Nutrients, digestive system, enzyme action and photosynthesis.', p: '14', url: 'https://pmt.physicsandmathstutor.com/download/Biology/GCSE/Notes/CIE-IGCSE/7-Human-Nutrition/Definitions%20-%20Topic%207%20Human%20nutrition%20-%20CAIE%20Biology%20IGCSE.pdf' },
        { t: 'Respiration', d: 'Aerobic and anaerobic respiration, gas exchange and breathing.', p: '9', url: 'https://pmt.physicsandmathstutor.com/download/Biology/GCSE/Notes/CIE-IGCSE/12-Respiration/Summary%20Notes%20-%20Topic%2012%20Respiration%20-%20CAIE%20Biology%20IGCSE.pdf' },
        { t: 'Reproduction & Genetics', d: 'Mitosis, meiosis, Mendelian genetics, mutations and natural selection.', p: '16', url: 'https://pmt.physicsandmathstutor.com/download/Biology/GCSE/Notes/CIE-IGCSE/16-Reproduction/Definitions%20-%20Topic%2016%20Reproduction%20-%20CAIE%20Biology%20IGCSE.pdf' }
      ],
      phys: [
        { t: 'Forces & Motion', d: "Newton's laws, velocity-time graphs, momentum and energy conservation.", p: '15', url: 'https://pmt.physicsandmathstutor.com/download/Physics/GCSE/Notes/CIE-IGCSE/1-Motion-Forces-and-Energy/Summary%20Notes%20-%20Topic%201%20CAIE%20Physics%20IGCSE.pdf' },
        { t: 'Thermal Physics', d: 'Kinetic model, specific heat capacity, conduction, convection and radiation.', p: '12', url: 'https://pmt.physicsandmathstutor.com/download/Physics/GCSE/Notes/CIE-IGCSE/2-Thermal-Physics/Summary%20Notes%20-%20Topic%202%20CAIE%20Physics%20IGCSE.pdf' },
        { t: 'Waves', d: 'Transverse and longitudinal waves, reflection, refraction and the EM spectrum.', p: '13', url: 'https://pmt.physicsandmathstutor.com/download/Physics/GCSE/Notes/CIE-IGCSE/3-Waves/Summary%20Notes%20-%20Topic%203%20CAIE%20Physics%20IGCSE.pdf' },
        { t: 'Electricity & Magnetism', d: "Ohm's Law, series/parallel circuits, magnetic fields and induction.", p: '13', url: 'https://pmt.physicsandmathstutor.com/download/Physics/GCSE/Notes/CIE-IGCSE/4-Electricity-and-Magnetism/Summary%20Notes%20-%20Topic%204%20CAIE%20Physics%20IGCSE.pdf' },
        { t: 'Nuclear Physics', d: 'Radioactivity, alpha/beta/gamma, half-life, fission and fusion.', p: '11', url: 'https://pmt.physicsandmathstutor.com/download/Physics/GCSE/Notes/CIE-IGCSE/5-Nuclear-Physics/Summary%20Notes%20-%20Topic%205%20CAIE%20Physics%20IGCSE.pdf' },
        { t: 'Space Physics', d: 'Solar system, stellar evolution, orbital motion and the Big Bang.', p: '9', url: 'https://pmt.physicsandmathstutor.com/download/Physics/GCSE/Notes/CIE-IGCSE/6-Space-Physics/Summary%20Notes%20-%20Topic%206%20CAIE%20Physics%20IGCSE.pdf' }
      ]
    };

    const THEMES = {
      chem: { color: 'var(--chem)', icon: 'fa-flask', btn: 'bd-chem' },
      bio: { color: 'var(--bio)', icon: 'fa-dna', btn: 'bd-bio' },
      phys: { color: 'var(--phys)', icon: 'fa-atom', btn: 'bd-phys' }
    };

    function renderResources() {
      for (const [subject, list] of Object.entries(RES_DATA)) {
        const grid = document.getElementById(`${subject}-res-grid`);
        grid.innerHTML = list.map(item => `
      <div class="col-md-4">
        <article class="res-card">
          <div class="rc-icon" style="background:${THEMES[subject].color}">
            <i class="fa ${THEMES[subject].icon}"></i>
          </div>
          <h3 class="rc-title">${item.t}</h3>
          <p class="small text-muted">${item.d}</p>
          <div class="mb-3">
             <span class="rtag rtag-pdf">PDF</span>
             <span class="badge bg-light text-dark fw-normal">${item.p} Pages</span>
          </div>
          <a class="btn-dl ${THEMES[subject].btn}"
             href="${item.url}"
             target="_blank"
             rel="noopener noreferrer"
             onclick="showToast('Opening ${item.t} PDF...')"
          >
            <i class="fa fa-file-pdf"></i> Download PDF
          </a>
        </article>
      </div>
    `).join('');
      }
    }

    /**
     * Downloads the PDF file linked from the resource card.
     * The <a> tag in the card already carries href, download, and type attributes.
     * This helper is kept only for the toast notification (called via onclick).
     */

    function showToast(msg) {
      const t = document.getElementById('dl-toast');
      document.getElementById('dl-toast-msg').innerText = msg;
      t.style.display = 'flex';
      setTimeout(() => t.style.display = 'none', 3000);
    }

    function filterRes(subj, btn) {
      document.querySelectorAll('.fbtn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.res-section').forEach(sec => {
        sec.style.display = (subj === 'all' || sec.dataset.subject === subj) ? 'block' : 'none';
      });
    }
if (document.getElementById('chem-res-grid')) renderResources();
    /* ─── Auth session helpers (shared across pages) ─── */
    function getSession() { try { return JSON.parse(localStorage.getItem('sb_session') || 'null'); } catch (e) { return null; } }
    function clearSession() { localStorage.removeItem('sb_session'); }

    function updateNav() {
      const session = getSession();
      const btn = document.getElementById('auth-btn');
      if (!session || !btn) return;
      btn.innerHTML = '<i class="fa fa-user-check me-1" aria-hidden="true"></i>' + session.name.split(' ')[0];
      btn.removeAttribute('data-bs-toggle');
      btn.removeAttribute('data-bs-target');
      btn.onclick = function () {
        if (confirm('Log out of SciBrilliance?')) { clearSession(); location.reload(); }
      };
    }

    updateNav();


/* ===== feedback.js ===== */
  // Rating logic
  function setRating(n) {
    document.getElementById('f-rating').value = n;
    document.querySelectorAll('.rating-btn').forEach((btn, idx) => {
      btn.classList.toggle('active', idx < n);
    });
  }

  // Form submission
  if (document.getElementById('feedback-form')) {
  document.getElementById('feedback-form').onsubmit = function(e) {
    e.preventDefault();
    const name = document.getElementById('f-name').value;
    const cat  = document.getElementById('f-category').value;
    const rate = document.getElementById('f-rating').value;
    
    if (rate == "0") {
      alert("Please provide a rating before submitting.");
      return;
    }

    alert(`Thank you ${name}! Your feedback regarding ${cat} has been received.`);
    this.reset();
    setRating(0);
  };
}

  // User session logic (Mockup preservation)
  function updateNav() {
    const s = JSON.parse(localStorage.getItem('sb_session'));
    if (s) {
      const btn = document.getElementById('auth-btn');
      btn.innerHTML = '<i class="fa fa-user-check me-1" aria-hidden="true"></i>' + s.name.split(' ')[0];
      btn.removeAttribute('data-bs-toggle');
    }
  }
  updateNav();


/* ===== forum.js ===== */
  // Login logic toggle (Mockup for refined structure)
  function updateNav(){
    const s=JSON.parse(localStorage.getItem('sb_session'));
    if(s){
      const btn=document.getElementById('auth-btn');
      btn.innerHTML='<i class="fa fa-user-check me-1"></i>'+s.name.split(' ')[0];
      btn.removeAttribute('data-bs-toggle');
      btn.onclick=()=>location.reload();
    }
  }
  updateNav();


/* ===== courses.js ===== */
  /* ─── Auth session helpers (shared across pages) ─── */
  function getSession()  { try { return JSON.parse(localStorage.getItem('sb_session') || 'null'); } catch(e) { return null; } }
  function clearSession(){ localStorage.removeItem('sb_session'); }

  function updateNav() {
    const session = getSession();
    const btn     = document.querySelector('.btn-login-nav');
    if (!session || !btn) return;
    btn.innerHTML = '<i class="fa fa-user-check me-1" aria-hidden="true"></i>' + session.name.split(' ')[0];
    btn.removeAttribute('data-bs-toggle');
    btn.removeAttribute('data-bs-target');
    btn.onclick = function () {
      if (confirm('Log out of SciBrilliance?')) { clearSession(); location.reload(); }
    };
  }

  updateNav();


/* ===== index.js ===== */
  /* ─── localStorage helpers ─── */
  function getUsers()    { try { return JSON.parse(localStorage.getItem('sb_users')   || '[]');   } catch(e) { return [];   } }
  function saveUsers(u)  { localStorage.setItem('sb_users',   JSON.stringify(u)); }
  function getSession()  { try { return JSON.parse(localStorage.getItem('sb_session') || 'null'); } catch(e) { return null; } }
  function setSession(u) { localStorage.setItem('sb_session', JSON.stringify(u)); }
  function clearSession(){ localStorage.removeItem('sb_session'); }

  /* ─── Tab switcher ─── */
  function showTab(t) {
    const isLogin = (t === 'login');
    document.getElementById('panel-login').classList.toggle('d-none', !isLogin);
    document.getElementById('panel-register').classList.toggle('d-none',  isLogin);
    document.getElementById('tab-login-btn').className = isLogin  ? 'btn-mpri btn' : 'btn-msec btn';
    document.getElementById('tab-reg-btn').className   = !isLogin ? 'btn-mpri btn' : 'btn-msec btn';
    document.getElementById('tab-login-btn').setAttribute('aria-selected', isLogin  ? 'true' : 'false');
    document.getElementById('tab-reg-btn').setAttribute('aria-selected',   !isLogin ? 'true' : 'false');
  }

  /* ─── Inline error helpers ─── */
  function showErr(id, msg) {
    const el = document.getElementById(id);
    el.textContent = msg;
    el.classList.remove('d-none');
  }
  function hideErr(id) { document.getElementById(id).classList.add('d-none'); }

  /* ─── Login ─── */
  function doLogin() {
    hideErr('login-err');
    const email = document.getElementById('l-email').value.trim();
    const pass  = document.getElementById('l-pass').value;
    if (!email || !pass) { showErr('login-err', 'Please fill in all fields.'); return; }
    const user = getUsers().find(u => u.email === email && u.password === pass);
    if (!user) {
      showErr('login-err', 'Incorrect email or password. Please check your details or register a new account.');
      return;
    }
    setSession({ name: user.name, email: user.email });
    location.reload();
  }

  /* ─── Register ─── */
  function doRegister() {
    hideErr('reg-err');
    const name  = document.getElementById('r-name').value.trim();
    const email = document.getElementById('r-email').value.trim();
    const pass  = document.getElementById('r-pass').value;
    const pass2 = document.getElementById('r-pass2').value;
    if (!name || !email || !pass || !pass2) { showErr('reg-err', 'Please fill in all fields.'); return; }
    if (pass.length < 6)  { showErr('reg-err', 'Password must be at least 6 characters.'); return; }
    if (pass !== pass2)   { showErr('reg-err', 'Passwords do not match.'); return; }
    const users = getUsers();
    if (users.find(u => u.email === email)) {
      showErr('reg-err', 'An account with that email already exists. Please log in.');
      return;
    }
    users.push({
      name, email, password: pass,
      progress: { chemistry: 0, biology: 0, physics: 0 },
      quizScores: [], completedTopics: {}, downloads: [], feedback: []
    });
    saveUsers(users);
    setSession({ name, email });
    location.reload();
  }

  /* ─── Update navbar when logged in ─── */
  function updateNav() {
    const session = getSession();
    const btn     = document.getElementById('auth-btn');
    if (!session || !btn) return;
    btn.innerHTML = '<i class="fa fa-user-check me-1" aria-hidden="true"></i>' + session.name.split(' ')[0];
    btn.removeAttribute('data-bs-toggle');
    btn.removeAttribute('data-bs-target');
    btn.onclick = function () {
      if (confirm('Log out of SciBrilliance?')) { clearSession(); location.reload(); }
    };
  }

  updateNav();
