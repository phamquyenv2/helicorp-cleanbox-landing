import { useCallback, useEffect, useRef } from 'react';
import { trackEvent } from '../configs/Apis';
import { getSessionId } from '../reducers/AppReducer';

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

      });
    },
    []
  );

  useEffect(() => {
    track('page_view', { eventName: 'landing_page_view' });
  }, [track]);

  return { track, sessionId: sessionId.current };
}
