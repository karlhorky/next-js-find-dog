import React from 'react';
import Head from 'next/head';
//import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Button from '@material-ui/core/Button';

function FetchedDog({ fetchedDogs }) {
  if (!fetchedDogs) {
    return (
      <div className="error-page">
        <h1>Ops! This dog is not at home!</h1>
        <Link href="/search">
          <a>
            <Button variant="contained" color="primary">
              To Search Page
            </Button>
          </a>
        </Link>
        <Link href="/home">
          <a>
            <Button variant="contained" color="primary">
              To Homepage
            </Button>
          </a>
        </Link>
      </div>
    );
  }

  //console.log('props:', props.fetchedDogs);
  //console.log('name:', props.fetchedDogs.name);

  //const fetchedAllDogNames = fetchedDogNames.map((val) => val.name);

  return (
    <div>
      <Head>
        <title>Find-your-dog</title>
        <link rel="icon" href="/favicon.jpg" />
      </Head>

      <main>
        <h1>
          <span role="img" aria-label="star">
            🌟
          </span>

          {fetchedDogs.name
            ? fetchedDogs.name
            : 'There is no information about this'}
          <span role="img" aria-label="star">
            🌟
          </span>
        </h1>
        <h2>
          Life:{' '}
          {fetchedDogs.life_span
            ? fetchedDogs.life_span
            : 'There is no information about this'}
        </h2>
        <p>
          Bred for:{' '}
          {fetchedDogs.bred_for
            ? fetchedDogs.bred_for
            : 'There is no information about this'}
        </p>
        <p>
          Origin:{' '}
          {fetchedDogs.origin
            ? fetchedDogs.origin
            : 'There is no information about this'}
        </p>

        <p>
          Temperament:{' '}
          {fetchedDogs.temperament
            ? fetchedDogs.temperament
            : 'There is no information about this'}
        </p>
        <p>Id: {fetchedDogs.id}</p>
      </main>

      <div className="buttons">
        <Link href="/search">
          <a>
            <Button variant="contained" color="primary">
              To Search
            </Button>
          </a>
        </Link>
        <Link href="/home">
          <a>
            <Button variant="contained" color="secondary">
              To Home
            </Button>
          </a>
        </Link>
      </div>

      <Footer />
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Bitter:ital@1&display=swap');

        main {
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        h1 {
          font-family: 'Lucida Console', Monaco, monospace;
          text-align: center;
          padding: 5px;
          text-shadow: 0px 3px 3px orange;
        }
        h2 {
          font-family: 'Lucida Console', Monaco, monospace;
          text-align: center;
          padding: 3px;
          color: orange;
        }

        h3 {
          font-family: 'Lucida Console', Monaco, monospace;
          text-shadow: 0px 3px 3px orange;
        }
        p {
          font-size: 15px;
          color: darkcyan;
          text-align: left;
          font-weight: 700;
          margin: 1em auto;
          line-height: 1.6em;
          font-size: 0.8em;
          font-family: 'Bitter', serif;
          max-width: 450px;
          text-align: center;
        }
        a {
          text-decoration: none;
        }
        img {
          width: 40%;
          height: 50%;
          margin: 0 auto;
        }
        .buttons {
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin: 2em auto;
        }
      `}</style>
    </div>
  );
}
export default FetchedDog;

export async function getServerSideProps(context) {
  const { getFetchedDogsById } = await import('../../db.js');

  const fetchedDogs = await getFetchedDogsById(context.params.id);

  //console.log('result: ', fetchedDogs);

  const fetchedId = fetchedDogs.map((item) => item.id);

  if (fetchedDogs.length === 0 || fetchedId > 172) {
    return { props: {} };
  }
  return {
    props: {
      fetchedDogs: fetchedDogs[0],
    },
  };
}