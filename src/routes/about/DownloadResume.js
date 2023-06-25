import DownloadIcon from "../../assets/images/download-icon.png";
import Resume from "../../assets/documents/PRATHAMESH-RESUME.docx";
const DownloadResume = () => {
  return (
    <section>
      <a className="download-btn" href={Resume} download="Prathamesh-Gadhave Front End Develeoper Resume">
        <img
          src={DownloadIcon}
          alt="Download icon"
          className="download-img"
        ></img>
        Download Resume
      </a>
    </section>
  );
};

export default DownloadResume;
