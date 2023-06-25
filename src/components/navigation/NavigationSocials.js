import Linkedin from "../../assets/images/socials/linkedin-pink.svg";
import Github from "../../assets/images/socials/github-pink.svg";
import Codepen from "../../assets/images/socials/codepen-pink.svg";
const NavigationSocials = () => {
  return (
    <section className="social-media">
      <a
        href="https://www.linkedin.com/in/prathamesh-gadhave-18009a1ba/"
        target="_blank"
        rel="noreferrer"
      >
        <i
          class="fa-brands fa-linkedin"
          style={{ color: "#fd1056", fontSize: "30px" }}
        ></i>
      </a>
      <a
        href="https://github.com/MrPrathameshGadhave"
        target="_blank"
        rel="noreferrer"
      >
        <i
          class="fa-brands fa-github"
          style={{ color: "#fd1056", fontSize: "30px" }}
        ></i>
      </a>
      <a
        href="//www.instagram.com/prathamesh.zm/"
        target="_blank"
        rel="noreferrer"
        className="pink-text"
      >
        <i
          class="fa-brands fa-instagram"
          style={{ color: "#fd1056", fontSize: "30px" }}
        ></i>
      </a>
      <a
        href="//wa.me/918421863607"
        target="_blank"
        rel="noreferrer"
        className="pink-text"
      >
        <i
          class="fa-brands fa-whatsapp"
          style={{ color: "#fd1056", fontSize: "30px" }}
        ></i>
      </a>
    </section>
  );
};

export default NavigationSocials;
