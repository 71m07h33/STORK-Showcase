import { useEffect } from "react";
import { Location, useLocation } from "../../app/providers/locationProvider";
import { HomeHeader } from "./header";
import { HomeWhom } from "./whom";
import { HomeWhy } from "./why";

export const Home = () => {
    const { setLocation } = useLocation();
    setLocation(Location.Home);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return <div>
        <HomeHeader />
        <HomeWhy />
        <HomeWhom />
    </div>;
}
