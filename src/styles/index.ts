import { extendTheme } from "@chakra-ui/react"
import colors from "./colors"
import styles from "./styles"
import components from "./components"

const config = {
    fonts: {
        heading: "Inter, sans-serif",
        body: "Inter, sans-serif"
    },
    components,
    colors,
    styles
}

export default extendTheme(config)
