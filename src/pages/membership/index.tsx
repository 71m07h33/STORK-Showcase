import { useEffect } from "react";
import { Location, useLocation } from "../../app/providers/locationProvider";
import { MembershipExplanation } from "./explanation";
import { MembershipHeader } from "./header";
import { MembershipPrices } from "./prices";

export const Membership = () => {
    const { setLocation } = useLocation();
    setLocation(Location.Membership);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <div>
            <MembershipHeader />
            <MembershipPrices />
            <MembershipExplanation />
        </div>
    );
}
