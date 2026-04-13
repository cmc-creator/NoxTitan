export interface IndustryTemplate {
  id: string;
  name: string;
  icon: string;
  description: string;
  color: string;
  compliance: {
    breakRules: {
      mealBreakAfterHours: number;
      mealBreakDuration: number;
      restBreakInterval: number;
      restBreakDuration: number;
    };
    overtimeRules: {
      dailyThreshold?: number;
      weeklyThreshold: number;
      overtimeRate: number;
    };
    requiredCertifications: string[];
  };
  departments: string[];
  positions: string[];
  shiftTypes: string[];
  features: {
    payroll: boolean;
    timeClock: boolean;
    guild: boolean;
    oracle: boolean;
    compliance: boolean;
    learning: boolean;
    assetVault: boolean;
    sentinel: boolean;
  };
  onboardingSteps: {
    admin: string[];
    employee: string[];
    manager: string[];
  };
  guildTheme?: string;
}

export const industryTemplates: Record<string, IndustryTemplate> = {
  healthcare: {
    id: 'healthcare',
    name: 'Healthcare',
    icon: '⚕️',
    description: 'Hospitals, clinics, nursing homes, medical facilities',
    color: 'from-amber-700 to-cyan-600',
    compliance: {
      breakRules: {
        mealBreakAfterHours: 6,
        mealBreakDuration: 30,
        restBreakInterval: 4,
        restBreakDuration: 15,
      },
      overtimeRules: {
        dailyThreshold: 8,
        weeklyThreshold: 40,
        overtimeRate: 1.5,
      },
      requiredCertifications: [
        'BLS/CPR',
        'HIPAA Training',
        'Infection Control',
        'Patient Safety',
        'Fire Safety',
      ],
    },
    departments: [
      'Emergency Department',
      'ICU',
      'Medical/Surgical',
      'Pediatrics',
      'Labor & Delivery',
      'Radiology',
      'Laboratory',
      'Pharmacy',
      'Physical Therapy',
      'Administration',
    ],
    positions: [
      'Registered Nurse',
      'LPN/LVN',
      'CNA',
      'Medical Assistant',
      'Physician',
      'Nurse Practitioner',
      'Pharmacist',
      'Radiology Tech',
      'Lab Tech',
      'Receptionist',
    ],
    shiftTypes: ['Day Shift (7a-7p)', 'Night Shift (7p-7a)', 'Evening (3p-11p)', 'PRN/On-Call'],
    features: {
      payroll: true,
      timeClock: true,
      guild: true,
      oracle: true,
      compliance: true,
      learning: true,
      assetVault: true,
      sentinel: true,
    },
    onboardingSteps: {
      admin: [
        'Set facility information',
        'Configure patient ratio requirements',
        'Set up departments and units',
        'Define shift differentials (nights, weekends, charge nurse)',
        'Configure HIPAA compliance settings',
        'Set up certification tracking',
        'Configure time & attendance rules',
        'Import employee roster',
      ],
      employee: [
        'Welcome & facility tour',
        'HIPAA compliance training',
        'Infection control certification',
        'Patient safety protocols',
        'EHR system training',
        'Time clock & scheduling orientation',
        'Benefits enrollment',
        'Meet your team & preceptor',
      ],
      manager: [
        'Servant leadership principles',
        'FLSA compliance for nurse managers',
        'Staff scheduling best practices',
        'Performance management',
        'Conflict resolution',
        'Patient safety & quality metrics',
        'Budget management',
        'Staff development & retention',
      ],
    },
    guildTheme: 'tomb-raider',
  },

  retail: {
    id: 'retail',
    name: 'Retail',
    icon: '🏪',
    description: 'Stores, boutiques, shopping centers',
    color: 'from-pink-600 to-rose-600',
    compliance: {
      breakRules: {
        mealBreakAfterHours: 5,
        mealBreakDuration: 30,
        restBreakInterval: 4,
        restBreakDuration: 10,
      },
      overtimeRules: {
        weeklyThreshold: 40,
        overtimeRate: 1.5,
      },
      requiredCertifications: [
        'Sexual Harassment Prevention',
        'Cash Handling',
        'Loss Prevention',
        'Customer Service',
      ],
    },
    departments: [
      'Sales Floor',
      'Customer Service',
      'Cashier',
      'Stock Room',
      'Visual Merchandising',
      'Management',
    ],
    positions: [
      'Sales Associate',
      'Cashier',
      'Stock Clerk',
      'Department Manager',
      'Store Manager',
      'Visual Merchandiser',
      'Loss Prevention',
    ],
    shiftTypes: ['Opening (6a-2p)', 'Mid (12p-8p)', 'Closing (2p-10p)', 'Weekend'],
    features: {
      payroll: true,
      timeClock: true,
      guild: true,
      oracle: true,
      compliance: false,
      learning: true,
      assetVault: false,
      sentinel: false,
    },
    onboardingSteps: {
      admin: [
        'Set store information',
        'Configure POS system integration',
        'Set up sales commission structure',
        'Define shift schedules',
        'Configure labor budget targets',
        'Set up employee discount policy',
        'Import product catalog',
        'Set seasonal staffing rules',
      ],
      employee: [
        'Welcome & store tour',
        'POS system training',
        'Customer service standards',
        'Product knowledge training',
        'Cash handling procedures',
        'Loss prevention awareness',
        'Employee discount policy',
        'Meet your team & supervisor',
      ],
      manager: [
        'Retail leadership fundamentals',
        'Fair Labor Standards Act (FLSA)',
        'Scheduling for optimal coverage',
        'Sales performance coaching',
        'Inventory management',
        'Customer complaint resolution',
        'Loss prevention strategies',
        'Team motivation & recognition',
      ],
    },
    guildTheme: 'treasure-hunt',
  },

  restaurant: {
    id: 'restaurant',
    name: 'Restaurant & Hospitality',
    icon: '🍽️',
    description: 'Restaurants, cafes, bars, catering',
    color: 'from-orange-600 to-red-600',
    compliance: {
      breakRules: {
        mealBreakAfterHours: 6,
        mealBreakDuration: 30,
        restBreakInterval: 4,
        restBreakDuration: 10,
      },
      overtimeRules: {
        weeklyThreshold: 40,
        overtimeRate: 1.5,
      },
      requiredCertifications: [
        'Food Handler Certification',
        'Alcohol Service (TIPS/ServSafe)',
        'Allergen Awareness',
        'Sexual Harassment Prevention',
      ],
    },
    departments: [
      'Front of House',
      'Back of House',
      'Bar',
      'Kitchen',
      'Management',
      'Catering',
    ],
    positions: [
      'Server',
      'Bartender',
      'Host/Hostess',
      'Line Cook',
      'Prep Cook',
      'Dishwasher',
      'Sous Chef',
      'General Manager',
      'Shift Supervisor',
    ],
    shiftTypes: ['Breakfast (6a-2p)', 'Lunch (10a-4p)', 'Dinner (4p-12a)', 'Brunch (Weekend)'],
    features: {
      payroll: true,
      timeClock: true,
      guild: true,
      oracle: true,
      compliance: false,
      learning: true,
      assetVault: false,
      sentinel: false,
    },
    onboardingSteps: {
      admin: [
        'Set restaurant information',
        'Configure tip pooling rules',
        'Set up section assignments',
        'Define shift schedules',
        'Configure POS integration',
        'Set up menu & pricing',
        'Configure labor cost targets',
        'Set reservation system',
      ],
      employee: [
        'Welcome & restaurant tour',
        'Food safety certification',
        'POS system training',
        'Menu knowledge & allergens',
        'Table service standards',
        'Tip pooling procedures',
        'Health & safety protocols',
        'Meet your team & trainer',
      ],
      manager: [
        'Restaurant leadership essentials',
        'FLSA & tip credit compliance',
        'Scheduling for rush periods',
        'Food cost management',
        'Customer service excellence',
        'Conflict resolution',
        'Health inspection readiness',
        'Staff training & development',
      ],
    },
    guildTheme: 'treasure-hunt',
  },

  construction: {
    id: 'construction',
    name: 'Construction',
    icon: '🏗️',
    description: 'Building, trades, contractors',
    color: 'from-yellow-600 to-orange-700',
    compliance: {
      breakRules: {
        mealBreakAfterHours: 5,
        mealBreakDuration: 30,
        restBreakInterval: 4,
        restBreakDuration: 15,
      },
      overtimeRules: {
        dailyThreshold: 8,
        weeklyThreshold: 40,
        overtimeRate: 1.5,
      },
      requiredCertifications: [
        'OSHA 10/30',
        'Fall Protection',
        'Scaffold Safety',
        'Forklift Certification',
        'First Aid/CPR',
      ],
    },
    departments: [
      'General Labor',
      'Carpentry',
      'Electrical',
      'Plumbing',
      'HVAC',
      'Equipment Operation',
      'Site Management',
    ],
    positions: [
      'General Laborer',
      'Carpenter',
      'Electrician',
      'Plumber',
      'Heavy Equipment Operator',
      'Site Supervisor',
      'Project Manager',
      'Safety Officer',
    ],
    shiftTypes: ['Day (7a-3:30p)', 'Swing (3p-11:30p)', 'Night (11p-7:30a)', 'Weekend'],
    features: {
      payroll: true,
      timeClock: true,
      guild: true,
      oracle: true,
      compliance: true,
      learning: true,
      assetVault: true,
      sentinel: true,
    },
    onboardingSteps: {
      admin: [
        'Set company information',
        'Configure project sites',
        'Set up trade classifications',
        'Define prevailing wage rules',
        'Configure OSHA compliance',
        'Set up equipment tracking',
        'Configure geofencing for sites',
        'Import crew roster',
      ],
      employee: [
        'Welcome & site orientation',
        'OSHA safety training',
        'PPE requirements',
        'Tool & equipment training',
        'Site-specific hazards',
        'Time tracking & reporting',
        'Benefits & union info',
        'Meet your foreman & crew',
      ],
      manager: [
        'Construction leadership',
        'OSHA compliance & inspections',
        'Crew scheduling & productivity',
        'Safety culture development',
        'Performance management',
        'Conflict resolution',
        'Budget & cost control',
        'Subcontractor coordination',
      ],
    },
    guildTheme: 'space-explorer',
  },

  manufacturing: {
    id: 'manufacturing',
    name: 'Manufacturing',
    icon: '🏭',
    description: 'Factories, warehouses, production facilities',
    color: 'from-slate-600 to-gray-700',
    compliance: {
      breakRules: {
        mealBreakAfterHours: 5,
        mealBreakDuration: 30,
        restBreakInterval: 4,
        restBreakDuration: 15,
      },
      overtimeRules: {
        weeklyThreshold: 40,
        overtimeRate: 1.5,
      },
      requiredCertifications: [
        'Forklift Certification',
        'OSHA 10',
        'Lockout/Tagout',
        'Hazmat Awareness',
        'Machine Safety',
      ],
    },
    departments: [
      'Production',
      'Quality Control',
      'Maintenance',
      'Warehouse',
      'Shipping/Receiving',
      'Assembly',
    ],
    positions: [
      'Production Worker',
      'Machine Operator',
      'Quality Inspector',
      'Forklift Driver',
      'Maintenance Technician',
      'Warehouse Associate',
      'Production Supervisor',
      'Plant Manager',
    ],
    shiftTypes: ['First Shift (6a-2p)', 'Second Shift (2p-10p)', 'Third Shift (10p-6a)', 'Weekend'],
    features: {
      payroll: true,
      timeClock: true,
      guild: true,
      oracle: true,
      compliance: true,
      learning: true,
      assetVault: true,
      sentinel: true,
    },
    onboardingSteps: {
      admin: [
        'Set facility information',
        'Configure production lines',
        'Set up departments & zones',
        'Define shift differentials',
        'Configure OSHA compliance',
        'Set up equipment tracking',
        'Configure quality metrics',
        'Import employee roster',
      ],
      employee: [
        'Welcome & facility tour',
        'Safety orientation (OSHA)',
        'PPE requirements',
        'Machine operation training',
        'Quality standards',
        'Time clock & badge system',
        'Emergency procedures',
        'Meet your supervisor & team',
      ],
      manager: [
        'Manufacturing leadership',
        'OSHA & safety management',
        'Production scheduling',
        'Quality management systems',
        'Performance improvement',
        'Lean manufacturing principles',
        'Equipment maintenance',
        'Team development & cross-training',
      ],
    },
    guildTheme: 'space-explorer',
  },

  education: {
    id: 'education',
    name: 'Education',
    icon: '🎓',
    description: 'Schools, universities, training centers',
    color: 'from-amber-700 to-amber-800',
    compliance: {
      breakRules: {
        mealBreakAfterHours: 6,
        mealBreakDuration: 30,
        restBreakInterval: 4,
        restBreakDuration: 15,
      },
      overtimeRules: {
        weeklyThreshold: 40,
        overtimeRate: 1.5,
      },
      requiredCertifications: [
        'Teaching License',
        'Background Check',
        'Mandated Reporter Training',
        'First Aid/CPR',
        'Child Safety',
      ],
    },
    departments: [
      'Elementary',
      'Secondary',
      'Administration',
      'Special Education',
      'Counseling',
      'Support Staff',
    ],
    positions: [
      'Teacher',
      'Substitute Teacher',
      'Teaching Assistant',
      'Counselor',
      'Administrator',
      'Custodian',
      'Cafeteria Staff',
      'Bus Driver',
    ],
    shiftTypes: ['School Day (7a-3p)', 'After School (3p-6p)', 'Evening (4p-9p)', 'Summer Program'],
    features: {
      payroll: true,
      timeClock: true,
      guild: true,
      oracle: false,
      compliance: true,
      learning: true,
      assetVault: false,
      sentinel: true,
    },
    onboardingSteps: {
      admin: [
        'Set school information',
        'Configure academic calendar',
        'Set up grade levels & classes',
        'Define staff roles',
        'Configure substitute system',
        'Set up credential tracking',
        'Configure parent communication',
        'Import staff roster',
      ],
      employee: [
        'Welcome & school tour',
        'Background clearance',
        'Mandated reporter training',
        'Student privacy (FERPA)',
        'Emergency procedures',
        'Classroom management',
        'Technology systems',
        'Meet your mentor & team',
      ],
      manager: [
        'Educational leadership',
        'Teacher evaluation systems',
        'Staff scheduling & coverage',
        'Instructional coaching',
        'Parent communication',
        'Conflict resolution',
        'Budget management',
        'Professional development',
      ],
    },
    guildTheme: 'detective',
  },
};

export function getIndustryTemplate(industryId: string): IndustryTemplate | null {
  return industryTemplates[industryId] || null;
}

export function getAllIndustries(): IndustryTemplate[] {
  return Object.values(industryTemplates);
}
