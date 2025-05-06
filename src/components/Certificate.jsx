import { useState } from 'react';

const Certificate = () => {
  const [certificates, setCertificates] = useState([
    {
      id: 1,
      title: "Certificate 1",
      issuer: "LinkedIn Learning",
      date: "May 2023",
      image: "/cert1.jpeg",
      credentialId: "61044edec468a4583b99186077d505e51d9db80c968b41ca98c02f86dd18151e",
      url: "https://www.linkedin.com/learning/certificates/61044edec468a4583b99186077d505e51d9db80c968b41ca98c02f86dd18151e"
    },
    {
      id: 2,
      title: "Certificate 2",
      issuer: "LinkedIn Learning",
      date: "April 2023",
      image: "/cert2.jpeg",
      credentialId: "ceebd8bddc157bc772f3c0d83c4996e25291b9498be71fc31077745234c5020b",
      url: "https://www.linkedin.com/learning/certificates/ceebd8bddc157bc772f3c0d83c4996e25291b9498be71fc31077745234c5020b"
    },
    {
      id: 3,
      title: "Certificate 3",
      issuer: "LinkedIn Learning",
      date: "March 2023",
      image: "/cert3.jpeg",
      credentialId: "763b0003b3a8da03278b9dbce9dc47f4972e996d8fa3421e0a1db396c976d8d6",
      url: "https://www.linkedin.com/learning/certificates/763b0003b3a8da03278b9dbce9dc47f4972e996d8fa3421e0a1db396c976d8d6"
    },
    {
      id: 4,
      title: "Certificate 4",
      issuer: "LinkedIn Learning",
      date: "February 2023",
      image: "/cert4.jpeg",
      credentialId: "2edb31d788d98222a4922153f27f755dc90bba1174a01544bfaf54e4b086bbd5",
      url: "https://www.linkedin.com/learning/certificates/2edb31d788d98222a4922153f27f755dc90bba1174a01544bfaf54e4b086bbd5"
    },
    {
      id: 5,
      title: "Certificate 5",
      issuer: "LinkedIn Learning",
      date: "January 2023",
      image: "/cert5.jpeg",
      credentialId: "9a4731fe429b2a4fdb9bcbd492b5d38f5f070ebac3705523777cf1a0bd92e33c",
      url: "https://www.linkedin.com/learning/certificates/9a4731fe429b2a4fdb9bcbd492b5d38f5f070ebac3705523777cf1a0bd92e33c"
    },
    {
      id: 6,
      title: "Certificate 6",
      issuer: "LinkedIn Learning",
      date: "December 2022",
      image: "/cert6.jpeg",
      credentialId: "9aa4faf2e5684ec04f12e5a2a64445cf2f9ffea65fc580e13e0116e44b2349af",
      url: "https://www.linkedin.com/learning/certificates/9aa4faf2e5684ec04f12e5a2a64445cf2f9ffea65fc580e13e0116e44b2349af"
    }
  ]);

  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const viewCertificate = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <div className="certificate-page">
      <h1 className="section-title">My Certificates</h1>
      
      <div className="certificates-container">
        {certificates.map((cert) => (
          <div className="certificate-card" key={cert.id} onClick={() => viewCertificate(cert)}>
            <div className="certificate-preview">
              <img src={cert.image} alt={cert.title} onError={(e) => {
                e.target.src = "https://via.placeholder.com/300x200?text=LinkedIn+Learning+Certificate";
              }} />
            </div>
            <div className="certificate-info">
              <h3>{cert.title}</h3>
              <p className="certificate-issuer">{cert.issuer}</p>
              <p className="certificate-date">Issued: {cert.date}</p>
              <p className="certificate-id">ID: {cert.credentialId.substring(0, 15)}...</p>
              <button className="view-certificate-btn">View Certificate</button>
            </div>
          </div>
        ))}
      </div>

      {selectedCertificate && (
        <div className="certificate-modal">
          <div className="certificate-modal-content">
            <span className="close-modal" onClick={closeModal}>&times;</span>
            <h2>{selectedCertificate.title}</h2>
            <div className="certificate-image-container">
              <img 
                src={selectedCertificate.image} 
                alt={selectedCertificate.title}
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/800x600?text=LinkedIn+Learning+Certificate";
                }}
              />
            </div>
            <div className="certificate-details">
              <p><strong>Issuer:</strong> {selectedCertificate.issuer}</p>
              <p><strong>Issue Date:</strong> {selectedCertificate.date}</p>
              <p><strong>Credential ID:</strong> {selectedCertificate.credentialId}</p>
            </div>
            <div className="certificate-actions">
              <a 
                href={selectedCertificate.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="verify-btn"
              >
                View on LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificate;
