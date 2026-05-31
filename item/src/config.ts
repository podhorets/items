/**
 * Your WhatsApp number in international format — digits only, no "+", spaces,
 * or leading zeros (country code first).
 *
 * Example: German number 0170 1234567  ->  "491701234567"
 *
 * ⚠️ Replace the placeholder below with your real number.
 */
export const WHATSAPP_NUMBER = "+380987713545";

/** Build a wa.me link with a prefilled German message about an item. */
export function whatsappLink(itemNumber: number, title: string): string {
  const text = `Hallo! Ich interessiere mich für Artikel #${itemNumber} „${title}". Ist er noch verfügbar?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
