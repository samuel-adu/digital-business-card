import email from "../images/Email Icon.svg";
import laura from "../images/laura.svg";

export default function Info() {
  return (
    <div>
      <img src={laura} alt="" />
      <div className="container info">
        <h1 className="heading">Laura Smith</h1>
        <h3 className="job-title">Frontend Developer</h3>
        <p className="website">laurasmith.website</p>

        <button className="btn">
          <img src={email} alt="" className="btn-icon" />
          Email
        </button>
      </div>
    </div>
  );
}
