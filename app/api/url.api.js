export const shortenUrl = async (url) => {
  try {
    const response = await fetch("/api/shorten", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    });

    if (!response.ok) {
      throw new Error("Failed to shorten URL");
    }

    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};
