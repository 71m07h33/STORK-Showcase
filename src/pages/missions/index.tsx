import { useEffect } from "react";
import { Location, useLocation } from "../../app/providers/locationProvider";
import { MissionsGoals } from "./goals";
import { MissionsHeader } from "./header";

export const Missions = () => {
    const { setLocation } = useLocation();
    setLocation(Location.Missions);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return <div>
        <MissionsHeader />
        <MissionsGoals />
    </div>
}
