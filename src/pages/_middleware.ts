import { NextRequest, NextResponse } from 'next/server';
import nextConfig from 'next.config';
import { DefaultLocale } from '@assets/dictionaries';
import { stripDefaultLocale } from '@utils';

interface Config {
    i18n: {
        locales: string[];
        defaultLocale: string;
    };
}

export function middleware(req: NextRequest) {
    const config = nextConfig as Config;
    const supportedLocale = config.i18n.locales;
    const pathname = req.nextUrl.pathname;
    const isDefaultLocale = req.nextUrl.locale === 'default' || pathname === '/';

    if (isDefaultLocale) {
        const locale = req.cookies['NEXT_LOCALE'] || req.headers.get('accept-language')?.split(',')?.[0] || DefaultLocale;
        const passedLocale = supportedLocale.includes(locale) ? locale : DefaultLocale;
        const passedPathname = pathname === '/' ? '/home' : pathname;

        return NextResponse.redirect(
            `/${passedLocale}${stripDefaultLocale(passedPathname)}${
                req.nextUrl.search
            }`,
        );
    }
}
