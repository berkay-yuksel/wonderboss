"use client";
import { useState, useEffect } from "react";
import eventsData from "../../data/events.json";
import EventsStyles from "../../styles/Events.module.css";

import Image from "next/image";
import Link from "next/link";
import FooterBottom from "../../components/FooterBottom";
const Events = () => {
  const [events, setEvents] = useState(eventsData.events);
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [types, setTypes] = useState("");
  const [status, setStatus] = useState("");
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    let filtered = events;

    if (types.length > 0) {
      filtered = filtered.filter((event) => types.includes(event.type));
    }
    if (status) {
      filtered = filtered.filter((event) => event.status === status);
    }

    setFilteredEvents(filtered);
  }, [types, status]);

  const handleTypeChange = (e) => {
    const selectedType = e.target.value;
    if (e.target.checked) {
      setTypes([...types, selectedType]);
    } else {
      setTypes(types.filter((type) => type !== selectedType));
    }
  };

  return (
    <div className={EventsStyles.topContainer}>
      <div>
        <br />
        <Link href="/">BACK TO HOME PAGE</Link>
        <h1>EXPLORE EVENTS</h1>

        <div>
          <div className={EventsStyles.filterBox}>
            <div className={EventsStyles.advFilters}>
              <button onClick={() => setDisplay((prevDisplay) => !prevDisplay)}>
                Filter
              </button>
              <div style={{ display: display ? "flex" : "none" }}>
                <div>
                  <div>
                    <label>
                      <b>Event type:</b>
                    </label>
                    {["Contest", "Meeting", "Event"].map((type) => (
                      <div key={type}>
                        <label>
                          <input
                            type="checkbox"
                            value={type}
                            checked={types.includes(type)}
                            onChange={handleTypeChange}
                          />
                          {type}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button onClick={() => setStatus("")}>All</button>
              <button onClick={() => setStatus("Live")}>Live</button>
              <button onClick={() => setStatus("Upcoming")}>Upcoming</button>
              <button onClick={() => setStatus("Ended")}>Ended</button>
            </div>
          </div>
          <div className={EventsStyles.cardsContainer}>
            {filteredEvents.map((event) => (
              <Link key={event.id} href={`/events/${event.short_title}`}>
                <div>
                  <Image
                    src={event.image}
                    width={500}
                    height={500}
                    alt={event.title}
                  />

                  <h5>{event.status}</h5>

                  <h3>{event.title}</h3>
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20px"
                      viewBox="0 -960 960 960"
                      width="20px"
                      fill="#e8eaed"
                    >
                      <path d="M216-96q-29.7 0-50.85-21.5Q144-139 144-168v-528q0-29 21.15-50.5T216-768h72v-96h72v96h240v-96h72v96h72q29.7 0 50.85 21.5Q816-725 816-696v528q0 29-21.15 50.5T744-96H216Zm0-72h528v-360H216v360Zm0-432h528v-96H216v96Zm0 0v-96 96Zm264.21 216q-15.21 0-25.71-10.29t-10.5-25.5q0-15.21 10.29-25.71t25.5-10.5q15.21 0 25.71 10.29t10.5 25.5q0 15.21-10.29 25.71t-25.5 10.5Zm-156 0q-15.21 0-25.71-10.29t-10.5-25.5q0-15.21 10.29-25.71t25.5-10.5q15.21 0 25.71 10.29t10.5 25.5q0 15.21-10.29 25.71t-25.5 10.5Zm312 0q-15.21 0-25.71-10.29t-10.5-25.5q0-15.21 10.29-25.71t25.5-10.5q15.21 0 25.71 10.29t10.5 25.5q0 15.21-10.29 25.71t-25.5 10.5Zm-156 144q-15.21 0-25.71-10.29t-10.5-25.5q0-15.21 10.29-25.71t25.5-10.5q15.21 0 25.71 10.29t10.5 25.5q0 15.21-10.29 25.71t-25.5 10.5Zm-156 0q-15.21 0-25.71-10.29t-10.5-25.5q0-15.21 10.29-25.71t25.5-10.5q15.21 0 25.71 10.29t10.5 25.5q0 15.21-10.29 25.71t-25.5 10.5Zm312 0q-15.21 0-25.71-10.29t-10.5-25.5q0-15.21 10.29-25.71t25.5-10.5q15.21 0 25.71 10.29t10.5 25.5q0 15.21-10.29 25.71t-25.5 10.5Z" />
                    </svg>
                    {event.date}
                  </p>
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20px"
                      viewBox="0 -960 960 960"
                      width="20px"
                      fill="#e8eaed"
                    >
                      <path d="M480.21-480Q510-480 531-501.21t21-51Q552-582 530.79-603t-51-21Q450-624 429-602.79t-21 51Q408-522 429.21-501t51 21ZM480-191q119-107 179.5-197T720-549q0-105-68.5-174T480-792q-103 0-171.5 69T240-549q0 71 60.5 161T480-191Zm0 95Q323.03-227.11 245.51-339.55 168-452 168-549q0-134 89-224.5T479.5-864q133.5 0 223 90.5T792-549q0 97-77 209T480-96Zm0-456Z" />
                    </svg>
                    {event.location.venue}
                  </p>
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20px"
                      viewBox="0 -960 960 960"
                      width="20px"
                      fill="#e8eaed"
                    >
                      <path d="M237-285q54-38 115.5-56.5T480-360q66 0 127.5 18.5T723-285q35-41 52-91t17-104q0-129.67-91.23-220.84-91.23-91.16-221-91.16Q350-792 259-700.84 168-609.67 168-480q0 54 17 104t52 91Zm243-123q-60 0-102-42t-42-102q0-60 42-102t102-42q60 0 102 42t42 102q0 60-42 102t-102 42Zm.28 312Q401-96 331-126t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5T834-629.28q30 69.73 30 149Q864-401 834-331t-82.5 122.5Q699-156 629.28-126q-69.73 30-149 30Zm-.28-72q52 0 100-16.5t90-48.5q-43-27-91-41t-99-14q-51 0-99.5 13.5T290-233q42 32 90 48.5T480-168Zm0-312q30 0 51-21t21-51q0-30-21-51t-51-21q-30 0-51 21t-21 51q0 30 21 51t51 21Zm0-72Zm0 319Z" />
                    </svg>
                    {event.creator}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <FooterBottom />
    </div>
  );
};

export default Events;
