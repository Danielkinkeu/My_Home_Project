<template>
   
   <div class="PartA">
    
    <section class="section">
        <article>

            <div class="inscription">
                <h1>Sign Up</h1>
            </div>

            <div class="api">

                <div class="facebook">
                    <i class="fab fa-facebook"></i>
                    <span>FACEBOOK</span>
                </div>

                <div class="google">
                    <i class="fab fa-google"></i>
                    <span>GOOGLE</span>
                </div>

                <div class="apple">
                    <i class="fab fa-apple"></i>
                    <span>APPLE</span>
                </div>
            </div>

            <p class="choix">OU</p>

            <div class="titre2">
                <span>Inscrivez-vous avec votre adresse e-mail</span>
            </div>

            <div class="formulaire">
                <form action="traitement.php" method="GET">
                    <div class="nom">
                        <input type="text" placeholder="votre nom" name="nom" id="name">
                        <span id="spannom"></span>
                    </div>

                    <div class="prenom">
                        <input type="text" placeholder="votre prenom" name="prenom" id="pname">
                        <span id="spanprenom" ></span>
                    </div>
                    
                    <div class="mail">
                        <input type="text" placeholder="votre adresse mail" name="mail" id="imail" required>
                        <span id="spanmail"></span>
                    </div>

                    <span class="dddd">date de naissane</span>
                    <div class="date">

                        

                        <select name="Jours" id="">
                            <option value="">Jour</option>
                            <option value="">01</option>
                            <option value="">02</option>
                            <option value="">03</option>
                            <option value="">04</option>
                            <option value="">05</option>
                            <option value="">06</option>
                            <option value="">07</option>
                            <option value="">08</option>
                            <option value="">09</option>
                            <option value="">10</option>
                            <option value="">11</option>
                            <option value="">12</option>
                            <option value="">13</option>
                            <option value="">14</option>
                            <option value="">15</option>
                            <option value="">16</option>
                            <option value="">17</option>
                            <option value="">18</option>
                            <option value="">19</option>
                            <option value="">20</option>
                            <option value="">20</option>
                            <option value="">21</option>
                            <option value="">22</option>
                            <option value="">23</option>
                            <option value="">24</option>
                            <option value="">25</option>
                            <option value="">26</option>
                            <option value="">27</option>
                            <option value="">28</option>
                            <option value="">29</option>
                            <option value="">30</option>
                            <option value="">31</option>

                        </select>

                        <select name="Mois" id="">
                            <option value="">Mois</option>
                            <option value="">Janvier</option>
                            <option value="">Fevrier</option>
                            <option value="">Mars</option>
                            <option value="">Avril</option>
                            <option value="">Mai</option>
                            <option value="">Juin</option>
                            <option value="">Juillet</option>
                            <option value="">Aout</option>
                            <option value="">Septembre</option>
                            <option value="">Octobre</option>
                            <option value="">Novembre</option>
                            <option value="">Decembre</option>

                        </select>

                        <select name="Année" id="">
                            <option value="">Année</option>
                            <option value="">1990</option>
                            <option value="">1991</option>
                            <option value="">1992</option>
                            <option value="">1993</option>
                            <option value="">1994</option>
                            <option value="">1995</option>
                            <option value="">1996</option>
                            <option value="">1997</option>
                            <option value="">1998</option>
                            <option value="">1999</option>
                            <option value="">2000</option>
                            <option value="">2001</option>
                            <option value="">2002</option>
                            <option value="">2003</option>
                            <option value="">2004</option>
                            <option value="">2005</option>
                            <option value="">2006</option>
                            <option value="">2007</option>
                            <option value="">2008</option>
                            <option value="">2009</option>
                            <option value="">2010</option>
                            <option value="">2011</option>
                            <option value="">2012</option>
                            <option value="">2013</option>
                            <option value="">2014</option>
                            <option value="">2015</option>
                            <option value="">2016</option>
                            <option value="">2017</option>
                            <option value="">2018</option>
                            <option value="">2019</option>
                            <option value="">2020</option>
                            <option value="">2021</option>
                        </select>
                        
                        <span class="verif"> </span>

                    </div>

                    <div class="condition">

                        <p class="con-utilisation1">
                            <input type="checkbox" name="" id="check" required> J'ai lu et j'accepte les <a href="#">conditions generales d'utilisation</a> et de <a href="">la politique de protection des donnees personelles</a>
                        </p>

              
                        <p class="soumission"> 
                            <input type="submit" value="S'inscrire">
                        </p>

                        <p class="ouii"> 
                            <span>Vous avez deja un compte ? <a href="#">Connecter vous !</a></span>
                        </p>

                    </div>



                </form>
            </div>

        </article>
    </section>
</div>

</template>
<script>
export default {
    name : 'SignUp'
}
</script>

<style>



.PartA{
    display: flex;
    justify-content: center;
    margin: 25px;
    border: 1px solid skyblue;
    border-radius: 10px;
width: 600px;
margin-right: 20%;
margin-left: 25%;
    

}
.section{
    width: 500px;
   
}

article{
    margin-top: 20%;
}

article .api{
    display: flex;
    justify-content: space-between;
}

.inscription h1{
    font-size: 3em;
    text-align: center;
    color: blue;
    font-family: monospace;
    font-weight: bold;
    margin-bottom: 30px;
    line-height: 3.125rem;
    letter-spacing: 1px;
}
.api .facebook{
    color: #1877F2;
    border: 1px solid #1877F2;
    padding: 10px 30px;
    font-size:  0.95em;
    font-weight: bold;
    border-radius: 5px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    cursor: pointer;
    transition: 0.8s;
}
.api .google{
    color:#757575;
    border: 1px solid #757575;
    padding: 10px 30px;
    font-size:  0.95em;
    font-weight: bold;
    border-radius: 5px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    cursor: pointer;
    transition: 0.8s;
}
.api .apple{
    color: #000;
    border: 1px solid #000;
    padding: 10px 30px;
    font-size:  0.95em;
    font-weight: bold;
    border-radius: 5px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    cursor: pointer;
    transition: 0.8s;
}

.facebook:hover{
    background-color: #1877F2;
    color: #fff;
    transition: 0.7s;
}

.apple:hover{
    background-color: #000;
    color: #fff;
    transition: 0.7s;
}

.google:hover{
    background-color: rgba(158, 15, 15, 0.2);
    transition: 0.7s;
    
}

article .choix{
    text-align: center;
    margin: 30px 0px;
    
}

article .titre2{
    text-align: center;
    color:rgba(133, 133, 133);
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 1.2em;
    margin-bottom: 30px;
}

form .prenom , .nom{
    width: 100%;
    height: 40px;
    margin-top: 30px; 
}

form .mail{
    width: 100%;
    height: 40px;
    margin-top: 30px;
    margin-bottom: 40px;
}

form .prenom input{
    width: 100%;
    font-size: 1em;
    border: 0px;
    border-bottom: 1.5px solid black;
    display: block;
    height: 100%;
    padding-left: 10px;
}
form .nom input{
    width: 100%;
    font-size: 1em;
    border: 0px;
    border-bottom: 1.5px solid black;
    display: block;
    height: 100%;
    padding-left: 10px;
}
form .mail input{
    width: 100%;
    font-size: 1em;
    border: 0px;
    border-bottom: 1.5px solid black;
    display: block;
    height: 100%;
    padding-left: 10px;

}

form input[type=text]:hover{
    border-bottom: 1.5px solid rgb(95, 106, 255);
    transition: 0.5s;
}

form .date{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
}

.dddd{
    font-size: 1em;
    font-family: Georgia, 'Times New Roman', Times, serif;
    color: #757575;
}

select{
    height: 100%;
    font-size: 1.2em;
    width: 150px;
    border: 0px;
    border-bottom: 1px solid black;
}

select:hover {
    border-bottom: 1px solid rgb(95, 106, 255);
}

.condition .con-utilisation1{
    margin-top: 50px;
    font-family: Arial, Helvetica, sans-serif;
    text-align: justify;
}

.condition .con-utilisation2{
    margin-top: 20px;
    font-family: Arial, Helvetica, sans-serif;
    text-align: justify;
}

.condition  #check{
    margin-right: 5px;
}
.soumission{
    margin-top: 30px;
    text-align: center;
    display: flex;
    justify-content: center;
}
.soumission input{
    padding: 10px 30px;
    background-color: rgb(95, 106, 255);
    color: #fff;
    border-radius: 3px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.1em;
    border: 0px;
    display: block;
    transition: 0.5s;
}
.condition .ouii{
    margin: 25px 0px;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
}

.soumission input:hover{
    box-shadow: 2px 1px 5px #000;
    transition: 0.5s;
}


</style>