import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useShoppingCart } from 'use-shopping-cart';
const Cards = ({livres}) => {
  const {addItem} = useShoppingCart()

  const addToCart=(product)=>{
    const target = {
      id : product._id,
      title : product.titre,
      image : product.couverture,
      price : product.prix,
      qtestock : product.qtestock,
      quantity : 1
      };
      addItem(target);
      console.log('Item added to cart:', target);
    
  }
  return (
    <div>
      <Card sx={{ maxWidth: 'auto',margin:1 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={livres.couverture}
        title={livres.titre}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {livres.prix}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {livres.titre.substr(0,20)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='contained' color="secondary"  size="large" onClick={()=>addToCart(livres)}><i class="fa-solid fa-cart-arrow-down"></i> &nbsp;Add to Cart</Button>
      </CardActions>
    </Card>

    </div>
  )
}

export default Cards
