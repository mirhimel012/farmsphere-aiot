
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function apiRequest(endpoint, options = {}) {
  if (!API_BASE_URL) {
    throw new Error("API base URL is not configured.");
  }

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(
        result.message || "Something went wrong with the API request."
      );
    }

    return result;
  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error(
        "Unable to connect to the FarmSphere backend."
      );
    }

    throw error;
  }
}
