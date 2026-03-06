import OpenAI from "openai";

export default async function handler(req: any, res: any) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const openai = new OpenAI({
            apiKey: process.env.VITE_OPENAI_API,
        });

        const { answers, leadInfo } = req.body;

        const originalQuestions = [
            { id: "q1", text: "Do you have a predictable way to generate high-quality leads every week?" },
            { id: "q2", text: "Do you have a marketing system that generates a measurable Return on Investment (ROI)?" },
            { id: "q3", text: "Do you know your exact Cost Per Qualified Lead?" },
            { id: "q4", text: "Do you have a process to automatically filter out unqualified leads before they reach you?" },
            { id: "q5", text: "Do you actively advertise to your ideal customers in your most profitable markets?" },
            { id: "q6", text: "Do you have a system to retarget prospects who show interest but don't reach out?" },
            { id: "q7", text: "Do you have any lead magnets? (free tools or resources that let you collect contact information)" },
            { id: "q8", text: "Is your website built specifically to convert visitors into leads?" },
            { id: "q9", text: "Does your website prominently feature your work portfolio, customer reviews, and clear calls-to-action?" },
            { id: "q10", text: "Do you have a Google Business Profile with active reviews?" },
            { id: "q11", text: "Does your business show up on the first page of local online search results?" },
            { id: "q12", text: "Can a customer easily book a call with you on your website?" },
            { id: "q13", text: "Do you use a central system (like a CRM) to track every lead from start to finish?" },
            { id: "q14", text: "Can you see your entire sales pipeline and the status of every prospect at a glance?" },
            { id: "q15", text: "Is your sales process systemized? (Or does it all depend on you?)" },
            { id: "q16", text: "Does every new lead get an instant follow-up (text or email)?" },
            { id: "q17", text: "Do you have an automated follow-up system for unresponsive leads?" },
            { id: "q18", text: "Are your long-term prospects automatically getting educational emails from you for 6 to 12 months?" },
            { id: "q19", text: "Do you use an automated system to remind you to check in on a prospect's land or financing status?" },
            { id: "q20", text: "Do you know for certain which of your marketing efforts brings in the best clients?" },
            { id: "q21", text: "Can you easily track your lead-to-appointment and appointment-to-sale conversion rates?" }
        ];

        let yesList: string[] = [];
        let noList: string[] = [];

        originalQuestions.forEach(q => {
            if (answers && answers[q.id] === 'yes') {
                yesList.push(q.text);
            } else if (answers && answers[q.id] === 'no') {
                noList.push(q.text);
            }
        });

        const prompt = `
You are a highly experienced, high-level marketing consultant who specializes exclusively in scaling custom home building businesses. 
You are analyzing a proprietary marketing assessment taken by a custom home builder named ${leadInfo?.name || 'there'} from the company ${leadInfo?.businessName || 'their business'}.

Here are the marketing systems they currently HAVE IN PLACE (Yes answers):
${yesList.length > 0 ? yesList.map(item => "- " + item).join('\n') : "None."}

Here are the critical marketing systems they DO NOT HAVE IN PLACE (No answers):
${noList.length > 0 ? noList.map(item => "- " + item).join('\n') : "None."}

Your job is to provide a customized, incredibly human, and natural-sounding analysis of their current situation. 

CRITICAL INSTRUCTIONS FOR TONE AND FLOW:
1. Speak directly to ${leadInfo?.name || 'the builder'}. Sound like an expert sitting across the table from them having a real conversation over coffee. No corporate jargon, no robotic listicles. 
2. Do NOT just read their answers back to them in a choppy list format. Synthesize the data into a cohesive, big-picture narrative about the actual health of their business. 
3. Start by validating where they are currently at based on their 'Yes' answers (if any). Acknowledge that they have laid some groundwork.
4. Smoothly pivot into the real, underlying bottleneck in their business based on the overarching theme of their 'No' answers. Rather than listing every single 'No' answer, diagnose the root cause (e.g. "Because you don't have X and Y, you are likely the bottleneck in your sales process, relying entirely on unpredictable referrals...").
5. Make it feel highly personalized and urgent, but encouraging. 
6. Naturally transition into the Call to Action. Tell them exactly why they need to book a strategy call with our team right now (e.g., to plug these specific leaks, build the infrastructure they are missing, and finally scale predictably). 

Make the transition to the pitch feel smooth and irresistible because it directly solves the pain points you just diagnosed. Keep it to 3-4 powerful, well-flowing paragraphs.

Return ONLY the analysis text. Format it with clean markdown for readability (e.g. bolding key points). Do not output markdown codeblock backticks (e.g. \`\`\`markdown).
`;

        const response = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
                { role: "system", content: "You are a direct, insightful marketing consultant for custom home builders." },
                { role: "user", content: prompt }
            ],
            temperature: 0.7,
        });

        const analysis = response.choices[0].message.content;

        return res.status(200).json({ analysis });

    } catch (error: any) {
        console.error('Error generating analysis:', error);
        return res.status(500).json({
            error: 'Failed to generate analysis',
            details: error?.message || String(error)
        });
    }
}
