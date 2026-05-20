import { GA_MEASUREMENT_ID } from "@/lib/site";

const gtagInitScript = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${GA_MEASUREMENT_ID}');
`;

export function GoogleAnalytics() {
  if (!import.meta.env.PROD) {
    return null;
  }

  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
      <script dangerouslySetInnerHTML={{ __html: gtagInitScript }} />
    </>
  );
}
