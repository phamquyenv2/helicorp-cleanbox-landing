import { useCallback, useEffect, useRef } from 'react';
import { trackEvent } from '../services/api';
import { getSessionId } from '../store';

/**
 * Tracking hook — sends events to backend (best-effort, fire & forget).
 * Scroll milestones are only sent once per session.
 */
export function useTracking() {
  const sessionId = useRef(getSessionId());
  const sentMilestones = useRef(new Set<string>());

  const track = useCallback(
    (eventType: string, extra?: {
      eventName?: string;
      section?: string;
      productId?: string;
      metadata?: Record<string, unknown>;
    }) => {
      const key = `${eventType}_${extra?.eventName || ''}`;
      // Deduplicate scroll milestones
      if (eventType.startsWith('scroll_') && sentMilestones.current.has(key)) return;
      if (eventType.startsWith('scroll_')) sentMilestones.current.add(key);

      trackEvent({
        sessionId: sessionId.current,
        eventType,
        eventName: extra?.eventName,
        pageUrl: window.location.pathname,
        section: extra?.section,
        productId: extra?.productId,
        metadata: extra?.metadata ? JSON.stringify(extra.metadata) : undefined,
      }).catch(() => {
        // Silently fail — tracking is best-effort
      });
    },
    []
  );

  // Send page_view on mount
  useEffect(() => {
    track('page_view', { eventName: 'landing_page_view' });
  }, [track]);

  return { track, sessionId: sessionId.current };
}
