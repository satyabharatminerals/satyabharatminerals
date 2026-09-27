export const companyInfo = {
    name: "Satya Bharat Minerals",
    tagline: "Lime For Everyday Life",
    phone: ["9250905094", "9810605294", "011-26365294"],
    email: "satyabharatm@gmail.com",
    address: {
        line1: "HR-146/7, First Floor, Opp. DDA LIG Flats",
        line2: "Pul Prahladpur, New Delhi 110044",
    },
    siteOffice: {
        line1: "K. no. 4201/1418, Prem Nagar,",
        line2: "Khinwsar , Nagaur ,",
        line3: "Rajasthan (RJ)",
    }
};

export const products = [
    {
        id: "quick-lime-powder",
        name: "Quick Lime Powder",
        description:
            "Finely ground calcium oxide (CaO) produced by calcining high-grade limestone. Used across steel, construction, and chemical industries for its high reactivity and purity.",
        image:
            "/images/products/quick-lime-powder.png",
        specs: [
            { label: "Chemical Formula", value: "CaO" },
            { label: "Form", value: "Fine Powder" },
            { label: "Purity", value: "85-95% CaO" },
            { label: "Color", value: "White to off-white" },
        ],
        applications: ["Steel making", "Soil stabilization", "Chemical processes", "Water treatment"],
    },
    {
        id: "calcined-lime-lumps",
        name: "Calcined Lime Lumps",
        description:
            "Calcined limestone lumps produced in vertical shaft kilns at controlled temperatures. Ideal for processes requiring consistent quality and reactivity.",
        image:
            "/images/products/calcined-lime-lumps.jpg",
        specs: [
            { label: "Chemical Formula", value: "CaO" },
            { label: "Form", value: "Lumps (10-50mm)" },
            { label: "Purity", value: "85-92% CaO" },
            { label: "Color", value: "White to off-white" },
        ],
        applications: ["Steel making", "Cement", "Flue gas desulfurization", "Mining"],
    },
    {
        id: "hydrated-slaked-lime",
        name: "Hydrated (Slaked) Lime",
        description:
            "Calcium hydroxide produced by carefully hydrating quicklime. A versatile product used in water treatment, construction, and chemical manufacturing.",
        image:
            "/images/products/hydrated-slaked-lime.jpg",
        specs: [
            { label: "Chemical Formula", value: "Ca(OH)\u2082" },
            { label: "Form", value: "Fine Powder" },
            { label: "Purity", value: "90-96% Ca(OH)\u2082" },
            { label: "Color", value: "White" },
        ],
        applications: ["Water treatment", "Masonry mortars", "Chemical processes", "Sugar refining"],
    },
    {
        id: "limestone-natural-mineral",
        name: "Limestone - Natural Mineral",
        description:
            "Naturally occurring calcium carbonate extracted from high-grade deposits. A foundational raw material used in construction, agriculture, and industrial processes.",
        image:
            "/images/products/limestone-natural-mineral.jpg",
        specs: [
            { label: "Chemical Formula", value: "CaCO\u2083" },
            { label: "Form", value: "Lumps / Grit" },
            { label: "Purity", value: "95%+ CaCO\u2083" },
            { label: "Color", value: "Grey to white" },
        ],
        applications: ["Cement manufacturing", "Glass making", "Road construction", "Animal feed"],
    },
];

export const industrialApplications = [
    {
        title: "Steel Making",
        description:
            "Converting iron ore to pig iron; as flux agents in primary furnace operations, and refractory sustainability.",
        image:
            "/images/applications/steel-making.jpg",
        icon: "Factory",
    },
    {
        title: "Flue Gas Desulfurization",
        description:
            "Emissions control in the power generation industry to reduce sulfur dioxide output.",
        image:
            "/images/applications/flue-gas.jpg",
        icon: "Wind",
    },
    {
        title: "Road Construction",
        description:
            "Soil stabilization, soil modification, and as an asphalt additive for durable infrastructure.",
        image:
            "/images/applications/road-construction.jpg",
        icon: "Construction",
    },
    {
        title: "Masonry & Mortars",
        description:
            "Type S hydrated lime for mortars, stuccos, and finishing plaster in construction.",
        image:
            "/images/applications/masonry-mortars.jpg",
        icon: "Building2",
    },
    {
        title: "Water Treatment",
        description:
            "Drinking water treatment, municipal and industrial waste water treatment, and mining water treatment.",
        image:
            "/images/applications/water-treatment.jpg",
        icon: "Droplets",
    },
    {
        title: "Chemical Processes",
        description:
            "Production of consumer goods such as soap, glue, sugar cubes, leather, and more.",
        image:
            "/images/applications/chemical-processes.jpg",
        icon: "FlaskConical",
    },
    {
        title: "Mining",
        description:
            "Refining metal ores and non-ferrous metals such as copper, zinc, nickel, gold, silver, and aluminium.",
        image:
            "/images/applications/mining.jpg",
        icon: "Mountain",
    },
    {
        title: "Paper, Pulp & PPC",
        description:
            "Used as filler in paper to improve optical properties and preserve our forestry resources.",
        image:
            "/images/applications/paper-pulp.jpg",
        icon: "FileText",
    },
    {
        title: "Glass Making",
        description:
            "Fiberglass manufacturing and soda lime glass manufacturing for diverse industrial uses.",
        image:
            "/images/applications/glass-making.jpg",
        icon: "GlassWater",
    },
];

export const coreValues = [
    {
        title: "Deep Environmental Respect",
        description:
            "We prioritize sustainable practices across all our manufacturing and processing operations.",
        icon: "Leaf",
    },
    {
        title: "Transparency",
        description:
            "Open and honest internal and external relationships built on trust and accountability.",
        icon: "Eye",
    },
    {
        title: "Responsibility",
        description:
            "Committed to our stakeholders, employees, customers, and the communities we serve.",
        icon: "ShieldCheck",
    },
    {
        title: "Credibility",
        description:
            "Authoritativeness and trust earned through decades of consistent quality in the lime industry.",
        icon: "Award",
    },
    {
        title: "Skills Development",
        description:
            "Continuing training and education to develop our team's skills and stay ahead of industry trends.",
        icon: "GraduationCap",
    },
];

export const productionSteps = [
    {
        step: "01",
        title: "CaCO\u2083 - Limestone",
        description:
            "Calcium carbonate comprises more than 4% of the earth's crust. As limestone, it is a biogenic rock, more compacted than chalk, and serves as our primary raw material.",
    },
    {
        step: "02",
        title: "CaO - Calcination",
        description:
            "Calcium oxide (CaO), commonly known as quicklime or burnt lime, is produced by heating limestone to high temperatures in kilns, creating a white, caustic, alkaline crystalline solid.",
    },
    {
        step: "03",
        title: "Grinding",
        description:
            "In the grinding process, the quicklime is ground to a fine powder, producing ground quick lime for various industrial applications.",
    },
    {
        step: "04",
        title: "Ca(OH)\u2082 - Hydration",
        description:
            "Slaked lime is made by adding water to quicklime. The calcium oxide reacts with water to produce calcium hydroxide (Ca(OH)\u2082), the final end product.",
    },
];

export const testimonials = [
    {
        name: "Shubham",
        role: "Steel Industry Client",
        text: "Satya Bharat Minerals has been our trusted supplier for years. Their quicklime quality is consistently excellent, and deliveries are always on time.",
    },
    {
        name: "Shivam",
        role: "Construction Contractor",
        text: "The hydrated lime from Satya Bharat Minerals is top-notch. It has significantly improved the quality of our masonry work across multiple projects.",
    },
    {
        name: "Shekhar",
        role: "Water Treatment Plant Manager",
        text: "Reliable quality, competitive pricing, and excellent customer support. Satya Bharat Minerals is our go-to source for all lime product requirements.",
    },
];
