const sampleListings = [
    {
        name: "Dell XPS 13",
        description: "Compact and powerful laptop with a stunning display.",
        price: 999.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU7GWtiyPSKHZPQgKB0-kLtaRkLimhiuqIxg&s"
    },
    {
        name: "Apple MacBook Air",
        description: "Lightweight laptop with excellent battery life and performance.",
        price: 1099.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQffKb6ijAtAX1NU3Y6RFF7cQSohA-AZB_qIw&s"
    },
    {
        name: "HP Spectre x360",
        description: "Stylish convertible laptop with premium build quality.",
        price: 1299.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxGhNAJcNlAp0E0hIvEZ2vm42J-MsgrbskuQ&s"
    },
    {
        name: "Lenovo ThinkPad X1 Carbon",
        description: "Business laptop known for its durability and keyboard comfort.",
        price: 1399.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX9hptOijrSNcPpZi2SDqG5b64GYUHlzQb8A&s"
    },
    {
        name: "Asus ZenBook 14",
        description: "Sleek design and great performance in a lightweight package.",
        price: 899.99,
        image: "https://www.google.com/imgres?q=Asus%20ZenBook%2014%20photo&imgurl=https%3A%2F%2Fwww.digitaldreamsjaipur.com%2Fwp-content%2Fuploads%2F2020%2F06%2FASUS-Zenbook-14-UX434FL-A7801T.jpg&imgrefurl=https%3A%2F%2Fwww.digitaldreamsjaipur.com%2Fproduct%2Fasus-zenbook-14-ux434fl-a7801t%2F&docid=hCyLgkPYpqjr3M&tbnid=v2xW2S0BECvVnM&vet=12ahUKEwj39r6vn_qIAxVnRmwGHThKDnEQM3oECB8QAA..i&w=500&h=500&hcb=2&ved=2ahUKEwj39r6vn_qIAxVnRmwGHThKDnEQM3oECB8QAA"
    },
    {
        name: "Microsoft Surface Laptop 4",
        description: "Elegant laptop with a beautiful touch screen and performance.",
        price: 1299.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0UxSpUGaZqJ0JVAHYSOoK5RxBybOSOHoa5Q&s"
    },
    {
        name: "Acer Swift 3",
        description: "Affordable and powerful ultrabook for everyday use.",
        price: 699.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMnd_zdSNZblWycHA8_qXB4F2Id3uwNJtirw&s"
    },
    {
        name: "Razer Blade 15",
        description: "High-performance gaming laptop with a sleek design.",
        price: 1999.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLz4SUl_CXuxKPjZZWsMh-QAJHAi5M23wZ8g&s"
    },
    {
        name: "HP Envy 13",
        description: "Stylish laptop with solid performance and battery life.",
        price: 949.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSadznwTJ-lwSzsBIPmTaoA2cGwURwflVFNGQ&s"
    },
    {
        name: "LG Gram 17",
        description: "Ultra-light laptop with a large display and long battery life.",
        price: 1699.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE14Q4JIhpM4uqQEAkRuAXeoHhS0-0K-QP1w&s"
    },
    {
        name: "Samsung Galaxy Book Pro 360",
        description: "Versatile 2-in-1 laptop with AMOLED display.",
        price: 1399.99,
        image: "https://www.google.com/imgres?q=samsung%20Galaxy%20Book%20Pro%20360%20photo&imgurl=https%3A%2F%2Fwww.sammobile.com%2Fwp-content%2Fuploads%2F2021%2F03%2FSamsung-Galaxy-Book-Pro-360-Laptop.jpg&imgrefurl=https%3A%2F%2Fwww.sammobile.com%2Fnews%2Fgalaxy-book-360-pro-design-live-images-leaked%2F&docid=PL1xaI744BwiMM&tbnid=0pgPVHuVqWUOPM&vet=12ahUKEwjIq5fBoPqIAxW2SmwGHX3GGegQM3oECEwQAA..i&w=1920&h=1080&hcb=2&ved=2ahUKEwjIq5fBoPqIAxW2SmwGHX3GGegQM3oECEwQAA"
    },
    {
        name: "Dell Inspiron 15",
        description: "Reliable laptop for work and play.",
        price: 749.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQybty7NWBnfuC4LSGLE_OkLluxP7u1SPaT_Q&s"
    },
    {
        name: "Apple MacBook Pro 14",
        description: "Powerful laptop designed for professionals.",
        price: 1999.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDvnZU4ouQucE9DRbqLuUJJxrZq_sonlqJFA&s"
    },
    {
        name: "Acer Aspire 5",
        description: "Affordable and well-rounded laptop for everyday tasks.",
        price: 599.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR30kAnoNxM-0RV3xpHReqmJDxURSMVIkh3Zg&s"
    },
    {
        name: "HP Omen 15",
        description: "Gaming laptop with a high refresh rate display.",
        price: 1599.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4DqE5YF0lfdrVPKDYZd8gB2A_jApf_gHxkA&s"
    },
    {
        name: "Lenovo Yoga 9i",
        description: "Premium 2-in-1 laptop with impressive performance.",
        price: 1499.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiwcHTQMfKNu6tTcymABhFTWWIWCe8DwRf6Q&s"
    },
    {
        name: "Asus ROG Zephyrus G14",
        description: "Compact gaming laptop with powerful hardware.",
        price: 1699.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO5ZPwGXeLqJIv6OyF30vSa6Ci-Ukf3hsq1g&s"
    },
    {
        name: "Microsoft Surface Pro 8",
        description: "Versatile 2-in-1 device with tablet and laptop functionality.",
        price: 1099.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPDQAlpdDZnwo3_EZoQ4Xqs-CbQ3Il5KALbA&s"
    },
    {
        name: "HP Pavilion 15",
        description: "Affordable laptop with good performance for daily tasks.",
        price: 649.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzQq2ZMuPOX37QZNxmTNk6VO1cQooWo6TVGA&s"
    },
    {
        name: "Dell Latitude 7420",
        description: "Business laptop with excellent battery life and security features.",
        price: 1399.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOAi0gWY52nUDrM8P-2IQXnqY2tx2OEbiUtg&s"
    },
    {
        name: "Samsung Galaxy Book Go",
        description: "Lightweight laptop for on-the-go productivity.",
        price: 349.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSefpI1zNedhidZHREEFfwqCtqDBt4UPMC5fw&s"
    },
    {
        name: "Acer Chromebook Spin 713",
        description: "Versatile Chromebook with great performance.",
        price: 629.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH9KDb3hJUKdQ9Xl3s4Fe9dlT7L7tEDGw_0Q&s"
    },
    {
        name: "LG Gram 14",
        description: "Lightweight laptop with excellent portability.",
        price: 1399.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqLuXrfRxZw50tpTK0LcWvxAwG3XYfH4ijhQ&s"
    },
    {
        name: "Razer Blade Stealth 13",
        description: "Ultra-portable gaming laptop with stunning graphics.",
        price: 1599.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNzMq-M22btngz55AKvr-sGa2k5bwbER-RSQ&s"
    },
    {
        name: "Microsoft Surface Laptop Studio",
        description: "Innovative laptop designed for creators and professionals.",
        price: 1799.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiGP6yxy4DQDKz4S9oKMX4LT2I5Yw1i1gulw&s"
    },
    {
        name: "Lenovo IdeaPad 3",
        description: "Affordable laptop with decent performance for everyday tasks.",
        price: 479.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST03I7GyqrrwmQeHi7fNhpbJf8nfRJfOzWLA&s"
    },
    {
        name: "Asus VivoBook 15",
        description: "Stylish laptop with a modern design and good performance.",
        price: 599.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa5AU2rOX07h-aBsrmHR8MYXeGpf2A6n7Zzg&s"
    }
];

module.exports = {data: sampleListings};