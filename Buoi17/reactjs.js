// Reactjs

// props: tham số truyền từ 1 component này sang 1 component khác

// Ví dụ:
// Component con:
const ProductItem = ({ product }) => {
    return (
        <li>
            <p>Name: {product.name}</p>
            <img src={product.imgurl} width={100} height={100} />
        </li>
    )
}

export default ProductItem

// Component cha:
const ProductList = () => {
    return (
        <ul>
        {
            products.map((product) => {
                return (
                    <ProductItem key={product.id} product={product} />
                )
            })
        }
        </ul>
    )
}
