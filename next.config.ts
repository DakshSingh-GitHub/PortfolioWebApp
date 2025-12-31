import type { NextConfig } from "next";

const isGithubPages = process.env.DEPLOY_TARGET === "gh-pages";
const repo = "portfolio-app";

const nextConfig: NextConfig = {
    output: "export",
    distDir: "dist",
    images: { unoptimized: true },
    basePath:
        isGithubPages && process.env.NODE_ENV === "production"
            ? `/${repo}`
            : "",
    assetPrefix:
        isGithubPages && process.env.NODE_ENV === "production"
            ? `/${repo}/`
            : "",
};

export default nextConfig;
