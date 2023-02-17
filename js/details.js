const container = document.querySelector(".details-container");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const uuid = params.get("uuid");

const url = "https://valorant-api.com/v1/weapons/" + uuid;



const detailsCard = async () => {
    try {
        const res = await fetch(url);
        const results = await res.json();
        console.log(results)

        const data = results.data
            const detailsImg = document.createElement("img");
            detailsImg.src = data.displayIcon
            const detailsTitle = document.createElement("h1");
            detailsTitle.innerHTML = data.displayName;
            console.log("something")
            const detailsCost = document.createElement("h5");
            detailsCost.innerHTML = `Cost: ${data.shopData.cost}`

            const detailsStats = document.createElement("div");
            detailsStats.innerHTML = `<h5>Equip-time: ${data.weaponStats.equipTimeSeconds}s</h5>
            <h5>Fire-Rate: ${data.weaponStats.fireRate} rps</h5>
            <h5>First Bullet Accuracy: ${data.weaponStats.firstBulletAccuracy}</p>
            <h5>Magazine Size: ${data.weaponStats.magazineSize}</h5>
            <h5>Reload-time: ${data.weaponStats.reloadTimeSeconds}s</h5>`

            const div = document.createElement("div");
            div.classList.add("flexdiv");
            const divTitle = document.createElement("h5");
            const divImg = document.createElement("img");
            const category = document.createElement("h5");
            category.innerHTML = `Category: ${data.shopData.category}`

            divTitle.innerHTML = "Killfeed Icon:"
            divImg.src = data.killStreamIcon

            div.appendChild(divTitle);
            div.appendChild(divImg);
            container.appendChild(detailsTitle);
            container.appendChild(category);
            container.appendChild(detailsImg);
            container.appendChild(detailsCost);
            container.appendChild(detailsStats);
            container.appendChild(div);
        
    }
    catch(error){
        console.log(error)

    }
}
detailsCard();
