'use client'

import Link from 'next/link'

type Project = {
    id: string
    title: string
    description: string
    }

    const projects: Project[] = [
    {
        id: 'example1',
        title: '展示项目1',
        description: 'xxxxxxxxxxxxxxxxxxx。',
    },
    {
        id: 'example2',
        title: '展示项目2',
        description: 'xxxxxxxxxxxxxxxxxxxxxx。',
    },
    ]

    export default function ExamplesPage() {
    return (
        <main className="p-6">
        <h1 className="text-3xl font-bold mb-6">项目案例</h1>
        <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
            ))}
        </div>
        </main>
    )
    }

    function ProjectCard({ project }: { project: Project }) {
    return (
        <Link
        href={`/examples/${project.id}`}
        className="block p-4 border rounded-lg shadow hover:shadow-md transition"
        >
        <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
        <p className="text-gray-700">{project.description}</p>
        </Link>
    )
}
