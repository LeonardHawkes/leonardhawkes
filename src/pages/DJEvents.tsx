import React, {useState} from "react";
import SoundCloudEmbed from "../components/SoundCloudEmbed";
import AudioVisualizer from "../components/AudioVisualizer";
import DJBackground from "../components/DJBackground";
import './DJEvents.css';

interface Mix {
    id: number;
    title: string;
    description: string;
    soundCloudUrl: string;
    date: string;
    genre: string;
}

interface Event {
    id: number;
    title: string;
    venue: string;
    date: string;
    time: string;
    description: string;
    ticketLink?: string;
    image?: string;
}

const DJEvents = () => {
    const [mixes] = useState<Mix[]>([
        {
            id: 1,
            title: "Praise and Worship",
            description: "A mix of various sub-genres of gospel",
            soundCloudUrl: "https://soundcloud.com/doc_aux/praise-and-worship",
            date: "May 10, 2025",
            genre: "Gospel"
        },
        {
            id: 2,
            title: "BlerDCon Closing Set",
            description: "The final DJ set of BlerDCon 2025",
            soundCloudUrl: "https://soundcloud.com/doc_aux/blerdcon-2025-closing-set",
            date: "March 10, 2025",
            genre: "Various"
        },
        {
            id: 3,
            title: "BlerDCon Saturday Set",
            description: "Early Saturday Morning set at BlerDCon 2025",
            soundCloudUrl: "https://soundcloud.com/doc_aux/blerdcon-2025-saturday-set",
            date: "March 10, 2025",
            genre: "Various"
        },
        {
            id: 4,
            title: "Lovers Riot",
            description: "Valentine's Day Event Hosted by Yours Truly",
            soundCloudUrl: "https://soundcloud.com/doc_aux/lovers-riot",
            date: "February 16, 2025",
            genre: "R&B"
        },
        {
            id: 5,
            title: "Feel Good.json",
            description: "Uplifting positive music",
            soundCloudUrl: "https://soundcloud.com/doc_aux/feel-goodjson",
            date: "October 6, 2024",
            genre: "Alternative"
        },
        {
            id: 6,
            title: "DJ Doc Aux x GoodNews Radio",
            description: "Guest appearance on GoodNews Radio in Newark NJ",
            soundCloudUrl: "https://soundcloud.com/doc_aux/dj-doc-aux-x-good-news-radio",
            date: "September 13, 2024",
            genre: "Hip-Hop/Afrobeats/R&B"
        }
    ]);

    const bookingEmail = "djdocaux@gmail.com";

    return (
        <div className="dj-events-container">
            <DJBackground />

            <section className="dj-header">
                <h1>DJ Doc Aux</h1>
                <p>Open Format DJ</p>
                {/* <img src="/images/djdocaux.jpg" alt="DJ Doc Aux Logo" className="dj-logo" /> */}
            </section>

            <section className="latest-mix">
                <h2>Latest Mix</h2>
                <div className="featured-mix">
                    <div className="soundcloud-embed">
                        <SoundCloudEmbed
                            url={mixes[0].soundCloudUrl}
                            title={mixes[0].title}
                            height={300}
                            visual
                            color="#3a86ff"
                        />
                        <AudioVisualizer
                            color="#3a86ff"
                            height={60}
                            barCount={164}
                            animate
                        />
                    </div>
                    <div className="mix-details">
                        <h3>{mixes[0].title}</h3>
                        <p className="mix-date">{mixes[0].date}</p>
                        <p className="mix-genre">{mixes[0].genre}</p>
                        <p className="mix-description">{mixes[0].description}</p>
                    </div>
                </div>
            </section>
            <section className="all-mixes">
                <h2>All Mixes</h2>
                <div className="mixes-grid">
                    {mixes.map((mix) => (
                        <div className="mix-card" key={mix.id}>
                            <div className="soundcloud-embed">
                                <SoundCloudEmbed
                                    url={mix.soundCloudUrl}
                                    title={mix.title}
                                    height={166}
                                    visual
                                    color="#3a86ff"
                                />
                            </div>
                            <div className="mix-info">
                                <h3>{mix.title}</h3>
                                <p className="mix-date">{mix.date}</p>
                                <p className="mix-genre">{mix.genre}</p>
                                <p className="mix-description">{mix.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="booking-info">
                <h2>Book Me for Your Next Event!</h2>
                <p>Interested in booking me for your next event? Get in touch for availability and rates</p>
                <div className="booking-contact">
                    <a href={`mailto:${bookingEmail}`} className="booking-button">
                        <i className="fas fa-envelope"></i>Contact for Bookings
                    </a>
                </div>
            </section>

            {/*Add Soundcloud follow button */}
            <section className="soundcloud-follow">
                <h2>Follow me on SoundCloud!</h2>
                <div className="follow-container">
                    <iframe
                        title="SoundCloud Follow Button"
                        src="https://w.soundcloud.com/icon/?url=http%3A%2F%2Fsoundcloud.com%2Fdoc_aux&color=orange_white&size=64"
                        style={{width: 69, height: 69}}
                    ></iframe>
                    <p>Follow me on SoundCloud to stay updated with my latest mixes and tracks.</p>
                </div>
            </section>
        </div>
    );
};

export default DJEvents;