import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

function GeneralInfo({ generalInfo }) {
  const { name, email, contactNumber, location, linkedin, github } =
    generalInfo;

  return (
    <header className="resume-header">
      <h1>{name}</h1>
      <div className="contact-info">
        <div>
          <FaEnvelope size={16} />
          <span>{email}</span>
        </div>
        <span>|</span>
        <div>
          <FaPhone size={16} />
          <span>{contactNumber}</span>
        </div>
        <span>|</span>
        <div>
          <FaMapMarkerAlt size={16} />
          <span>
            {location}
          </span>
        </div>
        <span>|</span>
        <div>
          <FaLinkedin size={16} />
          <span>{linkedin}</span>
        </div>
        <span>|</span>
        <div>
          <FaGithub size={16} />
          <span>{github}</span>
        </div>
      </div>
    </header>
  );
}

export default GeneralInfo;
