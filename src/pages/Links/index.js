import './links.css';
import  { FiLink, FiTrash, FiArrowLeft} from 'react-icons/fi';
import {Link} from 'react-router-dom'

const Links = () =>{
    return (
     <div className="links-container"> 
         
         <div class="links-header">
            <Link to="/">
                <FiArrowLeft size={38} color="#FFF"/>
            </Link>
            <h1>Meus Links</h1>
         </div>

         <div class="links-item">
             <button className="links-button">
                 <FiLink size={18} color="#FFF"/>
                 https://google.com/
             </button>

             <button className="link-delete">
                 <FiTrash size={24} color="#FF5454" />
             </button>
         </div>

         <div class="links-item">
             <button className="links-button">
                 <FiLink size={18} color="#FFF"/>
                 https://google.com/
             </button>

             <button className="link-delete">
                 <FiTrash size={24} color="#FF5454" />
             </button>
         </div>
     </div>
    )
   }
 
   export default Links;
   
 
   