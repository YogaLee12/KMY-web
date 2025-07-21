import ExampleBlock from "@/app/ui/ExampleSection/exampleBlock";


const projects = [
    {
        title: 'Skynode official web',
        description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
        buttonUrl: '#',
        images: [
        '/images/examples/skynode1.png',
        '/images/examples/skynode2.png',
        '/images/examples/skynode3.png',
        ],
    },
    {
        title: 'E-commerce template',
        description:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        buttonUrl: '#',
        images: [
        '/images/examples/ecom1.png',
        '/images/examples/ecom2.png',
        '/images/examples/ecom3.png',
        ],
    },
];

export default function ExamplesPage() {
    return (
        <main className="bg-[#f8f8f8]">
        <ExampleBlock projects={projects} />
        </main>
    );
}
