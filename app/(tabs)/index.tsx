import { StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import Svg, { Circle, Text as SvgText } from 'react-native-svg'; // Import Svg, Circle, and Text from 'react-native-svg';
import { useState, useEffect } from 'react';

export default function TabOneScreen() {
  const title = 'Toronto, ON';
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  // State to manage the percentage value
  const [percentage, setPercentage] = useState(0); // Initial value is 0

  // Simulate changing the percentage value (e.g., 80%)
  useEffect(() => {
    // Replace this with the actual percentage value (e.g., from an API)
    const newPercentage = 50;

    // Update the percentage value
    setPercentage(newPercentage);
  }, []);

  // Additional information
  const airQuality = '24 - Low Health Risk';
  const mainPollutant = 'Nitrogen Oxide (N02)';
  const recommendations = 'Wear your mask when going out.';

  return (
    <View style={styles.container}>
      {/* Location */}
      <Text style={styles.title}>{title}</Text>

      {/* Date */}
      <Text style={styles.dateText}>{currentDate}</Text>

      <View style={styles.circleProgress}>
        <CircleProgress value={percentage} label="Good" />
      </View>
      <View style={{ height: 10 }} /> 

  <AirQualityBlock label="Air Quality" value={airQuality} />
  <View style={{ height: 10 }} /> 

  <MainPollutantBlock label="Main Pollutant" value={mainPollutant} />
  <View style={{ height: 10 }} /> 

  <RecommendationsBlock label="Recommendations" value={recommendations} />
    </View>
  );
}

// A reusable component for displaying information
function InfoBlock({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.infoBlock}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  );
}

// Circular Progress Component
function CircleProgress({ value, label }: { value: number; label: string }) {
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const dashArray = (value / 100) * circumference;

  return (
    <Svg width={150} height={150}>
      <Circle
        r={radius}
        cx={75}
        cy={75}
        fill="transparent"
        stroke="#E0E0E0" // Background color
        strokeWidth={20} // Width of the circle
      />
      <Circle
        r={radius}
        cx={75}
        cy={75}
        fill="transparent"
        stroke="#00FF00" // Progress color
        strokeWidth={20} // Width of the circle
        strokeDasharray={`${dashArray}, 360`}
        transform={`rotate(-90 75 75)`} // Start from the top
      />
      <SvgText
        x="50%"
        y="50%"
        textAnchor="middle"
        fontSize="25"
        fontWeight="bold"
        fill="#000"
      >
        {label}
      </SvgText>
    </Svg>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E0FFE0',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 16,
    marginVertical: 10,
  },
  infoBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#E0FFE0',
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoValue: {
    fontSize: 16,
  },
  circleProgress: {
    alignItems: 'center',
    backgroundColor: '#E0FFE0',
  },
  airQualityBlock: {
    backgroundColor: '#ffd700', 
    padding: 15, 
    borderRadius: 8, 
    height: 80, 
    alignItems: 'center', 
    justifyContent: 'center', 
    width: 300, 
  },
    mainPollutantBlock: {
    backgroundColor: '#dda0dd', 
    padding: 12,
    borderRadius: 5, 
    height: 80, 
    alignItems: 'center', 
    justifyContent: 'center', 
    width: 300, 
    },
    recommendationsBlock: {
    backgroundColor: '#87ceeb', 
    padding: 10, 
    borderRadius: 8, 
    height: 80, 
    alignItems: 'center', 
    justifyContent: 'center', 
    width: 300, 
    },
});

function AirQualityBlock({ label, value }: { label: string; value: string }) {
  return (
    <View style={[styles.airQualityBlock]}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  );
}

function MainPollutantBlock({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.mainPollutantBlock}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  );
}

function RecommendationsBlock({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.recommendationsBlock}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  );
}
