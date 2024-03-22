import React, { useState } from "react";
import axios from "axios";
import sunrise from "../assets/sunrise.png";
import sun12 from "../assets/sun 12.png";
import sunset from "../assets/sunset.png";
import sea from "../assets/sea.png";
import islamic from "../assets/islamic.png";
import Layout from "../Fragment/Layout";

const JadwalSholat = () => {
  const [jadwalSholat, setJadwalSholat] = useState([]);
  const [kota, setKota] = useState({ id: "", nama: "" });
  const [tahun, setTahun] = useState("");
  const [bulan, setBulan] = useState("");

  const handleSearch = () => {
    axios
      .get(`https://api.myquran.com/v2/sholat/kota/cari/${kota.nama}`)
      .then((response) => {
        const kotaData = response.data.data[0];
        setKota({ id: kotaData.id, nama: kotaData.lokasi });

        axios
          .get(
            `https://api.myquran.com/v2/sholat/jadwal/${kotaData.id}/${tahun}/${bulan}`
          )
          .then((response) => {
            const jadwal = response.data.data.jadwal;
            setJadwalSholat(jadwal);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Layout>
      <div className="container mx-auto mt-10 ">
        <div className="flex flex-col md:flex-row items-center mb-4 ">
          <input
            className="outline-none w-[300px] md:w-auto mb-2 md:mb-0 mr-0 md:mr-2 px-4 py-2 rounded-md border bg-white"
            type="text"
            placeholder="Masukkan nama kota"
            value={kota.nama}
            onChange={(e) => setKota({ ...kota, nama: e.target.value })}
          />
          <input
            className="outline-none w-[300px] md:w-32 mb-2 md:mb-0 mr-0 md:mr-2 px-4 py-2 rounded-md border bg-white"
            type="number"
            placeholder="Tahun"
            value={tahun}
            onChange={(e) => setTahun(e.target.value)}
          />
          <input
            className="outline-none w-[300px] md:w-32 mb-2 md:mb-0 mr-0 md:mr-2 px-4 py-2 rounded-md border bg-white"
            type="number"
            placeholder="Bulan"
            value={bulan}
            onChange={(e) => setBulan(e.target.value)}
          />
          <button
            className="text-xl cursor-pointer bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-500"
            onClick={handleSearch}
          >
            Cari
          </button>
        </div>
        <div className="overflow-x-auto mt-[80px] mr-10 ml-10">
          <table className="table-auto min-w-full">
            <thead className="bg-gray-100  ">
              <tr>
                <th className="px-4 py-2 border  ">
                  <span>Tanggal</span>
                </th>
                <th className="px-4 py-2 border">
                  <div className="flex items-center flex-col gap-2">
                    <span>Subuh</span>
                    <img src={sunrise} alt="Subuh Icon" width={30} />
                  </div>
                </th>
                <th className="px-4 py-2 border">
                  <div className="flex items-center flex-col gap-2">
                    <span>Dzuhur</span>
                    <img src={sun12} alt="Dzuhur Icon" width={30} />
                  </div>
                </th>
                <th className="px-4 py-2 border">
                  <div className="flex items-center flex-col gap-2">
                    <span>Ashar</span>
                    <img src={sunset} alt="Ashar Icon" width={30} />
                  </div>
                </th>
                <th className="px-4 py-2 border">
                  <div className="flex items-center flex-col gap-2">
                    <span>Maghrib</span>
                    <img src={sea} alt="Magrib Icon" width={30} />
                  </div>
                </th>
                <th className="px-4 py-2">
                  <div className="flex items-center flex-col gap-2">
                    <span>Isya</span>
                    <img src={islamic} alt="Isya Icon" width={30} />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {jadwalSholat.map((item, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{item.tanggal}</td>
                  <td className="border px-4 py-2 text-center">{item.subuh}</td>
                  <td className="border px-4 py-2 text-center">
                    {item.dzuhur}
                  </td>
                  <td className="border px-4 py-2 text-center">{item.ashar}</td>
                  <td className="border px-4 py-2 text-center">
                    {item.maghrib}
                  </td>
                  <td className="border px-4 py-2  text-center">{item.isya}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default JadwalSholat;
