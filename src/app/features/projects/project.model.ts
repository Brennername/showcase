export interface Project {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly tags: readonly string[];
  readonly githubUrl: string;
  readonly architectureNote: string;
  readonly status: string;
  readonly isPinned?: boolean;
}

export const FEATURED_PROJECTS: readonly Project[] = [
  // GitHub Pinned Repositories First
  {
    id: 'cacophony',
    title: 'Cacophony',
    description: 'An autonomous local model arena and multi-agent code orchestration platform engineered for tuning APU, GPU, TPU, and CPU edge deployments.',
    tags: ['TypeScript', 'Node.js', 'LLM Arena', 'Edge AI', 'Multi-Agent'],
    githubUrl: 'https://github.com/Brennername/cacophony',
    architectureNote: 'Local runtime scheduler and performance telemetry engine balancing model memory constraints and execution pipelines.',
    status: 'Active',
    isPinned: true
  },
  {
    id: 'jaffolding',
    title: 'Jaffolding',
    description: 'A reactive Java front-end web framework compiled to WebAssembly/JavaScript using TeaVM.',
    tags: ['Java', 'TeaVM', 'WebAssembly', 'Frontend Framework'],
    githubUrl: 'https://github.com/Brennername/jaffolding',
    architectureNote: 'Compiles strongly typed Java DOM abstractions into optimized WebAssembly and JS bundles.',
    status: 'Open Source',
    isPinned: true
  },
  {
    id: '5wnewsreader',
    title: '5WNewsReader',
    description: 'Specialized reader and news ingestion client parsing journalistic articles across the foundational 5 Ws (Who, What, When, Where, Why).',
    tags: ['JavaScript', 'News Ingestion', 'Parsing', 'Editorial'],
    githubUrl: 'https://github.com/Brennername/5WNewsReader',
    architectureNote: 'Modular extraction heuristics that classify content blocks into structural journalistic facets.',
    status: 'Open Source',
    isPinned: true
  },
  {
    id: 'dsp-overlap-save',
    title: 'dsp-overlap-save',
    description: 'High-performance digital signal processing (DSP) implementation of the Overlap-Save convolution algorithm in Java.',
    tags: ['Java', 'DSP', 'FFT', 'Audio Processing', 'Algorithms'],
    githubUrl: 'https://github.com/Brennername/dsp-overlap-save',
    architectureNote: 'Fast frequency-domain circular convolution utilizing FFT blocks for low-latency discrete filtering.',
    status: 'Open Source',
    isPinned: true
  },

  // Additional Selected Projects
  {
    id: 'ardour-collab',
    title: 'Ardour-Collab',
    description: 'Web-based DAW controller interface bridging browser touch event streams with the Ardour Digital Audio Workstation via Open Sound Control (OSC).',
    tags: ['Angular', 'Vite', 'Node.js', 'Express', 'OSC', 'Real-Time Audio'],
    githubUrl: 'https://github.com/Brennername/ardour-collab',
    architectureNote: 'Low-latency bridge translating browser WebSocket payloads directly to UDP OSC datagrams for hardware/DAW sync.',
    status: 'Prototype',
    isPinned: false
  },
  {
    id: 'pdfutils',
    title: 'PDFutils',
    description: 'Enterprise Java command-line utility for parsing PDF byte streams and extracting digital x509 certificates and signature validation structures.',
    tags: ['Java', 'Maven', 'Cryptography', 'x509', 'CLI'],
    githubUrl: 'https://github.com/Brennername/pdfutils/tree/master',
    architectureNote: 'Low-overhead stream processing designed for automated document intake and integrity verification pipelines.',
    status: 'Open Source',
    isPinned: false
  },
  {
    id: 'msftoeml',
    title: 'MsgToEmlConverter',
    description: 'High-fidelity parser converting proprietary Microsoft Outlook MSG compound files into standard RFC 822 MIME EML formats.',
    tags: ['Java', 'Maven', 'MIME', 'Compound Document Format'],
    githubUrl: 'https://github.com/Brennername/MsgToEmlConverter',
    architectureNote: 'Decoupled extraction engine that parses binary OLE2 structures and extracts attachments, HTML bodies, and metadata headers.',
    status: 'Open Source',
    isPinned: false
  },
  {
    id: 'menu-maker',
    title: 'Menu Maker',
    description: 'Enterprise resource and requisition management system designed for institutional kitchens and nutritional planning.',
    tags: ['Angular', 'Spring Boot', 'PostgreSQL', 'REST API'],
    githubUrl: 'https://github.com/Brennername/menu-maker',
    architectureNote: 'Layered architecture separating complex recipe scaling math and food inventory state from the responsive client.',
    status: 'In Development',
    isPinned: false
  },
  {
    id: 'tagebuch',
    title: 'TageBuch',
    description: 'Lightweight reactive journaling and article syndication feed designed for frictionless embedding and fast editorial workflows.',
    tags: ['Vue 3', 'Vite', 'Frontend', 'Single Page App'],
    githubUrl: 'https://github.com/Brennername/tagebuch',
    architectureNote: 'Ultra-fast bundle size with component-level reactivity and modular article feed interfaces.',
    status: 'Prototype',
    isPinned: false
  }
];
