import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        {/* Meta tags essenciais */}
        <title>Leticia Crecca - Psicologa</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* Meta tags para SEO */}
        <meta name="description" content="Psicóloga em Torrinha-SP e região. Atendimento personalizado para saúde mental e bem-estar. Terapia individual, ansiedade, depressão e muito mais." />
        <meta name="keywords" content="Psicóloga Torrinha, Terapia Torrinha, Psicologia interior SP, Atendimento psicológico, Psicoterapia, Saúde mental, Ansiedade, Depressão" />
        <meta name="author" content="[Nome da Psicóloga]" />
        
        {/* Meta tags para redes sociais (Open Graph) */}
        <meta property="og:title" content="Psicóloga em Torrinha-SP | Atendimento Personalizado" />
        <meta property="og:description" content="Atendimento psicológico em Torrinha-SP e região. Cuide da sua saúde mental com uma psicóloga experiente." />
        <meta property="og:image" content="[URL da imagem de destaque]" />
        <meta property="og:url" content="[URL do site]" />
        <meta property="og:type" content="website" />

        {/* Meta tags para Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Psicóloga em Torrinha-SP | Atendimento Personalizado" />
        <meta name="twitter:description" content="Atendimento psicológico em Torrinha-SP e região. Cuide da sua saúde mental com uma psicóloga experiente." />
        <meta name="twitter:image" content="[URL da imagem de destaque]" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Fontes */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" 
          rel="stylesheet" 
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
