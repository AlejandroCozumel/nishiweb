import Head from "next/head";

interface SocialSEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export function SocialSEO({
  title = "NISHI Digital Solutions - Desarrollo Web y Apps a Medida",
  description = "Transformamos ideas en soluciones digitales innovadoras. Desarrollamos experiencias web y móviles que conectan con tus usuarios y hacen crecer tu negocio. Tecnología que nunca duerme.",
  image = "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=630&fit=crop&q=80",
  url = "https://nishi.dev",
  type = "website"
}: SocialSEOProps) {
  const siteName = "NISHI Digital Solutions";
  const twitterHandle = "@nishi_dev";

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="desarrollo web, aplicaciones móviles, software a medida, diseño web, desarrollo apps, tecnología, innovación, soluciones digitales, Perú, Lima" />
      <meta name="author" content="NISHI Digital Solutions EIRL" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="es" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content="NISHI Digital Solutions - Desarrollo Web y Apps" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="es_PE" />
      <meta property="og:locale:alternate" content="es_ES" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content="NISHI Digital Solutions - Desarrollo Web y Apps" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />

      {/* LinkedIn Specific */}
      <meta property="linkedin:owner" content="nishi-digital-solutions" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#8B5CF6" />
      <meta name="msapplication-TileColor" content="#8B5CF6" />
      <meta name="application-name" content={siteName} />
      <meta name="apple-mobile-web-app-title" content={siteName} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      {/* Business Information */}
      <meta name="geo.region" content="PE-LIM" />
      <meta name="geo.placename" content="Lima, Perú" />
      <meta name="geo.position" content="-12.0464;-77.0428" />
      <meta name="ICBM" content="-12.0464, -77.0428" />

      {/* Structured Data for Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "NISHI Digital Solutions EIRL",
            "alternateName": "NISHI",
            "url": url,
            "logo": `${url}/logo.png`,
            "description": description,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "AV. Brasil julio 208",
              "addressLocality": "Lima",
              "addressCountry": "PE"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+51982564254",
              "contactType": "customer service",
              "email": "Hola_nishi@gmail.com",
              "availableLanguage": ["Spanish", "English"]
            },
            "sameAs": [
              "https://www.facebook.com/nishidigital",
              "https://www.linkedin.com/company/nishi-digital",
              "https://twitter.com/nishi_dev",
              "https://www.instagram.com/nishidigital"
            ],
            "foundingDate": "2024",
            "founders": [
              {
                "@type": "Person",
                "name": "NISHI Team"
              }
            ],
            "knowsAbout": [
              "Web Development",
              "Mobile App Development",
              "Custom Software",
              "Digital Transformation",
              "UI/UX Design"
            ],
            "serviceArea": {
              "@type": "Country",
              "name": "Peru"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Digital Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Desarrollo Web",
                    "description": "Desarrollo web a medida con tecnologías modernas"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Desarrollo de Apps",
                    "description": "Aplicaciones móviles nativas e híbridas"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Software a Medida",
                    "description": "Soluciones de software personalizadas"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Auditoría Digital",
                    "description": "Análisis y optimización de presencia digital"
                  }
                }
              ]
            }
          })
        }}
      />

      {/* Structured Data for Website */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": siteName,
            "url": url,
            "description": description,
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": `${url}/search?q={search_term_string}`
              },
              "query-input": "required name=search_term_string"
            },
            "publisher": {
              "@type": "Organization",
              "name": siteName
            }
          })
        }}
      />

      {/* Favicon and Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  );
}