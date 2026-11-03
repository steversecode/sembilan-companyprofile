import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateEstimate, formatStatNumber, validateInquiryForm } from './eventCalculators';

test('calculateEstimate computes correct base and attendee logistics', () => {
  const result = calculateEstimate({
    eventType: 'summit',
    attendees: 500,
    durationDays: 1,
  });

  // Base production for summit = 25000, 500 attendees * 120 = 60000 -> 85000
  assert.equal(result.baseProduction, 25000);
  assert.equal(result.attendeeLogistics, 60000);
  assert.equal(result.addonsCost, 0);
  assert.equal(result.estimatedTotal, 85000);
  assert.equal(result.formattedTotal, '$85,000');
  assert.equal(result.perAttendeeFormatted, '$170');
});

test('calculateEstimate includes addons correctly', () => {
  const result = calculateEstimate({
    eventType: 'gala',
    attendees: 200,
    durationDays: 2,
    hasLiveStreaming: true,
    hasVipHospitality: true,
  });

  assert.equal(result.addonsCost, 7500 + 12000);
  assert.ok(result.estimatedTotal > 0);
  assert.ok(result.formattedTotal.startsWith('$'));
});

test('formatStatNumber formats thousands and millions cleanly', () => {
  assert.equal(formatStatNumber(98000), '98k');
  assert.equal(formatStatNumber(1500), '1.5k');
  assert.equal(formatStatNumber(2400000), '2.4M');
  assert.equal(formatStatNumber(450), '450');
});

test('validateInquiryForm detects missing or invalid fields', () => {
  const invalid = validateInquiryForm({
    fullName: '',
    workEmail: 'invalid-email',
    organization: '',
    eventType: '',
    estimatedAttendees: '250',
    briefSummary: 'short',
  });

  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.fullName);
  assert.ok(invalid.errors.workEmail);
  assert.ok(invalid.errors.organization);
  assert.ok(invalid.errors.eventType);
  assert.ok(invalid.errors.briefSummary);

  const valid = validateInquiryForm({
    fullName: 'Victoria Sterling',
    workEmail: 'v.sterling@apexglobal.com',
    organization: 'Apex Global Enterprises',
    eventType: 'summit',
    estimatedAttendees: '500-1000',
    briefSummary: 'Planning our annual global leadership summit in Chicago for next October.',
  });

  assert.equal(valid.isValid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});
