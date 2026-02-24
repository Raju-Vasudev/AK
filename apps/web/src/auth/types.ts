export interface GmailIdentity {
  email: string;
  fullName: string;
  avatarUrl?: string;
}

export interface GoogleIdTokenPayload {
  email: string;
  name?: string;
  picture?: string;
  email_verified?: boolean;
  sub: string;
}
