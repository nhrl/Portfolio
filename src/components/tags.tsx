type TagsProps = {
    svg:string;
    name:string
}

const Tags: React.FC<TagsProps> = ({svg, name}) => {
    return (
        <div className="h-[48px] w-[176px] border-[2px] border-[#AFB1B1] flex items-center rounded-md p-1 [@media(max-width:360px)]:w-[140px] [@media(max-width:360px)]:h-[40px]">
            <img className="h-[24px] w-[24px] ml-3" src={svg} alt="svg icon" />
            <p className="text-white pl-2 text-[clamp(0.7rem,0.8cqw,0.9rem)]">{name}</p>
        </div>
    )
};

export default Tags;