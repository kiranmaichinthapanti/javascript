let companyName: string= "Digital Edify";

let bank_balance: number = 9000;

let userLoggedIn: boolean = true;

console.log(companyName);

interface IUserInfo {
    id: number;
    name: string;
    location: string;
    email: string;
    phone: string;
    age: number;
    role: string;
    isActive: boolean;
    joinedDate: Date;
    interests: string[];
}

let userInfo: IUserInfo = {
    id: 1,
    name: "Kiran",
    location: "Madhapur",
    email: "kiran@gmail.com",
    phone: "9876543210",
    age: 27,
    role: "Developer",
    isActive: true,
    joinedDate: new Date('2022-05-10'),
    interests: ["coding", "Reading", "Travelling"]
};

console.log(userInfo);

interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    stock: number;
    isAvailable: boolean;
}

const products: Product[] = [
    {
        id: 1,
        name: "Laptop",
        category: "Electronics",
        price: 65000,
        stock: 12,
        isAvailable: true
    },
    {
        id: 2,
        name: "Smartphone",
        category: "Electronics",
        price: 30000,
        stock: 25,
        isAvailable: true
    },
    {
        id: 3,
        name: "Office Chair",
        category: "Furniture",
        price: 8500,
        stock: 5,
        isAvailable: false
    }
];

