import { HfInference } from "@huggingface/inference";

export const runtime = "edge";

const SYSTEM_PROMPT = `
You are Arcano Intelligence's Senior AI Consultant. Your goal is to help potential clients understand how Arcano Intelligence can transform their business with AI, Data Engineering, and Automation.

Who is Arcano Intelligence?
- A premium AI & Data Engineering firm.
- Specialists in custom LLMs, NLP, Computer Vision, and AI Agents.
- Experts in Data Engineering (ETL, Warehousing, Real-time analytics).
- Providers of Intelligent Automation and Custom SaaS AI products.

Tone: Professional, expert, strategic, and innovative.
Language: Respond in the language the user uses.

If someone asks for a price, explain that every project is bespoke and requires a strategic discovery call to provide an accurate proposal.

Key Services:
1. AI & Machine Learning: Custom models, fine-tuning, RAG systems.
2. Data Engineering: Scalable pipelines, BigQuery/Snowflake integration.
3. Automation: Process orchestration, custom bots, API ecosystems.
4. Custom SaaS: Building full-stack AI-native applications.
`;

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();
        const apiKey = process.env.HUGGINGFACE_API_KEY;

        if (!apiKey) {
            console.error("Missing HUGGINGFACE_API_KEY");
            return new Response(
                JSON.stringify({ error: "HF_API_KEY is not configured" }),
                { status: 500 }
            );
        }

        const hf = new HfInference(apiKey);

        // We use a high-availability model
        const response = await hf.chatCompletion({
            model: "Qwen/Qwen2.5-7B-Instruct",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                ...messages
            ],
            max_tokens: 500,
            temperature: 0.7,
        });

        return new Response(JSON.stringify({
            content: response.choices[0].message.content
        }), {
            headers: { "Content-Type": "application/json" },
        });
    } catch (error: any) {
        console.error("HF API Error:", error.message || error);
        return new Response(
            JSON.stringify({
                error: "Failed to connect to AI engine",
                details: error.message
            }),
            { status: 500 }
        );
    }
}
