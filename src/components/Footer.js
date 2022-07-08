import twitter from "../images/Twitter Icon.svg";
import facebook from "../images/Facebook Icon.svg";
import instagram from "../images/Instagram Icon.svg";
import github from "../images/GitHub Icon.svg";
import linkedin from "../images/Linkedin Icon.svg";

export default function Footer() {
  return (
    <footer className="social">
      <ul className="social__list">
        <li className="social__list-item">
          <img src={twitter} alt="" />
        </li>
        <li className="social__list-item">
          <img src={facebook} alt="" />
        </li>
        <li className="social__list-item">
          <img src={instagram} alt="" />
        </li>
        <li className="social__list-item">
          <img src={github} alt="" />
        </li>
        <li className="social__list-item">
          <img src={linkedin} alt="" />
        </li>
      </ul>
    </footer>
  );
}
