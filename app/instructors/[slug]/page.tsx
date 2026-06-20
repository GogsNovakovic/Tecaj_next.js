import { getInstructorBySlug } from "@/lib/data";
import Link from "next/link";

export default async function InstructorDetailPage({
    params
} : {
    params: Promise<{slug: string}>;
}) {
    const {slug} = await params
    const instructor = getInstructorBySlug(slug);

    return (
        <section className="pad-section">
            <div className="container">
                <nav className="back-nav">
                    <Link href="/instructors">Back to instructors</Link>
                </nav>

                <div className="profile-hero">
                    <div className="avatar avatar-lg">{initials(instructor.name)}</div>
                    <div className="profile-body">
                        <p className="eyebrow"></p>
                        <h1 className="title-display"></h1>
                        <p className="text-muted-sm max-prose"></p>
                    </div>
                </div>

                <div className="courses-below">
                    <h2 className="title-section"></h2>
                </div>

            </div>
        </section>
    )
}
