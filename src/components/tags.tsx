type TagsProps = {
    svg:string;
    name:string
}

const Tags: React.FC<TagsProps> = ({svg, name}) => {
    return (
        <div className="h-[48px] w-[176px] border-[2px] border-[#AFB1B1] flex items-center rounded-md p-1">
            <img className="h-[24px] w-[24px] ml-3" src={svg} alt="svg icon" />
            <p className="text-white pl-2">{name}</p>
        </div>
    )
};

export default Tags;