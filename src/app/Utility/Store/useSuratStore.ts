import { create } from "zustand";

interface SuratState {
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

  setNoSurat: (noSurat: string) => void;
  setNama: (nama: string) => void;
  setTempatLahir: (tempatLahir: string) => void;
  setTanggalLahir: (tanggalLahir: string) => void;
  setUmur: (umur: string) => void;
  setJenisKelamin: (jenisKelamin: string) => void;
  setalamat: (alamat: string) => void;
  setpekerjaan: (pekerjaan: string) => void;
  setdiagnosa: (diagnosa: string) => void;
  setlamaSakit: (lamaSakit: string) => void;
  settanggalAwal: (tanggalAwal: string) => void;
  settanggalAkhir: (tanggalAkhir: string) => void;
  setkotaSurat: (kotaSurat: string) => void;
  settanggalSurat: (tanggalSurat: string) => void;
  setnamaDokter: (namaDokter: string) => void;
  setNIPDokter: (NIPDokter: string) => void;
}

export const useSuratStore = create<SuratState>((set) => ({
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

  setNoSurat: (noSurat) => set({ noSurat }),
  setNama: (nama) => set({ nama }),
  setTempatLahir: (tempatLahir) => set({ tempatLahir }),
  setTanggalLahir: (tanggalLahir) => set({ tanggalLahir }),
  setUmur: (umur) => set({ umur }),
  setJenisKelamin: (jenisKelamin) => set({ jenisKelamin }),
  setalamat: (alamat) => set({ alamat }),
  setpekerjaan: (pekerjaan) => set({ pekerjaan }),
  setdiagnosa: (diagnosa) => set({ diagnosa }),
  setlamaSakit: (lamaSakit) => set({ lamaSakit }),
  settanggalAwal: (tanggalAwal) => set({ tanggalAwal }),
  settanggalAkhir: (tanggalAkhir) => set({ tanggalAkhir }),
  setkotaSurat: (kotaSurat) => set({ kotaSurat }),
  settanggalSurat: (tanggalSurat) => set({ tanggalSurat }),
  setnamaDokter: (namaDokter) => set({ namaDokter }),
  setNIPDokter: (NIPDokter) => set({ NIPDokter }),
}));
