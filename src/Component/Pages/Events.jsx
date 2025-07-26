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
        <h2 className="mb-4">No Events Available</h2>
        <p className="lead">Check back later for upcoming events!</p>
        <img 
          src="https://via.placeholder.com/400x300?text=No+Events" 
          alt="No events" 
          className="img-fluid rounded mt-3"
        />
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-primary">Upcoming Events</h1>
        <p className="lead">Discover our exciting lineup of events</p>
        <div className="border-bottom border-primary mx-auto" style={{ width: '100px' }}></div>
      </div>

      <div className="row g-4">
        {events.map((event) => (
          <div key={event.id} className="col-lg-4 col-md-6">
            <div className="card h-100 shadow-sm border-0 overflow-hidden">
              {event.photoUrl && (
                <img 
                  src={event.photoUrl} 
                  className="card-img-top" 
                  alt={event.title}
                  style={{ height: '250px', objectFit: 'cover' }}
                />
              )}
              <div className="card-body">
                <h3 className="card-title fw-bold">{event.title}</h3>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <button className="btn btn-outline-primary">
                    View Details
                  </button>
                  <span className="badge bg-info text-dark">
                    <i className="bi bi-calendar-event me-1"></i> Upcoming
                  </span>
                </div>
              </div>
              <div className="card-footer bg-transparent border-top-0">
                <small className="text-muted">
                  <i className="bi bi-clock me-1"></i> Coming soon
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-5">
        <button className="btn btn-primary btn-lg px-4">
          <i className="bi bi-arrow-down-circle me-2"></i> Load More Events
        </button>
      </div>
    </div>
  );
}

export default Events;