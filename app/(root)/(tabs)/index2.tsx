import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { cards } from "@/constants/data";
import images from "@/constants/images";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons"; // Импортируем иконки

const Indexx = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false); // Состояние для фокуса

  // Фильтрация карточек по названию
  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#121212",
        flex: 1,
        paddingVertical: 16,
        paddingHorizontal: 12,
      }}
    >
      <FlatList
        data={filteredCards}
        keyExtractor={(card) => card.id.toString()}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={{ alignItems: "center", marginBottom: 20 }}>
            <Image source={images.logo} style={{ width: 100, height: 100 }} />
            <View style={{ marginLeft: 8, alignItems: "center" }}>
              <Text
                style={{ color: "#ffb847", fontWeight: "800", fontSize: 24 }}
              >
                Real Estate
              </Text>
              <Text style={{ fontSize: 14, fontWeight: "300", color: "#aaa" }}>
                Live in Comfort
              </Text>
            </View>

            {/* Поле поиска с улучшенным UI */}
            <View
              style={{
                backgroundColor: "#1E1E1E",
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 16,
                paddingVertical: 8,
                borderRadius: 12,
                marginTop: 20,
                marginBottom: 20,
                borderWidth: 1,
                borderColor: isFocused ? "#F8C471" : "rgba(248, 196, 113, 0.2)",
                shadowColor: isFocused ? "#F8C471" : "#000",
                shadowOpacity: isFocused ? 0.3 : 0.1,
                shadowRadius: isFocused ? 10 : 5,
                shadowOffset: { width: 0, height: 2 },
                elevation: isFocused ? 5 : 2,
              }}
            >
              <Ionicons
                name="search"
                size={20}
                color="#F8C471"
                style={{ marginRight: 10 }}
              />
              <TextInput
                style={{
                  flex: 1,
                  color: "#F8C471",
                  fontSize: 16,
                }}
                placeholder="Search hotel..."
                placeholderTextColor="#706f6f"
                value={searchQuery}
                onChangeText={setSearchQuery}
                onFocus={() => setIsFocused(true)} // Устанавливаем фокус
                onBlur={() => setIsFocused(false)} // Снимаем фокус
              />
            </View>
          </View>
        }
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: "#1E1E1E",
              marginBottom: 24,
              borderRadius: 12,
              overflow: "hidden",
              shadowColor: "#000",
              shadowOpacity: 0.3,
              shadowRadius: 8,
              borderWidth: 1,
              borderColor: "rgba(248, 196, 113, 0.2)",
            }}
          >
            <View style={{ position: "relative" }}>
              <Image
                source={item.image}
                style={{ width: "100%", height: 200, resizeMode: "cover" }}
              />

              <View
                style={{
                  position: "absolute",
                  top: 12,
                  right: 12,
                  backgroundColor: "rgba(0,0,0,0.7)",
                  borderRadius: 50,
                  paddingHorizontal: 10,
                  paddingVertical: 4,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Image
                  source={images.rating}
                  style={{ width: 15, height: 15 }}
                />
                <Text
                  style={{
                    color: "#F8C471",
                    marginLeft: 5,
                    fontWeight: "bold",
                  }}
                >
                  {item.rating}
                </Text>
              </View>
            </View>
            <View style={{ padding: 16 }}>
              <Text
                style={{ color: "#F8C471", fontWeight: "800", fontSize: 20 }}
              >
                {item.title}
              </Text>
              <Text style={{ color: "#aaa", marginTop: 8 }}>
                📍 {item.location}
              </Text>
              <Text style={{ color: "#ccc", marginTop: 4 }}>
                🏡 Type:{" "}
                <Text style={{ fontWeight: "600", color: "white" }}>
                  {item.category}
                </Text>
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 16,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#F8C471",
                    paddingHorizontal: 16,
                    paddingVertical: 8,
                    borderRadius: 8,
                    shadowColor: "#000",
                    shadowOpacity: 0.2,
                    shadowRadius: 4,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "bold",
                      color: "#1E1E1E",
                    }}
                  >
                    {item.price}
                  </Text>
                </View>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#1E1E1E",
                    paddingVertical: 8,
                    paddingHorizontal: 20,
                    borderRadius: 12,
                    overflow: "hidden",
                    borderWidth: 1,
                    borderColor: "rgba(248, 196, 113, 0.2)",
                  }}
                >
                  <Link
                    href={`/houseDetails?house=${encodeURIComponent(
                      JSON.stringify(item)
                    )}`}
                    asChild
                  >
                    <Text
                      style={{
                        color: "#F8C471",
                        fontSize: 18,
                        fontWeight: "bold",
                      }}
                    >
                      View
                    </Text>
                  </Link>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Indexx;
