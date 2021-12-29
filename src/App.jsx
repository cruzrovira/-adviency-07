import {useEffect, useState} from "react"
import {Flex, VStack, Text, Input, Button, Heading} from "@chakra-ui/react"
import {v4 as uuidv4} from "uuid"

const initRegalos = [
  {id: uuidv4(), name: "Medias"},
  {id: uuidv4(), name: "caramelos"},
  {id: uuidv4(), name: "Vitel Tone"},
]

function App() {
  const [regalos, setRegalos] = useState([])
  const [newRegalo, setNewRegalo] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    setRegalos(initRegalos)
  }, [])

  const regaloValidate = () => {
    if (newRegalo.trim() === "") {
      setError("El regalo no puede estar vacío")

      return false
    }
    for (let item of regalos) {
      if (item.name.toLocaleUpperCase() === newRegalo.trim().toLocaleUpperCase()) {
        setError("El regalo ya existe")

        return false
      }
    }
    setError("")

    return true
  }

  const handlerSubmit = (e) => {
    e.preventDefault()
    if (regaloValidate()) {
      setRegalos([...regalos, {id: uuidv4(), name: newRegalo.trim()}])
    }
    setNewRegalo("")
  }

  const handlerDelete = (id) => {
    setRegalos(regalos.filter((regalo) => regalo.id !== id))
  }
  const handlerClear = () => {
    setRegalos([])
  }

  const regalosRender = regalos.map((item) => (
    <Flex key={item.id} justifyContent="space-between" w="100%">
      <Text>{item.name}</Text>
      <Button colorScheme="red" size="xs" onClick={() => handlerDelete(item.id)}>
        x
      </Button>
    </Flex>
  ))

  return (
    <Flex alignItems="center" justifyContent="center" minH="100vh" w="100%">
      <VStack background="white" boxShadow="md" p={4} w="30%">
        <Heading fontFamily="'Mountains of Christmas'">Regalos:</Heading>
        <Flex as="form" gap={2} onSubmit={handlerSubmit}>
          <Input
            placeholder="Regalo"
            value={newRegalo}
            onChange={(e) => setNewRegalo(e.target.value)}
          />
          <Button colorScheme="red" type="submit">
            Agregar
          </Button>
        </Flex>
        {error && <Text color="red.500">{error}</Text>}
        <VStack w="100%">
          {regalos.length !== 0 ? (
            regalosRender
          ) : (
            <Text color="gray.400">No hay regalos Grinch!! agrega uno .</Text>
          )}
        </VStack>
        {regalos.length !== 0 && (
          <Button colorScheme="red" w="100%" onClick={handlerClear}>
            Borrar todo
          </Button>
        )}
      </VStack>
    </Flex>
  )
}

export default App
