import React, { memo, useState } from 'react';
import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import { runtimeConfig } from '../../config';
import githubLogo from '../../icons/github.svg';
import instagramLogo from '../../icons/instagram.svg';
import kitLogo from '../../icons/kit.svg';
import tiktokLogo from '../../icons/tiktok.svg';
import twitchLogo from '../../icons/twitch.svg';
import twitterLogo from '../../icons/twitter.svg';
import discordLogo from '../../icons/discord.svg';
import youtubeLogo from '../../icons/youtube.svg';
import facebookLogo from '../../icons/facebook.svg';
import messengerLogo from '../../icons/messenger.svg';
import linkedinLogo from '../../icons/linkedin.svg';
import producthuntLogo from '../../icons/producthunt.svg';
import snapchatLogo from '../../icons/snapchat.svg';
import spotifyLogo from '../../icons/spotify.svg';
import redditLogo from '../../icons/reddit.svg';
import mediumLogo from '../../icons/medium.svg';
import pinterestLogo from '../../icons/pinterest.svg';
import soundcloudLogo from '../../icons/soundcloud.svg';
import figmaLogo from '../../icons/figma.svg';
import telegramLogo from '../../icons/telegram.svg';
import tumblrLogo from '../../icons/tumblr.svg';
import steamLogo from '../../icons/steam.svg';
import vimeoLogo from '../../icons/vimeo.svg';
import wordpressLogo from '../../icons/wordpress.svg';
import goodreadsLogo from '../../icons/goodreads.svg';
import skoobLogo from '../../icons/skoob.svg';
import letterboxdLogo from '../../icons/letterboxd.svg';
import mastodonLogo from '../../icons/mastodon.svg';
import microblogLogo from '../../icons/microblog.svg';
import emailLogo from '../../icons/email.svg';
import emailAltLogo from '../../icons/email_alt.svg';
import whatsappLogo from '../../icons/whatsapp.svg';
import stravaLogo from '../../icons/strava.svg';
import buyMeACoffeeLogo from '../../icons/buymeacoffee.svg';
import gitlabLogo from '../../icons/gitlab.svg';
import patreonLogo from '../../icons/patreon.svg';
import devtoLogo from '../../icons/devto.svg';
import Sort from '../Sort/Sort';
import paypalLogo from '../../icons/paypal.svg';
import slackLogo from '../../icons/slack.svg';
import stackoverflowLogo from '../../icons/stackoverflow.svg';
import lastfmLogo from '../../icons/lastfm.svg';
import giteaLogo from '../../icons/gitea.svg';
import polyworkLogo from '../../icons/polywork.svg';
import signalLogo from '../../icons/signal.svg';
import untappdLogo from '../../icons/untappd.svg';
import instantGamingLogo from '../../icons/instantgaming.svg';
import ghostLogo from '../../icons/ghost.svg';
import PopUp from '../popup/PopUp';

function Home(props) {
  const [url, setUrl] = useState(null);
  const [close, setClose] = useState(false);
  let order = [];
  if (runtimeConfig?.BUTTON_ORDER) {
    order = runtimeConfig.BUTTON_ORDER.split(',').reverse();
  }

  const buttonOrder = button => {
    return order.indexOf(button);
  };

  const renderCustomButtons = () => {
    const names = runtimeConfig.CUSTOM_BUTTON_NAME?.split(',');
    const urls = runtimeConfig.CUSTOM_BUTTON_URL?.split(',');
    const altTexts = runtimeConfig.CUSTOM_BUTTON_ALT_TEXT?.split(',');
    const texts = runtimeConfig.CUSTOM_BUTTON_TEXT?.split(',');
    const buttonColors = runtimeConfig.CUSTOM_BUTTON_COLOR?.split(',');
    const textColors = runtimeConfig.CUSTOM_BUTTON_TEXT_COLOR?.split(',');
    const icons = runtimeConfig.CUSTOM_BUTTON_ICON?.split(',');
    // have to clean up some of the strings to standardize for analytics

    return texts.map((t, i) => {
      // do not try to render button unless it has all of the required props
      return (
        <div key={i} order={buttonOrder(names[i]?.trim())}>
          {names &&
            names[i] &&
            urls &&
            urls[i] &&
            texts &&
            texts[i] &&
            buttonColors &&
            buttonColors[i] &&
            textColors &&
            textColors[i] &&
            altTexts &&
            altTexts[i] && (
              <Button
                name={names[i]?.trim().toLowerCase()}
                href={urls[i]?.trim()}
                displayName={texts[i]?.trim()}
                styles={{
                  backgroundColor: buttonColors[i]?.trim(),
                  color: textColors[i]?.trim(),
                }}
                alt={altTexts[i]?.trim()}
                icon={icons && icons[i]?.trim()}
              />
            )}
        </div>
      );
    });
  };
  const togglePop = () => {
    setClose(!close);
  };
  const onButthonClick = url => {
    togglePop();
    setUrl(url);
  };
  return (
    <>
      {close && <PopUp url={url} setClose={togglePop} />}
      <div className="container">
        <div className="row">
          <div className="column" style={{ marginTop: '12%' }}>
            <Avatar
              src={runtimeConfig.AVATAR_URL}
              srcSet={runtimeConfig.AVATAR_2X_URL}
              alt={runtimeConfig.AVATAR_ALT}
            />
            <h1>{`${runtimeConfig.NAME}`}</h1>
            <p>{runtimeConfig.BIO}</p>
            <Sort>
              {runtimeConfig.CUSTOM_BUTTON_TEXT && renderCustomButtons()}
              {runtimeConfig.YOUTUBE && (
                <Button
                  name="youtube"
                  // href={runtimeConfig.YOUTUBE}
                  onButthonClick={() => {
                    onButthonClick(runtimeConfig.YOUTUBE);
                  }}
                  displayName="YouTube"
                  logo={youtubeLogo}
                  order={buttonOrder('YOUTUBE')}
                />
              )}
              {runtimeConfig.TWITCH && (
                <Button
                  name="twitch"
                  // href={runtimeConfig.TWITCH}
                  onButthonClick={() => {
                    onButthonClick(runtimeConfig.TWITCH);
                  }}
                  displayName="Twitch"
                  logo={twitchLogo}
                  order={buttonOrder('TWITCH')}
                />
              )}
              {runtimeConfig.TWITTER && (
                <Button
                  name="twitter"
                  // href={runtimeConfig.TWITTER}
                  onButthonClick={() => {
                    onButthonClick(runtimeConfig.TWITTER);
                  }}
                  displayName="Twitter"
                  logo={twitterLogo}
                  order={buttonOrder('TWITTER')}
                />
              )}
              {runtimeConfig.INSTAGRAM && (
                <Button
                  name="instagram"
                  // href={runtimeConfig.INSTAGRAM}
                  onButthonClick={() => {
                    onButthonClick(runtimeConfig.INSTAGRAM);
                  }}
                  displayName="Instagram"
                  logo={instagramLogo}
                  order={buttonOrder('INSTAGRAM')}
                />
              )}
              {runtimeConfig.GITHUB && (
                <Button
                  name="github"
                  // href={runtimeConfig.GITHUB}
                  onButthonClick={() => {
                    onButthonClick(runtimeConfig.GITHUB);
                  }}
                  displayName="GitHub"
                  logo={githubLogo}
                  order={buttonOrder('GITHUB')}
                />
              )}

              {runtimeConfig.DISCORD && (
                <Button
                  name="discord"
                  // href={runtimeConfig.DISCORD}
                  onButthonClick={() => {
                    onButthonClick(runtimeConfig.DISCORD);
                  }}
                  displayName="Discord"
                  logo={discordLogo}
                  order={buttonOrder('DISCORD')}
                />
              )}

              {runtimeConfig.TIKTOK && (
                <Button
                  name="tiktok"
                  // href={runtimeConfig.TIKTOK}
                  onButthonClick={() => {
                    onButthonClick(runtimeConfig.TIKTOK);
                  }}
                  displayName="TikTok"
                  logo={tiktokLogo}
                  order={buttonOrder('TIKTOK')}
                />
              )}
              {runtimeConfig.FACEBOOK && (
                <Button
                  name="facebook"
                  // href={runtimeConfig.FACEBOOK}
                  onButthonClick={() => {
                    onButthonClick(runtimeConfig.FACEBOOK);
                  }}
                  displayName="Facebook"
                  logo={facebookLogo}
                  order={buttonOrder('FACEBOOK')}
                />
              )}
              {runtimeConfig.FACEBOOK_MESSENGER && (
                <Button
                  name="facebookmessenger"
                  // href={runtimeConfig.FACEBOOK_MESSENGER}
                  onButthonClick={() => {
                    onButthonClick(runtimeConfig.FACEBOOK_MESSENGER);
                  }}
                  displayName="Messenger"
                  logo={messengerLogo}
                  order={buttonOrder('FACEBOOK_MESSENGER')}
                />
              )}
              {runtimeConfig.LINKED_IN && (
                <Button
                  name="linkedin"
                  // href={runtimeConfig.LINKED_IN}
                  onButthonClick={() => {
                    onButthonClick(runtimeConfig.LINKED_IN);
                  }}
                  displayName="LinkedIn"
                  logo={linkedinLogo}
                  order={buttonOrder('LINKED_IN')}
                />
              )}
              {runtimeConfig.PRODUCT_HUNT && (
                <Button
                  name="producthunt"
                  // href={runtimeConfig.PRODUCT_HUNT}
                  onButthonClick={() => {
                    onButthonClick(runtimeConfig.PRODUCT_HUNT);
                  }}
                  displayName="Product Hunt"
                  logo={producthuntLogo}
                  order={buttonOrder('PRODUCT_HUNT')}
                />
              )}
              {runtimeConfig.SNAPCHAT && (
                <Button
                  name="snapchat"
                  // href={runtimeConfig.SNAPCHAT}
                  onButthonClick={() => {
                    onButthonClick(runtimeConfig.SNAPCHAT);
                  }}
                  displayName="SnapChat"
                  logo={snapchatLogo}
                  order={buttonOrder('SNAPCHAT')}
                />
              )}
              {runtimeConfig.SPOTIFY && (
                <Button
                  name="spotify"
                  // href={runtimeConfig.SPOTIFY}
                  onButthonClick={() => {
                    onButthonClick(runtimeConfig.SPOTIFY);
                  }}
                  displayName="Spotify"
                  logo={spotifyLogo}
                  order={buttonOrder('SPOTIFY')}
                />
              )}
              {runtimeConfig.REDDIT && (
                <Button
                  name="reddit"
                  // href={runtimeConfig.REDDIT}
                  onButthonClick={() => {
                    onButthonClick(runtimeConfig.REDDIT);
                  }}
                  displayName="Reddit"
                  logo={redditLogo}
                  order={buttonOrder('REDDIT')}
                />
              )}
              {runtimeConfig.MEDIUM && (
                <Button
                  name="medium"
                  // href={runtimeConfig.MEDIUM}
                  onButthonClick={() => {
                    onButthonClick(runtimeConfig.MEDIUM);
                  }}
                  displayName="Medium"
                  logo={mediumLogo}
                  order={buttonOrder('MEDIUM')}
                />
              )}
              {runtimeConfig.PINTEREST && (
                <Button
                  name="pinterest"
                  // href={runtimeConfig.PINTEREST}
                  onButthonClick={() => {
                    onButthonClick(runtimeConfig.PINTEREST);
                  }}
                  displayName="Pinterest"
                  logo={pinterestLogo}
                  order={buttonOrder('PINTEREST')}
                />
              )}
              {runtimeConfig.EMAIL && (
                <Button
                  name="default"
                  // href={`mailto:${runtimeConfig.EMAIL}`}
                  displayName={runtimeConfig.EMAIL_TEXT}
                  onButthonClick={() => {
                    onButthonClick(`mailto:${runtimeConfig.EMAIL}`);
                  }}
                  logo={emailLogo}
                  order={buttonOrder('EMAIL')}
                />
              )}

              {runtimeConfig.EMAIL_ALT && (
                <Button
                  name="default"
                  // href={`mailto:${runtimeConfig.EMAIL_ALT}`}
                  displayName={runtimeConfig.EMAIL_ALT_TEXT}
                  onButthonClick={() => {
                    onButthonClick(`mailto:${runtimeConfig.EMAIL_ALT}`);
                  }}
                  logo={emailAltLogo}
                  order={buttonOrder('EMAIL_ALT')}
                />
              )}

              {runtimeConfig.SOUND_CLOUD && (
                <Button
                  name="soundcloud"
                  // href={runtimeConfig.SOUND_CLOUD}
                  onButthonClick={() => {
                    onButthonClick(runtimeConfig.SOUND_CLOUD);
                  }}
                  displayName="SoundCloud"
                  logo={soundcloudLogo}
                  order={buttonOrder('SOUND_CLOUD')}
                />
              )}
              {runtimeConfig.FIGMA && (
                <Button
                  name="figma"
                  // href={runtimeConfig.FIGMA}
                  onButthonClick={() => {
                    onButthonClick(runtimeConfig.FIGMA);
                  }}
                  displayName="Figma"
                  logo={figmaLogo}
                  order={buttonOrder('FIGMA')}
                />
              )}

              {runtimeConfig.TELEGRAM && (
                <Button
                  name="telegram"
                  // href={runtimeConfig.TELEGRAM}
                  onButthonClick={() => {
                    onButthonClick(runtimeConfig.TELEGRAM);
                  }}
                  displayName="Telegram"
                  logo={telegramLogo}
                  order={buttonOrder('TELEGRAM')}
                />
              )}

              {runtimeConfig.TUMBLR && (
                <Button
                  name="tumblr"
                  // href={runtimeConfig.TUMBLR}
                  onButthonClick={() => {
                    onButthonClick(runtimeConfig.TUMBLR);
                  }}
                  displayName="Tumblr"
                  logo={tumblrLogo}
                  order={buttonOrder('TUMBLR')}
                />
              )}
              {runtimeConfig.STEAM && (
                <Button
                  name="steam"
                  // href={runtimeConfig.STEAM}
                  onButthonClick={() => {
                    onButthonClick(runtimeConfig.STEAM);
                  }}
                  displayName="Steam"
                  logo={steamLogo}
                  order={buttonOrder('STEAM')}
                />
              )}

              {runtimeConfig.VIMEO && (
                <Button
                  name="vimeo"
                  // href={runtimeConfig.VIMEO}
                  onButthonClick={() => {
                    onButthonClick(runtimeConfig.VIMEO);
                  }}
                  displayName="Vimeo"
                  logo={vimeoLogo}
                  order={buttonOrder('VIMEO')}
                />
              )}
              {runtimeConfig.WORDPRESS && (
                <Button
                  name="wordpress"
                  // href={runtimeConfig.WORDPRESS}
                  onButthonClick={() => {
                    onButthonClick(runtimeConfig.WORDPRESS);
                  }}
                  displayName="Wordpress"
                  logo={wordpressLogo}
                  order={buttonOrder('WORDPRESS')}
                />
              )}
              {runtimeConfig.GOODREADS && (
                <Button
                  name="goodreads"
                  // href={runtimeConfig.GOODREADS}
                  onButthonClick={() => {
                    onButthonClick(runtimeConfig.GOODREADS);
                  }}
                  displayName="Goodreads"
                  logo={goodreadsLogo}
                  order={buttonOrder('GOODREADS')}
                />
              )}
              {runtimeConfig.SKOOB && (
                <Button
                  name="skoob"
                  // href={runtimeConfig.SKOOB}
                  onButthonClick={() => {
                    onButthonClick(runtimeConfig.SKOOB);
                  }}
                  displayName="Skoob"
                  logo={skoobLogo}
                  order={buttonOrder('SKOOB')}
                />
              )}
              {runtimeConfig.LETTERBOXD && (
                <Button
                  name="letterboxd"
                  // href={runtimeConfig.LETTERBOXD}
                  onButthonClick={() => {
                    onButthonClick(runtimeConfig.LETTERBOXD);
                  }}
                  displayName="LetterBoxd"
                  logo={letterboxdLogo}
                  order={buttonOrder('LETTERBOXD')}
                />
              )}
              {runtimeConfig.MASTODON && (
                <Button
                  name="mastodon"
                  // href={runtimeConfig.MASTODON}
                  onButthonClick={() => {
                    onButthonClick(runtimeConfig.MASTODON);
                  }}
                  displayName="Mastodon"
                  logo={mastodonLogo}
                  order={buttonOrder('MASTODON')}
                />
              )}
              {runtimeConfig.MICRO_BLOG && (
                <Button
                  name="microblog"
                  // href={runtimeConfig.MICRO_BLOG}
                  onButthonClick={() => {
                    onButthonClick(runtimeConfig.MICRO_BLOG);
                  }}
                  displayName="Microblog"
                  logo={microblogLogo}
                  order={buttonOrder('MICRO_BLOG')}
                />
              )}
              {runtimeConfig.WHATSAPP && (
                <Button
                  name="whatsapp"
                  // href={runtimeConfig.WHATSAPP}
                  onButthonClick={() => {
                    onButthonClick(runtimeConfig.WHATSAPP);
                  }}
                  displayName="WhatsApp"
                  logo={whatsappLogo}
                  order={buttonOrder('WHATSAPP')}
                />
              )}
              {runtimeConfig.KIT && (
                <Button
                  name="kit"
                  // href={runtimeConfig.KIT}
                  onButthonClick={() => {
                    onButthonClick(runtimeConfig.KIT);
                  }}
                  displayName="Kit"
                  logo={kitLogo}
                  order={buttonOrder('KIT')}
                />
              )}
              {runtimeConfig.STRAVA && (
                <Button
                  name="strava"
                  // href={runtimeConfig.STRAVA}
                  onButthonClick={() => {
                    onButthonClick(runtimeConfig.STRAVA);
                  }}
                  displayName="Strava"
                  logo={stravaLogo}
                  order={buttonOrder('STRAVA')}
                />
              )}
              {runtimeConfig.BUYMEACOFFEE && (
                <Button
                  name="buymeacoffee"
                  // href={runtimeConfig.BUYMEACOFFEE}
                  onButthonClick={() => {
                    onButthonClick(runtimeConfig.BUYMEACOFFEE);
                  }}
                  displayName="Buy Me a Coffee"
                  logo={buyMeACoffeeLogo}
                  order={buttonOrder('BUYMEACOFFEE')}
                />
              )}
              {runtimeConfig.GITLAB && (
                <Button
                  name="gitlab"
                  // href={runtimeConfig.GITLAB}
                  onButthonClick={() => {
                    onButthonClick(runtimeConfig.GITLAB);
                  }}
                  displayName="GitLab"
                  logo={gitlabLogo}
                  order={buttonOrder('GITLAB')}
                />
              )}
              {runtimeConfig.PATREON && (
                <Button
                  name="patreon"
                  // href={runtimeConfig.PATREON}
                  onButthonClick={() => {
                    onButthonClick(runtimeConfig.PATREON);
                  }}
                  displayName="Patreon"
                  logo={patreonLogo}
                  order={buttonOrder('PATREON')}
                />
              )}
              {runtimeConfig.DEVTO && (
                <Button
                  name="devto"
                  // href={runtimeConfig.DEVTO}
                  onButthonClick={() => {
                    onButthonClick(runtimeConfig.DEVTO);
                  }}
                  displayName="Dev.to"
                  logo={devtoLogo}
                  order={buttonOrder('DEVTO')}
                />
              )}
              {runtimeConfig.PAYPAL && (
                <Button
                  name="paypal"
                  // href={runtimeConfig.PAYPAL}
                  onButthonClick={() => {
                    onButthonClick(runtimeConfig.PAYPAL);
                  }}
                  displayName="Paypal"
                  logo={paypalLogo}
                  order={buttonOrder('PAYPAL')}
                />
              )}
              {runtimeConfig.SLACK && (
                <Button
                  name="slack"
                  // href={runtimeConfig.SLACK}
                  onButthonClick={() => {
                    onButthonClick(runtimeConfig.SLACK);
                  }}
                  displayName="Slack"
                  logo={slackLogo}
                  order={buttonOrder('SLACK')}
                />
              )}
              {runtimeConfig.STACKOVERFLOW && (
                <Button
                  name="stackoverflow"
                  // href={runtimeConfig.STACKOVERFLOW}
                  onButthonClick={() => {
                    onButthonClick(runtimeConfig.STACKOVERFLOW);
                  }}
                  displayName="stack"
                  logo={stackoverflowLogo}
                  order={buttonOrder('STACKOVERFLOW')}
                />
              )}
              {runtimeConfig.LASTFM && (
                <Button
                  name="lastfm"
                  // href={runtimeConfig.LASTFM}
                  onButthonClick={() => {
                    onButthonClick(runtimeConfig.LASTFM);
                  }}
                  displayName="Last.fm"
                  logo={lastfmLogo}
                  order={buttonOrder('LASTFM')}
                />
              )}
              {runtimeConfig.GITEA && (
                <Button
                  name="gitea"
                  // href={runtimeConfig.GITEA}
                  onButthonClick={() => {
                    onButthonClick(runtimeConfig.GITEA);
                  }}
                  displayName="Gitea"
                  logo={giteaLogo}
                  order={buttonOrder('GITEA')}
                />
              )}
              {runtimeConfig.POLYWORK && (
                <Button
                  name="polywork"
                  // href={runtimeConfig.POLYWORK}
                  onButthonClick={() => {
                    onButthonClick(runtimeConfig.POLYWORK);
                  }}
                  displayName="Polywork"
                  logo={polyworkLogo}
                  order={buttonOrder('POLYWORK')}
                />
              )}
              {runtimeConfig.SIGNAL && (
                <Button
                  name="signal"
                  // href={runtimeConfig.SIGNAL}
                  onButthonClick={() => {
                    onButthonClick(runtimeConfig.SIGNAL);
                  }}
                  displayName="Signal"
                  logo={signalLogo}
                  order={buttonOrder('SIGNAL')}
                />
              )}
              {runtimeConfig.UNTAPPD && (
                <Button
                  name="untappd"
                  // href={runtimeConfig.UNTAPPD}
                  onButthonClick={() => {
                    onButthonClick(runtimeConfig.UNTAPPD);
                  }}
                  displayName="Untappd"
                  logo={untappdLogo}
                  order={buttonOrder('UNTAPPD')}
                />
              )}
              {runtimeConfig.INSTANTGAMING && (
                <Button
                  name="instantgaming"
                  // href={runtimeConfig.INSTANTGAMING}
                  onButthonClick={() => {
                    onButthonClick(runtimeConfig.INSTANTGAMING);
                  }}
                  displayName="Instant Gaming"
                  logo={instantGamingLogo}
                  order={buttonOrder('INSTANTGAMING')}
                />
              )}
              {runtimeConfig.GHOST && (
                <Button
                  name="ghost"
                  // href={runtimeConfig.GHOST}
                  onButthonClick={() => {
                    onButthonClick(runtimeConfig.GHOST);
                  }}
                  displayName="ghost"
                  logo={ghostLogo}
                  order={buttonOrder('GHOST')}
                />
              )}
            </Sort>
            <div>
              <p className="footer">{runtimeConfig.FOOTER}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(Home);
