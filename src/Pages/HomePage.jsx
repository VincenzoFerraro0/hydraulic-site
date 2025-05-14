import EmergencyServices from "../components/EmergencyServices";
import HeroBanner from "../components/HeroBanner";
export default function HomePage() {
    return (
        <>
            <section>
                <HeroBanner/>
            </section>
            <section>
                <EmergencyServices/>
            </section>
        </>
    )
};