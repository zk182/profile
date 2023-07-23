import GithubLogo from '../assets/github-mark.png';
import LinkdnLogo from '../assets/LinkedIn_logo_initials.png';

function Summary() {
  return (
    <>
      <h1>I'm Nico, web developer passionate about technology! </h1>
      <p>
        Throughout my career I realized that what I enjoy the most is the
        backend. I also love music (especially guitars) and sports.
      </p>
      <p>Thank you for visiting me!</p>
      <div>
        <img
          style={{ borderRadius: 20 }}
          className="avatar"
          src={GithubLogo}
          alt="Github"
          width={30}
          height={30}
        />
        <img
          style={{ borderRadius: 20 }}
          className="avatar"
          src={LinkdnLogo}
          alt="Linkdn"
          width={30}
          height={30}
        />
      </div>
    </>
  );
}

export default Summary;
