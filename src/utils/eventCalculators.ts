export interface EstimateParams {
  eventType: 'summit' | 'retreat' | 'activation' | 'gala' | 'expo';
  attendees: number;
  durationDays: number;
  hasLiveStreaming?: boolean;
  hasVipHospitality?: boolean;
  hasBespokeStaging?: boolean;
}

export interface EstimateResult {
  baseProduction: number;
  attendeeLogistics: number;
  addonsCost: number;
  estimatedTotal: number;
  formattedTotal: string;
  perAttendeeFormatted: string;
}

export const BASE_COSTS: Record<string, number> = {
  summit: 25000,
  retreat: 18000,
  activation: 30000,
  gala: 22000,
  expo: 35000,
};

export const PER_ATTENDEE_RATE: Record<string, number> = {
  summit: 120,
  retreat: 350,
  activation: 95,
  gala: 240,
  expo: 85,
};

export function calculateEstimate(params: EstimateParams): EstimateResult {
  const baseRate = BASE_COSTS[params.eventType] || 20000;
  const perAttendee = PER_ATTENDEE_RATE[params.eventType] || 100;
  
  const daysMultiplier = Math.max(1, params.durationDays || 1);
  const baseProduction = baseRate * (1 + (daysMultiplier - 1) * 0.4);
  const attendeeLogistics = (params.attendees || 0) * perAttendee;

  let addonsCost = 0;
  if (params.hasLiveStreaming) addonsCost += 7500;
  if (params.hasVipHospitality) addonsCost += 12000;
  if (params.hasBespokeStaging) addonsCost += 15000;

  const estimatedTotal = Math.round(baseProduction + attendeeLogistics + addonsCost);
  const perAttendeeCost = params.attendees > 0 ? Math.round(estimatedTotal / params.attendees) : 0;

  return {
    baseProduction: Math.round(baseProduction),
    attendeeLogistics: Math.round(attendeeLogistics),
    addonsCost,
    estimatedTotal,
    formattedTotal: `$${estimatedTotal.toLocaleString()}`,
    perAttendeeFormatted: `$${perAttendeeCost.toLocaleString()}`,
  };
}

export function formatStatNumber(val: number): string {
  if (val >= 1000000) {
    return `${(val / 1000000).toFixed(1).replace(/\.0$/, '')}M`;
  }
  if (val >= 1000) {
    return `${(val / 1000).toFixed(1).replace(/\.0$/, '')}k`;
  }
  return val.toString();
}

export interface InquiryFormData {
  fullName: string;
  workEmail: string;
  organization: string;
  eventType: string;
  estimatedAttendees: string;
  briefSummary: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Partial<Record<keyof InquiryFormData, string>>;
}

export function validateInquiryForm(data: InquiryFormData): ValidationResult {
  const errors: Partial<Record<keyof InquiryFormData, string>> = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name.';
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.workEmail || !emailPattern.test(data.workEmail.trim())) {
    errors.workEmail = 'Please provide a valid work email address.';
  }

  if (!data.organization || data.organization.trim().length < 2) {
    errors.organization = 'Please provide your organization or company name.';
  }

  if (!data.eventType || data.eventType === '') {
    errors.eventType = 'Please select an event type.';
  }

  if (!data.briefSummary || data.briefSummary.trim().length < 10) {
    errors.briefSummary = 'Please provide a brief description (at least 10 characters).';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
