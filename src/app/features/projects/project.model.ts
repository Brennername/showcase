export interface Project {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly tags: readonly string[];
  readonly githubUrl: string;
  readonly architectureNote: string;
  readonly status: string;
}

export const FEATURED_PROJECTS: readonly Project[] = [
  {
    id: 'pdfutils',
    title: 'PDFutils',
    description: 'Specialized enterprise Java command-line utility for parsing PDF byte streams and extracting digital x509 certificates and signature validation structures.',
    tags: ['Java', 'Maven', 'Cryptography', 'x509', 'CLI'],
    githubUrl: 'https://github.com/Brennername/pdfutils/tree/master',
    architectureNote: 'Low-overhead stream processing designed for automated document intake and integrity verification pipelines.',
    status: 'Open Source'
  },
  {
    id: 'menu-maker',
    title: 'Menu Maker',
    description: 'Enterprise resource and requisition management system designed for high-capacity institutional kitchens and nutritional planning.',
    tags: ['Angular', 'Spring Boot', 'PostgreSQL', 'REST API'],
    githubUrl: 'https://github.com/Brennername/menu-maker',
    architectureNote: 'Layered architecture separating complex recipe scaling math and food inventory state from the responsive Angular client.',
    status: 'In Development'
  },
  {
    id: 'ardour-collab',
    title: 'Ardour-Collab',
    description: 'Web-based DAW controller interface that bridges browser event streams with the Ardour Digital Audio Workstation via Open Sound Control (OSC).',
    tags: ['Angular', 'Vite', 'Node.js', 'Express', 'OSC', 'Real-Time Audio'],
    githubUrl: 'https://github.com/Brennername/ardour-collab',
    architectureNote: 'Low-latency bridge translating browser WebSocket payloads directly to UDP OSC datagrams for hardware/DAW sync.',
    status: 'Prototype'
  },
  {
    id: 'msftoeml',
    title: 'MsgToEmlConverter',
    description: 'High-fidelity parser converting proprietary Microsoft Outlook MSG compound files into standard RFC 822 MIME EML formats.',
    tags: ['Java', 'Maven', 'MIME', 'Compound Document Format'],
    githubUrl: 'https://github.com/Brennername/MsgToEmlConverter',
    architectureNote: 'Decoupled extraction engine that parses binary OLE2 structures and extracts attachments, HTML bodies, and metadata headers.',
    status: 'Open Source'
  },
  {
    id: 'showcase',
    title: 'Personal Engineering Showcase',
    description: 'Mobile-first, dark/light themed portfolio and architecture showcase running on Angular with an Express SSR / static delivery tier.',
    tags: ['Angular 17/18', 'TypeScript', 'Responsive CSS', 'Express', 'Heroku'],
    githubUrl: 'https://github.com/Brennername/showcase',
    architectureNote: 'Zero-bloat CSS token architecture, signal-driven theme management, and accessible responsive drawer navigation.',
    status: 'Active'
  },
  {
    id: 'tagebuch',
    title: 'TageBuch',
    description: 'Lightweight reactive journaling and article syndication feed designed for frictionless embedding and fast editorial workflows.',
    tags: ['Vue 3', 'Vite', 'Frontend', 'Single Page App'],
    githubUrl: 'https://github.com/Brennername/tagebuch',
    architectureNote: 'Ultra-fast bundle size with component-level reactivity and modular article feed interfaces.',
    status: 'Prototype'
  }
];
