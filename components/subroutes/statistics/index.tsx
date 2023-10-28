// React Peer Dependencies
import React from "react";
import { View } from "react-native";
// React Naive Paper
import { ProgressBar } from "react-native-paper";
// Custom Components
import { Header, PieChart } from "../../../constants/components";
// Defaults
import defaults from "../../../constants/defaults";
// Types And Interfaces
type StatisticsProps = {
  todayEmissions: number;
  weekEmission: number[];
  weekActivity: number[];
};

function Statistics({
  todayEmissions,
  weekEmission,
  weekActivity,
}: StatisticsProps) {
  return (
    <View>
      <View>
        <Header>Today's Activity</Header>
        <ProgressBar progress={todayEmissions / defaults.dailyCarbonAvarage} />
      </View>
      <View>
        <Header>This Week's emissions</Header>
        <View>
          <PieChart data={weekEmission} />
        </View>
      </View>
      <View>
        <Header>This Week's emissions</Header>
        <View>
          <PieChart data={weekEmission} />
        </View>
      </View>
      <View>
        <Header>This Week's activities</Header>
        <View>
          <PieChart data={weekActivity} />
        </View>
      </View>
    </View>
  );
}

export default Statistics;
export type { StatisticsProps };
