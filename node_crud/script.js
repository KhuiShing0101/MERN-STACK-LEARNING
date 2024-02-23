const createMenu = document.getElementById("create-menu");

const createMenuBtn = async () => {
    const menuName = document.querySelector("input[name=name]");
    const menuPrice = document.querySelector("input[name=price]");
    const menu = {
        name: menuName.value,
        price: menuPrice.value
    };
        const response = await fetch('http://localhost:3000/menu', {
            method: "POST",
            body: JSON.stringify(menu),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await response.json();

        console.log("data from server", data);
};

createMenu.addEventListener("click", createMenuBtn);
