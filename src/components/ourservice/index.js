import "./style.css";
import gambar1 from "../../assets/images/imgourservice.png";
import imgcheck from "../../assets/images/imgceklis.svg";

const Ourservices = () => {
  return (
    <div>
      <section className="ourservices" id="our-services">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="images">
                <img src={gambar1} alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="textservices">
                <h3>Best Car Rental for any kind of trip in (Lokasimu)!</h3>
                <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                <ul>
                  <img src={imgcheck} alt="" />
                  <li>Sewa Mobil Dengan Supir di Bali 12 Jam</li>
                </ul>
                <ul>
                  <img src={imgcheck} alt="" />
                  <li>Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
                </ul>
                <ul>
                  <img src={imgcheck} alt="" />
                  <li>Sewa Mobil Jangka Panjang Bulanan</li>
                </ul>
                <ul>
                  <img src={imgcheck} alt="" />
                  <li>Gratis Antar - Jemput Mobil di Bandara</li>
                </ul>
                <ul>
                  <img src={imgcheck} alt="" />
                  <li>Layanan Airport Transfer / Drop In Out</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ourservices;
