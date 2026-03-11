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
    landingPageDescription?: string;
}

export const caseStudies: CaseStudy[] = [
    {
        id: 'homestead',
        slug: 'homestead',
        title: 'Generated $2.5M In Revenue Off $8k Of Ad Spend',
        builderName: 'Herman Boonstra',
        location: '',
        results: [
            { label: 'Revenue', value: '$2.5M' },
            { label: 'Ad Spend', value: '$8k' },
            { label: 'Homes Closed', value: '2' }
        ],
        imageUrl: '/images/homestead-poster.jpg',
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
        },
        landingPageDescription: "Hired a sales rep and added over $5M in closed projects within 7 months of working with BuilderProject."
    },
    {
        id: 'schwanz',
        slug: 'schwanz-custom',
        title: 'Filled Build Slots & Generated $680K in Revenue Off $6K Spend',
        builderName: 'Becki Schwanz',
        location: '',
        results: [
            { label: 'Revenue', value: '$680k' },
            { label: 'Ad Spend', value: '$6k' },
            { label: 'ROI', value: '113x' }
        ],
        imageUrl: '/images/schwanz-poster.jpg',
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
        },
        landingPageDescription: "Filled their entire yearly build schedule for the first time in over 5 years after installing our growth system."
    },
    {
        id: 'eagle-rock',
        slug: 'eagle-rock',
        title: 'Generated $3.2M Revenue from Just $5.5K Ad Spend',
        builderName: 'Bill Huetmaker',
        location: '',
        results: [
            { label: 'Revenue', value: '$3.2M' },
            { label: 'Ad Spend', value: '$5.5k' },
            { label: 'Leads', value: '1,300+' }
        ],
        imageUrl: '/images/eagle-rock-update.png',
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
        },
        landingPageDescription: "Built a complete lead and sales process from scratch and closed $3.2M in new projects within 6 months."
    }
];
