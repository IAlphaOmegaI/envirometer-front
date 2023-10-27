import {StyleSheet, View} from "react-native";
import React from "react";
import {Card, Chip, IconButton} from "react-native-paper";
import Header from "../Header/Header";

interface Props {
    activityTitle: string,
    activityDescription: string,
    activityID: number,
    emission: number,
}

const Activity = ({
                      activityTitle,
                      activityDescription,
                      activityID,
                      emission
                  }: Props) => {
    return (
        <Card style={styles.eventCard}>
            <Card.Title
                title={activityTitle}
                right={(props) => (
                    <IconButton
                        {...props}
                        icon={"arrow-right"}
                    />
                )}
            />
            <Card.Content>
                <Header>{activityDescription}</Header>
                <Header>{emission} kg</Header>
            </Card.Content>
        </Card>
    );
};

export default Activity;

const styles = StyleSheet.create({
    chip: {
        display: "flex",
        alignItems: "center",
    },
    chipsContainer: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        gap: 4,
    },
    eventCard: {
        margin: 5,
    },
});
