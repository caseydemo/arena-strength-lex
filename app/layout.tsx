import "bootstrap/dist/css/bootstrap.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BootstrapClient from "./components/UI/BootstrapClient";
import React from "react";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

const defaultImageUrl = "https://arena-strength-lex.com/bench_spot_1.png";
const defaultSiteUrl = "https://arena-strength-lex.com/";

export const metadata: Metadata = {
    title: "Arena Strength & Performance",
    description:
        "Lexington Kentucky's premier weight training gym. Powerlifting, Strongman, Personal Training, Group Classes and more.",
    robots: "index, followw, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
        canonical: "https://arena-strength-lex.com/",
    },
    openGraph: {
        title: "Arena Strength & Performance",
        description:
            "Lexington Kentucky's premier weight training gym. Powerlifting, Strongman, Personal Training, Group Classes and more.",
        url: "https://arena-strength-lex.com/",
        siteName: "Arena Strength & Performance",
        images: defaultImageUrl,
        locale: "en_US",
    },
};


const defaultSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "@id": defaultSiteUrl,
            url: defaultSiteUrl,
            name: "Arena Strength & Performance",
            isPartOf: {
                "@id": defaultSiteUrl + "#website",
            },
            about: {
                "@id": defaultSiteUrl + "#organization",
            },
            primaryImageOfPage: {
                "@id": defaultSiteUrl + "#primaryimage",
            },
            image: {
                "@id": defaultSiteUrl + "#primaryimage",
            },
            thumbnailUrl: defaultImageUrl,
            datePublished: "2016-05-06T19:27:44+00:00",
            dateModified: "2023-05-10T16:47:04+00:00",
            breadcrumb: {
                "@id": defaultSiteUrl + "#breadcrumb",
            },
            inLanguage: "en-US",
            potentialAction: [
                {
                    "@type": "ReadAction",
                    target: [defaultSiteUrl,],
                },
            ],
        },
        {
            "@type": "ImageObject",
            inLanguage: "en-US",
            "@id": defaultSiteUrl + "#primaryimage",
            url: defaultImageUrl,
            contentUrl: defaultImageUrl,
            width: 1650,
            height: 1096,
            caption: "Arena Strength & Performance",
        },
        {
            "@type": "BreadcrumbList",
            "@id": defaultSiteUrl + "#breadcrumb",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                },
            ],
        },
        {
            "@type": "WebSite",
            "@id": defaultSiteUrl + "#website",
            url: defaultSiteUrl,
            name: "Arena Strength & Performance",
            description: "",
            publisher: {
                "@id": defaultSiteUrl + "#organization",
            },
            potentialAction: [
                {
                    "@type": "SearchAction",
                    target: {
                        "@type": "EntryPoint",
                        urlTemplate:
                            defaultSiteUrl + "?s={search_term_string}",
                    },
                    "query-input": {
                        "@type": "PropertyValueSpecification",
                        valueRequired: true,
                        valueName: "search_term_string",
                    },
                },
            ],
            inLanguage: "en-US",
        },
        {
            "@type": "Organization",
            "@id": defaultSiteUrl + "#organization",
            name: "Arena Strength & Performance",
            url: defaultSiteUrl,
            logo: {
                "@type": "ImageObject",
                inLanguage: "en-US",
                "@id": defaultSiteUrl + "#/schema/logo/image/",
                url: defaultImageUrl,
                contentUrl:
                    defaultImageUrl,
                width: 250,
                height: 160,
                caption: "Arena Strength & Performance",
            },
            image: {
                "@id": defaultSiteUrl + "#/schema/logo/image/",
            },
            sameAs: [
                "https://www.facebook.com/profile.php?id=100088712705886",                
            ],
        },
    ],
};

const schemaString = '<script type="application/ld+json">' + JSON.stringify(defaultSchema) + '</script>';
const gtmId = "G-4QM0SQ0QYY";
const gtmUrl = "https://www.googletagmanager.com/gtag/js?id=" + gtmId;

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <GoogleTagManager gtmId={gtmId} />
            <body className={inter.className || ""}>            
            <noscript>
                <iframe 
                    src={gtmUrl}
                    height="0" 
                    width="0" 
                    style={{display:"none", visibility:"hidden"}}>
                </iframe>
            </noscript>
            <div dangerouslySetInnerHTML={{ __html: schemaString }} />
                {children}
                <BootstrapClient />
            </body>
        </html>
    );
}
