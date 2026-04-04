export const trackEvent = async (eventType: "WHATSAPP_CLICK" | "CV_DOWNLOAD" | "PAGE_VIEW") => {
  // We only run this on the client side
  if (typeof window === "undefined") return;

  try {
    // Basic device detection
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const device = isMobile ? "MOBILE" : "DESKTOP";
    const path = window.location.pathname;

    // Send the data silently in the background
    await fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ eventType, path, device }),
    });
  } catch (error) {
    // If tracking fails, we just silently ignore it so it doesn't break the user experience
    console.error("Failed to ping analytics");
  }
};