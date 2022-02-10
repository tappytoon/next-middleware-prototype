import { NextRequest, NextResponse } from 'next/server';

const LANG_REX = /(en|fr|de)/;

const stripDefaultLocale = (str: string): string => {
    const stripped = str.replace('/default', '');
    return stripped;
};

export function middleware(req: NextRequest) {
    const isDefaultLocale = req.nextUrl.locale === 'default';

    if (isDefaultLocale) {
        // NEXT_LOCALE Cookies 값에 추가시 next 자동 감지
        const locale = req.cookies['NEXT_LOCALE'] || req.headers.get('accept-language')?.split(',')?.[0] || 'en';
        const isSupportedLocale = LANG_REX.test(locale);
        const passedLocale = isSupportedLocale ? locale : 'en';
        const pathname = req.nextUrl.pathname;

        return NextResponse.redirect(
            `/${passedLocale}${stripDefaultLocale(pathname)}${
                req.nextUrl.search
            }`,
        );
    }
}
