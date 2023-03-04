<template>
  <nav>
    <h4><i class="bi bi-house-door-fill"></i> House</h4>
    <div class="right_bx">
        <ul>
            <li><a href="#">Support</a></li>
            <li><a href="#"><i class="bi bi-globe"></i> Language</a></li>
            <li><a href="#">List Your Property</a></li>
        </ul>
        <div class="account_bx">
            <i class="bi bi-app-indicator"></i>
            <i class="bi bi-person"></i>
        </div>
    </div>
  </nav>
</template>

<style scoped>
  nav {
    width: 100%;
    height: 7%;
    margin: 5px auto;
    /* border: 1px solid #000; */
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  nav .right_bx {
    display: flex;
    align-items: center;
  }

  nav .right_bx ul {
    list-style: none;
    display: flex;
    align-items: center;
  }

  nav .right_bx ul li {
    padding: 3px 15px;
  }

  nav .right_bx ul li:nth-last-child(1) {
    border: 1px solid gray;
    border-radius: 20px;
    padding: 3px 20px;
  }

  nav .right_bx ul li:nth-last-child(1) a {
    color: #000;
  }

  nav .right_bx ul li:nth-last-child(1) a:hover {
    color: gray;
  }

  nav .right_bx ul li a {
    text-decoration: none;
    color: gray;
    font-size: 11px;
    font-weight: 500;
    transition: .3s linear;
  }

  nav .right_bx ul li a:hover {
    color: #000;
  }

  nav .right_bx .account_bx {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }

  nav .right_bx .account_bx .bi {
    margin-left: 15px;
    color: gray;
    cursor: pointer;
    transition: .3s linear;
  }

  nav .right_bx .account_bx .bi:hover {
    color: #000;
  }
</style>
