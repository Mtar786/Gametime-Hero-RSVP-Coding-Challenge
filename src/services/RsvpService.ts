import { Player, RsvpEntry, RsvpStatus } from '../interfaces/types';
import { Logger } from '../utils/logger';

export class RsvpService {
  private rsvpMap: Map<string, RsvpEntry> = new Map();

  constructor(private logger: Logger) {}

  addOrUpdateRsvp(player: Player, status: RsvpStatus): void {
    const entry: RsvpEntry = { player, status };
    this.rsvpMap.set(player.id, entry);
    this.logger.log(`RSVP updated for ${player.name}: ${status}`);
  }

  getConfirmedAttendees(): Player[] {
    return Array.from(this.rsvpMap.values())
      .filter(entry => entry.status === 'Yes')
      .map(entry => entry.player);
  }

  getRsvpCounts(): {
    total: number;
    confirmed: number;
    declined: number;
    maybe: number;
  } {
    let confirmed = 0, declined = 0, maybe = 0;

    for (const entry of this.rsvpMap.values()) {
      switch (entry.status) {
        case 'Yes': confirmed++; break;
        case 'No': declined++; break;
        case 'Maybe': maybe++; break;
      }
    }

    return {
      total: this.rsvpMap.size,
      confirmed,
      declined,
      maybe
    };
  }

  getAllEntries(): RsvpEntry[] {
    return Array.from(this.rsvpMap.values());
  }
}
