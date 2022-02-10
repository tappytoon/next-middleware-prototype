import { DICTIONARIES } from '@assets/dictionaries';
import { Dictionary } from '@types';

export async function fetchDictionaires(locale: string): Promise<Dictionary> {
    return DICTIONARIES[locale];
}
