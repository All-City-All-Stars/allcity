import React from "react";

export default function Card() {
  const Thumbnail = (props) => (
    <Image
      style={styles.thumbnail}
      source={{ uri: props.url }}
    />
  );

  const Heading = (props) => (
    <Text style={styles.heading}>{props.children}</Text>
  );

  const Title = (props) => (
    <Text style={styles.title}>{props.children}</Text>
  );

  const styles = StyleSheet.create({
    thumbnail: { height: 50, width: 50, borderRadius: 50 },
    heading: { fontSize: 18, fontWeight: "bold" },
    title: { fontSize: 18, fontWeight: "bold" },
  });

  // App-specific components

  const AllCityCard = (props) => (
    <View>
      <Thumbnail />
      <Title>Todo</Title>
    </View>
  );

  const allCityCardStyles = StyleSheet.create({
    card: {},
    title: {},
  });

  return <div></div>;
}
