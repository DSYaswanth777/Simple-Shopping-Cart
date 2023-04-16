import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/items.json"
import { formatCurrency } from "../utilities/formatCurrency"
type cartItemsProps = {
  id: number
  quantity: number
}
export const CartItem = ({ id, quantity }: cartItemsProps) => {
  const { removeFromCart } = useShoppingCart()
  const item = storeItems.find((i) => i.id === id)
  if (item == null) return null
  return (
    <Stack
      direction='horizontal'
      gap={2}
      className='d-flex aligin-items-center'
    >
      <img
        src={item.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
        alt='/'
      />
      <div className='me-auto'>
        <div>
          {item.name}
          {quantity > 1 && (
            <span className='text-muted' style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className='text-muted' style={{ fontSize: ".65rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div>{formatCurrency(item.price * quantity)}</div>
      <Button variant='outline-danger' onClick={() => removeFromCart(item.id)}>
          &times;
      </Button>
    </Stack>
  )
}
