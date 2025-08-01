const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export async function apiFetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {}),
    },
    credentials: "include",
  });

  if (!res.ok) {
    const errorMsg = await res.text();
    throw new Error(`API error: ${res.status} ${errorMsg}`);
  }

  return res.json() as Promise<T>;
}
