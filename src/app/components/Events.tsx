import React from "react";


function Events() {
    return (
        <>
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-8">All Events</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* .map here for events */}
                        {/* <Link href={}`} key={}> */}
                        <div className="block p-6 rounded-lg shadow-md border hover:bg-gray-100">
                            <h3 className="text-xl font-semibold mb-2">Event Name </h3>
                            <p className="text-gray-600 mb-2">Event Date </p>
                            <time className="text-sm text-gray-400">
                                event time
                            </time>
                        </div>
                        {/* </Link> */}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Events;
