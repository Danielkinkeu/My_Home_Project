<template>
  <div class="content">
    <div class="cont_bx">
      <h1>
        Modren <br />
        house
      </h1>
      <p>3 bedrooms, 1 kitchen, 2 bathrooms</p>
      <div class="weather">
        <h6>42 °C <span>Very Hot</span></h6>
      </div>
      <div class="btns_cont">
        <i class="bi bi-arrow-left" id="btn_left"></i>
        <i class="bi bi-arrow-right" id="btn_right"></i>
      </div>
      <div class="images_bx">
        <div class="card">
          <img src="../assets/images/img4.jpg" alt="" />
        </div>
        <div class="card">
          <img src="../assets/images/im2.jpg" alt="" />
        </div>
        <div class="card">
          <img src="../assets/images/im3.jpg" alt="" />
          <h6 id="h6">+6</h6>
        </div>
      </div>
    </div>
    <div class="choose_bx">
      <div class="stay_bx">
        <button><i class="bi bi-house-door-fill"></i></button>
        <button><i class="bi bi-star-fill"></i></button>
        <button><i class="bi bi-tv-fill"></i></button>
      </div>
      <div class="select">
        <div class="card">
          <h5>City</h5>
          <input type="text" value="Dubai" />
          <input type="text" value="United Arab Emirates" />
        </div>
        <div class="card">
          <h5>People</h5>
          <input type="text" value="4 People" id="people" />
          <button id="people_less">Less</button>
          <button id="people_more">More</button>
        </div>
        <div class="card">
          <div class="left_box">
            <h5>CHECK IN</h5>
            <div class="date">
              <h3 id="checkin_data">Sat, 05 Jan</h3>
              <input type="date" id="checkin" value="2022-09-11" />
              <i class="bi bi-calendar2-week-fill"></i>
            </div>
            <button>Less</button>
            <button>More</button>
          </div>
          <div class="right_box">
            <h5>CHECK OUT</h5>
            <div class="date">
              <h3 id="checkout_data">Sun, 06 Jan</h3>
              <input type="date" id="checkout" />
              <i class="bi bi-calendar2-week-fill"></i>
            </div>
            <button id="checkout_less">Less</button>
            <button id="checkout_more">More</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.content {
  position: relative;
  width: 100%;
  height: 93%;
  /* border: 1px solid #000; */
  z-index: 5;
}

.content::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 80%;
  background: var(--background);
  background-position-y: 0px;
  transform: scaleX(-1);
  border-radius: 20px;
  z-index: -1;
}

.content .cont_bx {
  width: 500px;
  height: auto;
  color: #000;
  padding: 50px;
  /* border: 1px solid #000; */
}

.content .cont_bx h1 {
  font-size: 55px;
  line-height: 60px;
  font-weight: 600;
}

.content .cont_bx p {
  font-size: 13px;
  font-weight: 400;
  color: rgb(100, 100, 100);
  margin-top: 10px;
}

.content .cont_bx .weather {
  margin-top: 80px;
}

.content .cont_bx .weather h6 {
  color: rgb(64, 64, 64);
  font-size: 10px;
  font-weight: 600;
}

.content .cont_bx .weather h6 span {
  margin-left: 5px;
}

.content .cont_bx .btns_cont {
  margin-top: 10px;
}

.content .cont_bx .btns_cont i {
  border: 1px solid gray;
  padding: 0px 3.3px;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s linear;
}

.content .cont_bx .btns_cont i:hover {
  color: #000;
  background: rgb(0, 0, 0, 0.1);
}

.content .cont_bx .images_bx {
  position: absolute;
  right: 20px;
  top: 40px;
  /* border: 1px solid #000; */
  width: 50px;
}

.content .cont_bx .images_bx .card {
  position: relative;
  width: 100%;
  height: 50px;
  margin-top: 10px;
  background: rgb(237, 237, 237, 0.3);
  padding: 5px;
  border-radius: 8px;
}

.content .cont_bx .images_bx .card img {
  width: 100%;
  height: 100%;
  border-radius: 8px;
}

.content .cont_bx .images_bx .card h6 {
  position: absolute;
  top: 15px;
  left: 15px;
  font-size: 14px;
  /* z-index: 99999; */
  color: #fff;
}

.content .choose_bx {
  position: relative;
  width: 90%;
  height: auto;
  margin: auto;
  /* border: 1px solid #000; */
}

.content .choose_bx .stay_bx {
  display: flex;
  align-items: center;
}

.content .choose_bx .stay_bx button {
  padding: 10px 30px;
  background: #000;
  color: #fff;
  border: none;
  outline: none;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  transition: 0.3s linear;
}

.content .choose_bx .stay_bx button:hover {
  background: #fff;
  color: #000;
}

.content .choose_bx .stay_bx button:nth-child(1) {
  border-radius: 10px 0px 0px 0px;
  background: #fff;
  color: #000;
}

.content .choose_bx .stay_bx button:nth-last-child(1) {
  border-radius: 0px 10px 0px 0px;
}

.content .choose_bx .stay_bx button i {
  margin-right: 5px;
}

.content .choose_bx .select {
  width: 100%;
  height: 135px;
  background: #fff;
  border-radius: 0px 10px 10px 10px;
  position: relative;
  padding: 10px 20px;
  box-shadow: 0px 5px 15px -10px rgb(214, 214, 214);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.content .choose_bx .select .card {
  width: 26%;
  height: 90%;
  border: 2px solid rgb(226, 226, 226, 0.7);
  border-radius: 10px;
  padding: 10px 0px 10px 30px;
}

.content .choose_bx .select .card:nth-last-child(1) {
  width: 46%;
}

.content .choose_bx .select .card h5 {
  font-size: 16px;
  font-weight: 500;
}

.content .choose_bx .select .card input {
  border: none;
  outline: none;
  margin-top: 5px;
  font-size: 20px;
  font-weight: 700;
  background: none;
  font-family: "Poppins", sans-serif;
}

.content .choose_bx .select .card input:nth-child(3) {
  font-size: 12px;
  font-weight: 500;
  color: gray;
}

.content .choose_bx .select .card button {
  border: none;
  background: none;
  outline: none;
  margin-right: 20px;
  margin-top: 5px;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  transition: 0.3s linear;
}

.content .choose_bx .select .card button:hover {
  border-bottom: 2px solid rgb(177, 177, 177);
}

.content .choose_bx .select .card:nth-child(3) {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
}

.content .choose_bx .select .card:nth-child(3) .date {
  position: relative;
  display: flex;
  align-items: center;
  /* border: 1px solid #000; */
}

.content .choose_bx .select .card:nth-child(3) .date input {
  width: 25px;
  height: 30px;
  margin-left: 10px;
  z-index: 999999999999999999999999;
  opacity: 0;
}

.content .choose_bx .select .card:nth-child(3) .date i {
  position: absolute;
  left: 85%;
  font-size: 23px;
  z-index: -1;
}

.content .choose_bx .select .card:nth-child(3) .date h3 {
  width: 120px;
}

.content .choose_bx .select .card:nth-child(3) .date h5 {
  font-size: 13px;
  font-weight: 600;
}
</style>
