
type CardProps = {
    image:string;
    title:string;
    description:string;
}


const Card: React.FC<CardProps> = ({image, title, description}) => {
    return (
    <div className="h-[auto] w-[300px] lg:w-[450px]">
        <div className="flex justify-center h-60 [@media(max-width:360px)]:h-auto">
            <img className="h-auto w-auto [@media(max-width:360px)]:pb-2 [@media(max-width:360px)]:h-40 object-contain" loading="lazy" src={image} alt="project_image" />
        </div>
        <div className="text-white text-[clamp(1.3rem,2cqw,2rem)] font-bold flex justify-center">
            <h2>{title}</h2>
        </div>
        <div className="flex justify-center">
            <div className="text-white flex text-center w-5/6 pt-3">
                <p>{description}</p>
            </div>
        </div>
    </div>
    );
};

export default Card;
