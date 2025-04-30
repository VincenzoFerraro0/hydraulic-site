import Slider from 'react-slick';

const images = [
    { src: '/img/intervento1.jpg', alt: 'Idraulico al lavoro' },
    { src: '/img/intervento2.jpg', alt: 'Tubi e attrezzature' },
    { src: '/img/intervento3.jpg', alt: 'Emergenza perdite' },
];

export default function HeroCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings} className="h-[80vh]">
            {images.map((image, index) => (
                <div key={index} className="relative h-[80vh]">
                    <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <h1 className="text-white text-4xl md:text-6xl font-bold text-center px-4">
                            Ferrarosrls – Idraulica & Pronto Intervento 24/7
                        </h1>
                    </div>
                </div>
            ))}
        </Slider>
    );
};