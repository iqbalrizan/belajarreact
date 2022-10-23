import React, { useState, useEffect } from "react";
import "./style.css";
import Main from "../../components/main";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Card, Row } from "react-bootstrap";

const Carimobil = () => {
  const [cars, setCars] = useState([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [price, setPrice] = useState(null);
  const [isRented, setIsRented] = useState(false);
  const [visible, setVisible] = useState(false);

  const handlePrice = (e) => {
    const val = e.target.value;
    if (val === "1") {
      setMinPrice(0);
      setMaxPrice(400000);
    }

    if (val === "2") {
      setMinPrice(400000);
      setMaxPrice(600000);
    }

    if (val === "3") {
      setMinPrice(600000);
      setMaxPrice(10000000);
      // setMaxPrice(600000);
    }
  };

  const handleSubmit = () => {
    const params = {
      name,
      minPrice,
      maxPrice,
      isRented: Boolean(isRented),
      category,
      page: 1,
      pageSize: 9,
    };

    axios
      .get("https://bootcamp-rent-cars.herokuapp.com/customer/v2/car", { params })
      .then((res) => setCars(res.data.cars))
      .catch((err) => console.log(err));

    setVisible(false);
  };

  console.log(cars);
  return (
    <section className="carimobil">
      <div onClick={() => setVisible(false)} className={`overlay-bg-desktop ${visible ? "menu-active" : ""}`}></div>
      <div className="bagianhero">
        <Main />
      </div>
      {/* !! Batas !!! */}
      {/* !!! Batas !!! */}
      <div className="container">
        <div className="row">
          <div className="cari" onClick={() => setVisible(true)}>
            <div className="col-sm-6 col-lg-3 cariitem">
              <h3>Nama Mobil</h3>
              <Form.Control size="sm" type="text" placeholder="Ketik nama/tipe mobil" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="col-sm-6 col-lg-3 cariitem">
              <h3>Kategori</h3>
              <div className="boxselect">
                <Form.Select aria-label="Default select example" className="selecttext" value={category} onChange={(e) => setCategory(e.target.value)}>
                  <option hidden>Masukkan Kapasitas Mobil </option>
                  <option value="small"> 2 - 4 Orang </option>
                  <option value="medium"> 4 - 6 Orang </option>
                  <option value="large"> 6 - 8 Orang </option>
                </Form.Select>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 cariitem">
              <h3>Harga</h3>
              <div className="boxselect">
                <Form.Select aria-label="Default select example" className="selecttext" onChange={(e) => handlePrice(e)}>
                  <option hidden>Masukkan Harga Sewa per Hari </option>
                  <option value="1"> Rp. 400.000 </option>
                  <option value="2"> Rp. 400.000 - Rp. 600.000</option>
                  <option value="3"> Rp. 600.000 </option>
                </Form.Select>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 cariitem">
              <h3>Status</h3>
              <div className="withbtn">
                <div className="boxselect">
                  <Form.Select
                    aria-label="Default select example"
                    className="selecttext"
                    value={isRented}
                    onChange={(e) => {
                      setIsRented(e.target.value);
                      alert(e.target.value);
                    }}
                  >
                    <option hidden>Status </option>
                    <option value="true"> Disewa </option>
                    <option value="false"> Rede </option>
                  </Form.Select>
                </div>
                <Link className="tombolcari">
                  <Button onClick={() => handleSubmit()}>Cari Mobil</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        {cars.length > 0 &&
          cars.map((car) => (
            <Card key={car.id}>
              <img src={car.image} />
              <p>{car.name}</p>
              <Row>
                <p>{`${car.price} / hari`}</p>
              </Row>
              <p>{car.desc}</p>
              <a className="haha" href={`/${car.id}`}>
                {" "}
                Detail{" "}
              </a>
            </Card>
          ))}
      </div>
    </section>
  );
};
export default Carimobil;
