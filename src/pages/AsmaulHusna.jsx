import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../Fragment/Layout";

import '../Fragment/Loading.css'

const AsmaulHusna = () => {
  const [asmaulHusna, setAsmaulHusna] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => { 
      axios
        .get("https://api.myquran.com/v2/husna/semua")
        .then((response) => {
          const asmaulHusna = response.data.data;
          setAsmaulHusna(asmaulHusna);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }, 1000);
  }, []);

  useEffect(() => {
    console.log(asmaulHusna);
  }, [asmaulHusna]);


  return (
    <Layout>
      {/* Loading */}
      {loading && (
        <div className="flex justify-center items-center h-screen">
          <span className="loader"></span>
        </div>
      )}

      <div className="mt-[60px] mb-[60px]">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-3 m-10">
          {asmaulHusna.length !== 0 &&
            asmaulHusna.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="px-4 py-4 flex flex-col">
                  <h3 className="text-lg font-bold text-3xl mb-2">
                    {item.nama}
                  </h3>
                  <div className="flex justify-between">
                    <div className="text-left">
                      <p className="text-sm font-semibold">{item.id}.</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold">{item.arab}</p>
                      <p className="text-sm text-gray-600">{item.latin}</p>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-2 flex justify-between items-center bg-gray-100">
                  <span className="items-center mx-auto bg-green-50 text-blue-600 px-2.5 py-0.5 text-xs font-medium rounded-full ">
                    {item.indo} 
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default AsmaulHusna;
