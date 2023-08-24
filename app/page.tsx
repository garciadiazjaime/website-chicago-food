const places = [
  {
    name: 'Deep-Dish Pizza from Lou Malnati’s',
  },
  {
    name: "Chicago Italian Beef Sandwich at Al’s Italian Beef",
  },
  {
    name: 'Basic Fried Chicken Dinner at Harold’s Chicken Shack'
  },
  {
    name: 'Buttermilk Old-Fashioned Chicago Doughnut at Do-Rite Donut',
  },
  {
    name: 'Chicago-style hot dogs at Portillo’s'
  },
  {
    name: 'The Famous Kuma Burger at Kuma’s Corner'
  },
  {
    name: 'Jibarito at Papa’s Cache Sabroso',
  },
  {
    name: 'Butter Toffee at The Fudge Pot',
  },
  {
    name: 'Malbec Beef Empanada at 5411 Empanadas',
  },
  {
    name: 'Green Chicken Tamal at 5 Rabanitos'
  }
];

export default function Home() {
  const styles = {
    container: {
      maxWidth: 1080,
      margin: "0 auto",
    },
    color: {
      primary: "#21c0f1",
      secondary: "#ee343f",
    },
  };
  return (
    <main>
      <header
        style={{
          borderBottom: `1px solid ${styles.color.primary}`,
          padding: 20,
        }}
      >
        <h1 style={styles.container}>
          <span style={{ color: styles.color.primary }}>Chicago</span>{" "}
          <span style={{ color: styles.color.secondary }}>Food</span>
        </h1>
      </header>
      <div>
      <div style={styles.container}>
        {places.map((place, index) => <div key={index}>
          <h2>{place.name}</h2>
        </div>)}
      </div>
      </div>
    </main>
  );
}
