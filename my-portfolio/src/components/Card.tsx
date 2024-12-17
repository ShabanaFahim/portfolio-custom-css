import React from 'react';
import Image from 'next/image';
import '../app/styles/card.css'; // Import your CSS file

interface PropsType {
    title: string;
    desc: string;
    img: string;
    tags: string[];
}

const Cards: React.FC<PropsType> = ({ title, desc, img, tags }) => {
    return (
        <div className="card-container" data-aos="zoom-in-up">
            <div>
                <Image
                    className="card-image"
                    src={img}
                    width={350}
                    height={350}
                    alt={title}
                />
            </div>

            <div className="card-content">
                <div className="card-title">{title}</div>
                <div className="card-description">{desc}</div>
                <div className="card-tags">
                    {tags.map((el) => (
                        <div key={el}>{el}</div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Cards;
