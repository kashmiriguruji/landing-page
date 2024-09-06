import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section>
        <h1>kashmiriguruji.com</h1>
        <div className="mid">
          <img src="/images.jpg" alt="" />
          <h2>Contact</h2>
          <h3>Pt. Pawan Ji Pandita</h3>
          <p>Mobile: 8700398329 / 9899375987</p>
          <p>Email: pawanjipandita@gmail.com</p>
          <p>
            Address: 14 C, Pocket - C, Mayur Vihar, Phase II, New Delhi - 110091
          </p>
        </div>
      </section>
      <footer>
        <p>Koshur Sanaskar Jagrati Mission Trust (Regd.)</p>
      </footer>
    </main>
  );
}
