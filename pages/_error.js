import React from 'react';
import Router from 'next/router';
function CustomError({ statusCode }) {
  return (
    <figure>
      <img
        alt="Showing a properly dog according the status code"
        width="100%"
        src="./404.gif/"
      />
      <figcaption>
        <h1>
          Page not exist ! <span>{statusCode}</span>
        </h1>
        <button onClick={() => Router.push('/fetch')} className="toHomeButton">
          To Fetch
        </button>
      </figcaption>
      <style jsx>{`
        h1 {
          text-align: center;
          font-size: 3em;
          color: blue;
        }
        span {
          color: red;
        }
        button {
          width: 8em;
          height: 3em;
          background-color: beige;
          border-radius: 5px;
          cursor: pointer;
        }
        button:hover {
          background-color: lightblue;
          color: red;
        }
        figcaption {
          margin: 0 auto;
          text-align: center;
        }
      `}</style>
    </figure>
  );
}

function getInitialProps({ res, err }) {
  let statusCode;
  // If the res variable is defined it means nextjs
  // is in server side
  if (res) {
    statusCode = res.statusCode;
  } else if (err) {
    // if there is any error in the app it should
    // return the status code from here
    statusCode = err.statusCode;
  } else {
    // Something really bad/weird happen and status code
    // cannot be determined.
    statusCode = null;
  }
  return { statusCode };
}

CustomError.getInitialProps = getInitialProps;

export default CustomError;
