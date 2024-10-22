import { Text } from "@/components/ui/text"

export default function ProductListItem( { product } ) {
    return (
        <Text size="2xl">{product.name}</Text>
        
    )
}