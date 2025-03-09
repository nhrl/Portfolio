
type TagsProps = {
    svg:any;
    name:string
}

const Tags: React.FC<TagsProps> = ({svg, name}) => {
    return (
        <div className="flex items-center gap-2 px-3 py-2 border rounded-md dark:border-[#cfcece]">
            {typeof svg === "string" ? (
                <img src={svg} alt={name} className="h-6 w-6" />
            ) : (
                <span className="h-6 w-6 flex items-center">{svg}</span>
            )}
            <span className="text-sm">{name}</span>
        </div>
    )
};

export default Tags;