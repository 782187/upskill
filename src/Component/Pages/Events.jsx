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
    <div className="events-gallery">
      <div className="hero-section text-center py-5 mb-5" style={{
        background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7))',
        backgroundSize: 'cover',
        color: 'white',
        padding: '100px 0'
      }}>
        <div className="container">
          <h1 className="display-3 fw-bold mb-3">Our Events at Upskill</h1>
          <p className="lead mb-4">Reliving the memorable moments we've created together</p>
          <div className="border-top border-white mx-auto my-4" style={{ width: '100px' }}></div>
        </div>
      </div>

      <div className="container">
        <div className="row g-4">
          {events.map((event) => (
            <div key={event.id} className="col-lg-6">
              <div className="event-card card border-0 shadow-lg overflow-hidden h-100">
                <div className="row g-0 h-100">
                  {event.photoUrl && (
                    <div className="col-md-6">
                      <img 
                        src={event.photoUrl} 
                        className="img-fluid h-100" 
                        alt={event.title}
                        style={{ objectFit: 'cover', minHeight: '300px' }}
                      />
                    </div>
                  )}
                  <div className="col-md-6 d-flex align-items-center">
                    <div className="card-body p-4">
                      <h2 className="card-title fw-bold mb-3">{event.title}</h2>
                      <p className="card-text text-muted">
                        <i className="bi bi-calendar-check me-2"></i>
                        Event hosted at Upskill
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center py-5 mt-4 bg-light">
        <h2 className="mb-3">More Events Coming Soon</h2>
        <p className="lead text-muted">Stay tuned for our future activities</p>
      </div>
    </div>
  );
}

export default Events;