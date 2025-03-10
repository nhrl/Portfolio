
type CardProps = {
    project: {
        image: string;
        title: string;
        description: string;
        tags: { svg: string; name: string }[];
        links: { web?: string; github?: string }[];
    };
};

const Card: React.FC<CardProps> = ({ project }) => {
    return (
        <div className="h-full flex flex-col">
            <div className="flex justify-center [@media(max-width:360px)]:h-auto">
                <img
                    className="h-50 w-50 [@media(max-width:360px)]:pb-2 [@media(max-width:360px)]:h-40 object-contain"
                    loading="lazy"
                    src={project.image}
                    alt="project_image"
                />
            </div>
            <div className="text-white flex flex-grow justify-center flex-col border-t-[1px] border-gray-300 dark:border-[#232323] px-3 bg-gray-100 dark:bg-[#171717] rounded-b-xl">
                <h2 className="text-lg text-gray-900 dark:text-[#FAFAFA] font-medium leading-[2.7rem]">
                    {project.title}
                </h2>
                <p className="text-sm text-[#898989]">{project.description}</p>

                {/* Tags Section */}
                <div className="mt-2">
                    <h3 className="text-gray-900 dark:text-white font-medium mb-2">Tech Used</h3>
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="text-xs bg-gray-700 px-2 py-1 rounded"
                            >
                                {tag.name}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Links Section */}
                <div className="mt-3 pb-2">
                    <h3 className="text-gray-900 dark:text-white font-bold">Project Links</h3>
                    <div className="flex">
                        {project.links.map((link, index) => (
                            <div key={index}>
                                {link.web && (
                                    <a
                                        href={link.web}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#0D9488] hover:underline text-sm mr-2"
                                    >
                                        Live Demo
                                    </a>
                                )}
                                {link.github && (
                                    <a
                                        href={link.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#0D9488] hover:underline text-sm"
                                    >
                                        GitHub Repo
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Card;