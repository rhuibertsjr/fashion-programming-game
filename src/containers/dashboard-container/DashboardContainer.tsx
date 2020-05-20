import React, {PureComponent} from "react";
import Rooms from "@containers/dashboard-container/components/rooms/Rooms";

class DashboardContainer extends PureComponent{


    render() {
        return (
            <div>
                <Rooms />
            </div>
        );
    }
}

export default DashboardContainer