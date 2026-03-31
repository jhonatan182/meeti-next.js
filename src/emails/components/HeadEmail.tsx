import { Font, Head } from "@react-email/components";

export function HeadEmail() {
  return (
    <Head>
      <Font
        fontFamily="Work Sans"
        fallbackFontFamily="Times New Roman"
        webFont={{
          url: "https://fonts.gstatic.com/s/worksans/v24/QGYsz_wNahGAdqQ43Rh_fKDp.woff2",
          format: "woff2",
        }}
        fontWeight={400}
        fontStyle="normal"
      />
    </Head>
  );
}
