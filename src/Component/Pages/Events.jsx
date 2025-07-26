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
    <div className="events-page pb-5">
      {/* Stylish Header Section */}
      <header className="event-header mb-5 position-relative text-white">
        <div className="overlay"></div>
        <div className="container py-5 position-relative z-2">
          <h1 className="display-5 fw-bold">Explore Our Events</h1>
          <p className="lead">Discover how we celebrate knowledge, innovation, and creativity.</p>
          <p className="small">
            Total Events: <strong>{events.length}</strong>
          </p>
        </div>
      </header>

      <div className="container">
        <div className="row g-4">
          {events.map((event) => (
            <div key={event.id} className="col-md-6 col-lg-4">
              <div className="event-card card border-0 shadow-sm h-100 overflow-hidden transition-all">
                {event.photoUrl && (
                  <div className="event-image-container overflow-hidden position-relative">
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
                  <p className="text-muted small mb-2">
                    <i className="bi bi-geo-alt-fill me-1 text-primary"></i>
                    Upskill
                  </p>
                  {event.description && (
                    <p className="small text-muted mb-0 line-clamp-2">
                      {event.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {events.length > 6 && (
        <div className="container mt-5 text-center">
          <p className="text-muted">
            Showing {events.length} events. Scroll up to see more.
          </p>
        </div>
      )}

      <style jsx>{`
        .event-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: 8px;
        }
        .event-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
        }
        .event-image-container {
          border-radius: 8px 8px 0 0;
          overflow: hidden;
        }
        .transition-all {
          transition: all 0.3s ease;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .event-header {
          background: url('/events-bg.jpg') center/cover no-repeat;
          min-height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        .event-header .overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 1;
        }
        .event-header .container {
          z-index: 2;
          position: relative;
        }
      `}</style>
    </div>
  );
}

export default Events;
