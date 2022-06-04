import React from "react";

const Header = () => {
  return (
    <header>
      <div class="jumbotron">
        <h1>Bandung</h1>
        <p>
          Kota metropolitan terbesar di Provinsi Jawa Barat, sekaligus menjadi
          ibu kota provinsi tersebut.
        </p>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#sejarah">Sejarah</a>
          </li>
          <li>
            <a href="#geografis">Geografis</a>
          </li>
          <li>
            <a href="#wisata">Wisata</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
