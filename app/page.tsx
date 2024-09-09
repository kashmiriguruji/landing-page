import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section>
        <h1>kashmiriguruji.com</h1>
        <h2 className="subtext">Coming Soon ....</h2>
        <div className="mid">
          <img src="/images.jpg" alt="" />
          <h2>Contact</h2>
          <h3>Pt. Pawan Ji Pandita</h3>
          <p>
            Mobile: <a href="tel:8700398329">8700398329</a> /{" "}
            <a href="tel:9899375987">9899375987</a>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:pawanjipandita@gmail.com">
              pawanjipandita@gmail.com
            </a>
          </p>
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
