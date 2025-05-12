import React from "react";

interface SoundCloudEmbedProps {
    url: string;
    title?: string;
    height?: number;
    autoPlay?: boolean;
    hideRelated?: boolean;
    showComments?: boolean;
    showUser?: boolean;
    showReposts?: boolean;
    visual?: boolean;
    color?: string;
}

const SoundCloudEmbed = ({
    url,
    title = 'SoundCloud Track',
    height = 166,
    autoPlay = false,
    hideRelated = false,
    showComments = true,
    showUser = true,
    showReposts = false,
    visual = true,
    color = '#ff5500'
}: SoundCloudEmbedProps) => {
    const buildEmbedUrl = () => {
        //Make sure the url is properly encoded
        const encodedUrl = encodeURIComponent(url);
        const encodedColor = encodeURIComponent(color);

        return `https://w.soundcloud.com/player/?url=${encodedUrl}&color=${encodedColor}&auto_play=${autoPlay}&hide_related=${hideRelated}&show_comments=${showComments}&show_user=${showUser}&show_reposts=${showReposts}&show_teaser=true&visual=${visual}`;
    };

    return (
        <iframe
            title={title}
            width="100%"
            height={height}
            allow="autoplay"
            src={buildEmbedUrl()}
        ></iframe>
    );
};

export default SoundCloudEmbed;