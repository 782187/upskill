import React, { useState } from 'react';

const festivalImages = [
  {
    image: "/diwali1.jpg",
    description: "Diwali Celebration At UpSkill Institute",
    size: "large",
    video: true
  },
  {
    image: "/diwali1.jpg",
    description: "Lighting up our workplace With Diwali Joy and team spirit",
    size: "medium"
  },
  {
    image: "/diwali2.jpg",
    description: "",
    size: "small"
  },
  {
    image: "/diwali3.jpg",
    description: "",
    size: "small"
  },
  {
    image: "/diwali4.png",
    description: "",
    size: "small"
  }
];

const industrialVisits = [
  {
    image: "",
    description: ""
  },
  {
    image: "",
    description: ""
  }
];

const EventsPage = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  const getColClass = (size) => {
    switch (size) {
      case 'large': return 'col-md-12';
      case 'medium': return 'col-md-6';
      case 'small': return 'col-md-4';
      default: return 'col-md-4';
    }
  };

  return (
    <>
      <nav className="navbar navbar-light bg-light sticky-top shadow-sm justify-content-center small">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="#hero">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#celebration">Celebrations</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#visits">Industrial Visits</a>
          </li>
        </ul>
      </nav>

      <section
        id="hero"
        className="position-relative min-vh-100 d-flex align-items-center justify-content-center text-white"
        style={{
          background: "url('/eventhero.jpg') center center / cover no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', zIndex: 1 }}
        />
        <div className="position-relative text-center container px-4" style={{ zIndex: 2 }}>
          <h1
            className="display-3 fw-bold mb-4"
            style={{
              color: '#fff',
              textShadow: '2px 2px 10px rgba(0,0,0,0.8)',
            }}
          >
            Welcome to <span style={{ color: 'orange' }}>UpSkill</span> Events 🎊
          </h1>
          <p
            className="lead mx-auto"
            style={{
              maxWidth: '700px',
              color: '#f1f1f1',
              textShadow: '1px 1px 6px rgba(0,0,0,0.6)',
            }}
          >
            Celebrate success, ignite passion, and grow with joyful learning and unforgettable moments.
          </p>
          <div className="mt-4 d-flex justify-content-center gap-3">
            <span className="fs-2">🎉</span>
            <span className="fs-2">🎓</span>
            <span className="fs-2">🚀</span>
            <span className="fs-2">🌟</span>
            <span className="fs-2">💡</span>
          </div>
        </div>
      </section>

      <section id="celebration" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5 display-5">🎉 Festivals & Celebrations</h2>
          <div className="row g-4">
            {festivalImages.map((item, index) => (
              <div className={`${getColClass(item.size)} col-12`} key={index}>
                <div className="card h-100 border-0 shadow-sm">
                  <div style={{ height: '300px', overflow: 'hidden' }}>
                    <img
                      src={item.image}
                      className="card-img-top h-100 w-100 object-fit-cover"
                      alt="festival"
                    />
                  </div>
                  <div className="card-body bg-dark text-white">
                    <p className="card-text">{item.description}</p>
                    {item.video && (
                      <button
                        onClick={() => setVideoOpen(true)}
                        className="btn btn-outline-light btn-sm mt-2"
                      >
                        ▶ Watch Highlights
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="visits" className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center fw-bold mb-5 display-5">🏭 Industrial Visits</h2>
          <div className="row g-4">
            {industrialVisits.map((visit, idx) => (
              <div className="col-md-6" key={idx}>
                <div className="card h-100 border-0 shadow-sm">
                  <img
                    src={visit.image}
                    alt="industrial visit"
                    className="card-img-top"
                    style={{ height: '250px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <p className="card-text">{visit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {videoOpen && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content border-0">
              <div className="ratio ratio-16x9">
                <video controls autoPlay className="w-100 h-100">
                  <source src="/diwali.mp4" type="video/mp4" />
                </video>
              </div>
              <button
                type="button"
                className="btn btn-close position-absolute top-0 end-0 m-3"
                onClick={() => setVideoOpen(false)}
              ></button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EventsPage;
