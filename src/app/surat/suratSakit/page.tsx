"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { format } from "date-fns";
import { id } from "date-fns/locale";
// @ts-ignore
import logo from "../../../assets/LOGO_JADI.png";
import { useSuratStore } from "@/app/Utility/Store/useSuratStore";
import ReactQR from "react-qr-code";

interface SuratSakitProps {
  noSurat: string;
  nama: string;
  tempatLahir: string;
  tanggalLahir: string;
  umur: string;
  jenisKelamin: string;
  alamat: string;
  pekerjaan: string;
  diagnosa: string;
  lamaSakit: string;
  tanggalAwal: string;
  tanggalAkhir: string;
  kotaSurat: string;
  tanggalSurat: string;
  namaDokter: string;
  NIPDokter: string;
}

const page = () => {
  const {
    noSurat,
    nama,
    tempatLahir,
    tanggalLahir,
    umur,
    jenisKelamin,
    alamat,
    pekerjaan,
    diagnosa,
    lamaSakit,
    tanggalAwal,
    tanggalAkhir,
    kotaSurat,
    tanggalSurat,
    namaDokter,
    NIPDokter,
  } = useSuratStore();

  const barcodeValue = `
    Dokumen ini sah, 
    Pasien ${nama}
    Tanggal Lahir ${format(tanggalLahir, "dd MMMM yyyy", { locale: id })}
    Alamat : ${alamat}
    telah diberikan surat keterangan sakit selama ${lamaSakit} hari terhitung dari ${format(
    tanggalAwal,
    "dd MMMM yyyy",
    { locale: id }
  )} di klinik Salam Medika oleh ${namaDokter}
  `;

  return (
    <div className="w-[559px] h-[792px] text-xs border border-black">
      {/* Isi Surat */}
      <div className="m-5 ">
        {/* KOP SURAT */}
        <div className="p-2 grid grid-cols-5 border-b border-black">
          <div className="col-span-1 flex justify-center items-center">
            <Image src={logo} alt="" width={65} height={65} />
          </div>
          <div className="col-span-3 flex gap-1 flex-col items-center text-center ">
            <h1 className="font-bold text-[1rem]">Klinik Salam Medika</h1>
            <h2 className="font-semibold font text-[0.6rem] leading-[0.8rem] tracking-wider">
              Jl. Mawar Perumahan Ratu Indah Blok B No.01 <br />
              Kel. 20 Ilir D-IV Kec. Ilir Timur I, Kota Palembang
              <br /> Sumatera Selatan 30123
            </h2>
          </div>
        </div>

        {/* ISi */}
        <div className="flex flex-col gap-2 ">
          {/* JUDUL */}
          <div className="mt-3 flex flex-col gap-[0.2rem] items-center">
            <div className="px-2 border-b-2 pb-[0.1rem] border-black">
              <h1 className="text-[0.8rem] font-bold">
                Surat Keterangan Sakit
              </h1>
            </div>
            <h2 className="text-[0.7rem] flex flex-row">
              No :{" "}
              <div className="border-b border-black pl-1 pr-3">{noSurat}</div>
            </h2>
          </div>

          {/* ISI SURAT */}
          <div className="mt-3 text-[0.65rem] flex flex-col gap-3">
            <p>Yang bertanda tangan dibawah ini, menerangkan bahwa :</p>

            {/* Detail data Diri */}
            <div className="ml-5 flex flex-col gap-3 ">
              {/* Nama */}
              <div className=" grid grid-cols-4 ">
                <label htmlFor="" className="col-span-1">
                  Nama
                </label>
                <div className="col-span-3 flex flex-row w-full ">
                  :{" "}
                  <div className="w-full ml-1 pb-[0.1rem] border-b-[0.3px] border-black">
                    {nama}
                  </div>
                </div>
              </div>

              {/* TTL */}
              <div className=" grid grid-cols-4 ">
                <label htmlFor="" className="col-span-1">
                  Tempat / Tanggal Lahir
                </label>
                <div className="col-span-3 flex flex-row w-full ">
                  :{" "}
                  <div className="w-full ml-1 pb-[0.1rem] border-b-[0.3px] border-black">
                    {tempatLahir},{" "}
                    {format(tanggalLahir, "dd MMMM yyyy", { locale: id })}
                  </div>
                </div>
              </div>

              {/* UMUR */}
              <div className=" grid grid-cols-4 ">
                <label htmlFor="" className="col-span-1">
                  Umur
                </label>
                <div className="col-span-3 flex flex-row w-full ">
                  :{" "}
                  <div className="w-full ml-1 pb-[0.1rem] border-b-[0.3px] border-black">
                    {umur} Tahun
                  </div>
                </div>
              </div>

              {/* Jenis Kelamin */}
              <div className=" grid grid-cols-4 ">
                <label htmlFor="" className="col-span-1">
                  Jenis Kelamin
                </label>
                <div className="col-span-3 flex flex-row w-full ">
                  :{" "}
                  <div className="w-full ml-1 pb-[0.1rem] ">
                    <div className="flex gap-10 ">
                      <div className="inline-flex items-center">
                        <label
                          className="relative flex items-center cursor-pointer"
                          htmlFor="html"
                        >
                          <input
                            name="jenisKelamin"
                            type="radio"
                            className="h-3 w-3 text-black focus:ring-1 focus:ring-black  transition-all"
                            id="Laki"
                            checked={jenisKelamin === "Laki" ? true : false}
                            onChange={() => {}}
                            value="Laki"
                          />
                          {/* <span className="absolute bg-slate-800 w-5 h-5   rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span> */}
                        </label>
                        <label
                          className={`ml-2 text-slate-600 cursor-pointer text-[0.7rem] ${
                            jenisKelamin === "Laki" ? "" : "line-through"
                          }`}
                          htmlFor="html"
                        >
                          Laki - Laki
                        </label>
                      </div>

                      <div className="inline-flex items-center">
                        <label
                          className="relative flex items-center cursor-pointer"
                          htmlFor="react"
                        >
                          <input
                            name="jenisKelamin"
                            type="radio"
                            className="h-3 w-3 text-black focus:ring-1 focus:ring-black  transition-all "
                            id="Perempuan"
                            checked={
                              jenisKelamin === "Perempuan" ? true : false
                            }
                            onChange={() => {}}
                            value="Perempuan"
                          />
                          {/* <span className="absolute bg-slate-800 w-5 h-5 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span> */}
                        </label>
                        <label
                          className={`ml-2 text-slate-600 cursor-pointer text-[0.7rem] ${
                            jenisKelamin === "Perempuan" ? "" : "line-through"
                          }`}
                          htmlFor="react"
                        >
                          Perempuan
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Alamat */}
              <div className=" grid grid-cols-4 ">
                <label htmlFor="" className="col-span-1">
                  Alamat
                </label>
                <div className="col-span-3 flex flex-row w-full ">
                  :{" "}
                  <div className="w-full ml-1 pb-[0.1rem] border-b-[0.3px] border-black">
                    {alamat}
                  </div>
                </div>
              </div>

              {/* Pekerjaan */}
              <div className=" grid grid-cols-4 ">
                <label htmlFor="" className="col-span-1">
                  Pekerjaan
                </label>
                <div className="col-span-3 flex flex-row w-full ">
                  :{" "}
                  <div className="w-full ml-1 pb-[0.1rem] border-b-[0.3px] border-black">
                    {pekerjaan}
                  </div>
                </div>
              </div>

              {/* Diagnosa */}
              <div className=" grid grid-cols-4 ">
                <label htmlFor="" className="col-span-1">
                  Diagnosa
                </label>
                <div className="col-span-3 flex flex-row w-full ">
                  :{" "}
                  <div className="w-full ml-1 pb-[0.1rem] border-b-[0.3px] border-black">
                    {diagnosa}
                  </div>
                </div>
              </div>
            </div>

            {/* Keterangan */}
            <div className="mt-2 flex flex-col gap-1">
              <p>
                Oleh karena <span className="tracking-widest">SAKIT</span>,
                perlu diberikan{" "}
                <span className="tracking-widest">ISTIRAHAT</span>
              </p>
              <div className="flex flex-row gap-[0.3rem]">
                Selama{" "}
                <div className="font-bold w-6 pb-1 border-b border-gray-400 text-center">
                  {lamaSakit}
                </div>{" "}
                hari terhitung mulai tanggal
                <div className="font-bold pb-1 border-b border-gray-400 text-center">
                  {format(tanggalAwal, "dd MMMM yyyy", { locale: id })}
                </div>
                s/d
                <div className="font-bold  pb-1 border-b border-gray-400 text-center">
                  {format(tanggalAkhir, "dd MMMM yyyy", { locale: id })}
                </div>
              </div>
              <p>
                Demikian surat keterangan ini dibuat dengan sebenarnya dan untuk
                dipergunakan semestinya.
              </p>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-10 grid grid-cols-3 ">
          <div className="col-span-1 flex flex-row items-center text-center justify-center ">
            <ReactQR value={barcodeValue} size={130} />
          </div>
          <div className="col-span-2 flex flex-col justify-end items-end text-[0.7rem] ">
            {/* Detail Surat */}
            <div className="flex flex-row gap-1">
              <div className="px-7 pb-[0.1rem] border-b border-black">
                {kotaSurat}
              </div>
              <div>,</div>
              <div className="px-7 pb-[0.1rem] border-b border-black">
                {format(tanggalSurat, "dd MMMM yyyy", { locale: id })}
              </div>
            </div>

            {/* TANDA TANGAN */}
            <div className="mt-32 ">
              {/* NAMA DOKTEr */}
              <div className="px-7 text-xs pb-[0.1rem] font-semibold border-b border-black">
                {namaDokter}
              </div>

              <div className="mt-1 ">{NIPDokter}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
