import { SiOpenaigym } from 'react-icons/si';
import { TbDiamondFilled } from "react-icons/tb";

export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About",
        path: '/about'
    },
    {
        name: "Gallery",
        path: '/gallery'
    },
    {
        name: "Doctors",
        path: '/doctors'
    },
    {
        name: "Contact",
        path: '/contact'
    },
]

export const programs = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        image: require('../src/images/general-medicine-feature.png'),
        title: "General Medicine - ALLOPATHY",
        info: "Elevate your health with cutting-edge allopathic solutions tailored for comprehensive general medicine care.",
        path: "/programs/111"
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        image: require('../src/images/1347276.png'),
        title: "HOMOEOPATHY",
        info: "Experience the holistic healing of homoeopathy, where personalized remedies unlock your body's natural potential for well-being.",
        path: "/programs/222"
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        image: require('../src/images/Ayurveda-Transparent-PNG.png'),
        title: "AYURVEDA",
        info: "Immerse yourself in the ancient wisdom of Ayurveda, where personalized wellness journeys restore balance and vitality.",
        path: "/programs/333"
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        image: require('../src/images/pregnant-woman-contact-page.png'),
        title: "GYNAE",
        info: "Empower your feminine health with expert gynecological services that prioritize your comfort and well-being.",
        path: "/programs/444"
    },
    {
        id: 5,
        icon: <SiOpenaigym/>,
        image: require('../src/images/779139.png'),
        title: "SURGERY",
        info: "Trust in precision and expertise with surgical solutions designed to optimize your health and recovery",
        path: "/programs/111"
    },
    {
        id: 6,
        icon: <SiOpenaigym/>,
        image: require('../src/images/1.png'),
        title: "ORTHO",
        info: "Unleash the power of mobility with orthopedic services dedicated to restoring and enhancing your musculoskeletal well-being.",
        path: "/programs/222"
    },
    {
        id: 7,
        icon: <SiOpenaigym/>,
        image: require('../src/images/doctor-clipart-eye-doctor-2.png'),
        title: "EYE",
        info: "See a brighter tomorrow with specialized eye care that focuses on preserving and improving your vision.",
        path: "/programs/333"
    },
    {
        id: 8,
        icon: <SiOpenaigym/>,
        image: require('../src/images/Dental-Health-PNG-Photo.png'),
        title: "DENTAL",
        info: "Achieve a radiant smile and optimal oral health through comprehensive dental services tailored to your unique needs.",
        path: "/programs/444"
    },
    {
        id: 9,
        icon: <SiOpenaigym/>,
        image: require('../src/images/Physiotherapy.png'),
        title: "PHYSIOTHERAPY",
        info: "Revitalize your body's strength and flexibility with personalized physiotherapy services, guiding you towards a pain-free and active lifestyle.",
        path: "/programs/444"
    },
]

export const values = [
    {
        id: 1,
        icon: <TbDiamondFilled/>,
        image: require('../src/images/general-medicine-feature.png'),
        title: "Patient-Centric Approach:",
        desc: "We prioritize patients by tailoring our services to meet individual needs, fostering a compassionate and supportive healthcare environment."
    },
    {
        id: 2,
        icon: <TbDiamondFilled/>,
        image: require('../src/images/general-medicine-feature.png'),
        title: "Innovation in Healthcare:",
        desc: "Embracing cutting-edge technologies, we strive to stay ahead in providing innovative and efficient medical solutions for a healthier tomorrow."
    },
    {
        id: 3,
        icon: <TbDiamondFilled/>,
        image: require('../src/images/general-medicine-feature.png'),
        title: "Transparency and Trust:",
        desc: "We believe in open communication and transparency, building a foundation of trust between our medical professionals and patients for a seamless healthcare experience."
    },
    {
        id: 4,
        icon: <TbDiamondFilled/>,
        image: require('../src/images/general-medicine-feature.png'),
        title: "Community Well-being:",
        desc: "Dedicated to enhancing community health, we actively engage in initiatives and programs that contribute to the well-being of the communities we serve."
    },
]

export const faqs = [
    {
        id: 1,
        question: "How can I schedule an appointment?",
        answer: "Our online appointment scheduling system makes it convenient for you to book your visit. Simply visit our website or call our helpline."
    },
    {
        id: 2,
        question: "What medical services do you offer?",
        answer: "We provide a wide range of medical services, including preventive care, diagnostics, specialized treatments, and personalized wellness programs."
    },
    {
        id: 3,
        question: "How do I access my medical records online?",
        answer: "Our secure patient portal allows you to access and manage your medical records easily. Log in with your credentials to view test results, prescriptions, and more."
    },
    {
        id: 4,
        question: "What are the operating hours of the clinic?",
        answer: "The clinic is open during regular business hours from 8 A.M to 11 P.M everyday. Please note any variations, such as extended hours on certain days or closures for holidays."
    },
    {
        id: 5,
        question: "Do you accept insurance plans?",
        answer: "We work with various insurance providers to ensure our services are accessible to a broad range of patients. Check our website or contact us for insurance details."
    },
    {
        id: 6,
        question: "What safety measures are in place during in-person visits?",
        answer: "Your safety is our priority. We strictly adhere to hygiene protocols and social distancing measures to create a safe environment for in-person consultations."
    },
]

export const testimonials = [
    {
        id: 1,
        name: "Mansoor Alam",
        quote: "Exceptional care and attention to detail. The medical professionals here genuinely care about the well-being of their patients. Highly recommended!",
        job: "Patient",
        avatar: require("./images/R (2).jpeg")
    },
    {
        id: 2,
        name: "Supriya Chakraborty",
        quote: "Efficient and prompt service. The online appointment system is a game-changer for busy individuals. Thank you for making healthcare accessible.",
        job: "Patient",
        avatar: require("./images/391ee12077ba9cabd10e476d8b8c022b.jpg")
    },
    {
        id: 3,
        name: "Md Iftekhar Warsi",
        quote: "I appreciate the transparency in communication. They take the time to explain procedures and answer all queries, creating a trusting patient-doctor relationship.",
        job: "Patient",
        avatar: require("./images/R (2).jpeg")
    },
    {
        id: 4,
        name: "Prakash Kumar",
        quote: "I’ve found a healthcare partner for life. The holistic approach and community initiatives make this medical service stand out. Grateful for their commitment to well-being.",
        job: "Patient",
        avatar: require("./images/R (2).jpeg")
    },
    {
        id: 5,
        name: "Zaynab Parveen",
        quote: "A seamless experience from booking an appointment to follow-up care. The team here truly understands the value of time and health. Thank you for your professionalism.",
        job: "Patient",
        avatar: require("./images/391ee12077ba9cabd10e476d8b8c022b.jpg")
    },
]


const Trainer2 = require('./images/Trainer2.jpeg')
const Trainer4 = require('./images/Trainer4.jpeg')

export const trainers = [

    {
        id: 1,
        image: Trainer2,
        name: 'Dr. Bhaswati Das',
        des: 'Gynaecologist',
        job: 'MBBS, DGO, MD, DNB(G&O), Gynae Onco Surgery',
    },
    {
        id: 2,
        image: Trainer4,
        name: 'Dr. Mohammad Ali',
        des: 'Homoeopathy',
        job: 'MD (HOM), WBUHS, Ex-House Physician-D.N De H.M.C & Hospital, Ex-Asst Professor B.V.H.M.C & Hospital, Associated with Projects under (MoHFW) (Govt. of India)',
    },
    {
        id: 3,
        image: Trainer4,
        name: 'Dr. SK MD Wasim',
        des: 'Child Specialist',
        job: 'MBBS DCH, Attached with BHAGIRATHI NEOTIA PARK STREET',
    },
    {
        id: 4,
        image: Trainer4,
        name: 'Dr. A Majhari',
        des: 'Child Specialist',
        job: 'MBBS, MD PAEDIATRICS (RESIDENT) Formerly attached with NRS Medical College And Hospital',
    },
    {
        id: 5,
        image: Trainer4,
        name: 'Dr. Asif Ayaz',
        des: 'Surgery',
        job: 'MBBS, MS, FMAS, FIAS, Consultant Oncologist & Iaparoscopic Surgeon,  ASST. PROFESSOR WBMES',
    },
    {
        id: 6,
        image: Trainer4,
        name: 'Dr. Syed Tabish Areeb Rahman',
        des: 'Orthopaedic',
        job: 'MBBS, MS Ortho, Consultant Trauma & Joint Replacement Surgeon',
    },
    {
        id: 7,
        image: Trainer2,
        name: 'Dr. Nausheen Sharqui',
        des: 'Orthopaedic',
        job: 'MBBS, MS ORTHO (LONDON), Consultant Orthopaedic Surgeon',
    },
    {
        id: 8,
        image: Trainer4,
        name: 'Dr. Sarfaraz Ahmed',
        des: 'Orthopaedic',
        job: 'MBBS, D. ORTHO, Consultant (Orthopaedic Surgeon)',
    },
    {
        id: 9,
        image: Trainer4,
        name: 'Dr. Hafiz MD Nasimuddin Ansari',
        des: 'Dental',
        job: 'BDS, MDS, Oral & Maxillofacial Surgery',
    },
    {
        id: 10,
        image: Trainer4,
        name: 'Dr. Mohd. Asad',
        des: 'Dental',
        job: 'BDS, MIDA, CIDSH(LKO), Bchelor of Dental Surgeon, Ex-Consultant Aliganj Dental Clinic (LKO)',
    },
    {
        id: 11,
        image: Trainer4,
        name: 'Dr. Mohammad Muneer Adil',
        des: 'Dental',
        job: 'BDS, Clinical Tuitor in Oral Medicine of Radiology Department, In Gurunanak Institute of Dental Science & Research',
    },
    {
        id: 12,
        image: Trainer4,
        name: 'Prof. Dr. Dawood Khan',
        des: 'Urologist',
        job: 'MBBS, MS, MCh',
    },
    {
        id: 13,
        image: Trainer4,
        name: 'Dr. Shahrukh Ayaz',
        des: 'Dermatology',
        job: 'MBBS(KOL), MD(Skin), Formerly attached with Calcutta National Medical College and Hospital',
    },
    {
        id: 14,
        image: Trainer4,
        name: 'Dr. Nasiruddin',
        des: 'General Medicine',
        job: 'MBBS, MD, DNB, PGDCC, Consultant Physician & Critical Care Spl., Specialist in Cardiology & Endocrinology (Diabetes & Hypothyroidism) Medical Superspeciality Hospital Kolkata, Ex. Consultant BM Birla Heart Hospital',
    },
    {
        id: 15,
        image: Trainer4,
        name: 'Dr. Dilnawaz Ahmed ',
        des: 'Gastroenterologist',
        job: 'MBBS, MD, MRCP, Gastroenterologist, Diabetes, Consultant Family Physician',
    },
    {
        id: 16,
        image: Trainer4,
        name: 'Dr. Aneek Chakraborty',
        des: 'ENT',
        job: 'ENT & HEAD NECK SPECIALIST. MBBS, (Hons.), MS ENT (Hons.) From IPGMER SSKM(PG) Hospital, attached to R.G.Kar Medical College & Hospital',
    },
    {
        id: 17,
        image: Trainer4,
        name: 'Dr. Prof. Haji Mohd. Firoz Alam',
        des: 'Neurologist',
        job: 'MD (MEDICINE), DM (NEUROLOGY), Ex-Prof. of Neurology Tokyo Medical University Hospital, Japan 2007-2010, Ex. Chief Neurologist, Belle Vue Clinic',
    },
    {
        id: 18,
        image: Trainer4,
        name: 'Dr. Khatija Qubra',
        des: 'Eye',
        job: 'MBBS, DOMS (OPHTHALMOLOGY), Cataract Surgery, (Phaco + Laser) Glaucoma, Retina, Pediatric)',
    },
    {
        id: 19,
        image: Trainer4,
        name: 'Dr. Imtiyaz Ahmed',
        des: 'Eye',
        job: 'Consultant Optometrist, State Medical Faculty of WB',
    },
    {
        id: 20,
        image: Trainer4,
        name: 'Dr. Arik Chowdhury',
        des: 'Eye',
        job: 'B. Optm, Optometrist, (Eye Specialist)',
    },
    {
        id: 21,
        image: Trainer4,
        name: 'Dr. MD. Dilshad Ali',
        des: 'General Physician',
        job: 'MBBS (WBUHS) Formerly attached with ESI Hospital, ex. RMO at AMRI Hospital, Dhakuria',
    },
    {
        id: 22,
        image: Trainer4,
        name: 'Dr. Abul Qais',
        des: 'General Physician',
        job: 'Consultant General Physician',
    },
    {
        id: 23,
        image: Trainer4,
        name: 'Dr. Tausif Jawaid',
        des: 'Ayurveda and Hijama',
        job: 'BAMS, Consultant Ayurvedic Physician and Hijama Therapist',
    },
    {
        id: 24,
        image: Trainer4,
        name: 'Dr. Shahjahan',
        des: 'Physiotherapist',
        job: 'BPT, Consultant Yoga & Physiotherapist',
    },
    {
        id: 25,
        image: Trainer4,
        name: 'Dr. Vishwajeet Shaw',
        des: 'Dietician',
        job: 'Nutrition and Dietician',
    },
]