import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>
        {`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: sans-serif, BlinkMacSystemFont, fira Sans;
          }

          * {
            box-sizing: border-box;
          }
        `}
      </style>
    </>
  );
}

export default MyApp;
