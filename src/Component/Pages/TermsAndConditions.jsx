import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function TermsAndConditions() {
  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col lg={10}>
          <h2 className="mb-4 text-center text-primary">Terms and Conditions</h2>
          <p>
            Welcome to <strong>UpSkill Institute Pvt. Ltd.</strong> These Terms and Conditions
            outline the rules and regulations for using our website and services. By accessing or
            using our website and services, you agree to comply with and be bound by these Terms and
            Conditions.
          </p>

          <section className="mb-4">
            <h5>1. Acceptance of Terms</h5>
            <p>
              By using the UpSkill Institute website and services, you acknowledge that you have read,
              understood, and agreed to these Terms and Conditions. If you do not agree with these Terms,
              please do not use our website or services.
            </p>
          </section>

          <section className="mb-4">
            <h5>2. Services Provided</h5>
            <p>
              We offer educational and training services including online courses, workshops, and
              seminars. We reserve the right to modify or discontinue any part of our services at any time
              without notice.
            </p>
          </section>

          <section className="mb-4">
            <h5>3. Registration and Accounts</h5>
            <p>
              You may need to register for an account to access certain features. You agree to provide
              accurate and updated information and are responsible for all activity under your account.
            </p>
          </section>

          <section className="mb-4">
            <h5>4. Payment and Fees</h5>
            <p>
              Some services require payment. All fees are non-refundable unless stated otherwise. Payments
              must be made as per the terms mentioned at the time of purchase.
            </p>
          </section>

          <section className="mb-4">
            <h5>5. Content and Intellectual Property</h5>
            <p>
              All website content including text, graphics, logos, and software is the property of
              UpSkill Institute Pvt. Ltd. You may not reproduce or use content without written permission.
            </p>
          </section>

          <section className="mb-4">
            <h5>6. User Conduct</h5>
            <p>
              You agree to use our services lawfully and not disrupt or interfere with the platform or
              other users' experience.
            </p>
          </section>

          <section className="mb-4">
            <h5>7. Third-Party Links</h5>
            <p>
              Our site may contain links to external websites. We are not responsible for their content or
              practices. Inclusion does not imply our endorsement.
            </p>
          </section>

          <section className="mb-4">
            <h5>8. Limitation of Liability</h5>
            <p>
              To the maximum extent allowed by law, UpSkill Institute Pvt. Ltd. is not liable for indirect,
              incidental, or consequential damages. Our total liability is limited to the amount you paid
              for the service.
            </p>
          </section>

          <section className="mb-4">
            <h5>9. Indemnification</h5>
            <p>
              You agree to indemnify and hold harmless UpSkill Institute Pvt. Ltd. and its representatives
              against any claims or liabilities arising from your use of our services or violation of these
              terms.
            </p>
          </section>

          <section className="mb-4">
            <h5>10. Modifications to Terms</h5>
            <p>
              We reserve the right to update these Terms at any time. Changes are effective upon posting.
              Continued use of our services implies acceptance of the updated Terms.
            </p>
          </section>

          <section className="mb-4">
            <h5>11. Governing Law</h5>
            <p>
              These Terms are governed by and construed in accordance with the laws of India. All disputes
              shall be subject to the jurisdiction of courts in Pune, Maharashtra.
            </p>
          </section>

          <section className="mb-4">
            <h5>12. Contact Us</h5>
            <p>
              For questions regarding these Terms, please contact us:
              <br />
              <strong>Email:</strong> enquiry@upskilll.com
              <br />
              <strong>Phone:</strong> +91 8484833677
              <br />
              <strong>Address:</strong> B Junction 103, 1st Floor, Near Karve Statue, Next to Kothrud Post
              Office, Kothrud, Pune-411038
            </p>
          </section>

          <hr />
        </Col>
      </Row>
    </Container>
  );
}

export default TermsAndConditions;