import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.rudn.ru",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.sechenov.ru",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "bmstu.ru",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "mai.ru",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "spbu.ru",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "kpfu.ru",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.msu.ru",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.nsu.ru",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.tsu.ru",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "urfu.ru",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.dvfu.ru",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "mephi.ru",
        pathname: "/**",
      },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
