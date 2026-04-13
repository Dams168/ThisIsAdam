import { useEffect, useState } from 'react';

const DISCORD_USER_ID = '933959242262659073';
const IMAGE_REFRESH_MS = 1_000;

const BASE_IMAGE_URL = `https://lanyard-profile-readme.vercel.app/api/${DISCORD_USER_ID}?borderRadius=15px&bg=0b0100&idleMessage=Probably%20doing%20something%20else...`;

const DiscordPresenceCard = () => {
  const [refreshToken, setRefreshToken] = useState(() => Date.now());

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRefreshToken(Date.now());
    }, IMAGE_REFRESH_MS);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return (
    <a
      href={`https://discord.com/users/${DISCORD_USER_ID}`}
      target='_blank'
      rel='nofollow noopener noreferrer'
    >
      <img src={`${BASE_IMAGE_URL}&v=${refreshToken}`} alt='Discord Presence' />
    </a>
  );
};

export default DiscordPresenceCard;
