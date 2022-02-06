import { FiLink } from 'react-icons/fi'
import './home.css';
import Menu from '../../components/Menu'

const Home = () =>{
   return (
    <div className="container-home">
        <Menu />
        <div className="logo">
            <img src="/logo.png" alt="EncurtaLink Logo" />
            <h1>EncurtaLink</h1>
            <span>Cole sue link para encurtar</span>
        </div>

        <div className="area-input">
            <div>
                <FiLink size={24} color="#FFF" />
                <input
                    placeholder="Cole seu link aqui..."
                />
            </div>

            <button>
                Gerar link
            </button>
        </div>w
    </div> 
   )
  }

  export default Home;
  

  