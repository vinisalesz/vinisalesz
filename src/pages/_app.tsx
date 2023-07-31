import '@/styles/globals.css'

import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon.ico',
          },
        ]}
        languageAlternates={[
          {
            hrefLang: 'pt-BR',
            href: 'https://www.vinisales.com.br/pt-BR',
          },
        ]}
        openGraph={{
          type: 'profile',
          url: 'https://vinisales.com.br/',
          site_name: 'vinisales.com.br',
          title: 'Vinícius Sales',
          images: [
            {
              url: 'https://github.com/vinisalesz.png',
            },
          ],
        }}
        twitter={{
          handle: '@vinisalesz',
          site: '@vinisalesz',
          cardType: 'summary',
        }}
      />

      <Component {...pageProps} />
    </>
  )
}

export default MyApp