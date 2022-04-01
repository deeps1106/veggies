import React from "react";
function Navweb()
{
    return(
        <>
           <nav className="navbar navbar-expand-sm">
           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Deephika">
               <span className="navbar-toggler-icon"></span>
           </button>
           <div id="Deephika" className="collapse navbar-collapse">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Specials</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Menu cart</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Contact</a>
                </li>
            </ul>
           </div>
           </nav>

           <div id="demo" class="carousel slide" data-bs-ride="carousel">

           <div class="carousel-indicators">
      <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
      <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
      <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
    </div>

    <div class="carousel-inner">
      <div class="carousel-item active">
        <img height="600px" width="200px" src="https://wallpapercave.com/wp/wp5435737.jpg" alt="Rasberry" class="d-block w-100"></img>
      </div>
      <div class="carousel-item">
        <img height="600px" width="200px" src="https://c4.wallpaperflare.com/wallpaper/952/472/832/harvest-still-life-vegetables-fresh-wood-hd-wallpaper-preview.jpg" alt="mix vege" class="d-block w-100"></img>
      </div>
    </div>

    <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
      <span class="carousel-control-next-icon"></span>
    </button>

    <div style={{backgroundImage: "url('https://as2.ftcdn.net/v2/jpg/02/72/60/57/1000_F_272605749_e3PytHOIN9FIOy7UxNQH2l5CiOGvZrf3.jpg')"}} className="card-group">
        <div className="card">
            <div className="card-body">
             <img height="100px" width="100px" src="https://www.free-css.com/assets/files/free-css-templates/preview/page270/veggie/assets/img/icon-vege.svg"></img>
             <p><b>TURNIP GREENS</b></p>
             <p>Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage.</p>
            </div>
        </div>
        <div className="card">
            <div className="card-body">
             <img height="100px" width="100px" src="https://www.free-css.com/assets/files/free-css-templates/preview/page270/veggie/assets/img/icon-coffee.svg"></img>
             <p><b>BEETROOT WATER</b></p>
             <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek.</p>
            </div>
        </div>
        <div className="card">
            <div className="card-body">
             <img height="100px" width="100px" src="https://www.free-css.com/assets/files/free-css-templates/preview/page270/veggie/assets/img/icon-sweet.svg"></img>
             <p><b>GET SOCIAL</b></p>
             <p>Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi radish okra azuki bean corn fava bean mustard tigernut jícama.</p>
            </div>
        </div>

    </div>
    </div>

    <p></p>
    <p></p>
    <p><h3><center>This Month Specials</center></h3></p>

    <div className="card-group">

        <div className="card">
            <div className="card-body">
            <p><b><h5>Greens fava</h5></b></p>
            <p>Nori grape silver beet broccoli kombu beet greens fava</p>
            <p><b><h5>19$</h5></b></p>
            </div>
        </div>

        <div className="card">
            <div className="card-body">
            <p><b><h5>Celery quand</h5></b></p>
            <p>Celery quandong swiss chard chicory earthnut pea</p>
            <p><b><h5>18$</h5></b></p>
            </div>
        </div>

        <div className="card">
            <div className="card-body">
            <p><b><h5>Pea horser</h5></b></p>
            <p>Kohlrabi radish okra azuki bean corn fava bean mustard</p>
            <p><b><h5>7$</h5></b></p>
            </div>
        </div>

        <div className="card">
            <div className="card-body">
            <p><b><h5>Soko radicchio</h5></b></p>
            <p>Dandelion zucchini burdock yarrow chickpea dandelion</p>
            <p><b><h5>25$</h5></b></p>
            </div>
        </div>

        <div className="card">
            <div className="card-body">
            <p><b><h5>Tigernut</h5></b></p>
            <p>Grape silver beet watercress potato tigernut</p>
            <p><b><h5>14$</h5></b></p>
            </div>
        </div>

        <div className="card">
            <div className="card-body">
            <p><b><h5>Yarrow Sweet</h5></b></p>
            <p>Gumbo kakadu plum komatsuna black-eyed pea green</p>
            <p><b><h5>14$</h5></b></p>
            </div>
        </div>

        </div>

        <div className="container-fluid" style={{backgroundImage:"url('https://cdn.pixabay.com/photo/2021/01/18/12/45/coffee-beans-5928036_1280.jpg')",backgroundSize:"cover"}}>
            <p><h3><center>About Us</center></h3></p>
            <p><h5><center>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. </center></h5></p>
        </div>

        <p><h3><center>Menu Cart</center></h3></p>

        <nav className="navbar navbar-expand-sm">
           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Deephika">
               <span className="navbar-toggler-icon"></span>
           </button>
           <div id="Deephika" className="collapse navbar-collapse">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link">Starters</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Main Dishes</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Dessert</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Drinks</a>
                </li>
            </ul>
           </div>
           </nav>

        <p></p>
        <p>SMOKED RICOTTA TERRINE.......................... $12</p>
        <p>ricotta,shallots,cheddar,capers</p>
        <p></p>
        <p>SAMPHIRE FRITTERS WITH FENNEL CEVICHE........... $19</p>
        <p>fresh samphire,plain flour,cornflower,eggs,fennel</p>
        <p></p>
        <p>PAN FRIED COURGETTE FLOWERS..................... $13</p>
        <p>courgette flowers,goats cheese, red onion, pine nuts</p>

        <div className="container-fluid" style={{backgroundImage:"url('https://img.freepik.com/free-photo/set-fruits-seeds-leaves_23-2148145087.jpg?size=626&ext=jpg')",backgroundSize:"cover"}}>
            <p><h3><center>Contact</center></h3></p>
            <p></p>
            <p><h5>VEGGIE</h5></p>
            <p>3428 Magnolia Avenue Hackettstown, NJ 07840</p>
            <p></p>
            <p><h5>RESERVATION</h5></p>
            <p>reservations@domain.com</p>
        <form  method="post" class="was-validated">
        <div class="form-group">
            <label for="name">Name:</label>
            <input type="name" class="form-control" placeholder="Enter first name" id="fn" style={{width: "400px"}} required></input>
            <div class="invalid-feedback">Invalid</div>

            <label for="name">Email:</label>
            <input type="name" class="form-control" placeholder="Enter first name" id="fn" style={{width: "400px"}} required></input>
            <div class="invalid-feedback">Invalid</div>

            <label for="name">Message</label>
            <input type="name" class="form-control" placeholder="Enter first name" id="fn" style={{width: "400px"}} required></input>
            <div class="invalid-feedback">Invalid</div>

            <button type="submit" class="btn btn-primary">Send</button>
        </div>
        </form>
        <p>+48 202-555-0114</p>
        </div>
        </>
    );
}
export default Navweb;