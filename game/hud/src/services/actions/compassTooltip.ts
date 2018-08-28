import { CompassTooltipData } from 'components/CompassTooltip';
import { events } from '@csegames/camelot-unchained';

export function showCompassTooltip(tooltip: CompassTooltipData) {
  events.fire('compass-tooltip--show', tooltip);
}

export function updateCompassTooltip(tooltip: CompassTooltipData) {
  events.fire('compass-tooltip--update', tooltip);
}

export function hideCompassTooltip(id: string) {
  events.fire('compass-tooltip--hide', id);
}
