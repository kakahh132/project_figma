import React from "react";
import "../Project/Project.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import V from "../../assets/Vector (3).png";
import Mask from "../../assets/Mask group.png";
import Vect from "../../assets/Vector (2).png";
import Mask2 from "../../assets/Mask group (2).png";
import M from "../../assets/Mask group (3).png";
import { useNavigate } from "react-router-dom";
import folder from "../../assets/folder.png";

const Project = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="projectb">
        <div className="projectc">
          <h1>
            Check out some
            <br />
            things I've built
          </h1>
          <div className="praise">
            <button className="bless">Project</button>
            <button className="bless" onClick={() => navigate('/Tibits')}>
              Tibits
            </button>
          </div>
          <hr />
        </div>

        {/* First Project Section */}
        <div className="body font-inter">
          <div className="bodya">
            <img src={Mask} alt="Project showcase" />
          </div>
          <div className="bodyb">
            <div className="bel">
              <div className="kel">
                <p><span className="highlight">Featured Projects</span><br />Disburse  Website</p>
              </div>
              <div className="mel">
                <p className="bc">
                  Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis. Class
                </p>
                <img src={V} alt="Vector icon" />
                <img src={Vect} alt="Vector icon" />
              </div>
            </div>
           </div>
        </div>

        {/* Second Project Section */}
        <div className="body btn">
          <div className="bodyd">
            <div className="words">
                <p><span className="highlight">Featured Projects</span><br />Disburse  Website</p>
              </div>
            <div className="column">
           
                            <p className="bc">
                  Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis. Class
                </p>
                <img src={V} alt="Vector icon" />
                <img src={Vect} alt="Vector icon" />
                 </div>
          </div>
          <div className="bodye">
            <img src={Mask2} alt="Project showcase" />
          </div>
        </div>

        {/* Third Project Section */}
        <div className="body">
          <div className="bodya">
            <img src={M} alt="Project showcase" />
          </div>
          <div className="bodyb">
            <div className="bel">
              <div className="kel">
                 <p><span className="highlight">Featured Projects</span><br />Disburse  Website</p>
              </div>
              <div className="mel">
                <p className="bc">
                  Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis. Class
                </p>
                <img src={V} alt="Vector icon" />
                <img src={Vect} alt="Vector icon" />
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects Section */}
        <div className="bodyy">
          <div className="bodye">
            <h1>Other Noteworthy Projects</h1>
            <p>View the archive</p>
          </div>
          <div className="box">
            <div className="bodyf">
              <img src={folder} alt="Folder icon" />
              <h2>Idenma</h2>
              <p>
                Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis. Class
                aptent taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos.
              </p>
            </div>

            <div className="bodyf">
              <img src={folder} alt="Folder icon" />
              <h2>Samma</h2>
              <p>
                Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis. Class
                aptent taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos.
              </p>
            </div>

            <div className="bodyf">
              <img src={folder} alt="Folder icon" />
              <h2>Building Cost App</h2>
              <p>
                Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis. Class
                aptent taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos.
              </p>
            </div>
          </div>
          <div className="btn-box">
            <button className="bt">Show more</button>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Project;