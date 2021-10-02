import React, {useEffect, useState} from 'react';
import { Text } from 'react-native';
import { getToken } from '../components/auth/Storage';

function AdminDashboard() {
    const [token, setToken] = useState(null);
     
    useEffect(() => {
        async function retrieveToken() {
            const accessToken = await getToken("accessToken");
            setToken(accessToken);
        }

        retrieveToken();
    }, []);
    
    


    return (
        <Text onPress={() => console.log(token)}>
             hello
        </Text>
    )
}

export default AdminDashboard
