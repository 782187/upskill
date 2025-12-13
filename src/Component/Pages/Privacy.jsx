import React from "react";

export default function Privacy({ lastUpdated = "August 24, 2025" }) {
  const org = {
    name: "RsSofttecs Institute",
    email: "akshaytakale321@gmail.com",
    phone: "+91 9970981875",
    street:
       "Office No 29/B Wing, 4th Floor, Yashashree Park, Warje Malwadi Rd, Near Karve Nagar PMT Bus Stop, Karve Nagar, Pune",
    city: "Pune",
    region: "Maharashtra",
    postal: "411038",
    country: "IN",
  };

  return (
    <main className="container py-5" aria-labelledby="privacyTitle">
      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "PrivacyPolicy",
            name: `${org.name} Privacy Policy`,
            dateModified: new Date(lastUpdated).toISOString(),
            publisher: {
              "@type": "Organization",
              name: org.name,
              email: org.email,
              telephone: org.phone,
              address: {
                "@type": "PostalAddress",
                streetAddress: org.street,
                addressLocality: org.city,
                addressRegion: org.region,
                postalCode: org.postal,
                addressCountry: org.country,
              },
            },
          }),
        }}
      />

      <div className="row g-4">
        {/* Main Content */}
        <div className="col-lg-8">
          <header className="mb-5 text-center text-lg-start">
            <h1
              id="privacyTitle"
              className="display-5 fw-bold text-primary mb-2"
            >
              Privacy Policy
            </h1>
            <p className="text-muted mb-0">📅 Last updated: {lastUpdated}</p>
          </header>

          {/* Section 1 */}
          <section className="card border-0 shadow-sm mb-4 rounded-3">
            <div className="card-body p-4">
              <h2 className="h4 text-primary">1. Introduction</h2>
              <p className="mb-0">
                Welcome to <strong>{org.name}</strong>! We value your privacy
                and are committed to protecting your personal information. This
                Privacy Policy explains how we collect, use, and safeguard your
                data when you use our website and services.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section
            className="card border-0 shadow-sm mb-4 rounded-3"
            id="information-we-collect"
          >
            <div className="card-body p-4">
              <h2 className="h4 text-primary">2. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul className="mb-0">
                <li>
                  <strong>Personal Information:</strong> Your name, email
                  address, and contact information when you register or interact
                  with us.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about how you use our
                  website, including your IP address and browser type.
                </li>
                <li>
                  <strong>Payment Information:</strong> Details related to
                  payments for our services (e.g., credit card information).
                </li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section
            className="card border-0 shadow-sm mb-4 rounded-3"
            id="how-we-use-info"
          >
            <div className="card-body p-4">
              <h2 className="h4 text-primary">3. How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul className="mb-0">
                <li>Provide and improve our services.</li>
                <li>Communicate with you about updates and offers.</li>
                <li>Process payments and manage your account.</li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section
            className="card border-0 shadow-sm mb-4 rounded-3"
            id="data-security"
          >
            <div className="card-body p-4">
              <h2 className="h4 text-primary">4. Data Security</h2>
              <p className="mb-0">
                We implement strong security measures to protect your data from
                unauthorized access or disclosure. However, no method of
                transmission over the internet is completely secure.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section
            className="card border-0 shadow-sm mb-4 rounded-3"
            id="your-rights"
          >
            <div className="card-body p-4">
              <h2 className="h4 text-primary">5. Your Rights</h2>
              <p className="mb-0">
                You have the right to access, correct, or delete your personal
                information. You can contact us anytime to exercise these
                rights.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section
            className="card border-0 shadow-sm mb-4 rounded-3"
            id="changes"
          >
            <div className="card-body p-4">
              <h2 className="h4 text-primary">6. Changes to This Policy</h2>
              <p className="mb-0">
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with an updated date.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section
            className="card border-0 shadow-sm rounded-3"
            id="contact-us"
          >
            <div className="card-body p-4">
              <h2 className="h4 text-primary">7. Contact Us</h2>
              <address className="mb-0">
                <div className="fw-semibold">{org.name}</div>
                <div>
                  📧 Email:{" "}
                  <a
                    href={`mailto:${org.email}`}
                    className="link-primary text-decoration-none"
                  >
                    {org.email}
                  </a>
                </div>
                <div>
                  📞 Phone:{" "}
                  <a
                    href={`tel:${org.phone.replace(/\s/g, "")}`}
                    className="link-primary text-decoration-none"
                  >
                    {org.phone}
                  </a>
                </div>
                <div>📍 Address: {org.street}, {org.city}-{org.postal}</div>
              </address>
            </div>
          </section>
        </div>

        {/* Sticky Sidebar Navigation */}
        <div className="col-lg-4">
          <nav
            className="position-sticky"
            style={{ top: "5rem" }}
            aria-label="Section navigation"
          >
            <div className="card border-0 shadow-sm rounded-3">
              <div className="card-body p-3">
                <h2 className="h6 text-uppercase text-muted mb-3">
                  On this page
                </h2>
                <ul className="list-unstyled mb-0 small">
                  <li className="mb-2">
                    <a
                      className="link-primary text-decoration-none"
                      href="#information-we-collect"
                    >
                      Information We Collect
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      className="link-primary text-decoration-none"
                      href="#how-we-use-info"
                    >
                      How We Use Your Information
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      className="link-primary text-decoration-none"
                      href="#data-security"
                    >
                      Data Security
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      className="link-primary text-decoration-none"
                      href="#your-rights"
                    >
                      Your Rights
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      className="link-primary text-decoration-none"
                      href="#changes"
                    >
                      Changes to This Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="link-primary text-decoration-none"
                      href="#contact-us"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </main>
  );
}
