import React from 'react';

const Section = ({ category, images }) => {
    return (
        <div className="section">
            <h2 className="section-title">{category}</h2>
            <div className="section-scroll">
                <div className="section-content">
                    {images.map((imageUrl, index) => (
                        <div 
                            key={index} 
                            className="movie-card"
                        >
                        <img 
                            src={imageUrl}
                            alt="{`${category} ${index + 1}`}"
                            className="movie-img"
                        />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Section;