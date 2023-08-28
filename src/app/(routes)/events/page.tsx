import CenterLayout from "@/app/components/CenterLayout";
import React from "react";
import Events from "../../components/Events";

function Event() {
    return (
        <>
            <CenterLayout>
                <h1>Event</h1>
                <Events />
            </CenterLayout>
        </>
    );
}

export default Event;
