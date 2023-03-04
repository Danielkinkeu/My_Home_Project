<template>
    <div class="card">
        <img src="img/A maison de passe interior design.jpg" alt="">
        <div class="content">
            <i class="bi bi-balloon-heart"></i>
            <div class="cont">
                <h4 _msttexthash="124956" _msthash="27">Abou Dhabi</h4>
                <p _msttexthash="262938" _msthash="28">Émirats Arb Unis</p>
            </div>
        </div>
    </div>
</template>
<style scoped>
.card {
    position: relative;
    width: 180px;
    height: 260px;
    border-radius: 15px;
    /* border: 1px solid #000; */
}

.card img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
}
 .card .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    z-index: 999;
}

.card .content .bi {
    position: absolute;
    right: 15px;
    top: 10px;
    color: #fff;
}

.card .content .bi::after {
    content: '';
    position: absolute;
    width: 165%;
    height: 110%;
    background: rgb(194, 194, 194, .3);
    left: -35%;
    top: -3px;
    border-radius: 50%;
    z-index: -1;
}

.card .content .cont {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 20%;
}

.card .content .cont::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgb(245, 245, 245, .1);
    backdrop-filter: blur(5px);
    border-radius: 0px 0px 13px 13px;
    z-index: -1;
}

.card .content .cont h4 {
    color: #fff;
    padding: 10px 0px 0px 15px;
    line-height: 5px;
}

.card .content .cont p {
    color: #fff;
    padding: 10px 0px 0px 15px;
    font-size: 12px;
}
</style>