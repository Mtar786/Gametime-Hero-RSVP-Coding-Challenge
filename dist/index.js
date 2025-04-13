"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RsvpService_1 = require("./services/RsvpService");
const logger_1 = require("./utils/logger");
const logger = new logger_1.ConsoleLogger();
const rsvpService = new RsvpService_1.RsvpService(logger);
// Sample players
const players = [
    { id: '1', name: 'Ali' },
    { id: '2', name: 'Sam' },
    { id: '3', name: 'Riya' },
];
rsvpService.addOrUpdateRsvp(players[0], 'Yes');
rsvpService.addOrUpdateRsvp(players[1], 'No');
rsvpService.addOrUpdateRsvp(players[2], 'Maybe');
console.log('Confirmed:', rsvpService.getConfirmedAttendees());
console.log('Counts:', rsvpService.getRsvpCounts());
