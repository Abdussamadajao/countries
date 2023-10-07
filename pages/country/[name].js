import React from "react";
import axios from "axios";
import { BsArrowLeft } from "react-icons/bs";
import Header from "../../components/layout/Header";
import { useRouter } from "next/router";
import Image from "next/image";
import NumberFormat from "react-number-format";
import Link from "next/link";

const Country = ({ data, loading }) => {
  const router = useRouter();
  const goback = () => {
    router.push("/");
  };

  if (loading) {
    return (
      <div className="spinner">
        <img src={"/Preloader.gif"} alt="spinner" />
      </div>
    );
  }
  return (
    <>
      <Header />
      <div className="country">
        <div className="container">
          <button onClick={() => goback()} className="country__btn">
            <BsArrowLeft /> <p>back</p>
          </button>

          <div className="country__content">
            <div className="country__img">
              <Image
                height={400}
                width={500}
                src={data[0].flags.png}
                alt={data[0].name?.common}
              />
            </div>
            <div className="country__text">
              <div className="text__content">
                <h1>{data[0].name?.common}</h1>
                <p>
                  <span>Native Name: </span>
                  {data[0].name.nativeName !== "undefined"
                    ? data[0].name.nativeName[
                        Object.keys(data[0].name.nativeName)[0]
                      ].common
                    : ""}
                </p>
                <p>
                  <span>Population: </span>

                  {data[0].population}
                </p>
                <p>
                  <span>Region: </span>
                  {data[0].region}
                </p>
                <p>
                  <span>Sub Region: </span>
                  {data[0].subregion}
                </p>
                <p>
                  <span>Capital: </span>
                  {data[0].capital !== "undefined" ? data[0].capital[0] : ""}
                </p>
              </div>
              <div className="text__content-2">
                <p>
                  <span>Capital: </span>
                  {data[0].capital !== "undefined " ? data[0].capital[0] : ""}
                </p>
                <p>
                  <span>Currencies: </span>
                  {data[0].currencies !== "undefined"
                    ? data[0].currencies[Object.keys(data[0].currencies)[0]]
                        .name
                    : ""}
                </p>
                <p>
                  <span>Languages: </span>
                  {data[0].languages !== "undefined"
                    ? Object.keys(data[0].languages).map((item) => {
                        return ` ${data[0].languages[item]}`;
                      })
                    : ""}
                </p>
              </div>
              <div className="text__content-3">
                <span> Border Countries: </span>
                {data[0].borders &&
                  data[0].borders.map((item, index) => {
                    return (
                      <button key={index} className="borders">
                        {item}
                      </button>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const resp = await axios.get(
    `https://restcountries.com/v3.1/name/${context.params.name}`
  );
  return {
    props: { data: resp.data, loading: false },
  };
}

export default Country;
