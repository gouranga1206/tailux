export default function Header() {
  return (
    <div id="header">
      <div className="logo"></div>

      <a href="#" id="men">
        <div>MEN</div>
      </a>
      <a href="#" id="women">
        <div>WOMEN</div>
      </a>
      <a href="#" id="kid">
        <div>KID</div>
      </a>
      <div id="studio">
        <a href="#" id="tailuxStudio">
          TailuX Studio
        </a>
        <span id="try-now">
          <b>try now</b>
        </span>
      </div>
      {/* <span><b>try now</b></span> */}
      <div id="search">
      <i className="search-glass fa-solid fa-magnifying-glass"></i>
        <input type="search" name="search-bar" id="search-bar" placeholder="Search for Products, brands and more"/>
      </div>

      {/* <div id="demo">
      <span id="li"><i className="fa-regular fa-user"></i> <p>Profile</p></span>
      <span><i className="fa-regular fa-heart"></i><p>Wishlist</p></span>
      <span><i className="fa-solid fa-bag-shopping"></i><p>Bag</p></span>
      </div> */}
    </div>
  );
}
