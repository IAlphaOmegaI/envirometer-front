import FontAwesome from '@expo/vector-icons/FontAwesome';
import {Link, Tabs} from 'expo-router';
import {Pressable, useColorScheme} from 'react-native';


/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={28} style={{marginBottom: -3}} {...props} />;
}

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: 'black',
            }}

        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: () => <TabBarIcon name="home" color={'black'}/>
                }}

            />
            <Tabs.Screen
                name="two"
                options={{
                    title: 'Achievements',
                    tabBarIcon: () => <TabBarIcon name="retweet" color={'black'}/>
                }}
            />
        </Tabs>
    );
}
