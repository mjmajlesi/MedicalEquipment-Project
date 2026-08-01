const serverApiBaseUrl = `${
  process.env.BACKEND_INTERNAL_URL ?? "http://127.0.0.1:8000"
}/api/v1`;

const browserApiBaseUrl =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "/backend-api";

export const API_BASE_URL =
  typeof window === "undefined"
    ? serverApiBaseUrl
    : browserApiBaseUrl;

export function apiUrl(path: string): string {
  return `${API_BASE_URL}/${path.replace(/^\/+/, "")}`;
}

export async function fetchJson<T>(
  input: string,
  init?: RequestInit
): Promise<T> {
  const response = await fetch(input, init);
  const contentType = response.headers.get("content-type") ?? "";

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  if (!contentType.includes("application/json")) {
    throw new Error(
      `API returned ${contentType || "an unknown content type"} instead of JSON`
    );
  }

  return response.json() as Promise<T>;
}
