import { NextRequest, NextResponse } from 'next/server';
import nextConfig from 'next.config';
import { stripDefaultLocale } from '@utils';

export function middleware(req: NextRequest) {
    const supportedLocale = nextConfig?.i18n?.locales || [];
    const pathname = req.nextUrl.pathname;
    const isDefaultLocale = req.nextUrl.locale === 'default' || pathname === '/';

    if (isDefaultLocale) {
        const locale = req.cookies['NEXT_LOCALE'] || req.headers.get('accept-language')?.split(',')?.[0] || 'en';
        const passedLocale = supportedLocale.includes(locale) ? locale : 'en';
        const passedPathname = pathname === '/' ? '/home' : pathname;

        return NextResponse.redirect(
            `/${passedLocale}${stripDefaultLocale(passedPathname)}${
                req.nextUrl.search
            }`,
        );
    }
}
