/**
 * Utility function to generate a SoundCloud embed URL from a track URL
 * @param trackUrl The URL of the SoundCloud track or playlist
 * @returns Properly formatted URL for embedding
 */

export const getSoundCloudEmbedUrl = (trackUrl: string): string => {
    //Make sure trackUrl is properly encoded
    const encodedUrl = encodeURIComponent(trackUrl);

    return `https://w.soundcloud.com/player/?url=${encodedUrl}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`;

};

/**
 * Checks if a URL is a valid SoundCloud URL
 * @param url The URL to check
 * @returns Boolean indicating if the URL is a SoundCloud URL
 */
export const isSoundCloudUrl = (url: string): boolean => {
    return url.includes('soundcloud.com');
};

/**
 * Extracts the track or playlist ID from a SoundCloud URL
 * @param url The SoundCloud URL
 * @returns The track or playlist ID
 */
export const getSoundCloudId = (url: string): string | null => {
    //Simple regex to extract the ID from a soundcloud url
    const regex = /soundcloud\.com\/[^\/]+\/([^\/]+)/;
    const match = url.match(regex);

    return match ? match[1] : null;
};

/**
 * Creates a SoundCloud widget URL for a specific track or playlist
 * @param trackOrPlaylistUrl The SoundCloud URL for a track or playlist
 * @param options Optional parameters for the widget
 * @returns A complete widget URL for embedding
 */

export const createSoundCloudWidgetUrl = (
    trackOrPlaylistUrl: string,
    options: {
        color?: string;
        autoPlay?: boolean;
        hideRelated?: boolean;
        showComments?: boolean;
        showUser?: boolean;
        showReposts?: boolean;
        visual?: boolean;
    } = {}
): string => {
    //Default options
    const defaultOptions = {
    color: '#ff5500',
    autoPlay: false,
    hideRelated: false,
    showComments: true,
    showUser: true,
    showReposts: false,
    visual: true,
    ...options
    };

//Encode the url and color
const encodedUrl = encodeURIComponent(trackOrPlaylistUrl);
const encodedColor = encodeURIComponent(defaultOptions.color);

//Build the widget with all parameters
return `https://w.soundcloud.com/player/?url=${encodedUrl}` +
    `&color=${encodedColor}` +
    `&auto_play=${defaultOptions.autoPlay}` +
    `&hide_related=${defaultOptions.hideRelated}` +
    `&show_comments=${defaultOptions.showComments}` +
    `&show_user=${defaultOptions.showUser}` +
    `&show_reposts=${defaultOptions.showReposts}` +
    `&show_teaser=true` +
    `&visual=${defaultOptions.visual}`;
};

/**
 * Generates the HTML iframe code for embedding a SoundCloud track or playlist
 * @param trackOrPlaylistUrl The SoundCloud URL for a track or playlist
 * @param options Optional parameters for the widget
 * @returns HTML string with the complete iframe for embedding
 */
export const generateSoundCloudEmbedCode = (
    trackOrPlaylistUrl: string,
    options: {
      width?: string;
      height?: number;
      color?: string;
      autoPlay?: boolean;
      hideRelated?: boolean;
      showComments?: boolean;
      showUser?: boolean;
      showReposts?: boolean;
      visual?: boolean;
    } = {}
): string => {
    // Default options
    const defaultOptions = {
      width: '100%',
      height: 166,
      ...options
    };
    
    // Create the widget URL
    const widgetUrl = createSoundCloudWidgetUrl(trackOrPlaylistUrl, options);
    
    // Generate the iframe HTML
    return `<iframe width="${defaultOptions.width}" height="${defaultOptions.height}" scrolling="no" frameborder="no" allow="autoplay" src="${widgetUrl}"></iframe>`;
};

/**
 * Converts a regular SoundCloud URL to an API URL for embedding
 * @param url The standard SoundCloud URL (e.g., https://soundcloud.com/user/track-name)
 * @returns API URL for embedding (e.g., https://api.soundcloud.com/tracks/123456789)
 */
export const convertToSoundCloudApiUrl = (url: string): string => {
    // This is a simplified example - in a real implementation, you would need 
    // to use the SoundCloud API to resolve the URL to a track or playlist ID
    
    // For demonstration purposes, we'll just transform the URL format
    if (url.includes('/sets/')) {
      // It's a playlist
      return url.replace('soundcloud.com', 'api.soundcloud.com/playlists');
    } else {
      // It's a track
      return url.replace('soundcloud.com', 'api.soundcloud.com/tracks');
    }
    
    // Note: In a real implementation, you would use the SoundCloud API
    // to resolve the URL to get the correct API URL
  };