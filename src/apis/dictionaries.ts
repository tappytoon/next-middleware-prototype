import { DICTIONARIES } from '@assets/dictionaries';

export interface Dictionary {
    title: string;
}

export async function fetchDictionaries(locale: string): Promise<Dictionary> {
    return DICTIONARIES[locale];
}
