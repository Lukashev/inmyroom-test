import productImgPath from '../images/product.png'
import { Product } from '../interfaces/Product'

export const productList: Product[] = [
    {
        id: 1,
        img: productImgPath,
        title: 'Тумба прикроватная Rubus с двумя ящиками',
        rating: 4.8,
        price: 67736,
        discount: 20,
        color: 'Чёрный',
        material: 'Ткань',
        sizes: 'ш. 349 х в. 234 х г. 323',
        mechanism: 'Французская раскладушка',
        seller: 'Огого',
        canAddFavorite: true
    },
    {
        id: 2,
        img: productImgPath,
        title: 'Тумба прикроватная Rubus с двумя ящиками',
        rating: 3.5,
        price: 56720,
        discount: 0,
        color: 'Чёрный',
        material: 'Ткань',
        sizes: 'ш. 349 х в. 234 х г. 323',
        mechanism: 'Французская раскладушка',
        seller: 'Laska Family',
        canAddFavorite: true
    },
    {
        id: 3,
        img: productImgPath,
        title: 'Тумба прикроватная Rubus с двумя ящиками',
        rating: 4.8,
        price: 67736,
        discount: 20,
        color: 'Чёрный',
        material: 'Ткань',
        sizes: 'ш. 349 х в. 234 х г. 323',
        mechanism: 'Французская раскладушка',
        seller: 'Garda',
        canAddFavorite: false
    },
    {
        id: 4,
        img: productImgPath,
        title: 'Тумба прикроватная Rubus с двумя ящиками',
        rating: 4.8,
        price: 37736,
        discount: 20,
        color: 'Чёрный',
        material: 'Ткань',
        sizes: 'ш. 349 х в. 234 х г. 323',
        mechanism: 'Французская раскладушка',
        seller: 'DG Home',
        canAddFavorite: true
    },
    {
        id: 5,
        img: productImgPath,
        title: 'Тумба прикроватная Rubus с двумя ящиками',
        rating: 4.8,
        price: 42564,
        discount: 0,
        color: 'Чёрный',
        material: 'Ткань',
        sizes: 'ш. 349 х в. 234 х г. 323',
        mechanism: 'Французская раскладушка',
        seller: 'Laska Family',
        canAddFavorite: true
    },
    {
        id: 6,
        img: productImgPath,
        title: 'Тумба прикроватная Rubus с двумя ящиками',
        rating: 4.8,
        price: 67736,
        discount: 20,
        color: 'Чёрный',
        material: 'Ткань',
        sizes: 'ш. 349 х в. 234 х г. 323',
        mechanism: 'Французская раскладушка',
        seller: 'DG Home',
        canAddFavorite: true
    }
]

export const productLabelList = [
    'Рейтинг',
    'Цена',
    'Цвет',
    'Материал',
    'Размеры',
    'Механизм',
    'Продавец'
]