
type CardProps = {
    image:string;
    title:string
}


const Card: React.FC<CardProps> = ({image, title}) => {
    return (
    <div className="h-[auto] w-[300px] lg:w-[450px]">
        <div className="flex justify-center">
            <img className="h-50 lg:h-80 w-auto [@media(max-width:360px)]:h-40" loading="lazy" src={image} alt="project_image" />
        </div>
        <div className="text-white text-[clamp(1.3rem,2cqw,2rem)] font-bold flex justify-center">
            <h2>{title}</h2>
        </div>
    </div>
    );
};

export default Card;