import getMetaData from "metadata-scraper";
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};



Deno.serve(async (req) => {
 
  if (req.method === 'OPTIONS') {
    return new Response("ok", { headers: corsHeaders })
  }

  try {
      const requestJson = await req.json();
    const url = requestJson.url; 

    if (!url) {
      throw new Error("URL parameter is required.");
    }

    const metadata = await getMetaData(url);

    return new Response(JSON.stringify({metadata}), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
})