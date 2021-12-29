import { extendTheme} from "@chakra-ui/react"
import bg from "../source/bg.jpg"
export default extendTheme({
styles: {
  global: {
    body: {
      backgroundImage: `url(${bg})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      fontSize:"16px",
      w: "100%",
      minH:"100vh",
    }
  }
}
})