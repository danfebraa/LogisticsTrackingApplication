import Pusher from 'pusher-js/react-native';
import Echo from 'laravel-echo';

const EchoHelper = () => {
    let PusherClient = new Pusher('ABCDEFG',{
        cluster: 'mt1',
        wsHost: '192.168.1.16',
        wsPort: '6001',
        enabledTransports: ['ws'],
        forceTLS: false
    });

    return new Echo({
        broadcaster: 'pusher',
        client: PusherClient
    });
}


export default EchoHelper();
