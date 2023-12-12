import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View, Dimensions } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import Chart from "./component/Chart";

const { width: WIDTH_SCREEN } = Dimensions.get("window");

const TAB_WIDTH = WIDTH_SCREEN / 3;

const TABS = ["Tab 1", "Tab 2", "Tab 3"];

export default function App() {
  const [selectedTab, setSelectedTab] = useState(0);
  const offset = useSharedValue(-TAB_WIDTH);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));

  const handlePress = (tab: string) => {
    const newOffset = (() => {
      switch (tab) {
        case "Tab 1":
          return -TAB_WIDTH;
        case "Tab 2":
          return 0;
        case "Tab 3":
          return TAB_WIDTH;
        default:
          return -TAB_WIDTH;
      }
    })();

    offset.value = withTiming(newOffset);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.contentTabs}>
        <View style={styles.wrapperTabs}>
          {TABS.map((item, index) => (
            <Pressable
              key={item}
              style={styles.tab}
              onPress={() => {
                handlePress(item), setSelectedTab(index);
              }}
            >
              <Text style={styles.nameItem}>{item}</Text>
            </Pressable>
          ))}
        </View>
        <Animated.View style={[animatedStyles, styles.tabSelected]} />
      </View>
      {selectedTab === 0 && <Chart />}
      {selectedTab === 1 && <Chart />}
      {selectedTab === 2 && <Chart />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#171717",
    alignItems: "center",
  },
  contentTabs: {
    backgroundColor: "#4b505a",
    marginTop: 80,
    height: 40,
    alignItems: "center",
    borderRadius: 20,
    width: WIDTH_SCREEN - 20,
  },
  wrapperTabs: {
    flexDirection: "row",
    height: 40,
    alignItems: "center",
    zIndex: 1,
  },
  tab: {
    width: TAB_WIDTH,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    borderRadius: 20,
  },
  tabSelected: {
    height: 40,
    width: TAB_WIDTH - 20,
    backgroundColor: "#ec0d0d",
    position: "absolute",
    borderRadius: 20,
  },
  nameItem: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 13,
    letterSpacing: 0.4,
  },
});
