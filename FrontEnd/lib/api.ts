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

export function publicMediaUrl(url: string): string {
  if (!url) return url;

  if (url.startsWith("http://backend:8000/media/")) {
    return url.replace(
      "http://backend:8000/media/",
      "https://forooghteb.ir/media/"
    );
  }

  if (url.startsWith("http://127.0.0.1:8000/media/")) {
    return url.replace(
      "http://127.0.0.1:8000/media/",
      "https://forooghteb.ir/media/"
    );
  }

  return url;
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

/* Refreshes the JWT access token once using the stored refresh token.
   Returns the new access token, or null if the session can't be renewed. */
export async function refreshAccessToken(): Promise<string | null> {
  const refreshToken = localStorage.getItem("refresh");
  if (!refreshToken) return null;

  try {
    const data = await fetchJson<{ access?: string }>(
      apiUrl("token/refresh/"),
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refresh: refreshToken }),
      }
    );

    if (data.access) {
      localStorage.setItem("token", data.access);
      return data.access;
    }
    return null;
  } catch {
    return null;
  }
}
