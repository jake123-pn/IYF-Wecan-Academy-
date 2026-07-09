/* =========================
   GENERAL
========================= */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Poppins',sans-serif;
    scroll-behavior:smooth;
}

body{
    background:#f5f7fa;
    color:#333;
}

.container{
    width:90%;
    max-width:1200px;
    margin:auto;
}

/* =========================
   NAVIGATION
========================= */

header{
    width:100%;
}

nav{
    position:fixed;
    width:100%;
    top:0;
    left:0;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:18px 60px;
    background:rgba(0,51,102,.95);
    z-index:1000;
}

.logo{
    display:flex;
    align-items:center;
}

.logo img{
    width:55px;
    margin-right:12px;
}

.logo h2{
    color:white;
    font-size:26px;
}

nav ul{
    display:flex;
    list-style:none;
}

nav ul li{
    margin-left:30px;
}

nav ul li a{
    color:white;
    text-decoration:none;
    font-weight:600;
    transition:.3s;
}

nav ul li a:hover{
    color:#FFD700;
}

/* =========================
   HERO SECTION
========================= */

.hero{

    height:100vh;

    background:
    linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)),
    url("images/banner.jpg");

    background-size:cover;
    background-position:center;

    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;

}

.hero-text{

    color:white;

}

.hero-text h1{

    font-size:60px;
    margin-bottom:20px;

}

.hero-text p{

    font-size:22px;
    margin-bottom:35px;

}

.hero button,
.btn{

    background:#FFD700;
    color:#003366;

    padding:15px 40px;

    border:none;

    border-radius:50px;

    cursor:pointer;

    text-decoration:none;

    font-size:18px;

    font-weight:bold;

    transition:.4s;

}

.hero button:hover,
.btn:hover{

    background:white;
    transform:scale(1.05);

}

/* =========================
   REGISTER & LOGIN
========================= */

#register-section,
#login-section{

    display:none;

    padding:100px 20px;

}

.card{

    width:450px;
    max-width:95%;

    margin:auto;

    background:white;

    padding:35px;

    border-radius:20px;

    box-shadow:0 15px 35px rgba(0,0,0,.2);

}

.card h2{

    text-align:center;
    color:#003366;
    margin-bottom:25px;

}

.card input,
.card select{

    width:100%;

    padding:12px;

    margin:10px 0;

    border:1px solid #ccc;

    border-radius:8px;

}

.card button{

    width:100%;

    background:#003366;

    color:white;

    padding:15px;

    border:none;

    border-radius:8px;

    margin-top:20px;

    cursor:pointer;

}

.card button:hover{

    background:#0055aa;

}