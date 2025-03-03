type TagsProps = {
    svg:string;
    name:string
}

const Tags: React.FC<TagsProps> = ({svg, name}) => {
    return (
        <div className="border-[2px] border-[#AFB1B1] flex items-center w-40 rounded-md p-1">
            <img className="h-9" src={svg} alt="svg icon" />
            <p className="text-white pl-2">{name}</p>
        </div>
    )
};

export default Tags;