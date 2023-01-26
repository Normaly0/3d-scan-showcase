import { Link } from 'react-router-dom';

import './Home.scss';

import ConstructionBar from '../assets/construction_bar.gif';
import ConstructionSign from '../assets/construction_sign.gif';
import CameraIcon from '../assets/camera_icon.webp';

function Home() {

    return (
      <main>

        <div className="home-container">
            
            <h1>
                Welcome to Normaly's Website!
            </h1>

            <div className="home-container__construction border-retro">
                <div className="home-container__construction-img">
                    <img src={ConstructionSign} />
                    <img src={ConstructionBar} />
                </div>
                <p>Oh oh, seems like someone should add some content here huh...?</p>
            </div>

            <div className="home-container__subpages border-retro">
                <p>
                    In the meantime, maybe you should click on one of these!
                </p>
                <div className="home-container__subpages-link">
                    <Link to={'/3d-scan'}>
                        <img src={CameraIcon}/>
                    </Link>
                </div>
            </div>

        </div>

      </main>
    )
}

export default Home;