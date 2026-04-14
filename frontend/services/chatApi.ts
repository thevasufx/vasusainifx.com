export async function sendChatMessage(message: string): Promise<string> {
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });

  const data = (await response.json().catch(() => null)) as
    | { reply?: string; error?: string }
    | null;

  if (!response.ok) {
    throw new Error(data?.error || `Request failed (${response.status})`);
  }

  return data?.reply || "";
}

