import type { User } from "../interfaces/User";
import './ProfileCard.css';
import useTheme from "../context/useTheme";

function ProfileCard({ user }: { user: User }) {
    const { darkMode } = useTheme();
    const {
        id,
        name,
        username,
        email,
        website,
        address
    } = user;

    const avatarUrl = `https://picsum.photos/200?random=${id}`
    const mapsUrlByGeo = address && address.geo 
        ? `https://www.google.com/maps/search/?api=1&query=${address.geo.lat},${address.geo.lng}` 
        : null;

    return (
        <div className={`card-wrapper ${darkMode ? 'dark-card-wrapper' : ''}`}>
            <img width="100px" height='100px' src={avatarUrl} alt={name} />
            <div className="card-content">
                <span>{name}</span>
                <p>{username}</p> 
                <p>Website url: <a href={`https://${website}`} target="_blank">website</a></p>
                <span>
                    {mapsUrlByGeo ? (<a href={mapsUrlByGeo} target="_blank">Address</a>) : "Address wasn't provided"}
                </span>
                <span>email: <a href={'mailto:' + email}>{email}</a></span>
            </div>
        </div>
    )
}

export default ProfileCard
