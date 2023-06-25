import AboutMe from "../about/AboutMe.js";
import Stack from "../about/Stack.js";
import DownloadResume from "../about/DownloadResume"

const AboutPreview = () => {
  return (
    <article className="about">
      <AboutMe />

      <DownloadResume/>

      <Stack />
    </article>
  );
};

export default AboutPreview;
