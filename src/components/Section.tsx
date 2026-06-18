interface SectionProps {
    children: React.ReactNode;
    title?: string;
}

export default function Section({children, title}: SectionProps) { 
    return (
        <section id="center">
            {title && <h1>{title}</h1>}
            {children}
        </section>
    )
}