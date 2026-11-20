import React from 'react'

function Spec() {
    const specializations = [
        {
            title: 'Front end-developer',
            detail: 'Front-end is where I weave code and creativity to shape captivating and user-centric digital experiences.',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                    <line x1="14" y1="4" x2="10" y2="20"></line>
                </svg>
            )
        },
        {
            title: 'UI/UX Designer',
            detail: 'UI/UX design is my palette for blending art and user psychology into seamless and delightful interactions.',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
            )
        },
        {
            title: 'Graphic designer',
            detail: 'As a graphic designer, I transform ideas into visually striking and impactful designs.',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                    <path d="M2 2l7.586 7.586"></path>
                    <circle cx="11" cy="11" r="2"></circle>
                </svg>
            )
        }
    ]

    return (
        <section className="page-content">
            <h1>My <span>Specializations</span></h1>

            <div className="special-grid">
                {specializations.map((item, index) => (
                    <div className="special-card" key={index}>
                        <div className="card-top">
                            <h3>{item.title}</h3>
                            <span className="card-icon">{item.icon}</span>
                        </div>
                        <p>{item.detail}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Spec