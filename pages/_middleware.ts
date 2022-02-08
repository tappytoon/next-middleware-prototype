import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
    // NEXT_LOCALE Cookies 값에 추가 또는 아래 코드 추가
    // const locale = req.cookies['LOCALE'] || req.headers.get('accept-language')?.split(',')?.[0] || 'en';

    if (req.nextUrl.pathname === '/') {
        req.nextUrl.pathname = '/home';
        return NextResponse.redirect(req.nextUrl);
    }
}
