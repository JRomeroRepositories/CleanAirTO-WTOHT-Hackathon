import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'CleanAirTO', // Change the header name to 'CleanAirTO'
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="home" color={color} /> // "home" icon for "Today" tab
          ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'CleanAirTO', // Change the header name to 'CleanMap'
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="map" color={color} /> // "map" icon for "Map" tab
          ),
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          title: 'CleanAirTO', // Change the header name to 'CleanInsights'
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="lightbulb-o" color={color} /> // Use "lightbulb-o" or your desired icon name
          ),
        }}
      />
    </Tabs>
  );
}
