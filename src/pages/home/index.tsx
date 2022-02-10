import type { GetStaticProps } from 'next';
import Head from 'next/head';
import { Dictionary } from '@types';
import { fetchDictionaires } from '@apis';
import { DefaultLocale } from '@assets/dictionaries';

interface Props {
    dictionary: Dictionary;
}

export const getStaticProps: GetStaticProps = async ({
    locale, locales, defaultLocale,
}) => {
    const dictionary = await fetchDictionaires(locale || DefaultLocale);
    return {
        props: {
            dictionary,
        },
        revalidate: false,
    };
};

export default function Page({ dictionary }: Props) {

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
