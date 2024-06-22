import MapShow from "./MapShow";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();



const MapPart = () => {
    return (
        <div className="flex w-full lg:flex-row flex-col gap-4">
            <div data-aos="flip-left" data-aos-duration="1000" className="lg:w-1/2 flex flex-col justify-center items-start p-4">
                <h1 className="text-4xl font-bold">Find us</h1>
                <p>You can find us using this maps and easyily use it . </p>
            </div>
            <div className="lg:w-1/2">
                <MapShow />
            </div>

        </div>
    );
};

export default MapPart;