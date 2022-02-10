import { DICTIONARIES } from '@assets/dictionaries';
import { Dictionary } from '@types';

export default {
    dictionaries: {
        fetch: async (locale: string): Promise<Dictionary> => DICTIONARIES[locale],
    },
};
