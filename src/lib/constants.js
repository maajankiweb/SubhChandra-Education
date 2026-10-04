export const SITE_CONFIG = {
  name: process.env.NEXT_PUBLIC_APP_NAME || "SubhChandra Education",
  tagline: "Right course. Right career.",
  description:
    "Empowering students and parents with honest guidance for online & regular degree programs, scholarships, and Bihar Student Credit Card financial aid.",
  phone: process.env.NEXT_PUBLIC_PHONE_PRIMARY || "+91 88008 85175",
  altPhone: process.env.NEXT_PUBLIC_PHONE_SECONDARY || "+91 91559 99988",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "admissions@subhchandra.com",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "918800885175",
  address:
    process.env.NEXT_PUBLIC_OFFICE_ADDRESS ||
    "Head Office: E-211, Road No 2, Backside of Ruban Hospital, Patliputra Colony, Patna, Bihar - 800013",
  hours: "Mon - Sat: 9:30 AM - 7:00 PM (IST)",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Degree Programs", href: "/programs" },
  { label: "Financial Aid", href: "/financial-aid" },
  { label: "Bihar Student Credit Card", href: "/financial-aid/bihar-student-credit-card" },
  { label: "Partner Universities", href: "/universities" },
  { label: "City Centers", href: "/locations" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const TRUST_STATS = [
  { value: "15,000+", label: "Students Guided" },
  { value: "45+", label: "Partner Universities" },
  { value: "100%", label: "Verified Admissions" },
  { value: "12+ Yrs", label: "Educational Excellence" },
];

export const PROGRAM_LEVELS = [
  { id: "all", label: "All Programs" },
  { id: "UG", label: "Undergraduate (UG)" },
  { id: "PG", label: "Postgraduate (PG)" },
  { id: "Diploma", label: "Diploma & Healthcare" },
];

export const POPULAR_PROGRAMS = [
  {
    title: "Bachelor of Computer Applications (BCA)",
    code: "BCA",
    slug: "bca",
    level: "UG",
    duration: "3 Years (6 Semesters)",
    mode: ["Online", "Regular"],
    eligibility: "10+2 with Math/CS (min 45% aggregate)",
    feeRange: "₹45,000 - ₹95,000 / year",
    creditCardEligible: true,
    highlights: ["Full Stack Web Dev", "Cloud Architecture", "Data Structures", "Industry Internships"],
  },
  {
    title: "Master of Business Administration (MBA)",
    code: "MBA",
    slug: "mba",
    level: "PG",
    duration: "2 Years (4 Semesters)",
    mode: ["Online", "Hybrid", "Regular"],
    eligibility: "Graduation in any discipline (min 50%)",
    feeRange: "₹85,000 - ₹2,50,000 / year",
    creditCardEligible: true,
    highlights: ["Dual Specialization", "Marketing & Finance", "Case Study Method", "Placement Assistance"],
  },
  {
    title: "Bachelor of Technology (B.Tech - CSE/AI)",
    code: "BTech",
    slug: "btech-cse",
    level: "UG",
    duration: "4 Years (8 Semesters)",
    mode: ["Regular"],
    eligibility: "10+2 with PCM (min 50%) + Entrance/Merit",
    feeRange: "₹95,000 - ₹1,80,000 / year",
    creditCardEligible: true,
    highlights: ["AI & Machine Learning", "Hands-on Labs", "Hackathons", "Top Recruiter Network"],
  },
  {
    title: "Bachelor of Business Administration (BBA)",
    code: "BBA",
    slug: "bba",
    level: "UG",
    duration: "3 Years (6 Semesters)",
    mode: ["Online", "Regular"],
    eligibility: "10+2 in any stream (min 45%)",
    feeRange: "₹40,000 - ₹80,000 / year",
    creditCardEligible: true,
    highlights: ["Entrepreneurship", "Corporate Readiness", "Live Projects", "Soft Skills Training"],
  },
  {
    title: "Master of Computer Applications (MCA)",
    code: "MCA",
    slug: "mca",
    level: "PG",
    duration: "2 Years (4 Semesters)",
    mode: ["Online", "Regular"],
    eligibility: "BCA/BSc IT/BCom with Math (min 50%)",
    feeRange: "₹60,000 - ₹1,20,000 / year",
    creditCardEligible: true,
    highlights: ["Cloud Computing", "AI Systems", "Cyber Security", "Capstone Project"],
  },
  {
    title: "B.Sc Nursing",
    code: "BSc Nursing",
    slug: "bsc-nursing",
    level: "UG",
    duration: "4 Years",
    mode: ["Regular (Clinical Training)"],
    eligibility: "10+2 with PCB (min 45%)",
    feeRange: "₹75,000 - ₹1,60,000 / year",
    creditCardEligible: true,
    highlights: ["INC Approved Colleges", "Hospital Rotations", "High Global Demand", "Govt Job Guidance"],
  },
  {
    title: "GNM (General Nursing and Midwifery)",
    code: "GNM",
    slug: "gnm",
    level: "Diploma",
    duration: "3 Years",
    mode: ["Regular"],
    eligibility: "10+2 in any stream (min 40%)",
    feeRange: "₹50,000 - ₹1,10,000 / year",
    creditCardEligible: true,
    highlights: ["Direct Practical Training", "Bedside Nursing Care", "Midwifery Training", "Hostel Facilities"],
  },
  {
    title: "Bachelor of Hotel Management (BHMCT)",
    code: "BHMCT",
    slug: "bhmct",
    level: "UG",
    duration: "4 Years",
    mode: ["Regular"],
    eligibility: "10+2 in any stream (min 45%)",
    feeRange: "₹65,000 - ₹1,30,000 / year",
    creditCardEligible: true,
    highlights: ["5-Star Hotel Training", "Food Production & Culinary", "Cruise Line Career Guidance", "Global Placements"],
  }
];

export const CITIES_LIST = [
  {
    name: "Patna (Head Office)",
    state: "Bihar",
    address: "E-211, Road No 2, Backside of Ruban Hospital, Patliputra Colony, Patna-800013",
  },
  {
    name: "West Champaran",
    state: "Bihar",
    address: "Supriya Cinema Rd, In Front of Wholesale Market, Kamalnath Nagar, Bettiah, Pin Code - 845438",
  },
  {
    name: "Muzaffarpur",
    state: "Bihar",
    address: "Puran Chhapra Parisar, 1st Floor Above Dr. Indira's Clinic Chakkar Chowk, Muzaffarpur, Pin Code - 842001",
  },
  {
    name: "Sasaram / Rohtas",
    state: "Bihar",
    address: "Opposite Monte Carlo, Near Rajendra Vidyalaya, Gaulaxmi, Sasaram, Rohtas Pincode - 821115",
  },
  {
    name: "Noida (Branch - I)",
    state: "Uttar Pradesh",
    address: "A 24, Near City Center Metro Station, A Block, Sector 50, Noida, Uttar Pradesh-201303",
  },
  {
    name: "Noida (Branch - II)",
    state: "Uttar Pradesh",
    address: "C-3, 4th Floor, Sector 3, Noida, Gautam Buddha Nagar, Noida, Uttar Pradesh – 201301",
  },
];

export const FAQS = [
  {
    topic: "general",
    question: "What is SubhChandra Education?",
    answer:
      "SubhChandra Education is a trusted edtech platform dedicated to providing information and guidance on various online and offline degree programs, career opportunities, and skill development courses.",
  },
  {
    topic: "courses",
    question: "What courses does SubhChandra Education cover?",
    answer:
      "We provide multiple degree programs, including BCA, MCA, BBA, MBA, B.Tech, M.Tech, B.Com, M.Com, B.Sc, M.Sc, BA (JMC), BFA, BLIS, MLIS, B.Sc Nursing, GNM, and BHMCT.",
  },
  {
    topic: "benefits",
    question: "How can I benefit from SubhChandra Education?",
    answer:
      "You can use SubhChandra Education to find details about degree programs, explore career opportunities after graduation, know about financial aid, scholarships, and student credit card facilities, and get expert guidance on choosing the right course.",
  },
  {
    topic: "affiliation",
    question: "Is SubhChandra Education affiliated with any universities?",
    answer:
      "SubhChandra Education collaborates with various institutions to provide accurate and updated information, but we do not directly offer degrees or diplomas.",
  },
  {
    topic: "counselling",
    question: "Does SubhChandra Education provide career counseling?",
    answer:
      "Yes, we offer career counseling through our expert guidance in three ways i.e. telephonic, office visit and video call.",
  },
];
