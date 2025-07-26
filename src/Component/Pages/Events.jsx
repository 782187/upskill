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
      {/* Header Section */}
      <header className="bg-white shadow-sm py-4 mb-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
              <h1 className="h3 mb-0 fw-bold text-primary">Our Events</h1>
            </div>
            <div className="col-auto">
              <p className="text-muted mb-0 small">
                {events.length} {events.length === 1 ? 'event' : 'events'} found
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Events Grid */}
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
                    <div className="event-date-badge bg-primary text-white position-absolute top-0 end-0 m-3 px-2 py-1 rounded small">
                      {event.date || 'Upskill'}
                    </div>
                  </div>
                )}
                <div className="card-body">
                  <h3 className="h5 fw-bold mb-2">{event.title}</h3>
                  <p className="text-muted small mb-2">
                    <i className="bi bi-geo-alt-fill me-1 text-primary"></i>
                    {event.location || 'Upskill Headquarters'}
                  </p>
                  {event.description && (
                    <p className="small text-muted mb-0 line-clamp-2">
                      {event.description}
                    </p>
                  )}
                </div>
                <div className="card-footer bg-transparent border-top-0">
                  <button className="btn btn-sm btn-outline-primary">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Note */}
      {events.length > 6 && (
        <div className="container mt-5 text-center">
          <p className="text-muted">
            Showing {events.length} events. Scroll up to see more.
          </p>
        </div>
      )}

      {/* Add some CSS for effects */}
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
        .event-date-badge {
          box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
}

export default Events;