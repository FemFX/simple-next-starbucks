/* eslint-disable react/no-string-refs */
import Head from "next/head";
import { useRouter } from "next/router";
import { FC, PropsWithChildren } from "react";
import { onlyText } from "../../../app/utils/clear-text";
const Meta: FC<PropsWithChildren<any>> = ({
  title,
  description,
  children,
  type = "website",
}) => {
  const { asPath } = useRouter();

  const currentUrl = `${process.env.APP_URL}${asPath}`;
  return (
    <>
      <Head>
        <title itemProp="headline">E-commerce</title>
        {description ? (
          <>
            <meta
              itemProp="description"
              name="description"
              content={onlyText(description, 152)}
            />
            <link ref="canonical" href={currentUrl} />
            <meta property="og:type" content={type} />
            <meta property="og:locale" content="en" />
            <meta property="og:title" content={title} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:site_name" content={currentUrl} />
            <meta
              property="og:description"
              content={onlyText(description, 197)}
            />
          </>
        ) : (
          <meta name="robots" content="noidndex, nofollow" />
        )}
      </Head>
      {children}
    </>
  );
};
export default Meta;
