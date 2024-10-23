import { FlatList, SafeAreaView } from "react-native";
import products from '../assets/products.json'
import ProductListItem from "../components/ProductListItem";
import { Stack } from "expo-router";

export default function HomeScreen() {
    return (
        <SafeAreaView>
            <Stack.Screen options={{ title: 'Shop' }} />
            <FlatList
                data={products}
                numColumns={2}
                contentContainerClassName="gap-2"
                columnWrapperClassName="gap-2"
                renderItem={({ item }) => <ProductListItem product={item} /> }>
            </FlatList>
        </SafeAreaView>
        
    )
}

