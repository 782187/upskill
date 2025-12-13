import React, { useState, useEffect } from 'react';

const API_URL = import.meta.env.VITE_API_URL;

function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(`${API_URL}/getEvents`);
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
      <header className="events-header py-4 py-md-5 mb-4 mb-md-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8 text-center">
              <h1 className="display-5 fw-bold mb-3 text-gradient">Festivals @ RsSofttecs</h1>
              <div className="header-divider mx-auto my-3"></div>
              <p className="lead mb-4">
                RsSofttecs is a Software Training Institute and here we display all the memories created by the learners, 
                faculty, and staff members of the institute. Keep checking this page for updates on all the happenings 
                at RsSofttecs - code-a-thons, Hack-a-thons, Celebrations & much more...!
              </p>
              <div className="event-counter badge rounded-pill bg-primary px-3 py-2">
                {events.length} {events.length === 1 ? 'Memory' : 'Memories'} Captured
              </div>
            </div>
          </div>
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
                      RsSofttecs
                  </p>
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
        .events-header {
          position: relative;
          background-color: #f8f9fa;
          border-bottom: 1px solid rgba(0,0,0,0.1);
        }
        .text-gradient {
          background: linear-gradient(45deg, #3a7bd5, #00d2ff);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          display: inline-block;
        }
        .header-divider {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #3a7bd5, #00d2ff);
          border-radius: 2px;
        }
        .event-counter {
          font-size: 0.9rem;
          font-weight: 500;
          box-shadow: 0 2px 10px rgba(58, 123, 213, 0.3);
        }
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