import React from "react";
import BandungBadge from "../../assets/image/bandung-badge.png";

const Aside = () => {
  return (
    <aside>
      <article class="profile card">
        <header>
          <h2>Meiman Jaya Gea</h2>
          <p>Software Enggineer</p>

          <figure>
            <img src={BandungBadge} class="profile-img" alt="bandung" />
            <figcaption>Lambang</figcaption>
          </figure>
        </header>
        <section>
          <h3>Informasi Lainnya</h3>
          <table>
            <tr>
              <th>Negara</th>
              <td>Indonesia</td>
            </tr>
            <tr>
              <th>Hari Jadi</th>
              <td>25 September 1810</td>
            </tr>
            <tr>
              <th>Bahasa Daerah</th>
              <td>Sunda</td>
            </tr>
            <tr>
              <th>Kode Telpon</th>
              <td>+62 22</td>
            </tr>
          </table>
        </section>
      </article>
    </aside>
  );
};

export default Aside;