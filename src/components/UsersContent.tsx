import ProfileCard from './ProfileCard';
import useFetch from '../hooks/useFetch'
import type { User } from '../interfaces/User';

function UsersContent() {
    const state = useFetch<User>('https://jsonplaceholder.typicode.com/users');

    if (state.status === 'loading') {
        return (<div>Loading</div>)
    }

    if (state.status === 'error') {
        return (<p>{state.message}</p>)
    }

    return (
        <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', listStyle: 'none'}}>
            {state.data.map((user: User) => {
                return (
                    <li key={user.id}>
                        <ProfileCard user={user} />
                    </li>
                )
            })}
        </ul>
    )
}

export default UsersContent
