export const pushEvent = (
  event: string,
  data: Record<string, unknown> = {}
) => {
  window.dataLayer = window.dataLayer || [];

  window.dataLayer.push({
    event,
    ...data,
  });
};