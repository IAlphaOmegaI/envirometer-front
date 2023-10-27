import {Dimensions, ScrollView, StyleSheet} from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import {Text, View} from '../../components/Themed';
import {Button, Tabs} from "../../constants/components";
import useFetch from "../../hooks/useFetch";
import {useMemo, useRef, useState} from "react";
import Drawer, {DrawerContent, DrawerHandle} from "../../components/general/Drawer/Drawer";
import {FAB, Searchbar, useTheme} from "react-native-paper";
import CreateActivity from "../../components/subroutes/create-activity";

export default function TabOneScreen() {
    // const {data} = useFetch<string>({
    //     type: "GET",
    //     url: "http://10.0.13.207:8000/calculator",
    // });
    const drawerRef = useRef<DrawerHandle>(null);
    // * > imperative function
    const handleDrawerOpening = () => {
        if (drawerRef.current) drawerRef.current.openDrawer();
    };
    const theme = useTheme()

    const styles = useMemo(() => (StyleSheet.create({
            container: {
                display: "flex",
                flex: 1,
                padding: 20,
                height: Dimensions.get('screen').height,
                flexDirection: "column",
                backgroundColor: theme.colors.background,
                position: "relative",
            },
            title: {
                fontSize: 20,
                fontWeight: 'bold',
            },
            separator: {
                marginVertical: 30,
                height: 1,
                width: '80%',
            },
            tabContainer: {
                width: '100%',
                height: '100%',

            },
            action: {
                position: 'absolute',
                bottom: 10,
                right: 10
            },
            searchBar: {
                marginVertical: 10
            }
        })
    ), [theme])
    return (

        <View style={styles.container}>
            <Searchbar value={''} placeholder="Search" style={styles.searchBar}/>
            <Tabs tabs={[{
                summary: 'Today',
                icon: 'plus',
                content: <></>
            }, {
                summary: 'Overview',
                icon: 'calendar',
                content: <Text>Hi</Text>
            }]}/>

            <Drawer
                ref={drawerRef}
                drawerTitle={"Add Activity"}
                drawerContent={<CreateActivity />}
            />
            <FAB onPress={handleDrawerOpening} style={styles.action} icon={"plus"}/>
        </View>
    );
}

