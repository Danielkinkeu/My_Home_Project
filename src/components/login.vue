<template>
    
      <div class="PartA">

<section class="section">
    <article>

        <div class="inscription">
            <h1>Login</h1>
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
            <span>  Connectez-vous avec votre adresse e-mail</span>
        </div>

        <div class="formulaire">
            <form action="traitement.php" method="GET">
              

                <div class="mail">
                    <input type="text" placeholder="votre adresse mail" name="mail" id="imail" required>
                    <span id="spanmail"></span>
                </div>
                <div class="prenom">
                    <input type="text" placeholder="mot de passe" name="prenom" id="password">
                    <span id="spanprenom"></span>
                </div>

                

                    <p class="soumission">
                        <input type="submit" value="Se connecter">
                    </p>

                    <p class="ouii" style="padding-top: 10px; margin-left:10px">
                        <span>Vous n'avez pas de compte ? <a href="#">Inscrivez  vous !</a></span>
                    </p>
</form>
                </div>


    </article>
</section>
</div>

 </template>
 <script>
 export default {
     name : 'Login'
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