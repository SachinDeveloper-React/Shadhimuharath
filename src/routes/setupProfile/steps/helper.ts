export const religionData = [
  {
    name: 'Hindu',
    communities: [
      {
        name: 'Brahmin',
        subCommunities: ['Gaur', 'Maithil', 'Iyer', 'Iyengar'],
      },
      {
        name: 'Kshatriya',
        subCommunities: ['Rajput', 'Rana', 'Thakur'],
      },
      {
        name: 'Vaishya',
        subCommunities: ['Agarwal', 'Gupta'],
      },
    ],
  },
  {
    name: 'Muslim',
    communities: [
      {
        name: 'Sunni',
        subCommunities: ['Hanafi', 'Shafi’i'],
      },
      {
        name: 'Shia',
        subCommunities: ['Twelver', 'Ismaili'],
      },
    ],
  },
  {
    name: 'Christian',
    communities: [
      {
        name: 'Catholic',
        subCommunities: ['Roman Catholic', 'Syro-Malabar'],
      },
      {
        name: 'Protestant',
        subCommunities: ['Baptist', 'Methodist'],
      },
    ],
  },
  {
    name: 'Sikh',
    communities: [
      {
        name: 'Jat',
        subCommunities: ['Sandhu', 'Dhillon', 'Brar'],
      },
      {
        name: 'Ramgarhia',
        subCommunities: ['Gill', 'Dosanjh'],
      },
    ],
  },
  {
    name: 'Jain',
    communities: [
      {
        name: 'Digambar',
        subCommunities: ['Taranpanthi', 'Bispanthi'],
      },
      {
        name: 'Shwetambar',
        subCommunities: ['Murtipujak', 'Sthanakvasi'],
      },
    ],
  },
  {
    name: 'Other',
    communities: [],
  },
];

export const countryData = [
  {
    name: 'India',
    states: [
      {
        name: 'Maharashtra',
        cities: ['Mumbai', 'Pune', 'Nagpur'],
      },
      {
        name: 'Karnataka',
        cities: ['Bengaluru', 'Mysuru', 'Mangalore'],
      },
      {
        name: 'Tamil Nadu',
        cities: ['Chennai', 'Coimbatore', 'Madurai'],
      },
    ],
  },
  {
    name: 'United States',
    states: [
      {
        name: 'California',
        cities: ['Los Angeles', 'San Francisco', 'San Diego'],
      },
      {
        name: 'Texas',
        cities: ['Houston', 'Austin', 'Dallas'],
      },
      {
        name: 'New York',
        cities: ['New York City', 'Buffalo', 'Rochester'],
      },
    ],
  },
  {
    name: 'Canada',
    states: [
      {
        name: 'Ontario',
        cities: ['Toronto', 'Ottawa', 'Mississauga'],
      },
      {
        name: 'British Columbia',
        cities: ['Vancouver', 'Victoria', 'Kelowna'],
      },
      {
        name: 'Alberta',
        cities: ['Calgary', 'Edmonton', 'Red Deer'],
      },
    ],
  },
  {
    name: 'Australia',
    states: [
      {
        name: 'New South Wales',
        cities: ['Sydney', 'Newcastle', 'Wollongong'],
      },
      {
        name: 'Victoria',
        cities: ['Melbourne', 'Geelong', 'Ballarat'],
      },
      {
        name: 'Queensland',
        cities: ['Brisbane', 'Gold Coast', 'Cairns'],
      },
    ],
  },
  {
    name: 'Other',
    states: [],
  },
];

export const profileOptionsData = [
  {
    category: 'Marital Status',
    options: ['Never Married', 'Divorced', 'Widowed', 'Separated'],
  },
  {
    category: 'Height',
    options: [
      'Below 5ft',
      '5ft 0in - 5ft 4in',
      '5ft 5in - 5ft 9in',
      '5ft 10in - 6ft 1in',
      'Above 6ft 1in',
    ],
  },
  {
    category: 'Diet',
    options: ['Vegetarian', 'Non-Vegetarian', 'Vegan', 'Eggetarian', 'Jain'],
  },
];

export const educationData = [
  {
    qualification: 'Select',
    colleges: [],
  },
  {
    qualification: 'High School',
    colleges: ['N/A'],
  },
  {
    qualification: 'Diploma',
    colleges: ['Polytechnic Institute', 'Govt. Technical College', 'Other'],
  },
  {
    qualification: 'Bachelor’s Degree',
    colleges: [
      'IIT Bombay',
      'IIT Delhi',
      'NIT Trichy',
      'Delhi University',
      'Mumbai University',
      'Other',
    ],
  },
  {
    qualification: 'Master’s Degree',
    colleges: [
      'IIT Madras',
      'IIT Kanpur',
      'BITS Pilani',
      'Jawaharlal Nehru University',
      'Other',
    ],
  },
  {
    qualification: 'Ph.D.',
    colleges: [
      'IIT Kharagpur',
      'Indian Statistical Institute',
      'JNU',
      'Other Research Institutes',
      'Other',
    ],
  },
  {
    qualification: 'Other',
    colleges: ['Other'],
  },
];

export const profileAnnualIncomeData = [
  {
    category: 'Annual Income',
    options: [
      'Select',
      'Below ₹2 Lakh',
      '₹2 Lakh - ₹5 Lakh',
      '₹5 Lakh - ₹10 Lakh',
      '₹10 Lakh - ₹20 Lakh',
      '₹20 Lakh - ₹50 Lakh',
      'Above ₹50 Lakh',
      'Prefer not to say',
    ],
  },
];

export const profileWorkDetailsData = [
  {
    category: 'Work Details',
    fields: [
      {
        label: 'Company Type',
        options: [
          'Select',
          'Private',
          'Government',
          'Startup',
          'Public Sector',
          'Other',
        ],
      },
      {
        label: 'Designation',
        options: [
          'Select',
          'Software Engineer',
          'Manager',
          'Team Lead',
          'Analyst',
          'Consultant',
          'Director',
          'CEO/Founder',
          'Other',
        ],
      },
      {
        label: 'Company Name',
        options: [
          'Select',
          'TCS',
          'Infosys',
          'Google',
          'Amazon',
          'Microsoft',
          'Government of India',
          'Self-employed',
          'Other',
        ],
      },
    ],
  },
];
