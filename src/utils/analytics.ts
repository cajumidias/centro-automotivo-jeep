import type { TrackingEventType } from '../types';

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Dispara eventos de mensuração customizados preparados para Google Tag Manager,
 * Google Analytics 4 e Google Ads, sem inventar IDs fictícios.
 */
export function trackEvent(
  eventName: TrackingEventType,
  params: Record<string, unknown> = {}
): void {
  const payload = {
    event: eventName,
    timestamp: new Date().toISOString(),
    ...params
  };

  // Se o Google Tag Manager / dataLayer estiver inicializado
  if (typeof window !== 'undefined' && Array.isArray(window.dataLayer)) {
    window.dataLayer.push(payload);
  }

  // Se gtag estiver disponível
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }

  // Log discreto para homologação em ambiente de desenvolvimento
  if (import.meta.env.DEV) {
    console.debug(`[Analytics Event] ${eventName}:`, payload);
  }
}
