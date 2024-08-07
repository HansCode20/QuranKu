import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Layout from "../Fragment/Layout";
import '../Fragment/Loading.css'

// React Icons
import { CiSearch } from "react-icons/ci";

const Kitab = () => {
  const [kitab, setKitab] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => {
      axios
        .get(`https://quran-api.santrikoding.com/api/surah`)
        .then((response) => {
          const kitab = response.data;
          const filtered = kitab.filter((item) =>
            item.nama_latin.toLowerCase().includes(search.toLowerCase())
          );
          setKitab(filtered);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false); // Ensure loading state is reset even in case of error
        });
    }, 1000);
  };

  useEffect(() => {
    handleSearch();
  }, [search]);

  return (
    <Layout>
      <div>
        <div className="flex justify-center mt-10 mb-10 ">
          <div className="relative w-1/2">
          <input
            type="search"
            placeholder="Cari Kitab"
            className="outline-none border border-gray-300 rounded-md p-2 w-full  bg-white"
            value={search}
            onChange={handleSearchChange}
          />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 "> 
              <CiSearch className="w-5 h-5"/> {/* Ukuran ikon */}
            </div>
          </div>
        </div>

        {loading && (
          <div className="flex justify-center items-center h-screen">
            {/* Add a loading spinner or message here if needed */}
            <span className="loader"></span>
          </div>
        )}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 m-10">
          {kitab.length !== 0 &&
            kitab.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="px-4 py-4 flex justify-between">
                  <div>
                    <p className="text-sm font-bold text-gray-600 mb-2">
                      {item.nama_latin}
                    </p>
                    <p className="text-sm text-gray-600">{item.arti}</p>
                  </div>
                  <h3 className="text-lg font-bold text-3xl">{item.nama}</h3>
                </div>
                <div className="px-4 py-2 flex justify-between items-center bg-gray-100">
                  <span className="inline-flex items-center bg-green-50 text-blue-600 px-2.5 py-0.5 text-xs font-medium rounded-full">
                    {item.jumlah_ayat} Ayat
                  </span>
                  <Link to={`/surah/${item.nomor}`}>
                    <button className="bg-blue-400 hover:bg-blue-700 text-white font-md py-2 px-4 rounded">
                      Baca
                    </button>
                  </Link>
                </div>
              </div>
            ))}
        </div>
        <div className="flex justify-center mx-auto items-center">
          {!loading && search && kitab.length === 0 && <p className="text-center">Surah Tidak Ditemukan</p>}
        </div>
      </div>
    </Layout>
  );
};

export default Kitab;
