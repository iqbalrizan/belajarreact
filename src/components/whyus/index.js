import "./style.css";
import gambar1 from "../../assets/images/imgwhy1.svg";
import gambar2 from "../../assets/images/imgwhy2.svg";
import gambar3 from "../../assets/images/imgwhy3.svg";
import gambar4 from "../../assets/images/imgwhy4.svg";

const Whyus = () => {
  return (
    <div>
      <section className="whyus" id="whyus">
        <div className="container">
          <div className="row">
            <div className="judul">
              <h1>Why Us?</h1>
              <h2>Mengapa harus pilih Binar Car Rental?</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="content">
                <img src={gambar1} alt="" />
                <h1>Mobil Lengkap</h1>
                <h2>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</h2>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="content">
                <img src={gambar2} alt="" />
                <h1>Harga Murah</h1>
                <h2>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</h2>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="content">
                <img src={gambar3} alt="" />
                <h1>Layanan 24 Jam</h1>
                <h2>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</h2>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="content">
                <img src={gambar4} alt="" />
                <h1>Sopir Profesional</h1>
                <h2>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Whyus;
