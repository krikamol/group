require 'httparty'
require 'jekyll'
require 'nokogiri'
require 'time'

# Fetches the latest videos of the YouTube playlists listed under `youtube_playlists`
# in _config.yml and exposes them as site.data['youtube'][<name>].
module YoutubePlaylist
  class YoutubePlaylistGenerator < Jekyll::Generator
    safe true
    priority :high

    FEED_URL = 'https://www.youtube.com/feeds/videos.xml?playlist_id='.freeze

    def generate(site)
      playlists = site.config['youtube_playlists']
      return if playlists.nil?

      site.data['youtube'] ||= {}
      playlists.each do |name, playlist_id|
        puts "Fetching YouTube playlist #{name}:"
        site.data['youtube'][name] = fetch_videos(playlist_id)
      end
    end

    def fetch_videos(playlist_id)
      response = HTTParty.get(FEED_URL + playlist_id, timeout: 15)
      return [] unless response.code == 200

      doc = Nokogiri::XML(response.body)
      doc.remove_namespaces!
      videos = doc.xpath('//entry').map do |entry|
        {
          'id' => entry.at_xpath('videoId')&.text,
          'title' => entry.at_xpath('title')&.text,
          'published' => Time.parse(entry.at_xpath('published').text)
        }
      end
      videos.reject { |v| v['id'].nil? }.sort_by { |v| v['published'] }.reverse
    rescue StandardError => e
      # Never fail the build because YouTube is unreachable; the section is just hidden.
      Jekyll.logger.warn 'YouTube:', "could not fetch playlist #{playlist_id}: #{e.message}"
      []
    end
  end
end
