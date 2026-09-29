export const companyInfo = {
    name: "Satya Bharat Minerals",
    tagline: "Quick Lime and Hydrated Lime Manufacturer in India",
    phone: ["+91-9250905094", "+91-9810605294", "+91-11-26365294"],
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

export interface ProductDetail {
    id: string;
    slug: string;
    name: string;
    h1Title?: string;
    tagline: string;
    metaTitle: string;
    metaDescription: string;
    targetKeywords: string[];
    description: string;
    image: string;
    specs: { label: string; value: string }[];
    chemicalAnalysis: { parameter: string; value: string; method?: string }[];
    physicalProperties: { property: string; specification: string }[];
    applications: string[];
    packaging: string[];
    faqs: { q: string; a: string }[];
}

export const products: ProductDetail[] = [
    {
        id: "quick-lime-powder",
        slug: "quick-lime-powder",
        name: "Quick Lime Powder",
        h1Title: "Quick Lime Powder Manufacturer and Supplier in India",
        tagline: "High-Reactivity Calcium Oxide (CaO) Powder for Industrial Applications",
        metaTitle: "Quick Lime Powder Manufacturer and Supplier in India | High Calcium CaO",
        metaDescription: "ISO 9001:2015 certified quick lime powder manufacturer and supplier in Rajasthan, India. High calcium CaO powder (85-95% purity) for steel, AAC blocks, soil stabilization and effluent treatment.",
        targetKeywords: [
            "Quick Lime Powder Manufacturer",
            "Quick Lime Powder Supplier",
            "Quick Lime Manufacturer",
            "CaO Powder Manufacturer",
            "Quick Lime Manufacturer in Rajasthan",
            "High Calcium Quick Lime Powder"
        ],
        description:
            "Satya Bharat Minerals is a leading quick lime powder manufacturer and bulk supplier in India. Produced by calcining selected high-calcium Rajasthan limestone in modern vertical shaft kilns and pulverizing it to precision fineness (100 to 300 mesh), our quick lime powder delivers 85% to 95% active CaO purity. Highly reactive and consistent, our CaO powder is engineered for core industrial applications including primary steel making, autoclaved aerated concrete (AAC) blocks, soil stabilization, effluent and acid water neutralization, and chemical synthesis.",
        image:
            "/images/products/quick-lime-powder.png",
        specs: [
            { label: "Chemical Formula", value: "CaO" },
            { label: "Available Lime (CaO)", value: "85% - 95%" },
            { label: "Form", value: "Fine Micronized Powder" },
            { label: "Mesh Size", value: "100 - 300 Mesh (Customizable)" },
            { label: "Reactivity Rate", value: "High Slaking Reactivity (>40°C in 30 sec)" },
            { label: "Color", value: "Super White to Off-White" },
        ],
        chemicalAnalysis: [
            { parameter: "Available Lime (as CaO)", value: "85.0% - 95.0%", method: "IS 1514" },
            { parameter: "Total Calcium (as CaO)", value: "90.0% - 96.0%", method: "IS 1514" },
            { parameter: "Magnesium Oxide (MgO)", value: "< 1.5%", method: "IS 1514" },
            { parameter: "Silica (SiO₂)", value: "< 1.0%", method: "IS 1514" },
            { parameter: "Alumina and Iron Oxide (Al₂O₃ + Fe₂O₃)", value: "< 0.5%", method: "IS 1514" },
            { parameter: "Loss on Ignition (LOI)", value: "< 3.0%", method: "ASTM C25" },
            { parameter: "Acid Insoluble Matter", value: "< 1.0%", method: "IS 1514" },
        ],
        physicalProperties: [
            { property: "Physical Appearance", specification: "Dry, ultra-fine white powder" },
            { property: "Fineness (Passing 200 Mesh)", specification: "95% - 98% Passing" },
            { property: "Fineness (Passing 300 Mesh)", specification: "85% - 92% Passing (Special Grades)" },
            { property: "Bulk Density", specification: "0.85 - 1.05 g/cm³" },
            { property: "Slaking Temperature Rise", specification: "Reaches > 60°C within 2 - 3 minutes" },
            { property: "Odour", specification: "Odourless" },
        ],
        applications: [
            "Basic Oxygen Furnace (BOF) and Electric Arc Furnace (EAF) Steel Making",
            "Autoclaved Aerated Concrete (AAC) Block Manufacturing",
            "Soil Stabilization and Road Sub-Base Strengthening",
            "Acid Effluent and Industrial Wastewater Neutralization",
            "Precipitated Calcium Carbonate (PCC) Production",
            "Mining Flotation and Gold/Copper Hydrometallurgical Extraction"
        ],
        packaging: [
            "50 kg HDPE / PP bags with moisture-proof polyethylene inner liner",
            "1000 kg (1 MT) and 1250 kg Jumbo bulk bags with bottom discharge spout",
            "Bulk pneumatic tankers for high-volume automated plant silos"
        ],
        faqs: [
            {
                q: "What makes Satya Bharat Minerals a leading quick lime powder manufacturer in India?",
                a: "Satya Bharat Minerals operates captive vertical shaft kilns situated right on the renowned high-calcium limestone belt of Nagaur, Rajasthan. We maintain stringent ISO 9001:2015 quality control, offering consistent 85-95% active CaO purity, customizable mesh fineness (100 to 300 mesh), and pan-India dispatch logistics with guaranteed delivery timelines."
            },
            {
                q: "What is the difference between Quick Lime Powder and Hydrated Lime Powder?",
                a: "Quick Lime Powder is Calcium Oxide (CaO), an anhydrous, highly exothermic material produced by calcining limestone. It reacts violently with water releasing high heat. Hydrated Lime is Calcium Hydroxide (Ca(OH)₂), created by pre-hydrating quick lime with controlled water, making it chemically stable and non-reactive with ambient moisture."
            },
            {
                q: "What packaging options and minimum order quantities (MOQ) do you offer?",
                a: "We provide 50 kg HDPE bags with moisture-proof liners, 1 MT / 1.25 MT jumbo bags, and bulk tanker dispatches. Our standard Minimum Order Quantity (MOQ) is 15-20 metric tonnes (full truckload) across all industrial regions in India."
            }
        ]
    },
    {
        id: "calcined-lime-lumps",
        slug: "calcined-quick-lime-lumps",
        name: "Calcined Quick Lime Lumps",
        h1Title: "Quick Lime Lumps Manufacturer and Supplier in India",
        tagline: "High-Calcium Calcined Quicklime Lumps (10-50mm) for Steel and Heavy Industry",
        metaTitle: "Quick Lime Lumps Manufacturer and Supplier in India | High Calcium Lime",
        metaDescription: "Leading quick lime lumps manufacturer and supplier in Rajasthan, India. 85-92% CaO calcined quicklime lumps (10-50mm) for steel mills, cement, paper pulp and FGD plants.",
        targetKeywords: [
            "Quick Lime Lumps Manufacturer",
            "Quick Lime Lumps Supplier",
            "High Calcium Quick Lime",
            "Quick Lime Manufacturer in India",
            "Quick Lime Manufacturer in Rajasthan",
            "High Calcium Lime Manufacturer"
        ],
        description:
            "Satya Bharat Minerals is a trusted quick lime lumps manufacturer and high-calcium lime supplier based in Khinwsar, Nagaur, Rajasthan. We burn premium crystalline Rajasthan limestone in advanced vertical shaft kilns to manufacture hard-burned and soft-burned quick lime lumps sized from 10mm to 50mm. Delivering 85% to 92% CaO purity with low silica and minimal unburnt core, our quicklime lumps serve as an essential dephosphorization and desulfurization flux in primary steel mills, cement clinker processing, paper & pulp digestion, and flue gas desulfurization (FGD) systems.",
        image:
            "/images/products/calcined-lime-lumps.jpg",
        specs: [
            { label: "Chemical Formula", value: "CaO" },
            { label: "Active CaO Purity", value: "85% - 92%" },
            { label: "Lump Size", value: "10mm - 50mm / 20mm - 80mm" },
            { label: "Form", value: "Calcined Porous Lumps" },
            { label: "Reactivity", value: "Fast Reacting (>40°C in 2 min)" },
            { label: "Color", value: "Lustrous Off-White to Greyish-White" },
        ],
        chemicalAnalysis: [
            { parameter: "Available Lime (as CaO)", value: "85.0% - 92.0%", method: "IS 1514" },
            { parameter: "Total CaO", value: "90.0% - 94.0%", method: "IS 1514" },
            { parameter: "Magnesium Oxide (MgO)", value: "< 1.5%", method: "IS 1514" },
            { parameter: "Silica (SiO₂)", value: "< 1.2%", method: "IS 1514" },
            { parameter: "Ferric Oxide and Alumina", value: "< 0.6%", method: "IS 1514" },
            { parameter: "Loss on Ignition (LOI)", value: "< 2.5%", method: "ASTM C25" },
            { parameter: "Acid Insoluble", value: "< 1.0%", method: "IS 1514" },
        ],
        physicalProperties: [
            { property: "Graded Lump Sizing", specification: "10 - 50 mm (Uniform screening)" },
            { property: "Oversize / Undersize Tolerance", specification: "< 5% cumulative" },
            { property: "Reactivity / Slaking Rate", specification: "Fast Slaking: T60 reached in < 3 minutes" },
            { property: "Porosity", specification: "High micro-porosity for rapid slag dissolution" },
            { property: "Unburnt Core", specification: "< 3.0%" },
        ],
        applications: [
            "Steel Melting Shops (BOF, EAF, Ladle Refining Furnace)",
            "Flue Gas Desulfurization (FGD) in Thermal Power Plants",
            "Cement Manufacturing and Raw Material Clinker Enhancement",
            "Non-Ferrous Metallurgical Refining (Copper, Zinc, Lead)",
            "Paper Pulp Digestion and Kraft Chemical Recovery",
            "Calcium Carbide and Refractory Production"
        ],
        packaging: [
            "Heavy-duty 1000 kg (1 MT) and 1250 kg Jumbo bulk bags with lifting loops",
            "Direct loose tipper / dumper truckload dispatch for nearby steel plants",
            "50 kg HDPE woven sacks for medium industrial users"
        ],
        faqs: [
            {
                q: "Why are Nagaur, Rajasthan quick lime lumps preferred across India?",
                a: "Nagaur and Khinwsar in Rajasthan sit on one of the purest high-calcium geological limestone deposits in the world. Quick lime lumps manufactured here exhibit exceptional CaO content (up to 92%+), exceptionally low silica (<1.2%), and minimal magnesium, making them the premier choice for demanding steel manufacturing and metallurgical fluxing."
            },
            {
                q: "What lump sizes do you supply?",
                a: "Our standard screening yields 10mm to 50mm lumps, which is the industry standard for steelmaking hoppers and lime hydrators. We can also provide custom gradations such as 20mm to 80mm or crushed 5mm to 20mm grit upon client request."
            }
        ]
    },
    {
        id: "hydrated-slaked-lime",
        slug: "hydrated-lime",
        name: "Hydrated (Slaked) Lime",
        h1Title: "Hydrated Lime Manufacturer and Supplier in India",
        tagline: "High-Purity Calcium Hydroxide [Ca(OH)₂] for Water Treatment and Construction",
        metaTitle: "Hydrated Lime Manufacturer and Supplier in India | Slaked Lime Powder",
        metaDescription: "ISO 9001:2015 certified hydrated lime manufacturer and supplier in India. 90-96% pure calcium hydroxide [Ca(OH)₂] for water treatment, sugar refining, masonry and chemical processing.",
        targetKeywords: [
            "Hydrated Lime Manufacturer",
            "Hydrated Lime Manufacturer in India",
            "Hydrated Lime Supplier",
            "Industrial Lime Manufacturer",
            "Lime Supplier in India",
            "Lime Manufacturer in Rajasthan"
        ],
        description:
            "Satya Bharat Minerals is a premier hydrated lime manufacturer and industrial supplier in India, manufacturing ultra-pure slaked lime (Calcium Hydroxide / Ca(OH)₂). Produced by combining carefully calcined quicklime with pure water under controlled hydration conditions, our hydrated lime yields 90% to 96% Ca(OH)₂ purity. With ultra-fine particle classification (passing 99% through 200 mesh), it is exceptionally soluble and free of grit, making it the industry benchmark for municipal drinking water purification, industrial wastewater pH adjustment, masonry mortar, sugar clarification, and flue gas acid gas scrubbing.",
        image:
            "/images/products/hydrated-slaked-lime.jpg",
        specs: [
            { label: "Chemical Formula", value: "Ca(OH)₂" },
            { label: "Purity [Ca(OH)₂]", value: "90% - 96%" },
            { label: "Available Lime as CaO", value: "> 68%" },
            { label: "Form", value: "Dry, Free-Flowing Fine Powder" },
            { label: "Fineness", value: "99.5% Passing 200 Mesh" },
            { label: "Color", value: "Brilliant Pure White" },
        ],
        chemicalAnalysis: [
            { parameter: "Calcium Hydroxide [Ca(OH)₂]", value: "90.0% - 96.0%", method: "IS 1514" },
            { parameter: "Available Lime (as CaO equivalent)", value: "> 68.0%", method: "IS 1514" },
            { parameter: "Magnesium Oxide (MgO)", value: "< 1.0%", method: "IS 1514" },
            { parameter: "Silica (SiO₂)", value: "< 0.8%", method: "IS 1514" },
            { parameter: "Iron and Aluminium Oxides", value: "< 0.4%", method: "IS 1514" },
            { parameter: "Free Moisture", value: "< 1.0%", method: "IS 1514" },
            { parameter: "Acid Insoluble", value: "< 0.5%", method: "IS 1514" },
        ],
        physicalProperties: [
            { property: "Physical State", specification: "Dry, microscopic crystalline white powder" },
            { property: "Fineness (Passing 200 mesh)", specification: "Min 99.0% passing" },
            { property: "Fineness (Passing 300 mesh)", specification: "Min 95.0% passing" },
            { property: "Bulk Density", specification: "0.45 - 0.58 g/cm³" },
            { property: "pH of Saturated Solution", specification: "12.4 @ 25°C" },
            { property: "Whiteness Index", specification: "> 95%" },
        ],
        applications: [
            "Municipal Drinking Water Treatment and Softening",
            "Industrial Effluent Neutralization and Heavy Metal Precipitation",
            "Sugar Cane Juice Clarification and Refining",
            "Masonry Mortars, Stucco, Plaster and White Washing",
            "Road Asphalt Modification and Subgrade Soil Stabilization",
            "Flue Gas Acid Gas (SO₂, HCl, HF) Neutralization",
            "Bleaching Powder and Chemical Intermediate Synthesis"
        ],
        packaging: [
            "25 kg and 50 kg HDPE / Paper bags with inner moisture-barrier liners",
            "1000 kg Jumbo bulk bags with dust-free discharge spouts",
            "Bulk road tankers for automated silo transfer"
        ],
        faqs: [
            {
                q: "What purity levels does Satya Bharat Minerals guarantee for Hydrated Lime?",
                a: "We manufacture high-calcium hydrated lime with 90% to 96% Ca(OH)₂ content. Every batch is tested in our in-house laboratory in Khinwsar, Nagaur according to IS 1514 standards, and supplied with a certified Certificate of Analysis (COA)."
            },
            {
                q: "Why is hydrated lime widely used in water treatment and sugar refining?",
                a: "Hydrated lime is alkaline, highly soluble, and cost-effective. In water treatment, it elevates pH, precipitates dissolved heavy metals, and flocculates suspended solids. In sugar refining, it clarifies raw sugarcane juice by neutralizing organic acids and precipitating impurities."
            }
        ]
    },
    {
        id: "calcium-oxide",
        slug: "calcium-oxide",
        name: "Industrial Calcium Oxide (CaO)",
        h1Title: "Industrial Calcium Oxide (CaO) Manufacturer in India",
        tagline: "High-Purity Calcined Calcium Oxide (CaO) Lumps and Powder for Chemical Industries",
        metaTitle: "Calcium Oxide Manufacturer and Supplier India | Industrial CaO Lime",
        metaDescription: "Premier Calcium Oxide (CaO) manufacturer and supplier in India. High purity calcined calcium oxide lumps and powder for metallurgy, chemical manufacturing, and environmental applications.",
        targetKeywords: [
            "Calcium Oxide Manufacturer",
            "Calcium Oxide Supplier India",
            "CaO Manufacturer in India",
            "CaO Powder Manufacturer",
            "Industrial Lime Manufacturer",
            "High Calcium Lime Manufacturer"
        ],
        description:
            "Satya Bharat Minerals is a specialized Calcium Oxide (CaO) manufacturer and supplier in India. Commonly known as burnt lime, quicklime, or calx, our Calcium Oxide is synthesized through thermal decomposition (calcination) of high-grade calcium carbonate (CaCO₃) in automated vertical shaft kilns in Nagaur, Rajasthan. We supply industrial-grade CaO with up to 95% chemical purity in lump, crushed grit, and micronized powder formats, catering to metallurgical smelters, chemical synthesis plants, environmental desulfurization units, and glass factories nationwide.",
        image:
            "/images/products/quick-lime-powder.png",
        specs: [
            { label: "Chemical Formula", value: "CaO" },
            { label: "Molecular Weight", value: "56.08 g/mol" },
            { label: "Purity (CaO)", value: "85% - 95%" },
            { label: "Available Forms", value: "Lumps (10-50mm), Grit, Powder (100-300 mesh)" },
            { label: "Reactivity", value: "Exothermic with rapid slaking curve" },
            { label: "Grade", value: "Industrial and Chemical Grade" },
        ],
        chemicalAnalysis: [
            { parameter: "Calcium Oxide (CaO)", value: "85.0% - 95.0%", method: "ASTM C25" },
            { parameter: "Magnesium Oxide (MgO)", value: "< 1.5%", method: "IS 1514" },
            { parameter: "Silicon Dioxide (SiO₂)", value: "< 1.0%", method: "IS 1514" },
            { parameter: "Iron (Fe₂O₃)", value: "< 0.3%", method: "IS 1514" },
            { parameter: "Aluminium (Al₂O₃)", value: "< 0.4%", method: "IS 1514" },
            { parameter: "Loss on Ignition (LOI)", value: "< 2.5%", method: "IS 1514" },
        ],
        physicalProperties: [
            { property: "Appearance", specification: "White to light grayish solid or powder" },
            { property: "Melting Point", specification: "2,613 °C (4,735 °F)" },
            { property: "Boiling Point", specification: "2,850 °C (5,160 °F)" },
            { property: "Solubility", specification: "Reacts vigorously with water to form Ca(OH)₂" },
            { property: "Safety Classification", specification: "Alkaline / Corrosive (Class 8 packaging compliant)" },
        ],
        applications: [
            "Primary Metallurgy and Steel Refining Flux",
            "Calcium Carbide (CaC₂) and Acetylene Gas Production",
            "Precipitated Silica and Silicate Chemical Processing",
            "Soda-Lime and Specialty Glass Manufacturing",
            "Flue Gas Desulfurization (Dry and Wet FGD Scrubbers)",
            "Hazardous Industrial Waste Neutralization"
        ],
        packaging: [
            "50 kg moisture-barrier laminated bags",
            "1000 kg / 1250 kg UV-stabilized heavy duty Jumbo bags",
            "Hermetically sealed dry bulk road tankers"
        ],
        faqs: [
            {
                q: "What industries require high-purity Calcium Oxide (CaO)?",
                a: "Calcium oxide is essential in primary steelmaking (slag conditioning and dephosphorization), glass manufacturing (fluxing silica), chemical synthesis (calcium carbide, chlorinated lime), paper and pulp (kraft recovery cycle), and environmental flue gas scrubbing."
            },
            {
                q: "How should Calcium Oxide (CaO) be stored and handled?",
                a: "Because CaO reacts exothermically with ambient moisture and carbon dioxide to hydrate and carbonize, it must be stored in dry, covered warehouses in moisture-barrier bags or sealed silos. Protective PPE (gloves, dust masks, goggles) is required when handling."
            }
        ]
    },
    {
        id: "limestone-natural-mineral",
        slug: "limestone-natural-mineral",
        name: "Limestone - Natural Mineral",
        h1Title: "Natural Limestone Manufacturer and Supplier in India",
        tagline: "High-Grade Calcium Carbonate (CaCO₃) Lumps and Grit from Rajasthan Quarries",
        metaTitle: "Natural Limestone Manufacturer and Supplier in India | High CaCO3",
        metaDescription: "High-grade natural limestone (CaCO3 95%+) supplier in Rajasthan, India. Mined in Nagaur for cement manufacturing, glass making, road construction, and agriculture.",
        targetKeywords: [
            "Limestone Supplier in India",
            "Lime Manufacturer in Rajasthan",
            "Industrial Lime Manufacturer",
            "Natural Limestone Supplier"
        ],
        description:
            "High-grade natural limestone (Calcium Carbonate / CaCO₃) sourced directly from Rajasthan's premier high-calcium geological belt in Nagaur. With 95%+ CaCO₃ purity, consistent crystalline texture, and low silica content, our mined limestone serves as a foundational raw material for cement clinker manufacturing, glass manufacturing, road aggregate, agricultural soil pH remediation, and animal feed mineral supplements.",
        image:
            "/images/products/limestone-natural-mineral.jpg",
        specs: [
            { label: "Chemical Formula", value: "CaCO₃" },
            { label: "Purity (CaCO₃)", value: "95%+ CaCO₃" },
            { label: "Form", value: "Mined Lumps / Crushed Grit / Aggregates" },
            { label: "Color", value: "Grey to White Crystalline" },
            { label: "Origin", value: "Nagaur, Rajasthan, India" },
        ],
        chemicalAnalysis: [
            { parameter: "Calcium Carbonate (CaCO₃)", value: "> 95.0%", method: "IS 1514" },
            { parameter: "Calcium Oxide (CaO)", value: "> 52.0%", method: "IS 1514" },
            { parameter: "Magnesium Oxide (MgO)", value: "< 1.5%", method: "IS 1514" },
            { parameter: "Silica (SiO₂)", value: "< 1.5%", method: "IS 1514" },
        ],
        physicalProperties: [
            { property: "Physical State", specification: "Dense crystalline natural rock" },
            { property: "Sizes Available", specification: "10-40mm, 40-80mm, 0-6mm grit, or boulder size" },
            { property: "Hardness (Mohs Scale)", specification: "3.0" },
        ],
        applications: [
            "Cement Manufacturing and Raw Material Clinker",
            "Glass Making Raw Batch Mix",
            "Road Sub-base Construction and Railway Ballast",
            "Agricultural Soil Liming and Soil Conditioning",
            "Poultry Grit and Mineral Feed Supplement"
        ],
        packaging: [
            "Open dumper truckloads / tippers (loose bulk)",
            "1000 kg Jumbo bulk bags",
            "50 kg HDPE sacks"
        ],
        faqs: [
            {
                q: "Where is your limestone quarried?",
                a: "Our limestone is sourced directly from quarries in Khinwsar, Nagaur district, Rajasthan — renowned across India for containing the highest calcium content and lowest silica impurity levels."
            }
        ]
    }
];

export function getProductBySlug(slug: string): ProductDetail | undefined {
    return products.find(
        (p) => p.slug === slug || p.id === slug
    );
}

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
        title: "Masonry and Mortars",
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
        title: "Paper, Pulp and PPC",
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
