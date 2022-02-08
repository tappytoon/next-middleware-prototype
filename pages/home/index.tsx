import type { GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import type { ParsedUrlQuery } from 'querystring';
import { Dictionary } from '../../types';
import api from '../../api';
import { DefaultLocale } from '../../dictionaries';

interface Params extends ParsedUrlQuery {
    locale: string;
}

interface Props {
    dictionary: Dictionary;
}

export const getStaticProps: GetStaticProps<unknown, Params> = async ({
    locale, locales, defaultLocale,
}) => {
    const dictionary = await api.dictionaries.fetch(locale || DefaultLocale);
    return {
        props: {
            dictionary,
        },
        revalidate: false,
    };
};

export default function Page({ dictionary }: Props) {
    // const { locale, locales, defaultLocale } = useRouter();

    return (
        <div>
            <Head>
                <title>next-middleware-prototype</title>
                <meta name="description" content="next middleware prototype"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                {dictionary.title}
            </main>
        </div>
    );
}
