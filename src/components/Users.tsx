import ProfileCard from './ProfileCard';
import useFetch from '../hooks/useFetch'
import type { User } from '../interfaces/User';

function Users() {
    const {
        users,
        loading,
        error
    } = useFetch<User>('https://jsonplaceholder.typicode.com/users');

    const content = loading 
        ? (<div>Loading</div>) 
        : (error 
            ? (<p>{error}</p>) 
            : (<ul style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', listStyle: 'none'}}>
                {users.map((user: User) => {
                  return (
                        <li key={user.id}>
                            <ProfileCard user={user} />
                        </li>
                    )
                })}
            </ul>)
        )

    return (
        <div style={{ padding: '1rem' }}>
            {content}
        </div>
    )
}

export default Users;
