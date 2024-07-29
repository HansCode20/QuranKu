import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import Layout from "../Fragment/Layout";

import '../Fragment/Loading.css'

// React Icons
import { CiSearch } from "react-icons/ci";

const Doa = () => {
  const [doa, setDoa] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedDoa, setSelectedDoa] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  const getDoa = () => {
    setLoading(true);

    setTimeout(() => {
      axios
        .get(`https://api.dikiotang.com/doa/harian`)
        .then((response) => {
          const doaData = response.data.data;
          const filtered = doaData.filter((item) =>
            item.judul.toLowerCase().includes(search.toLowerCase())
          );
          setDoa(filtered);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }, 1000);
  };

  useEffect(() => {
    getDoa();
  }, [search]);

  return (
    <Layout>
      <div>
      <div className="flex justify-center mt-10 mb-10 ">
          <div className="relative w-1/2">
          <input
            type="search"
            placeholder="Cari Doa"
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

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-1  lg:grid-cols-4 m-6">
          {Array.isArray(doa) &&
            doa.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="px-4 py-4 flex justify-between">
                  <div className=" mx-auto">
                    <h3 className="text-lg font-semibold text-md items-center text-center">
                      {item.judul}
                    </h3>
                  </div>
                </div>
                <div className="px-4 py-2 items-center bg-gray-100">
                  <button
                    className="bg-blue-400 rounded-lg px-4 py-2 text-white hover:bg-blue-500 w-full"
                    onClick={() => {
                      document.getElementById("my_modal_4").showModal();
                      setSelectedDoa(item);
                    }}
                  >
                    Baca
                  </button>
                  <dialog
                    id="my_modal_4"
                    className="modal backdrop-filter backdrop-blur-lg "
                  >
                    <div className="modal-box w-11/12 max-w-4xl bg-gray-100">
                      <h3 className="font-bold text-lg text-black items-center text-center">
                        بسم الله الرحمن الرحيم
                      </h3>
                      {selectedDoa && (
                        <>
                          <p className="py-4 flex justify-end text-black font-bold text-xl text-center">
                            {selectedDoa.arab}
                          </p>
                          <p className="text-sm">{selectedDoa.indo}</p>
                        </>
                      )}
                      <div className="modal-action">
                        <form method="dialog">
                          <button
                            className="btn bg-blue-500 text-white hover:bg-blue-400"
                            onClick={() => {
                              setSelectedDoa(null);
                              document.getElementById("my_modal_4").close();
                            }}
                          >
                            Close
                          </button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </div>
              </div>
            ))}
        </div>
        <div className="flex justify-center mx-auto">
          {!loading && search && doa.length === 0 && <p className="text-center">Doa Tidak Ditemukan</p>}
        </div>
      </div>
    </Layout>
  );
};

export default Doa;
