import Image from "next/image";
import Link from "next/link";
import FooterBottom from "../../../components/FooterBottom";
import events from "../../../data/events.json";
import eventPage from "../../../styles/Eventpage.module.css";

const EventPage = ({ params }) => {
  const [eventData] = events.events.filter(
    (event) => event.short_title == params.eventId
  );

  return (
    <div>
      <br />
      <Link href="/events">BACK</Link>
      {eventData ? (
        <div className={eventPage.mainContainer}>
          <div className={eventPage.leftContainer}>
            <div className={eventPage.eventImageContainer}>
              <Image
                src={eventData.image}
                width={300}
                height={300}
                alt={eventData.title}
              />
            </div>

            <div className={eventPage.creatorsBigContainer}>
              <div className={eventPage.creatorsContainer}>
                {" "}
                <h3>Created by</h3>
                <div className={eventPage.creatorsListContainer}>
                  {eventData.created_by.map((creator) => (
                    <div key={creator.id}>
                      <div>
                        <Image
                          src="/08.png"
                          width={600}
                          height={600}
                          alt="event image"
                        />
                        <p>{creator.name}</p>
                      </div>
                      <Link href={creator.twitter}>𝕏</Link>
                    </div>
                  ))}
                </div>
              </div>
              <div className={eventPage.sponsorsContainer}>
                {" "}
                <h3>Sponsors</h3>
                <div className={eventPage.sponsorListContainer}>
                  {eventData.sponsors.map((sponsor) => (
                    <div key={sponsor.id}>
                      <Link href={sponsor.link}>
                        <Image
                          src="/08.png"
                          width={600}
                          height={600}
                          alt="event image"
                        />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={eventPage.galleryContainer}>
              <div className={eventPage.galleryUpper}>
                {" "}
                <h3>Gallery</h3> <button>View All</button>
              </div>
              <div className={eventPage.galleryLower}>
                {eventData.event_images.map((eventImg) => (
                  <Image
                    key={eventImg.id}
                    src="/08.png"
                    width={500}
                    height={500}
                    alt="event image"
                  />
                ))}
              </div>
            </div>
            <div>
              <br />
              <h3>Who is coming?</h3>
              <button>Connect Wallet</button>
            </div>
          </div>

          <div className={eventPage.rightContainer}>
            <div className={eventPage.nameContainer}>
              <h4>
                {eventData.status} - {eventData.type}
              </h4>
              <h1>{eventData.title}</h1>
            </div>

            <div className={eventPage.dateContainer}>
              <div>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 -960 960 960"
                  width="20px"
                  fill="#e8eaed"
                >
                  <path d="M216-96q-29.7 0-50.85-21.5Q144-139 144-168v-528q0-29 21.15-50.5T216-768h72v-96h72v96h240v-96h72v96h72q29.7 0 50.85 21.5Q816-725 816-696v528q0 29-21.15 50.5T744-96H216Zm0-72h528v-360H216v360Zm0-432h528v-96H216v96Zm0 0v-96 96Zm264.21 216q-15.21 0-25.71-10.29t-10.5-25.5q0-15.21 10.29-25.71t25.5-10.5q15.21 0 25.71 10.29t10.5 25.5q0 15.21-10.29 25.71t-25.5 10.5Zm-156 0q-15.21 0-25.71-10.29t-10.5-25.5q0-15.21 10.29-25.71t25.5-10.5q15.21 0 25.71 10.29t10.5 25.5q0 15.21-10.29 25.71t-25.5 10.5Zm312 0q-15.21 0-25.71-10.29t-10.5-25.5q0-15.21 10.29-25.71t25.5-10.5q15.21 0 25.71 10.29t10.5 25.5q0 15.21-10.29 25.71t-25.5 10.5Zm-156 144q-15.21 0-25.71-10.29t-10.5-25.5q0-15.21 10.29-25.71t25.5-10.5q15.21 0 25.71 10.29t10.5 25.5q0 15.21-10.29 25.71t-25.5 10.5Zm-156 0q-15.21 0-25.71-10.29t-10.5-25.5q0-15.21 10.29-25.71t25.5-10.5q15.21 0 25.71 10.29t10.5 25.5q0 15.21-10.29 25.71t-25.5 10.5Zm312 0q-15.21 0-25.71-10.29t-10.5-25.5q0-15.21 10.29-25.71t25.5-10.5q15.21 0 25.71 10.29t10.5 25.5q0 15.21-10.29 25.71t-25.5 10.5Z" />
                </svg>
                <div>
                  <p>{eventData.date} </p> <p>{eventData.time} </p>{" "}
                </div>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 -960 960 960"
                  width="20px"
                  fill="#e8eaed"
                >
                  <path d="M480.21-480Q510-480 531-501.21t21-51Q552-582 530.79-603t-51-21Q450-624 429-602.79t-21 51Q408-522 429.21-501t51 21ZM480-191q119-107 179.5-197T720-549q0-105-68.5-174T480-792q-103 0-171.5 69T240-549q0 71 60.5 161T480-191Zm0 95Q323.03-227.11 245.51-339.55 168-452 168-549q0-134 89-224.5T479.5-864q133.5 0 223 90.5T792-549q0 97-77 209T480-96Zm0-456Z" />
                </svg>

                <div>
                  <p>{eventData.location.venue} </p>{" "}
                  <p>{eventData.location.address} </p>{" "}
                </div>
              </div>

              {eventData.status !== "Ended" && (
                <div className={eventPage.joinContainer}>
                  <button>Join Event</button>
                </div>
              )}
            </div>

            <div className={eventPage.lowerRightContainer}>
              {eventData.disclaimer && (
                <span className={eventPage.disclaimerContainer}>
                  <p>
                    {eventData.disclaimer}{" "}
                    <Link href={eventData.disclaimer_link}>
                      <b>Contact us</b>
                    </Link>{" "}
                    if you have any questions.
                  </p>
                </span>
              )}
              <div className={eventPage.aboutContainer}>
                <h2>About</h2>
                <p>{eventData.description}</p>
                {eventData.rewards && (
                  <div className={eventPage.rewardsContainer}>
                    <h3>Rewards:</h3>
                    <div>
                      {eventData.rewards.map((reward) => (
                        <span key={reward.id}>
                          <p>
                            {reward.name} x {reward.amount}
                          </p>

                          {reward.winner ? (
                            <p>Winner: {reward.winner}</p>
                          ) : (
                            <p>Winner: TBA</p>
                          )}

                          <p>
                            {reward.transaction ? (
                              <Link href={reward.transaction}>
                                Transaction{"  "}
                              </Link>
                            ) : (
                              <p>TBA </p>
                            )}
                          </p>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {eventData.hosts.length >= 1 && (
                <div className={eventPage.hostsContainer}>
                  <h2>Hosts</h2>
                  {eventData.hosts.map((host) => (
                    <span key={host.id}>
                      <Link href={host.link}>{host.name}</Link>
                      <p>{host.about}</p>
                    </span>
                  ))}
                </div>
              )}

              <div className={eventPage.agendaContainer}>
                <span>
                  <h2>Agenda</h2>
                  <ul>
                    {eventData.agenda.steps.map((step) => (
                      <li key={step.id}>
                        <p>{step.line}</p>
                      </li>
                    ))}
                  </ul>
                </span>

                <span>
                  <h3>Additional links:</h3>
                  <ul>
                    {eventData.agenda.additional_links.map((link) => (
                      <li key={link.id}>
                        <span>
                          <p>
                            {link.title} <Link href={link.url}>here.</Link>
                          </p>
                        </span>
                      </li>
                    ))}
                  </ul>
                </span>

                {eventData.agenda.additional_one && (
                  <span>
                    <h3>{eventData.agenda.additional_one.name}</h3>
                    <ul className={eventPage.agendaRulesContainer}>
                      {eventData.agenda.additional_one.lines.map((line) => (
                        <li key={line.id}>
                          <p>{line.line}</p>
                        </li>
                      ))}
                    </ul>
                  </span>
                )}

                {eventData.agenda.additional_two && (
                  <span>
                    <h3>{eventData.agenda.additional_two.name}</h3>
                    <ul className={eventPage.agendaRulesContainer}>
                      {eventData.agenda.additional_two.lines.map((line) => (
                        <li key={line.id}>
                          <p>{line.line}</p>
                        </li>
                      ))}
                    </ul>
                  </span>
                )}
              </div>

              <div className={eventPage.locationContainer}>
                <h2>Location</h2>
                <p>{eventData.location.address}</p>
                {!eventData.location.online && (
                  <div>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10392.707890767517!2d32.812107974614904!3d39.91526592463576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f3ea3aab92b%3A0x6edc34cbf115c92b!2zVC5DLiBLw7xsdMO8ciB2ZSBUdXJpem0gQmFrYW5sxLHEn8SxIEtZR00gTWlsbMOuIEvDvHTDvHBoYW5l!5e0!3m2!1str!2str!4v1738402421730!5m2!1str!2str"
                      width="60%"
                      height="300vw"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Event couldn't find</div>
      )}

      <br />
      <FooterBottom />
    </div>
  );
};

export default EventPage;
