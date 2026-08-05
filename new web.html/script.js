const entries = [
  {
    id: 'british',
    name: 'British Empire',
    kind: 'imperial system',
    category: 'colonizer',
    region: 'Atlantic, Asia, Africa',
    years: '1583–1997',
    start: 1583,
    end: 1997,
    summary: 'The British Empire became the largest empire in history, stretching across continents and reshaping trade, law, and language.',
    overview: 'A maritime empire that fused naval power, finance, evangelical missions, and colonial administration into a transcontinental system.',
    capitals: ['London'],
    languages: ['English', 'Hindi', 'Arabic', 'Malay'],
    migrations: ['Indentured labor', 'Slave trade', 'Postcolonial diaspora'],
    facts: [
      'Controlled territories in North America, the Caribbean, South Asia, Africa, and Oceania.',
      'Its networks accelerated railways, telegraphs, and global commerce.',
      'English became an enduring global language through colonial administration.'
    ],
    coordinates: { x: 286, y: 148 },
    links: ['india', 'south-africa', 'indonesia', 'kenya'],
    color: '#8b5cf6'
  },
  {
    id: 'roman',
    name: 'Roman Empire',
    kind: 'imperial system',
    category: 'colonizer',
    region: 'Mediterranean, Europe',
    years: '27 BCE–476 CE',
    start: -27,
    end: 476,
    summary: 'Rome stitched together an imperial network of roads, law, and military administration across the Mediterranean.',
    overview: 'A foundational empire whose roads, legal traditions, and administrative methods influenced nearly every later state system.',
    capitals: ['Rome'],
    languages: ['Latin', 'Greek'],
    migrations: ['Military settlement', 'Urban migration', 'Trade movement'],
    facts: [
      'Built highways and provincial systems that still shape Europe.',
      'Its legal culture influenced later constitutional traditions.',
      'The empire linked the Mediterranean into a shared economic zone.'
    ],
    coordinates: { x: 280, y: 170 },
    links: ['ottoman', 'mali'],
    color: '#8b5cf6'
  },
  {
    id: 'ottoman',
    name: 'Ottoman Empire',
    kind: 'imperial system',
    category: 'colonizer',
    region: 'Middle East, Balkans',
    years: '1299–1922',
    start: 1299,
    end: 1922,
    summary: 'The Ottoman Empire ruled a wide territory linking Europe, Asia, and Africa for centuries.',
    overview: 'A dynastic empire whose administration, trade corridors, and military tradition shaped the early modern world.',
    capitals: ['Constantinople'],
    languages: ['Ottoman Turkish', 'Arabic', 'Greek', 'Serbian'],
    migrations: ['Forced migration', 'Religious migration', 'Military settlement'],
    facts: [
      'Its military and trade routes crossed three continents.',
      'It governed diverse peoples through a flexible administrative system.',
      'Its decline reshaped modern borders in the Middle East and Balkans.'
    ],
    coordinates: { x: 345, y: 188 },
    links: ['roman', 'mughal', 'british'],
    color: '#8b5cf6'
  },
  {
    id: 'mughal',
    name: 'Mughal Empire',
    kind: 'imperial system',
    category: 'colonizer',
    region: 'South Asia',
    years: '1526–1857',
    start: 1526,
    end: 1857,
    summary: 'The Mughals built one of the richest early modern states, integrating trade, art, and governance across India.',
    overview: 'A sophisticated empire whose court culture, architecture, and fiscal systems introduced enduring patterns of administration.',
    capitals: ['Agra', 'Delhi'],
    languages: ['Persian', 'Urdu', 'Hindi'],
    migrations: ['Trade movement', 'Religious migration', 'Military settlement'],
    facts: [
      'Its courts fused Persian, Central Asian, and South Asian traditions.',
      'Architecture and urban design remain visible in India today.',
      'The empire was later challenged by European trading powers.'
    ],
    coordinates: { x: 382, y: 215 },
    links: ['british', 'ottoman', 'india'],
    color: '#8b5cf6'
  },
  {
    id: 'mali',
    name: 'Mali Empire',
    kind: 'civilization',
    category: 'colonized',
    region: 'West Africa',
    years: '1235–1670',
    start: 1235,
    end: 1670,
    summary: 'Mali emerged as a major West African power through gold, trade, and imperial authority.',
    overview: 'A wealthy civilization whose rulers linked Saharan routes to the wider world of Islamic learning, commerce, and diplomacy.',
    capitals: ['Niani', 'Timbuktu'],
    languages: ['Mande languages', 'Arabic'],
    migrations: ['Trans-Saharan trade', 'Religious diffusion', 'Urban migration'],
    facts: [
      'Mansa Musa became legendary for the wealth and prestige of his court.',
      'Timbuktu became a center of scholarship and commerce.',
      'Its trade networks helped tie West Africa to the wider Afro-Eurasian world.'
    ],
    coordinates: { x: 250, y: 212 },
    links: ['roman', 'morocco'],
    color: '#ffb347'
  },
  {
    id: 'india',
    name: 'India',
    kind: 'civilization',
    category: 'colonized',
    region: 'South Asia',
    years: '300 BCE–present',
    start: -300,
    end: 2025,
    summary: 'India has been shaped by empires, trade, migration, and resistance across millennia.',
    overview: 'A civilizational core whose geography connected it to the Silk Road, Indian Ocean networks, and later colonial systems.',
    capitals: ['Varanasi', 'Delhi'],
    languages: ['Sanskrit', 'Hindi', 'Tamil', 'Urdu'],
    migrations: ['Diaspora', 'Labor migration', 'Postcolonial mobility'],
    facts: [
      'The subcontinent became a major hub of religion, language, and commerce.',
      'British administration reorganized its economy and political map.',
      'Indian Ocean trade helped shape its long-distance ties.'
    ],
    coordinates: { x: 405, y: 222 },
    links: ['british', 'mughal', 'indonesia'],
    color: '#ffb347'
  },
  {
    id: 'south-africa',
    name: 'South Africa',
    kind: 'modern state',
    category: 'colonized',
    region: 'Southern Africa',
    years: '1652–present',
    start: 1652,
    end: 2025,
    summary: 'South Africa experienced settler colonialism, mineral extraction, racial segregation, and democratic transition.',
    overview: 'A contested region where migration, land dispossession, and economic extraction shaped one of the modern world’s most consequential societies.',
    capitals: ['Cape Town', 'Pretoria', 'Bloemfontein'],
    languages: ['English', 'Afrikaans', 'Zulu'],
    migrations: ['Colonial settlement', 'Mine labor', 'Postapartheid migration'],
    facts: [
      'European settlement expanded through the Cape Colony and beyond.',
      'Mining created a highly unequal colonial economy.',
      'Democratic rule arrived after long struggles against apartheid.'
    ],
    coordinates: { x: 318, y: 281 },
    links: ['british', 'dutch', 'kenya'],
    color: '#ffb347'
  },
  {
    id: 'dutch',
    name: 'Dutch Empire',
    kind: 'imperial system',
    category: 'colonizer',
    region: 'Atlantic, Asia',
    years: '1602–1975',
    start: 1602,
    end: 1975,
    summary: 'The Dutch built a maritime trading empire that linked Europe to the Americas, Africa, and Asia.',
    overview: 'A commercial empire whose merchant networks and naval strength made it an early architect of global capitalism.',
    capitals: ['Amsterdam'],
    languages: ['Dutch', 'Indonesian', 'Papiamentu'],
    migrations: ['Trade migration', 'Indentured labor', 'Settlement migration'],
    facts: [
      'The Dutch Republic became a dominant shipping and finance power.',
      'Its colonies included New Amsterdam, the Caribbean, and the Indonesian archipelago.',
      'Dutch commercial networks helped shape tropical plantation economies.'
    ],
    coordinates: { x: 272, y: 133 },
    links: ['british', 'indonesia', 'south-africa'],
    color: '#8b5cf6'
  },
  {
    id: 'indonesia',
    name: 'Indonesia',
    kind: 'modern state',
    category: 'colonized',
    region: 'Southeast Asia',
    years: '1602–present',
    start: 1602,
    end: 2025,
    summary: 'Indonesia endured Dutch commercial control and later colonial administration across the archipelago.',
    overview: 'A maritime world shaped by spice trade, plantation economies, and later anticolonial nationalism.',
    capitals: ['Jakarta'],
    languages: ['Indonesian', 'Javanese', 'Sundanese'],
    migrations: ['Labor migration', 'Diaspora', 'Postcolonial mobility'],
    facts: [
      'The Dutch East India Company established early trade enclaves.',
      'Colonial extraction shaped plantations, mining, and labor systems.',
      'Independence in 1949 marked the end of a long colonial relationship.'
    ],
    coordinates: { x: 462, y: 262 },
    links: ['dutch', 'british', 'india'],
    color: '#ffb347'
  },
  {
    id: 'kenya',
    name: 'Kenya',
    kind: 'modern state',
    category: 'colonized',
    region: 'East Africa',
    years: '1895–present',
    start: 1895,
    end: 2025,
    summary: 'Kenya experienced British settler colonialism, resistance movements, and eventual independence.',
    overview: 'A nation whose history is inseparable from colonial land seizure, labor migration, and anti-colonial revolt.',
    capitals: ['Nairobi'],
    languages: ['Swahili', 'English', 'Kikuyu'],
    migrations: ['Colonial settlement', 'Mau Mau displacement', 'Modern labor migration'],
    facts: [
      'The colony was shaped by land seizure, labor demands, and white settler politics.',
      'The Mau Mau uprising became one of the most important anti-colonial struggles in Africa.',
      'Independence in 1963 transformed East Africa.'
    ],
    coordinates: { x: 335, y: 258 },
    links: ['british', 'south-africa'],
    color: '#ffb347'
  },
  {
    id: 'morocco',
    name: 'Morocco',
    kind: 'modern state',
    category: 'colonized',
    region: 'North Africa',
    years: '1912–present',
    start: 1912,
    end: 2025,
    summary: 'Morocco was divided under French and Spanish colonial rule before regaining independence.',
    overview: 'A nation whose modern identity was shaped by colonial administration, urban reform, and nationalist resistance.',
    capitals: ['Rabat'],
    languages: ['Arabic', 'Berber', 'French'],
    migrations: ['Colonial labor migration', 'Exile', 'Regional mobility'],
    facts: [
      'Colonial rule reorganized administration, trade, and education.',
      'Resistance movements mobilized around nationalism and cultural identity.',
      'Independence in 1956 restored sovereignty.'
    ],
    coordinates: { x: 258, y: 182 },
    links: ['mali', 'roman'],
    color: '#ffb347'
  },
  {
    id: 'aztec',
    name: 'Aztec Empire',
    kind: 'civilization',
    category: 'colonized',
    region: 'Mesoamerica',
    years: '1428–1521',
    start: 1428,
    end: 1521,
    summary: 'The Aztec Empire was a highly organized Mesoamerican state whose fall reshaped the Americas.',
    overview: 'A tribute-based empire whose capital Tenochtitlan became one of the largest urban centers in the world before Spanish conquest.',
    capitals: ['Tenochtitlan'],
    languages: ['Nahuatl'],
    migrations: ['Tribute movement', 'Military expansion', 'Religious pilgrimage'],
    facts: [
      'Its tribute system linked far-flung settlements into a central power.',
      'Spanish conquest profoundly altered indigenous political life.',
      'Its legacy lives on in language, food, and urban memory.'
    ],
    coordinates: { x: 176, y: 181 },
    links: ['spanish', 'mexico'],
    color: '#ffb347'
  },
  {
    id: 'spanish',
    name: 'Spanish Empire',
    kind: 'imperial system',
    category: 'colonizer',
    region: 'Americas, Pacific',
    years: '1492–1976',
    start: 1492,
    end: 1976,
    summary: 'The Spanish Empire connected the Old World and the Americas through conquest, missionaries, trade, and silver.',
    overview: 'One of the world’s earliest global empires, linking Europe, Africa, Asia, and the Americas through bullion, evangelization, and warfare.',
    capitals: ['Madrid'],
    languages: ['Spanish', 'Portuguese', 'Quechua'],
    migrations: ['Conquest migration', 'Missionary movement', 'Silver trade'],
    facts: [
      'It established the first sustained European colonial presence in the Americas.',
      'Silver from the Americas financed European power for centuries.',
      'Its influence remains visible in language, religion, and urban planning.'
    ],
    coordinates: { x: 208, y: 168 },
    links: ['aztec', 'mexico', 'philippines'],
    color: '#8b5cf6'
  },
  {
    id: 'mexico',
    name: 'Mexico',
    kind: 'modern state',
    category: 'colonized',
    region: 'North America',
    years: '1521–present',
    start: 1521,
    end: 2025,
    summary: 'Mexico was transformed by Spanish conquest, hybrid cultures, and a new colonial order.',
    overview: 'A nation forged from Indigenous states, Spanish empire, and later independence movements.',
    capitals: ['Mexico City'],
    languages: ['Spanish', 'Nahuatl', 'Maya'],
    migrations: ['Colonial settlement', 'Indigenous continuity', 'Modern migration'],
    facts: [
      'The Aztec capital Tenochtitlan was toppled after a brutal campaign of conquest.',
      'Colonial rule mixed Indigenous, Spanish, and African traditions.',
      'Independence in 1821 ended Spanish rule but preserved colonial legacies.'
    ],
    coordinates: { x: 170, y: 183 },
    links: ['spanish', 'aztec'],
    color: '#ffb347'
  },
  {
    id: 'philippines',
    name: 'Philippines',
    kind: 'modern state',
    category: 'colonized',
    region: 'Southeast Asia',
    years: '1565–present',
    start: 1565,
    end: 2025,
    summary: 'The Philippines was shaped for centuries by Spanish and later American rule.',
    overview: 'An archipelago whose history is defined by maritime exchange, missionary networks, and anti-colonial resistance.',
    capitals: ['Manila'],
    languages: ['Filipino', 'English', 'Cebuano'],
    migrations: ['Missionary movement', 'Labor migration', 'Overseas diaspora'],
    facts: [
      'Spanish missionaries introduced Catholicism and new systems of education.',
      'The islands later fell under American administration after the Spanish-American War.',
      'Independence followed a long anti-colonial struggle.'
    ],
    coordinates: { x: 454, y: 240 },
    links: ['spanish', 'british'],
    color: '#ffb347'
  }
];

const markerLayer = document.getElementById('marker-layer');
const globeSphere = document.getElementById('globe-sphere');
const globeStatus = document.getElementById('globe-status');
const searchInput = document.getElementById('global-search');
const searchResults = document.getElementById('search-results');
const timeSlider = document.getElementById('time-slider');
const timeDisplay = document.getElementById('time-display');
const eraLabel = document.getElementById('era-label');
const timelineEvents = document.getElementById('timeline-events');
const archivePanel = document.getElementById('archive-panel');
const playToggle = document.getElementById('play-toggle');

let selectedId = entries[0].id;
let currentYear = 1600;
let autoplay = false;
let autoplayTimer = null;
let rotationX = 56;
let rotationY = 0;
let rotationZ = -22;
let isDragging = false;
let dragStartX = 0;
let dragStartY = 0;
let lastRotationX = rotationX;
let lastRotationY = rotationY;

function updateGlobeTransform() {
  globeSphere.style.setProperty('--globe-rotate-x', `${rotationX}deg`);
  globeSphere.style.setProperty('--globe-rotate-y', `${rotationY}deg`);
  globeSphere.style.setProperty('--globe-rotate-z', `${rotationZ}deg`);
}

function handleGlobePointerDown(event) {
  isDragging = true;
  globeSphere.classList.add('is-dragging');
  dragStartX = event.clientX;
  dragStartY = event.clientY;
  lastRotationX = rotationX;
  lastRotationY = rotationY;
  globeSphere.setPointerCapture?.(event.pointerId);
}

function handleGlobePointerMove(event) {
  if (!isDragging) return;

  const deltaX = event.clientX - dragStartX;
  const deltaY = event.clientY - dragStartY;

  rotationY = lastRotationY + deltaX * 0.35;
  rotationX = Math.max(-78, Math.min(78, lastRotationX - deltaY * 0.2));
  updateGlobeTransform();
}

function handleGlobePointerUp(event) {
  if (!isDragging) return;

  isDragging = false;
  globeSphere.classList.remove('is-dragging');
  globeSphere.releasePointerCapture?.(event.pointerId);
}

function formatYear(value) {
  if (value < 0) return `${Math.abs(value)} BCE`;
  return `${value} CE`;
}

function getActiveEntries(year) {
  return entries.filter((entry) => entry.start <= year && entry.end >= year);
}

function getEntryById(id) {
  return entries.find((entry) => entry.id === id);
}

function renderGlobe() {
  markerLayer.innerHTML = '';
  const activeEntries = getActiveEntries(currentYear);
  const activeIds = new Set(activeEntries.map((entry) => entry.id));

  activeEntries.forEach((entry) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `marker-button ${entry.id === selectedId ? 'active' : ''}`;
    button.setAttribute('aria-label', `${entry.name}. ${entry.region}. Press Enter to open archive.`);
    button.setAttribute('aria-pressed', String(entry.id === selectedId));
    button.style.left = `${(entry.coordinates.x / 600) * 100}%`;
    button.style.top = `${(entry.coordinates.y / 600) * 100}%`;
    button.dataset.id = entry.id;
    button.addEventListener('click', () => selectEntry(entry.id));
    markerLayer.appendChild(button);
  });

  const selected = getEntryById(selectedId);
  if (selected) {
    globeStatus.textContent = `${selected.name} • ${selected.summary}`;
  }

  const selectedEntry = getEntryById(selectedId);
  if (selectedEntry) {
    const related = selectedEntry.links
      .map((linkId) => getEntryById(linkId))
      .filter((entry) => entry && activeIds.has(entry.id));
    related.forEach((target) => {
      const line = document.createElement('div');
      line.className = 'route-line';
      line.style.left = `${(selectedEntry.coordinates.x / 600) * 100}%`;
      line.style.top = `${(selectedEntry.coordinates.y / 600) * 100}%`;
      line.style.setProperty('--target-x', `${(target.coordinates.x / 600) * 100}%`);
      line.style.setProperty('--target-y', `${(target.coordinates.y / 600) * 100}%`);
      markerLayer.appendChild(line);
    });
  }
}

function renderSearchResults() {
  const query = searchInput.value.trim().toLowerCase();
  if (!query) {
    searchResults.innerHTML = '';
    searchResults.classList.remove('open');
    return;
  }

  const matches = entries.filter((entry) => [entry.name, entry.region, entry.summary, entry.kind, entry.category].some((value) => String(value).toLowerCase().includes(query)));
  searchResults.innerHTML = '';

  if (!matches.length) {
    searchResults.classList.add('open');
    searchResults.innerHTML = '<button class="search-result">No archive match found.</button>';
    return;
  }

  searchResults.classList.add('open');
  matches.slice(0, 7).forEach((entry) => {
    const button = document.createElement('button');
    button.className = 'search-result';
    button.textContent = `${entry.name} • ${entry.region}`;
    button.addEventListener('click', () => {
      selectEntry(entry.id);
      searchInput.value = entry.name;
      searchResults.classList.remove('open');
    });
    searchResults.appendChild(button);
  });
}

function renderTimeline() {
  timeDisplay.textContent = formatYear(currentYear);
  eraLabel.textContent = currentYear < 500 ? 'Ancient world' : currentYear < 1500 ? 'Medieval exchange' : currentYear < 1800 ? 'Early modern empire' : 'Modern global system';

  const activeEntries = getActiveEntries(currentYear);
  timelineEvents.innerHTML = '';

  const featured = activeEntries.slice(0, 4);
  featured.forEach((entry) => {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    item.textContent = `${entry.name} • ${entry.summary}`;
    timelineEvents.appendChild(item);
  });
}

function renderArchive(entry) {
  archivePanel.classList.add('scanning');
  setTimeout(() => archivePanel.classList.remove('scanning'), 700);

  const relatedNames = entry.links
    .map((linkId) => getEntryById(linkId)?.name)
    .filter(Boolean)
    .join(' • ');

  archivePanel.innerHTML = `
    <div class="archive-header">
      <p class="section-label">ARCHIVE ACCESS</p>
      <h3>${entry.name}</h3>
      <p class="archive-copy">${entry.overview}</p>
      <div class="metric-row">
        <span class="metric">${entry.kind}</span>
        <span class="metric">${entry.category}</span>
        <span class="metric">${entry.years}</span>
      </div>
    </div>
    <div class="archive-grid">
      <div class="archive-card">
        <h4>Historical summary</h4>
        <p>${entry.summary}</p>
      </div>
      <div class="archive-card">
        <h4>Why it mattered</h4>
        <p>${entry.overview}</p>
      </div>
      <div class="archive-card">
        <h4>Territories & capitals</h4>
        <p>${entry.capitals.join(', ')}</p>
      </div>
      <div class="archive-card">
        <h4>Languages & migrations</h4>
        <p>${entry.languages.join(', ')} · ${entry.migrations.join(', ')}</p>
      </div>
      <div class="archive-card">
        <h4>Fun facts</h4>
        <ul>${entry.facts.map((fact) => `<li>${fact}</li>`).join('')}</ul>
      </div>
      <div class="archive-card">
        <h4>Network ties</h4>
        <p>${relatedNames || 'No nearby connections in the current archive view.'}</p>
      </div>
    </div>
  `;
}

function selectEntry(id) {
  selectedId = id;
  const entry = getEntryById(id);
  if (!entry) return;
  renderGlobe();
  renderTimeline();
  renderArchive(entry);
}

function toggleAutoplay() {
  autoplay = !autoplay;
  playToggle.textContent = autoplay ? '❚❚' : '▶';
  playToggle.setAttribute('aria-label', autoplay ? 'Pause historical timeline' : 'Play historical timeline');
  if (autoplay) {
    autoplayTimer = setInterval(() => {
      currentYear += 25;
      if (currentYear > 2025) currentYear = -4000;
      timeSlider.value = currentYear;
      renderGlobe();
      renderTimeline();
    }, 1200);
  } else if (autoplayTimer) {
    clearInterval(autoplayTimer);
  }
}

timeSlider.addEventListener('input', (event) => {
  currentYear = Number(event.target.value);
  renderGlobe();
  renderTimeline();
});

searchInput.addEventListener('input', renderSearchResults);
searchInput.addEventListener('focus', renderSearchResults);
document.addEventListener('click', (event) => {
  if (!event.target.closest('.search-shell')) {
    searchResults.classList.remove('open');
  }
});

playToggle.addEventListener('click', toggleAutoplay);
globeSphere.addEventListener('pointerdown', handleGlobePointerDown);
globeSphere.addEventListener('pointermove', handleGlobePointerMove);
globeSphere.addEventListener('pointerup', handleGlobePointerUp);
globeSphere.addEventListener('pointercancel', handleGlobePointerUp);

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    currentYear += 25;
    if (currentYear > 2025) currentYear = -4000;
    timeSlider.value = currentYear;
    renderGlobe();
    renderTimeline();
  }
  if (event.key === 'ArrowLeft') {
    currentYear -= 25;
    if (currentYear < -4000) currentYear = 2025;
    timeSlider.value = currentYear;
    renderGlobe();
    renderTimeline();
  }
});

updateGlobeTransform();
renderGlobe();
renderTimeline();
renderArchive(getEntryById(selectedId));
