import { uk, enGB, enUS, ja, fr, de, ptBR, tr, ar, es, da, hi, af } from 'date-fns/locale';

export const cities = [
  { name: 'Lviv', zone: 'Europe/Kyiv', locale: uk },
  { name: 'London', zone: 'Europe/London', locale: enGB },
  { name: 'New York', zone: 'America/New_York', locale: enUS },
  { name: 'Tokyo', zone: 'Asia/Tokyo', locale: ja },
  { name: 'Paris', zone: 'Europe/Paris', locale: fr },
  { name: 'Berlin', zone: 'Europe/Berlin', locale: de },
  { name: 'Sydney', zone: 'Australia/Sydney', locale: enGB },
  { name: 'Rio de Janeiro', zone: 'America/Sao_Paulo', locale: ptBR },
  { name: 'Istanbul', zone: 'Europe/Istanbul', locale: tr },
  { name: 'Dubai', zone: 'Asia/Dubai', locale: ar },
  // Нові міста
  { name: 'Mexico City', zone: 'America/Mexico_City', locale: es },
  { name: 'Copenhagen', zone: 'Europe/Copenhagen', locale: da },
  { name: 'Mumbai', zone: 'Asia/Kolkata', locale: hi },
  { name: 'Cape Town', zone: 'Africa/Johannesburg', locale: af },
];
