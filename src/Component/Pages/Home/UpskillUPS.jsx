import React from 'react';
import {
    Users,
    Award,
    BookOpen,
    GraduationCap,
} from 'lucide-react';

const stats = [
    {
        id: 1,
        label: "Students Trained",
        value: "5,000+",
        icon: Users,
        color: "text-primary bg-primary bg-opacity-10",
    },
    {
        id: 2,
        label: "Expert Instructors",
        value: "30+",
        icon: Award,
        color: "text-warning bg-warning bg-opacity-10",
    },
    {
        id: 3,
        label: "Courses Available",
        value: "50+",
        icon: BookOpen,
        color: "text-success bg-success bg-opacity-10",
    },
    {
        id: 4,
        label: "Success Rate",
        value: "95%",
        icon: GraduationCap,
        color: "text-info bg-info bg-opacity-10",
    },
];

const AboutSection = () => {
    return (
        <section className="py-5 bg-white" id="about">
            <div className="container">
                <div className="row align-items-center g-5">
                    <div className="col-lg-6">
                        <div className="position-relative">
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
                                alt="Students"
                                className="img-fluid rounded shadow"
                                style={{ maxWidth: '100%', height: 'auto' }}
                            />
                            <div className="position-absolute bottom-0 end-0 translate-middle bg-primary rounded-circle d-none d-md-block" style={{ width: '80px', height: '80px' }}></div>
                            <div className="position-absolute top-0 start-0 translate-middle bg-warning rounded-circle d-none d-md-block" style={{ width: '80px', height: '80px' }}></div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <h2 className="display-6 fw-bold mb-4 text-primary">Welcome to Upskill Institute</h2>
                        <p className="lead text-muted mb-3">
                            At Upskill Institute, we are dedicated to transforming individuals into skilled IT professionals ready to excel in the dynamic world of technology. Our institute offers comprehensive training programs and placement services designed to bridge the gap between academic knowledge and industry demands.
                        </p>
                        <div className="row g-3">
                            {stats.map((stat) => {
                                const Icon = stat.icon;
                                return (
                                    <div className="col-6" key={stat.id}>
                                        <div className="border rounded text-center p-3 h-100 shadow-sm">
                                            <div className={`rounded-circle d-inline-flex align-items-center justify-content-center mb-2 ${stat.color}`} style={{ width: '50px', height: '50px' }}>
                                                <Icon size={24} />
                                            </div>
                                            <h5 className="fw-bold mb-0">{stat.value}</h5>
                                            <small className="text-muted">{stat.label}</small>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
