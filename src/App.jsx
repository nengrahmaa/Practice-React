import Header from "./components/Header";
import Content from "./components/Content";
import { useState } from "react";

function App() {
  const [products] = useState(
    [
      {
        id: 1,
        name: "Lamborghini Aventador",
        price: 15000000000,
        color: "Red",
        image: "https://prod.cosy.bmw.cloud/bmvis/cosySec?COSY-EU-100-2545J3qAHyFne5cRoHSWRzMESDsVcRoH7QRzMESV59VMb3G6bUJ1rjGRPixrQbUoaFoGq0zdti3Ql38mrjGd8RurQbCUQMs2q0zS33W8J13882q0zAaGU4l382hhq0zkRNSQBL4QSW8zLAd8W8J1ExSnQNUMESQdo3o3RCqoQEdcNq0zkdHNqoQqRrjGzIEtN3WCIqx8W8zWu3n7qogqaRk5l3ilUbtjcRScH8wzMbnMdo13yJGy536nrQ%25r9R1HW8zWubxdqogqaJh%25l3ilUQTUcRScH7QQMbnMd03RyJGy5B0ErQ%25r9Yp3W8zWuEfGqogqaGQFl3ilU%2575cRScHz08MbnMdgmKyJGy5i8KrQ%25r9SBYW8zWunCjqogqaG4zl3ilU%25WFcRScHzwgMbnMdgCuyJGy5i4FrQ%25r9sEGW8zWuKG%25qogqaD%25Fl3ilUCQzcRScH48AMbnMdeoqyJGy5m3ArQ%25r9si8W8zWuoYEqogqa3GIl3ilUR3AcRScHbDBMbnMdJf3yJGy55obrQ%25r99oUW8zWuuaCqogqaakel38X5KRzAHyFnJolayJROlBg3FHd5cRow3GN4MESb8JmMb36q0zMbSb459Mb35q0zRaUH",
        desc: "Supercar flagship dari Lamborghini dengan mesin V12 dan desain agresif yang mendefinisikan kekuatan dan kemewahan.",
        detail: "V12 engine, 0-100 km/h dalam 2.9 detik, top speed 350 km/h",
      },
      {
        id: 2,
        name: "Lamborghini Huracán",
        price: 10000000000,
        color: "Green",
        image: "https://source.unsplash.com/600x400/?lamborghini,huracan",
        desc: "Huracán menampilkan keseimbangan antara gaya dan performa tinggi dengan mesin V10 yang responsif.",
        detail: "V10 engine, 0-100 km/h dalam 3.2 detik, top speed 325 km/h",
      },
      {
        id: 3,
        name: "Lamborghini Urus",
        price: 8500000000,
        color: "Yellow",
        image: "https://source.unsplash.com/600x400/?lamborghini,urus",
        desc: "SUV super mewah dengan kekuatan seperti mobil sport namun kenyamanan ala kendaraan keluarga.",
        detail: "V8 twin-turbo, 0-100 km/h dalam 3.6 detik, top speed 305 km/h",
      },
      {
        id: 4,
        name: "Lamborghini Revuelto",
        price: 20000000000,
        color: "Orange",
        image: "https://source.unsplash.com/600x400/?lamborghini,revuelto",
        desc: "Mobil hybrid generasi terbaru Lamborghini yang memadukan tenaga listrik dan bensin.",
        detail: "Hybrid V12, 0-100 km/h dalam 2.5 detik, top speed 355 km/h",
      },
      {
        id: 5,
        name: "Lamborghini Veneno",
        price: 30000000000,
        color: "Silver",
        image: "https://source.unsplash.com/600x400/?lamborghini,veneno",
        desc: "Edisi terbatas super eksklusif dari Lamborghini dengan performa dan desain ekstrem.",
        detail: "V12 engine, 0-100 km/h dalam 2.8 detik, top speed 355 km/h",
      },
      {
        id: 6,
        name: "Lamborghini Sian",
        price: 22000000000,
        color: "Gold",
        image: "https://source.unsplash.com/600x400/?lamborghini,sian",
        desc: "Mobil hybrid pertama Lamborghini dengan teknologi supercapacitor inovatif.",
        detail: "V12 + hybrid, 0-100 km/h dalam 2.8 detik, top speed 350 km/h",
      },
      {
        id: 7,
        name: "Lamborghini Centenario",
        price: 27000000000,
        color: "Black",
        image: "https://source.unsplash.com/600x400/?lamborghini,centenario",
        desc: "Edisi spesial memperingati 100 tahun pendiri Lamborghini, sangat langka dan bernilai koleksi.",
        detail: "V12 engine, 0-100 km/h dalam 2.8 detik, top speed 350 km/h",
      },
      {
        id: 8,
        name: "Lamborghini Murciélago",
        price: 6000000000,
        color: "White",
        image: "https://source.unsplash.com/600x400/?lamborghini,murcielago",
        desc: "Supercar klasik dari era 2000-an dengan performa gahar dan suara mesin menggema.",
        detail: "V12 engine, 0-100 km/h dalam 3.3 detik, top speed 330 km/h",
      },
      {
        id: 9,
        name: "Lamborghini Gallardo",
        price: 5000000000,
        color: "Blue",
        image: "https://source.unsplash.com/600x400/?lamborghini,gallardo",
        desc: "Gallardo adalah salah satu model terlaris Lamborghini sepanjang masa.",
        detail: "V10 engine, 0-100 km/h dalam 3.9 detik, top speed 325 km/h",
      },
      {
        id: 10,
        name: "Lamborghini Reventón",
        price: 32000000000,
        color: "Grey",
        image: "https://source.unsplash.com/600x400/?lamborghini,reventon",
        desc: "Desain terinspirasi dari pesawat jet tempur, sangat agresif dan eksklusif.",
        detail: "V12 engine, 0-100 km/h dalam 3.4 detik, top speed 340 km/h",
      },
      {
        id: 11,
        name: "Lamborghini Countach LPI 800-4",
        price: 21000000000,
        color: "Purple",
        image: "https://source.unsplash.com/600x400/?lamborghini,countach",
        desc: "Versi modern dari Countach legendaris dengan desain retro-futuristik.",
        detail: "V12 + hybrid, 0-100 km/h dalam 2.8 detik, top speed 355 km/h",
      },
      {
        id: 12,
        name: "Lamborghini Diablo",
        price: 7000000000,
        color: "Navy",
        image: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/0_facelift_2025/homepage/models/temerario/familyChooser-Temerario_0.png",
        desc: "Supercar 90-an legendaris dengan aura klasik dan performa tinggi.",
        detail: "V12 engine, 0-100 km/h dalam 3.5 detik, top speed 325 km/h",
      },
    ]);

  return (
    <>
      <Header />
      <Content products={products} />
    </>
  );
}

export default App;
