import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const path = url.pathname;

  if (path.includes("/resources/aea31260-5f46-42e8-82ad-9e0dfcf26aa0")) {
    return NextResponse.redirect(
      new URL("/resources/motor-vehicle-driving-regulation-2017", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/resources/:path*"],
};
