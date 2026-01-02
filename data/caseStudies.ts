export interface CaseStudy {
    id: string;
    slug: string;
    title: string;
    builderName: string;
    location: string;
    results: {
        label: string;
        value: string;
    }[];
    imageUrl: string;
    videoUrl?: string;
    content: {
        overview: string;
        challenge: string;
        strategy: {
            title: string;
            description: string;
        }[];
        outcome: string;
    };
    testimonial?: {
        quote: string;
        author: string;
    };
}

export const caseStudies: CaseStudy[] = [
    {
        id: 'homestead',
        slug: 'homestead',
        title: 'Closed 2 Homes Resulting in $500k In Profits Off $8k Of Ad Spend',
        builderName: 'Homestead Home Builders',
        location: 'Denver, CO',
        results: [
            { label: 'Profit Generated', value: '$500k' },
            { label: 'Ad Spend', value: '$8k' },
            { label: 'Homes Closed', value: '2' }
        ],
        imageUrl: '/images/homestead-poster.jpg',
        videoUrl: 'https://storage.googleapis.com/msgsndr/HllUVzV8V6VFH4nUuq4W/media/68a889645f2e6e7e3e8ad82a.mp4',
        content: {
            overview: "Herm runs Homestead Home Builders in Denver. When we first spoke, he was honest: he’d been burned before. Big fees, noisy dashboards, and “leads” that never showed up. Referrals kept the lights on, but they also kept him guessing. He didn’t want another pitch—he wanted steady, qualified conversations he could see on his calendar and trace back to a clear system.",
            challenge: "Wasting time on folks who were just price-shopping. Leads going cold, no-shows, and paying for activity without knowing if it produced revenue.",
            strategy: [
                {
                    title: "Message & Creative that sounded like Herm",
                    description: "We sat with his photos, his process, and the way he explains quality to real clients. Then we wrote simple ads that mirrored that voice. Effect: Fewer random inquiries. More people who were actually ready to talk about a real project."
                },
                {
                    title: "A short, honest pre-qualification step",
                    description: "We added a small form that asked the basics Herm needs to protect his time: land status, budget range, and timeline. If the fit looked good, the next screen offered his calendar."
                },
                {
                    title: "Speed-to-lead without the chaos",
                    description: "Our team called new inquiries right away, confirmed details, answered simple process questions, and placed qualified people directly on Herm’s calendar."
                }
            ],
            outcome: "2 custom homes closed from this system resulting in ~$500,000 in profits from those two projects. All from just $8,000 in ad spend. These weren’t “more leads.” They were better conversations—people who respected his process, showed up on time, and were ready to plan a build."
        }
    },
    {
        id: 'open-prairie',
        slug: 'open-prairie',
        title: 'Closed $2.8M in Projects from Just $7K in Ad Spend',
        builderName: 'Open Prairie Custom Homes',
        location: 'Dallas, TX',
        results: [
            { label: 'Contract Value', value: '$2.8M' },
            { label: 'Ad Spend', value: '$7k' },
            { label: 'Top Project', value: '$1.5M' }
        ],
        imageUrl: '/images/open-prairie-poster.jpg',
        videoUrl: 'https://storage.googleapis.com/msgsndr/HllUVzV8V6VFH4nUuq4W/media/686e860d9334981695b5ec1d.mp4',
        content: {
            overview: "Dan, the founder of Open Prairie Custom Homes in North Texas, isn’t new to high-end home building. He’s built stunning, estate-level custom homes for years — but he was stuck relying on referrals. He knew there were more $1M+ clients out there, he just didn’t have a predictable system to reach them.",
            challenge: "He needed qualified, design-focused homeowners ready to build now — and a brand experience that matched the caliber of his craftsmanship, not tire-kickers or lowball inquiries.",
            strategy: [
                {
                    title: "Laser-Targeted Meta Ad Campaigns",
                    description: "Focused on affluent areas around DFW. We positioned Dan as the go-to builder for modern, luxury homes on acreage lots."
                },
                {
                    title: "High-Intent Funnel",
                    description: "Filtered out budget-shoppers and surfaced prospects with land, $1M+ budgets, and realistic timelines."
                },
                {
                    title: "Internal Dialer Team",
                    description: "We reached out to every lead, confirmed their details, and booked them directly onto Dan’s calendar with full context."
                }
            ],
            outcome: "With just $7,000 in ad spend, Open Prairie Custom Homes closed $2.8M in signed projects, including two multi-million dollar homes from cold traffic. Now he has a pipeline of similar-quality leads continuing to book."
        },
        testimonial: {
            quote: "I just signed a $1.5M deal last week... and a $1.3M one’s on the way.",
            author: "Dan, Owner"
        }
    },
    {
        id: 'schwanz',
        slug: 'schwanz-custom',
        title: 'Filled Build Slots & Closed $680K in Projects Off $6K Spend',
        builderName: 'Schwanz Custom Homes',
        location: 'Wisconsin',
        results: [
            { label: 'Revenue', value: '$680k' },
            { label: 'Ad Spend', value: '$6k' },
            { label: 'ROI', value: '113x' }
        ],
        imageUrl: '/images/schwanz-poster.jpg',
        videoUrl: 'https://storage.googleapis.com/msgsndr/HllUVzV8V6VFH4nUuq4W/media/6866c7145143a2f20901e957.mp4',
        content: {
            overview: "For years, Schwanz Custom Homes was booked out 12-18 months in advance with word-of-mouth alone. But as leads slowed, they had open calendar space for the first time. They reached out to BuilderProject not to grow fast, but to get back to normal.",
            challenge: "The goal wasn’t just more leads. It was to deliver serious, build-ready homeowners who would restore momentum and re-fill their once overflowing schedule.",
            strategy: [
                {
                    title: "High-Volume Meta Ad Campaigns",
                    description: "Ads that spoke directly to Wisconsin homeowners considering a build — highlighting what made Schwanz different and trustworthy in a market full of cookie-cutter options."
                },
                {
                    title: "Qualification Survey",
                    description: "A custom funnel that filtered out tire-kickers and ensured only land-ready, budget-appropriate homeowners got through."
                },
                {
                    title: "Internal Appointment Setters",
                    description: "Our team handled the follow-up and calls, personally qualifying every lead and booking real consultations right onto the calendar."
                }
            ],
            outcome: "Within 90 days: 2 custom home contracts signed ($280K and $400K) and the build calendar refilled for the rest of the year. $680K in revenue generated off of just $6K in ad spend."
        }
    },
    {
        id: 'eagle-rock',
        slug: 'eagle-rock',
        title: 'Turned $5.5K Ad Spend into $3.2M Pipeline',
        builderName: 'Eagle Rock Custom Homes',
        location: 'Nationwide / PA & GA',
        results: [
            { label: 'Pipeline', value: '$3.2M' },
            { label: 'Ad Spend', value: '$5.5k' },
            { label: 'Leads', value: '1,300+' }
        ],
        imageUrl: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
        content: {
            overview: "Eagle Rock Custom Homes provides premium custom home material packages nationwide. Despite a solid offering, founder Bill was doing all the sales himself and struggling with inconsistent lead flow.",
            challenge: "Bill needed a way to generate consistent, qualified leads and remove himself from the manual sales grind to scale the business.",
            strategy: [
                {
                    title: "National Ad Campaigns",
                    description: "Ads targeting homeowners interested in building on their land, promoting Eagle Rock’s material packages, design flexibility, and cost savings."
                },
                {
                    title: "Proprietary Funnel",
                    description: "Filtering for budget, timeline, location, land status, and interest in design packages to ensure only warm, viable leads reached the sales calendar."
                },
                {
                    title: "CRM Integration & Newsletter",
                    description: "Captured every interaction to enable long-term nurture sequences that re-activate colder leads."
                }
            ],
            outcome: "In just 60 days, Bill’s calendar booked out completely, forcing him to hire a sales rep. 2 custom homes closed in Pennsylvania and $3.2M+ in pipeline revenue generated from an ad spend of only $5,500."
        }
    }
];
