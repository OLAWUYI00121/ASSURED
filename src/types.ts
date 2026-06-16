/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  badge?: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  text: string;
  rating: number;
}

export interface ValueCommitment {
  id: string;
  title: string;
  description: string;
  points?: string[];
}

export interface InquiryFormInput {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}
