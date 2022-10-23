import { Link } from "react-router-dom";
import "./style.css";
const Sewamobil = () => {
  return (
    <div>
      <section class="sewamobil">
        <div class="container">
          <div class="wrapper">
            <h1>Sewa Mobil di jakarta Sekarang</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <Link className="btn btn-succes" role="button" to="/cari-mobil">
              Mulai Sewa Mobil
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sewamobil;
