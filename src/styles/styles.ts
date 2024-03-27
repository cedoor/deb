import { SystemStyleObject } from "@chakra-ui/react"
import { Styles } from "@chakra-ui/theme-tools"

const styles: Styles = {
    global: (): SystemStyleObject => ({
        body: {
            bg: "background.50"
        }
    })
}

export default styles
