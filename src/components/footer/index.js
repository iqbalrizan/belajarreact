import footer1 from "../../assets/images/iconfooter1.jpg";
import footer2 from "../../assets/images/iconfooter2.jpg";
import footer3 from "../../assets/images/iconfooter3.jpg";
import footer4 from "../../assets/images/iconfooter4.jpg";
import footer5 from "../../assets/images/iconfooter5.jpg";
import footer6 from "../../assets/images/iconfooter6.jpg";
import "./style.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="address">
              <h1>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</h1>
              <h1>binarcarrental@gmail.com</h1>
              <h1>081-233-334-808</h1>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <ul className="list">
              <li>
                <a href="#our-services">Our Services</a>
              </li>
              <li>
                <a href="#why-us">Why Us</a>
              </li>
              <li>
                <a href="#testimonial">Testimonial</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="connect">
              <h1>Connect with us</h1>
              <a href="https://" target="_blank">
                <img src={footer1} alt="" />
              </a>
              <a href="https://" target="_blank">
                <img src={footer2} alt="" />
              </a>
              <a href="https://" target="_blank">
                <img src={footer3} alt="" />
              </a>
              <a href="https://" target="_blank">
                <img src={footer4} alt="" />
              </a>
              <a href="https://" target="_blank">
                <img src={footer5} alt="" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="copyright">
              <h1>&copy; Copyright Binar 2022</h1>
              <img src={footer6} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
