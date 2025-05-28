
export interface User {
  fullName: string;
  phoneNumber: string;
  email: string;
  companyName?: string; // Company name is optional in some views/flows
  isAgency: boolean;
  profilePictureUrl?: string;
  password?: string; // Only for form handling, not stored long-term usually
}
