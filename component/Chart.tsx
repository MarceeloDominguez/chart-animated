import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import { LineChart } from "react-native-chart-kit";

const { width: WIDTH_SCREEN } = Dimensions.get("window");

export default function Chart() {
  return (
    <View style={styles.wrapperChart}>
      <LineChart
        data={{
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
              color: (opacity = 1) => `rgba(254, 0, 0, ${opacity})`,
              strokeWidth: 4,
            },
          ],
        }}
        width={WIDTH_SCREEN - 20}
        height={280}
        yAxisLabel="$"
        yAxisInterval={1}
        chartConfig={{
          backgroundGradientFrom: "#0B2447",
          backgroundGradientTo: "#0B2447",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          fillShadowGradientFrom: "#ec0d0d",
          fillShadowGradientTo: "transparent",
          fillShadowGradientToOffset: 1,
          fillShadowGradientFromOpacity: 1,
          fillShadowGradientToOpacity: 0.2,
          propsForDots: {
            // r: "6",
            // strokeWidth: "3",
            stroke: "transparent",
            fill: "transparent",
          },
          propsForHorizontalLabels: {
            fontWeight: "bold",
          },
          propsForVerticalLabels: {
            fontWeight: "bold",
          },
        }}
        bezier
        style={styles.chart}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapperChart: {
    height: 310,
    backgroundColor: "#0B2447",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  chart: {
    borderRadius: 20,
    backgroundColor: "#0B2447",
    height: 310,
    justifyContent: "flex-end",
  },
});
