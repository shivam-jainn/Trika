import { atom } from 'jotai';

export const channelAtom = atom<"Email"|"Sms"|"Whatsapp">('Email');