import add from './add'
import subtract from './subtract'
import multiply from './multiply'
import divide from './divide'
import * as Type from './type'

const calc = {
  add,
  subtract,
  multiply,
  divide,
  ...Type
}

export default calc
export { add, subtract, multiply, divide }
