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


const Trainer1 = require('./images/Trainer1.jpg')
const Trainer2 = require('./images/Trainer2.jpeg')
const Trainer3 = require('./images/Trainer3.jpg')
const Trainer4 = require('./images/Trainer4.jpeg')

export const trainers = [
    {
        id: 1,
        image: Trainer1,
        name: 'Dr. Ritu Das',
        job: 'Consultant Obstetrician & Gynaecologist, Laparoscopic Surgeon',
    },
    {
        id: 2,
        image: Trainer2,
        name: 'Dr. Bhaswati Das',
        job: 'MBBS, DGO, MD, DNB(G&O), Gynae Onco Surgery',
    },
    {
        id: 3,
        image: Trainer3,
        name: 'Dr. Asif Ayaz',
        job: 'Consultant Orthopaedic Surgeon',
    },
    {
        id: 4,
        image: Trainer2,
        name: 'Dr. Nausheen Sharqui',
        job: 'Consultant Orthopaedic Surgeon',
    },
    {
        id: 5,
        image: Trainer4,
        name: 'Dr. Syed Tabish Areeb Rahman',
        job: 'MBBS, MS Ortho, Consultant Trauma & Joint Replacement Surgeon',
    },
    {
        id: 6,
        image: Trainer4,
        name: 'Dr. Hafiz Md Nasimuddin Ansari',
        job: 'BDS, MDS, Oral & Maxillofacial Surgery',
    },
    {
        id: 7,
        image: Trainer4,
        name: 'Dr. Tarshid Ali Jahangir',
        job: 'Consultant Renal Transplant Surgeon',
    },
    {
        id: 8,
        image: Trainer4,
        name: 'Dr. Dawood Khan',
        job: 'Consultant Urologist',
    },
    {
        id: 9,
        image: Trainer4,
        name: 'Dr. Md Khalid',
        job: 'MD, HOM, Medical Officer',
    },
    {
        id: 10,
        image: Trainer4,
        name: 'Dr. Ehtesham Khan',
        job: 'MD, HOM',
    },
    {
        id: 11,
        image: Trainer4,
        name: 'Dr. Mir Asif Iqbal',
        job: 'Consultant General Physician',
    },
    {
        id: 12,
        image: Trainer4,
        name: 'Dr. Tausif Jawaid',
        job: 'BAMS, Consultant Ayurvedic Physician and Hijama Therapist',
    },
    {
        id: 13,
        image: Trainer4,
        name: 'Dr. Suman Chakraborty',
        job: 'BPT, Consultant Physiotherapist',
    },
    {
        id: 14,
        image: Trainer4,
        name: 'Dr. Abul Qais',
        job: 'Consultant General Physician',
    },
    {
        id: 15,
        image: Trainer4,
        name: 'Dr. Imtiyaz Ahmed',
        job: 'Consultant Optomerist, State Medical Faculty Of WB',
    },
    {
        id: 16,
        image: Trainer2,
        name: 'Dr. Nasreen Khatoon',
        job: 'Consultant Optomerist',
    }
]