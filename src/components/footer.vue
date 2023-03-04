<template>
  <footer class="footer">
    <div class="container_footer">
      <div class="row">
        <div class="footer-col">
          <h4>MyHome</h4>
          <ul>
            <li><a href="#">A propos</a></li>
            <li><a href="#">Nos Service</a></li>
            <li><a href="#">Politque de confidentielite</a></li>
            <li><a href="#">affiliate program</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Nous Contacter</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Je suis Agents</a></li>
            <li><a href="#">Je suis Proprietaire</a></li>
            <li><a href="#">Autres</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>online shop</h4>
          <ul>
            <li><a href="#">watch</a></li>
            <li><a href="#">bag</a></li>
            <li><a href="#">shoes</a></li>
            <li><a href="#">dress</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Suivez nous</h4>
          <div class="social-links">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <div class="copyright-text">
    <p>Copyright &copy; 2023 All Rights Reserved by <a href="#">MyHome</a>.</p>
  </div>
</template>
<style scoped>
.copyright-text {
  margin: 0;
  padding-bottom: 10px;
  padding-top: 7px;
  text-align: center;
  width: 100%;
  color: #bbbbbb;
  font-size: 15px;
  background-color: #24262b;
  bottom: 0;
  position: absolute;
}
.copyright-text p {
  margin: 0;
  padding: 0;
}
.container_footer {
  max-width: 1170px;
  margin: auto;
}
.row {
  display: flex;
  flex-wrap: wrap;
}
.footer {
  background-color: white;
  padding: 70px 0;
}
.footer-col {
  width: 25%;
  padding: 0 15px;
}
.footer-col h4 {
  font-size: 18px;
  color: #24262b;
  text-transform: capitalize;
  margin-bottom: 35px;
  font-weight: 500;
  position: relative;
}
.footer-col h4::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -10px;
  background-color: #e91e63;
  height: 2px;
  box-sizing: border-box;
  width: 50px;
}
.footer-col ul li:not(:last-child) {
  margin-bottom: 10px;
}
.footer-col ul li a {
  font-size: 16px;
  text-transform: capitalize;
  color: #ffffff;
  text-decoration: none;
  font-weight: 300;
  color: #24262b;
  display: block;
  transition: all 0.3s ease;
}
.footer-col ul li a:hover {
  color: black;
  padding-left: 8px;
  font-weight: 600;
}
.footer-col .social-links a {
  display: inline-block;
  height: 40px;
  width: 40px;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 0 10px 10px 0;
  text-align: center;
  line-height: 40px;
  border-radius: 50%;
  color: #24262b;
  transition: all 0.5s ease;
}
.footer-col .social-links a:hover {
  color: #ffffff;
  background-color: #24262b;
}

/*responsive*/
@media (max-width: 767px) {
  .footer-col {
    width: 50%;
    margin-bottom: 30px;
  }
}
@media (max-width: 574px) {
  .footer-col {
    width: 100%;
  }
}
</style>
