export interface ContentSubject {
  code: string;
  name: string;
}

export interface ContentBranch {
  code: string;
  name: string;
  description: string;
  subjects: ContentSubject[];
}

export interface ContentSemester {
  semester: number;
  branches?: ContentBranch[];
  commonSubjects?: ContentSubject[];
}

export const contentData: ContentSemester[] = [
  {
    semester: 1,
    commonSubjects: [
      { code: 'MA101', name: 'Engineering Mathematics-I' },
      { code: 'PH101', name: 'Engineering Physics' },
      { code: 'CH101', name: 'Engineering Chemistry' },
      { code: 'ME101', name: 'Engineering Mechanics' },
      { code: 'EE101', name: 'Basic Electrical Engineering' },
      { code: 'CS101', name: 'Programming for Problem Solving' },
      { code: 'EN101', name: 'English' },
      { code: 'EG101', name: 'Engineering Graphics' }
    ]
  },
  {
    semester: 2,
    commonSubjects: [
      { code: 'MA102', name: 'Engineering Mathematics-II' },
      { code: 'PH102', name: 'Physics Laboratory' },
      { code: 'CH102', name: 'Chemistry Laboratory' },
      { code: 'ME102', name: 'Workshop Technology' },
      { code: 'EE102', name: 'Basic Electronics Engineering' },
      { code: 'CS102', name: 'Data Structures' },
      { code: 'EN102', name: 'Communication Skills' },
      { code: 'EV101', name: 'Environmental Studies' }
    ]
  },
  {
    semester: 3,
    branches: [
      {
        code: 'CSE',
        name: 'Computer Science Engineering',
        description: 'Software development, algorithms, and computing systems',
        subjects: [
          { code: 'MA201', name: 'Engineering Mathematics-III' },
          { code: 'CS201', name: 'Digital Logic Design' },
          { code: 'CS202', name: 'Computer Organization' },
          { code: 'CS203', name: 'Object Oriented Programming' },
          { code: 'CS204', name: 'Database Management Systems' },
          { code: 'CS205', name: 'Discrete Mathematics' },
          { code: 'HU201', name: 'Technical Communication' }
        ]
      },
      {
        code: 'ECE',
        name: 'Electronics & Communication Engineering',
        description: 'Electronics, communication systems, and signal processing',
        subjects: [
          { code: 'MA201', name: 'Engineering Mathematics-III' },
          { code: 'EC201', name: 'Electronic Devices' },
          { code: 'EC202', name: 'Circuit Analysis' },
          { code: 'EC203', name: 'Digital Electronics' },
          { code: 'EC204', name: 'Signals and Systems' },
          { code: 'EC205', name: 'Network Theory' },
          { code: 'HU201', name: 'Technical Communication' }
        ]
      },
      {
        code: 'ME',
        name: 'Mechanical Engineering',
        description: 'Design, manufacturing, and mechanical systems',
        subjects: [
          { code: 'MA201', name: 'Engineering Mathematics-III' },
          { code: 'ME201', name: 'Strength of Materials' },
          { code: 'ME202', name: 'Thermodynamics' },
          { code: 'ME203', name: 'Manufacturing Processes' },
          { code: 'ME204', name: 'Machine Drawing' },
          { code: 'ME205', name: 'Fluid Mechanics' },
          { code: 'HU201', name: 'Technical Communication' }
        ]
      },
      {
        code: 'CE',
        name: 'Civil Engineering',
        description: 'Infrastructure, construction, and structural engineering',
        subjects: [
          { code: 'MA201', name: 'Engineering Mathematics-III' },
          { code: 'CE201', name: 'Building Materials & Construction' },
          { code: 'CE202', name: 'Surveying' },
          { code: 'CE203', name: 'Strength of Materials' },
          { code: 'CE204', name: 'Fluid Mechanics' },
          { code: 'CE205', name: 'Engineering Geology' },
          { code: 'HU201', name: 'Technical Communication' }
        ]
      },
      {
        code: 'EE',
        name: 'Electrical Engineering',
        description: 'Power systems, electrical machines, and control systems',
        subjects: [
          { code: 'MA201', name: 'Engineering Mathematics-III' },
          { code: 'EE201', name: 'Circuit Analysis' },
          { code: 'EE202', name: 'Electrical Machines-I' },
          { code: 'EE203', name: 'Electronic Devices' },
          { code: 'EE204', name: 'Electromagnetic Field Theory' },
          { code: 'EE205', name: 'Measurement & Instrumentation' },
          { code: 'HU201', name: 'Technical Communication' }
        ]
      }
    ]
  },
  {
    semester: 4,
    branches: [
      {
        code: 'CSE',
        name: 'Computer Science Engineering',
        description: 'Software development, algorithms, and computing systems',
        subjects: [
          { code: 'MA202', name: 'Engineering Mathematics-IV' },
          { code: 'CS301', name: 'Design & Analysis of Algorithms' },
          { code: 'CS302', name: 'Operating Systems' },
          { code: 'CS303', name: 'Computer Networks' },
          { code: 'CS304', name: 'Software Engineering' },
          { code: 'CS305', name: 'Theory of Computation' },
          { code: 'HU202', name: 'Economics for Engineers' }
        ]
      },
      {
        code: 'ECE',
        name: 'Electronics & Communication Engineering',
        description: 'Electronics, communication systems, and signal processing',
        subjects: [
          { code: 'MA202', name: 'Engineering Mathematics-IV' },
          { code: 'EC301', name: 'Analog Electronics' },
          { code: 'EC302', name: 'Communication Systems' },
          { code: 'EC303', name: 'Control Systems' },
          { code: 'EC304', name: 'Microprocessors' },
          { code: 'EC305', name: 'Electromagnetic Waves' },
          { code: 'HU202', name: 'Economics for Engineers' }
        ]
      },
      {
        code: 'ME',
        name: 'Mechanical Engineering',
        description: 'Design, manufacturing, and mechanical systems',
        subjects: [
          { code: 'MA202', name: 'Engineering Mathematics-IV' },
          { code: 'ME301', name: 'Heat Transfer' },
          { code: 'ME302', name: 'Machine Design' },
          { code: 'ME303', name: 'Dynamics of Machinery' },
          { code: 'ME304', name: 'Material Science' },
          { code: 'ME305', name: 'Manufacturing Technology' },
          { code: 'HU202', name: 'Economics for Engineers' }
        ]
      },
      {
        code: 'CE',
        name: 'Civil Engineering',
        description: 'Infrastructure, construction, and structural engineering',
        subjects: [
          { code: 'MA202', name: 'Engineering Mathematics-IV' },
          { code: 'CE301', name: 'Structural Analysis' },
          { code: 'CE302', name: 'Concrete Technology' },
          { code: 'CE303', name: 'Soil Mechanics' },
          { code: 'CE304', name: 'Hydrology' },
          { code: 'CE305', name: 'Transportation Engineering' },
          { code: 'HU202', name: 'Economics for Engineers' }
        ]
      },
      {
        code: 'EE',
        name: 'Electrical Engineering',
        description: 'Power systems, electrical machines, and control systems',
        subjects: [
          { code: 'MA202', name: 'Engineering Mathematics-IV' },
          { code: 'EE301', name: 'Electrical Machines-II' },
          { code: 'EE302', name: 'Power Systems-I' },
          { code: 'EE303', name: 'Control Systems' },
          { code: 'EE304', name: 'Power Electronics' },
          { code: 'EE305', name: 'Microprocessors' },
          { code: 'HU202', name: 'Economics for Engineers' }
        ]
      }
    ]
  },
  {
    semester: 5,
    branches: [
      {
        code: 'CSE',
        name: 'Computer Science Engineering',
        description: 'Software development, algorithms, and computing systems',
        subjects: [
          { code: 'CS401', name: 'Compiler Design' },
          { code: 'CS402', name: 'Machine Learning' },
          { code: 'CS403', name: 'Web Technologies' },
          { code: 'CS404', name: 'Information Security' },
          { code: 'CS405', name: 'Mobile Application Development' },
          { code: 'CS406', name: 'Artificial Intelligence' },
          { code: 'HU301', name: 'Professional Ethics' }
        ]
      },
      {
        code: 'ECE',
        name: 'Electronics & Communication Engineering',
        description: 'Electronics, communication systems, and signal processing',
        subjects: [
          { code: 'EC401', name: 'Digital Signal Processing' },
          { code: 'EC402', name: 'VLSI Design' },
          { code: 'EC403', name: 'Antenna & Wave Propagation' },
          { code: 'EC404', name: 'Embedded Systems' },
          { code: 'EC405', name: 'Optical Communication' },
          { code: 'EC406', name: 'Digital Communication' },
          { code: 'HU301', name: 'Professional Ethics' }
        ]
      },
      {
        code: 'ME',
        name: 'Mechanical Engineering',
        description: 'Design, manufacturing, and mechanical systems',
        subjects: [
          { code: 'ME401', name: 'IC Engines' },
          { code: 'ME402', name: 'Refrigeration & Air Conditioning' },
          { code: 'ME403', name: 'Finite Element Methods' },
          { code: 'ME404', name: 'Industrial Engineering' },
          { code: 'ME405', name: 'Automobile Engineering' },
          { code: 'ME406', name: 'Power Plant Engineering' },
          { code: 'HU301', name: 'Professional Ethics' }
        ]
      },
      {
        code: 'CE',
        name: 'Civil Engineering',
        description: 'Infrastructure, construction, and structural engineering',
        subjects: [
          { code: 'CE401', name: 'Design of Steel Structures' },
          { code: 'CE402', name: 'Water Resources Engineering' },
          { code: 'CE403', name: 'Foundation Engineering' },
          { code: 'CE404', name: 'Environmental Engineering' },
          { code: 'CE405', name: 'Construction Management' },
          { code: 'CE406', name: 'Earthquake Engineering' },
          { code: 'HU301', name: 'Professional Ethics' }
        ]
      },
      {
        code: 'EE',
        name: 'Electrical Engineering',
        description: 'Power systems, electrical machines, and control systems',
        subjects: [
          { code: 'EE401', name: 'Power Systems-II' },
          { code: 'EE402', name: 'Electric Drives' },
          { code: 'EE403', name: 'High Voltage Engineering' },
          { code: 'EE404', name: 'Renewable Energy Systems' },
          { code: 'EE405', name: 'Digital Signal Processing' },
          { code: 'EE406', name: 'Power System Protection' },
          { code: 'HU301', name: 'Professional Ethics' }
        ]
      }
    ]
  },
  {
    semester: 6,
    branches: [
      {
        code: 'CSE',
        name: 'Computer Science Engineering',
        description: 'Software development, algorithms, and computing systems',
        subjects: [
          { code: 'CS501', name: 'Cloud Computing' },
          { code: 'CS502', name: 'Big Data Analytics' },
          { code: 'CS503', name: 'Internet of Things' },
          { code: 'CS504', name: 'Blockchain Technology' },
          { code: 'CS505', name: 'Computer Graphics' },
          { code: 'CS506', name: 'Human Computer Interaction' },
          { code: 'MG301', name: 'Principles of Management' }
        ]
      },
      {
        code: 'ECE',
        name: 'Electronics & Communication Engineering',
        description: 'Electronics, communication systems, and signal processing',
        subjects: [
          { code: 'EC501', name: 'Wireless Communication' },
          { code: 'EC502', name: 'Satellite Communication' },
          { code: 'EC503', name: 'Radar Systems' },
          { code: 'EC504', name: 'Biomedical Electronics' },
          { code: 'EC505', name: 'Neural Networks' },
          { code: 'EC506', name: 'Advanced Digital Signal Processing' },
          { code: 'MG301', name: 'Principles of Management' }
        ]
      },
      {
        code: 'ME',
        name: 'Mechanical Engineering',
        description: 'Design, manufacturing, and mechanical systems',
        subjects: [
          { code: 'ME501', name: 'Gas Turbines' },
          { code: 'ME502', name: 'Robotics' },
          { code: 'ME503', name: 'Advanced Manufacturing' },
          { code: 'ME504', name: 'Mechatronics' },
          { code: 'ME505', name: 'Renewable Energy' },
          { code: 'ME506', name: 'Computational Fluid Dynamics' },
          { code: 'MG301', name: 'Principles of Management' }
        ]
      },
      {
        code: 'CE',
        name: 'Civil Engineering',
        description: 'Infrastructure, construction, and structural engineering',
        subjects: [
          { code: 'CE501', name: 'Design of Concrete Structures' },
          { code: 'CE502', name: 'Advanced Structural Analysis' },
          { code: 'CE503', name: 'Pavement Design' },
          { code: 'CE504', name: 'Water Treatment' },
          { code: 'CE505', name: 'Remote Sensing & GIS' },
          { code: 'CE506', name: 'Coastal Engineering' },
          { code: 'MG301', name: 'Principles of Management' }
        ]
      },
      {
        code: 'EE',
        name: 'Electrical Engineering',
        description: 'Power systems, electrical machines, and control systems',
        subjects: [
          { code: 'EE501', name: 'Smart Grid Technology' },
          { code: 'EE502', name: 'Electric Vehicle Technology' },
          { code: 'EE503', name: 'Advanced Control Systems' },
          { code: 'EE504', name: 'Power Quality' },
          { code: 'EE505', name: 'Energy Management' },
          { code: 'EE506', name: 'FACTS Devices' },
          { code: 'MG301', name: 'Principles of Management' }
        ]
      }
    ]
  },
  {
    semester: 7,
    branches: [
      {
        code: 'CSE',
        name: 'Computer Science Engineering',
        description: 'Software development, algorithms, and computing systems',
        subjects: [
          { code: 'CS601', name: 'Deep Learning' },
          { code: 'CS602', name: 'Distributed Systems' },
          { code: 'CS603', name: 'Natural Language Processing' },
          { code: 'CS604', name: 'Computer Vision' },
          { code: 'CS605', name: 'Quantum Computing' },
          { code: 'CS606', name: 'Advanced Database Systems' }
        ]
      },
      {
        code: 'ECE',
        name: 'Electronics & Communication Engineering',
        description: 'Electronics, communication systems, and signal processing',
        subjects: [
          { code: 'EC601', name: '5G Communication' },
          { code: 'EC602', name: 'Advanced VLSI Design' },
          { code: 'EC603', name: 'RF Circuit Design' },
          { code: 'EC604', name: 'Image Processing' },
          { code: 'EC605', name: 'Nanoelectronics' },
          { code: 'EC606', name: 'Cognitive Radio' }
        ]
      },
      {
        code: 'ME',
        name: 'Mechanical Engineering',
        description: 'Design, manufacturing, and mechanical systems',
        subjects: [
          { code: 'ME601', name: 'Advanced Heat Transfer' },
          { code: 'ME602', name: 'Additive Manufacturing' },
          { code: 'ME603', name: 'Vibration Analysis' },
          { code: 'ME604', name: 'Advanced Materials' },
          { code: 'ME605', name: 'Thermal Engineering' },
          { code: 'ME606', name: 'Design Optimization' }
        ]
      },
      {
        code: 'CE',
        name: 'Civil Engineering',
        description: 'Infrastructure, construction, and structural engineering',
        subjects: [
          { code: 'CE601', name: 'Advanced Foundation Design' },
          { code: 'CE602', name: 'Bridge Engineering' },
          { code: 'CE603', name: 'Traffic Engineering' },
          { code: 'CE604', name: 'Waste Management' },
          { code: 'CE605', name: 'Structural Dynamics' },
          { code: 'CE606', name: 'Construction Technology' }
        ]
      },
      {
        code: 'EE',
        name: 'Electrical Engineering',
        description: 'Power systems, electrical machines, and control systems',
        subjects: [
          { code: 'EE601', name: 'Power System Stability' },
          { code: 'EE602', name: 'Advanced Power Electronics' },
          { code: 'EE603', name: 'Electrical Machine Design' },
          { code: 'EE604', name: 'Power System Economics' },
          { code: 'EE605', name: 'Digital Protection' },
          { code: 'EE606', name: 'Energy Storage Systems' }
        ]
      }
    ]
  },
  {
    semester: 8,
    branches: [
      {
        code: 'CSE',
        name: 'Computer Science Engineering',
        description: 'Software development, algorithms, and computing systems',
        subjects: [
          { code: 'CS701', name: 'Advanced Software Engineering' },
          { code: 'CS702', name: 'Parallel Computing' },
          { code: 'CS703', name: 'Information Retrieval' },
          { code: 'CS704', name: 'Social Network Analysis' },
          { code: 'CS705', name: 'Bioinformatics' },
          { code: 'CS706', name: 'Project Work' }
        ]
      },
      {
        code: 'ECE',
        name: 'Electronics & Communication Engineering',
        description: 'Electronics, communication systems, and signal processing',
        subjects: [
          { code: 'EC701', name: 'Advanced Communication Systems' },
          { code: 'EC702', name: 'System on Chip Design' },
          { code: 'EC703', name: 'Microwave Engineering' },
          { code: 'EC704', name: 'Speech Processing' },
          { code: 'EC705', name: 'Photonics' },
          { code: 'EC706', name: 'Project Work' }
        ]
      },
      {
        code: 'ME',
        name: 'Mechanical Engineering',
        description: 'Design, manufacturing, and mechanical systems',
        subjects: [
          { code: 'ME701', name: 'Advanced Manufacturing Systems' },
          { code: 'ME702', name: 'Energy Systems' },
          { code: 'ME703', name: 'Advanced Machine Design' },
          { code: 'ME704', name: 'Quality Engineering' },
          { code: 'ME705', name: 'Sustainable Engineering' },
          { code: 'ME706', name: 'Project Work' }
        ]
      },
      {
        code: 'CE',
        name: 'Civil Engineering',
        description: 'Infrastructure, construction, and structural engineering',
        subjects: [
          { code: 'CE701', name: 'Advanced Concrete Technology' },
          { code: 'CE702', name: 'Infrastructure Planning' },
          { code: 'CE703', name: 'Advanced Geotechnical Engineering' },
          { code: 'CE704', name: 'Urban Planning' },
          { code: 'CE705', name: 'Disaster Management' },
          { code: 'CE706', name: 'Project Work' }
        ]
      },
      {
        code: 'EE',
        name: 'Electrical Engineering',
        description: 'Power systems, electrical machines, and control systems',
        subjects: [
          { code: 'EE701', name: 'Advanced Power Systems' },
          { code: 'EE702', name: 'Industrial Automation' },
          { code: 'EE703', name: 'Power System Planning' },
          { code: 'EE704', name: 'Electrical Safety' },
          { code: 'EE705', name: 'Energy Audit' },
          { code: 'EE706', name: 'Project Work' }
        ]
      }
    ]
  }
];