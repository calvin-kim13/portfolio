import Head from "next/head";
import { Fragment, memo, useContext } from "react";
import { Context } from "../context/context";
import Preloader from "./Preloader";

const Layout = ({ children }) => {
  const { color } = useContext(Context);
  return (
    <Fragment>
      <Head>
        <title>Calvin - Personal Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:400,700,900&display=optional"
          rel="stylesheet"
        />

        {/* <!-- Template CSS Files --> */}
        <link
          rel="stylesheet"
          type="text/css"
          href="css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="css/jquery.animatedheadline.css"
        />
        <link rel="stylesheet" type="text/css" href="css/materialize.min.css" />
        <link rel="stylesheet" type="text/css" href="css/style.css" />
        <link
          rel="stylesheet"
          type="text/css"
          href={`css/skins/${color}.css`}
        />
      </Head>
      <Preloader />
      <div className="wrapper">{children}</div>
    </Fragment>
  );
};
export default memo(Layout);
