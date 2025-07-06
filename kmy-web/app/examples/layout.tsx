export default function ExamplesLayout({ children }: { children: React.ReactNode }) {
    return (
        <section className="p-6">
            <h1 className="text-3xl font-bold mb-6">项目案例</h1>
            {children}
        </section>
        );
    }
