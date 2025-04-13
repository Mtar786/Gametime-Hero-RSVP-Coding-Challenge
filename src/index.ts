import { RsvpService } from './services/RsvpService';
import { ConsoleLogger } from './utils/logger';
import { Player } from './interfaces/types';

const logger = new ConsoleLogger();
const rsvpService = new RsvpService(logger);

// Sample players
const players: Player[] = [
  { id: '1', name: 'Ali' },
  { id: '2', name: 'Sam' },
  { id: '3', name: 'Riya' },
];

rsvpService.addOrUpdateRsvp(players[0], 'Yes');
rsvpService.addOrUpdateRsvp(players[1], 'No');
rsvpService.addOrUpdateRsvp(players[2], 'Maybe');

console.log('Confirmed:', rsvpService.getConfirmedAttendees());
console.log('Counts:', rsvpService.getRsvpCounts());
