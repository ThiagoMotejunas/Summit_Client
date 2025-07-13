import { useAuth } from '../hooks/useAuth';

const HomePage = () => {

    const { user } = useAuth();
    console.log(user);
    
    return (
        <div>
            <h1>{user?.name}</h1>
            <p>{user?.id}</p>
            <p>{user?.email}</p>
        </div>
    )
}

export default HomePage