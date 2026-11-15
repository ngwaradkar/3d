export const GROUPS = {
  Languages: ['Python', 'VBA'],
  Libraries: ['Pandas', 'NumPy', 'OpenPyXL', 'XlsxWriter', 'Plotly'],
  Apps: ['Streamlit', 'SQLite', 'Git', 'GitHub'],
  Excel: ['Advanced Formulas', 'Pivot Automation', 'Chart Automation', 'Reporting'],
  ERP: ['SAP PP/MM', 'SAP IPMS', 'MES', 'MPS / MRP'],
  Planning: ['VIN Generation', 'Line Sequencing', 'Capacity Planning', 'Shortage Management', 'Inventory Control'],
};
export const SKILLS = Object.entries(GROUPS).flatMap(([g, ws]) => ws.map((w) => ({ w, g })));

export const PROJECTS = [
  {
    tag: 'Digital Mfg · KSPG',
    title: 'Production Planning',
    em: 'Suite',
    desc: 'Three Streamlit apps for monthly, weekly and shift-wise planning — 393+ parts across 13 lines, cutting monthly plan prep by ~85% and weekly by ~73%.',
    stack: ['Python', 'Pandas', 'Streamlit', 'Plotly', 'OpenPyXL', 'GitHub'],
  },
  {
    tag: 'PPC · Tata Motors',
    title: 'VIN Generation',
    em: 'Dashboard',
    desc: 'Rolling 3–4 day VIN sequencing with 100% BOM validation on every run — runtime cut from 3.5 hours to 8 seconds across TCF-1 and TCF-2.',
    stack: ['Python', 'Streamlit', 'Pandas', 'NumPy', 'OpenPyXL'],
  },
  {
    tag: 'Live · Shortage',
    title: 'Shortage & Float',
    em: 'Tracker',
    desc: 'Live shortage and float monitoring across 4 critical component stages with an automated 6:30 AM shift reset, plus holiday-aware paint-shop aging analytics.',
    stack: ['Python', 'Streamlit', 'Pandas', 'NumPy', 'OpenPyXL'],
  },
];

export const STATS = [
  { label: 'Years in automotive', value: 12, suffix: '+', h: 3.4 },
  { label: 'Parts automated', value: 393, suffix: '+', h: 5.0 },
  { label: 'Plan prep time cut', value: 85, suffix: '%', h: 4.2 },
  { label: 'Hours saved / year', value: 250, suffix: '+', h: 3.0 },
];

export const JOURNEY = [
  { year: '2014', role: 'Senior Associate, PPC', place: 'Tata Motors, Pune', note: 'Jun 2014 — Apr 2018 · TCF line sequencing, supplier schedules, SAP IPMS' },
  { year: '2018', role: 'Assistant Manager, PPC', place: 'KSPG Automotive (Rheinmetall)', note: 'May 2018 — May 2026 · SAP MRP, MPS, Python & Streamlit planning suite' },
  { year: '2026', role: 'Executive, PPC', place: 'Tata Motors Passenger Vehicles, Pune', note: 'May 2026 — Present · VIN generation for TCF-1 & TCF-2' },
];

export const CERTS = [
  ['Tata Motors', 'Excellence in Digital Transformation Using AI · 2026'],
  ['Pune Institute of SAP', 'SAP PP/MM Certified · 2019'],
  ['SAP', 'S/4HANA PP/MM · In progress'],
  ['Dr. D. Y. Patil Vidyapeeth', 'BBA, IT & Systems Management'],
  ['RMCET Ratnagiri', 'Diploma in Mechanical Engineering'],
  ['Professional Development', 'Prompt Engineering'],
  ['Professional Development', 'Excel Automation with Python'],
];
