import Hero from './Hero';
import Cardjurusan from './Cardjurusan';
import Cardkegiatan from './Cardkegiatan';
import jurusan1 from './../assets/cadr1.jpg';
import jurusan2 from './../assets/card2.jpg';
import jurusan3 from './../assets/card3.jpg';
import benner from './../assets/benner.jpg';

const Maincontent = () => {
  return (
    <div>
      <Hero />
      <div className="container">
        <div className="row">
          <div className="col-12 text-center my-5">
            <h1>Macic Art</h1>
          </div>
          <div className="col-lg-4 col-12">
            <Cardjurusan image={jurusan1} title="Cardician" />
          </div>
          <div className="col-lg-4 col-12">
            <Cardjurusan image={jurusan2} title="Mentalist" />
          </div>
          <div className="col-lg-4 col-12">
            <Cardjurusan image={jurusan3} title="Fakir" />
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center my-5">
            <h1>Kegiatan</h1>
          </div>
          <div className="col-12">
            <Cardkegiatan image={benner} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Maincontent;
