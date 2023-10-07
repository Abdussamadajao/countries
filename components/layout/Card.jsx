import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card = ({ countries, loading }) => {
  if (loading) {
    return (
      <div className="spinner">
        <img src={'/Preloader.gif'}   alt="spinner"/>
      </div>
      

    );
  }
  return (
    <>
      {countries.map((post) => {
        const { name, flags, population, capital, region } = post;
        return (
          <Link
            key={name?.common}
            href="/country/[name]"
            as={`/country/${name?.common}`}
          >
            <div className="card">
              <div className="card__img">
                <Image
                  height={150}
                  width={270}
                  src={flags?.png}
                  alt={flags?.svg}
                  className="img"
                  style={{   borderRadius: "5px 5px 0 0"}}
                />
              </div>

              <div className="card__content">
                <h3>{name?.common}</h3>
                <p>Population: {new Intl.NumberFormat().format(population)}</p>
                <p> Region: {region}</p>
                <p>Capital: {capital}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default Card;
