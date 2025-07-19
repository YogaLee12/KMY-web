'use client';

interface Project {
    title: string;
    description: string;
    buttonUrl: string;
    images: string[];
}

interface Props {
    projects: Project[];
}

export default function ExampleBlock({ projects }: Props) {
    return (
        <div className="flex flex-col gap-28 px-6 md:px-24 py-20">
        {projects.map((project, index) => (
            <div
            key={index}
            className="flex flex-col md:flex-row gap-12 items-center"
            >
            {/* 左边：文字 */}
            <div className="md:w-1/2">
                <h2 className="text-3xl font-extrabold text-purple-900 mb-4">
                {project.title}
                </h2>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <a href={project.buttonUrl}>
                <button className="bg-purple-900 text-white px-6 py-2 rounded-full shadow-md hover:bg-purple-700 transition">
                    VIEW LIVE SITE
                </button>
                </a>
            </div>

            {/* 右边：图片 */}
            <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {project.images.map((img, i) => (
                <img
                    key={i}
                    src={img}
                    alt={`project-${index + 1}-img-${i + 1}`}
                    className="rounded-lg shadow-md w-full object-cover"
                />
                ))}
            </div>
            </div>
        ))}
        </div>
    );
}
