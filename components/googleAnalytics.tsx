import Script from 'next/script';
import { FC } from 'react';
import { getGoogleAnalyticsId, isProduction } from '~/utils/env';

const GoogleAnalytics: FC = () => {
  if (!isProduction()) {
    return null;
  }

  const googleAnalyticsId = getGoogleAnalyticsId();
  if (!googleAnalyticsId) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
window.dataLayer = window.dataLayer || [];
function gtag(){window.dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${googleAnalyticsId}');
`}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
