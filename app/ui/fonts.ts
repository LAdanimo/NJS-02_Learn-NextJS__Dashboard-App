// Import the Inter font from the next/font/google module, which will be the primary font: 
import { Inter, Lusitana } from 'next/font/google';

// Then, specify what subset you'd like to load. In this case, 'latin':
export const inter = Inter({ subsets: ['latin'] });

// Importing both weight options allows for 700-wt to be used with <strong> and 400-wt otherwise!
export const lusitana = Lusitana({ subsets: ['latin'], weight: ['400', '700'] });