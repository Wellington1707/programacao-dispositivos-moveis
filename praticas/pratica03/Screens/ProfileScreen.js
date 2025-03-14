import { StyleSheet, View, Text } from "react-native";

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <View style={styles.profileImage} />
        <View>
          <Text style={styles.profileName}>João da Silva</Text>
          <Text style={styles.profileRole}>Desenvolvedor React Native</Text>
        </View>
      </View>
      <View style={styles.skillsSection}>
        <Text style={styles.sectionTitle}>Habilidades</Text>
        <View style={styles.skillsContainer}>
          <View style={styles.skillBadge}>
            <Text style={styles.skillName}>React Native</Text>
          </View>
          <View style={styles.skillBadge}>
            <Text style={styles.skillName}>JavaScript</Text>
          </View>
          <View style={styles.skillBadge}>
            <Text style={styles.skillName}>CSS</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFBFE",
    padding: 16,
  },
  profileSection: {
    flexDirection: "row", // Deixa a imagem ao lado do nome
    alignItems: "center", // Alinha verticalmente
    marginBottom: 24,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#EADDFF",
    marginRight: 16, // Dá um espaço entre a imagem e o texto
  },
  profileName: {
    fontSize: 20,
    fontWeight: "600",
    color: "#1C1B1F",
  },
  profileRole: {
    fontSize: 16,
    color: "#49454F",
    marginTop: 4, // Adiciona um pequeno espaçamento abaixo do nome
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "#1C1B1F",
    marginBottom: 8,
  },
  skillsSection: {
    marginTop: 16, // Dá um espaço entre "Habilidades" e o perfil
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  skillBadge: {
    backgroundColor: "#E8DEF8",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  skillName: {
    fontSize: 14,
    color: "#1C1B1F",
  },
});

export default ProfileScreen;
