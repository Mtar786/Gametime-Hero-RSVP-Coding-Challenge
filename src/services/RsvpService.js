"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RsvpService = void 0;
class RsvpService {
    constructor(logger) {
        this.logger = logger;
        this.rsvpMap = new Map();
    }
    addOrUpdateRsvp(player, status) {
        const entry = { player, status };
        this.rsvpMap.set(player.id, entry);
        this.logger.log(`RSVP updated for ${player.name}: ${status}`);
    }
    getConfirmedAttendees() {
        return Array.from(this.rsvpMap.values())
            .filter(entry => entry.status === 'Yes')
            .map(entry => entry.player);
    }
    getRsvpCounts() {
        let confirmed = 0, declined = 0, maybe = 0;
        for (const entry of this.rsvpMap.values()) {
            switch (entry.status) {
                case 'Yes':
                    confirmed++;
                    break;
                case 'No':
                    declined++;
                    break;
                case 'Maybe':
                    maybe++;
                    break;
            }
        }
        return {
            total: this.rsvpMap.size,
            confirmed,
            declined,
            maybe
        };
    }
    getAllEntries() {
        return Array.from(this.rsvpMap.values());
    }
}
exports.RsvpService = RsvpService;
