<style scoped>
    .box {
        width: 100%;
        margin: auto;
        margin-top: 50px;
        display: flex;
    }

    .box .img_bx,
    .cont_box {
        width: 50%;
        height: 100%;
        /* border: 1px solid #000; */
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .box .img_bx img {
        width: 85%;
        border-radius: 5px;
    }
    .box .cont_box {
        flex-direction: column;
        align-items: flex-start;
    }
    .box .cont_box h6 {
        position: relative;
    }
    .box .cont_box h6 span {
        margin-left: 25px;
    }
    .box .cont_box h6::before {
        content: '';
        position: absolute;
        width: 20px;
        height: 1.5px;
        background: rgb(136, 136, 136);
        top: 7px;
    }
    .box .cont_box h1 {
        font-weight: 600;
        margin: 10px 0px;
    }
    .box .cont_box p {
        font-size: 12px;
    }
    .box .cont_box ul {
        list-style-type: none;
        flex-wrap: wrap;
        margin-left: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .box .cont_box ul li {
        position: relative;
        font-size: 13px;
        font-weight: bold;
        width: 200px;
        /* border: 1px solid #000; */
        margin-top: 20px;
    }
    .box .cont_box ul li::before {
        content: '';
        position: absolute;
        width: 5px;
        height: 5px;
        background: skyblue;
        border-radius: 50%;
        left: -20px;
        top: 8px;
    }
</style>

<template>
    <div class= "box">
            <div class="img_bx">
                <img src="img/317e7c5f5d69514a14d0168bdf266a7f.jpg" alt="">
            </div>
            <div class="cont_box">
                <h6><span _msttexthash="148109" _msthash="36">NOTRE SERVICE</span></h6>
                <h1 _msttexthash="1574157" _msthash="37">Le confort est notre <br _istranslated="1"> priorité absolue pour vous</h1>
                <p _msttexthash="12594998" _msthash="38">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo minus ab porro id expedita facilis repudiandae dolorum maxime reprehenderit sit?</p>
                <ul>
                    <li _msttexthash="662415" _msthash="39">Marquage national du parmium</li>
                    <li _msttexthash="236171" _msthash="40">Viowing géré</li>
                    <li _msttexthash="411476" _msthash="41">Frco, sans obligation</li>
                    <li _msttexthash="376844" _msthash="42">Connaissance locale</li>
                </ul>
            </div>
        </div>
</template>
