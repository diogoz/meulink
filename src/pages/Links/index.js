import {useState, useEffect} from 'react';
import './links.css';
import  { FiLink, FiTrash, FiArrowLeft} from 'react-icons/fi';
import {Link} from 'react-router-dom';
import {getStorageLink, deleteLinkStorage} from '../../services/storageLinks';
import LinkItem from '../../components/LinkItem';

const Links = () =>{

    const [myLinks, setMyLinks] = useState([]);
    const [data, setData] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [emptyList, setEmptyList] = useState(false);

    useEffect(() => {
        const getLinks = async() => {
            const result = await getStorageLink('@encurtaLink')
            if (result.length === 0){
                setEmptyList(true);
            }
            setMyLinks(result);
        }
        getLinks();
    }, []);

    const handleOpenLink = (link) => {
        setData(link);
        setShowModal(true);
    }

    const handleDelete = async(id) => {
        const result =  await deleteLinkStorage(myLinks, id);

        if(result.length === 0) {
            setEmptyList(true);
        }
        setMyLinks(result);
    }

    return (
     <div className="links-container"> 
         
         <div className="links-header">
            <Link to="/">
                <FiArrowLeft size={38} color="#FFF"/>
            </Link>
            <h1>Meus Links</h1>
         </div>

         {emptyList && (
             <div className="links-item">
                <h2 className="text-emptyList">Sua lista está vazia...</h2>
             </div>
         )}

         {myLinks.map(link => (
            <div key={link.id} className="links-item">
             <button className="links-button" onClick={() => handleOpenLink(link)}>
                 <FiLink size={18} color="#FFF"/>
                 {link.long_url}
             </button>

             <button className="link-delete" onClick={() => handleDelete(link.id)}>
                 <FiTrash size={24} color="#FF5454" />
             </button>
         </div>
         ))}

         {showModal && (
            <LinkItem 
                closeModal={() => setShowModal(false)}
                content={data}
            />
         )}
     </div>
    )
   }
 
   export default Links;
   
 
   