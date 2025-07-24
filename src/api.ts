export async function callOpenAIGenerate(prompt: string): Promise<string> {
  const response = await fetch(
    "https://us-central1-fir-dlqkr.cloudfunctions.net/api/api/generate",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    }
  );
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "API 호출 실패");
  }
  const data = await response.json();
  return data.result;
} 