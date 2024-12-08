"use client";
import React, { useEffect, useState } from "react";

import JudulComponent from "../components/JudulComponent";
import Link from "next/link";
import SidebarComponent from "../components/SidebarComponent";
import { useSuratStore } from "../Utility/Store/useSuratStore";
import { useRouter } from "next/navigation";

const suratSakitPage = () => {
  const router = useRouter();
  const [dataForm, setDataForm] = useState({
    noSurat: "",
    nama: "",
    tempatLahir: "",
    tanggalLahir: "",
    umur: "",
    jenisKelamin: "",
    alamat: "",
    pekerjaan: "",
    diagnosa: "",
    lamaSakit: "",
    tanggalAwal: "",
    tanggalAkhir: "",
    kotaSurat: "",
    tanggalSurat: "",
    namaDokter: "",
    NIPDokter: "",
    barcode: "",
  });

  const {
    setNoSurat,
    setNama,
    setTempatLahir,
    setTanggalLahir,
    setUmur,
    setJenisKelamin,
    setalamat,
    setpekerjaan,
    setdiagnosa,
    setlamaSakit,
    settanggalAwal,
    settanggalAkhir,
    setkotaSurat,
    settanggalSurat,
    setnamaDokter,
    setNIPDokter,
  } = useSuratStore();

  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    setDataForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Setelah komponen dirender di sisi klien
  }, []);

  if (!isClient) {
    return null; // Jangan render komponen sebelum kode dijalankan di sisi klien
  }

  const handlePreview = () => {
    // Set data ke store Zustand
    setNoSurat(dataForm.noSurat);
    setNama(dataForm.nama);
    setTempatLahir(dataForm.tempatLahir);
    setTanggalLahir(dataForm.tanggalLahir);
    setUmur(dataForm.umur);
    setJenisKelamin(dataForm.jenisKelamin);
    setalamat(dataForm.alamat);
    setpekerjaan(dataForm.pekerjaan);
    setdiagnosa(dataForm.diagnosa);
    setlamaSakit(dataForm.lamaSakit);
    settanggalAwal(dataForm.tanggalAwal);
    settanggalAkhir(dataForm.tanggalAkhir);
    setkotaSurat(dataForm.kotaSurat);
    settanggalSurat(dataForm.tanggalSurat);
    setnamaDokter(dataForm.namaDokter);
    setNIPDokter(dataForm.NIPDokter);

    // Navigasi ke halaman suratSakit setelah set data
    router.push("/surat/suratSakit"); // Gunakan router.push dari useRouter
  };

  return (
    <SidebarComponent>
      <div className="flex flex-col gap-5">
        {/* JUDUL */}
        <JudulComponent title="Surat Sakit" />

        {/* konten */}
        <div className="mx-3 pl-3 py-3 border border-gray-200 rounded-lg shadow-md bg-white  ">
          {/* Input */}
          <div className="flex flex-col items-start gap-3  text-center">
            <div className="w-[30rem]">
              {/* NO Surat */}
              <div className="grid grid-cols-5 items-center pl-10 w-full">
                <label
                  htmlFor="first_name"
                  className="block col-span-2 font-medium text-gray-900 dark:text-white text-left "
                >
                  No Surat
                </label>
                <input
                  type="text"
                  id="first_name"
                  className=" col-span-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="No Surat"
                  required
                  name="noSurat"
                  value={dataForm.noSurat}
                  onChange={handleOnChange}
                />
              </div>
            </div>
            <div className="w-[30rem]">
              {/* nama */}
              <div className="grid grid-cols-5 items-center pl-10 w-full">
                <label
                  htmlFor="first_name"
                  className="block col-span-2 font-medium text-gray-900 dark:text-white text-left "
                >
                  Nama
                </label>
                <input
                  type="text"
                  id="first_name"
                  className=" col-span-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Nama"
                  required
                  name="nama"
                  value={dataForm.nama}
                  onChange={handleOnChange}
                />
              </div>
            </div>
            <div className="w-[30rem]">
              {/* Tempat Lahir */}
              <div className="grid grid-cols-5 items-center pl-10 w-full">
                <label
                  htmlFor="first_name"
                  className="block col-span-2 font-medium text-gray-900 dark:text-white text-left "
                >
                  Tempat Lahir
                </label>
                <input
                  type="text"
                  id="first_name"
                  className=" col-span-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Tempat Lahir"
                  required
                  name="tempatLahir"
                  value={dataForm.tempatLahir}
                  onChange={handleOnChange}
                />
              </div>
            </div>

            <div className=" w-[30rem] grid grid-cols-5 items-center pl-10 ">
              {/* Tanggal Lahir */}
              <label
                htmlFor=""
                className="block col-span-2 font-medium text-gray-900 dark:text-white text-left "
              >
                Tanggal Lahir
              </label>

              <input
                type="date"
                className="col-span-3 rounded-lg"
                name="tanggalLahir"
                value={dataForm.tanggalLahir}
                onChange={handleOnChange}
              />
            </div>

            <div className="w-[30rem]">
              {/* Umur */}
              <div className="grid grid-cols-5 items-center pl-10 w-full">
                <label
                  htmlFor="first_name"
                  className="block col-span-2 font-medium text-gray-900 dark:text-white text-left "
                >
                  Umur
                </label>
                <input
                  type="text"
                  id="first_name"
                  className=" col-span-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Umur"
                  required
                  name="umur"
                  value={dataForm.umur}
                  onChange={handleOnChange}
                />
              </div>
            </div>

            <div className="w-[30rem] grid grid-cols-5 items-center pl-10">
              {/* Jenis Kelamin */}
              <label
                htmlFor=""
                className="block col-span-2 font-medium text-gray-900 dark:text-white text-left "
              >
                Jenis Kelamin
              </label>
              <div className="col-span-3 flex flex-row gap-5 ">
                <div className="flex flex-row gap-2 items-center">
                  <input
                    type="radio"
                    name="jenisKelamin"
                    value="Laki"
                    checked={dataForm.jenisKelamin === "Laki"}
                    onChange={handleOnChange}
                  />
                  <label htmlFor="">Laki-Laki</label>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <input
                    type="radio"
                    name="jenisKelamin"
                    value="Perempuan"
                    checked={dataForm.jenisKelamin === "Perempuan"}
                    onChange={handleOnChange}
                  />
                  <label htmlFor="">Perempuan</label>
                </div>
              </div>
            </div>

            <div className="w-[30rem]">
              {/* Alaamt */}
              <div className="grid grid-cols-5 items-center pl-10 w-full">
                <label
                  htmlFor="first_name"
                  className="block col-span-2 font-medium text-gray-900 dark:text-white text-left "
                >
                  Alamat
                </label>
                <input
                  type="text"
                  id="first_name"
                  className=" col-span-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Alamat"
                  required
                  name="alamat"
                  value={dataForm.alamat}
                  onChange={handleOnChange}
                />
              </div>
            </div>

            <div className="w-[30rem]">
              {/* Pekerjaan */}
              <div className="grid grid-cols-5 items-center pl-10 w-full">
                <label
                  htmlFor="first_name"
                  className="block col-span-2 font-medium text-gray-900 dark:text-white text-left "
                >
                  Pekerjaan
                </label>
                <input
                  type="text"
                  id="first_name"
                  className=" col-span-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Pekerjaan"
                  required
                  name="pekerjaan"
                  value={dataForm.pekerjaan}
                  onChange={handleOnChange}
                />
              </div>
            </div>

            <div className="w-[30rem]">
              {/* Diagbnosa */}
              <div className="grid grid-cols-5 items-center pl-10 w-full">
                <label
                  htmlFor="first_name"
                  className="block col-span-2 font-medium text-gray-900 dark:text-white text-left "
                >
                  Diagnosa
                </label>
                <input
                  type="text"
                  id="first_name"
                  className=" col-span-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Diagnosa"
                  required
                  name="diagnosa"
                  value={dataForm.diagnosa}
                  onChange={handleOnChange}
                />
              </div>
            </div>

            <div className="w-[30rem]">
              {/* Waktu Istirahat */}
              <div className="grid grid-cols-5 items-center pl-10 w-full">
                <label
                  htmlFor="first_name"
                  className="block col-span-2 font-medium text-gray-900 dark:text-white text-left "
                >
                  Waktu Istirahat
                </label>
                <input
                  type="text"
                  id="first_name"
                  className=" col-span-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Waktu Istirahat"
                  required
                  name="lamaSakit"
                  value={dataForm.lamaSakit}
                  onChange={handleOnChange}
                />
              </div>
            </div>

            <div className=" w-[30rem] grid grid-cols-5 items-center pl-10 ">
              {/* Tanggal Mulai */}
              <label
                htmlFor=""
                className="block col-span-2 font-medium text-gray-900 dark:text-white text-left "
              >
                Mulai Dari
              </label>

              <input
                type="date"
                className="col-span-3 rounded-lg"
                name="tanggalAwal"
                value={dataForm.tanggalAwal}
                onChange={handleOnChange}
              />
            </div>

            <div className=" w-[30rem] grid grid-cols-5 items-center pl-10 ">
              {/* Tanggal Akhir */}
              <label
                htmlFor=""
                className="block col-span-2 font-medium text-gray-900 dark:text-white text-left "
              >
                Sampai
              </label>

              <input
                type="date"
                className="col-span-3 rounded-lg"
                name="tanggalAkhir"
                value={dataForm.tanggalAkhir}
                onChange={handleOnChange}
              />
            </div>

            <div className="w-[30rem]">
              {/* Kota */}
              <div className="grid grid-cols-5 items-center pl-10 w-full">
                <label
                  htmlFor="first_name"
                  className="block col-span-2 font-medium text-gray-900 dark:text-white text-left "
                >
                  Kota
                </label>
                <input
                  type="text"
                  id="first_name"
                  className=" col-span-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Kota"
                  required
                  name="kotaSurat"
                  value={dataForm.kotaSurat}
                  onChange={handleOnChange}
                />
              </div>
            </div>

            <div className=" w-[30rem] grid grid-cols-5 items-center pl-10 ">
              {/* Tanggal Surat */}
              <label
                htmlFor=""
                className="block col-span-2 font-medium text-gray-900 dark:text-white text-left "
              >
                Tanggal Surat
              </label>

              <input
                type="date"
                className="col-span-3 rounded-lg"
                name="tanggalSurat"
                value={dataForm.tanggalSurat}
                onChange={handleOnChange}
              />
            </div>

            <div className="w-[30rem]">
              {/* Dokter */}
              <div className="grid grid-cols-5 items-center pl-10 w-full">
                <label
                  htmlFor="first_name"
                  className="block col-span-2 font-medium text-gray-900 dark:text-white text-left "
                >
                  Dokter
                </label>
                <input
                  type="text"
                  id="first_name"
                  className=" col-span-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Dokter"
                  required
                  name="namaDokter"
                  value={dataForm.namaDokter}
                  onChange={handleOnChange}
                />
              </div>
            </div>

            <div className="w-[30rem]">
              {/* NIP */}
              <div className="grid grid-cols-5 items-center pl-10 w-full">
                <label
                  htmlFor="first_name"
                  className="block col-span-2 font-medium text-gray-900 dark:text-white text-left "
                >
                  NIP
                </label>
                <input
                  type="text"
                  id="first_name"
                  className=" col-span-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="NIP"
                  required
                  name="NIPDokter"
                  value={dataForm.NIPDokter}
                  onChange={handleOnChange}
                />
              </div>
            </div>
          </div>

          {/* Button */}

          <div className="mx-3 pl-7 mt-5 flex flex-row gap-2 ">
            <a
              type="button"
              className="w-[150px] text-center focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
            >
              Cetak Surat
            </a>

            <a
              href={"#"}
              onClick={(e) => {
                e.preventDefault(); // Mencegah navigasi default
                handlePreview();
              }}
              type="button"
              className="w-[150px] text-center focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Preview Surat
            </a>
          </div>
        </div>
      </div>
    </SidebarComponent>
  );
};

export default suratSakitPage;
