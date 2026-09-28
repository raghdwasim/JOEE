const ACADEMY = {
    name: "Elite Swim Academy",
    location: "Air Force Club, Heliopolis (Masr El Gedida), Cairo, Egypt",
    phone: "+20 100 000 0000",
    whatsapp: "+20 100 000 0000",
    mapsUrl: "https://maps.google.com/?q=Air+Force+Club+Heliopolis+Cairo",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    tiktok: "https://tiktok.com"
};

const QUICK_TRUST = [
    {
        icon: "fa-graduation-cap",
        title: "Physical Education Background",
        desc: "Led by Faculty of Physical Education, Helwan University graduates."
    },
    {
        icon: "fa-medal",
        title: "Championship Experience",
        desc: "Republic Championship experience in swimming and rowing."
    },
    {
        icon: "fa-life-ring",
        title: "International Lifeguard Certified",
        desc: "Strict safety protocols and internationally certified rescue staff."
    },
    {
        icon: "fa-person-swimming",
        title: "Professional Swimming Training",
        desc: "Structured curricula for kids, teenagers, adults, and competitors."
    }
];

const PROGRAMS = [
    {
        id: "kids",
        title: "Kids Swimming",
        desc: "For children learning swimming fundamentals and water confidence in a safe, fun environment.",
        suitable: "Ages 4 - 12",
        image: "https://placehold.co/600x400/062A49/21C7D9?text=Kids+Swimming",
        icon: "fa-child-reaching",
        link: "kids.html"
    },
    {
        id: "beginners",
        title: "Beginners",
        desc: "For people starting from zero, focusing on body position, floating, and basic breathing.",
        suitable: "All Ages",
        image: "https://placehold.co/600x400/062A49/21C7D9?text=Beginner+Swimming",
        icon: "fa-water",
        link: "programs.html"
    },
    {
        id: "intermediate",
        title: "Intermediate",
        desc: "For swimmers who already know the basics and want to improve technique, endurance, and stroke development.",
        suitable: "Intermediate Level",
        image: "https://placehold.co/600x400/062A49/21C7D9?text=Intermediate+Swimming",
        icon: "fa-person-swimming",
        link: "programs.html"
    },
    {
        id: "advanced",
        title: "Advanced",
        desc: "For swimmers looking to improve speed, advanced stroke technique, and athletic conditioning.",
        suitable: "Advanced Level",
        image: "https://placehold.co/600x400/062A49/21C7D9?text=Advanced+Swimming",
        icon: "fa-gauge-high",
        link: "programs.html"
    },
    {
        id: "adults",
        title: "Adults",
        desc: "Swimming lessons for adults of different levels, from overcoming water fear to fitness training.",
        suitable: "Ages 16+",
        image: "https://placehold.co/600x400/062A49/21C7D9?text=Adult+Swimming",
        icon: "fa-user-graduate",
        link: "adults.html"
    },
    {
        id: "private",
        title: "Private Training",
        desc: "One-on-one personalized coaching tailored to individual goals and flexible schedules.",
        suitable: "All Ages",
        image: "https://placehold.co/600x400/062A49/21C7D9?text=Private+Training",
        icon: "fa-user-tie",
        link: "private-training.html"
    },
    {
        id: "competitive",
        title: "Competitive Swimming",
        desc: "Advanced training squads for swimmers interested in competitions, race prep, and performance.",
        suitable: "Competitive Swimmers",
        image: "https://placehold.co/600x400/062A49/21C7D9?text=Competitive+Swimming",
        icon: "fa-trophy",
        link: "competitive.html"
    },
    {
        id: "safety",
        title: "Water Safety",
        desc: "Essential water confidence, survival skills, and safety education for all stages.",
        suitable: "All Ages",
        image: "https://placehold.co/600x400/062A49/21C7D9?text=Water+Safety",
        icon: "fa-shield-halved",
        link: "programs.html"
    }
];

const SWIMMING_LEVELS = [
    {
        level: "LEVEL 01",
        title: "Water Confidence",
        desc: "Comfort in water, floating, breathing, and basic safety adaptation."
    },
    {
        level: "LEVEL 02",
        title: "Beginner",
        desc: "Body position, basic strokes, rhythmic breathing, and water coordination."
    },
    {
        level: "LEVEL 03",
        title: "Intermediate",
        desc: "Technique refinement, endurance building, and multi-stroke development."
    },
    {
        level: "LEVEL 04",
        title: "Advanced",
        desc: "Speed enhancement, advanced stroke biomechanics, and dryland conditioning."
    },
    {
        level: "LEVEL 05",
        title: "Competitive",
        desc: "Peak performance, race start/turn mastery, and competitive meet preparation."
    }
];

const PACKAGES = [
    {
        id: "starter",
        name: "STARTER",
        price: "1,200",
        sessions: "8 Sessions / Month",
        featured: false,
        features: [
            "Group training sessions",
            "Initial level assessment",
            "Air Force Club pool access",
            "Standard progress report"
        ]
    },
    {
        id: "popular",
        name: "POPULAR",
        price: "1,800",
        sessions: "12 Sessions / Month",
        featured: true,
        badge: "Most Popular",
        features: [
            "Group training sessions",
            "Comprehensive progress tracking",
            "Priority scheduling slots",
            "Water safety workshop included",
            "Air Force Club pool access"
        ]
    },
    {
        id: "premium",
        name: "PREMIUM",
        price: "2,400",
        sessions: "16 Sessions / Month",
        featured: false,
        features: [
            "Advanced group & squad training",
            "Detailed performance tracking",
            "Priority scheduling",
            "Complimentary guest trial pass",
            "Air Force Club pool access"
        ]
    },
    {
        id: "private",
        name: "PRIVATE",
        price: "350",
        sessions: "Per Session (1-on-1)",
        featured: false,
        features: [
            "One-on-one personalized coaching",
            "Customized training plan",
            "Flexible schedule coordination",
            "Rapid skill acceleration",
            "Air Force Club pool access"
        ]
    }
];

const OFFERS = [
    {
        title: "NEW STUDENT TRIAL",
        desc: "Book your first introductory trial session at a special promotional rate."
    },
    {
        title: "BACK TO SWIMMING",
        desc: "Special reactivation discounts for returning previous customers and new families."
    },
    {
        title: "SIBLING OFFER",
        desc: "Special package discounts when registering two or more siblings in our academy."
    },
    {
        title: "3-MONTH PACKAGE",
        desc: "Commit to quarterly training and receive preferred monthly rates and priority booking."
    },
    {
        title: "LIMITED TRIAL SLOTS",
        desc: "Daily limited trial openings to ensure low coach-to-swimmer ratios and maximum safety."
    }
];

const COACHES = [
    {
        name: "Coach [Founder Name]",
        title: "Founder & Head Coach",
        qualifications: "Graduate of Faculty of Physical Education – Helwan University. Republic Championship Experience in Swimming & Rowing. International Lifeguard Certified.",
        specialty: "Head Coach & Program Director",
        image: "https://placehold.co/400x450/062A49/FFFFFF?text=Head+Coach"
    },
    {
        name: "Coach [Placeholder 1]",
        title: "Professional Swimming Coach",
        qualifications: "Certified Swimming Coach with extensive experience coaching kids and adult developmental levels.",
        specialty: "Kids Water Confidence & Beginners",
        image: "https://placehold.co/400x450/087EA4/FFFFFF?text=Coach+Two"
    },
    {
        name: "Coach [Placeholder 2]",
        title: "Advanced & Competitive Coach",
        qualifications: "Certified Professional Coach specialized in stroke mechanics and endurance conditioning.",
        specialty: "Intermediate & Competitive Squads",
        image: "https://placehold.co/400x450/21C7D9/0B192C?text=Coach+Three"
    }
];

const TESTIMONIALS = [
    {
        text: "Elite Swim Academy has been fantastic for my children. The coaches are extremely professional, patient, and focus heavily on water safety at the Air Force Club pool.",
        author: "[Parent Name]",
        program: "[Kids Swimming Program]"
    },
    {
        text: "As an adult who started from zero, I was nervous about learning to swim. Coach [Founder Name] and the team made the process comfortable and structured. Highly recommended!",
        author: "[Student Name]",
        program: "[Adult Swimming Classes]"
    },
    {
        text: "The structured levels and professional discipline at Elite Swim Academy in Heliopolis helped my son progress rapidly into competitive training.",
        author: "[Parent Name]",
        program: "[Competitive Swimming Program]"
    }
];

const FAQ = [
    {
        question: "What ages do you accept?",
        answer: "We accept children starting from 4 years old, as well as teenagers, adults, and seniors of all age categories."
    },
    {
        question: "Do beginners need previous experience?",
        answer: "No previous experience is needed whatsoever. Our Level 01 and beginner programs are specifically designed for those starting from zero."
    },
    {
        question: "How is the swimming level determined?",
        answer: "Our head coach conducts an initial in-water assessment during the trial session to correctly evaluate the swimmer's capability and assign them to the appropriate level."
    },
    {
        question: "Do you offer private lessons?",
        answer: "Yes, we offer one-on-one personalized private coaching with flexible schedule coordination."
    },
    {
        question: "Do you offer adult swimming lessons?",
        answer: "Yes, we have dedicated adult swimming classes catering to all levels, from fear overcoming to advanced fitness."
    },
    {
        question: "How many sessions are included?",
        answer: "Our standard monthly packages include 8, 12, or 16 sessions depending on the package chosen, or per-session booking for private training."
    },
    {
        question: "Where is the academy located?",
        answer: "We operate inside the premium swimming pool facilities of the Air Force Club in Heliopolis (Masr El Gedida), Cairo, Egypt."
    },
    {
        question: "How can I book a trial?",
        answer: "You can easily book a trial session by filling out our online booking form on the contact page or by messaging us directly via WhatsApp."
    },
    {
        question: "What should the student bring?",
        answer: "Students should bring standard swimming attire (swimsuit/swim trunks, goggles, swimming cap for long hair, and a towel)."
    },
    {
        question: "Do you offer competitive training?",
        answer: "Yes, we provide advanced training squads for swimmers interested in competitive racing, conditioning, and race preparation."
    }
];

const GALLERY = [
    {
        category: "training",
        title: "Professional Training",
        desc: "Coaching technique at Air Force Club",
        image: "https://placehold.co/600x450/062A49/21C7D9?text=Training+Session"
    },
    {
        category: "pool",
        title: "Pool Facility",
        desc: "Air Force Club Heliopolis pool",
        image: "https://placehold.co/600x450/087EA4/FFFFFF?text=Pool+Facility"
    },
    {
        category: "kids",
        title: "Kids Swimming",
        desc: "Water confidence for young swimmers",
        image: "https://placehold.co/600x450/21C7D9/0B192C?text=Kids+Swimming"
    },
    {
        category: "adults",
        title: "Adult Classes",
        desc: "Adult stroke development",
        image: "https://placehold.co/600x450/062A49/FFFFFF?text=Adult+Classes"
    },
    {
        category: "competitions",
        title: "Competitive Squads",
        desc: "Advanced racing conditioning",
        image: "https://placehold.co/600x450/087EA4/21C7D9?text=Competitive+Squads"
    },
    {
        category: "training",
        title: "Technique Correction",
        desc: "One-on-one instructor guidance",
        image: "https://placehold.co/600x450/062A49/21C7D9?text=Technique+Correction"
    }
];

// Helper to generate WhatsApp links dynamically
function getWhatsAppLink(message) {
    const encoded = encodeURIComponent(message);
    // Clean phone number for wa.me link
    const cleanNum = ACADEMY.whatsapp.replace(/[^0-9]/g, '');
    return `https://wa.me/${cleanNum}?text=${encoded}`;
}