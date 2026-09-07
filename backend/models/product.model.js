import mangoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    Image: {
        type: String,
        required: true,
    },
}, {
 timestamps: true, //created at , updated at
}
);


const Product = mangoose.model('Product', productSchema);
export default Product;