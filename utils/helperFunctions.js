export function formatDate(dateTimeString) {
  const originalDate = new Date(dateTimeString);
  return originalDate.toLocaleString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

const MAX_SUMMARY_LENGTH = 130;
export const truncateSummary = (summary) => {
  return summary.length > MAX_SUMMARY_LENGTH
    ? summary.substring(0, MAX_SUMMARY_LENGTH) + "..."
    : summary;
};
