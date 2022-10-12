import "./style.css";
import menu from "../../assets/images/menu.jpg";
import close from "../../assets/images/close.jpg";
const Headers = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="logo">
            <h1>BCR</h1>
          </div>
          <div className="overlay-bg"></div>
          <div className="sidebar">
            <div className="top-sidebar">
              <h3>BCR</h3>
              <div className="close-icon">
                <img src={close} alt="" />
              </div>
            </div>
            <ul className="menu">
              <li>
                <a href="">Our Services</a>
              </li>
              <li>
                <a href="">Why Us</a>
              </li>
              <li>
                <a href="">Testimonial</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
            </ul>
          </div>

          <div className="burger-icon">
            <img src={menu} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Headers;
