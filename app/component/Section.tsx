import Consulting from "./Consulting";
import Outsourcing from "./Outsourcing";
import SystemsDevelopment from "./SystemsDevelopment";

export default function Section() {
    return (
        <div className="flex gap-44 md:max-xl:flex-col md:gap-16">
            <Outsourcing />
            <SystemsDevelopment />
            <Consulting />
        </div>
    )
}