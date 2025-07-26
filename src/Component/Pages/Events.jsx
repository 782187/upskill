import React, { useState, useEffect } from 'react';

function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('https://upskill-server.onrender.com/getEvents');
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        
        const formattedEvents = data.map(event => ({
          ...event,
          photoUrl: event.photo ? `data:image/jpeg;base64,${event.photo}` : null
        }));
        
        setEvents(formattedEvents);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-5">
        <div className="alert alert-danger text-center">
          <h4>Error Loading Events</h4>
          <p>{error}</p>
          <button className="btn btn-primary" onClick={() => window.location.reload()}>
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div className="container py-5 text-center">
        <h2 className="mb-4">No Events Found</h2>
        <p className="lead">We haven't hosted any events yet</p>
      </div>
    );
  }

  return (
    <div className="events-page">
      <div className="hero-section text-center py-4 py-md-5 mb-4 mb-md-5 position-relative overflow-hidden">
        <div className="container position-relative z-index-1">
          <h1 className="fw-bold mb-3" style={{ fontSize: '2.5rem' }}>Upskill Events Gallery</h1>
          <p className="lead mb-3">Reliving our memorable moments together</p>
          <div className="d-flex justify-content-center">
            <div className="border-top border-primary mx-auto" style={{ width: '80px', height: '4px' }}></div>
          </div>
        </div>
        <div className="hero-overlay position-absolute top-0 start-0 w-100 h-100"></div>
      </div>

      <div className="container">
        <div className="row g-4">
          {events.map((event, index) => (
            <div key={event.id} className="col-md-6 col-lg-4">
              <div className="event-card card border-0 shadow-sm h-100 overflow-hidden transition-all hover-scale">
                {event.photoUrl && (
                  <div className="event-image-container overflow-hidden">
                    <img 
                      src={event.photoUrl} 
                      className="img-fluid w-100" 
                      alt={event.title}
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                  </div>
                )}
                <div className="card-body">
                  <h3 className="h5 fw-bold mb-2">{event.title}</h3>
                  <p className="text-muted small mb-0">
                    <i className="bi bi-calendar-event me-1"></i>
                    {event.date || 'Event hosted at Upskill'}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center py-5 mt-4 bg-light">
        <div className="container">
          <h2 className="h4 mb-3">More Exciting Events Coming Soon</h2>
          <p className="text-muted mb-0">Stay tuned for our upcoming activities</p>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          background: linear-gradient(135deg, #6e8efb, #a777e3);
          color: white;
          position: relative;
        }
        .hero-overlay {
          background: rgba(0,0,0,0.3);
        }
        .event-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: 8px;
        }
        .event-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
        .event-image-container {
          border-radius: 8px 8px 0 0;
          overflow: hidden;
        }
        .transition-all {
          transition: all 0.3s ease;
        }
        .hover-scale:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
}

export default Events;