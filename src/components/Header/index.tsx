import "../../styles/index.scss";
import { FaAngleDown, FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";
import minhaFoto from '../../assets/images/minhaFoto.jpg';

function index() {

  const scroolSaibaMais = () => {
    const sobreSection = document.querySelector(".details");
    if(sobreSection) {
      const scrool = sobreSection.offsetTop
      window.scrollTo({
        top:scrool,
        behavior:"smooth"
      })
    }
  }
  return (
    <header className="header">
      <h2>Portfolio</h2>
      <h1>João Victor</h1>
      <p>FULL-STACK DEVELOPER   UI/UX DESIGN</p>
      <button onClick={() => scroolSaibaMais()}>SAIBA MAIS <span><FaAngleDown /></span></button>
      <div className="social_media_icons">
        <a href="https://github.com/victormaia21" target="_blank" className="github"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/jo%C3%A3o-victor-benevenuto-maia-67a855225/" target="_blank" className="linkedin"><FaLinkedin /></a>
        <a href="https://www.instagram.com/victor.dev__/" target="_blank" className="instagram"><FaInstagram /></a>
        <a href="https://w.app/SLA9ry" target="_blank" className="whatsapp"><FaWhatsapp /></a>
        <a href="https://www.facebook.com/profile.php?id=100007909956450" target="_blank" className="facebook"><FaFacebook /></a>
      </div>
      <img src={minhaFoto} alt="photo header" />
    </header>
  )
}

export default index